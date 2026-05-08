/**
 * KAIROS | History Engine v0.1.0
 * Analiza patrones entre el Diario de Sincronía y el Clima Cósmico.
 */

const history_engine = {
    /**
     * Analiza una lista de entradas del diario para detectar patrones.
     */
    analyzeJournal(entries, lang = 'es') {
        if (!entries || entries.length < 3) {
            return {
                ready: false,
                message: lang === 'es' ? 
                    "Necesito al menos 3 registros para empezar a detectar tus patrones." : 
                    "I need at least 3 records to start detecting your patterns."
            };
        }

        const patterns = [];

        // 1. Análisis por Elemento de la Luna
        const moonElementsGroups = {
            'Fuego': ['Aries', 'Leo', 'Sagitario'],
            'Tierra': ['Tauro', 'Virgo', 'Capricornio'],
            'Aire': ['Géminis', 'Libra', 'Acuario'],
            'Agua': ['Cáncer', 'Escorpio', 'Piscis']
        };

        const elementStats = { 'Fuego': 0, 'Tierra': 0, 'Aire': 0, 'Agua': 0 };
        const elementCounts = { 'Fuego': 0, 'Tierra': 0, 'Aire': 0, 'Agua': 0 };

        entries.forEach(entry => {
            const moon = entry.currentMoon;
            for (const [el, signs] of Object.entries(moonElementsGroups)) {
                if (signs.includes(moon)) {
                    elementStats[el] += entry.energy || 50;
                    elementCounts[el]++;
                }
            }
        });

        // Detectar si hay un elemento con energía notablemente más alta o baja
        for (const [el, count] of Object.entries(elementCounts)) {
            if (count >= 1) {
                const avg = elementStats[el] / count;
                if (avg > 70) {
                    patterns.push(lang === 'es' ? 
                        `Tu energía vital suele ser muy alta cuando la Luna transita por signos de ${el}.` : 
                        `Your vital energy tends to be very high when the Moon transits ${el} signs.`);
                }
            }
        }

        // 2. Correlación Radar vs Vitalidad
        let radarTensionCount = 0;
        let intenseRadarEntries = entries.filter(e => e.radarStatus === 'intense');
        if (intenseRadarEntries.length > 0) {
            const avgEnergyIntense = intenseRadarEntries.reduce((acc, curr) => acc + (curr.energy || 50), 0) / intenseRadarEntries.length;
            if (avgEnergyIntense < 40) {
                patterns.push(lang === 'es' ? 
                    "Cuando el Radar está en rojo, tu energía suele bajar, confirmando tu sensibilidad al clima intenso." : 
                    "When the Radar is red, your energy tends to drop, confirming your sensitivity to intense weather.");
            }
        }

        // 3. Palabra clave por Luna (Básico)
        const introspectiveWords = ['introspección', 'triste', 'emocional', 'casa', 'familia', 'llorar', 'calma', 'dentro', 'paz'];
        let waterMoonIntrospection = 0;
        let waterMoonCount = 0;

        entries.forEach(entry => {
            const moon = entry.currentMoon;
            if (moonElementsGroups['Agua'].includes(moon)) {
                waterMoonCount++;
                const text = (entry.emotions + " " + entry.decisions).toLowerCase();
                if (introspectiveWords.some(word => text.includes(word))) {
                    waterMoonIntrospection++;
                }
            }
        });

        if (waterMoonCount > 0 && waterMoonIntrospection / waterMoonCount >= 0.5) {
            patterns.push(lang === 'es' ? 
                "En días de Luna en signos de Agua, tus notas muestran una tendencia clara a la introspección." : 
                "On Water Moon days, your notes show a clear tendency toward introspection.");
        }

        // 4. Frecuencia
        if (entries.length >= 7) {
            patterns.push(lang === 'es' ? 
                "¡Gran constancia! Estás creando un mapa de autoconocimiento muy sólido." : 
                "Great consistency! You are creating a very solid map of self-knowledge.");
        }

        return {
            ready: true,
            patterns: patterns.length > 0 ? patterns : [
                lang === 'es' ? "Aún estoy recolectando datos, pronto verás correlaciones aquí." : 
                                "I'm still collecting data, you'll see correlations here soon."
            ]
        };
    }
};

if (typeof module !== 'undefined') {
    module.exports = history_engine;
} else {
    window.history_engine = history_engine;
}
