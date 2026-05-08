/**
 * KAIROS | Matrix Engine v0.2.0
 * Capa de soporte para la Master Matrix y el Toolkit de Herramientas.
 * 
 * Historial:
 * v0.1.x - Datos estáticos por planeta (Legacy)
 * v0.2.0 - Refactorizado para actuar como base de la 'Toolkit Library' futura.
 *          La lógica interpretativa reside en interpreter_engine.js (Shadow Matrix).
 */

const matrix_engine = {
    // Repositorio base de micro-prácticas (futura Serie de Herramientas)
    TOOLKIT_LIBRARY: {
        'respiracion_nadi': { title: 'Nadi Shodhana', desc: 'Respiración alterna para equilibrar mente.', pillar: 'Mente' },
        'descarga_movimiento': { title: 'Descarga Explosiva', desc: 'Suelto de tensión física rápida.', pillar: 'Cuerpo' },
        'pausa_silencio': { title: '3 Min de Gracia', desc: 'Observación interna sin juicio.', pillar: 'Energía' }
    },

    // La biblioteca real se carga desde matrix_library_base.js (window.MATRIX_LIBRARY_BASE)
    // Mantenemos una muestra mínima de seguridad histórica
    MATRIX_LIBRARY_SAMPLE: window.MATRIX_LIBRARY_BASE || {
        "810": [{"id": "810.001", "nombre": "Inmersión facial", "accion": "Sumerge tu cara en agua fría", "duracion": "10-30s", "efecto": "bajar tus pulsaciones", "necesidad": ["calmar"]}],
        "820": [{"id": "820.001", "nombre": "Vaciado mental", "accion": "Escribe en una libreta todo lo que tienes en la cabeza", "duracion": "5-10 min", "efecto": "despejar tu mente", "necesidad": ["calmar", "descargar"]}],
        "870": [{"id": "870.001", "nombre": "Respiración 4-7-8", "accion": "Inhala en 4, retén 7 y exhala en 8", "duracion": "4-5 ciclos", "efecto": "calmar tu sistema nervioso", "necesidad": ["calmar", "descansar"]}]
    },

    /**
     * Selección inteligente de tríada basada en necesidad.
     */
    getMatrixCombination(context) {
        const targetNeed = (context.targetNeed || 'calmar').toLowerCase();
        // Usar la base de datos global si está disponible, si no, la muestra interna
        const lib = window.MATRIX_LIBRARY_BASE || this.MATRIX_LIBRARY_SAMPLE;
        
        const pillarMap = {
            '810': 'cuerpo', '820': 'mente', '830': 'energia', 
            '840': 'cuerpo', '850': 'mente', '860': 'energia', '870': 'energia'
        };

        const result = { cuerpo: null, mente: null, energia: null };
        
        // Buscamos prácticas que coincidan con la necesidad dominante para cada pilar (Body, Mind, Spirit/Energy)
        Object.keys(lib).sort().forEach(sub => {
            const pillar = pillarMap[sub];
            if (!pillar || result[pillar]) return;

            // Filtramos las prácticas de la subserie que tengan el tag de necesidad correspondiente
            const matchingPractices = lib[sub].filter(p => {
                if (!p.necesidad) return false;
                const text = p.necesidad.toLowerCase();
                const title = (p.nombre || "").toLowerCase();
                
                // Mapeo semántico simple para keywords
                const searchTerms = {
                   'calmar': ['calma', 'calm', 'relaja', 'paciencia', 'freno', 'nervio', 'parasimpático', 'límbico', 'pausa', 'tranquil', 'suave'],
                   'activar': ['activa', 'despertar', 'fuerza', 'movilidad', 'energia', 'energía', 'fuego', 'vigor', 'dinamismo', 'alta'],
                   'enfocar': ['enfoque', 'foco', 'prioridad', 'atención', 'concentra', 'fomentar', 'mental', 'cerebro', 'agudeza', 'memoria', 'claridad'],
                   'descargar': ['descarga', 'suelta', 'libera', 'limpieza', 'expulsa', 'tensión acumulada', 'nudo', 'vaciado', 'grito', 'shaking'],
                   'descansar': ['descanso', 'pausa', 'dormir', 'sosego', 'repara', 'sueño', 'quietud', 'recupera', 'noche'],
                   'expandir': ['expansión', 'crecimiento', 'visión', 'oportunidad', 'confianza', 'abrir', 'futuro']
                };

                const terms = searchTerms[targetNeed] || [targetNeed];
                return terms.some(term => text.includes(term) || title.includes(term));
            });
            
            // Si hay match, lo asignamos. Si no, tomamos la primera por defecto (fallback seguro)
            if (matchingPractices.length > 0) {
                // Selección aleatoria dentro del match para dar variedad
                const randomIdx = Math.floor(Math.random() * matchingPractices.length);
                result[pillar] = matchingPractices[randomIdx];
            } else if (!result[pillar] && lib[sub].length > 0) {
                result[pillar] = lib[sub][0];
            }
        });

        return result;
    },

    /**
     * COMPATIBILITY LAYER - Mantenida para engine_v483_final.js
     * Obtiene datos de la matriz formateados para el UI legacy.
     */
    getMatrixData(lord, lang = 'es') {
        // Mapeo rápido de Lord a Necesidad para compatibilidad automática
        const needMap = {
            'Saturno': 'calmar', 'Marte': 'activar', 'Júpiter': 'expandir',
            'Venus': 'calmar', 'Mercurio': 'enfocar', 'Sol': 'enfocar', 'Luna': 'descargar'
        };
        const targetNeed = needMap[lord] || 'calmar';
        const comb = this.getMatrixCombination({ targetNeed });

        return {
            mastery: "Sincronía de la Matriz",
            directive: `Tu regente ${lord} sugiere priorizar: ${targetNeed.toUpperCase()}`,
            body: comb.cuerpo,
            mind: comb.mente,
            spirit: comb.energia,
            targetNeed: targetNeed
        };
    },

    /**
     * COMPATIBILITY LAYER - Mantenida para engine_v483_final.js
     */
    getIntensity(dayPlanet, lordOfYear) {
        return this.calculateLegacyIntensity(dayPlanet, lordOfYear);
    },

    /**
     * Obtiene una herramienta específica de la biblioteca.
     */
    getTool(toolId) {
        return this.TOOLKIT_LIBRARY[toolId] || null;
    },

    /**
     * Lógica de intensidad legacy.
     */
    calculateLegacyIntensity(dayPlanet, lordOfYear) {
        const matrix = {
            'Sol': { 'Sol': 'Estable', 'Saturno': 'Activación' },
            'Marte': { 'Saturno': 'Activación', 'Venus': 'Activación' }
        };
        return (matrix[dayPlanet] && matrix[dayPlanet][lordOfYear]) || 'Moderada';
    }
};

// Exportación
if (typeof module !== 'undefined') {
    module.exports = matrix_engine;
} else {
    window.matrix_engine = matrix_engine;
    console.log("[KAIROS] matrix_engine.js v0.3.0 - BASE SERIES 800 CONNECTED.");
}
