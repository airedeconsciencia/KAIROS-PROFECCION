const Astronomy = require('./astronomy.js');

function calculateAscendant(y, m, d, hourStr, lat, lon, offset) {
    const [h, min] = hourStr.split(':').map(Number);
    
    // 1. UT
    const utDate = new Date(Date.UTC(y, m - 1, d, h, min));
    utDate.setUTCMinutes(utDate.getUTCMinutes() - (offset * 60));
    
    // 2. Astronomy Time
    const time = Astronomy.MakeTime(utDate);
    const jdUt = time.ut;
    const jdTt = time.tt;
    
    // 3. Variables
    const gastHours = Astronomy.SiderealTime(time);
    const gastDeg = (gastHours * 15) % 360;
    const tilt = Astronomy.e_tilt(time);
    const trueEps = tilt.tobl;

    // 4. LST y RAMC
    let lstDegrees = (gastDeg + lon + 360) % 360;
    const RAMC = lstDegrees * Math.PI / 180;
    const epsRad = trueEps * Math.PI / 180;
    const phiRad = lat * Math.PI / 180;

    // 5. Formula
    const num = Math.cos(RAMC);
    const den = -((Math.sin(RAMC) * Math.cos(epsRad)) + (Math.tan(phiRad) * Math.sin(epsRad)));
    let ascRad = Math.atan2(num, den);
    let ascDeg = (ascRad * 180 / Math.PI + 360) % 360;

    const ZODIAC_ECL = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    const signIndex = Math.floor(ascDeg / 30);
    const sign = ZODIAC_ECL[signIndex];
    const degInSign = Math.floor(ascDeg % 30);
    const totalMin = (ascDeg % 1) * 60;
    const minInSign = Math.floor(totalMin);

    return {
        ut: utDate.toISOString(),
        jdUt,
        gast: gastDeg,
        lst: lstDegrees,
        ascDeg,
        result: `${sign} ${degInSign}° ${minInSign}'`
    };
}

const cases = [
    { name: "USER (1973) - Expected", y: 1973, m: 5, d: 29, h: "07:30", lat: 39.8885, lon: 4.2628, off: 1 },
    { name: "USER (1973) - Error Match (Off 0?)", y: 1973, m: 5, d: 29, h: "07:30", lat: 39.8885, lon: 4.2628, off: 0 },
    { name: "PARTNER (1978) - Expected", y: 1978, m: 8, d: 21, h: "11:04", lat: 39.8885, lon: 4.2628, off: 2 },
    { name: "PARTNER (1978) - Error Match (Off 1?)", y: 1978, m: 8, d: 21, h: "11:04", lat: 39.8885, lon: 4.2628, off: 1 },
    { name: "PARTNER (1978) - Error Match (Off 0, Lon 0?)", y: 1978, m: 8, d: 21, h: "11:04", lat: 39.8885, lon: 0, off: 0 }
];

cases.forEach(c => {
    console.log(`--- CASE: ${c.name} ---`);
    console.log(`Offset: ${c.off}`);
    const res = calculateAscendant(c.y, c.m, c.d, c.h, c.lat, c.lon, c.off);
    console.log(`UT: ${res.ut}`);
    console.log(`JD: ${res.jdUt}`);
    console.log(`GAST: ${res.gast}`);
    console.log(`LST: ${res.lst}`);
    console.log(`ASC: ${res.result} (${res.ascDeg})`);
    console.log("");
});
