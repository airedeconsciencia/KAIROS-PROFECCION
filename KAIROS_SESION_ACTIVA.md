# KAIROS — ESTADO DE SESIÓN ACTIVA
## Claude lee este archivo al arrancar cualquier sesión nueva. Se actualiza al cerrar cada bloque de trabajo.

---

## SPRINT ACTIVO
**AÑO Premium v3.4-B** — Bloque A definitivo (Señor + Signo + Casa natal + Casa profectada + Ascendente en relato único)

## ÚLTIMO BLOQUE COMPLETADO
**Eclipses del Año v1.3** ✅ CERRADO (código)
- Capa 0: todo eclipse siempre muestra casa natal + territorio
- LEJANO: añade "· Casa [X]" al pie
- PRÓXIMO: añade "Este eclipse caerá en tu Casa [X] — [territorio]"
- CERCANO/INMINENTE/PASADO: CENTRAL / LORD_CASA / BASE logic
- BASE text aprobado por GPT: "No hace fasto que active un planeta exacto..."
- Activation blocks: sin repetir territorio cuando `a.house === e.eclHouse`
- `node --check` ✅
- Pendiente: staging acumulado (Activaciones v1.1 + Eclipses v1.3)

## PRÓXIMA TAREA
**Tránsitos Maestros** — siguiente tarjeta AÑO Premium (después de staging + validación Eclipses v1.3).

## ESTADO DE ENTORNOS
- **Producción:** v650.5.216 — https://kairos-eng.web.app ⛔ NO TOCAR
- **Staging:** https://kairos-eng--staging-4gvzelgx.web.app — sin deploy aún (acumular cambios)
- **Estrategia:** un solo staging + commit cuando Eclipses + Tránsitos estén listos

## MÓDULOS ABIERTOS
| Módulo | Estado |
|--------|--------|
| Activaciones Natales v1.1 | ✅ Código cerrado, pendiente staging acumulado |
| Eclipses del Año v1.3 | ✅ Implementado + node --check limpio, pendiente staging |
| Tránsitos Maestros | 🔴 Siguiente |
| AÑO v3.4-B Bloque A | ⏳ Pausado (retomar tras tarjetas) |

## MÓDULOS CERRADOS ⛔
- SEMANA (v650.5.199)
- Motores astronómicos (planetary_engine, ascendant_engine, projection_engine, astronomy, chart_650_v1)

---
*Actualizado: 2026-06-09 — Eclipses del Año v1.3 implementados*
