# KAIROS Master Context

## Fase actual

Estabilización y coherencia del sistema. No se están desarrollando funciones nuevas.

## Entrada principal

- `index.html` es la entrada principal de producción.
- `engine_v483_final.js` es el orquestador principal actual y no debe refactorizarse en esta fase.

## Serie 650

- `chart_650_v1.js` = lienzo natal base. Genera la estructura HTML/SVG natal y expone la geometría base.
- `chart_650_v2.js` = orquestador de capas temporales. Añade capas visuales de profección y tránsitos sobre el lienzo generado por v1.

## Estabilización 2A

- `astro_audit.js` queda desactivado en producción por flag.
- La relación entre `chart_650_v1.js` y `chart_650_v2.js` se considera complementaria, no duplicada.
