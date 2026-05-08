const fs = require('fs');
const path = require('path');

const LIBRERIA = {
    signs: {
        'Aries': 'aries',
        'Tauro': 'taurus',
        'Géminis': 'gemini',
        'Cáncer': 'cancer',
        'Leo': 'leo',
        'Virgo': 'virgo',
        'Libra': 'libra',
        'Escorpio': 'scorpio',
        'Sagitario': 'sagittarius',
        'Capricornio': 'capricorn',
        'Acuario': 'aquarius',
        'Piscis': 'pisces'
    },
    planets: {
        'Sol': 'sun',
        'Luna': 'moon',
        'Mercurio': 'mercury',
        'Venus': 'venus',
        'Marte': 'mars',
        'Júpiter': 'jupiter',
        'Saturno': 'saturn',
        'Urano': 'uranus',
        'Neptuno': 'neptune',
        'Plutón': 'pluto'
    }
};

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function normalizeSvg(content) {
    let svg = content.trim();
    if (!svg.includes('xmlns=')) {
        svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    // Remove specific engine classes for standalone reuse
    svg = svg.replace(/\s*class="[^"]*"/g, '');
    return svg;
}

function extract() {
    console.log('Reading source data...');
    const sourcePath = path.join(__dirname, 'kairos_icons_source.js');
    if (!fs.existsSync(sourcePath)) {
        console.error('Source file not found.');
        return;
    }
    const sourceContent = fs.readFileSync(sourcePath, 'utf8');

    const regex = /'([^']+)':\s*`([\s\S]*?)`/g;
    let m;

    while ((m = regex.exec(sourceContent)) !== null) {
        const key = m[1];
        const rawSvg = m[2];
        const normalizedSvg = normalizeSvg(rawSvg);

        let subDir = '';
        let targetName = '';

        if (LIBRERIA.signs[key]) {
            subDir = 'signs';
            targetName = LIBRERIA.signs[key];
        } else if (LIBRERIA.planets[key]) {
            subDir = 'planets';
            targetName = LIBRERIA.planets[key];
        }

        if (subDir) {
            const outPath = path.join(__dirname, 'kairos_symbols', subDir, `${targetName}.svg`);
            ensureDir(path.dirname(outPath));
            fs.writeFileSync(outPath, normalizedSvg);
            console.log(`Extracted: ${subDir}/${targetName}.svg`);
        }
    }
    console.log('Extraction script finished setup.');
}

extract();
