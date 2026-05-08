
const fs = require('fs');
const path = require('path');

// Mock components
global.ZODIAC_LIST = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];

// Read Astronomy Engine
const astronomyCode = fs.readFileSync(path.join(__dirname, 'astronomy.js'), 'utf8');
eval(astronomyCode); // Defines 'Astronomy' globally

// Read Transit Engine
const transitEngineCode = fs.readFileSync(path.join(__dirname, 'transit_engine.js'), 'utf8');
const myModule = { exports: {} };
(function(module) {
    eval(transitEngineCode);
})(myModule);
const transit_engine = myModule.exports;

// Run the function
(async () => {
    try {
        console.log("--- SIMULACIÓN DE TRAZABILIDAD ---");
        const hotspots = await transit_engine.getMonthlyHotspots();
        
        // Lo que el usuario pidió inspeccionar:
        console.log('[MATRIX DEBUG] monthly_context completo:', { hotspots });
        console.log('[MATRIX DEBUG] hotspots typeof:', typeof hotspots);
        console.log('[MATRIX DEBUG] hotspots isArray:', Array.isArray(hotspots));
        console.log('[MATRIX DEBUG] hotspots valor:', hotspots);
        
        process.exit(0);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
