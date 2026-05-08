/**
 * KAIROS Serie 650 v2 — Capa de Profección (Modo 2)
 * Implementación de la visualización del ciclo anual sobre la base natal.
 */

window.KAIROS_V2_PROFECTION = (function() {
    'use strict';

    function renderLayer(svg, natalData) {
        if (!svg) {
            svg = document.getElementById('natal-chart-v1');
        }
        if (!svg) {
            console.error("❌ KAIROS v2 Profección: SVG no encontrado.");
            return;
        }

        console.log('[KAIROS PROFECTION DEBUG] Using getActiveKairosContext');
        const shadowCtx = window.getActiveKairosContext();
        if (!shadowCtx || !shadowCtx.annual_context) {
            return;
        }

        const { profection_house, lord_of_year } = shadowCtx.annual_context;
        const geom = window.KAIROS_GEOM;
        
        if (!geom) {
            console.error("❌ KAIROS v2 Profección: KAIROS_GEOM no disponible.");
            return;
        }

        if (window.KAIROS_FLAGS && window.KAIROS_FLAGS.LOG_LEVEL === 'verbose') {
            console.log(`🎨 KAIROS v2: Renderizando Profección (Casa ${profection_house}, Señor: ${lord_of_year})`);
        }

        // 1. Limpiar capa previa si existe
        const existingLayer = svg.querySelector('#v2-profection-layer');
        if (existingLayer) existingLayer.remove();

        const layer = document.createElementNS("http://www.w3.org/2000/svg", "g");
        layer.setAttribute("id", "v2-profection-layer");
        // Insertar después de las casas pero antes de los aspectos si es posible, 
        // o al final para asegurar visualización clara
        svg.appendChild(layer);

        // --- A. RESALTAR CASA PROFECTADA ---
        highlightProfectionHouse(layer, profection_house, natalData, geom);

        // --- B. MARCAR SEÑOR DEL AÑO ---
        highlightLordOfYear(svg, layer, lord_of_year, geom);
    }

    function highlightProfectionHouse(layer, houseNum, natalData, geom) {
        const house = natalData.houses[houseNum];
        const nextHouseNum = houseNum === 12 ? 1 : parseInt(houseNum) + 1;
        const nextHouse = natalData.houses[nextHouseNum];

        if (!house || !nextHouse) return;

        const d1 = (geom.signToDeg(house.sign) + parseFloat(house.degree)) % 360;
        const d2 = (geom.signToDeg(nextHouse.sign) + parseFloat(nextHouse.degree)) % 360;
        
        const v1 = geom.getVisualDeg(d1, natalData.ascAbs);
        const v2 = geom.getVisualDeg(d2, natalData.ascAbs);

        // Arco resaltado en el área de las casas (R_H_IN a R_S_IN)
        const pathData = geom.arcPath(v1, v2, geom.R_H_IN, geom.R_S_IN);
        
        const houseHighlight = document.createElementNS("http://www.w3.org/2000/svg", "path");
        houseHighlight.setAttribute("d", pathData);
        houseHighlight.setAttribute("fill", "#F59E0B"); // Ámbar KAIROS
        houseHighlight.setAttribute("fill-opacity", "0.08");
        houseHighlight.setAttribute("stroke", "#F59E0B");
        houseHighlight.setAttribute("stroke-width", "1.5");
        houseHighlight.setAttribute("stroke-opacity", "0.3");

        layer.appendChild(houseHighlight);
        // [v650.5.39] Eliminado marcador circular — solo arco de casa + señor del año
    }

    function highlightLordOfYear(svg, layer, lordName, geom) {
        if (!svg) svg = document.getElementById('natal-chart-v1');
        if (!svg || !lordName) return;
        
        // Mapeo robusto de nombres (ES -> Claves posibles en SVG)
        const planetMapping = {
            'sol': ['sol', 'sun'],
            'luna': ['luna', 'moon'],
            'mercurio': ['mercurio', 'mercury'],
            'venus': ['venus'],
            'marte': ['marte', 'mars'],
            'jupiter': ['jupiter', 'júpiter'],
            'saturno': ['saturno', 'saturn'],
            'urano': ['urano', 'uranus'],
            'neptuno': ['neptuno', 'neptune'],
            'pluton': ['pluton', 'pluto'],
            'nodo norte': ['mean_node', 'north_node', 'nodo_norte']
        };

        const lordKey = lordName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const searchKeys = planetMapping[lordKey] || [lordKey];
        
        // Buscar el planeta por el metadato data-planet que añadimos a v1
        // [v650.5.38] Búsqueda en dos niveles: SVG scope → document scope
        let planetNode = null;
        for (const key of searchKeys) {
            planetNode = svg.querySelector(`[data-planet="${key}"]`);
            if (!planetNode) {
                // Fallback: buscar en todo el documento por si el SVG está en otro scope
                planetNode = document.querySelector(`[data-planet="${key}"]`);
            }
            if (planetNode) break;
        }

        if (!planetNode) {
            console.warn(`⚠️ KAIROS v2 Profección: No se encontró el nodo para el Señor del Año: ${lordName} (Buscado como: ${searchKeys.join(', ')})`);
            return;
        }

        // Obtener la posición del planeta buscando el elemento con transform
        const transformNode = planetNode.getAttribute("transform") ? planetNode : planetNode.querySelector('[transform]');
        const transform = transformNode?.getAttribute("transform");
        
        if (!transform) {
            console.warn(`⚠️ KAIROS v2 Profección: No se pudo extraer la posición (transform) para: ${lordName}`);
            return;
        }

        // Extraer x, y del translate(x, y)
        const match = transform.match(/translate\(([^,]+),\s*([^)]+)\)/);
        if (!match) return;

        const px = parseFloat(match[1]) + 11; // Sumamos la mitad del tamaño (22/2)
        const py = parseFloat(match[2]) + 11;

        // Crear un halo dorado alrededor del Señor del Año
        const halo = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        halo.setAttribute("cx", px);
        halo.setAttribute("cy", py);
        halo.setAttribute("r", "16");
        halo.setAttribute("fill", "none");
        halo.setAttribute("stroke", "#F59E0B");
        halo.setAttribute("stroke-width", "2");
        halo.setAttribute("stroke-dasharray", "2,2");
        halo.setAttribute("opacity", "0.6");

        // Añadir una animación sutil de pulsación si es posible (CSS o SVG)
        const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animate.setAttribute("attributeName", "opacity");
        animate.setAttribute("values", "0.6;0.2;0.6");
        animate.setAttribute("dur", "3s");
        animate.setAttribute("repeatCount", "indefinite");
        halo.appendChild(animate);

        layer.appendChild(halo);
        
        // Etiqueta de texto "Señor del Año"
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", px);
        text.setAttribute("y", py + 22);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("font-size", "6");
        text.setAttribute("fill", "#B45309");
        text.setAttribute("font-weight", "bold");
        text.textContent = "SEÑOR DEL AÑO";
        layer.appendChild(text);
    }

    return {
        render: renderLayer
    };
})();
