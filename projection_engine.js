// ============================================================
// ⚠️ MÓDULO CONGELADO — projection_engine.js v1.7.1
// NO MODIFICAR sin aprobación expresa de Roberto
// Última validación: Fase 6.18 — Abril 2026
// ============================================================
/**
 * KAIROS | Projection Engine v0.1.0
 * Calcula la Profección Anual y el Señor del Año.
 */



const projection_engine = {
    /**
     * Calcula los datos de la profección anual.
     * @param {string} ascendantSign - Signo del ascendente natal.
     * @param {number} age - Edad actual del usuario.
     * @returns {Object} - Datos de la profección.
     */
    calculateProfection(ascendantSign, age) {
        if (!ascendantSign || isNaN(age)) {
            return { error: true, reason: "Missing input data" };
        }

        const ascIndex = ZODIAC_LIST.indexOf(ascendantSign);
        if (ascIndex === -1) return { error: true, reason: "Invalid Ascendant Sign" };

        const activeHouse = (age % 12) + 1;
        const activeSignIndex = (ascIndex + age) % 12;
        const activeSign = ZODIAC_LIST[activeSignIndex];
        const lordOfYear = RULERS[activeSign];

        return {
            age,
            activeHouse,
            activeSign,
            lordOfYear,
            timestamp: new Date().toISOString()
        };
    }
};

// Exportar para uso en navegador/node
if (typeof module !== 'undefined') {
    module.exports = projection_engine;
} else {
    window.projection_engine = projection_engine;
}
