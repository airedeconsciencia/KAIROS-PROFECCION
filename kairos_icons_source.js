const KAIROS_ICONS = {
  zodiac: {
    'Aries': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 30 C 20 10, 45 10, 50 35 C 55 10, 80 10, 80 30 M50 35 V 90" stroke-linecap="round"/><circle cx="50" cy="35" r="3" fill="currentColor"/></svg>`,
    'Tauro': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="50" cy="60" r="25"/><path d="M20 20 C 20 40, 50 45, 50 45 C 50 45, 80 40, 80 20" stroke-linecap="round"/></svg>`,
    'Géminis': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M30 20 H 70 M30 80 H 70 M40 20 V 80 M60 20 V 80" stroke-linecap="round"/></svg>`,
    'Cáncer': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="35" cy="40" r="15"/><circle cx="65" cy="60" r="15"/><path d="M35 25 Q 70 25, 70 45 M65 75 Q 30 75, 30 55" stroke-linecap="round"/></svg>`,
    'Leo': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="30" cy="60" r="12"/><path d="M35 52 C 40 20, 80 20, 80 50 C 80 80, 50 90, 30 70" stroke-linecap="round"/></svg>`,
    'Virgo': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 30 V 70 M40 30 V 70 M60 30 V 70 Q 60 90, 80 70 V 30" stroke-linecap="round"/></svg>`,
    'Libra': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 80 H 80 M20 60 H 80 M50 20 V 60" stroke-linecap="round"/></svg>`,
    'Escorpio': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 30 V 70 M40 30 V 70 M60 30 V 70 L 80 90 M80 90 L 85 75 M80 90 L 65 85" stroke-linecap="round"/></svg>`,
    'Sagitario': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 80 L 80 20 M50 20 H 80 V 50 M35 35 L 55 55" stroke-linecap="round"/></svg>`,
    'Capricornio': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 30 L 40 80 L 60 40 C 80 40, 80 80, 60 80" stroke-linecap="round"/></svg>`,
    'Acuario': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 40 L 35 25 L 50 40 L 65 25 L 80 40 M20 70 L 35 55 L 50 70 L 65 55 L 80 70" stroke-linecap="round"/></svg>`,
    'Piscis': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M30 20 Q 50 50, 30 80 M70 20 Q 50 50, 70 80 M20 50 H 80" stroke-linecap="round"/></svg>`
  },
  planets: {
    'Sol': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="50" cy="50" r="10" fill="currentColor"/><circle cx="50" cy="50" r="30" stroke-dasharray="6 4"/><path d="M50 10 V 20 M50 80 V 90 M10 50 H 20 M80 50 H 90" stroke-linecap="round"/></svg>`,
    'Luna': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M70 20 A 40 40 0 1 0 70 80 A 30 30 0 1 1 70 20" fill="currentColor" opacity="0.1" stroke="currentColor"/></svg>`,
    'Mercurio': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="50" cy="60" r="20"/><path d="M50 40 V 20 M35 15 Q 50 30, 65 15" stroke-linecap="round"/></svg>`,
    'Venus': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="50" cy="40" r="25" stroke-width="4"/><path d="M50 65 V 95 M35 80 H 65" stroke-linecap="round" stroke-width="4"/></svg>`,
    'Marte': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="40" cy="60" r="25"/><path d="M60 40 L 85 15 M65 15 H 85 V 35" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/></svg>`,
    'Júpiter': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M30 40 H 70 M50 20 V 80 C 50 90, 30 90, 30 80" stroke-linecap="round" stroke-width="5"/></svg>`,
    'Saturno': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M40 20 V 70 C 40 85, 25 85, 25 75" stroke-linecap="round" stroke-width="5"/><path d="M20 50 Q 50 35, 80 50 Q 50 65, 10 45" stroke-width="3"/></svg>`,
    'Urano': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="50" cy="55" r="20"/><circle cx="50" cy="55" r="2"/><path d="M50 35 V 15 M40 20 H 60" stroke-linecap="round"/></svg>`,
    'Neptuno': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M30 20 V 50 Q 30 70, 50 70 Q 70 70, 70 50 V 20 M50 70 V 90 M35 80 H 65" stroke-linecap="round"/></svg>`,
    'Plutón': `<svg viewBox="0 0 100 100" class="size-full" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="50" cy="30" r="15"/><path d="M30 35 Q 30 65, 50 65 Q 70 65, 70 35 M50 65 V 90 M35 85 H 65" stroke-linecap="round"/></svg>`
  }
};
