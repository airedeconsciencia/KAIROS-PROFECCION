// ============================================================
// ⚠️ MÓDULO ACTUALIZADO — natal_persistence_helper.js v1.7.4
// HOTFIX v650.5.15: Eliminado fullChart de Firestore (Float64Array crash)
// FIX v650.5.38: .lon → .longitude (ascDegAbs correcto) + ascendant_longitude en natal_context
// Validación: Mayo 2026 — Roberto
// ============================================================
/* 
KAIROS | NATAL PERSISTENCE HELPER (v1.1)
Fase 6.14K - Dataset Completo: Externos + Casas
*/

async function triggerNatalCalculationAndPersist(uid, userData = null) {
    console.log('[KAIROS NATAL] Iniciando proceso para UID:', uid);
    
    // El objeto 'db' suele estar disponible globalmente en la app KAIROS (Firebase Firestore)
    if (typeof db === 'undefined' && typeof firebase !== 'undefined') {
        window.db = firebase.firestore();
    }
    
    if (typeof db === 'undefined') {
        console.error('[KAIROS NATAL] Firestore db no detectado.');
        return;
    }

    try {
        // [v650.5.21] Si se pasan datos locales (desde el onboarding), los usamos directamente
        // Evitamos una lectura a Firestore que podría estar desfasada por una race condition.
        let data = userData;
        
        if (!data) {
            const userDoc = await db.collection('users').doc(uid).get();
            if (!userDoc.exists) {
                throw new Error(`Usuario ${uid} no existe en Firestore`);
            }
            data = userDoc.data();
        }

        const birthDay = data.birthDay;
        const birthMonth = data.birthMonth;
        const birthYear = data.birthYear;
        const birthTime = data.birthTime;
        const birthLat = data.birthLat !== undefined ? data.birthLat : data.lat;
        const birthLng = data.birthLng !== undefined ? data.birthLng : data.lng;
        const birthTimeZone = data.birthTimeZone;

        if (birthLat === undefined || birthLng === undefined || birthLat === null || birthLng === null) {
            console.warn('[KAIROS NATAL] Faltan coordenadas geográficas. Objeto data:', JSON.stringify(data));
            console.error('[KAIROS NATAL] Faltan coordenadas geográficas reales. Abortando calculation para evitar datos falsos.');
            return;
        }

        const birthDateStr = `${birthYear}-${String(birthMonth).padStart(2, '0')}-${String(birthDay).padStart(2, '0')}`;
        const birthTimeStr = birthTime || "12:00"; 
        const tz = birthTimeZone || 'UTC';

        console.log('[KAIROS NATAL] Datos de entrada:', { birthDateStr, birthTimeStr, birthLat, birthLng, tz });

        // 1. Calcular la carta completa usando la infraestructura real (chart_engine.js)
        if (typeof generateFullChart !== 'function') {
            throw new Error('generateFullChart no está disponible (asegúrate de que chart_engine.js esté cargado)');
        }

        const fullChart = await generateFullChart(birthDateStr, birthTimeStr, birthLat, birthLng, tz);
        console.log('[KAIROS NATAL] Carta calculada con éxito usando KAIROS CORE.');

        // [v1.7.2 HOTFIX] Normalizar casas: Swiss Ephemeris devuelve Float64Array o arrays de números crudos
        // Firestore NO puede serializar TypedArrays — siempre convertir a objetos planos
        const ZODIAC_NAMES = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];

        const formatPosSafe = (lon) => {
            const normLon = ((lon || 0) + 360) % 360;
            const signIndex = Math.floor(normLon / 30);
            const degAll = normLon % 30;
            return {
                longitude: normLon,
                sign: ZODIAC_NAMES[signIndex] || 'Aries',
                deg: Math.floor(degAll),
                min: Math.floor((degAll % 1) * 60)
            };
        };

        let housesArray = fullChart.houses;

        // [v1.7.3] Detección robusta de casas inválidas:
        // planetary_engine.js usaba Float64Array.map() que devuelve Float64Array(NaN) en vez de Array de objetos.
        // Después del fix en planetary_engine.js (v650.5.16), fullChart.houses es un Array de objetos válidos.
        // Esta guarda detecta ambos casos (casas rotas y casas correctas).
        const hasValidHouses = housesArray &&
            Array.isArray(housesArray) &&
            housesArray.length >= 12 &&
            housesArray[0] !== null &&
            typeof housesArray[0] === 'object' &&
            !isNaN(housesArray[0]?.longitude) &&
            housesArray[0]?.longitude !== 0; // Si todas son 0, son inválidas (bug anterior)

        if (!hasValidHouses) {
            console.log('[KAIROS NATAL] Casas inválidas o formato incorrecto — recalculando desde SWE...');
            // Intentar desde fullChart.angles directamente si tiene la info
            if (typeof getHousesAndAngles === 'function') {
                try {
                    const houseData = await getHousesAndAngles(birthDateStr, birthTimeStr, birthLat, birthLng, tz, 'P');
                    housesArray = houseData.houses; // Array de objetos planos ✅
                    console.log('[KAIROS NATAL] Casas recalculadas via getHousesAndAngles ✅', housesArray.length);
                } catch (e) {
                    console.warn('[KAIROS NATAL] Fallback getHousesAndAngles falló:', e);
                }
            }
        }

        // Verificación final: si sigue sin ser array válido, crear casas aproximadas desde ASC
        if (!Array.isArray(housesArray) || housesArray.length < 12 || isNaN(housesArray[0]?.longitude)) {
            console.warn('[KAIROS NATAL] Usando casas aproximadas desde ASC (datos de casas no disponibles)');
            const ascLon = fullChart.angles?.ASC?.longitude || 0;
            housesArray = Array.from({length: 12}, (_, i) => formatPosSafe((ascLon + i * 30) % 360));
        }

        // 2. Mapear a la estructura de persistencia solicitada (10 planetas)
        const natalPlanets = {};
        const planetMapping = {
            'SOL': 'SUN',
            'LUNA': 'MOON',
            'MERCURIO': 'MERCURY',
            'VENUS': 'VENUS',
            'MARTE': 'MARS',
            'JUPITER': 'JUPITER',
            'SATURNO': 'SATURN',
            'URANO': 'URANUS',
            'NEPTUNO': 'NEPTUNE',
            'PLUTON': 'PLUTO'
        };

        console.log("🛠️ KAIROS DEBUG: fullChart.planets keys:", Object.keys(fullChart.planets || {}));
        for (const [esKey, enKey] of Object.entries(planetMapping)) {
            const p = fullChart.planets[enKey];
            if (p) {
                natalPlanets[esKey] = {
                    sign: p.sign,
                    degree: p.deg,
                    minute: p.min,
                    longitude: p.longitude, // Corrected from p.lon
                    house: p.house,
                    isRetro: p.isRetro || false
                };
            } else {
                console.warn(`⚠️ KAIROS DEBUG: No data for planet ${enKey} (mapped from ${esKey})`);
            }
        }

        // 3. Crear el objeto de casas indexado 1-12 (Tarea 3)
        const housesObject = {};
        if (housesArray && housesArray.length >= 12) {
            housesArray.forEach((h, index) => {
                housesObject[index + 1] = {
                    sign: h.sign,
                    degree: h.deg
                };
            });
        }

        // 4. Estructura natal_context unificada (Tarea 4)
        const natal_context = {
            planets: natalPlanets,
            ascendant: fullChart.angles.ASC.sign || 'Aries',
            ascDeg: fullChart.angles.ASC.deg || 0,
            ascMin: fullChart.angles.ASC.min || 0,
            ascDegAbs: fullChart.angles.ASC.longitude || 0,
            // [v650.5.38] Campo explícito para chart_650_v1.js (sc.ascendant_longitude)
            ascendant_longitude: fullChart.angles.ASC.longitude || 0,
            houses: housesObject,
            is_real: true
        };

        // [v1.7.2] NOTA: fullChart ELIMINADO intencionalmente — contiene Float64Array que Firestore rechaza.
        // Los datos relevantes ya están normalizados en natal_context, natalPlanets y houses.
        const updateData = {
            natalPlanets: natalPlanets,
            houses: housesObject,
            natal_context: natal_context,
            asc: fullChart.angles?.ASC?.sign || 'Aries',
            ascDeg: fullChart.angles?.ASC?.deg || 0,
            ascMin: fullChart.angles?.ASC?.min || 0,
            ascDegAbs: fullChart.angles?.ASC?.longitude || 0,  // [v650.5.38] fix: .lon → .longitude
            birthChart: {
                calculatedAt: new Date().toISOString(),
                engine: "KAIROS CORE",
                version: fullChart.metadata?.version || "0.5.0-master",
                location: { lat: birthLat, lon: birthLng, city: data.birthCity || 'Desconocido' }
            }
        };

        // D.4.13 — Validación mínima de integridad natal antes de persistir
        const houses = Object.values(natalPlanets || {})
          .map(p => Number(p?.house))
          .filter(h => Number.isFinite(h));

        const allSameHouse = houses.length >= 7 && houses.every(h => h === houses[0]);

        if (allSameHouse) {
          console.error('[KAIROS ERROR] natal_context rejected: all planets in same house. Engine fallback detected.', {
            houses,
            sample: natalPlanets
          });
          throw new Error('natal_context_integrity_fail');
        }

        // 5. Persistir en Firestore
        await db.collection('users').doc(uid).update(updateData);

        console.log('[KAIROS NATAL] Persistencia completa (10 planetas + casas) ✅', {
            uid,
            planets_keys: Object.keys(natalPlanets),
            houses_count: Object.keys(housesObject).length
        });
        
        return { success: true, natalPlanets, houses: housesObject, natal_context };

    } catch (error) {
        console.error('[KAIROS NATAL] Error crítico en persistencia natal:', error);
        throw error;
    }
}

// Exportar
window.triggerNatalCalculationAndPersist = triggerNatalCalculationAndPersist;
