/**
 * KAIROS SERIE 650 v2 — Orquestador de Capas
 * v2.1.0-alpha
 * 
 * Gestiona la inyección de capas visuales y la UI de control.
 */
(function() {
    'use strict';

    const KAIROS_V2 = {
        init: function(containerId, data) {
            const svg = document.getElementById(containerId);
            if (!svg) return;

            // 0. Inicializar UI (Estilos y persistencia)
            if (window.KAIROS_V2_UI) window.KAIROS_V2_UI.init();

            // 1. Capa de Profección (Ciclo Anual)
            if (window.KAIROS_V2_PROFECTION) {
                window.KAIROS_V2_PROFECTION.render(svg, data);
            }
            
            // 2. Capa de Tránsitos (Clima Actual)
            if (window.KAIROS_V2_TRANSITS) {
                window.KAIROS_V2_TRANSITS.render(svg, data);
            }

            // 3. Centro de Identidad (SIEMPRE ÚLTIMA CAPA - SUPERIOR)
            this.renderIdentityCenter(svg);

            // 4. UI Selector de Modos (Control Externo)
            if (window.KAIROS_V2_UI) {
                window.KAIROS_V2_UI.render();
            }
        },

        renderIdentityCenter: function(svg) {
            const existing = document.getElementById('v2-identity-layer');
            if (existing) existing.remove();

            const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
            group.setAttribute('id', 'v2-identity-layer');
            
            // CENTRO REAL DEL VIEWBOX (200, 200)
            const CX = 200, CY = 200;

            // 1. SÍMBOLO KAIROS (Watermark Mejorada)
            const watermark = document.createElementNS("http://www.w3.org/2000/svg", "g");
            watermark.setAttribute('opacity', '0.12');
            watermark.setAttribute('style', 'pointer-events: none;');

            // Círculos concéntricos definidos
            [35, 28, 20].forEach((r, i) => {
                const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                c.setAttribute('cx', CX);
                c.setAttribute('cy', CY);
                c.setAttribute('r', r);
                c.setAttribute('fill', 'none');
                c.setAttribute('stroke', '#9CA3AF');
                c.setAttribute('stroke-width', i === 0 ? '0.5' : '1');
                if (i === 0) c.setAttribute('stroke-dasharray', '3,3');
                watermark.appendChild(c);
            });
            group.appendChild(watermark);

            // 2. INICIAL DEL USUARIO (Centrado Matemático)
            let initial = 'R'; 
            try {
                const user = firebase.auth().currentUser;
                if (user) {
                    const name = user.displayName || user.email || '';
                    if (name.length > 0) initial = name[0].toUpperCase();
                }
            } catch (e) {}
            
            const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
            text.setAttribute('x', CX);
            text.setAttribute('y', CY); // Centrado exacto
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'central'); // Crítico para centrado vertical
            text.setAttribute('font-size', '17'); // Aumentado ~15%
            text.setAttribute('font-weight', '900');
            text.setAttribute('fill', '#9CA3AF');
            text.setAttribute('opacity', '0.35');
            text.setAttribute('style', 'font-family: "Inter", sans-serif; letter-spacing: -0.05em; pointer-events: none; transition: all 0.3s ease;');
            text.textContent = initial;

            group.appendChild(text);

            // Inyectar al final para asegurar visibilidad sobre el fondo natal
            svg.appendChild(group);
        }
    };

    // Inicialización del Orquestador v2 al cargar el gráfico natal
    window.addEventListener('kairos:natal_chart_ready', (e) => {
        KAIROS_V2.init(e.detail.containerId, e.detail.data);
    });

    console.log("✅ KAIROS v2: Architecture Consolidated (Profection | Transits | Identity)");
})();
