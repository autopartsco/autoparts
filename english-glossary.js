/* Curated automotive terminology applied after automatic English translation. */
(() => {
  if (window.__autoPartsEnglishGlossaryLoaded) return;
  window.__autoPartsEnglishGlossaryLoaded = true;
  const languageKey = 'auto-parts-language';
  const glossary = [
    ['Repuestos destacados|Featured spare parts', 'Featured auto parts'],
    ['Lo que tu vehículo necesita|What your vehicle needs', 'Parts for your vehicle'],
    ['Encuentra piezas para tu vehículo|Find pieces for your vehicle', 'Find parts for your vehicle'],
    ['Catálogo por sistemas|Catalog by systems|Catalog by system', 'Vehicle parts by system'],
    ['Precios estimados en COP por unidad, kit, par o juego indicado', 'Estimated prices in COP per unit, kit, pair, or set as listed'],
    ['compatibilidad por confirmar por motor, versión y VIN', 'fitment must be confirmed by engine, trim, and VIN'],
    ['valida referencia exacta con VIN|validate exact reference with VIN', 'confirm the exact part number using the VIN'],
    ['se valida referencia exacta con VIN antes del despacho', 'we verify the exact part number against the VIN before dispatch'],
    ['marca y referencia por confirmar', 'brand and part number to be confirmed'],
    ['fabricante según disponibilidad', 'manufacturer subject to availability'],
    ['Alternativa de reposición; validar garantía', 'aftermarket replacement; warranty must be confirmed'],
    ['Precio estimado orientativo · COP · sujeto a cotización y stock', 'Estimated price in COP; subject to quotation and stock'],
    ['unidad / kit según presentación|unit / kit as presented', 'sold individually or as a kit, depending on packaging'],
    ['Foto de referencia del repuesto|Reference photo of the spare part', 'Representative part photo'],
    ['Foto ilustrativa del sistema', 'Illustrative system image'],
    ['gama estimada del vehículo|Estimated vehicle range', 'estimated vehicle class'],
    ['original / OE', 'Genuine / OE'],
    ['Sistema de refrigeración|Refrigeration system', 'Cooling system'],
    ['Frenos|Brakes', 'Braking system'],
    ['Transmisión y embrague|Transmission and clutch', 'Transmission and drivetrain'],
    ['Inyección y alimentación de combustible|Injection and fuel feeding', 'Fuel injection and delivery'],
    ['Distribución y sincronización|Distribution and synchronization', 'Engine timing system'],
    ['Filtros y lubricantes', 'Filters and fluids'],
    ['Escape y admisión|Exhaust and admission', 'Exhaust and intake'],
    ['Carrocería y exterior|Car body and exterior', 'Body and exterior'],
    ['Aire acondicionado y calefacción|Air conditioner and heating', 'Air conditioning and heating'],
    ['Pistones y anillos|Pistons and rings', 'Pistons and piston rings'],
    ['Bielas|Rods', 'Connecting rods'],
    ['Árboles de levas|Cam trees', 'Camshafts'],
    ['Empaquetaduras y juntas|Gaskets and joints', 'Gaskets and seals'],
    ['Retenedores|Retainers', 'Oil seals'],
    ['Casquetes de bancada y biela|Main and connecting rod bearings', 'Main and connecting rod bearing shells'],
    ['Cárter de aceite|Oil pan|Oil sump', 'Oil pan'],
    ['Soportes de motor|Engine mounts', 'Engine mounts'],
    ['Motoventiladores|Motor fans', 'Cooling fans'],
    ['Depósitos de refrigerante|Coolant tanks', 'Coolant reservoirs'],
    ['Mangueras de refrigeración|Cooling hoses', 'Coolant hoses'],
    ['Pastillas de freno|Brake pads', 'Brake pads'],
    ['Discos de freno|Brake discs', 'Brake rotors'],
    ['Campanas|Drums|Brake bells', 'Brake drums'],
    ['Bandas de freno|Brake bands', 'Brake shoes'],
    ['Mordazas y cálipers|Calipers and clamps', 'Brake calipers'],
    ['Bombas de freno|Brake pumps', 'Brake master cylinders'],
    ['Servofrenos|Brake boosters', 'Brake boosters'],
    ['Líquido de frenos|Brake liquid', 'Brake fluid'],
    ['Espirales|Spirals', 'Coil springs'],
    ['Tijeras o brazos de suspensión|Suspension arms', 'Control arms'],
    ['Terminales de dirección|Steering terminals', 'Tie rod ends'],
    ['Axiales|Axial rods', 'Inner tie rods'],
    ['Copelas|Top mounts', 'Strut mounts'],
    ['Barras estabilizadoras|Stabilizer bars', 'Sway bars'],
    ['Cremalleras de dirección|Steering racks', 'Steering racks'],
    ['Bombas hidráulicas|Hydraulic pumps', 'Power steering pumps'],
    ['Guardapolvos|Dust covers', 'Dust boots'],
    ['Prensas|Presses', 'Clutch pressure plates'],
    ['Balineras de embrague|Clutch bearings', 'Clutch release bearings'],
    ['Cilindros maestros y auxiliares|Master and auxiliary cylinders', 'Clutch master and slave cylinders'],
    ['Tricetas|Tripods', 'Tripod joints'],
    ['Semiejes|Half shafts', 'CV axles'],
    ['Juntas homocinéticas|Homokinetic joints', 'Constant-velocity (CV) joints'],
    ['Crucetas|Cross joints', 'Universal joints'],
    ['Retenedores de caja|Gearbox retainers', 'Transmission oil seals'],
    ['Componentes internos de caja|Internal gearbox components', 'Internal transmission components'],
    ['Motores de arranque|Starter motors', 'Starter motors'],
    ['Bobinas|Coils', 'Ignition coils'],
    ['Cables de alta|High cables', 'Ignition wires'],
    ['Computadoras ECU|ECU computers', 'Engine control units (ECUs)'],
    ['Sensores MAP|MAP sensors', 'Manifold absolute pressure (MAP) sensors'],
    ['Sensores MAF|MAF sensors', 'Mass airflow (MAF) sensors'],
    ['Sensores TPS|TPS sensors', 'Throttle position (TPS) sensors'],
    ['Sensores CKP y CMP|CKP and CMP sensors', 'Crankshaft and camshaft position sensors'],
    ['Sensores ECT|ECT sensors', 'Engine coolant temperature (ECT) sensors'],
    ['Bombas de gasolina|Gasoline pumps', 'Fuel pumps'],
    ['Flotadores|Floats', 'Fuel level senders'],
    ['Rieles de inyección|Injection rails', 'Fuel rails'],
    ['Cuerpos de aceleración|Throttle bodies', 'Throttle bodies'],
    ['Correas de distribución|Distribution belts', 'Timing belts'],
    ['Cadenas de distribución|Distribution chains', 'Timing chains'],
    ['Kits de distribución|Distribution kits', 'Timing belt or chain kits'],
    ['Guías de cadena|Chain guides', 'Timing chain guides'],
    ['Variadores de fase VVT|VVT phase shifters', 'Variable valve timing (VVT) actuators'],
    ['Filtros de aceite|Oil filters', 'Engine oil filters'],
    ['Filtros de aire|Air filters', 'Engine air filters'],
    ['Filtros de cabina|Cabin filters', 'Cabin air filters'],
    ['Aceites de caja|Gear oils|Transmission oils', 'Transmission fluids'],
    ['Múltiples de admisión|Intake manifolds', 'Intake manifolds'],
    ['Múltiples de escape|Exhaust manifolds', 'Exhaust manifolds'],
    ['Silenciadores|Silencers', 'Mufflers'],
    ['Resonadores|Resonators', 'Exhaust resonators'],
    ['Farolas delanteras|Front headlights', 'Headlamps'],
    ['Stops traseros|Rear stops', 'Tail lamps'],
    ['Exploradoras|Fog lights', 'Fog lamps'],
    ['Direccionales|Turn signals', 'Turn signal lamps'],
    ['Parachoques delanteros y traseros|Front and rear bumpers', 'Front and rear bumpers'],
    ['Capós|Hoods', 'Hoods'],
    ['Guardabarros|Fenders', 'Fenders'],
    ['Baúles|Trunks', 'Trunk lids'],
    ['Espejos retrovisores|Rearview mirrors', 'Side mirrors'],
    ['Tapetes|Mats', 'Floor mats'],
    ['Perillas de cambios|Gear knobs', 'Shift knobs'],
    ['Motores de limpiaparabrisas|Wiper motors', 'Windshield wiper motors'],
    ['Brazos y plumillas|Arms and blades', 'Wiper arms and blades'],
    ['Filtros deshidratadores|Dehydrator filters', 'A/C receiver-driers'],
    ['Ventiladores de cabina|Cabin fans', 'HVAC blower motors'],
    ['Resistencias de ventilador|Fan resistors', 'Blower motor resistors'],
    ['Bocinas|Horns', 'Horns'],
    ['Sensores de parqueo|Parking sensors', 'Parking sensors'],
    ['Cámaras de reversa|Reverse cameras', 'Backup cameras'],
    ['Confirmar compatibilidad|Confirm compatibility', 'Check vehicle fitment'],
    ['Solicitar atención B2B|Request B2B service', 'Request trade account support'],
    ['Escribe por WhatsApp|Write on WhatsApp', 'Chat with us on WhatsApp'],
    ['Asistente virtual|Virtual assistant', 'Virtual parts assistant']
  ];
  const fixNode = node => {
    if (!node || node.nodeType !== Node.TEXT_NODE || node.parentElement?.closest('script,style,noscript,textarea')) return;
    let value = node.nodeValue;
    for (const [from, to] of glossary) {
      const pattern = new RegExp('(^|[^A-Za-z0-9])(?:' + from + ')(?![A-Za-z0-9])', 'gi');
      value = value.replace(pattern, (_, prefix) => prefix + to);
    }
    if (value !== node.nodeValue) node.nodeValue = value;
  };
  const apply = () => {
    if (localStorage.getItem(languageKey) !== 'en') return;
    document.documentElement.lang = 'en';
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) fixNode(walker.currentNode);
    for (const el of document.querySelectorAll('[alt],[title],[placeholder],[aria-label]')) {
      for (const attr of ['alt','title','placeholder','aria-label']) if (el.hasAttribute(attr)) {
        const value = document.createTextNode(el.getAttribute(attr));
        fixNode(value);
        el.setAttribute(attr, value.nodeValue);
      }
    }
  };
  const activate = () => {
    if (localStorage.getItem(languageKey) !== 'en') return;
    apply();
    window.__autoPartsEnglishObserver?.disconnect();
    window.__autoPartsEnglishObserver = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === 'characterData') fixNode(record.target);
        for (const node of record.addedNodes || []) {
          if (node.nodeType === Node.TEXT_NODE) fixNode(node);
          else if (node.nodeType === Node.ELEMENT_NODE) {
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
            while (walker.nextNode()) fixNode(walker.currentNode);
          }
        }
      }
    });
    window.__autoPartsEnglishObserver.observe(document.body, {subtree:true, childList:true, characterData:true});
  };
  document.addEventListener('change', event => {
    if (event.target?.matches('.language-switch select') && event.target.value === 'en') setTimeout(activate, 1800);
  });
  if (localStorage.getItem(languageKey) === 'en') setTimeout(activate, 2200);
})();
