const OWNER = 'autopartsco';
const REPOSITORY = 'autoparts';
const BRANCH = 'main';
const FILE_PATH = 'catalog-edits.json';
const ALLOWED_ORIGIN = 'https://autopartsco.github.io';
const GITHUB_API_VERSION = '2026-03-10';

function response(body, status, origin) {
  return new Response(status === 204 ? null : JSON.stringify(body), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'access-control-allow-origin': origin,
      'access-control-allow-methods': 'GET, POST, OPTIONS',
      'access-control-allow-headers': 'Authorization, Content-Type',
      'access-control-max-age': '86400',
      'vary': 'Origin'
    }
  });
}

function validEdits(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const entries = Object.entries(value);
  if (entries.length > 12000) return false;
  for (const [key, item] of entries) {
    if (!key || key.length > 512 || ['__proto__', 'prototype', 'constructor'].includes(key)) return false;
    if (!item || typeof item !== 'object' || Array.isArray(item)) return false;
    if (typeof item.name !== 'string' || item.name.length > 100) return false;
    if (typeof item.description !== 'string' || item.description.length > 600) return false;
    if (typeof item.image !== 'string' || item.image.length > 1200) return false;
    if (item.image && !(/^(https:\/\/|assets\/)/i).test(item.image)) return false;
    if (!item.prices || typeof item.prices !== 'object' || Array.isArray(item.prices)) return false;
    for (const tier of ['original', 'premium', 'economica']) {
      const price = item.prices[tier];
      if (typeof price !== 'number' || !Number.isFinite(price) || price < 0 || price > 500000000) return false;
    }
    if (Object.keys(item).some(field => !['name', 'description', 'image', 'prices'].includes(field))) return false;
  }
  return true;
}

async function githubRequest(path, env, options = {}) {
  return fetch('https://api.github.com/repos/' + OWNER + '/' + REPOSITORY + '/contents/' + path, {
    ...options,
    headers: {
      'accept': 'application/vnd.github+json',
      'authorization': 'Bearer ' + env.GITHUB_TOKEN,
      'x-github-api-version': GITHUB_API_VERSION,
      'user-agent': 'AUTO-PARTS-Catalog-Worker',
      ...(options.headers || {})
    }
  });
}

function decodeGithubFile(content) {
  const binary = atob(String(content || '').replace(/\s/g, ''));
  const bytes = Uint8Array.from(binary, character => character.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
}

function encodeBase64(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let offset = 0; offset < bytes.length; offset += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
  }
  return btoa(binary);
}

async function readCatalog(env) {
  const result = await githubRequest(FILE_PATH + '?ref=' + BRANCH, env);
  if (!result.ok) throw new Error('GitHub read failed: ' + result.status);
  const file = await result.json();
  if (!file.sha || !file.content) throw new Error('GitHub catalog file unavailable');
  return { sha: file.sha, edits: decodeGithubFile(file.content) };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('origin') || '';
    if (origin !== ALLOWED_ORIGIN) return new Response('Forbidden origin', { status: 403 });
    if (request.method === 'OPTIONS') return response({}, 204, origin);
    if (!['GET', 'POST'].includes(request.method)) return response({ error: 'Method not allowed' }, 405, origin);

    const authorization = request.headers.get('authorization') || '';
    const presentedKey = authorization.startsWith('Bearer ') ? authorization.slice(7) : '';
    if (!env.EDITOR_KEY || !env.GITHUB_TOKEN || presentedKey !== env.EDITOR_KEY) {
      return response({ error: 'Unauthorized' }, 401, origin);
    }

    try {
      if (request.method === 'GET') {
        const current = await readCatalog(env);
        return response({ edits: current.edits }, 200, origin);
      }

      const raw = await request.text();
      if (raw.length > 1500000) return response({ error: 'Payload too large' }, 413, origin);
      const payload = JSON.parse(raw);
      if (!validEdits(payload.edits)) return response({ error: 'Invalid catalog edits' }, 400, origin);

      const current = await readCatalog(env);
      const content = encodeBase64(JSON.stringify(payload.edits, null, 2) + '\n');
      const saved = await githubRequest(FILE_PATH, env, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          message: 'Save AUTO PARTS catalog edits',
          content,
          sha: current.sha,
          branch: BRANCH
        })
      });
      if (!saved.ok) {
        const detail = await saved.json().catch(() => ({}));
        return response({ error: saved.status === 409 ? 'Catalog changed in another session; reload and retry.' : 'GitHub could not save the catalog.', status: saved.status }, saved.status === 409 ? 409 : 502, origin);
      }
      const commit = await saved.json();
      return response({ ok: true, commit: commit.commit?.sha || '' }, 200, origin);
    } catch (error) {
      return response({ error: 'Catalog synchronization failed.' }, 502, origin);
    }
  }
};
