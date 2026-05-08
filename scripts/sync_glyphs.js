
const fs = require('fs');
const path = require('path');

// CONFIGURACIÓN
const PATHS = {
    planets: path.join(__dirname, '../kairos_symbols/planets'),
    signs: path.join(__dirname, '../kairos_symbols/signs'),
    chart_js: path.join(__dirname, '../chart_650_v1.js')
};

// MAPEO DE NOMBRES (File -> JS Key)
const MAP_SIGNS = {
    'aries': 'Aries', 'taurus': 'Tauro', 'gemini': 'Géminis', 'cancer': 'Cáncer',
    'leo': 'Leo', 'virgo': 'Virgo', 'libra': 'Libra', 'scorpio': 'Escorpio',
    'sagittarius': 'Sagitario', 'capricorn': 'Capricornio', 'aquarius': 'Acuario', 'pisces': 'Piscis'
};

const MAP_PLANETS = {
    'sun': 'Sol', 'moon': 'Luna', 'mercury': 'Mercurio', 'venus': 'Venus',
    'mars': 'Marte', 'jupiter': 'Júpiter', 'saturn': 'Saturno',
    'uranus': 'Urano', 'neptune': 'Neptuno', 'pluto': 'Plutón'
};

function cleanSVG(content) {
    // Extraer contenido de <svg>
    const match = content.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
    if (!match) return '';
    
    let inner = match[1].trim();
    
    // Normalización agresiva para comparación
    inner = inner.replace(/stroke-linecap="[^"]*"/g, '');
    inner = inner.replace(/stroke-linejoin="[^"]*"/g, '');
    inner = inner.replace(/stroke-width="[^"]*"/g, '');
    inner = inner.replace(/xmlns="[^"]*"/g, '');
    inner = inner.replace(/stroke="currentColor"/g, ''); // El render ya lo aplica
    inner = inner.replace(/fill="none"/g, ''); // El render ya lo aplica
    inner = inner.replace(/stroke-dasharray="6 4"/g, 'stroke-dasharray="6 4"'); // Mantener esto
    
    // Quitar espacios extras y normalizar auto-cierre
    inner = inner.replace(/\/>/g, '/>'); // Normalizar cierre
    inner = inner.replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
    
    // Unificar stroke="none" vs nada si el render lo pone (Revisar renderGlifo)
    // El render pone stroke-width="3.5" y fill="none" por defecto en el grupo
    
    return inner;
}

function generateGlyphsObject() {
    const glyphs = {
        zodiac: {},
        planets: {}
    };

    // Procesar Signos
    const signsFiles = fs.readdirSync(PATHS.signs).filter(f => f.endsWith('.svg'));
    signsFiles.forEach(file => {
        const name = file.replace('.svg', '');
        const jsKey = MAP_SIGNS[name] || name;
        const content = fs.readFileSync(path.join(PATHS.signs, file), 'utf8');
        glyphs.zodiac[jsKey] = cleanSVG(content);
    });

    // Procesar Planetas
    const planetsFiles = fs.readdirSync(PATHS.planets).filter(f => f.endsWith('.svg'));
    planetsFiles.forEach(file => {
        const name = file.replace('.svg', '');
        const jsKey = MAP_PLANETS[name] || name;
        const content = fs.readFileSync(path.join(PATHS.planets, file), 'utf8');
        glyphs.planets[jsKey] = cleanSVG(content);
    });

    return glyphs;
}

function dryRun() {
    console.log("=== KAIROS GLYPHS SYNC - DRY RUN (v2) ===\n");
    
    const newGlyphs = generateGlyphsObject();
    
    // Cargar glifos actuales
    const chartContent = fs.readFileSync(PATHS.chart_js, 'utf8');
    const currentGlyphsMatch = chartContent.match(/const GLYPHS = (\{[\s\S]*?\});/);
    
    if (!currentGlyphsMatch) {
        console.error("No se pudo encontrar el objeto GLYPHS en chart_650_v1.js");
        return;
    }

    let currentGlyphs;
    try {
        const script = `const GLYPHS = ${currentGlyphsMatch[1]}; console.log(JSON.stringify(GLYPHS));`;
        const { execSync } = require('child_process');
        const output = execSync(`node -e '${script.replace(/'/g, "'\\''")}'`);
        currentGlyphs = JSON.parse(output.toString());
    } catch (e) {
        console.error("Error al analizar los glifos actuales:", e.message);
        return;
    }

    // Normalizar los actuales para una comparación justa
    const normalize = (s) => s.replace(/\s+/g, ' ').replace(/>\s+</g, '><').replace(/stroke="none"/g, '').replace(/fill="currentColor"/g, 'fill="currentColor"').trim();

    let diffs = 0;
    
    const categories = [
        { label: "Zodiaco", current: currentGlyphs.zodiac, newG: newGlyphs.zodiac },
        { label: "Planetas", current: currentGlyphs.planets, newG: newGlyphs.planets }
    ];

    categories.forEach(cat => {
        console.log(`\n--- Categoría: ${cat.label} ---`);
        Object.keys(cat.newG).forEach(k => {
            const rawC = cat.current[k] || "undefined";
            const c = normalize(rawC);
            const n = normalize(cat.newG[k]);
            if (c !== n) {
                console.log(`[DIFF] ${k}:`);
                console.log(`  Actual: ${c}`);
                console.log(`  Nuevo:  ${n}`);
                diffs++;
            } else {
                console.log(`[OK] ${k}`);
            }
        });
    });

    console.log("\n------------------------------------");
    if (diffs === 0) {
        console.log("✅ RESULTADO: Sincronización 100% limpia.");
        console.log("La migración es segura.");
    } else {
        console.log(`⚠️ RESULTADO: Se detectaron ${diffs} diferencias significativas.`);
        console.log("Riesgo: Requiere revisión de los glifos con diferencias.");
    }
}

dryRun();
