const Astronomy = require('./astronomy.js');

const ZODIAC_ECL = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];

function laboratoryCalculate(y, m, d, hourStr, lat, lon, offset) {
    const [h, min] = hourStr.split(':').map(Number);
    
    // 1. UT Calculation (Manual Offset for Lab verification)
    const utDate = new Date(Date.UTC(y, m - 1, d, h, min));
    utDate.setUTCMinutes(utDate.getUTCMinutes() - (offset * 60));

    // 2. Astronomy Engine Integration
    const time = Astronomy.MakeTime(utDate);
    const jdUt = time.ut;
    
    // 3. Sidereal Time & Obliquity
    const gastHours = Astronomy.SiderealTime(time);
    const gastDeg = (gastHours * 15) % 360;
    const tilt = Astronomy.e_tilt(time);
    const trueEps = tilt.tobl;

    // 4. Local Sidereal Time (LST) & RAMC
    let lstDegrees = (gastDeg + lon + 360) % 360;
    const RAMC = lstDegrees * Math.PI / 180;
    const epsRad = trueEps * Math.PI / 180;
    const phiRad = lat * Math.PI / 180;

    // 5. Ascendant Formula
    const num = Math.cos(RAMC);
    const den = -((Math.sin(RAMC) * Math.cos(epsRad)) + (Math.tan(phiRad) * Math.sin(epsRad)));
    let ascRad = Math.atan2(num, den);
    let ascDeg = (ascRad * 180 / Math.PI + 360) % 360;

    // 6. Formatting
    const signIndex = Math.floor(ascDeg / 30);
    const sign = ZODIAC_ECL[signIndex];
    const degInSign = Math.floor(ascDeg % 30);
    const totalMin = (ascDeg % 1) * 60;
    const minInSign = Math.floor(totalMin);

    return {
        ut: utDate.toISOString(),
        offset,
        jd: jdUt.toFixed(8),
        gast: gastDeg.toFixed(4),
        lst: lstDegrees.toFixed(4),
        result: `${sign} ${degInSign}° ${minInSign}'`,
        raw: ascDeg.toFixed(4)
    };
}

const cases = [
    { name: "Caso 1 (USER 1973)", y: 1973, m: 5, d: 29, h: "07:30", lat: 39.8885, lon: 4.2628, off: 1 },
    { name: "Caso 2 (PAREJA 1978)", y: 1978, m: 8, d: 21, h: "11:04", lat: 39.8885, lon: 4.2628, off: 2 }
];

console.log("=== KAIROS LABORATORY AUDIT REPORT ===\n");

cases.forEach(c => {
    console.log(`--- ${c.name} ---`);
    const res = laboratoryCalculate(c.y, c.m, c.d, c.h, c.lat, c.lon, c.off);
    console.log(`UT:   ${res.ut} (Offset: ${res.off})`);
    console.log(`JD:   ${res.jd}`);
    console.log(`GST:  ${res.gast}°`);
    console.log(`LST:  ${res.lst}°`);
    console.log(`ASC:  ${res.result} (${res.raw}°)`);
    console.log("");
});
