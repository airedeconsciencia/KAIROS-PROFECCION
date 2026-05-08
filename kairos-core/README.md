# KAIROS CORE | Motor Astronómico de Precisión (v0.5.0)

Este paquete contiene el núcleo astronómico de KAIROS, basado en **Swiss Ephemeris** y **WebAssembly**. Está diseñado para ser un módulo estable, validado y reutilizable en cualquier entorno (web, servidor, API).

## 🚀 Estructura del Paquete

- `planetary_engine.js`: Motor canónico para el cálculo de posiciones planetarias.
- `ascendant_engine.js`: Motor para el cálculo de Ascidente y gestión temporal IANA.
- `houses_engine.js`: Motor para el cálculo de cúspides de casas (Default: Placidus).
- `wasm/`: Binarios y cargadores del motor Swiss Ephemeris.
- `ephe/`: Archivos de efemérides (.se1) para alta precisión lunar y planetaria.
- `lab/`: Herramientas de validación y laboratorio de pruebas.

## 🛠️ Integración

Para usar el núcleo en una aplicación web, incluya los siguientes módulos:

```html
<!-- Librerías de soporte -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.4.4/luxon.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/astronomy-engine@2.1.19/astronomy.browser.min.js"></script>

<!-- Núcleo KAIROS -->
<script src="kairos-core/planetary_engine.js"></script>
<script src="kairos-core/ascendant_engine.js"></script>
<script src="kairos-core/houses_engine.js"></script>

<!-- Cargador WASM (Tipo Module) -->
<script type="module">
    import SwissEph from '/kairos-core/wasm/swisseph_wrapper.js';
    window.SwissEphClass = SwissEph;
    
    // Inicialización del motor nativo
    const swe = new SwissEph();
    window.swisseph_native = swe;
    window.dispatchEvent(new Event('swisseph-ready'));
</script>
```

## 🔭 Uso

### Cálculo de Planetas
```javascript
const pos = await getPlanetaryPositions('1973-05-29', '07:30', 39.88, 4.26, 'Europe/Madrid');
console.log(pos.positions.SUN);
```

### Cálculo de Casas (Placidus)
```javascript
const houseData = await getHousesAndAngles('1973-05-29', '07:30', 39.88, 4.26, 'Europe/Madrid', 'P');
console.log(houseData.ascendant);
console.log(houseData.houses); // Cúspides 1-12
```

## 📜 Estado: CONGELADO / ESTABLE
Este núcleo ha sido validado contra cartas de referencia (1973, 1978, 2024) y se considera la base definitiva de KAIROS.
