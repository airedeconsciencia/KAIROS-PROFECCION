/**
 * KAIROS | Daily Engine v0.1.2
 * Generador dinámico de Rituales Diarios - Tono Humanizado.
 */

const MOON_FEEL = {
    es: {
        'Aries': "una chispa de entusiasmo que te empuja a empezar algo nuevo sin dudarlo.",
        'Tauro': "un deseo de disfrutar el momento, buscar comodidad y ver resultados reales.",
        'Géminis': "una curiosidad despierta que te invita a charlar, aprender y moverte mucho.",
        'Cáncer': "una necesidad de refugio, de estar con los tuyos y proteger lo que sientes.",
        'Leo': "un brillo especial que te pide mostrar lo que vales y expresarte con orgullo.",
        'Virgo': "una mirada atenta que busca el orden, la limpieza y mejorar lo cotidiano.",
        'Libra': "una sensibilidad que anhela la paz, la belleza y el entendimiento con los demás.",
        'Escorpio': "una corriente profunda que te invita a indagar en la verdad y soltar lo viejo.",
        'Sagitario': "una brisa de libertad que te anima a explorar, reír y buscar nuevos horizontes.",
        'Capricornio': "una calma constructiva que te ayuda a organizar tus tareas con realismo.",
        'Acuario': "una visión original que te conecta con nuevas ideas y con el bien común.",
        'Piscis': "una atmósfera soñadora que potencia tu imaginación y tu empatía."
    },
    en: {
        'Aries': "a spark of enthusiasm that pushes you to start something new without hesitation.",
        'Taurus': "a desire to enjoy the moment, seek comfort, and see real results.",
        'Gemini': "an awakened curiosity that invites you to chat, learn, and move a lot.",
        'Cancer': "a need for refuge, to be with your loved ones and protect what you feel.",
        'Leo': "a special glow that asks you to show your worth and express yourself with pride.",
        'Virgo': "an attentive look that seeks order, cleanliness, and improving the everyday.",
        'Libra': "a sensitivity that craves peace, beauty, and understanding with others.",
        'Scorpio': "a deep current that invites you to delve into the truth and let go of the old.",
        'Sagittarius': "a breeze of freedom that encourages you to explore, laugh, and seek new horizons.",
        'Capricorn': "a constructive calm that helps you organize your tasks with realism.",
        'Aquarius': "an original vision that connects you with new ideas and with the common good.",
        'Pisces': "a dreamy atmosphere that enhances your imagination and empathy."
    }
};

const FEEL_TITLE = {
    es: {
        'Aries': "Impulso Directo", 'Tauro': "Paz Sensorial", 'Géminis': "Mente Ágil", 'Cáncer': "Calor Humano",
        'Leo': "Brillo Creativo", 'Virgo': "Foco Eficaz", 'Libra': "Armonía Viva", 'Escorpio': "Fuerza Interna",
        'Sagitario': "Expansión Alegre", 'Capricornio': "Logro Real", 'Acuario': "FUTURO HOY", 'Piscis': "Magia Sutil"
    },
    en: {
        'Aries': "Direct Impulse", 'Taurus': "Sensory Peace", 'Gemini': "Agile Mind", 'Cancer': "Human Warmth",
        'Leo': "Creative Glow", 'Virgo': "Effective Focus", 'Libra': "Living Harmony", 'Scorpio': "Inner Strength",
        'Sagittarius': "Joyful Expansion", 'Capricorn': "Real Achievement", 'Aquarius': "FUTURE NOW", 'Pisces': "Subtle Magic"
    }
};

const MOON_A = {
    es: {
        'Aries': "tomar decisiones valientes y directas",
        'Tauro': "asegurar que tus pasos sean firmes y productivos",
        'Géminis': "conversar, aprender y moverte con agilidad",
        'Cáncer': "proteger lo que más quieres y tu paz interna",
        'Leo': "liderar con el corazón y mostrar tu talento",
        'Virgo': "mejorar tus rutinas y perfeccionar tu trabajo",
        'Libra': "negociar acuerdos y buscar la belleza en todo",
        'Escorpio': "soltar lo que ya no sirve para transformarte",
        'Sagitario': "mirar hacia el futuro con fe y entusiasmo",
        'Capricornio': "trabajar con perseverancia y realismo",
        'Acuario': "colaborar con otros para innovar",
        'Piscis': "confiar en tu instinto y en tu mundo interior"
    },
    en: {
        'Aries': "making brave and direct decisions",
        'Taurus': "ensuring your steps are firm and productive",
        'Gemini': "talking, learning, and moving with agility",
        'Cancer': "protecting what you love and your inner peace",
        'Leo': "leading from the heart and showing your talent",
        'Virgo': "improving your routines and perfecting your work",
        'Libra': "negotiating agreements and seeking beauty everywhere",
        'Scorpio': "letting go of what no longer serves to transform yourself",
        'Sagittarius': "looking toward the future with faith and enthusiasm",
        'Capricorn': "working with perseverance and realism",
        'Aquarius': "collaborating with others to innovate",
        'Pisces': "trusting your instinct and your inner world"
    }
};

const MOON_W = {
    es: {
        'Aries': "Evita la impulsividad innecesaria y no fuerces resultados hoy.",
        'Tauro': "Cuidado con el estancamiento o la resistencia al cambio.",
        'Géminis': "No te disperses en mil tareas; el foco es tu mejor aliado.",
        'Cáncer': "Protege tu sensibilidad y no te tomes todo de forma personal.",
        'Leo': "Vigila el exceso de orgullo o la necesidad constante de aplauso.",
        'Virgo': "No caigas en la autocrítica excesiva o el perfeccionismo paralizante.",
        'Libra': "Cuidado con la indecisión o con postergar tus propias necesidades.",
        'Escorpio': "Evita los juegos de poder o rumiar pensamientos oscuros.",
        'Sagitario': "No exageres tus capacidades ni prometas más de lo que puedes cumplir.",
        'Capricornio': "Vigila la rigidez mental o el exceso de frialdad emocional.",
        'Acuario': "No te aisles demasiado ni ignores las normas sociales básicas.",
        'Piscis': "Evita el escapismo o perderte en fantasías sin base real."
    },
    en: {
        'Aries': "Avoid unnecessary impulsivity and don't force results today.",
        'Taurus': "Watch out for stagnation or resistance to change.",
        'Gemini': "Don't scatter yourself in a thousand tasks; focus is your ally.",
        'Cancer': "Protect your sensitivity and don't take everything personally.",
        'Leo': "Watch out for excessive pride or constant need for applause.",
        'Virgo': "Don't fall into excessive self-criticism or paralyzing perfectionism.",
        'Libra': "Watch out for indecision or postponing your own needs.",
        'Scorpio': "Avoid power games or ruminating on dark thoughts.",
        'Sagittarius': "Don't overstate your abilities or promise more than you can deliver.",
        'Capricorn': "Watch out for mental rigidity or excessive emotional coldness.",
        'Aquarius': "Don't isolate yourself too much or ignore basic social norms.",
        'Pisces': "Avoid escapism or getting lost in fantasies without a real basis."
    }
};

const daily_engine = {
    generateDailyRitual(params) {
        const { name, moonSign, dayPlanet, lang = 'es' } = params;

        // Mapeo de seguridad para signos (Sincronía entre motores ES/EN)
        const signMap = {
            'Aries': 'Aries', 'Tauro': 'Taurus', 'Géminis': 'Gemini', 'Cáncer': 'Cancer',
            'Leo': 'Leo', 'Virgo': 'Virgo', 'Libra': 'Libra', 'Escorpio': 'Scorpio',
            'Sagitario': 'Sagittarius', 'Capricornio': 'Capricorn', 'Acuario': 'Aquarius', 'Piscis': 'Pisces'
        };
        const activeKey = (lang === 'en') ? (signMap[moonSign] || moonSign) : moonSign;

        const feel = MOON_FEEL[lang][activeKey] || MOON_FEEL[lang]['Aries'];
        const title = FEEL_TITLE[lang][activeKey] || FEEL_TITLE[lang]['Aries'];
        const action = MOON_A[lang][activeKey] || MOON_A[lang]['Aries'];
        const warning = MOON_W[lang][activeKey] || MOON_W[lang]['Aries'];

        const planetNames = {
            es: { 'Sol': 'el Sol', 'Luna': 'la Luna', 'Mercurio': 'Mercurio', 'Venus': 'Venus', 'Marte': 'Marte', 'Júpiter': 'Júpiter', 'Saturno': 'Saturno' },
            en: { 'Sol': 'the Sun', 'Luna': 'the Moon', 'Mercurio': 'Mercury', 'Venus': 'Venus', 'Marte': 'Mars', 'Júpiter': 'Jupiter', 'Saturno': 'Saturn' }
        };

        const tDayPlanet = planetNames[lang][dayPlanet] || dayPlanet;

        const synthesis = {
            es: {
                'Aries': "Fuerza de inicio activa. Es el momento de dar ese primer paso que has estado planeando sin mirar atrás.",
                'Tauro': "Cimentación productiva. Enfócate en lo que da frutos reales y cuida tu energía física y financiera.",
                'Géminis': "Apertura mental. Las soluciones vienen a través de la charla, el movimiento y el intercambio de ideas.",
                'Cáncer': "Protección emocional. Nutre tus raíces, cuida tu espacio privado y escucha lo que tu cuerpo necesita.",
                'Leo': "Brillo con propósito. Muestra tu valor auténtico y lidera con generosidad desde el corazón.",
                'Virgo': "Refinamiento práctico. La maestría está en los detalles; organiza lo pequeño para liberar lo grande.",
                'Libra': "Armonía estratégica. Busca el punto medio en tus relaciones y rodéate de entornos que te den paz.",
                'Escorpio': "Transformación interna. Suelta el control sobre lo que ya murió y permite que surja una nueva fuerza.",
                'Sagitario': "Expansión visionaria. Mira más allá de lo inmediato y confía en el sentido profundo de tu camino.",
                'Capricornio': "Arquitectura de logros. Avanza con realismo, paciencia y la disciplina de quien sabe a dónde va.",
                'Acuario': "Innovación consciente. Rompe moldes, colabora con personas afines y busca una visión más original.",
                'Piscis': "Fluir intuitivo. Disuelve las barreras, medita y permite que tu percepción guíe tus pasos hoy."
            },
            en: {
                'Aries': "Active starting force. It's time to take that first step you've been planning without looking back.",
                'Taurus': "Productive grounding. Focus on what bears real fruit and take care of your physical and financial energy.",
                'Gemini': "Mental openness. Solutions come through talk, movement, and the exchange of ideas.",
                'Cancer': "Emotional protection. Nurture your roots, take care of your private space, and listen to what your body needs.",
                'Leo': "Purposeful shine. Show your authentic value and lead with heart-centered generosity.",
                'Virgo': "Practical refinement. Mastery is in the details; organize the small to free the big.",
                'Libra': "Strategic harmony. Seek the middle point in your relationships and surround yourself with peaceful environments.",
                'Scorpio': "Internal transformation. Let go of control over what has already died and allow a new strength to emerge.",
                'Sagittarius': "Visionary expansion. Look beyond the immediate and trust in the deep meaning of your path.",
                'Capricorn': "Achievement architecture. Move forward with realism, patience, and the discipline of one who knows where they are going.",
                'Aquarius': "Conscious innovation. Break molds, collaborate with like-minded people, and seek a more original vision.",
                'Pisces': "Intuitive flow. Dissolve barriers, meditate, and allow your perception to guide your steps today."
            }
        };

        const questions = {
            es: {
                'Aries': "¿Qué iniciativa concreta vas a liderar hoy con determinación?",
                'Tauro': "¿Qué valor real y tangible estás construyendo con tus acciones de hoy?",
                'Géminis': "¿Cuál es la comunicación clave que necesitas enviar o recibir hoy?",
                'Cáncer': "¿Cómo estás cuidando hoy tu paz interior y tu refugio emocional?",
                'Leo': "¿De qué manera vas a permitir que tu talento sea visto por los demás hoy?",
                'Virgo': "¿Qué mejora técnica o de salud vas a implementar en tu rutina hoy?",
                'Libra': "¿Cómo puedes traer hoy más equilibrio justo a tus compromisos y vínculos?",
                'Escorpio': "¿A qué proceso de cambio le vas a dar espacio hoy para soltar lastre?",
                'Sagitario': "¿Qué nueva perspectiva u horizonte estás listo para explorar hoy?",
                'Capricornio': "¿Qué paso sólido y disciplinado estás dando hoy hacia tu meta mayor?",
                'Acuario': "¿Cómo puedes colaborar hoy para crear una idea más libre y original?",
                'Piscis': "¿Qué te está diciendo tu intuición sobre el siguiente paso que debes dar?"
            },
            en: {
                'Aries': "What concrete initiative are you going to lead today with determination?",
                'Taurus': "What real and tangible value are you building with your actions today?",
                'Gemini': "What is the key communication you need to send or receive today?",
                'Cancer': "How are you taking care of your inner peace and emotional refuge today?",
                'Leo': "In what way are you going to allow your talent to be seen by others today?",
                'Virgo': "What technical or health improvement will you implement in your routine today?",
                'Libra': "How can you bring more fair balance to your commitments and bonds today?",
                'Scorpio': "What change process will you give space to today to let go of dead weight?",
                'Sagittarius': "What new perspective or horizon are you ready to explore today?",
                'Capricorn': "What solid and disciplined step are you taking today toward your goal?",
                'Aquarius': "How can you collaborate today to create a freer and more original idea?",
                'Pisces': "What is your intuition telling you about the next step you should take?"
            }
        };

        return {
            title: title,
            moonSign: moonSign,
            emotionalEnergy: feel,
            actionRecommended: action,
            warning: warning,
            synthesis: synthesis[lang][activeKey] || synthesis[lang]['Aries'],
            dailyQuestion: questions[lang][activeKey] || questions[lang]['Aries'],
            intro: (lang === 'es') ? 
                `Hoy navegamos bajo la influencia de ${tDayPlanet}, el planeta que marca la dinámica de esta jornada.` : 
                `Today we navigate under the influence of ${tDayPlanet}, the planet marking today's dynamics.`
        };
    }
};

if (typeof module !== 'undefined') {
    module.exports = daily_engine;
} else {
    window.daily_engine = daily_engine;
}
