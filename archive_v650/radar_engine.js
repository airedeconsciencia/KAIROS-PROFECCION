/**
 * KAIROS | Radar Engine v0.1.0
 * Detecta ventanas energéticas y favorabilidad del momento.
 */

const radar_engine = {
    /**
     * Evalúa la favorabilidad del momento actual.
     * Basado en Luna, Aspectos, Regente del Día y del Año.
     */
    async getMomentRadar(params) {
        const { 
            currentTransits, 
            lordOfYear, 
            dayPlanet,
            lang = 'es' 
        } = params;

        let score = 50; // Escala 0-100 (50 es neutro)
        
        // 1. Luna (Factor principal de 'Clima')
        const moonSign = currentTransits['Luna'];
        const moonDignities = {
            'Tauro': 20,    // Exaltación
            'Cáncer': 20,   // Domicilio
            'Escorpio': -20, // Caída
            'Capricornio': -20 // Exilio
        };
        if (moonDignities[moonSign]) score += moonDignities[moonSign];

        // 2. Sincronía de Regentes
        if (dayPlanet === lordOfYear) {
            score += 15; // El día está alineado con tu año
        }

        // 3. Aspectos Mundiales (Si están disponibles en el sistema)
        // Buscamos aspectos mayores en el cielo actual
        if (window.calculateAspects && currentTransits._raw) {
            const currentAspects = window.calculateAspects(currentTransits._raw);
            currentAspects.forEach(asp => {
                if (asp.aspect === 'Trígono' || asp.aspect === 'Sextil') score += 5;
                if (asp.aspect === 'Cuadratura' || asp.aspect === 'Oposición') score -= 5;
            });
        }

        // 4. Ciclo Sol-Luna (Fase)
        const solSign = currentTransits['Sol'];
        if (moonSign === solSign) {
            score -= 10; // Luna Nueva: Inicio introspectivo, energía baja
        } else if (ZODIAC_LIST[(ZODIAC_LIST.indexOf(solSign) + 6) % 12] === moonSign) {
            score += 5; // Luna Llena: Alta visibilidad pero posible tensión
        }

        // Determinar Indicador
        let status = 'neutral';
        let color = 'yellow';
        let label = (lang === 'es' ? '🟡 FOCALIZAR' : '🟡 FOCUS');

        if (score >= 65) {
            status = 'favorable';
            color = 'green';
            label = (lang === 'es' ? '🟢 BUEN MOMENTO' : '🟢 GOOD TIME');
        } else if (score <= 35) {
            status = 'intense';
            color = 'red';
            label = (lang === 'es' ? '🔴 ATENCIÓN' : '🔴 CAUTION');
        }

        const descriptions = {
            es: {
                favorable: {
                    meaning: "Clima expansivo y fluido. La energía vital está en su punto óptimo.",
                    advice: "Momento ideal para lanzar iniciativas o tomar decisiones valientes."
                },
                neutral: {
                    meaning: "Fase de equilibrio estable. Sin grandes tensiones ni impulsos gratuitos.",
                    advice: "Excelente para el trabajo constante y organizar tu agenda sin agotarte."
                },
                intense: {
                    meaning: "Atmósfera cargada o en tensión. Los resultados requieren esfuerzo extra.",
                    advice: "Prioriza el descanso. Observa antes de actuar y evita confrontaciones."
                }
            },
            en: {
                favorable: {
                    meaning: "The current climate is expansive and fluid. Obstacles are low and vital energy is at its peak.",
                    advice: "Take advantage to launch initiatives, have that pending talk, or make decisions that require bravery. The sky supports your pulse today."
                },
                neutral: {
                    meaning: "We are in a phase of stable balance. There are no major tensions, but no free external impulses either.",
                    advice: "It's the ideal time for steady work. Move forward with your current projects, organize your schedule, and maintain a productive pace without burning out."
                },
                intense: {
                    meaning: "The atmosphere is charged or in tension. It's a time of high friction where results may require extra effort.",
                    advice: "Prioritize rest and introspection. Avoid confrontations, postpone critical decisions, and observe before acting. Calm is your superpower now."
                }
            }
        };

        const currentDesc = descriptions[lang][status];

        return {
            score,
            status,
            color,
            label,
            description: currentDesc.meaning,
            advice: currentDesc.advice
        };
    }
};

// Export
if (typeof module !== 'undefined') {
    module.exports = radar_engine;
} else {
    window.radar_engine = radar_engine;
}
