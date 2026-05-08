/*
KAIROS | HOUSES ENGINE (v0.5.0)
Calculates Ascendant, MC, and all 12 House Cusps using Swiss Ephemeris.
Integrated with the Kairos Canonical Motor.

Default System: Placidus ('P')
*/

async function getHousesAndAngles(birthDate, birthTime, latitude, longitude, timezone = 'UTC', houseSystem = 'P') {
    // Ensure planetary engine is initialized (it provides the SwissEph instance)
    if (typeof initPlanetaryEngine === 'function') {
        await initPlanetaryEngine();
    }

    const swe = window.swisseph_native;
    if (!swe) throw new Error("Swiss Ephemeris native instance not found.");

    try {
        const [y, m, d] = birthDate.split('-').map(Number);
        const [h, min] = birthTime.split(':').map(Number);
        const tzArg = timezone || 'UTC';

        // 1. Precise Temporal Conversion (IANA/Luxon)
        const luxonDt = window.luxon.DateTime.fromObject(
            { year: y, month: m, day: d, hour: h, minute: min, second: 0 },
            { zone: tzArg }
        );

        if (!luxonDt.isValid) throw new Error(`Invalid date/timezone: ${tzArg}`);

        const utc = luxonDt.toUTC();
        
        // 2. Julian Day conversion (Native SwissEph precision)
        const jdResult = swe.utc_to_jd(utc.year, utc.month, utc.day, utc.hour, utc.minute, utc.second, 1);
        const jdUt = jdResult.julianDayUT;

        // 3. Calculation of Houses and Angles
        // houseSystem: 'P' (Placidus), 'K' (Koch), 'C' (Campanus), 'W' (Whole Sign), etc.
        const res = swe.houses(jdUt, latitude, longitude, houseSystem);

        const ascLon = res.ascmc[0]; // Ascendant
        const mcLon = res.ascmc[1];  // MC
        
        const ZODIAC_NAMES = [
            'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
            'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
        ];

        const formatPos = (lon) => {
            const normLon = (lon + 360) % 360;
            const signIndex = Math.floor(normLon / 30);
            const degAll = normLon % 30;
            return {
                longitude: normLon,
                sign: ZODIAC_NAMES[signIndex],
                deg: Math.floor(degAll),
                min: Math.floor((degAll % 1) * 60),
                sec: Math.floor(((degAll % 1) * 60 % 1) * 60)
            };
        };

        const houseCusps = res.cusps.slice(1).map(c => formatPos(c));

        return {
            metadata: {
                version: "0.5.0-houses",
                system: houseSystem,
                utc: utc.toString(),
                jdUt: jdUt,
                location: { lat: latitude, lon: longitude }
            },
            ascendant: formatPos(ascLon),
            mc: formatPos(mcLon),
            houses: houseCusps,
            raw: res // For full technical audit
        };

    } catch (e) {
        console.error("❌ KAIROS HOUSES Error:", e);
        throw e;
    }
}

// Global Export
window.getHousesAndAngles = getHousesAndAngles;
