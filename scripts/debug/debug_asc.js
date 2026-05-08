const Astronomy = require('./astronomy.js');

function calculateAscendant(y, m, d, hourStr, lat, lon, utcOffset) {
    const [h, min] = hourStr.split(':').map(Number);
    const birthDate = new Date(Date.UTC(y, m - 1, d, h, min));
    const utDate = new Date(birthDate.getTime() - (utcOffset * 3600000));

    console.log(`UT Date: ${utDate.toISOString()}`);

    const time = Astronomy.MakeTime(utDate);
    const gst = Astronomy.SiderealTime(time);
    const lstDegrees = (gst * 15 + lon) % 360;

    console.log(`GST: ${gst.toFixed(4)}h, LST: ${lstDegrees.toFixed(4)}°`);

    const tilt = Astronomy.e_tilt(time);
    const radLST = lstDegrees * Math.PI / 180;
    const radLat = lat * Math.PI / 180;
    const radObl = tilt.tobl * Math.PI / 180;

    const yVal = -Math.cos(radLST);
    const xVal = Math.sin(radLST) * Math.cos(radObl) + Math.tan(radLat) * Math.sin(radObl);

    let ascDeg = Math.atan2(yVal, xVal) * 180 / Math.PI;
    ascDeg = (ascDeg + 360) % 360;

    const ZODIAC_ECL = [
        'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo',
        'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'
    ];

    const signIndex = Math.floor(ascDeg / 30);
    const sign = ZODIAC_ECL[signIndex];
    const degInSign = Math.floor(ascDeg % 30);
    const minInSign = Math.floor((ascDeg % 1) * 60);

    return { sign, deg: degInSign, min: minInSign, totalDeg: ascDeg };
}

// Data for Maó 1978-08-21 11:04
const lat = 39.8885;
const lon = 4.2654;

console.log('--- TESTING OFFSET +1 ---');
console.log(calculateAscendant(1978, 8, 21, '11:04', lat, lon, 1));

console.log('\n--- TESTING OFFSET +2 ---');
console.log(calculateAscendant(1978, 8, 21, '11:04', lat, lon, 2));
