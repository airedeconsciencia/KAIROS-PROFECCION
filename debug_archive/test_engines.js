const projection_engine = require('./projection_engine.js');
const matrix_engine = require('./matrix_engine.js');
const daily_engine = require('./daily_engine.js');
const weekly_engine = require('./weekly_engine.js');

async function test() {
    console.log("--- KAIROS ENGINE LOGIC VALIDATION ---");

    // 1. Mock Data: Roberto (Age 52, Cancer Ascendant)
    const user = {
        name: "Roberto",
        age: 52,
        ascendant: "Cáncer"
    };

    // 2. Projection Engine
    const profection = projection_engine.calculateProfection(user.ascendant, user.age);
    console.log("PROJECTION [Roberto, 52, Cáncer]:");
    console.log(`- Active House: ${profection.activeHouse} (Expected: 5)`);
    console.log(`- Active Sign: ${profection.activeSign} (Expected: Escorpio)`);
    console.log(`- Lord of Year: ${profection.lordOfYear} (Expected: Marte)`);

    if (profection.activeHouse === 5 && profection.activeSign === "Escorpio" && profection.lordOfYear === "Marte") {
        console.log("✅ Projection Engine: SUCCESS");
    } else {
        console.log("❌ Projection Engine: FAILED");
    }

    // 3. Matrix Engine
    const matrix = matrix_engine.getMatrixData(profection.lordOfYear, 'es');
    console.log("\nMATRIX [Marte]:");
    console.log(`- Mastery: ${matrix.mastery}`);
    console.log(`- Directive: ${matrix.directive}`);
    if (matrix.mastery.includes("MAESTRÍA DEL CORTE")) {
        console.log("✅ Matrix Engine: SUCCESS");
    } else {
        console.log("❌ Matrix Engine: FAILED");
    }

    // 4. Daily Engine (Dynamic Text)
    const mockTransits = {
        'Luna': 'Escorpio',
        'Sol': 'Piscis',
        'Marte': 'Piscis'
    };
    const daily = daily_engine.generateDailyRitual({
        name: user.name,
        lordOfYear: profection.lordOfYear,
        moonSign: mockTransits['Luna'],
        dayPlanet: 'Sol',
        intensity: 'Moderada',
        lang: 'es'
    });

    console.log("\nDAILY RITUAL:");
    console.log(`- Morning Sync: ${daily.morningSync.substring(0, 100)}...`);
    if (daily.morningSync.includes("Escorpio") && daily.morningSync.includes("Marte")) {
        console.log("✅ Daily Engine: SUCCESS (Dynamic parameters correctly injected)");
    } else {
        console.log("❌ Daily Engine: FAILED");
    }

    // 5. Weekly Engine
    const weeklyDesc = weekly_engine.getDynamicBlock(2, mockTransits, 'es');
    console.log("\nWEEKLY PROTOCOL:");
    console.log(`- Block 2 (Marte/Saturno): ${weeklyDesc}`);
    if (weeklyDesc.includes("Marte en Piscis")) {
        console.log("✅ Weekly Engine: SUCCESS (Transits reflecting in blocks)");
    } else {
        console.log("❌ Weekly Engine: FAILED");
    }
}

test();
