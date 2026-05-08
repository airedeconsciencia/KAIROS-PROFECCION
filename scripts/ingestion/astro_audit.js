/**
 * KAIROS | Astronomy Audit Module v0.1
 * Verifies the current astronomical state using Swiss Ephemeris.
 */

const astro_audit = {
    async runAudit() {
        console.log("🔍 [KAIROS ASTRO AUDIT] Iniciando auditoría técnica...");
        
        try {
            // 1. Obtener tiempo actual y parámetros de ubicación
            // Usamos una ubicación neutra (Madrid/UTC) si no hay usuario, 
            // o la del usuario para mayor precisión si existe.
            const now = new Date();
            const dateStr = now.toISOString().split('T')[0];
            const timeStr = now.toISOString().split('T')[1].substring(0, 5);
            
            // Intentamos pescar la ubicación del estado global
            const lat = window.state?.user?.latitude || 40.4168;
            const lon = window.state?.user?.longitude || -3.7038;
            const tz = window.state?.user?.timezone || 'UTC';

            console.log(`📍 [AUDIT] Parámetros: ${dateStr} ${timeStr} | Lat: ${lat}, Lon: ${lon} | TZ: ${tz}`);

            // 2. Calcular posiciones con el motor de alta precisión (Swiss Ephemeris)
            if (typeof window.getPlanetaryPositions !== 'function') {
                throw new Error("getPlanetaryPositions no disponible. ¿Está cargado planetary_engine.js?");
            }

            const highRes = await window.getPlanetaryPositions(dateStr, timeStr, lat, lon, tz);
            
            // 3. Obtener lo que el motor de transitos (Astronomy Engine) tiene en memoria
            let currentTransits = {};
            if (window.transit_engine && window.transit_engine.getCurrentTransits) {
                currentTransits = await window.transit_engine.getCurrentTransits();
            }

            // 4. Comparar y Estructurar
            const report = [];
            const bodies = [
                'Sol', 'Luna', 'Mercurio', 'Venus', 'Marte', 'Júpiter', 'Saturno', 
                'Urano', 'Neptuno', 'Plutón', 'MEAN_NODE', 'MEAN_APOG', 'CHIRON'
            ];

            const nameMap = {
                'Sol': 'SUN', 'Luna': 'MOON', 'Mercurio': 'MERCURY', 'Venus': 'VENUS', 
                'Marte': 'MARS', 'Júpiter': 'JUPITER', 'Saturno': 'SATURN', 
                'Urano': 'URANUS', 'Neptuno': 'NEPTUNE', 'Plutón': 'PLUTO',
                'MEAN_NODE': 'MEAN_NODE', 'MEAN_APOG': 'MEAN_APOG', 'CHIRON': 'CHIRON'
            };

            const userFriendlyNames = {
                'Sol': 'Sol', 'Luna': 'Luna', 'Mercurio': 'Mercurio', 'Venus': 'Venus', 
                'Marte': 'Marte', 'Júpiter': 'Júpiter', 'Saturno': 'Saturno', 
                'Urano': 'Urano', 'Neptuno': 'Neptuno', 'Plutón': 'Plutón',
                'MEAN_NODE': 'Nodo Norte (M)', 'MEAN_APOG': 'Lilith (M)', 'CHIRON': 'Quirón'
            };

            for (const body of bodies) {
                const sweKey = nameMap[body];
                const data = highRes.positions[sweKey];
                
                if (!data) continue;

                const appSign = currentTransits[body] || '---';
                const match = appSign === data.sign;

                report.push({
                    cuerpo: userFriendlyNames[body],
                    signo: data.sign,
                    grado: `${data.deg}° ${data.min}'`,
                    retro: data.isRetro ? 'SI' : 'NO',
                    app_match: match ? '✅' : `❌ (App: ${appSign})`,
                    raw_lon: data.longitude.toFixed(4)
                });
            }

            console.table(report);
            
            return {
                metadata: highRes.metadata,
                report: report
            };

        } catch (error) {
            console.error("❌ [KAIROS ASTRO AUDIT] Error durante la auditoría:", error);
            return null;
        }
    },

    renderAuditPanel(auditResult) {
        const target = document.getElementById('kairos-astro-audit-panel');
        if (!target || !auditResult) return;

        const { metadata, report } = auditResult;

        let html = `
            <div class="mt-8 p-6 rounded-3xl bg-slate-900 text-white font-technical border border-primary/20 shadow-2xl overflow-hidden relative">
                <div class="absolute top-0 right-0 p-4 opacity-10 font-black text-4xl">AUDIT</div>
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-xs font-black tracking-[0.3em] uppercase text-primary">Reporte de Ingeniería Astral</h3>
                    <span class="text-[8px] opacity-40 uppercase">Base: SwissEph WASM</span>
                </div>
                
                <div class="grid grid-cols-2 gap-4 mb-6 text-[9px] opacity-60 uppercase tracking-widest">
                    <div>UTC: ${metadata.utc}</div>
                    <div>JD: ${metadata.jdUt.toFixed(4)}</div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="text-[8px] font-black text-primary/60 uppercase border-b border-white/5">
                                <th class="py-2">Cuerpo</th>
                                <th class="py-2">Signo</th>
                                <th class="py-2 text-center">Posición</th>
                                <th class="py-2 text-center">Rx</th>
                                <th class="py-2 text-right">App Status</th>
                            </tr>
                        </thead>
                        <tbody class="text-[10px]">
        `;

        report.forEach(row => {
            html += `
                <tr class="border-b border-white/5 hover:bg-white/5">
                    <td class="py-3 font-bold">${row.cuerpo}</td>
                    <td class="py-3">${row.signo}</td>
                    <td class="py-3 text-center">${row.grado}</td>
                    <td class="py-3 text-center ${row.retro === 'SI' ? 'text-red-400' : 'text-green-400'}">${row.retro}</td>
                    <td class="py-3 text-right">${row.app_match}</td>
                </tr>
            `;
        });

        html += `
                        </tbody>
                    </table>
                </div>

                <div class="mt-6 pt-4 border-t border-white/10 text-[8px] opacity-40 italic leading-relaxed">
                    * Verificación cruzada entre el motor de visualización (Astronomy Engine) y el núcleo canónico (Swiss Ephemeris).
                    Las discrepancias en el signo indican la necesidad de normalizar el motor de transitos diario.
                </div>
            </div>
        `;

        target.innerHTML = html;
        target.classList.remove('hidden');
    }
};

window.astro_audit = astro_audit;
