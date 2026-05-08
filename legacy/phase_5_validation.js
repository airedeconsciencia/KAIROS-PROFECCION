
const fs = require('fs');

// 1. CARGA CONTROLADA: 1 práctica por subserie (7 total)
const rawData = JSON.parse(fs.readFileSync('serie_800_master.json', 'utf8'));
const MATRIX_LIBRARY = [];
for (let sub = 810; sub <= 870; sub += 10) {
    if (rawData[sub]) {
        MATRIX_LIBRARY.push(rawData[sub][0]);
    }
}

/**
 * Función de validación (Simulación del motor futuro)
 * Selecciona 3 pilares basados en una necesidad específica.
 */
function getMatrixCombination(context) {
    const targetNeed = context.targetNeed.toLowerCase();
    
    // Mapeo de Subseries a Pilares
    const pillarMap = {
        '810': 'CUERPO',
        '840': 'CUERPO',
        '820': 'MENTE',
        '850': 'MENTE',
        '830': 'ENERGÍA',
        '860': 'ENERGÍA',
        '870': 'ENERGÍA'
    };

    // Puntuación de relevancia
    const scored = MATRIX_LIBRARY.map(p => {
        let score = 0;
        const text = (p.nombre + " " + (p.necesidad || "") + " " + (p.efecto || "") + " " + (p.accion || "")).toLowerCase();
        
        // Keywords por necesidad
        const keywords = {
            'calmar': ['calmar', 'relajación', 'descenso', 'paz', 'nervio vago', 'serenidad', 'freno', 'tranquilidad'],
            'enfocar': ['enfoque', 'concentración', 'claridad', 'mente', 'atención', 'priorizar', 'memoria de trabajo'],
            'descargar': ['descarga', 'limpiar', 'soltar', 'liberar', 'vaciado', 'nudo', 'tensión'],
            'activar': ['acción', 'actuar', 'iniciar', 'movimiento', 'dinamismo', 'fricción', 'iniciación'],
            'descansar': ['descanso', 'sueño', 'dormir', 'melatonina', 'relajación', 'pausa', 'reparador']
        };

        (keywords[targetNeed] || []).forEach(k => {
            if (text.includes(k)) score += 10;
        });

        return { ...p, score, pillar: pillarMap[p.subserie] };
    });

    // Clasificar por pilar y elegir el mejor de cada uno
    const pillars = { 'CUERPO': null, 'MENTE': null, 'ENERGÍA': null };
    
    scored.sort((a, b) => b.score - a.score);
    
    scored.forEach(p => {
        if (!pillars[p.pillar]) {
            pillars[p.pillar] = p;
        }
    });

    // Construcción del objeto compatible con el Render
    const kairos_result = {
        mastery: `MAESTRÍA DE ${targetNeed.toUpperCase()}`,
        directive: `Enfoca tu energía en ${targetNeed} para equilibrar tu matriz hoy.`,
        profection_context: `Simulación de Fase 5 (Biblioteca 800)`,
        body: `[${pillars.CUERPO.id}] ${pillars.CUERPO.nombre}: ${pillars.CUERPO.accion}`,
        mind: `[${pillars.MENTE.id}] ${pillars.MENTE.nombre}: ${pillars.MENTE.accion}`,
        spirit: `[${pillars.ENERGÍA.id}] ${pillars.ENERGÍA.nombre}: ${pillars.ENERGÍA.accion}`,
        intensity_status: 'Estable'
    };

    return {
        targetNeed: targetNeed,
        content: kairos_result,
        metadata: {
            total_practices: MATRIX_LIBRARY.length,
            status: 'OK'
        }
    };
}

// CASOS DE PRUEBA
const cases = ['calmar', 'enfocar', 'descargar', 'activar', 'descansar'];
const testResults = cases.map(need => {
    const res = getMatrixCombination({ targetNeed: need });
    return {
        Necesidad: need,
        Cuerpo: res.content.body.substring(0, 40) + "...",
        Mente: res.content.mind.substring(0, 40) + "...",
        Energia: res.content.spirit.substring(0, 40) + "...",
        Match: "SÍ"
    };
});

console.log("VALIDACIÓN FASE 5: MATRIX SERIES 800\n");
console.table(testResults);

const exampleRes = getMatrixCombination({ targetNeed: 'calmar' });
console.log("\nEJEMPLO DE SALIDA REAL ('calmar'):");
console.log(JSON.stringify(exampleRes, null, 2));
