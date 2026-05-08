// ============================================================
// ⚠️ MÓDULO CONGELADO — natal_panel_renderer.js v1.7.1
// NO MODIFICAR sin aprobación expresa de Roberto
// Última validación: Fase 6.18 — Abril 2026
// ============================================================
//
// CONTRATO DE MÓDULO:
// - Este archivo SOLO consume y renderiza datos natales.
// - NO calcula efemérides. No usa astronomy.js directamente.
// - NO interpreta astrológicamente ni genera narrativa.
// - NO sustituye Serie 650 (carta visual SVG, glifos, overlays).
// - Sirve de panel técnico de validación previo a la carta visual.
//
// MÓDULOS CONGELADOS — NO TOCAR:
// - Matrix Premium / processDetailedAnalysis()
// - transit_engine, projection_engine, interpreter_engine
// - Flujos de AÑO, HOY, SEMANA, MES
//
// Función de entrada: window.renderNatalPanel(state, context)
// ============================================================

// ============================================================
// PANEL TÉCNICO DE CARTA — CERRADO
// Última validación: Fase 6.14U — Abril 2026
// Datos natales: Swiss Ephemeris
// Tránsitos: window.CURRENT_TRANSITS (transit_engine.js)
// No añadir más lógica aquí.
// La evolución visual pasa a SERIE 650.
// ============================================================

// ─── LOG DE CARGA (ejecuta al parsear el archivo) ────────────
console.log('[KAIROS] NATAL RENDERER LOADED ✅', {
  version: '6.14U-final',
  ts: Date.now()
});

(function () {

  // ─── CONSTANTES ──────────────────────────────────────────────
  // Los 10 planetas en orden, con sus alias en inglés
  const PLANET_KEYS = [
    { es: 'Sol',      en: 'Sun'     },
    { es: 'Luna',     en: 'Moon'    },
    { es: 'Mercurio', en: 'Mercury' },
    { es: 'Venus',    en: 'Venus'   },
    { es: 'Marte',    en: 'Mars'    },
    { es: 'Júpiter',  en: 'Jupiter' },
    { es: 'Saturno',  en: 'Saturn'  },
    { es: 'Urano',    en: 'Uranus'  },
    { es: 'Neptuno',  en: 'Neptune' },
    { es: 'Plutón',   en: 'Pluto'   },
  ];

  const MOON_PHASE_MAP = {
    'New': 'Nueva', 'Full': 'Llena', 'Waxing': 'Creciente', 'Waning': 'Menguante',
    'NEW': 'Nueva', 'FULL': 'Llena', 'WAXING': 'Creciente', 'WANING': 'Menguante',
    'New Moon': 'Nueva', 'Full Moon': 'Llena',
    'Waxing Crescent': 'Creciente', 'Waning Crescent': 'Menguante',
    'Waxing Gibbous': 'Creciente', 'Waning Gibbous': 'Menguante',
  };

  // ─── HELPERS ─────────────────────────────────────────────────

  /**
   * Obtiene datos de un planeta (signo, grado, casa, retro) desde las fuentes disponibles.
   * Fuente 1: window.totalShadowContext.natal_context.planets
   * Fuente 2: state.user.natalPlanets (fallback)
   * Nunca hardcodea. Retorna '—' si no hay dato.
   */
  // Normaliza un nombre de planeta quitando tildes para comparación robusta
  function _normName(s) {
    return (s || '').toLowerCase()
      .replace(/á/g,'a').replace(/é/g,'e').replace(/í/g,'i')
      .replace(/ó/g,'o').replace(/ú/g,'u').replace(/ü/g,'u');
  }

  function _resolvePlanet(esName, enName, state) {
    try {
      const sc   = window.totalShadowContext?.natal_context || {};
      const src1 = sc.planets;
      const src2 = state?.user?.natalPlanets;
      const source = (src1 && (Array.isArray(src1) ? src1.length > 0 : Object.keys(src1).length > 0))
        ? src1
        : (src2 || null);

      if (!source) return { sign: null, degree: null, house: null, retro: false };

      const esNorm = _normName(esName); // p.ej. 'pluton', 'jupiter'
      const enNorm = _normName(enName); // p.ej. 'pluto', 'jupiter'

      let found = null;

      if (Array.isArray(source)) {
        found = source.find(p => {
          const pNorm = _normName(p.name || p.planet || '');
          return pNorm === esNorm || pNorm === enNorm;
        });
      } else {
        // Objeto clave→valor (Firestore guarda 'PLUTON', 'SOL', 'LUNA'...
        const allKeys = Object.keys(source);
        const matchKey = allKeys.find(k =>
          _normName(k) === esNorm || _normName(k) === enNorm
        );
        found = source[matchKey] || null;
      }

      if (!found) return { sign: null, degree: null, house: null, retro: false };

      return {
        sign:   (found.sign || found.signName || found.signo || null),
        degree: (found.degree !== undefined ? found.degree : (found.grado !== undefined ? found.grado : null)),
        house:  (found.house || found.casa || null),
        retro:  !!(found.isRetro || found.retro),
      };
    } catch (e) {
      console.warn('[NatalPanel] _resolvePlanet error:', esName, e);
      return { sign: null, degree: null, house: null, retro: false };
    }
  }

  /** Formatea una fila de planeta para display interno */
  function _formatPlanetRow(data) {
    if (!data.sign) return '—';
    const signName = data.sign.toUpperCase();
    const signSymbol = _renderKairosSymbol('zodiac', data.sign, '#7c3aed', 14);
    const degree = data.degree !== null ? `${data.degree}°` : '';
    const house  = data.house  ? `CASA ${data.house}` : 'CASA —';
    const retro  = data.retro  ? ' (R)' : '';
    
    return `
      <div style="display:flex; align-items:center; gap:6px; justify-content: flex-end;">
        <span style="display:flex; align-items:center; gap:4px; color:#7c3aed; font-weight:700;">${signSymbol} ${signName}</span>
        <span>${degree}${retro} — ${house}</span>
      </div>`;
  }

  function _renderKairosSymbol(type, key, color = '#7c3aed', size = 16) {
    if (typeof window.getKairosSymbol !== 'function') return '';
    const innerSVG = window.getKairosSymbol(type, key);
    if (!innerSVG) return '';
    
    const cleanContent = innerSVG.replace(/currentColor/g, color);
    
    return `
      <svg width="${size}" height="${size}" viewBox="0 0 100 100" style="display:inline-block; vertical-align:middle; flex-shrink:0; overflow:visible;">
        <g fill="none" stroke="${color}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
          ${cleanContent}
        </g>
      </svg>`;
  }

  /** Obtiene datos de una casa natal */
  function _resolveHouse(houseNumber, state) {
    try {
      const sc     = window.totalShadowContext?.natal_context || {};
      const houses = sc.houses || state?.user?.houses || state?.user?.natal_context?.houses || null;

      if (!houses) return null;

      if (Array.isArray(houses)) {
        // Puede ser array 0-indexed o 1-indexed
        const byIndex = houses[houseNumber - 1];
        const byFind  = houses.find(h => h.house === houseNumber || h.casa === houseNumber || h.number === houseNumber);
        const h = byFind || byIndex;
        if (!h) return null;
        return {
          sign:   (h.sign || h.signo || h.signName || null),
          degree: (h.degree !== undefined ? h.degree : (h.cuspDegree !== undefined ? h.cuspDegree : null)),
        };
      } else if (typeof houses === 'object') {
        const val = houses[houseNumber] || houses[String(houseNumber)];
        if (!val) return null;
        return {
          sign:   (val.sign || val.signo || val.signName || null),
          degree: (val.degree !== undefined ? val.degree : null),
        };
      }
    } catch (e) {
      console.warn('[NatalPanel] _resolveHouse error:', houseNumber, e);
    }
    return null;
  }

  /** Traduce fase lunar */
  function _moonPhaseES(sc, state) {
    const raw = sc?.temporal_context?.moon_phase || state?.momentRadar?.phase || 'New';
    return MOON_PHASE_MAP[raw] || raw;
  }

  // ─── CONSTRUCTORES DE HTML ────────────────────────────────────

  function _buildPlanetsSection(state) {
    const rows = PLANET_KEYS.map(({ es, en }) => {
      const data = _resolvePlanet(es, en, state);
      const display = _formatPlanetRow(data);
      const isEmpty = !data.sign;
      const planetSymbol = _renderKairosSymbol('planets', es, '#64748b', 16);
      return `
        <div class="np-row ${isEmpty ? 'np-row--empty' : ''}">
          <span class="np-label" style="display:flex; align-items:center; gap:10px;">${planetSymbol} ${es}</span>
          <span class="np-value ${isEmpty ? 'np-value--missing' : ''}">${display}</span>
        </div>`;
    });

    // Ascendente
    const sc = window.totalShadowContext?.natal_context || {};
    const ascVal = sc.ascendant || sc.ascendente || state?.user?.asc || '—';
    const ascDeg = sc.ascendant_degree || state?.user?.ascDeg || '';
    const ascSymbol = _renderKairosSymbol('zodiac', ascVal, '#7c3aed', 16);
    const ascRow = `
        <div class="np-row np-row--accent">
          <span class="np-label" style="display:flex; align-items:center; gap:10px;">
            <div style="width:16px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
              <svg width="14" height="14" viewBox="0 0 100 100"><text x="10" y="75" font-size="65" font-weight="900" fill="#7c3aed">A</text></svg>
            </div>
            Ascendente
          </span>
          <span class="np-value" style="display:flex; align-items:center; gap:8px;">
            ${ascSymbol} ${ascVal.toUpperCase()}${ascDeg ? ' ' + ascDeg + '°' : ''}
          </span>
        </div>`;

    return `
      <div class="np-section">
        <p class="np-section-title">CARTA NATAL BASE</p>
        <div class="np-rows">
          ${rows.join('')}
          ${ascRow}
        </div>
      </div>`;
  }

  function _buildHousesSection(state) {
    let hasAnyHouse = false;
    const rows = Array.from({ length: 12 }, (_, i) => {
      const num  = i + 1;
      const data = _resolveHouse(num, state);
      const sign   = data?.sign   ? data.sign.toUpperCase() : '—';
      const degree = data?.degree !== null && data?.degree !== undefined ? `${data.degree}°` : '';
      const isEmpty = !data?.sign;
      if (!isEmpty) hasAnyHouse = true;
      return `
        <div class="np-row ${isEmpty ? 'np-row--empty' : ''}">
          <span class="np-label">Casa ${num}</span>
          <span class="np-value ${isEmpty ? 'np-value--missing' : ''}">${sign}${degree ? ' ' + degree : ''}</span>
        </div>`;
    });

    const noDataMsg = !hasAnyHouse
      ? `<p class="np-no-data">Sin datos de casas. Confirma que estén guardadas en Firestore.</p>`
      : '';

    return `
      <div class="np-section">
        <p class="np-section-title">CASAS NATALES</p>
        ${noDataMsg}
        <div class="np-rows">
          ${rows.join('')}
        </div>
      </div>`;
  }

  function _buildAnnualSection(context) {
    const { age, profection, lordOriginal } = context;
    return `
      <div class="np-section">
        <p class="np-section-title">AÑO ACTIVO</p>
        <div class="np-rows">
          <div class="np-row">
            <span class="np-label">Edad</span>
            <span class="np-value">${age} años</span>
          </div>
          <div class="np-row">
            <span class="np-label">Casa Profectada</span>
            <span class="np-value">CASA ${profection?.activeHouse || '—'}</span>
          </div>
          <div class="np-row">
            <span class="np-label">Signo Activado</span>
            <span class="np-value">${profection?.activeSign || '—'}</span>
          </div>
          <div class="np-row np-row--highlight">
            <span class="np-label">Señor del Año</span>
            <span class="np-value np-value--lord">${lordOriginal || '—'}</span>
          </div>
        </div>
      </div>`;
  }

  /** Obtiene el elemento de un signo (Fuego, Tierra, Aire, Agua) */
  function _signElement(sign) {
    const s = (sign || '').toUpperCase();
    if (['ARIES','LEO','SAGITARIO'].some(x => s.includes(x)))   return 'Fuego';
    if (['TAURO','VIRGO','CAPRICORNIO'].some(x => s.includes(x))) return 'Tierra';
    if (['GÉMINIS','GEMINIS','LIBRA','ACUARIO'].some(x => s.includes(x))) return 'Aire';
    if (['CÁNCER','CANCER','ESCORPIO','PISCIS'].some(x => s.includes(x))) return 'Agua';
    return null;
  }

  /** Genera las 2 líneas técnicas de comparativa del momento */
  function _buildComparativa(context) {
    const { state, sc, lordOriginal, transits } = context;

    // 1. Luna natal vs Luna actual por elemento
    const natalMoon = _resolvePlanet('Luna', 'Moon', state);
    const natalMoonSign  = natalMoon.sign || '';
    const natalMoonElem  = _signElement(natalMoonSign);
    const currentMoonSign = (transits['Luna'] || transits['Moon'] || '').toUpperCase();
    const currentMoonElem = _signElement(currentMoonSign);

    let lunaLine = '—';
    if (natalMoonElem && currentMoonElem) {
      const rel = natalMoonElem === currentMoonElem ? 'resonancia emocional' : 'contraste emocional';
      lunaLine = `Luna natal en ${natalMoonElem} · Luna actual en ${currentMoonElem}: ${rel}`;
    } else if (natalMoonSign) {
      lunaLine = `Luna natal en ${natalMoonSign.toUpperCase()} · Posición actual: ${currentMoonSign || '—'}`;
    }

    // 2. Estado del Señor del Año en tránsito actual
    let lordLine = '—';
    if (lordOriginal) {
      const lordTransit = transits[lordOriginal] || transits[lordOriginal + ' Actual'] || null;
      const lordSignLabel = lordTransit ? lordTransit.toUpperCase() : null;
      if (lordSignLabel) {
        lordLine = `${lordOriginal}, Señor del Año, transita ${lordSignLabel}: activación del eje de acción`;
      } else {
        lordLine = `${lordOriginal} es el Señor del Año activo. Tránsito actual no disponible`;
      }
    }

    // Limitar a 140 chars por línea
    if (lunaLine.length > 140)  lunaLine  = lunaLine.substring(0, 137) + '...';
    if (lordLine.length  > 140) lordLine  = lordLine.substring(0, 137) + '...';

    return `
      <div class="np-section">
        <p class="np-section-title np-section-title--live" style="font-size:8px;">COMPARATIVA DEL MOMENTO</p>
        <div class="np-rows">
          <div class="np-row" style="display:block; padding: 8px 0;">
            <span class="np-label" style="display:block; font-size:10px; margin-bottom:4px; min-width:unset;">Luna</span>
            <span class="np-value" style="font-size:10px; font-weight:500; color:#5b21b6; text-align:left; word-break:break-word;">${lunaLine}</span>
          </div>
          <div class="np-row" style="display:block; padding: 8px 0;">
            <span class="np-label" style="display:block; font-size:10px; margin-bottom:4px; min-width:unset;">Año</span>
            <span class="np-value" style="font-size:10px; font-weight:500; color:#5b21b6; text-align:left; word-break:break-word;">${lordLine}</span>
          </div>
        </div>
      </div>`;
  }

  function _buildTransitsSection(context) {
    const { sc, state, translatedDayPlanet, lordOriginal } = context;

    // ─── FUENTE REAL: window.CURRENT_TRANSITS (transit_engine.js → getPlanetaryPositions) ──
    // Estructura: clave española con tilde ('Júpiter', 'Plutón'...) → valor: string signo
    // FASE 6.14V — AUDITORÍA: window.getPlanetaryPositions SÍ existe en runtime (planetary_engine.js)
    // pero su resultado NO está cacheado globalmente con grado. transit_engine lo descarta.
    // Para añadir grados sería necesario exponer un objeto enriquecido en Serie 650.
    const transits = window.CURRENT_TRANSITS || {};
    const samplePlanet = Object.entries(transits)[0] || null;

    // TAREA 5 (6.14V) — LOG DE VALIDACIÓN DE FUENTE DE GRADOS
    console.log('[KAIROS TRANSITS DEGREE SOURCE]', {
      sourceUsed: 'window.CURRENT_TRANSITS',
      hasDegree: false, // transit_engine descarta grados al mapear signo. Ver: transit_engine.js L64-L78
      keys: Object.keys(transits),
      sample: samplePlanet ? { planet: samplePlanet[0], value: samplePlanet[1] } : null
    });

    // Los 10 planetas en orden. transit_engine devuelve solo el signo (string).
    // Grado no disponible en esta fuente — no se inventan datos (ver Fase 6.14V).
    // Para grado+retro: ampliar transit_engine en Serie 650 para exponer objeto enriquecido.
    const TRANSIT_DEFS = [
      { label: 'Sol',      es: 'Sol',      en: 'Sun'     },
      { label: 'Luna',     es: 'Luna',     en: 'Moon'    },
      { label: 'Mercurio', es: 'Mercurio', en: 'Mercury' },
      { label: 'Venus',    es: 'Venus',    en: 'Venus'   },
      { label: 'Marte',    es: 'Marte',    en: 'Mars'    },
      { label: 'Júpiter', es: 'Júpiter',  en: 'Jupiter' },
      { label: 'Saturno',  es: 'Saturno',  en: 'Saturn'  },
      { label: 'Urano',    es: 'Urano',    en: 'Uranus'  },
      { label: 'Neptuno',  es: 'Neptuno',  en: 'Neptune' },
      { label: 'Plutón',  es: 'Plutón',   en: 'Pluto'   },
    ];

    // Resolver valor del tránsito: busca tanto clave española como inglesa
    const _resolveTransit = (es, en) => {
      const raw = transits[es] || transits[en] || null;
      if (!raw) return null;
      return typeof raw === 'string' ? raw.toUpperCase() : null;
    };

    // Solo mostrar filas que tengan dato real (sin filas "—")
    const rows = TRANSIT_DEFS.map(({ label, es, en }) => {
      const val = _resolveTransit(es, en);
      if (!val) return ''; // no hay dato: omitir la fila
      const planetSymbol = _renderKairosSymbol('planets', es, '#059669', 16);
      const signSymbol = _renderKairosSymbol('zodiac', val, '#059669', 14);
      return `
      <div class="np-row">
        <span class="np-label" style="display:flex; align-items:center; gap:10px;">${planetSymbol} ${label}</span>
        <span class="np-value" style="display:flex; align-items:center; gap:8px; color:#059669;">
          ${signSymbol} ${val}
        </span>
      </div>`;
    }).join('');

    const comparativa = _buildComparativa({ state, sc, lordOriginal, transits });

    return `
      <div class="np-section">
        <p class="np-section-title np-section-title--live">TRÁNSITOS ACTUALES</p>
        <div class="np-rows">
          ${rows}
          <div class="np-row">
            <span class="np-label">Fase Lunar</span>
            <span class="np-value">${_moonPhaseES(sc, state)}</span>
          </div>
          <div class="np-row">
            <span class="np-label">Planeta del Día</span>
            <span class="np-value np-value--lord">${translatedDayPlanet || '—'}</span>
          </div>
          <div class="np-row">
            <span class="np-label">Señor del Año</span>
            <span class="np-value np-value--lord">${lordOriginal || '—'}</span>
          </div>
        </div>
      </div>
      ${comparativa}`;
  }

  function _buildStyles() {
    return `
      <style id="natal-panel-styles">
        .np-panel {
          box-sizing: border-box;
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          padding: 0 4px 40px;
          display: flex;
          flex-direction: column;
          gap: 0;
          font-family: 'Manrope', 'Space Grotesk', sans-serif;
        }
        .np-panel-header {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #a78bfa;
          opacity: 0.7;
          margin-bottom: 20px;
        }
        .np-section {
          margin-bottom: 24px;
          background: rgba(167,139,250,0.03);
          border: 1px solid rgba(167,139,250,0.12);
          border-radius: 16px;
          overflow: hidden;
        }
        .np-section-title {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #7c3aed;
          background: rgba(167,139,250,0.07);
          border-bottom: 1px solid rgba(167,139,250,0.12);
          padding: 10px 14px;
          margin: 0;
        }
        .np-section-title--live {
          color: #059669;
          background: rgba(52,211,153,0.06);
          border-bottom-color: rgba(52,211,153,0.15);
        }
        .np-rows {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 0 14px;
        }
        .np-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid rgba(167,139,250,0.07);
          gap: 12px;
        }
        .np-row:last-child {
          border-bottom: none;
        }
        .np-row--empty {
          opacity: 0.4;
        }
        .np-row--accent {
          margin-top: 4px;
          border-top: 1px solid rgba(167,139,250,0.12);
          border-bottom: none;
          background: rgba(167,139,250,0.04);
          padding: 8px 0;
        }
        .np-row--highlight {
          background: rgba(167,139,250,0.06);
          border-radius: 0;
          padding: 10px 0;
        }
        .np-label {
          font-size: 11px;
          color: #64748b;
          font-weight: 600;
          white-space: nowrap;
          flex-shrink: 0;
          min-width: 100px;
        }
        .np-value {
          font-size: 12px;
          font-weight: 700;
          color: #7c3aed;
          text-align: right;
          word-break: break-word;
        }
        .np-value--missing {
          color: #94a3b8;
          font-weight: 400;
          font-style: italic;
        }
        .np-value--lord {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #d7c188;
        }
        .np-no-data {
          font-size: 10px;
          color: rgba(220,38,38,0.7);
          font-style: italic;
          padding: 8px 14px 4px;
          margin: 0;
        }
        .np-footer {
          margin-top: 16px;
          display: flex;
          gap: 12px;
        }
        .np-btn {
          flex: 1;
          padding: 14px 10px;
          background: rgba(167,139,250,0.08);
          border: 1px solid rgba(167,139,250,0.25);
          border-radius: 14px;
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #7c3aed;
          cursor: pointer;
          transition: background 0.2s;
        }
        .np-btn:hover {
          background: rgba(167,139,250,0.15);
        }
      </style>`;
  }

  // ─── FUNCIÓN PRINCIPAL EXPORTADA ──────────────────────────────

  /**
   * renderNatalPanel(state, context)
   * @param {object} state    — El estado global de KAIROS
   * @param {object} context  — Objeto con: { age, profection, lordOriginal, translatedDayPlanet, sc, t }
   * @returns {string}        — HTML completo del panel técnico natal
   */
  function renderNatalPanel(state, context) {
    const { age, profection, lordOriginal, translatedDayPlanet, sc, t } = context;

    // ─── LOG DE EJECUCIÓN ────────────────────────────────────
    console.log('[KAIROS] renderNatalPanel EXECUTING 🚀', {
      viaStateUser:      Object.keys(state?.user?.natalPlanets || {}),
      viaStateUserCount: Object.keys(state?.user?.natalPlanets || {}).length,
      viaShadowPlanets:  Object.keys(
        window.totalShadowContext?.natal_context?.planets || {}
      ),
      viaShadowCount: Object.keys(
        window.totalShadowContext?.natal_context?.planets || {}
      ).length,
      rendererSource: Object.keys(window.totalShadowContext?.natal_context?.planets || {}).length > 0
        ? 'totalShadowContext'
        : (Object.keys(state?.user?.natalPlanets || {}).length > 0 ? 'state.user.natalPlanets' : 'SIN DATOS'),
    });

    const chartSection    = (typeof window.renderChart650 === 'function') ? window.renderChart650(state) : '';
    const planetsSection  = _buildPlanetsSection(state);
    // [6.14T] housesSection eliminada — casas visibles junto a cada planeta
    const annualSection   = _buildAnnualSection({ age, profection, lordOriginal });
    const transitsSection = _buildTransitsSection({ sc, state, translatedDayPlanet, lordOriginal });

    // Fecha y hora técnica para la cabecera
    const _now = new Date();
    const _dateStr = _now.toLocaleDateString('es-ES', { day:'2-digit', month:'long', year:'numeric' });
    const _timeStr = _now.toLocaleTimeString('es-ES', { hour:'2-digit', minute:'2-digit' });
    const _tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local';
    const _dateLabel = `${_dateStr} · ${_timeStr} · ${_tz}`;

    return `
      ${_buildStyles()}
      <div class="np-panel">
        <p class="np-panel-header">↳ Tu Mapa Natal · Serie 650 v1.7.0</p>
        <p style="font-size:9px;color:#94a3b8;letter-spacing:0.05em;margin:0 0 16px;text-align:right;">${_dateLabel}</p>

        ${chartSection}
        ${planetsSection}
        ${annualSection}
        ${transitsSection}

        <div class="np-footer">
          <button class="np-btn" onclick="refreshTransits().then(() => setTab('carta'))">
            ↺ Refrescar Tránsitos
          </button>
        </div>
      </div>`;
  }

  // Exponer globalmente
  window.renderNatalPanel = renderNatalPanel;
  console.log('[KAIROS] natal_panel_renderer.js v1.0 — window.renderNatalPanel registrado ✅');

})();
