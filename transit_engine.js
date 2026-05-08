// ⚠️ MÓDULO CONGELADO — transit_engine.js v1.7.2
// Micro-descongelación autorizada para ampliación de contrato v2 [Fase 6.18C]
// NO MODIFICAR lógicas de cálculo.
// ============================================================
/**
 * KAIROS | Transit Engine v0.1.2
 * Proporciona el estado astronómico actual (Clima Astrológico).
 */

const ASTRO_BODY_MAP = {
  'Sol': 'Sun',
  'Luna': 'Moon',
  'Mercurio': 'Mercury',
  'Venus': 'Venus',
  'Marte': 'Mars',
  'Júpiter': 'Jupiter',
  'Saturno': 'Saturn',
  'Urano': 'Uranus',
  'Neptuno': 'Neptune',
  'Plutón': 'Pluto'
};

const v2Keys = {
    'Sol': 'SOL', 'Luna': 'LUNA', 'Mercurio': 'MERCURIO', 
    'Venus': 'VENUS', 'Marte': 'MARTE', 'Júpiter': 'JUPITER', 
    'Saturno': 'SATURNO', 'Urano': 'URANO', 'Neptuno': 'NEPTUNO', 
    'Plutón': 'PLUTON'
};

const transit_engine = {
    _cache: {},

    /**
     * Limpia la caché si el día cambia.
     */
    _checkCacheValidity() {
        const today = new Date().toDateString();
        if (this._cache.date !== today) {
            this._cache = { date: today };
        }
    },
    /**
     * Calcula los tránsitos geocéntricos actuales.
     * Utiliza Astronomy Engine para ligereza en el clima actual.
     */
    async getCurrentTransits() {
        const now = new Date();
        const transits = {};
        
        console.log(`[KAIROS TRANSIT ENGINE] ⚙️ SYNCING WITH UNIVERSE...`);
        console.log(`[KAIROS TRANSIT ENGINE] Time Context: ${now.toISOString()}`);

        // PRIORIDAD 1: Motor de Alta Precisión (Swiss Ephemeris)
        if (typeof window.getPlanetaryPositions === 'function') {
            try {
                console.log("[KAIROS TRANSIT ENGINE] Using High-Precision Engine (SwissEph)");
                
                const dateStr = now.toISOString().split('T')[0];
                const timeStr = now.toISOString().split('T')[1].substring(0, 5);
                
                const result = await window.getPlanetaryPositions(dateStr, timeStr, 0, 0, 'UTC');
                
                if (result && result.positions) {
                    const bodiesToMap = {
                        'Sol': 'SUN', 'Luna': 'MOON', 'Mercurio': 'MERCURY', 
                        'Venus': 'VENUS', 'Marte': 'MARS', 'Júpiter': 'JUPITER', 
                        'Saturno': 'SATURN', 'Urano': 'URANUS', 'Neptuno': 'NEPTUNE', 
                        'Plutón': 'PLUTO'
                    };

                    for (const [kName, eName] of Object.entries(bodiesToMap)) {
                        const pos = result.positions[eName];
                        if (pos && typeof pos.longitude === 'number') {
                            const signName = pos.sign;
                            
                            // 1. Clave Narrativa (Legacy)
                            transits[kName] = signName;
                            
                            // 2. Clave Geometría v2 (Normalizada SOL, LUNA...)
                            const v2Name = v2Keys[kName];
                            if (v2Name) {
                                transits[v2Name] = {
                                    sign: signName,
                                    degree: pos.deg,
                                    minute: pos.min,
                                    longitude: pos.longitude,
                                    isRetro: pos.isRetro || false
                                };
                            }
                            
                            // LOG OBLIGATORIO DE VALIDACIÓN (SwissEph Truth)
                            if (kName === 'Luna') {
                                console.log(`%c[KAIROS TRANSIT ENGINE] MOON TRUTH: ${signName} (${pos.longitude.toFixed(0)}°)`, "color: #00ff00; font-weight: bold; font-size: 14px;");
                            } else {
                                console.log(`[KAIROS TRANSIT ENGINE] body ok: ${kName.padEnd(10)} | ${signName.padEnd(12)} | ${pos.longitude.toFixed(2)}°`);
                            }
                        }
                    }
                    return transits;
                }
            } catch (err) {
                console.error("[KAIROS TRANSIT ENGINE] High-Precision Engine failed, falling back...", err);
            }
        }

        // FALLBACK: Astronomy Engine (Limpio y corregido)
        if (typeof Astronomy !== 'undefined') {
            console.warn("[KAIROS TRANSIT ENGINE] Falling back to Astronomy Engine");
            const time = Astronomy.MakeTime(now);
            
            for (const [kairosName, astroName] of Object.entries(ASTRO_BODY_MAP)) {
                try {
                    let lon;
                    if (astroName === 'Sun') {
                        const earth = Astronomy.HelioVector('Earth', time);
                        const ecl = Astronomy.Ecliptic(earth);
                        lon = (ecl.elon + 180) % 360;
                    } else if (astroName === 'Moon') {
                        lon = Astronomy.EclipticLongitude('Moon', time);
                    } else {
                        const gv = Astronomy.GeoVector(astroName, time, true);
                        if (gv) lon = Astronomy.Ecliptic(gv).elon;
                    }
                    
                    if (typeof lon === 'number' && !isNaN(lon)) {
                        const normalizedLon = ((lon % 360) + 360) % 360;
                        const signIndex = Math.floor(normalizedLon / 30);
                        const signName = (typeof ZODIAC_LIST !== 'undefined') ? ZODIAC_LIST[signIndex] : `Sign ${signIndex}`;
                        
                        // 1. Narrativa
                        transits[kairosName] = signName;

                        // 2. Geometría (SOL, LUNA...)
                        const v2Name = v2Keys[kairosName];
                        if (v2Name) {
                            const degAll = normalizedLon % 30;
                            transits[v2Name] = {
                                sign: signName,
                                degree: Math.floor(degAll),
                                minute: Math.floor((degAll % 1) * 60),
                                longitude: normalizedLon,
                                isRetro: false // Astronomy Engine fallback simple no lo calcula aquí
                            };
                        }
                    }
                } catch (e) {
                    console.warn(`[KAIROS TRANSIT ENGINE] Fallback failed for ${kairosName}`);
                }
            }
        }

        return transits;
    },

    /**
     * Obtiene activaciones de tránsitos sobre planetas natales (Premium).
     * @param {Object} natalPlanets - { 'Sol': { longitude: ... }, ... }
     * @param {Object} currentTransits - { 'Sol': 'Aries', ... } (En este caso necesitamos longitudes raw)
     */
    async getNatalActivations(natalPlanets, natalHouses, time, lang = 'es') {
        const activations = [];
        const orb = 3; // 3 grados

        const getHouseForLon = (lon, houses) => {
            if (!houses || houses.length === 0) return 0;
            const cusps = houses.map(h => h.longitude);
            for (let i = 0; i < 11; i++) {
                let start = cusps[i], end = cusps[i+1];
                if (start < end) { if (lon >= start && lon < end) return i + 1; }
                else { if (lon >= start || lon < end) return i + 1; }
            }
            return 12;
        };

        for (const [kairosName, astroName] of Object.entries(ASTRO_BODY_MAP)) {
            try {
                let currentLon;
                if (astroName === 'Sun') {
                    const earth = Astronomy.HelioVector('Earth', time);
                    const ecl = Astronomy.Ecliptic(earth);
                    currentLon = (ecl.elon + 180) % 360;
                } else if (astroName === 'Moon') {
                    currentLon = Astronomy.EclipticLongitude('Moon', time);
                } else {
                    const gv = Astronomy.GeoVector(astroName, time, true);
                    currentLon = Astronomy.Ecliptic(gv).elon;
                }

                // 1. Detección de activaciones por Casa (Premium)
                const currentHouse = getHouseForLon(currentLon, natalHouses);
                if (currentHouse > 0 && (kairosName === 'Sol' || kairosName === 'Luna' || kairosName === 'Marte' || kairosName === 'Venus' || kairosName === 'Júpiter')) {
                     activations.push({
                         transit: kairosName,
                         type: 'HOUSE',
                         house: currentHouse,
                         desc: lang === 'es' ? 
                             `${kairosName} activa tu casa ${currentHouse} hoy.` : 
                             `${kairosName} activates your ${currentHouse}th house today.`
                     });
                }

                // 2. Contactos con planetas natales
                for (const [natalName, nData] of Object.entries(natalPlanets)) {
                    const diff = Math.abs(currentLon - nData.longitude_raw);
                    const normDiff = Math.min(diff, 360 - diff);

                    if (normDiff <= orb) {
                        activations.push({
                            transit: kairosName,
                            natal: natalName,
                            type: 'CONJUNCCIÓN',
                            desc: lang === 'es' ? 
                                `${kairosName} en conjunción a tu ${natalName} natal.` : 
                                `${kairosName} conjunct your natal ${natalName}.`
                        });
                    }
                    
                    const oppDiff = Math.abs(normDiff - 180);
                    if (oppDiff <= orb) {
                        activations.push({
                            transit: kairosName,
                            natal: natalName,
                            type: 'OPOSICIÓN',
                            desc: lang === 'es' ? 
                                `${kairosName} en oposición a tu ${natalName} natal.` : 
                                `${kairosName} opposite your natal ${natalName}.`
                        });
                    }
                }
            } catch (e) {}
        }
        // Priorizar: 1. Conjunciones, 2. Casas, 3. Oposiciones. Máximo 4.
        return activations.slice(0, 4);
    },

    /**
     * Calcula la Casa Lunar (Whole Sign) basada en el Ascendente.
     */
    async getMoonHouse(ascSign = 'Aries') {
        const ZODIAC_LIST = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];
        const currentTransits = await this.getCurrentTransits();
        const moonSign = currentTransits?.Luna || 'Aries';
        
        const ascIdx = ZODIAC_LIST.indexOf(ascSign);
        const moonIdx = ZODIAC_LIST.indexOf(moonSign);
        
        if (ascIdx === -1 || moonIdx === -1) return 1;
        return (moonIdx - ascIdx + 12) % 12 + 1;
    },

    /**
     * Obtiene el regente del día actual.
     */
    getDayPlanet(date = new Date()) {
        const index = date.getDay(); // 0=Sun, 1=Mon...
        const planets = ['Sol', 'Luna', 'Marte', 'Mercurio', 'Júpiter', 'Venus', 'Saturno'];
        return planets[index];
    },

    /**
     * Proyecta el recorrido lunar para los próximos 7 días.
     * @param {string} ascSign - Signo ascendente del usuario.
     * @returns {Array} - Array de 7 objetos con {day, date, sign, house, dayRuler}
     */
    async getWeeklySequence(ascSign = 'Aries') {
        this._checkCacheValidity();
        const cacheKey = `weekly_${ascSign}`;
        if (this._cache[cacheKey]) return this._cache[cacheKey];

        const sequence = [];
        const ZODIAC_LIST = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];
        const ascIdx = ZODIAC_LIST.indexOf(ascSign);
        
        for (let i = 0; i < 7; i++) {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + i);
            
            // Forzamos mediodía para evitar cambios de signo al borde del día en proyecciones rápidas
            targetDate.setHours(12, 0, 0, 0); 

            const dateStr = targetDate.toISOString().split('T')[0];
            const timeStr = targetDate.toISOString().split('T')[1].substring(0, 5);
            
            let moonSign = 'Aries';
            try {
                // Cálculo de precisión (SwissEph) si está disponible
                if (window.getPlanetaryPositions) {
                    const result = await window.getPlanetaryPositions(dateStr, timeStr, 0, 0, 'UTC');
                    moonSign = result.positions.MOON.sign;
                } else if (typeof Astronomy !== 'undefined') {
                    // Fallback a Astronomy Engine
                    const time = Astronomy.MakeTime(targetDate);
                    const lon = Astronomy.EclipticLongitude('Moon', time);
                    const signIdx = Math.floor(((lon % 360) + 360) % 360 / 30);
                    moonSign = ZODIAC_LIST[signIdx];
                }
            } catch (e) {
                console.warn(`[TRANSIT ENGINE] Proyección fallida para día +${i}`, e);
            }

            const moonIdx = ZODIAC_LIST.indexOf(moonSign);
            const house = (moonIdx - ascIdx + 12) % 12 + 1;
            
            sequence.push({
                dayIndex: targetDate.getDay(),
                dateLabel: targetDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
                moonSign: moonSign,
                moonHouse: house,
                dayRuler: this.getDayPlanet(targetDate)
            });
        }
        this._cache[cacheKey] = sequence;
        return sequence;
    },

    /**
     * Identifica los hitos críticos del mes actual para la vista estratégica.
     * Detecta: Luna Nueva, Luna Llena, Ingreso Solar e Ingresos de planetas operativos.
     */
    async getMonthlyHotspots(date = new Date()) {
        this._checkCacheValidity();
        const monthKey = `monthly_${date.getFullYear()}_${date.getMonth()}`;
        if (this._cache[monthKey]) return this._cache[monthKey];

        const hotspots = {
            lunations: [],
            solar_ingress: null,
            operational_ingresses: []
        };

        if (typeof Astronomy === 'undefined') return hotspots;

        const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        const limitDays = 32;

        try {
            // 1. Lunaciones (Nueva y Llena)
            const phases = [
                { type: 'NEW', value: 0 },
                { type: 'FULL', value: 180 }
            ];

            for (const p of phases) {
                const search = Astronomy.SearchMoonPhase(p.value, startOfMonth, limitDays);
                if (search && search.date < nextMonth) {
                    const jsDate = search.date; 
                    const moonSign = await this.getSignAt(jsDate, 'Moon');
                    hotspots.lunations.push({
                        type: p.type,
                        date: jsDate,
                        dateLabel: jsDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
                        sign: moonSign
                    });
                }
            }

            // 2. Ingreso Solar
            // FIX: EclipticLongitude solo acepta 'Moon'. Para el Sol usamos HelioVector('Earth').
            const startTime = Astronomy.MakeTime(startOfMonth);
            const earthVec = Astronomy.HelioVector('Earth', startTime);
            const sunLon = (Astronomy.Ecliptic(earthVec).elon + 180) % 360;
            const currentSignStart = Math.floor(sunLon / 30) * 30;
            const nextSignStart = (currentSignStart + 30) % 360;
            const sunSearch = Astronomy.SearchSunLongitude(nextSignStart, startOfMonth, limitDays);
            
            if (sunSearch && sunSearch.date < nextMonth) {
                const jsDate = sunSearch.date;
                const signIdx = Math.floor(((nextSignStart % 360) + 360) % 360 / 30);
                const ZODIAC_LIST = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];
                hotspots.solar_ingress = {
                    date: jsDate,
                    dateLabel: jsDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
                    sign: ZODIAC_LIST[signIdx]
                };
            }

            // 3. Ingresos Operativos (Mercurio, Venus, Marte)
            const planets = ['Mercury', 'Venus', 'Mars'];
            const kairosNames = { 'Mercury': 'Mercurio', 'Venus': 'Venus', 'Mars': 'Marte' };

            for (const p of planets) {
                let lastSign = await this.getSignAt(startOfMonth, p);
                for (let d = 1; d <= 31; d++) {
                    const checkDate = new Date(startOfMonth.getTime() + d * 24 * 60 * 60 * 1000);
                    if (checkDate >= nextMonth) break;

                    const currentSign = await this.getSignAt(checkDate, p);
                    if (currentSign !== lastSign) {
                        hotspots.operational_ingresses.push({
                            planet: kairosNames[p],
                            date: checkDate,
                            dateLabel: checkDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' }),
                            sign: currentSign
                        });
                        lastSign = currentSign;
                    }
                }
            }

        } catch (e) {
            console.error("[TRANSIT ENGINE] Fallo al calcular hotspots mensuales:", e);
        }
        this._cache[monthKey] = hotspots;
        return hotspots;
    },

    /**
     * Utilidad para obtener el signo de un planeta en una fecha dada.
     */
    async getSignAt(date, planet) {
        const ZODIAC_LIST = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];
        
        if (window.getPlanetaryPositions) {
            const dateStr = date.toISOString().split('T')[0];
            const timeStr = date.toISOString().split('T')[1].substring(0, 5);
            const res = await window.getPlanetaryPositions(dateStr, timeStr, 0, 0, 'UTC');
            const bodyKey = planet.toUpperCase();
            if (res.positions[bodyKey]) return res.positions[bodyKey].sign;
        }

        // Fallback Astronomy Engine
        const time = Astronomy.MakeTime(date);
        let lon;
        if (planet === 'Sun') {
            const earth = Astronomy.HelioVector('Earth', time);
            lon = (Astronomy.Ecliptic(earth).elon + 180) % 360;
        } else if (planet === 'Moon') {
            lon = Astronomy.EclipticLongitude('Moon', time);
        } else {
            const gv = Astronomy.GeoVector(planet, time, true);
            lon = Astronomy.Ecliptic(gv).elon;
        }
        const signIdx = Math.floor(((lon % 360) + 360) % 360 / 30);
        return ZODIAC_LIST[signIdx];
    }
};

// Exportar
if (typeof module !== 'undefined') {
    module.exports = transit_engine;
} else {
    window.transit_engine = transit_engine;
}
