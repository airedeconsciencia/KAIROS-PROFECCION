/**
 * KAIROS | Weekly Engine v0.2.0
 * Motor de scoring semanal real.
 * Calcula la intensidad energética de cada día de la semana
 * basándose en variables astronómicas y el contexto anual del usuario.
 */

// ─── Tablas de referencia interna ───────────────────────────────────────────

const WEEKLY_VERBOS = {
    'Saturno':  { palabra: 'Consolidar',  concepto: 'Esta semana pide paciencia y estructura. Avanza con método, no con prisa. Los resultados llegarán si construyes sobre bases sólidas.' },
    'Júpiter':  { palabra: 'Expandir',    concepto: 'Semana de visión amplia. Es buen momento para explorar nuevas posibilidades, aprovechar oportunidades y pensar a largo plazo.' },
    'Marte':    { palabra: 'Avanzar',     concepto: 'El impulso está disponible. Úsalo con dirección clara. Semana para moverse, decidir y no quedarse parado.' },
    'Venus':    { palabra: 'Conectar',    concepto: 'Los vínculos son el centro esta semana. Cuidar las relaciones, buscar armonía y disfrutar del proceso tiene más valor que los resultados.' },
    'Mercurio': { palabra: 'Comunicar',   concepto: 'Semana de intercambio ágil. Hablar, preguntar, escribir y escuchar. Las ideas fluyen: aprovéchalo para clarificar y acordar.' },
    'Sol':      { palabra: 'Brillar',     concepto: 'Semana para ser visible. Confiar en lo que tienes para ofrecer, tomar espacio y liderar desde la autenticidad.' },
    'Luna':     { palabra: 'Escuchar',    concepto: 'El ritmo emocional marca el paso esta semana. Conectar con lo que sientes antes de actuar es la clave.' }
};

const DAY_PLANET_SYMBOLS = {
    'Sol': '☀️', 'Luna': '🌙', 'Marte': '♂️',
    'Mercurio': '☿', 'Júpiter': '♃', 'Venus': '♀️', 'Saturno': '♄'
};

const DAY_SHORT_ES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

// Afinidades del Señor del Año con signos lunares (simplificado)
const LORD_SIGN_AFFINITY = {
    'Sol':      ['Leo', 'Aries', 'Sagitario'],
    'Luna':     ['Cáncer', 'Tauro', 'Piscis'],
    'Marte':    ['Aries', 'Escorpio', 'Capricornio'],
    'Mercurio': ['Géminis', 'Virgo', 'Acuario'],
    'Júpiter':  ['Sagitario', 'Piscis', 'Cáncer'],
    'Venus':    ['Tauro', 'Libra', 'Piscis'],
    'Saturno':  ['Capricornio', 'Acuario', 'Libra']
};

// Casas angulares con mayor peso energético
const ANGULAR_HOUSES = [1, 4, 7, 10];

// Dignidades y debilidades lunares
const MOON_DIGNITIES   = ['Tauro', 'Cáncer'];       // Exaltación y Domicilio
const MOON_DEBILITIES  = ['Escorpio', 'Capricornio']; // Caída y Exilio

const weekly_engine = {

    /**
     * SCORING PRINCIPAL: Calcula la intensidad de cada día de la semana.
     * Devuelve array de 7 objetos enriquecidos con score, color, etc.
     *
     * @param {Array} moonSequence  - Output de transit_engine.getWeeklySequence()
     * @param {string} lord         - Señor del Año (ej: 'Saturno')
     * @param {number} profectionHouse - Casa profectada del usuario (ej: 5)
     * @returns {Array} dayScores   - 7 objetos con toda la información del día
     */
    // 🔒 MOTOR SEMANAL VALIDADO — NO TOCAR
    // scoring + getWeeklySequence congelados en v0.2 (2026-03-19)
    // Cualquier modificación requiere desbloqueo explícito de KAIROS_FLAGS.weekly_locked
    scoreDays(moonSequence, lord, profectionHouse) {
        if (!moonSequence || !moonSequence.length) return [];

        return moonSequence.map((day, i) => {
            let score = 50; // Base neutra

            // 1. Luna en casa profectada del usuario (+45) — el día más importante
            if (day.moonHouse === profectionHouse) score += 45;

            // 2. Luna en casa angular (+20) — días de acción y visibilidad
            if (ANGULAR_HOUSES.includes(day.moonHouse)) score += 20;

            // 3. Planeta del día = Señor del Año (+20) — alineación directa
            if (day.dayRuler === lord) score += 20;

            // 4. Luna en signo afín al Señor del Año (+10) — armonía de fondo
            const affineSigns = LORD_SIGN_AFFINITY[lord] || [];
            if (affineSigns.includes(day.moonSign)) score += 10;

            // 5. Luna en dignidad (+10) — mejor calidad lunar general
            if (MOON_DIGNITIES.includes(day.moonSign)) score += 10;

            // 6. Luna en debilidad (-15) — tensión o fricción
            if (MOON_DEBILITIES.includes(day.moonSign)) score -= 15;

            // Clamp 0–100
            score = Math.max(0, Math.min(100, score));

            // Clasificación de color
            let color, colorClass, colorLabel;
            if (score >= 70) {
                color = 'green';
                colorClass = 'day-favorable';
                colorLabel = 'Favorable';
            } else if (score >= 40) {
                color = 'amber';
                colorClass = 'day-neutral';
                colorLabel = 'Equilibrio';
            } else {
                color = 'rose';
                colorClass = 'day-sensitive';
                colorLabel = 'Sensible';
            }

            // Detectar ingreso lunar (cambio de signo)
            const isMoonIngress = i > 0 && moonSequence[i].moonSign !== moonSequence[i-1].moonSign;

            // Detectar día de profección
            const isProfectionDay = day.moonHouse === profectionHouse;

            return {
                ...day,
                score,
                color,
                colorClass,
                colorLabel,
                isMoonIngress,
                isProfectionDay,
                daySymbol: DAY_PLANET_SYMBOLS[day.dayRuler] || '·',
                dayShort: DAY_SHORT_ES[day.dayIndex] || `D${i+1}`
            };
        });
    },

    /**
     * Calcula el verbo semanal enriquecido según el Señor del Año.
     * Añade contexto si la Luna activa la casa profectada esta semana.
     *
     * @param {string} lord           - Señor del Año
     * @param {Array}  scoredDays     - Output de scoreDays()
     * @param {number} profectionHouse
     * @returns {Object} { palabra, concepto, accion }
     */
    getWeeklyVerb(lord, scoredDays, profectionHouse) {
        const base = WEEKLY_VERBOS[lord] || {
            palabra: 'Fluir',
            concepto: 'La semana invita a moverse con el ritmo natural de las cosas.'
        };

        const hasProfectionActivation = scoredDays.some(d => d.isProfectionDay);
        const hasMoonIngress = scoredDays.some(d => d.isMoonIngress);

        let conceptoAmpliado = base.concepto;
        if (hasProfectionActivation) {
            conceptoAmpliado += ` Esta semana, la Luna activa tu escenario del año (Casa ${profectionHouse}): es un momento de mayor resonancia personal.`;
        }
        if (hasMoonIngress) {
            conceptoAmpliado += ` Habrá un cambio de tono lunar que marcará un punto de inflexión en la semana.`;
        }

        return {
            palabra: base.palabra.toUpperCase(),
            concepto: conceptoAmpliado,
            accion: base.palabra.toLowerCase()
        };
    },

    /**
     * Segmenta los 7 días en Tres Tramos con sentido real.
     * Los cortes se basan en cambios de signo lunar o de casa,
     * no en bloques artificiales.
     *
     * @param {Array}  scoredDays - Output de scoreDays()
     * @param {Object} houseLibrary - Datos de las casas desde Firestore 220
     * @param {string} lord
     * @returns {Array} tramos (máx. 3)
     */
    buildTramos(scoredDays, houseLibrary, lord) {
        if (!scoredDays.length) return [];

        const tramos = [];
        let current = {
            dias: [scoredDays[0]],
            signo: scoredDays[0].moonSign,
            casa: scoredDays[0].moonHouse
        };

        for (let i = 1; i < scoredDays.length; i++) {
            const dia = scoredDays[i];
            const prev = scoredDays[i - 1];

            const signChange = dia.moonSign !== prev.moonSign;
            const houseChange = dia.moonHouse !== prev.moonHouse;
            const maxTramos = tramos.length >= 2;

            if ((signChange || houseChange) && !maxTramos) {
                tramos.push(this._closeTramo(current, houseLibrary, lord, tramos.length));
                current = { dias: [dia], signo: dia.moonSign, casa: dia.moonHouse };
            } else {
                current.dias.push(dia);
                // Actualizar signo/casa del tramo si cambia dentro
                if (signChange) current.signo = dia.moonSign;
                if (houseChange) current.casa = dia.moonHouse;
            }
        }
        tramos.push(this._closeTramo(current, houseLibrary, lord, tramos.length));

        return tramos.slice(0, 3);
    },

    _closeTramo(tramo, houseLibrary, lord, tramoIndex = 0) {
        const houseData = houseLibrary?.[String(tramo.casa)] || {};
        const area = houseData.nombre || houseData.area || `Casa ${tramo.casa}`;

        // Extraer primera frase de psicología desde biblioteca Firestore (limpia)
        const rawPsic = houseData.psicologia || houseData.desc || '';
        const psicPrimer = rawPsic.split('.')[0].trim();
        const psicologia = psicPrimer
            ? psicPrimer.charAt(0).toLowerCase() + psicPrimer.slice(1)
            : '';

        const dias = tramo.dias;
        const rango = dias.length === 1
            ? `${dias[0].dayShort} ${dias[0].dateLabel}`
            : `${dias[0].dayShort} ${dias[0].dateLabel} \u2013 ${dias[dias.length-1].dayShort} ${dias[dias.length-1].dateLabel}`;

        const avgScore = dias.reduce((s, d) => s + d.score, 0) / dias.length;
        const hasIngress   = dias.some(d => d.isMoonIngress);
        const hasProfection = dias.some(d => d.isProfectionDay);

        // Tono dominante del tramo
        const scoreTone = avgScore >= 70 ? 'favorable' : avgScore >= 40 ? 'neutral' : 'sensitive';

        // Apertura por posición (ARRANQUE / CENTRO / CIERRE) y tono energético
        // Regla: textos distintos, human-first, sin jergón astrológico
        const openers = [
            {
                // ARRANQUE
                favorable: 'La semana arranca con buen impulso.',
                neutral:   'La semana abre con un ritmo tranquilo y constante.',
                sensitive: 'La semana comienza con un tono más íntimo y cuidadoso.'
            },
            {
                // CENTRO
                favorable: 'El tramo central concentra la mejor energía de la semana.',
                neutral:   'El núcleo de la semana pide trabajo sostenido, sin apresurarse.',
                sensitive: 'El centro de la semana invita a observar antes de actuar.'
            },
            {
                // CIERRE
                favorable: 'La semana cierra con energía disponible para rematar lo pendiente.',
                neutral:   'Al final de la semana conviene asentar lo trabajado.',
                sensitive: 'La semana pide cerrar despacio y dar espacio al descanso.'
            }
        ];

        const posKey = Math.min(tramoIndex, 2);
        const openingLine = openers[posKey][scoreTone];

        // Contexto de área desde Firestore (siempre biblioteca, no inventado)
        const areaLine = area && psicologia
            ? `La Luna recorre ${area.toLowerCase()}: ${psicologia}.`
            : area
                ? `La Luna transita por ${area.toLowerCase()} durante estos días.`
                : '';

        // Señales reales de efemérides
        const extras = [];
        if (hasProfection) extras.push('La Luna pasa por tu escenario del año: lo que surja esta parte de la semana merece atención.');
        if (hasIngress)    extras.push('Hay un cambio de signo lunar en este tramo que renueva el tono.');

        const narrativa = [openingLine, areaLine, ...extras].filter(Boolean).join(' ');

        return {
            rango,
            narrativa,
            signo:  tramo.signo,
            casa:   tramo.casa,
            area,
            dias,
            hasIngress,
            hasProfection
        };
    }
};

// Exportar
if (typeof module !== 'undefined') {
    module.exports = weekly_engine;
} else {
    window.weekly_engine = weekly_engine;
}
