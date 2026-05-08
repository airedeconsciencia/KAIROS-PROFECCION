/**
 * KAIROS Serie 650 v2 — Selector de Modos de Visualización
 */

window.KAIROS_V2_UI = (function() {
    'use strict';

    const MODES = [
        { id: 'mode-natal', label: 'NATAL' },
        { id: 'mode-combined', label: 'NATAL + PROFECCIÓN' },
        { id: 'mode-transits', label: 'NATAL + TRÁNSITOS' },
        { id: 'mode-profection', label: 'PROFECCIÓN' },
        { id: 'mode-full', label: 'VISIÓN TOTAL' }
    ];

    function init() {
        // Asegurarse de que el modo inicial esté en localStorage
        if (!localStorage.getItem('kairos_v2_mode')) {
            localStorage.setItem('kairos_v2_mode', 'mode-combined');
        }
        
        injectStyles();
    }

    function injectStyles() {
        if (document.getElementById('v2-ui-styles')) return;
        const style = document.createElement('style');
        style.id = 'v2-ui-styles';
        style.textContent = `
            .v2-mode-selector {
                display: flex;
                gap: 6px;
                justify-content: flex-start; /* Cambio a start para mejorar comportamiento de scroll */
                margin: 15px 0;
                padding: 10px;
                overflow-x: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
                scroll-behavior: smooth;
            }
            .v2-mode-selector::-webkit-scrollbar { display: none; }
            
            .v2-mode-pill {
                padding: 6px 12px;
                border-radius: 99px;
                border: 1px solid #E5E7EB;
                background: white;
                color: #6B7280;
                font-size: 10.5px;
                font-weight: 800;
                letter-spacing: 0.02em;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 1px 2px rgba(0,0,0,0.02);
                flex-shrink: 0;
            }
            
            .v2-mode-pill:hover {
                border-color: #D1D5DB;
                color: #374151;
            }
            
            .v2-mode-pill.active {
                background: #111827;
                color: white;
                border-color: #111827;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            
            /* Lógica de visibilidad controlada por clases en el contenedor */
            #v2-transits-layer, #v2-profection-layer { display: none; }
            
            .show-combined #v2-profection-layer, 
            .show-profection #v2-profection-layer,
            .show-full #v2-profection-layer { display: block !important; }
            
            .show-transits #v2-transits-layer,
            .show-full #v2-transits-layer { display: block !important; }
            
            /* Control de saturación en Modo Full */
            .show-full #v2-profection-layer {
                opacity: 0.45;
                transition: opacity 0.3s ease;
            }
            
            .show-profection #kairos-natal-svg > *:not(#v2-profection-layer):not(#v2-identity-layer):not(defs) {
                opacity: 0.15;
                filter: grayscale(0.2);
                transition: opacity 0.4s ease;
            }
            
            .show-combined #kairos-natal-svg > *, .show-transits #kairos-natal-svg > *, .show-full #kairos-natal-svg > * {
                opacity: 1;
                filter: none;
                transition: opacity 0.4s ease;
            }
        `;
        document.head.appendChild(style);
    }

    function render() {
        const rootContainer = document.getElementById('kairos-natal-container');
        if (!rootContainer) return;
        
        const parent = rootContainer.parentElement;
        const existing = parent.querySelector('.v2-mode-selector');
        if (existing) existing.remove();

        const selector = document.createElement('div');
        selector.className = 'v2-mode-selector';

        const currentMode = localStorage.getItem('kairos_v2_mode');

        MODES.forEach(mode => {
            const pill = document.createElement('div');
            pill.className = `v2-mode-pill ${currentMode === mode.id ? 'active' : ''}`;
            pill.textContent = mode.label;
            pill.onclick = () => setMode(mode.id, pill);
            selector.appendChild(pill);
            
            // Si es el activo al renderizar, asegurar visibilidad
            if (currentMode === mode.id) {
                setTimeout(() => {
                    pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }, 100);
            }
        });

        rootContainer.after(selector);
        applyModeToUI(currentMode);
    }

    function setMode(modeId, pill) {
        localStorage.setItem('kairos_v2_mode', modeId);
        if (pill) {
            pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        render();
    }

    function applyModeToUI(modeId) {
        const root = document.getElementById('kairos-natal-container');
        if (!root) return;

        root.classList.remove('show-natal', 'show-combined', 'show-profection', 'show-transits', 'show-full');
        
        if (modeId === 'mode-natal') root.classList.add('show-natal');
        else if (modeId === 'mode-combined') root.classList.add('show-combined');
        else if (modeId === 'mode-profection') root.classList.add('show-profection');
        else if (modeId === 'mode-transits') root.classList.add('show-transits');
        else if (modeId === 'mode-full') root.classList.add('show-full');
    }

    return {
        init: init,
        render: render,
        apply: applyModeToUI
    };
})();
