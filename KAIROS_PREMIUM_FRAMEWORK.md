# KAIROS — PREMIUM FRAMEWORK v1.0
## Guía de implementación técnica transversal

**Fecha:** 2026-06-12
**Versión:** v1.0
**Complementa:** `KAIROS_PREMIUM_IDENTIDAD_v1.md` (filosofía) · `KAIROS_PREMIUM_CANONICO_1.md` (contrato)
**Estado:** ACTIVO · PROVISIONAL — refleja HOY Premium v1.2; actualizar al completar Guía KAIROS, profundidad narrativa, y auditoría SEMANA/MES
**Basado en:** HOY Premium v1.2 implementado en `engine_v483_final.js`

> Este documento NO repite filosofía ni contrato.
> Cubre: tokens visuales exactos de código, patrón estructural de cada módulo premium, registro de los 9 módulos HOY, y checklist de alineación para SEMANA/MES.

---

## 1. TOKENS VISUALES — VALORES EXACTOS DE CÓDIGO

Estos son los valores reales en producción. No usar valores aproximados — copiar literalmente.

### 1.A — Tarjetas de luz (contenido textual)

Usar en todos los módulos de texto: tarjetas de AÑO, HOY, MES, SEMANA.

```
CARD  = background:rgba(247,244,238,0.6);border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.20);margin-bottom:12px
LBL   = font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;display:block;margin-bottom:8px
TXT   = font-size:13px;color:#4a3f2a;line-height:1.65;margin:0
TXT2  = font-size:13px;color:rgba(74,63,42,0.65);line-height:1.65;margin:8px 0 0
QS    = font-size:13px;font-style:italic;color:rgba(80,65,40,0.65);line-height:1.7;margin:12px 0 0;padding-top:10px;border-top:0.5px solid rgba(180,160,120,0.2)
```

Nota: el contenedor outer de cada tarjeta en el HTML usa el mismo CARD menos `margin-bottom`. El margin se gestiona con la clase `space-y-4` del section wrapper.

### 1.B — Gadgets oscuros (visualizaciones)

Usar en todos los gadgets: Barómetro, Planetas Activos HOY, Pulso, Cronoesfera AÑO, Mapa AÑO, Espejo AÑO.

```javascript
el.style.background    = '#0d1b2a';
el.style.boxShadow     = '0 10px 25px -5px rgba(0,0,0,0.3),inset 0 1px 1px rgba(255,255,255,0.1)';
el.style.border        = 'none';
el.style.borderRadius  = '24px';     // siempre vía JS, no solo en HTML
```

Título del gadget (LBL oscuro):
```
font-size:9px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#b8a070;margin:0 0 14px
```

Texto secundario en gadget oscuro: `color:rgba(255,255,255,0.55)`
Texto terciario / microfrase: `color:rgba(255,255,255,0.38)`

### 1.C — Glifos KAIROS

Función helper (en `engine_v483_final.js`, disponible globalmente):
```javascript
function _kIcon(name, sz, col) {
    if (typeof KAIROS_ICONS === 'undefined') return '';
    const svg = (KAIROS_ICONS.planets && KAIROS_ICONS.planets[name]) ||
                (KAIROS_ICONS.zodiac  && KAIROS_ICONS.zodiac[name]) || '';
    if (!svg) return '';
    return `<span style="color:${col};display:inline-flex;align-items:center;flex-shrink:0;line-height:1">${
        svg.replace('class="size-full"', `style="width:${sz}px;height:${sz}px"`)
    }</span>`;
}
```

Tamaños de uso recomendados:
- Cabecera de tarjeta (LBL): planeta 14px · signo 11px · color `#b8a070`
- Gadget oscuro (círculo central): 20px (main) · 16px (secundario) · color `#C4A46A` / `rgba(255,255,255,0.55)`
- Signo en gadget (etiqueta): 10px · color `rgba(255,255,255,0.35)`
- Inline en texto light: 14px · color `rgba(74,63,42,0.75)`

### 1.D — Colores de acento premium

| Rol | Valor |
|-----|-------|
| Dorado principal | `#C4A46A` |
| Dorado LBL/label | `#b8a070` |
| Dorado CTA/botón | `#d7c188` |
| Texto principal tarjeta | `#4a3f2a` |
| Texto secundario tarjeta | `rgba(74,63,42,0.65)` |
| Texto terciario / italic | `rgba(80,65,40,0.65)` |

### 1.E — Cierre de bloque Premium

Idéntico en todos los módulos. Solo cambia el target de scroll y la frase.

```html
<div id="{modulo}-premium-cierre" style="display:flex;flex-direction:column;align-items:center;padding:40px 24px 16px;gap:14px">
    <span style="font-size:20px;color:rgba(215,193,136,0.75);letter-spacing:4px">✦</span>
    <p style="margin:0;font-size:12px;color:rgba(80,65,40,0.45);letter-spacing:1px;text-align:center;font-style:italic">{FRASE_MÓDULO}</p>
    <button onclick="document.querySelector('#{SCROLL_TARGET}')?.scrollIntoView({behavior:'smooth',block:'start'});"
        style="background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 20px;opacity:0.65;transition:opacity 0.2s"
        onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.65'">
        <span style="font-size:16px;color:#b8a070">↑</span>
        <span style="font-size:10px;color:#b8a070;letter-spacing:1.5px;text-transform:uppercase;font-weight:700">Volver al inicio de {MÓDULO}</span>
    </button>
</div>
```

Frases y targets por módulo:
| Módulo | Frase | Scroll target |
|--------|-------|---------------|
| HOY | "El día ya está en marcha." | `#hoy-premium-v1-section` |
| AÑO | "Tu ciclo continúa." | `#annual-premium-cronos` |
| MES | *(pendiente)* | *(pendiente)* |
| SEMANA | *(pendiente)* | *(pendiente)* |

---

## 2. PATRÓN ESTRUCTURAL PREMIUM

Todo bloque premium sigue esta estructura. Las secciones marcadas como opcionales dependen de la escala temporal del módulo.

```
[GADGET APERTURA — oscuro]     ← contextualiza el estado actual
  ↓
[TARJETA 1…N — texto]          ← profundidad natal y temporal
  ↓
[GADGET INTERMEDIO — oscuro]   ← visualiza distribución / jerarquía (opcional)
  ↓
[TARJETA N+1…M — texto]        ← síntesis / brújula
  ↓
[GADGET CIERRE — oscuro]       ← pulso / curva temporal (si aplica)
  ↓
[CIERRE PREMIUM — ✦ + frase + scroll]
```

### Proporciones recomendadas

| Módulo | Gadgets | Tarjetas | Cierre |
|--------|---------|----------|--------|
| HOY | 3 (Barómetro · Planetas Activos · Pulso) | 6 | ✦ |
| AÑO | 3 (Cronoesfera · Mapa · Espejo) | 4 | ✦ |
| MES | 1 (Gráfica mensual) | 5 | ✦ pendiente |
| SEMANA | *(pendiente — módulo cerrado)* | 4 bloques activos | — |

---

## 3. LEY NARRATIVA — ESTRUCTURA DE CADA TARJETA

### 3.A — Capas de contenido por tarjeta

Toda tarjeta Premium debe tener como mínimo dos párrafos. Tres cuando el dato lo permite.

```
p1 (TXT)    → Observación + significado del dato natal/temporal
p2 (TXT2)   → Traducción humana: cómo se siente o se expresa en la experiencia
p3 (TXT2)   → [opcional] Impacto posible / actitud que permite leerlo mejor
qs (QS)     → [solo HOY Señal Oculta] Pregunta de reflexión personalizada
```

### 3.B — Lo que el texto NUNCA hace

- Predecir: no "hoy ocurrirá", sino "la configuración permite"
- Coaching: no "deberías" ni "conviene hacer"
- Moralizar: no juicios sobre lo que el usuario siente
- Repetir entre p1 y p2: p2 amplía o traduce, nunca parafrasea
- Texto genérico: si puede escribirse sin la carta natal, no es premium

### 3.C — Voz KAIROS Premium

- Segunda persona directa ("tu Venus natal", "el registro emocional de hoy")
- Concreta (planeta + signo + casa cuando aplica)
- Sin metáforas vacías
- Sin "intensidad cósmica" o vocabulario new-age
- Sin alargar por alargar — más palabras no es más valor

---

## 4. REGISTRO DE MÓDULOS — HOY PREMIUM v1.2

Estado en `engine_v483_final.js`. Versión: v650.5.225+.

### Gadgets (tema oscuro #0d1b2a)

| ID | Nombre | Función | Datos de entrada | Estado |
|----|--------|---------|-----------------|--------|
| `daily-gadget-barometro` | BARÓMETRO DEL DÍA | Posición de la aguja (IMPULSAR/SOSTENER/OBSERVAR) | `state.momentRadar.status` | ✅ v1.2 |
| `daily-gadget-reloj` | PLANETAS ACTIVOS HOY | Jerarquía vertical de 3 planetas con barras de intensidad | `planetDay`, `transits`, `moonHouse` | ✅ v1.2 |
| `daily-gadget-pulso` | PULSO DEL DÍA | Curva temporal mañana/tarde/noche + punto ahora | `state.momentRadar.status` | ✅ v1.2 |

### Tarjetas (tema claro rgba(247,244,238,0.6))

| ID | Nombre | Pregunta que responde | Datos clave | Estado |
|----|--------|-----------------------|-------------|--------|
| `daily-premium-senal-oculta` | SEÑAL OCULTA | ¿Qué está siendo activado en mi carta hoy? | Activaciones natales (conjunción/oposición/house), señor del año | ✅ v1.1 |
| `daily-premium-luna-carta` | LUNA EN TU CARTA | ¿Dónde cae la Luna en mi carta natal hoy? | `moonHouse` (12 textos por casa) + `lunaSign` (fallback) | ✅ v1.0 |
| `daily-premium-planetas-escena` | PLANETAS EN ESCENA | ¿Qué planetas protagonizan el día y cómo operan? | `planetDay`, `transits`, `moonHouse`, glifos KAIROS | ✅ v1.1-B |
| `daily-premium-origen-dia` | EL ORIGEN DEL DÍA | ¿Cómo se relaciona el planeta del día con mi ciclo anual? | `lord` (señor del año), `planetDay`, tabla de relaciones 7×7 | ✅ v1.2 |
| `daily-premium-brujula` | BRÚJULA KAIROS | ¿Qué postura permite leer mejor este día? | `radarStatus`, `planetDay` — 28 textos únicos (7×4) | ✅ v1.2 |
| `daily-premium-punto-atencion` | PUNTO DE ATENCIÓN | ¿Hay alguna fricción activa entre el cielo y mi carta? | Activaciones tipo OPOSICIÓN, `radarStatus` | ✅ v1.0 |

### Cierre

| ID | Contenido | Estado |
|----|-----------|--------|
| `hoy-premium-cierre` | ✦ + "El día ya está en marcha." + botón scroll | ✅ v1.2 |

---

## 5. PATRÓN ESTADO FREE — TARJETAS BLOQUEADAS

Todo módulo premium debe tener un estado free que siga este patrón exacto (implementado en AÑO y HOY).

### 5.A — Reglas del estado free

- **Los gadgets NO aparecen** en estado free. Solo las tarjetas de texto, bloqueadas.
- **El cierre premium** (✦ + botón scroll) NO aparece en estado free.
- **El contenido libre** (triplete, matiz, resonancia, pregunta central) SÍ aparece siempre, independientemente del nivel de suscripción.
- El teaser de cada tarjeta describe QUÉ aporta ese módulo, sin revelar el dato concreto.

### 5.B — Función _locked (patrón canónico)

```javascript
const _locked = (title, teaser) => `
    <div style="${CARD};text-align:center">
        <div style="display:flex;justify-content:center;align-items:center;gap:6px;margin-bottom:10px">
            <span style="${LBL};margin:0">${title}</span>
            <div style="opacity:0.6;flex-shrink:0">${LOCK_SVG}</div>
        </div>
        <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:280px">${teaser}</p>
        <div style="text-align:center">
            <button onclick="window._kairosPremiumCTA&&window._kairosPremiumCTA()"
                style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6">
                ${LOCK_SM} Seguir profundizando
            </button>
        </div>
    </div>`;
```

SVGs de candado:
```javascript
LOCK_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
LOCK_SM  = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`
```

### 5.C — Registro de módulos bloqueados por tab

| Tab | Módulos bloqueados (free) | Implementado |
|-----|--------------------------|--------------|
| AÑO | Tu energía guía · Lo que se activa este año · Cómo se mueve ahora · Por qué este ciclo te afecta así | ✅ v1.0 |
| HOY | Señal Oculta · Luna en tu Carta · Planetas en Escena · El Origen del Día · Brújula KAIROS · Punto de Atención | ✅ v1.2 |
| MES | *(pendiente — patrón idéntico)* | ⏳ |
| SEMANA | *(pendiente — módulo cerrado ⛔)* | ⏳ |

---

## 6. PENDIENTES HOY PREMIUM — ANTES DE PRODUCCIÓN

| Tarea | Prioridad | Estado |
|-------|-----------|--------|
| Guía KAIROS HOY — 9 módulos en KAIROS_GUIDE.daily + panel flotante | Alta | ✅ v1.2 |
| Profundidad narrativa p3 — Luna + Planetas + Origen | Media | ✅ v1.2 |
| Tarjetas bloqueadas HOY no-premium | Alta | ✅ v1.2 |
| Fix cierre AÑO texto color | Alta | ✅ v1.2 |
| PLANETAS EN ESCENA — tercera capa por signo×planeta | Baja | ⏳ pendiente |
| Alineación visual MES Premium con estos tokens | Media | ⏳ sin auditar |
| Alineación visual SEMANA Premium con estos tokens | Media | ⏳ sin auditar (módulo cerrado) |
| Producción | — | 🔒 solo tras validación visual staging |

---

## 7. PATRÓN DE CONVERSIÓN PREMIUM

### 7.A — Los tres estados de un módulo

```
FREE         → Contenido base visible para todos (triplete, resonancia, narrativa, pregunta central).
NO-PREMIUM   → Tarjetas bloqueadas: candado + título + teaser + CTA "Seguir profundizando".
PREMIUM      → Contenido real desbloqueado: gadgets + tarjetas completas con datos natales.
```

Los gadgets NO aparecen en estado no-premium — solo las tarjetas bloqueadas con teaser.
El teaser describe qué aporta el módulo sin revelar el dato real.

### 7.B — Hook de conversión: `window._kairosPremiumCTA`

Todos los botones "Seguir profundizando" llaman a `window._kairosPremiumCTA()`.
Es el único punto de entrada a la pasarela de pago/suscripción.

Estado actual (provisional): la función existe pero no tiene destino implementado.
Estado futuro (sprint dedicado): debe redirigir al flujo de pago.

```javascript
// Definición futura del hook (sprint pasarela)
window._kairosPremiumCTA = function() {
    // → Abrir modal de suscripción / Stripe Checkout / pantalla de upgrade
    // NO implementar hasta decidir: Stripe + Firebase Extension + planes
};
```

### 7.C — Arquitectura recomendada para la pasarela (sprint futuro)

Stack recomendado: **Stripe + Firebase Extension for Stripe**
- Firebase Auth ya está activo → Stripe Extension escribe `stripeRole` en Firestore automáticamente
- `state.subscription.level` ya existe como campo de control en el engine
- Solo hay que conectar el webhook de Stripe → Firestore → actualizar `subscription.level`
- Un único sprint dedicado, sin mezclar con trabajo de módulos

Módulos que requieren pasarela activa: AÑO, HOY, SEMANA, MES, MATRIX.
Todos los CTA de todos los módulos apuntan al mismo `window._kairosPremiumCTA`.

### 7.D — Registro de estado free por tab

| Tab | Nº tarjetas bloqueadas | Módulos | Estado |
|-----|------------------------|---------|--------|
| AÑO | 7 | Tu energía guía · Lo que se activa · Cómo se mueve · Por qué te afecta · Activaciones natales · Eclipses del año · Tránsitos maestros | ✅ v1.2 |
| HOY | 6 | Señal Oculta · Luna en tu Carta · Planetas en Escena · Origen del Día · Brújula KAIROS · Punto de Atención | ✅ v1.2 |
| MES | *(pendiente)* | — | ⏳ |
| SEMANA | *(pendiente — módulo cerrado ⛔)* | — | ⏳ |
| MATRIX | *(pendiente)* | — | ⏳ |

---

## 8. CHECKLIST DE ALINEACIÓN — PARA NUEVOS MÓDULOS PREMIUM

Antes de declarar un módulo premium listo para producción:

- [ ] Tarjetas light usan CARD exacto (sección 1.A)
- [ ] Gadgets oscuros usan dark theme exacto + borderRadius 24px vía JS (sección 1.B)
- [ ] Glifos KAIROS en todas las cabeceras de tarjeta que referencian planetas o signos (sección 1.C)
- [ ] LBL / TXT / TXT2 con valores exactos (sección 1.A)
- [ ] Cada tarjeta tiene mínimo p1 + p2 · p2 no parafrasea p1 (sección 3.A)
- [ ] Ningún texto hace predicción, coaching ni moralización (sección 3.B)
- [ ] Cierre ✦ + botón scroll al inicio del bloque premium (sección 1.E)
- [ ] `node --check` limpio
- [ ] Validación visual en staging antes de producción
- [ ] Roberto escribe "OK para producción" explícitamente

---

*KAIROS_PREMIUM_FRAMEWORK.md — Creado 2026-06-12 — Actualizado 2026-06-13 — Claude Cowork — Basado en HOY Premium v1.2 (v650.5.225+)*
