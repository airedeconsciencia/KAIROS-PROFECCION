/**
 * KAIROS SERIE 650 v2 — CAPA DE TRÁNSITOS
 * 
 * Orquestador visual independiente para la capa de tránsitos.
 * Consume datos exclusivamente de window.totalShadowContext.transit_context.
 */

window.KAIROS_V2_TRANSITS = (function() {
    
    // Configuración de visualización [STABLE]
    const CONFIG = {
        COLOR: '#3B82F6',       // Azul KAIROS
        OPACITY: 0.85,
        SIZE_RATIO: 0.8,        // 80% del tamaño natal
        R_OFFSET: -18,          // Offset respecto a innerRadius (para quedar entre natal y zodiaco)
        COLLISION_DIST: 12      // Umbral de colisión en grados
    };

    /**
     * Renderiza la capa de tránsitos sobre el SVG principal.
     */
    function render(svg, data) {
        // 1. Limpieza de capa previa
        const oldLayer = svg.getElementById('v2-transits-layer');
        if (oldLayer) oldLayer.remove();

        // 2. Verificación de contrato oficial
        const sc = window.totalShadowContext || {};
        const transitContext = sc.transit_context?.planets;
        const ascAbs = data?.ascAbs || 0;
        
        if (!transitContext || !transitContext.SOL || !transitContext.LUNA) {
            console.warn('[V2 TRANSITS] Error: Contrato de datos incompleto o ausente en ShadowContext.');
            return;
        }

        // 3. Preparación de contenedor
        const layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
        layer.id = 'v2-transits-layer';
        layer.style.display = 'none'; // Se controla vía CSS del selector
        
        // Inserción al final del stack actual (El orquestador gestiona el orden superior)
        svg.appendChild(layer);

        const geom = window.KAIROS_GEOM;
        const R_FINAL = geom.R_S_IN + CONFIG.R_OFFSET; // Radio final usado (Fallback interno seguro)

        // 4. Mapeo de planetas a procesar
        const bodies = [
            'SOL', 'LUNA', 'MERCURIO', 'VENUS', 'MARTE', 
            'JUPITER', 'SATURNO', 'URANO', 'NEPTUNO', 'PLUTON'
        ];

        // 5. Agrupación por cercanía (Colisiones)
        const sortedPlanets = bodies
            .map(id => ({ id, ...transitContext[id] }))
            .filter(p => p.longitude !== undefined)
            .sort((a, b) => a.longitude - b.longitude);

        const clusters = [];
        if (sortedPlanets.length > 0) {
            let currentCluster = [sortedPlanets[0]];
            for (let i = 1; i < sortedPlanets.length; i++) {
                const diff = Math.abs(sortedPlanets[i].longitude - sortedPlanets[i-1].longitude);
                const normDiff = Math.min(diff, 360 - diff);
                if (normDiff < CONFIG.COLLISION_DIST) {
                    currentCluster.push(sortedPlanets[i]);
                } else {
                    clusters.push(currentCluster);
                    currentCluster = [sortedPlanets[i]];
                }
            }
            clusters.push(currentCluster);
        }

        // 6. Dibujo
        clusters.forEach(cluster => {
            const count = cluster.length;
            cluster.forEach((planet, idx) => {
                // Cálculo de posición visual con corrección de Ascendente
                const visualDeg = geom.getVisualDeg(planet.longitude, ascAbs);
                
                // Desplazamiento radial para colisiones
                const radialShift = (count > 1) ? (idx * 15 - (count - 1) * 7.5) : 0;
                const r = R_FINAL + (radialShift * 0.4);

                const pos = geom.degToXY(visualDeg, r);
                
                // A. Glifo
                const esName = getEsName(planet.id);
                const glifo = window.getKairosSymbol('planets', esName);
                if (glifo) {
                    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
                    g.innerHTML = renderGlifoSVG(glifo, pos.x, pos.y, 17.6, CONFIG.COLOR, CONFIG.OPACITY);
                    layer.appendChild(g);
                }

                // B. Marcador de Grado
                const textPos = geom.degToXY(visualDeg, r - 12);
                const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
                text.setAttribute("x", textPos.x);
                text.setAttribute("y", textPos.y);
                text.setAttribute("text-anchor", "middle");
                text.setAttribute("font-size", "5.5");
                text.setAttribute("fill", CONFIG.COLOR);
                text.setAttribute("opacity", CONFIG.OPACITY);
                text.setAttribute("font-weight", "900");
                text.setAttribute("style", "font-family: 'Inter', sans-serif;");
                text.textContent = `${planet.degree}°`;
                layer.appendChild(text);

                // C. Retrogradación
                if (planet.isRetro) {
                    const rPos = geom.degToXY(visualDeg + 4, r + 4);
                    const rx = document.createElementNS("http://www.w3.org/2000/svg", "text");
                    rx.setAttribute("x", rPos.x);
                    rx.setAttribute("y", rPos.y);
                    rx.setAttribute("font-size", "8");
                    rx.setAttribute("fill", CONFIG.COLOR);
                    rx.setAttribute("font-weight", "bold");
                    rx.textContent = "℞";
                    layer.appendChild(rx);
                }
            });
        });

        // Renderizado completado
    }

    // Helpers
    function getEsName(id) {
        const map = {
            'SOL': 'Sol', 'LUNA': 'Luna', 'MERCURIO': 'Mercurio', 'VENUS': 'Venus', 
            'MARTE': 'Marte', 'JUPITER': 'Júpiter', 'SATURNO': 'Saturno', 
            'URANO': 'Urano', 'NEPTUNO': 'Neptuno', 'PLUTON': 'Plutón'
        };
        return map[id] || id;
    }

    function renderGlifoSVG(pathStr, x, y, size, color, opacity) {
        if (!pathStr) return '';
        const cleanPath = pathStr.replace(/currentColor/g, color);
        const half = size / 2;
        return `
            <g transform="translate(${x - half}, ${y - half})" opacity="${opacity}">
                <svg width="${size}" height="${size}" viewBox="0 0 100 100" style="overflow:visible;">
                    <g fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
                        ${cleanPath}
                    </g>
                </svg>
            </g>
        `;
    }

    return { render };

})();
