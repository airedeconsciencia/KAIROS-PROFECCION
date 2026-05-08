const { DateTime } = require('luxon');

function getOffsetAtDate(y, m, d, h, min, tz) {
    const dt = DateTime.fromObject(
        { year: y, month: m, day: d, hour: h, minute: min },
        { zone: tz }
    );
    return dt.offset / 60;
}

const cases = [
    { name: "USER (1973)", y: 1973, m: 5, d: 29, h: 7, min: 30, tz: "Europe/Madrid" },
    { name: "PARTNER (1978)", y: 1978, m: 8, d: 21, h: 11, min: 4, tz: "Europe/Madrid" }
];

cases.forEach(c => {
    const off = getOffsetAtDate(c.y, c.m, c.d, c.h, c.min, c.tz);
    console.log(`${c.name}: Offset = ${off}`);
});
