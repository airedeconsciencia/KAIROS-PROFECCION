/*
KAIROS CORE | PLANETARY ENGINE (v0.5.0)
STATUS: STABLE / FROZEN
BASE: Swiss Ephemeris WASM

This module handles the core astronomical calculations for planetary positions.
It provides the shared initialization for the Swiss Ephemeris instance.
*/

let swephReady = false;
let swe = null;

const KAIROS_BODIES = {
    SUN: 0,
    MOON: 1,
    MERCURY: 2,
    VENUS: 3,
    MARS: 4,
    JUPITER: 5,
    SATURN: 6,
    URANUS: 7,
    NEPTUNE: 8,
    PLUTO: 9,
    MEAN_NODE: 10,
    TRUE_NODE: 11,
    MEAN_APOG: 12, // Lilith Media
    OSCU_APOG: 13, // Lilith Verdadera
    CHIRON: 15
};

const ZODIAC_NAMES = [
  'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
  'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
];

async function preloadEphemeris(sweInstance) {
    const FS = sweInstance.SweModule?.FS || sweInstance.FS || window.FS || window.Module?.FS;
    if (!FS) return;

    const path = '/ephe';
    try { FS.mkdir(path); } catch (e) {}

    const files = ['sepl_18.se1', 'semo_18.se1', 'seas_18.se1'];
    // We assume the ephemeris are at /ephe on the current origin
    const origin = window.location.origin;

    for (const file of files) {
        try {
            const resp = await fetch(`${origin}/ephe/${file}`);
            if (!resp.ok) continue;
            const buffer = await resp.arrayBuffer();
            FS.writeFile(`${path}/${file}`, new Uint8Array(buffer));
        } catch (err) {
            console.error(`❌ KAIROS CORE: Failed to preload ${file}`, err);
        }
    }
}

async function initPlanetaryEngine() {
    if (swephReady) return;
    swe = window.swisseph_native;
    
    if (!swe) throw new Error("KAIROS CORE: swisseph_native instance not found.");

    try {
        if (typeof swe.initSwissEph === 'function') await swe.initSwissEph();
        await preloadEphemeris(swe);
        if (typeof swe.set_ephe_path === 'function') swe.set_ephe_path('/ephe');
        
        swephReady = true;
    } catch (e) {
        console.error("❌ KAIROS CORE BUG: initPlanetaryEngine error:", e);
        throw e;
    }
}

async function getPlanetaryPositions(birthDate, birthTime, latitude, longitude, timezone = 'UTC', manualUtcOffset = null) {
    if (!swephReady) await initPlanetaryEngine();

    try {
        const [y, m, d] = birthDate.split('-').map(Number);
        const [h, min] = birthTime.split(':').map(Number);
        const tzArg = timezone || 'UTC';

        const luxonDt = window.luxon.DateTime.fromObject(
            { year: y, month: m, day: d, hour: h, minute: min, second: 0 },
            { zone: tzArg }
        );

        if (!luxonDt.isValid) throw new Error(`Invalid date/timezone: ${tzArg}`);

        let utc = manualUtcOffset !== null ? 
                  luxonDt.setZone('UTC', { keepLocalTime: true }).minus({ hours: manualUtcOffset }) : 
                  luxonDt.toUTC();

        const jdResult = swe.utc_to_jd(utc.year, utc.month, utc.day, utc.hour, utc.minute, utc.second, 1);
        const jdUt = jdResult.julianDayUT;
        const deltaT = swe.deltat(jdUt);

        const GEO_FLAGS = 2 | 256; // SWIEPH | SPEED
        const TOPO_FLAGS = 2 | 256 | 32768; // + TOPOCTR

        if (typeof swe.set_topo === 'function') {
            swe.set_topo(longitude || 0, latitude || 0, 0);
        }

        const results = {};
        for (const [name, id] of Object.entries(KAIROS_BODIES)) {
            const res = swe.calc_ut(jdUt, id, GEO_FLAGS);
            const lon = res[0];
            const speed = res[3];
            const signIndex = Math.floor(lon / 30);
            
            results[name] = {
                id: id,
                longitude: lon,
                sign: ZODIAC_NAMES[signIndex],
                deg: Math.floor(lon % 30),
                min: Math.floor(((lon % 30) % 1) * 60),
                sec: Math.floor(((((lon % 30) % 1) * 60) % 1) * 60),
                isRetro: speed < 0,
                speed: speed
            };
        }

        return {
            metadata: {
                version: "0.5.0-canonical",
                utc: utc.toString(),
                jdUt: jdUt,
                deltaT: deltaT * 86400,
                location: { lat: latitude, lon: longitude }
            },
            positions: results
        };

    } catch (e) {
        console.error("❌ KAIROS CORE: Planetary calculation error:", e);
        throw e;
    }
}

// Global Export
window.getPlanetaryPositions = getPlanetaryPositions;
window.initPlanetaryEngine = initPlanetaryEngine;
