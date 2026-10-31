# Guardado automático de catálogos en GitHub

El sitio está en GitHub Pages, que solo sirve archivos. Este Worker actúa como intermediario para guardar `catalog-edits.json` en el repositorio `autopartsco/autoparts`. El token de GitHub se conserva únicamente como secreto de Cloudflare.

## 1. Crear un token de GitHub

Crea un fine-grained personal access token con estos permisos:

- Repository access: solo `autopartsco/autoparts`.
- Repository permissions: `Contents: Read and write`.

No lo pegues en el sitio ni lo guardes en un archivo del repositorio.

## 2. Desplegar el Worker

Desde una terminal con Node.js instalado, en la carpeta `cloudflare-worker`:

```powershell
npx wrangler login
npx wrangler deploy
```

Wrangler mostrará la URL pública del Worker, normalmente con formato `https://autoparts-catalog-save.<cuenta>.workers.dev`.

## 3. Guardar los secretos en Cloudflare

En la terminal, crea una clave aleatoria para el editor y consérvala para usarla en el sitio:

```powershell
[byte[]]$buffer = New-Object byte[] 32
[Security.Cryptography.RandomNumberGenerator]::Create().GetBytes($buffer)
$editorKey = [Convert]::ToBase64String($buffer)
$editorKey
```

Carga cada secreto. Wrangler pedirá el valor de forma interactiva:

```powershell
npx wrangler secret put GITHUB_TOKEN
npx wrangler secret put EDITOR_KEY
```

Pega el token de GitHub en el primer prompt y el valor de `$editorKey` en el segundo. No publiques ninguno de los dos.

## 4. Conectar el sitio

1. Abre AUTO PARTS e inicia sesión.
2. Abre el catálogo del vehículo que vas a editar.
3. Pulsa **Configurar guardado GitHub**.
4. Pega la URL del Worker y la misma clave configurada como `EDITOR_KEY`.
5. Pulsa **Activar edición** y guarda un repuesto.

Cada guardado actualizará `catalog-edits.json` mediante un commit en la rama `main`. La página pública aplica esos cambios cuando GitHub Pages termina de publicar la versión nueva.

El editor también conserva una copia local y ofrece exportar/importar los cambios. El token de GitHub nunca se carga en el navegador.

## Alcance de escritura

El Worker solo acepta cambios para `catalog-edits.json` en el repositorio indicado. Solo permite editar nombre, descripción, imagen y los tres precios del repuesto. Rechaza otros archivos y otros campos.
