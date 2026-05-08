# KAIROS Freeze List

## Congelado en esta fase

- `planetary_engine.js`
- `chart_engine.js`
- `projection_engine.js`
- `ascendant_engine.js`
- `engine_v483_final.js`
- lógica interna de `chart_650_v1.js`
- lógica interna de `chart_650_v2.js`

## Notas operativas

- `chart_650_v1.js` se mantiene como renderer natal base.
- `chart_650_v2.js` se mantiene como capa temporal sobre el renderer base.
- `astro_audit.js` no participa en el flujo visible de producción durante la Fase de Estabilización 2A.
