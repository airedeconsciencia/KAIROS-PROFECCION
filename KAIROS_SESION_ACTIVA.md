# KAIROS — ESTADO DE SESIÓN ACTIVA
## Claude lee este archivo al arrancar cualquier sesión nueva. Se actualiza al cerrar cada bloque de trabajo.

---

## SPRINT ACTIVO
**HOY Premium — tarjetas, gadgets y Guía KAIROS HOY**
- Objetivo: desarrollar el módulo HOY Premium completo: tarjetas, gadgets (Barómetro + Pulso del día) y Guía KAIROS HOY.
- Alcance: motor premium HOY, activaciones natales del día, pregunta de reflexión, gadgets visuales, capa de ayuda contextual.
- Primer paso obligatorio: auditoría del estado actual de HOY antes de abrir cualquier sprint técnico.
- NO mezclar con otros módulos. Un bloque a la vez.

## ÚLTIMO BLOQUE COMPLETADO
**Guía KAIROS AÑO v1.0** ✅ PRODUCCIÓN — v650.5.225 · commit f6d8b84
- 11 entradas añadidas a KAIROS_GUIDE.annual: annual-intro + 10 secciones (Cronoesfera, Tu energía guía, Lo que se activa, Cómo se mueve ahora, Por qué este ciclo te afecta así, Mapa de Territorios, Activaciones, Eclipses, Tránsitos, El momento actual).
- openKairosGuide() modificada: muestra intro por defecto al abrir en AÑO.
- IntersectionObserver actualiza panel al hacer scroll entre secciones.
- Validado en staging: panel contextual funciona, textos humanos, sin "premium" visible.
- node --check ✅ · staging ✅ · producción ✅

## PRÓXIMA TAREA
**HOY Premium — auditoría + primer sprint**
1. Auditar estado actual del módulo HOY: shell, motor, gate premium, IDs disponibles, tarjetas existentes.
2. Diseñar primer sprint de tarjetas HOY Premium.
3. Implementar → node --check → staging → validación → producción.

## ARQUITECTURA AÑO PREMIUM EN PRODUCCIÓN (v650.5.225)
```
[ CRONOESFERA ]         ← ¿dónde estoy en el año?
A — Tu energía guía
B — Lo que se activa este año
C — Cómo se mueve ahora
D — Por qué este ciclo te afecta así
[ MAPA DE TERRITORIOS ] ← ¿qué áreas están vivas?
Activaciones Natales
Eclipses del Año
Tránsitos Maestros
[ ESPEJO TEMPORAL ]     ← ¿qué significa este momento?
✦ Tu ciclo continúa. · ↑ Volver al inicio del año
```

Guía KAIROS: panel contextual flotante activo. Botón ⓘ. Actualiza contenido por scroll.

## ESTADO DE ENTORNOS
- **Producción:** v650.5.225 — https://kairos-eng.web.app ⛔ NO TOCAR
- **Staging:** https://kairos-eng--staging-4gvzelgx.web.app (expira 16 jun 2026 — crear nuevo canal si es necesario)

## MÓDULOS CERRADOS ⛔
- SEMANA (v650.5.199)
- Activaciones Natales v1.1 (v650.5.217) ✅
- Eclipses del Año v1.3.1 (v650.5.217) ✅
- AÑO Premium v3.4-B.1 (v650.5.218) ✅
- Tránsitos Maestros v1.0.1 (v650.5.219) ✅
- BUG-001 fix (v650.5.220) ✅
- Gadgets visuales AÑO Premium v1.0 (v650.5.224) ✅
- Guía KAIROS AÑO v1.0 (v650.5.225) ✅
- Motores astronómicos (planetary_engine, ascendant_engine, projection_engine, astronomy, chart_650_v1)

## BACKLOG
- Compartir KAIROS / Invitar a alguien — feature de producto, sprint propio. No tocar hasta completar HOY Premium.

---
*Actualizado: 2026-06-12 — Guía KAIROS AÑO CERRADA · Sprint HOY Premium abierto*
