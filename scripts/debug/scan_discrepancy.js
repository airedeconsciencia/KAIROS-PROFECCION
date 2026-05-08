const Astronomy = require('./astronomy.js');

const ZODIAC_ECL = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

function audit(y, m, d, hourStr, lat, lon, offset) {
    const [h, min] = hourStr.split(':').map(Number);
    const utDate = new Date(Date.UTC(y, m - 1, d, h, min));
    utDate.setUTCMinutes(utDate.getUTCMinutes() - (offset * 60));

    const time = Astronomy.MakeTime(utDate);
    const gastHours = Astronomy.SiderealTime(time);
    const gastDeg = (gastHours * 15) % 360;
    const tilt = Astronomy.e_tilt(time);
    const trueEps = tilt.tobl;

    let lstDegrees = (gastDeg + lon + 360) % 360;
    const RAMC = lstDegrees * Math.PI / 180;
    const epsRad = trueEps * Math.PI / 180;
    const phiRad = lat * Math.PI / 180;

    const num = Math.cos(RAMC);
    const den = -((Math.sin(RAMC) * Math.cos(epsRad)) + (Math.tan(phiRad) * Math.sin(epsRad)));
    let ascRad = Math.atan2(num, den);
    let ascDeg = (ascRad * 180 / Math.PI + 360) % 360;

    const signIndex = Math.floor(ascDeg / 30);
    const degInSign = Math.floor(ascDeg % 30);
    const minInSign = Math.floor((ascDeg % 1) * 60);

    return {
        ut: utDate.toISOString(),
        jd: time.ut.toFixed(8),
        gst: gastDeg.toFixed(4),
        lst: lstDegrees.toFixed(4),
        eps: trueEps.toFixed(4),
        asc: `${ZODIAC_ECL[signIndex]} ${degInSign}° ${minInSign}'`,
        raw: ascDeg
    };
}

console.log("=== SCANNING FOR DISCREPANCY ORIGIN ===");

// TEST 1: Case 1973 (Expected 8°36' Cancer)
// If Maó (4.26) and Offset +1
console.log("\nCASE 1973 (Maó +1 Offset):");
console.log(audit(1973, 5, 29, "07:30", 39.888, 4.26, 1));

// If Madrid (-3.7) and Offset +1
console.log("\nCASE 1973 (Madrid -3.7 Offset +1):");
console.log(audit(1973, 5, 29, "07:30", 40.41, -3.7, 1));

// What gives Cancer 24°? 
// Let's check Offset +2 in Maó
console.log("\nCASE 1973 (Maó +2 Offset):");
console.log(audit(1973, 5, 29, "07:30", 39.888, 4.26, 2));

// TEST 2: Case 1978 (Expected 15°39' Libra)
// Maó (4.26) and Offset +2
console.log("\nCASE 1978 (Maó +2 Offset):");
console.log(audit(1978, 8, 21, "11:04", 39.888, 4.26, 2));

// If Offset +1 (DST error)
console.log("\nCASE 1978 (Maó +1 Offset):");
console.log(audit(1978, 8, 21, "11:04", 39.888, 4.26, 1));

// If Longitude 0 and Offset 0 (Fallthrough)
console.log("\nCASE 1978 (Long 0, Offset 0):");
console.log(audit(1978, 8, 21, "11:04", 39.888, 0, 0));
