// ============================================================
// ⚠️ MÓDULO CONGELADO — ascendant_engine.js v1.7.1
// NO MODIFICAR sin aprobación expresa de Roberto
// Última validación: Fase 6.18 — Abril 2026
// ============================================================
/*
KAIROS CORE MODULE
ASCENDANT ENGINE

STATUS: LOCKED
VERSION: STABLE (V48.3.11)

Este módulo calcula el Ascendente a partir de:
- fecha (YYYY-MM-DD)
- hora local (HH:mm)
- coordenadas (latitud, longitud)
- timezone IANA (detectado automáticamente o consultado)
- conversión UT
- cálculo sidéreo

No debe modificarse salvo error crítico documentado.
*/

const ZODIAC_ECL = [
  'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
  'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
];

/**
 * Función pública reutilizable para el cálculo universal del Ascendente.
 * @param {string} birthDate - Formato YYYY-MM-DD.
 * @param {string} birthTime - Formato HH:mm.
 * @param {number} latitude - Latitud geográfica.
 * @param {number} longitude - Longitud geográfica.
 * @param {string} timezone - (Opcional) Timezone IANA. Si no se pasa, se infiere por coordenadas.
 */
function getAscendant(birthDate, birthTime, latitude, longitude, timezone = null) {
    const [y, m, d] = birthDate.split('-').map(Number);
    return calculateAscendant(y, m, d, birthTime, latitude, longitude, null, timezone);
}

/**
 * Motor Interno del Ascendente.
 * Realiza la conversión IANA -> UT -> Sidereal -> Ascendant.
 */
function calculateAscendant(y, m, d, hourStr, lat, lon, utcOffset, explicitTz = null) {
  // 1. Verificación de librerías críticas
  const hasAstronomy = typeof window.Astronomy !== 'undefined';
  const hasLuxon = typeof window.luxon !== 'undefined';

  if (!hasAstronomy || !hasLuxon) {
    console.error("❌ CRITICAL: Motor astronómico no disponible (Astronomy o Luxon missing).");
    return { sign: 'Aries', deg: 0, min: 0, error: true, errorReason: 'Libraries missing' };
  }

  try {
    if (!hourStr || !hourStr.includes(':')) {
       return { sign: 'Aries', deg: 0, min: 0, error: true, errorReason: 'Invalid time' };
    }

    const [h, min] = hourStr.split(':').map(Number);
    const latNum = parseFloat(lat);
    const lonNum = parseFloat(lon);

    if (isNaN(latNum) || isNaN(lonNum)) {
       return { sign: 'Aries', deg: 0, min: 0, error: true, errorReason: 'NaN coords' };
    }

    // 2. CONVERSIÓN DE PRECISIÓN IANA (UNIVERSALIZACIÓN V48.3.11)
    let tzArg = explicitTz || (typeof state !== 'undefined' ? (state.tempTimeZone || state.user.birthTimeZone) : null) || 'UTC';
    
    // Fallback Geodésico Inteligente (V48.3.11)
    if (!tzArg || tzArg === 'UTC') {
        if (latNum > 35 && latNum < 44 && lonNum > -10 && lonNum < 6) tzArg = 'Europe/Madrid';
        else if (lonNum < -65 && lonNum > -130 && latNum > 20 && latNum < 50) tzArg = 'America/New_York';
        else if (lonNum < -30 && lonNum > -75 && latNum < 0 && latNum > -55) tzArg = 'America/Argentina/Buenos_Aires';
        else if (lonNum > 120 && lonNum < 155 && latNum > 25 && latNum < 50) tzArg = 'Asia/Tokyo';
        else tzArg = 'UTC';
    }

    const luxonDt = window.luxon.DateTime.fromObject(
      { year: y, month: m, day: d, hour: h, minute: min },
      { zone: tzArg }
    );
    
    if (!luxonDt.isValid) {
      throw new Error(`Invalid IANA configuration: ${luxonDt.invalidReason}`);
    }

    const utDate = luxonDt.toJSDate();
    const realOffset = luxonDt.offset / 60;

    // 3. Julian Day y Tiempo Astronómico
    const time = window.Astronomy.MakeTime(utDate);
    const jdUt = time.ut;
    const jdTt = time.tt;
    const deltaT = (jdTt - jdUt) * 86400;

    // 4. Variables de Eclíptica
    const gastHours = window.Astronomy.SiderealTime(time);
    const gastDeg = (gastHours * 15) % 360;
    const tilt = window.Astronomy.e_tilt(time);
    const trueEps = tilt.tobl;

    // 5. LST y RAMC
    let lstDegrees = (gastDeg + lonNum + 360) % 360;
    const RAMC = lstDegrees * Math.PI / 180;
    const epsRad = trueEps * Math.PI / 180;
    const phiRad = latNum * Math.PI / 180;

    // 6. Fórmula del Ascendente (Esférica de Precisión)
    const num = Math.cos(RAMC);
    const den = -((Math.sin(RAMC) * Math.cos(epsRad)) + (Math.tan(phiRad) * Math.sin(epsRad)));

    let ascRad = Math.atan2(num, den);
    let ascDeg = (ascRad * 180 / Math.PI + 360) % 360;

    // 7. Desglose de Precisión
    const signIndex = Math.floor((ascDeg % 360) / 30);
    const sign = ZODIAC_ECL[signIndex] || 'Aries';
    const totalMin = (ascDeg % 1) * 60;
    const degInSign = Math.floor(ascDeg % 30);
    const minInSign = Math.floor(totalMin);
    const secInSign = Math.round((totalMin % 1) * 60);

    // KAIROS TIME AUDIT (Core Trace)
    console.log(`KAIROS TIME AUDIT`);
    console.log(`zone: ${tzArg}`);
    console.log(`offset: ${realOffset >= 0 ? '+' : ''}${realOffset}`);
    console.log(`local: ${y}-${m.toString().padStart(2,'0')}-${d.toString().padStart(2,'0')} ${hourStr}`);
    console.log(`UT: ${luxonDt.toUTC().toFormat('yyyy-MM-dd HH:mm')}`);
    console.log(`JD: ${jdUt.toFixed(8)}`);
    console.log(`GST: ${gastDeg.toFixed(6)}`);
    console.log(`LST: ${lstDegrees.toFixed(6)}`);
    console.log(`ASC raw longitude: ${ascDeg.toFixed(6)}`);
    console.log(`ASC sign result: ${sign} ${degInSign}° ${minInSign}'`);
    
    return { 
        sign, 
        deg: degInSign, 
        min: minInSign, 
        sec: secInSign,
        totalDeg: ascDeg, 
        ut: utDate.toISOString(), 
        offset: realOffset,
        diagnostic: {
            local: `${y}-${m.toString().padStart(2,'0')}-${d.toString().padStart(2,'0')} ${hourStr}`,
            coords: `${latNum.toFixed(6)}, ${lonNum.toFixed(6)}`,
            tzId: tzArg,
            offset: realOffset,
            ut: luxonDt.toUTC().toISO(),
            jdUt: jdUt.toFixed(8),
            deltaT: deltaT.toFixed(3),
            eps: trueEps.toFixed(6),
            gast: gastDeg.toFixed(6),
            lst: lstDegrees.toFixed(6),
            ascRaw: ascDeg.toFixed(6),
            formula: "arctan(cos(RAMC) / -(sin(RAMC)cos(ε) + tan(φ)sin(ε)))",
            result: `${sign} ${degInSign}° ${minInSign}'`
        }
    };
  } catch (e) {
    console.error("❌ MOTOR CRITICAL ERROR (Core):", e);
    return { sign: 'Aries', deg: 0, min: 0, error: true, errorReason: e.message };
  }
}

/**
 * Cálculo proactivo del offset IANA.
 */
function getOffsetAtDate(y, m, d, h, min, tz, lon) {
  if (!tz || typeof tz !== 'string' || tz === 'UTC') {
      return (lon < -20 ? -5 : (lon > -10 && lon < 5 ? 1 : 0));
  }
  try {
    const dt = window.luxon.DateTime.fromObject(
      { year: y, month: m, day: d, hour: h, minute: min },
      { zone: tz }
    );
    if (!dt.isValid) return (lon < -20 ? -5 : 1);
    return dt.offset / 60;
  } catch (e) {
    return Math.round(lon / 15);
  }
}

// Exportación global para entorno navegador
window.getAscendant = getAscendant;
window.calculateAscendant = calculateAscendant;
window.getOffsetAtDate = getOffsetAtDate;
