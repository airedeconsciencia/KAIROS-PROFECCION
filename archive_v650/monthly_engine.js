/**
 * KAIROS | Monthly Engine v0.1.0
 * Analiza ciclos lunares y tendencias mensuales.
 * Humanized and dynamic.
 */

const monthly_engine = {
    /**
     * Genera un resumen mensual para el usuario.
     */
    async getMonthlyForecast(currentTransits, lang = 'es') {
        const solSign = currentTransits['Sol'] || 'Aries';
        
        // V49.5: Cálculo astronómico real para el clima mensual
        let moonPhases = { full: null, new: null };
        let marsIngress = null;

        if (typeof Astronomy !== 'undefined') {
            try {
                const now = new Date();
                const time = Astronomy.MakeTime(now);
                
                // 1. Fases Lunares
                const nFull = Astronomy.SearchMoonPhase(2, time, 30);
                const nNew = Astronomy.SearchMoonPhase(0, time, 30);
                
                if (nFull) {
                    const lonFull = Astronomy.EclipticLongitude('Moon', nFull.time);
                    moonPhases.full = { 
                        date: nFull.time.date, 
                        sign: ZODIAC_LIST[Math.floor(((lonFull % 360) + 360) % 360 / 30)]
                    };
                }
                if (nNew) {
                    const lonNew = Astronomy.EclipticLongitude('Moon', nNew.time);
                    moonPhases.new = { 
                        date: nNew.time.date, 
                        sign: ZODIAC_LIST[Math.floor(((lonNew % 360) + 360) % 360 / 30)]
                    };
                }

                // 2. Ingreso de Marte (Búsqueda en 45 días)
                const startLonMars = Astronomy.EclipticLongitude('Mars', time);
                let currentMarsSignIdx = Math.floor(((startLonMars % 360) + 360) % 360 / 30);
                for (let d = 1; d <= 45; d++) {
                    const futureTime = Astronomy.MakeTime(new Date(now.getTime() + d * 24 * 60 * 60 * 1000));
                    const nextLonMars = Astronomy.EclipticLongitude('Mars', futureTime);
                    const nextMarsSignIdx = Math.floor(((nextLonMars % 360) + 360) % 360 / 30);
                    if (nextMarsSignIdx !== currentMarsSignIdx) {
                        marsIngress = {
                            date: futureTime.date,
                            sign: ZODIAC_LIST[nextMarsSignIdx]
                        };
                        break;
                    }
                }

            } catch (e) { console.error("Monthly Astral Calculation Error:", e); }
        }

        const DATA = {
            es: {
                title: "ENFOQUE DEL MES",
                intro: `El Sol actual en ${solSign} marca el clima general que respiramos. Esta energía influye en el ritmo de tus proyectos y en tu vitalidad física y mental.`,
                lunarTitle: "CICLOS LUNARES DEL MES",
                marsTitle: "DINÁMICA DE ACCIÓN (MARTE)",
                forecasts: {
                    'Aries': { focus: "INICIO Y ACCIÓN", desc: "Es un mes para plantar banderas. La energía solar en Aries te impulsa a romper la inercia y comenzar aquello que has estado postergando. No esperes permiso, avanza con audacia." },
                    'Tauro': { focus: "CONSOLIDACIÓN", desc: "Tiempo de materializar. El Sol en Tauro favorece la paciencia, el disfrute de los sentidos y la estabilización de tus recursos. Construye sobre bases sólidas." },
                    'Géminis': { focus: "COMUNICACIÓN", desc: "Mes de intercambio y curiosidad. Tu mente se acelera y surgen nuevas conexiones. Es el momento ideal para aprender, negociar y mover información." },
                    'Cáncer': { focus: "PROTECCIÓN Y RAÍCES", desc: "El foco vuelve al hogar y a lo emocional. Un mes para nutrir tus bases, conectar con tus seres queridos y fortalecer tu refugio interno." },
                    'Leo': { focus: "EXPRESIÓN Y BRILLO", desc: "Soberanía pura. Es el momento de mostrar tu talento, disfrutar de la alegría y liderar desde el corazón. Permítete brillar sin disculpas." },
                    'Virgo': { focus: "ORDEN Y EFICIENCIA", desc: "Mes de limpieza y ajuste. Tienes la precisión necesaria para organizar tu rutina, cuidar tu salud y perfeccionar los detalles técnicos de tu vida." },
                    'Libra': { focus: "VÍNCULOS Y ARMONÍA", desc: "El enfoque está en el 'otro'. Tiempo de negociar, buscar equilibrio en tus relaciones y rodearte de belleza y armonía social." },
                    'Escorpio': { focus: "TRANSFORMACIÓN", desc: "Fase de profundidad. Un mes para soltar lo que ya no sirve, investigar lo oculto y regenerar tu energía desde las cenizas." },
                    'Sagitario': { focus: "EXPANSIÓN Y VISIÓN", desc: "Optimismo y búsqueda de sentido. Es el momento de ampliar tus horizontes, ya sea mediante viajes, estudios superiores o nuevas filosofías." },
                    'Capricornio': { focus: "ESTRUCTURA Y LOGRO", desc: "Cénit de la responsabilidad. Un mes para enfocarte en tus metas profesionales, aplicar disciplina y consolidar tu autoridad en el mundo." },
                    'Acuario': { focus: "INNOVACIÓN Y REDES", desc: "Visión de futuro. La energía favorece lo grupal, lo disruptivo y lo tecnológico. Sueña en grande y conecta con personas afines." },
                    'Piscis': { focus: "CIERRE Y SUEÑOS", desc: "Fase de descompresión. El Sol en Piscis invita a la introspección, al perdón y a la conexión con lo profundo. Es tiempo de limpiar el terreno antes del nuevo ciclo." }
                }
            },
            en: {
                title: "MONTHLY FOCUS",
                intro: `The current Sun in ${solSign} marks the general climate we breathe. This energy influences the rhythm of your projects and your physical and mental vitality.`,
                lunarTitle: "MONTHLY LUNAR CYCLES",
                marsTitle: "ACTION DYNAMICS (MARS)",
                forecasts: {
                    'Aries': { focus: "INITIATION AND ACTION", desc: "It's a month to plant standards. Solar energy in Aries drives you to break inertia and start what you've been putting off. Don't wait for permission, move forward boldly." },
                    'Tauro': { focus: "CONSOLIDATION", desc: "Time to materialize. The Sun in Taurus favors patience, enjoyment of the senses, and stabilization of your resources. Build on solid foundations." },
                    'Géminis': { focus: "COMMUNICATION", desc: "Month of exchange and curiosity. Your mind accelerates and new connections emerge. It's the ideal time to learn, negotiate, and move information." },
                    'Cáncer': { focus: "PROTECTION AND ROOTS", desc: "The focus returns to home and the emotional. A month to nurture your bases, connect with loved ones, and strengthen your inner refuge." },
                    'Leo': { focus: "EXPRESSION AND SHINE", desc: "Pure sovereignty. It's time to show your talent, enjoy joy, and lead from the heart. Allow yourself to shine without apologies." },
                    'Virgo': { focus: "ORDER AND EFFICIENCY", desc: "Month of cleaning and adjustment. You have the necessary precision to organize your routine, care for your health, and perfect the technical details of your life." },
                    'Libra': { focus: "BONDS AND HARMONY", desc: "The focus is on the 'other'. Time to negotiate, seek balance in your relationships, and surround yourself with beauty and social harmony." },
                    'Escorpio': { focus: "TRANSFORMATION", desc: "Phase of depth. A month to let go of what no longer serves, investigate the hidden, and regenerate your energy from the ashes." },
                    'Sagitario': { focus: "EXPANSION AND VISION", desc: "Optimism and search for meaning. It's the moment to expand your horizons, whether through travel, higher studies, or new philosophies." },
                    'Capricornio': { focus: "STRUCTURE AND ACHIEVEMENT", desc: "Zenith of responsibility. A month to focus on your professional goals, apply discipline, and consolidate your authority in the world." },
                    'Acuario': { focus: "INNOVATION AND NETWORKS", desc: "Vision of the future. Energy favors the group, the disruptive, and the technological. Dream big and connect with like-minded people." },
                    'Piscis': { focus: "CLOSURE AND DREAMS", desc: "Decompression phase. The Sun in Pisces invites introspection, forgiveness, and connection with the invisible. Prepare for the new solar cycle." }
                }
            }
        };

        const config = DATA[lang] || DATA['es'];
        const forecast = config.forecasts[solSign] || { focus: "---", desc: "---" };

        return {
            title: config.title,
            intro: config.intro,
            lunarTitle: config.lunarTitle,
            marsTitle: config.marsTitle,
            mainFocus: solSign,
            focus: forecast.focus,
            desc: forecast.desc,
            moonPhases: moonPhases,
            marsSign: currentTransits['Marte'] || 'Tauro',
            marsIngress: marsIngress
        };
    }
};

// Export
if (typeof module !== 'undefined') {
    module.exports = monthly_engine;
} else {
    window.monthly_engine = monthly_engine;
}
