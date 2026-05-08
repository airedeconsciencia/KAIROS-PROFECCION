# L2_1A_AUDITORIA_ENGINE_MODULACION

Fecha: 2026-05-08  
Ámbito auditado: `interpreter_engine.js` actual del workspace + `engine_v483_final.js` + `SERIE_550_v2_Arquitectura_Motor_KAIROS.md`  
No verificado en este workspace: `interpreter_engine_v650.5.64.js`, `500_4_SISTEMA_LENGUAJE_KAIROS.md`, `501_DIFERENCIACION_ENTRE_MODULOS.md`, `SERIE_560_Distribucion_Interpretativa_KAIROS.md`, `510_MODULACION_NARRATIVA_KAIROS.md`, `KAIROS_ROADMAP_Y_AUDITORIA.md`, `D42_ARQUITECTURA_SEMANA.md`

## A. Pipeline real actual

| Etapa | Ubicación | Estado real |
|---|---|---|
| Cálculo/contexto | `engine_v483_final.js:1763-1983` | Construye `window.getActiveKairosContext()` y `window.totalShadowContext` con `user_context`, `natal_context`, `annual_context`, `temporal_context`, `transit_context`. |
| Selección por vista | `interpreter_engine.js:508-539` | `processRequest()` enruta a `generateAnnualReading`, `generateDailyReading`, `generateWeeklyReading`, `generateMonthlyReading`, `generateMatrixReading`. |
| Carga de biblioteca | `interpreter_engine.js:695-732` | `fetchDocumentsFromLibrary(docIds)` lee `db.collection('kairos_library').doc(docId).get()` y usa `_docCache` en memoria. |
| Ensamblaje narrativo | `interpreter_engine.js:544-1688` | Cada vista devuelve `content` estructurado; HOY usa `applyAssemblyRules()` (`737-990`). |
| Filtro FREE/PREMIUM | `engine_v483_final.js:1971`, `interpreter_engine.js:738-741`, `866-912` | El contexto ya envía `subscription_level`; el intérprete abre ramas narrativas según `FREE` vs no `FREE`. |
| Render final UI | `engine_v483_final.js:2185-2968`, `3533-4851` | La UI llama al intérprete, cachea por vista y renderiza con funciones específicas por módulo. |

Conclusión: el pipeline actual es `contexto -> intérprete -> content estructurado -> render UI`; no es un generador directo de strings sueltos desde la vista.

## B. Factores reales calculados

| Módulo | Factores usados realmente | Evidencia |
|---|---|---|
| AÑO | casa profectada, signo profectado, Señor del Año, ascendente, filtro de ascendente | `interpreter_engine.js:552-560`, `573-619` |
| HOY | casa profectada, Señor del Año, condición natal del Señor derivada, Luna en tránsito, casa lunar, planeta del día, fase lunar, ascendente | `interpreter_engine.js:742-783`, `866-912` |
| SEMANA | Señor del Año, casa profectada, condición natal del Señor derivada, `moon_sequence`, activación de casa profectada, regente del día | `interpreter_engine.js:1024-1058`, `1098-1169` |
| MES | Señor del Año, casa profectada, signo profectado, condición natal del Señor derivada, Luna en tránsito, hotspots mensuales, ingresos, lunaciones, posible resonancia natal por signo | `interpreter_engine.js:1211-1252`, `1366-1503` |
| MATRIX | Señor del Año, casa lunar, Luna por signo, `target_need`, toolkit de `matrix_engine`, intensidad integrada | `interpreter_engine.js:1586-1627`, `1526-1572`, `1694-1711` |

Factores presentes en el engine actual:
- Sol: sí (`sun_transit_sign`, ingresos solares, planeta del día)
- Luna: sí (`moon_transit_sign`, `moon_sequence`, lunaciones)
- Mercurio: sí, vía biblioteca/ingresos/tabla de tonos
- Venus: sí, vía biblioteca/tabla de tonos
- Marte: sí, vía biblioteca/tabla de tonos
- Júpiter: sí, vía biblioteca/tabla de tonos
- Saturno: sí, vía biblioteca/tabla de tonos
- Aspectos: no verificado en `interpreter_engine.js` como factor narrativo directo
- Fases lunares: sí (`230_fases_lunares`)
- Planeta del día: sí (`250_planeta_del_dia`, `temporal_context.day_planet`)
- Profección anual: sí
- Señor del Año: sí

Factores no encontrados en el engine auditado:
- Quirón: no encontrado por búsqueda local
- Lilith: no encontrado por búsqueda local
- Nodos: no encontrado por búsqueda local

Conclusión: el engine actual trabaja con profección, lord, Luna, planeta del día y tránsitos/ingresos; no debe asumirse soporte narrativo para Quirón, Lilith o Nodos.

## C. Estructura de bloques

| Elemento | Estado real | Evidencia |
|---|---|---|
| Strings concatenados | Sí, pero dentro de objetos de salida | Ej. `relato`, `resonanciaPersonal`, `climaFrase`, `weekly_intro` |
| Bloques narrativos estructurados | Sí | `content` por vista en `573-619`, `973-989`, `1171-1181`, `1327-1352`, `1612-1627` |
| Metadata por bloque | Parcial | `future_signals`, `weekly_signals`, `monthlySignals` usan `enabled`, `active`, `narrative`; hitos usan `intensity`, `shortText` |
| Metadata global de lectura | Sí | `buildOutput()` devuelve `metadata.view`, `engine`, `timestamp`, `latency_ms`, `status` en `1716-1726` |

Metadata narrativa encontrada:
- intensidad: sí (`intensity`, `intensity_status`, `latency_ms`)
- categoría: parcial (`target_need`, `view`)
- prioridad: no encontrada como campo estable
- tags: no encontrados
- tipo de bloque: parcial (`enabled`, `active`, `phase`, `eventType`, `planet`, `type`)

Conclusión: el engine ya no es solo concatenación libre; produce objetos narrativos con metadata parcial, suficiente para insertar una modulación sin rehacer toda la salida.

## D. Estado de sesión

| Elemento | Estado | Evidencia |
|---|---|---|
| `sessionState` | No encontrado | búsqueda local sin coincidencias |
| `userSession` | No encontrado | búsqueda local sin coincidencias |
| Cache de documentos | Sí | `_docCache` en `interpreter_engine.js:701-722` |
| Cache de lecturas por vista | Sí | `state.cache.interpretations` en `engine_v483_final.js:443`, `2020-2031`, `2181-2967` |
| Historial de bloques usados | No encontrado | no hay registro de bloques narrativos previos en intérprete |
| Memoria entre bloques | No | cada lectura se recompone desde contexto + Firestore + caché de docs; no hay memoria narrativa interbloque |

Conclusión: existe caché técnica, pero no estado narrativo persistente ni memoria de bloques ya usados.

## E. Punto de inserción de `applyNarrativeModulation()`

| Vista | Punto técnico más cercano | Observación |
|---|---|---|
| HOY | `applyAssemblyRules()` `737-990` | Es el ensamblador central de diario; la modulación tendría sentido después de construir el contenido base y antes de `return` en `973-989`. |
| AÑO | `generateAnnualReading()` `544-628` | El contenido se compone directamente; no usa `applyAssemblyRules()`. |
| SEMANA | `generateWeeklyReading()` `1014-1190` | El contenido se compone directamente. |
| MES | `generateMonthlyReading()` `1196-1361` | El contenido se compone directamente. |
| MATRIX | `generateMatrixReading()` `1579-1636` | El contenido se compone directamente. |

Riesgo de acoplamiento:
- `applyAssemblyRules()` hoy solo cubre HOY.
- Un modulador global requeriría operar sobre el `content` estructurado, no sobre strings ya renderizados.
- El render UI en `engine_v483_final.js` ya espera shapes estables (`weekly_intro`, `mainConcept`, `psicologico_frase`, `future_signals`, etc.).

Conclusión: el encaje técnico natural es post-ensamblaje y pre-`buildOutput()`, no en el render UI.

## F. Mapa de compatibilidad 510 vs engine

Nota: `510_MODULACION_NARRATIVA_KAIROS.md` no existe en este workspace. La compatibilidad se evalúa solo contra el objetivo descrito de “modulación narrativa” y contra `SERIE_550_v2_Arquitectura_Motor_KAIROS.md`.

| Regla/objetivo observable | Estado | Observaciones |
|---|---|---|
| Modulación posterior al cálculo | Compatible | El engine ya separa contexto/cálculo de ensamblaje narrativo. |
| Modulación por capas temporales | Compatible parcial | Las vistas están separadas, pero cada una compone distinto; no hay hook común salvo después de `content`. |
| Prioridad lord/profección sobre Luna | Compatible parcial | HOY ya fue corregido a usar `casaProfectada` como base (`780`), pero MATRIX sigue centrada en `moonHouse` (`1587-1598`). |
| Uso de condición natal del Señor | Compatible | Ya existe `_deriveLordNatalCondition()` en `997-1012` y se usa en HOY/SEMANA/MES. |
| Modulación por intensidad | Compatible parcial | Hay intensidad en hitos y matrix, pero no una taxonomía unificada por todos los bloques. |
| Modulación con metadata rica por bloque | Requiere refactor previo | Faltan `priority`, `tags` y `block_type` consistentes. |
| Sistema anticipatorio/premium Serie 550 | Compatible parcial | `SERIE_550...` pide profundidad por activación; el engine actual lo hace parcialmente en HOY/SEMANA/MES, no de forma homogénea. |
| No solapamiento entre módulos | Compatible parcial | El engine separa vistas, pero `engine_v483_final.js` aún añade copy narrativo y premium fuera del intérprete. |

Conclusión: con el código actual, la modulación encaja mejor como una capa sobre `content` ya estructurado. La compatibilidad documental completa no es verificable porque faltan los documentos 500/501/510/560/D42 en el workspace.

## G. Lógica narrativa fuera del interpreter

| Ubicación | Qué hace | Riesgo |
|---|---|---|
| `engine_v483_final.js:3533-3576` | `renderAnnualNarrative()` transforma `content` en copy/UI | Bajo si solo renderiza |
| `engine_v483_final.js:3584-3746` | `renderWeeklyNarrative()` usa `weekly_intro`, `tramos`, `weekly_signals` | Medio: depende del shape exacto |
| `engine_v483_final.js:3751-4145` | `renderMonthlyNarrative()` compone texto adicional desde `mainConcept`, `psicologico_frase`, `conexion_anual`, `hitos` | Alto: hay semántica de lenguaje fuera del intérprete |
| `engine_v483_final.js:4150-4348` | `renderDailyNarrative()` añade copy técnico y fallback visual para `future_signals` | Medio |
| `engine_v483_final.js:4349-4850` | `renderMatrixNarrative()` mezcla contenido del intérprete con premiumData y copy de producto | Alto |
| `engine_v483_final.js:4571+` | Bloque premium Matrix genera narrativa adicional | Alto |

Conclusión: la lógica narrativa no vive solo en el intérprete. MES y MATRIX tienen capas de lenguaje relevantes en `engine_v483_final.js`.

## H. Fallback existente

| Caso | Estado | Evidencia |
|---|---|---|
| Falta documento Firestore | Sí | `fetchDocumentsFromLibrary()` devuelve `null` por doc y no rompe; `buildOutput.status` puede quedar `PARTIAL_READY` (`695-732`, `1716-1726`) |
| Falta campo narrativo dentro del doc | Sí | Uso sistemático de `|| {}` y `|| 'texto base'` en todas las vistas; ej. HOY `785-818`, SEMANA `1037-1044`, MES `1237-1244` |
| Falta contenido premium/señales | Parcial | `enabled: false` o `active: false`/blank narrative en SEMANA y MES; no rompe render |
| Falta datos natales del lord | Parcial | `_deriveLordNatalCondition()` devuelve `null`; ramas posteriores degradan a frases seguras (`752-765`, `1024-1035`, `1217-1220`) |
| Acoplamiento duro a Firestore | Sí | Acceso directo a rutas como `docs['220...']?.contenido?.catalogo`, `lordData.clima_psicologico`, `houseData.psicologico`, `fasesDoc`, `planetas` |

Campos Firestore acoplados directamente al engine:
- `contenido.catalogo`
- `contenido.planetas`
- `contenido.fases`
- `clima_psicologico`
- `desequilibrios`
- `psicologico`
- `nombre`
- `area`
- `accion`
- `potencial`
- `keyword`
- `interpretacion`

Conclusión: sí existe fallback suficiente para evitar ruptura, pero el engine está acoplado a nombres de campo narrativos concretos.

## I. Riesgos detectados

| Riesgo | Nivel | Evidencia |
|---|---|---|
| Duplicación documental | Importante | Faltan varios docs pedidos y solo existe `SERIE_550...`; no puede verificarse alineación completa |
| Hardcoding semántico | Crítico | Normalizaciones y copy adicional viven en `interpreter_engine.js` y `engine_v483_final.js` (`820-864`, `3751-4145`, `4349-4850`) |
| Mezcla entre módulos | Importante | Cada vista compone distinto; no existe hook único para modular todas |
| Saturación narrativa | Importante | MES y MATRIX acumulan texto en engine + render |
| Dependencia circular conceptual | Menor | No hay circularidad técnica visible, pero sí dependencia fuerte entre shape del intérprete y renderizadores |
| Ausencia de fallback | Menor | No parece crítica; hay fallbacks frecuentes |
| Acoplamiento excesivo a Firestore | Importante | Rutas y nombres de campo están hardcodeados en el intérprete |
| Divergencia de versiones internas | Menor | Cabecera `v0.6.0`, metadata `v0.5.2`, log final `v0.5.2` en `1718-1734` |

Conclusión: el principal riesgo técnico no es de cálculo sino de acoplamiento semántico entre intérprete, biblioteca y renderizadores.

## J. Recomendación de fases de implementación

Solo derivada del análisis:

1. Fase de compatibilidad: fijar el contrato de salida `content` por vista y detectar qué campos no pueden cambiar por dependencia de render.
2. Fase de modulación: insertar la modulación sobre objetos `content`, no sobre strings ya renderizados.
3. Fase de limpieza: concentrar en el intérprete la semántica que hoy sigue en `engine_v483_final.js`, empezando por MES y MATRIX.

Conclusión: la implementación futura debería tratar la modulación como capa posterior al ensamblaje base y anterior al render, con validación estricta del shape actual por vista.

## K. Auditoría Sprint 510.5 (Regulación Emocional Determinista)

| Regla/objetivo observable | Estado real | Observaciones |
|---|---|---|
| Gating Determinista | Cumplido | `applyEmotionalRegulation` se activa **exclusivamente** si `profection_house === '8'` o `lord_of_year === 'Saturno'`. Eliminadas las lógicas heurísticas, tonos, climas o radares. |
| Contrato de Salida Unificado | Cumplido | La regulación inyecta y usa exclusivamente la propiedad `content.regulatory_close`. Se eliminaron los aliases obsoletos (`annual_regulation`, `daily_regulation`). |
| Renderizadores Alineados | Cumplido | `renderAnnualNarrative` y `renderDailyNarrative` en `engine_v483_final.js` consumen únicamente `content.regulatory_close`. |
| Estabilidad del Módulo | Cumplido | `interpreter_engine.js` retiene su estado congelado. Todo el contenido proviene de Pools limpios (F7, F3, F2) en `ANNUAL_RICH_DATA`. |

Conclusión: El motor KAIROS está completamente normalizado y libre de sesgos narrativos experimentales en la regulación emocional. La salida es determinista, explícita y acotada al contrato de diseño L2.1-C v1.1.
