# MICRO_AUDITORIA_FACTORES_AVANZADOS_KAIROS

Fecha: 2026-05-08  
Ámbito auditado: `interpreter_engine.js`, `engine_v483_final.js`, `transit_engine.js`, `planetary_engine.js`, `chart_engine.js`, `aspects_engine.js`, `natal_persistence_helper.js`, `v2_layer_transits.js`

## Factores avanzados

| Factor | ¿Existe en código? | ¿Se calcula astronómicamente? | ¿Disponible en contexto del intérprete? | ¿Se usa narrativamente? | Variable / función exacta | Línea aprox. |
|---|---|---|---|---|---|---|
| Urano | Sí | Sí | Parcial | No verificado en HOY/SEMANA/MES/AÑO/MATRIX | `planetary_engine.PLANET_IDS.URANO`, `CURRENT_TRANSITS['Urano']`, `transit_context.planets` | `planetary_engine.js:26`, `transit_engine.js:18-27`, `engine_v483_final.js:1978-1983` |
| Neptuno | Sí | Sí | Parcial | No verificado en HOY/SEMANA/MES/AÑO/MATRIX | `CURRENT_TRANSITS['Neptuno']`, `transit_context.planets` | `transit_engine.js:18-27`, `engine_v483_final.js:1978-1983` |
| Plutón | Sí | Sí | Parcial | No verificado en HOY/SEMANA/MES/AÑO/MATRIX | `CURRENT_TRANSITS['Plutón']`, `transit_context.planets` | `transit_engine.js:20-27`, `engine_v483_final.js:1978-1983` |
| Quirón / Chiron | No | No verificado | No | No | No encontrado por búsqueda local | no encontrado |
| Lilith | Sí | Sí, como `MEAN_APOG` | No verificado | No | `PLANET_IDS.MEAN_APOG // Lilith Media` | `planetary_engine.js:32` |
| Nodos lunares / Nodo Norte / Nodo Sur | Parcial | Sí en librería astronómica general; no verificado en motor KAIROS | No | No | `MEAN_NODE` aparece en render/chart; `SearchMoonNode` en `astronomy.js` pero no integrado al engine narrativo | `chart_650_v1.js:204`, `astronomy.js:125,242` |
| Aspectos planetarios | Sí | Sí | No verificado en `totalShadowContext` del intérprete | No directos; solo activación “por signo” en HOY | `calculateAspects()`, `chart_engine` devuelve `aspects`, `natalActivationType` | `aspects_engine.js:24-69`, `chart_engine.js:35-37,127`, `interpreter_engine.js:933-941` |
| Tránsitos exactos | Sí, como noción de orb en tránsito/natal | Sí | Parcial | No directos en las 5 vistas auditadas | `transit_engine` compara con `orb = 3` y genera coincidencias | `transit_engine.js:162,207-225` |
| `hasExactTransit()` o equivalente | No con ese nombre | No | No | No | No encontrado; equivalente parcial: comparación por `orb` en `transit_engine.js` | `transit_engine.js:162,207-225` |

## Contexto real disponible para el intérprete

| Dato | ¿Existe en contexto? | Nombre exacto | Línea aprox. |
|---|---|---|---|
| Tránsitos planetarios actuales | Sí | `transit_context.planets` | `engine_v483_final.js:1978-1983` |
| Signo lunar de tránsito | Sí | `transit_context.moon_transit_sign` | `engine_v483_final.js:1978-1983` |
| Signo solar de tránsito | Sí | `transit_context.sun_transit_sign` | `engine_v483_final.js:1978-1983` |
| Planetas natales | Sí | `natal_context.planets` | `engine_v483_final.js:1966-1969` |
| Casas natales | Sí | `natal_context.houses` | `engine_v483_final.js:1966-1969` |
| Casa profectada | Sí | `annual_context.profection_house` | `engine_v483_final.js:1954` |
| Signo profectado | Sí | `annual_context.profection_sign` | `engine_v483_final.js:1955` |
| Señor del Año | Sí | `annual_context.lord_of_year` | `engine_v483_final.js:1956` |

## Uso narrativo real en `interpreter_engine.js`

| Factor | Uso narrativo real | Variable / función exacta | Línea aprox. |
|---|---|---|---|
| Señor del Año | Sí, en AÑO/HOY/SEMANA/MES/MATRIX | `const lord = context.annual_context?.lord_of_year || 'Sol'` | `interpreter_engine.js:562,748,1024,1207,1586` |
| Condición natal del Señor | Sí, en HOY/SEMANA/MES | `_deriveLordNatalCondition(lord, context)` | `interpreter_engine.js:997-1012`, usos en `752-765`, `1028`, `1212` |
| Luna en tránsito | Sí | `moon_transit_sign`, `moon_sequence`, `moonHouse` | `interpreter_engine.js:749,951,1027,1213,1587` |
| Planeta del día | Sí | `context.temporal_context?.day_planet` | `interpreter_engine.js:747` |
| Urano/Neptuno/Plutón | No verificado como factor narrativo directo | Solo via `transit_context.planets` / cálculos globales | no verificado |
| Lilith | No | No encontrada en ensamblaje narrativo | no encontrado |
| Nodos | No | No encontrados en ensamblaje narrativo | no encontrado |
| Aspectos exactos | No | No hay consumo narrativo de `aspects` | no encontrado |

## Nombre exacto del campo del Señor del Año

| Nivel | Nombre exacto | Línea aprox. |
|---|---|---|
| Contexto global | `annual_context.lord_of_year` | `engine_v483_final.js:1956` |
| Variable local del intérprete | `lord` | `interpreter_engine.js:562,748,1024,1207,1586` |
| Datos de biblioteca | `lordData` | `interpreter_engine.js:568,795,1039,1226` |
| Estado previo en engine de producto | `lordOriginal` | `engine_v483_final.js:1924,1956,2194,2541,2988` |

