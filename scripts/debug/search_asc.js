const Astronomy = require('./astronomy.js');

function calculateAscendant(y, m, d, hourStr, lat, lon, utcOffset) {
    const [h, min] = hourStr.split(':').map(Number);
    const birthDate = new Date(Date.UTC(y, m - 1, d, h, min));
    const utDate = new Date(birthDate.getTime() - (utcOffset * 3600000));
    const time = Astronomy.MakeTime(utDate);
    const gst = Astronomy.SiderealTime(time);
    const lstDegrees = (gst * 15 + lon) % 360;
    const tilt = Astronomy.e_tilt(time);
    const radLST = lstDegrees * Math.PI / 180;
    const radLat = lat * Math.PI / 180;
    const radObl = tilt.tobl * Math.PI / 180;
    const yVal = Math.cos(radLST);
    const xVal = -(Math.sin(radLST) * Math.cos(radObl) + Math.tan(radLat) * Math.sin(radObl));
    let ascDeg = Math.atan2(yVal, xVal) * 180 / Math.PI;
    ascDeg = (ascDeg + 360) % 360;
    const ZODIAC_ECL = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'];
    const signIndex = Math.floor(ascDeg / 30);
    return { sign: ZODIAC_ECL[signIndex], deg: Math.floor(ascDeg % 30), min: Math.floor((ascDeg % 1) * 60), totalDeg: ascDeg };
}

const lat = 39.8885;
const lon = 4.2654;
const hStr = '11:04';

console.log('Searching for Scorpio ~15° (totalDeg ~225.65) for 1978-08-21 11:04:');

for (let off = -12; off <= 14; off += 1) {
    const res = calculateAscendant(1978, 8, 21, hStr, lat, lon, off);
    if (res.sign === 'Escorpio' || res.sign === 'Libra' || res.sign === 'Sagitario') {
        console.log(`Offset ${off}: ${res.sign} ${res.deg}°${res.min}' (Total: ${res.totalDeg.toFixed(2)})`);
    }
}

console.log('\nFlipping Longitude (if it were West):');
for (let off = -12; off <= 14; off += 1) {
    const res = calculateAscendant(1978, 8, 21, hStr, lat, -lon, off);
    if (res.sign === 'Escorpio' || res.sign === 'Libra' || res.sign === 'Sagitario') {
        console.log(`Offset ${off}: ${res.sign} ${res.deg}°${res.min}' (Total: ${res.totalDeg.toFixed(2)})`);
    }
}
