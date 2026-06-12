// ⚠️ MÓDULO CONGELADO — engine_v483_final.js v1.7.2
// NO MODIFICAR sin aprobación expresa de Roberto
// Última validación: Fase 6.18 — Abril 2026
// Versión Sistema: v650.5.205
// [v650.5.200] MES_PREMIUM_v1 — renderMonthlyPremiumBlock: 5 bloques activos (Activaciones Natales, Tránsitos de Tono, Momentos Clave, Activaciones Profundas, Tránsitos Avanzados) · personalización natal real · gate premium · IDs shell inyectables
// [v650.5.201] MES_PREMIUM_textual — corrección calidad textual B1-B5: eliminadas frases prohibidas (algo concreto, opera como fondo, desde un ángulo diferente, algo específico, de forma personal) · fallbacks con explicación real · signos natales explicitados en todos los bloques
// [v650.5.202] MES_PREMIUM_glyphs — glifos KAIROS inline en todos los bloques via window.getKairosSymbol · mapas _signMeaning y _planetMeaning · textos con planeta+signo+significado traducido · eliminadas: "creando un diálogo entre dos registros distintos", "La diferencia define cómo llega su influencia"
// [v650.5.203] MES_PREMIUM_B2_variaciones — eliminada redundancia en Tránsitos de Tono: añadido mapa _planetChangePhrase con 7 frases diferenciadas (Mercurio/Venus/Marte/Sol/Luna/Júpiter/Saturno) · ya no se repite "[domain] llega en un modo distinto al que te resulta familiar" para cada planeta
// [v650.5.204] MES_PREMIUM_B3_anti-repeticion — eliminada plantilla "El tránsito lo activa desde X — en un modo distinto, lo que pone en movimiento Y": sustituida por mapas _b3DirectPhrase y _b3CrossPhrase (7 entradas por planeta, frase única por caso) · B1 fallback diferenciado Luna Nueva vs Luna Llena sin activación natal
// [v650.5.205] MES_PREMIUM_B3_variantes — _b3DirectPhrase/_b3CrossPhrase sustituidas por arrays de 3 variantes por planeta (_b3DirectPhraseVariants/_b3CrossPhraseVariants) + contador usedPlanetCounts: garantía mecánica de no-repetición cuando el mismo planeta natal se activa más de una vez en B3
// [v650.5.206] AÑO_PREMIUM_v2.1 — Fase 1+2:
// [v650.5.207] AÑO_PREMIUM_v2.2 — Humanización narrativa: _lordNatalQuality (84 entradas) reescrita en voz directa segunda persona sin "opera desde" ni nombre de planeta — patrón vivido del usuario, no descripción del mecanismo astrológico · _lordImplicitD actualizado · ensamblaje D elimina prefijo planeta+signo (A ya lo nombró)
// [v650.5.208] AÑO_PREMIUM_v2.3 — Ancla astrológica D:
// [v650.5.209] AÑO_PREMIUM_v2.4 — Desfragmentación visual:
// [v650.5.210] AÑO_PREMIUM_v2.5 — Consistencia FREE/PREMIUM:
// [v650.5.211] AÑO_PREMIUM_v2.6 — Pulido narrativo: LBL centrado · SUBLBL eliminado · dato astrológico con glifos integrado en apertura del cuerpo · glifo signo activo en finalTextB · _lordClosingB (7 entradas) rompe plantilla fija de cierre en bloque B FREE centrado (título+lock+teaser+CTA al centro como HOY) · PREMIUM labels genéricos iguales a FREE · dato astrológico como subtítulo en cuerpo (SUBLBL) debajo del label principal 4 tarjetas independientes FREE y PREMIUM (patrón MES/HOY/SEMANA) · FREE: 4 tarjetas bloqueadas sin datos astrológicos visibles (título genérico + teaser + CTA) · PREMIUM: 4 tarjetas beige independientes sin wrapper exterior compartido · eliminados WRAPPER_OPEN, WRAPPER_OPEN_PREMIUM, SEPARATOR _lordCharacterization (7 entradas) recupera glifo KAIROS + nombre planeta al inicio de D sin repetir el mecanismo de A · fórmula híbrida: [ancla simbólica] + [patrón vivido] + [puente natal→activa] + [ritmo] + [comprensión] glyphs KAIROS en labels A/B · IDs internos 4 bloques · tooltip eliminado · LORD_IN_SIGN (código muerto 84 entradas) eliminado · LORD_WINDOWS_V3 sustituido por función modular 4 capas (_lordNatalQuality 7×12 + bridge natal→activa + _lordTemporalRhythm + _cycleInsight 7×12): dos usuarios con mismo Señor del Año pero carta distinta reciben textos D claramente distintos
// [v650.5.128] MATRIX_RENDER_2.5 — Guía expandible por tarjeta (campo accion, toggle Ver guía)
// [v650.5.129] MATRIX_RENDER_2.6 — Header "Un espacio para regular", botón i, tono por pilar, anti-redundancia, duracion solo en guía
// [v650.5.130] MATRIX microcopy emocional — 210 textos_kairos reescritos 18-30p, acompañamiento regulativo, voz aprobada GPT+Roberto
// [v650.5.131] CAPA 0 atmosférica + fix contraste panel i (0.62) — entrada emocional MATRIX definitiva
// [v650.5.132] CAPA 0 presencia visual (14px, warm white 0.80, text-transform:none, glow cálido) + elimination caja "recursos prácticos"
// [v650.5.133] Sprint editorial MATRIX v1: "MATRIX" dorado en CAPA 0 + reordenación guías
// [v650.5.134] Jerarquía editorial definitiva: titular atmosférico grande+uppercase+bold / "MATRIX" dorado itálico / subtítulo "regularte" fino discreto
// [v650.5.135] Header 3 capas: título grande uppercase / MATRIX firma editorial dorado / subtítulo "Un espacio para regularte" presente
// [v650.5.151] REFINAMIENTO AÑO PREMIUM — traducción psicológica Capa C sin A/B/C/D
// [v650.5.152] CAPA A INTEGRACIÓN NARRATIVA — Marte en Piscis en Casa 9 integrado
// [v650.5.154] FIX CAPA A — normalización case+diacritic lordOriginal→natalPlanets (elimina "Marte en —")
// [v650.5.155] CLEANUP — eliminado console.log temporal [ANNUAL A]
// [v650.5.156] AÑO POLISH — Mercurio D ritmos actualizados + Guía KAIROS reescrita sin numeración
// [v650.5.157] GUÍA KAIROS — Humanización final de 'annual-premium-depth' sin numeración ni palabra premium
// [v650.5.158] KAIROS_SESSION Fase 1 — Infraestructura de sesión en memoria compartida (lordKey, annual, sky, user)
// [v650.5.159] KAIROS_SESSION Fase 2A — Carga de weeklyTramos en sesión + lectura con fallback en HOY y MES
// [v650.5.160] KAIROS_SESSION Fase 2B — Migración de AÑO, SEMANA y MATRIX a KAIROS_SESSION con fallbacks
// [v650.5.161] KAIROS_NAVIGATION_STABILITY — Corrección de render al revisitar HOY, MES o SEMANA diferiendo la restauración desde caché y moviendo SEMANA al ciclo de vida post-inyección
// [v650.5.162] SPRINT — KAIROS_VISUAL_QUICK_WINS_v1 — Implementación de 5 refinamientos visuales en el módulo MES
// [v650.5.163] SPRINT — KAIROS_VISUAL_QUICK_WINS_v1_FIX — Correcciones visuales en MES (icono celestial y sin duplicación de proceso), MATRIX (icono circular y etiqueta de maestría), SEMANA (eliminado bloque "Activaciones personales" translúcido)
// [v650.5.164] MICRO SPRINT — KAIROS VISUAL LOCK FINAL — Corrección jerárquica del proceso de MES (isla interior destacada y subtítulo de cabecera inactivo) y tamaño del título de MATRIX
const firebaseConfig = {
  apiKey: "AIzaSyD9kvSCv_Rz9Hu42f9qba2ZJsZl_7SY_S4",
  authDomain: "kairos-eng.firebaseapp.com",
  projectId: "kairos-eng",
  storageBucket: "kairos-eng.firebasestorage.app",
  messagingSenderId: "727332951968",
  appId: "1:727332951968:web:972e24a6c3e344f6f336c5",
  measurementId: "G-8VWL0MHMNQ"
};

// Initialize Firebase
try {
    if (typeof firebase !== 'undefined' && !firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
} catch(e) { console.error("Firebase App Init Crash:", e); }

// === FEATURE FLAGS KAIROS ===
window.KAIROS_FLAGS = {
    ENABLE_SHADOW_INTERPRETER: true, 
    SHOW_INTERPRETER_PREVIEW: true, 
    ENABLE_ASTRO_AUDIT: false, // [v650.5.48] Desactivado en producción — reactivar solo en sesión de debug
    LOG_LEVEL: "verbose",
    weekly_locked: true,  // 🔒 SEMANA CONGELADA v0.2 — NO modificar el flujo semanal sin desbloqueo explícito
    KAIROS_PREMIUM_ACTIVE: false, // [v650.5.48] Desactivado para habilitar gating de producto real
    KAIROS_PREMIUM_DEBUG: false, // [v650.5.48] Desactivado en producción — no inyectar TEST_DEBUG_PROFILE a usuarios reales
    INTERNAL_AUTH_EMAILS: [
        'roberto.rivero.ramos@gmail.com',
        'roberrivero@gmail.com',
        'admin@kairos.app',
        'adi_cardona@me.com',
        'adi.cardona.lopez@gmail.com',
        'test.v16@kairos.app',
        'llucia_cardona@hotmail.com',
        'llucia_cardona@outlook.es',
        'lucia_cardona@outlook.es'
    ]
};

// [v6.6] LÓGICA DE ESCENARIOS Y RUTA DEBUG
const DEBUG_SCENARIOS = {
    '1': { name: 'Test Júpiter', lord: 'Júpiter', age: 32, birthday: '1994-04-15' }, // Expansivo
    '2': { name: 'Test Marte', lord: 'Marte', age: 28, birthday: '1998-10-10' },     // Intenso
    '3': { name: 'Test Saturno', lord: 'Saturno', age: 45, birthday: '1981-01-20' }  // Estructurado
};

const getDebugProfile = () => {
    const params = new URLSearchParams(window.location.search);
    const scenId = params.get('scenario');
    const scen = DEBUG_SCENARIOS[scenId] || { name: 'Test Debug', lord: 'Júpiter', age: 32 };
    
    return {
        name: scen.name,
        age: scen.age,
        asc: 'Aries',
        birthDay: 15,
        birthMonth: 4,
        birthYear: 1994, 
        birthTime: "12:00",
        birthLat: 40.4168,
        birthLng: -3.7038,
        birthTimeZone: 'Europe/Madrid',
        setupComplete: true,
        isGuest: true,
        lordOfYear: scen.lord, // Forzamos el Lord para el escenario
        debug_mode: true
    };
};

/* [v6.7] Bypassing Test Debug Name in UI */
const TEST_DEBUG_PROFILE = getDebugProfile();

// Detectar ruta estable /matrix-debug
if (window.location.pathname.includes('/matrix-debug') || window.location.search.includes('matrix-debug')) {
    window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG = true;
    console.log("🛠️ KAIROS Debug: Ruta estable detectada (/matrix-debug)");
}

// [v650.5.33] Helper para conversión de signos a grados (TECHNICAL VIEW)
const signToDeg = (signName) => {
    const signs = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    const signsEn = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
    let idx = signs.indexOf(signName);
    if (idx === -1) idx = signsEn.indexOf(signName);
    return idx === -1 ? 0 : idx * 30;
};

let auth, db;
let googleProvider = null;

// ─── KAIROS_SESSION — Memoria compartida del sistema ───────────────────────
// Inicializa una vez al arrancar. Si falla, cada módulo funciona como antes.
// v1.0 — Solo datos, sin cambios narrativos. Modo degradado obligatorio.

async function initKairosSession(stateUser) {
  try {
    // 1. Identidad natal
    const natalPlanets = stateUser.natalPlanets || (stateUser.natal_context?.planets) || {};
    const natal = {
      uid:          stateUser.uid || null,
      birthDate:    stateUser.birthDate || (stateUser.birthYear && stateUser.birthMonth && stateUser.birthDay
        ? `${stateUser.birthYear}-${String(stateUser.birthMonth).padStart(2, '0')}-${String(stateUser.birthDay).padStart(2, '0')}`
        : null),
      birthTime:    stateUser.birthTime || null,
      birthLat:     stateUser.birthLat  || null,
      birthLng:     stateUser.birthLng  || null,
      timezone:     stateUser.timezone  || stateUser.birthTimeZone || null,
      ascendant:    stateUser.asc || (stateUser.natal_context?.ascendant) || null,
      natalPlanets: natalPlanets
    };

    // 2. Profección anual (leer desde state.user o calcular usando el motor existente si no están)
    const asc = stateUser.asc || (stateUser.natal_context?.ascendant) || 'Aries';
    const age = typeof stateUser.age === 'number' ? stateUser.age : 0;
    const profection = (window.projection_engine && window.projection_engine.calculateProfection)
      ? window.projection_engine.calculateProfection(asc, age)
      : null;

    const lordOriginal = stateUser.lordOfYear || (profection?.lordOfYear || 'Sol');

    const annual = {
      profectedHouse: stateUser.profectedHouse || (profection ? profection.activeHouse : null),
      profectedSign:  stateUser.profectedSign  || (profection ? profection.activeSign : null),
      lordOriginal:   lordOriginal,
      lordKey:        lordOriginal
        ? lordOriginal.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        : null,
      lordNatalSign:  null,  // se completa abajo si hay datos
      lordNatalHouse: null
    };

    // Completar datos natales del señor
    if (annual.lordKey && natal.natalPlanets) {
      let foundPlanet = null;
      if (Array.isArray(natal.natalPlanets)) {
        foundPlanet = natal.natalPlanets.find(p => {
          const name = (p.name || p.planet || '').toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          return name === annual.lordKey;
        });
      } else {
        const keys = Object.keys(natal.natalPlanets);
        const matchKey = keys.find(k => k.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === annual.lordKey);
        if (matchKey) {
          foundPlanet = natal.natalPlanets[matchKey];
        }
      }
      
      if (foundPlanet) {
        annual.lordNatalSign  = foundPlanet.sign  || foundPlanet.signName || foundPlanet.signo || null;
        annual.lordNatalHouse = foundPlanet.house || foundPlanet.casa || null;
      }
    }

    // 3. Instantánea celeste (fecha y tiempo)
    const now = new Date();
    
    // Asegurar que transits están cargados para evitar datos nulos
    if (!window.CURRENT_TRANSITS || !window.CURRENT_TRANSITS.moon_phase) {
      if (window.transit_engine && typeof window.transit_engine.getCurrentTransits === 'function') {
        try {
          window.CURRENT_TRANSITS = await window.transit_engine.getCurrentTransits();
        } catch (e) {
          console.error('[SESSION] Error loading current transits in initKairosSession:', e);
        }
      }
    }

    let weeklyTramos = null;
    let weeklySequence = null;
    if (window.transit_engine && typeof window.transit_engine.getWeeklySequence === 'function' && window.weekly_engine) {
      try {
        const moonSequence = await window.transit_engine.getWeeklySequence(asc);
        weeklySequence = moonSequence;
        const scoredDays = window.weekly_engine.scoreDays(moonSequence, lordOriginal || 'Sol', annual.profectedHouse || 1);
        weeklyTramos = window.weekly_engine.buildTramos(scoredDays, {}, lordOriginal || 'Sol');
      } catch (e) {
        console.error('[SESSION] Error calculating weeklyTramos in initKairosSession:', e);
      }
    }

    const sky = {
      date:           now.toISOString().split('T')[0],
      weekday:        now.getDay(),
      planetOfDay:    (window.transit_engine && window.transit_engine.getDayPlanet) ? window.transit_engine.getDayPlanet(now) : null,
      lunarPhase:     window.CURRENT_TRANSITS?.moon_phase || null,
      lunarSign:      window.CURRENT_TRANSITS?.Luna || null,
      currentTransits: [],   // se completa en Fase 2 desde transit_engine
      weeklyTramos:   weeklyTramos,
      weeklySequence: weeklySequence
    };

    // 4. Metadatos y contexto reservado
    const meta = {
      version: '1.0',
      context: {
        dominantTone:    null,  // reservado para futuro — AÑO lo calculará
        energeticMode:   null,
        emotionalWeight: null
      }
    };

    // 5. Registro anti-redundancia (vacío al inicio)
    const usage = {
      conceptsUsed:    new Set(),
      modulesRendered: new Set(),
      lastRenderTime:  {}
    };

    // 6. Construir SESSION y marcar como lista
    window.KAIROS_SESSION = {
      ...meta,
      user:  natal,
      annual,
      sky,
      usage,
      ready: true
    };

    console.log('[SESSION] ✅ KAIROS_SESSION v1.0 inicializada:', {
      lord:      annual.lordOriginal,
      lordKey:   annual.lordKey,
      ascendant: natal.ascendant,
      date:      sky.date
    });

    document.dispatchEvent(new Event('kairos-session-ready'));

  } catch (err) {
    // Modo degradado: SESSION no disponible, la app sigue funcionando
    console.warn('[SESSION] ⚠️ initKairosSession falló — modo degradado activo:', err.message);
    window.KAIROS_SESSION = { ready: false, version: '1.0' };
    document.dispatchEvent(new Event('kairos-session-ready'));
  }
}
// ─── FIN KAIROS_SESSION ─────────────────────────────────────────────────────

const TRANSLATIONS = {
  es: {
    welcome: "Bienvenido a KAIROS",
    descWelcome: "Tu compañero personal para fluir con el ritmo del cielo.",
    identity: "Tu Identidad",
    placeholderName: "Escribe tu nombre...",
    btnBegin: "COMENZAR",
    structFocus: "Tu Configuración",
    age: "Edad Actual",
    ascendant: "Tu Ascendente",
    btnFinish: "ACTIVAR KAIROS",
    annual: "Año", weekly: "Semana", monthly: "Mes", daily: "Hoy", matrix: "Matrix", carta: "Mapa", contact: "Cuenta",
    back: "Volver",
    structuralEng: "Tu Ciclo de Vida",
    year: "Año", house: "Área", lord: "Guía de Vida",
    profectionAnnual: "Tu Contexto Actual",
    profectionWeekly: "Ritmo de la Semana",
    profectionMonthly: "Energía del Mes",
    profectionDaily: "Guía para hoy",
    masterMatrix: "Matriz Personal",
    intensityMonitor: "Nivel de Energía",
    statusModerate: "Variable", statusActivation: "Intensa", statusStable: "Fluida",
    body: "Salud", mind: "Foco", spirit: "Ánimo",
    directive: "Sugerencia",
    todayEnergy: "Pulso del Día",
    habiter: "Habitar",
    fieldAction: "Área de Vida",
    houseLabel: "Área",
    contactHeading: "Tu Perfil",
    contactCTA: "¡HABLAMOS POR WHATSAPP!",
    contactPhrase: "El cielo nos da el mapa, pero tú eliges el camino. Estamos aquí para orientarte.",
    slideRecalibrate: "Ajustar Edad",
    weeklyTitle: "Ciclo Semanal",
    monthlyTitle: "Ciclo Mensual",
    block1Title: "FASE 1: INICIO",
    block1Desc: "Momento de romper la inercia y poner las cosas en movimiento.",
    block2Title: "FASE 2: CRECIMIENTO",
    block2Desc: "Pide orden y perseverancia. Consolida lo que has empezado.",
    block3Title: "FASE 3: RESULTADOS",
    block3Desc: "Tiempo de conectar con otros y ver el fruto de tus esfuerzos.",
    dailyTitle: "Ritual Hoy",
    resolutiveAction: "Acción Recomendada",
    energyWarning: "Advertencia",
    intensityDesc: (name, status) => {
      let ext = "";
      if (status === "Fluida" || status === "Stable") ext = "La energía hoy nos permite avanzar con suavidad y disfrutar del proceso.";
      else if (status === "Variable" || status === "Moderate") ext = "La jornada pide equilibrio. No te sobrecargues y escucha a tu cuerpo.";
      else if (status === "Intensa" || status === "Activation") ext = "Día de gran fuerza. Prioriza y regálate momentos de calma.";
      return `${name}, tu energía está ${status}. ${ext}`;
    },
    cartaTitle: "TU MAPA",
    cartaDesc: "CARTA ESTELAR",
    cartaText: "Explora tu mapa personal con claridad y profundidad.",
    recalibrate: "AJUSTAR",
    age: "MI EDAD",
    methodologyTitle: "EL SISTEMA KAIROS",
    methodDescription: "Una guía para vivir en sincronía con los ritmos naturales.",
    journalTitle: "DIARIO PERSONAL",
    journalIntro: "Anota cómo te sientes para descubrir tu propio ritmo.",
    journalEnergy: "Nivel de Vitalidad",
    journalEmotions: "Emoción Predominante",
    journalDecisions: "Notas / Decisiones",
    journalSave: "GUARDAR HOY",
    journalSuccess: "¡Guardado con éxito!",
    layer1: "AÑO",
    layer1Desc: "El centro de tu crecimiento personal y el tema narrativo de este ciclo de 12 meses.",
    layer2: "HOY",
    layer2Desc: "Sintonía rápida y ritual matutino para actuar con foco cada día.",
    layer3: "SEMANA",
    layer3Desc: "Organiza tu energía en tres fases estratégicas según el ritmo planetario.",
    layer4: "MES",
    layer4Desc: "La atmósfera energética y los hitos lunares que marcan el clima colectivo.",
    layer5: "MATRIX",
    layer5Desc: "Monitor de alta ingeniería que integra tus ciclos con tus centros vitales.",
    technicalProtocol: "PROTOCOLO TÉCNICO",
    profectionHouse: "Casa Profectada",
    activatedSign: "Signo Activado",
    yearRuler: "Regente del Año",
    momentRadar: "Radar",
    profectionIntro: "Tu ciclo anual marca el tema central y el área de vida donde se concentrará tu crecimiento.",
    lordIntro: "Este planeta es tu guía principal este año, marcando el aprendizaje que necesitas integrar.",
    weeklyIntro: "Cada semana tiene su propio ritmo. Organízate según estas tres fases para fluir mejor.",
    monthlyIntro: "El ambiente del mes te ayuda a saber cuándo ir rápido y cuándo ir lento.",
    dailyIntro: "Una sintonía rápida para empezar el día con foco y consciencia.",
    matrixIntro: "Analiza cómo la energía actual influye en tus tres centros vitales: Cuerpo, Mente y Espíritu.",
    intensityIntro: "Este indicador mide el pulso del entorno para ayudarte a regular tus propios pasos.",
    logout: "Cerrar Sesión",
    natalPreviewInfo: "Tu Carta Natal es el mapa único de tu potencial.",
    natalPreviewCTA: "DESBLOQUEAR MI MAPA",
    morningSync: "Energía Emocional",
    resolutiveAction: "Acción Recomendada",
    energyWarning: "Advertencia del Día",
    dailySynthesis: "SÍNTESIS DEL DÍA",
    presentedBy: "Un proyecto de",
    brandNameLabel: "Aire de Consciencia",
    brandName: "Aire de<br>Consciencia",
    planets: { 'Sol': 'Sol', 'Luna': 'Luna', 'Mercurio': 'Mercurio', 'Venus': 'Venus', 'Marte': 'Marte', 'Júpiter': 'Júpiter', 'Saturno': 'Saturno' },
    morningSyncIntro: "Conecta con tu frecuencia nada más despertar.",
    resolutiveActionIntro: "¿Cómo usar mi energía hoy?",
    phoneLabel: "Atención KAIROS",
    emailLabel: "Email de Contacto",
    loginTitle: "Acceso al Sistema",
    loginDesc: "Calibración de Identidad",
    loginBtn: "ENTRAR",
    signupLink: "¿No tienes cuenta? Regístrate",
    signupTitle: "Nuevo Registro",
    signupDesc: "Inicia tu Proceso de Ingeniería",
    signupBtn: "REGISTRARSE",
    loginLink: "¿Ya tienes cuenta? Entra aquí",
    forgotPass: "Recuperar contraseña",
    syncHistory: "PATRONES PERSONALES",
    historyIntro: "Análisis de tu sincronía entre el cielo y tu vivencia personal.",
    introTitle1: "¿QUÉ ES KAIROS?",
    introDesc1: "Tu brújula diaria para fluir con el ritmo natural y tomar mejores decisiones.",
    introTitle2: "EL RADAR",
    introDesc2: "Detectamos el clima energético de cada momento para que sepas cuándo avanzar y cuándo esperar.",
    introTitle3: "TU RITUAL",
    introDesc3: "Cada mañana recibirás una guía clara: qué energía hay hoy y cómo usarla a tu favor.",
    introTitle4: "TU DIARIO",
    introDesc4: "Registra tu sentir para descubrir tus propios patrones y conocerte a través del cielo.",
    skipIntro: "SALTAR INTRODUCCIÓN",
    resetError: "Por favor, introduce tu email.",
    resetSent: "Email de recuperación enviado. Revisa tu bandeja de entrada.",
    techLayer: "Capa Técnica",
    userLayer: "Cuenta & Perfil",
    natalPositions: "Tu Configuración Natal",
    currentTransits: "El Cielo en Tiempo Real",
    cycleProtocol: "Protocolo del Ciclo",
    systemDiagnostic: "Diagnóstico de Ingeniería",
    latency: "Latencia del Motor",
    engineVer: "Versión del Núcleo",
    systemStatus: "Estado del Sistema",
    activeShadow: "Modo Sombra Activo"
  },
  en: {
    welcome: "Welcome to KAIROS",
    descWelcome: "Your personal companion to flow with the sky's rhythm.",
    identity: "Your Identity",
    placeholderName: "Write your name...",
    btnBegin: "START",
    structFocus: "Your Setup",
    age: "Current Age",
    ascendant: "Your Ascendant",
    btnFinish: "ACTIVATE KAIROS",
    annual: "Year", weekly: "Week", monthly: "Month", daily: "Today", matrix: "Matrix", carta: "Map", contact: "Account",
    back: "Back",
    structuralEng: "Your Life Cycle",
    year: "Year", house: "Area", lord: "Life Guide",
    profectionAnnual: "Current Context",
    profectionWeekly: "Weekly Rhythm",
    profectionMonthly: "Monthly Energy",
    profectionDaily: "Today's Guide",
    masterMatrix: "Personal Matrix",
    intensityMonitor: "Energy Level",
    statusModerate: "Variable", statusActivation: "Intense", statusStable: "Fluid",
    body: "Health", mind: "Focus", spirit: "Mood",
    directive: "Suggestion",
    todayEnergy: "Daily Pulse",
    habiter: "Live in",
    fieldAction: "Life Area",
    houseLabel: "Area",
    contactHeading: "Your Profile",
    contactCTA: "WHATSAPP US!",
    contactPhrase: "The sky gives us the map, but you choose the path. We are here to guide you.",
    slideRecalibrate: "Adjust Age",
    weeklyTitle: "Weekly Cycle",
    monthlyTitle: "Monthly Cycle",
    block1Title: "PHASE 1: START",
    block1Desc: "Time to break inertia and get things moving.",
    block2Title: "PHASE 2: GROWTH",
    block2Desc: "Order and perseverance requested. Consolidate your steps.",
    block3Title: "PHASE 3: RESULTS",
    block3Desc: "Time to connect and see the fruit of your efforts.",
    dailyTitle: "Today's Ritual",
    resolutiveAction: "Recommended Action",
    energyWarning: "Warning of the Day",
    dailySynthesis: "DAILY SYNTHESIS",
    intensityDesc: (name, status) => {
      let ext = "";
      if (status === "Fluida" || status === "Stable") ext = "Today's energy allows us to move smoothly and enjoy the process.";
      else if (status === "Variable" || status === "Moderate") ext = "A day for balance. Don't overwork and listen to your body.";
      else if (status === "Intensa" || status === "Activation") ext = "A powerful day. Prioritize and take calm moments.";
      return `${name}, your energy is ${status}. ${ext}`;
    },
    cartaTitle: "YOUR MAP",
    cartaDesc: "STAR MAP",
    cartaText: "Explore your personal map with clarity and depth.",
    recalibrate: "ADJUST",
    age: "MY AGE",
    methodologyTitle: "THE KAIROS SYSTEM",
    methodDescription: "A guide to live in sync with natural rhythms.",
    journalTitle: "PERSONAL JOURNAL",
    journalIntro: "Note how you feel to discover your own rhythm.",
    journalEnergy: "Vitality Level",
    journalEmotions: "Main Emotion",
    journalDecisions: "Notes / Decisions",
    journalSave: "SAVE TODAY",
    journalSuccess: "Saved successfully!",
    layer1: "MY YEAR",
    layer1Desc: "The core of your growth during this cycle.",
    layer2: "MY MONTH",
    layer2Desc: "The energetic atmosphere around you now.",
    layer3: "MY WEEK",
    layer3Desc: "Three phases of each week to organize your time.",
    layer4: "MY DAY",
    layer4Desc: "Practical keys to act with success every morning.",
    layer5: "MASTER MATRIX",
    layer5Desc: "Monitor integrating your cycles with real time.",
    momentRadar: "Radar",
    profectionIntro: "Your yearly cycle marks the main theme and the life area for your growth.",
    lordIntro: "This planet is your main guide this year, marking the wisdom to integrate.",
    weeklyIntro: "Every week has its own rhythm. Organize around these three phases.",
    monthlyIntro: "Monthly vibes help you know when to go fast and when to go slow.",
    dailyIntro: "Quick sync to start your day with focus and awareness.",
    logout: "Log Out",
    natalPreviewInfo: "Your Birth Chart is your unique potential map.",
    natalPreviewCTA: "UNLOCK MY MAP",
    morningSync: "Emotional Energy",
    resolutiveAction: "Action",
    presentedBy: "A project by",
    brandNameLabel: "Air of Consciousness",
    brandName: "Air of<br>Consciousness",
    planets: { 'Sol': 'Sun', 'Luna': 'Moon', 'Mercurio': 'Mercury', 'Venus': 'Venus', 'Marte': 'Mars', 'Júpiter': 'Jupiter', 'Saturno': 'Saturn' },
    zodiac: { 'Aries': 'Aries', 'Tauro': 'Taurus', 'Géminis': 'Gemini', 'Cáncer': 'Cancer', 'Leo': 'Leo', 'Virgo': 'Virgo', 'Libra': 'Libra', 'Escorpio': 'Scorpio', 'Sagitario': 'Sagittarius', 'Capricornio': 'Capricorn', 'Acuario': 'Aquarius', 'Piscis': 'Pisces' },
    morningSyncIntro: "Connect with your frequency as soon as you wake up.",
    resolutiveActionIntro: "How to use my energy today?",
    phoneLabel: "KAIROS Support",
    emailLabel: "Contact Email",
    weeklyIntro: "Organize your week based on the energy of each day to optimize your results and rest.",
    monthlyIntro: "Check the month's vibration to align with the current collective rhythm.",
    dailyIntro: "Daily advice to connect with the Moon and your personal energy from the moment you wake up.",
    matrixIntro: "Analyze how the current energy influences your three vital centers.",
    intensityIntro: "This indicator measures the environmental pace to help you regulate your own steps.",
    cartaTitle: "NATAL CHART",
    cartaDesc: "COMING SOON",
    cartaText: "We are designing a unique experience for you to explore your personal stellar map with the depth you deserve.",
    natalPreviewInfo: "This feature will be available soon in the Premium version of KAIROS.",
    natalPreviewCTA: "WANT TO KNOW MORE",
    loginTitle: "System Access",
    loginDesc: "Identity Calibration",
    loginBtn: "ENTER",
    signupLink: "Don't have an account? Sign up",
    signupTitle: "New Registration",
    signupDesc: "Start your Engineering Process",
    signupBtn: "SIGN UP",
    loginLink: "Already have an account? Login here",
    forgotPass: "Forgot password?",
    syncHistory: "PERSONAL PATTERNS",
    historyIntro: "Analysis of your synchrony between the sky and your personal experience.",
    introTitle1: "WHAT IS KAIROS?",
    introDesc1: "Your daily compass to flow with the natural rhythm and make better decisions.",
    introTitle2: "THE RADAR",
    introDesc2: "We detect the energetic weather of every moment so you know when to move and when to wait.",
    introTitle3: "YOUR RITUAL",
    introDesc3: "Every morning you will receive a clear guide: what energy is there today and how to use it in your favor.",
    introTitle4: "YOUR JOURNAL",
    introDesc4: "Record your feelings to discover your own patterns and know yourself through the sky.",
    skipIntro: "SKIP INTRODUCTION",
    resetError: "Please enter your email.",
    resetSent: "Recovery email sent. Check your inbox.",
    techLayer: "Technical Layer",
    userLayer: "Account & Profile",
    natalPositions: "Your Natal Setup",
    currentTransits: "Real-Time Sky",
    cycleProtocol: "Cycle Protocol",
    systemDiagnostic: "Engineering Diagnostic",
    latency: "Engine Latency",
    engineVer: "Core Version",
    systemStatus: "System Status",
    activeShadow: "Shadow Mode Active"
  }
};

const HOUSE_DATA_EXPANDED = {
  es: {
    1: { name: "Identidad & Vitalidad", desc: "Este es un año para centrarte totalmente en ti. Es el momento de renovar tu imagen, cuidar tu cuerpo y fortalecer tu personalidad." },
    2: { name: "Recursos & Valor Propio", desc: "Este ciclo se enfoca en tu seguridad material y en cómo valoras tus talentos. Organiza tus finanzas y reconoce tu propio valor." },
    3: { name: "Comunicación & Entorno", desc: "Un año para activar tu mente y mejorar la forma en la que te relacionas. Aprende cosas nuevas y optimiza tus contactos cercanos." },
    4: { name: "Hogar & Raíces", desc: "La energía se dirige hacia tus cimientos emocionales y vida privada. Fortalece tus vínculos familiares y encuentra tu paz interna." },
    5: { name: "Creatividad & Disfrute", desc: "Bienvenido a un año de alegría y expresión personal. Conecta con tus pasiones y permite que tu creatividad brille con fuerza." },
    6: { name: "Trabajo & Bienestar", desc: "Este periodo se basa en el cuidado de los detalles y la mejora de tu día a día. Organiza tu trabajo y mejora tus hábitos de salud." },
    7: { name: "Relaciones & Vínculos", desc: "Tu crecimiento este año vendrá a través de los demás. Encuentra el equilibrio con tu pareja, socios o amigos cercanos." },
    8: { name: "Transformación & Renovación", desc: "Estás atravesando una fase de renovación profunda. Suelta lo que ya no sirve y prepárate para transformarte por completo." },
    9: { name: "Visión & Expansión", desc: "Un año para ampliar tus horizontes y buscar un sentido más profundo. Viaja, estudia y abre tu mente a nuevas posibilidades." },
    10: { name: "Éxito & Propósito", desc: "Este es el punto más alto de tu ciclo actual. Destaca en lo profesional y asume nuevas responsabilidades con madurez." },
    11: { name: "Proyectos & Comunidad", desc: "Tu enfoque se desplaza hacia lo grupal y tus sueños a futuro. Colabora con tu 'tribu' para alcanzar tus metas compartidas." },
    12: { name: "Cierre & Introspección", desc: "Inicias un ciclo de descanso y preparación. Baja el ritmo, medita y limpia tu mundo emocional para un nuevo comienzo." }
  },
  en: {
    1: { name: "Identity & Vitality", desc: "This is a year to focus entirely on yourself. It's time to renew your image and strengthen your personality." },
    2: { name: "Resources & Self-Worth", desc: "Focus on your material security and how you value your talents. Organize your finances and recognize your worth." },
    3: { name: "Communication & Environment", desc: "A year to activate your mind and improve how you relate. Learn new things and optimize your local network." },
    4: { name: "Home & Roots", desc: "Energy is directed toward your emotional foundations and private life. Strengthen family ties and find inner peace." },
    5: { name: "Creativity & Enjoyment", desc: "Welcome to a year of joy. Connect with your passions and allow your creativity to shine brightly." },
    6: { name: "Work & Well-being", desc: "Focus on attention to detail and improving your day-to-day. Organize your tasks and improve health habits." },
    7: { name: "Relationships & Bonds", desc: "Growth comes through others. Seek balance in partnerships, business associates, or close friends." },
    8: { name: "Transformation & Rebirth", desc: "A deep renewal phase. Let go of what no longer serves and transform yourself emotionally." },
    9: { name: "Vision & Expansion", desc: "Broaden your horizons and look for deeper meaning. Travel, study, and open your mind to new possibilities." },
    10: { name: "Success & Vocation", desc: "The peak of your current cycle. Stand out professionally and lead with maturity and confidence." },
    11: { name: "Friends & Projects", desc: "Focus on group activities and future dreams. Collaborate with your 'tribe' to reach shared goals." },
    12: { name: "Closure & Introspection", desc: "A cycle of rest and preparation for a new beginning. Slow down and clear your emotional world." }
  }
};



// === SISTEMA DE PAGOS (STRIPE / IAP) ===
async function initPaymentSession(planId) {
    console.log(`💳 KAIROS: Iniciando sesión de pago para el plan: ${planId}...`);
    // Placeholder para Stripe Checkout o Apple/Google Play Billing
    alert("KAIROS Premium: Redirigiendo a pasarela de pago segura...");
}

// === MOTOR DE EFEMÉRIDES REAL (Astronomy Engine) ===
// Los tránsitos ahora se gestionan mediante transit_engine.js
window.CURRENT_TRANSITS = window.CURRENT_TRANSITS || {};



async function refreshTransits() {
  if (window.transit_engine) {
      window.CURRENT_TRANSITS = await window.transit_engine.getCurrentTransits();
      console.log('🔭 Sistema KAIROS: Efemérides (Product Suite) sincronizadas:', window.CURRENT_TRANSITS);
  }
}



function calculateAge(d, m, y) {
  const today = new Date();
  let age = today.getFullYear() - y;
  const birthDate = new Date(y, m - 1, d);
  const mDiff = today.getMonth() - birthDate.getMonth();
  if (mDiff < 0 || (mDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}


let state = {
  user: { name: '', age: 0, asc: 'Aries', setupComplete: false },
  subscription: { status: 'FREE', level: 0 },
  lang: 'es',
  currentTab: 'annual',
  authMode: 'login', // 'login' or 'signup'
  cache: { 
    interpretations: {},
    date: new Date().toDateString() // Para invalidación diaria
  }
};

async function initApp() {
  // [v50.1.7] URL Parameter Parser - Support context-driven rendering
  const urlParams = new URLSearchParams(window.location.search);
  const contextRaw = urlParams.get('user_context');
  if (contextRaw) {
      try {
          const contextObj = JSON.parse(contextRaw);
          state.user = { ...state.user, ...contextObj };
          if (contextObj.name) { /* silence context log */ }
      } catch(e) { console.error("URL Context Parse Error:", e); }
  }

  const statusEl = document.getElementById('bootstrap-statusText');
  const progressEl = document.getElementById('bootstrap-progress');
  const errorEl = document.getElementById('bootstrap-error');
  const errorTextEl = document.getElementById('bootstrap-errorText');

  if (statusEl) statusEl.innerText = "Verificando dependencias core...";



  if (typeof Astronomy === 'undefined' || typeof luxon === 'undefined' || typeof firebase === 'undefined') {
    console.warn("⏳ KAIROS: Waiting for engineering libraries... (Retrying in 250ms)");
    setTimeout(initApp, 250);
    return;
  }

  if (statusEl) statusEl.innerText = "Descargando efemérides (tiempo real)...";
  if (progressEl) progressEl.style.width = "40%";
  
  // [v50.1.2] Recalcular tránsitos con timeout de seguridad
  console.log("[BOOT] 🔭 Refrescando Tránsitos Actuales...");
  try {
    await Promise.race([
        refreshTransits(),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout Tránsitos")), 8000))
    ]);
    console.log("[BOOT] ✅ Tránsitos OK.");
  } catch(e) {
    console.warn("[BOOT] ⚠️ Fallo en tránsitos iniciales (fallback activo):", e);
    // No bloqueamos, permitimos que el app intente arrancar con Astronomy Engine si es necesario
  }

  if (statusEl) statusEl.innerText = "Sincronizando Identidad Astral...";
  if (progressEl) progressEl.style.width = "80%";

  try {
    auth = firebase.auth();
    db = firebase.firestore();
    window.db = db;

    // [v6.8.6] ACTIVACIÓN DE PERSISTENCIA LOCAL (AUDITORÍA URGENTE)
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    console.log("✅ KAIROS: PERSISTENCE SET OK (LOCAL)");
    
    // [v6.8.1] Asegurar que el proveedor de Google esté listo
    if (!googleProvider && firebase.auth) {
        googleProvider = new firebase.auth.GoogleAuthProvider();
        console.log("✅ KAIROS: Google Auth Provider instanciado correctamente.");
    }

    // [v6.8.6] CONSUMO DEL RESULTADO DE REDIRECT (SECUENCIAL)
        await auth.getRedirectResult();
  } catch (e) {
    console.error("Firebase services init error:", e);
  }

  if (auth) {
    // [v1.4 UNBLOCK] Monitor de Emergencia: Si en 10s no ha respondido Auth, activamos modo Bypass
    const bootTimeout = setTimeout(() => {
        const shellMessage = document.getElementById('shell-bootstrap-message');
        if (shellMessage && !shellMessage.classList.contains('hidden')) {
            console.warn("⚠️ BOOT DELAY: 10s sin respuesta de Auth. Ofreciendo Bypass.");
            const errorEl2 = document.getElementById('bootstrap-error');
            const statusTxt = document.getElementById('bootstrap-statusText');
            if (errorEl2) errorEl2.classList.remove('hidden');
            if (statusTxt) statusTxt.innerText = "La respuesta de seguridad se demora...";
            document.getElementById('bootstrap-errorText').innerText = "Estamos teniendo problemas para verificar tu sesión.";
            
            // Si en 15s sigue sin responder, el botón de bypass ya es visible para el usuario.
        }
    }, 10000);

    auth.onAuthStateChanged(async (user) => {
      clearTimeout(bootTimeout); // Cancelamos si hay respuesta
      
      if (user) {
        // [v6.8.5] Detección inmediata de usuario interno (antes de Firestore para evitar bloqueos)
        const isInternalAccount = user.email && window.KAIROS_FLAGS.INTERNAL_AUTH_EMAILS.includes(user.email);

        
        if (isInternalAccount) {
            window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE = true;

            // DEACTIVATED: El laboratorio ahora es externo (/lab.html)
            // const labMenu = document.getElementById('menu-item-lab');
            // if (labMenu) labMenu.classList.remove('hidden');
        } else {
            // [v50.1.13] Refuerzo de Gating: Asegurar que el flag se limpie si no es interno
            window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE = false;

        }

        try {
          // User is logged in, try to fetch their profile from Firestore
          // Protección V50.1.2: Timeout optimizado para carga móvil
          const doc = await Promise.race([
              db.collection('users').doc(user.uid).get(),
              new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout Profile Fetch")), 12000))
          ]);
          
          if (doc.exists) {
            console.log("[BOOT] 📂 Perfil cargado correctamente.");
            state.user = doc.data();
            state.lang = state.user.lang || 'es';
            updateTranslations();

            // [v650.5.16] AUDITORÍA DE PERSISTENCIA NATAL — detecta también casas inválidas (todas Aries 0°)
            // [v650.5.78] Añadido: ascDegAbs === 0 indica bug .lon→.longitude (Roberto: ASC = Cáncer, no Aries)
            const _houses = state.user.houses || {};
            const _housesValues = Object.values(_houses);
            const _housesAllZero = _housesValues.length > 0 && _housesValues.every(h => h.sign === 'Aries' && (h.degree === 0 || h.degree === undefined));
            const _ascIsZero = (state.user.ascDegAbs === 0 || state.user.ascDegAbs === undefined || state.user.ascDegAbs === null);
            const _needsNatalCalc = !state.user.natalPlanets || _housesAllZero || _housesValues.length < 12 || _ascIsZero;
            if (state.user.setupComplete && _needsNatalCalc && state.user.birthDay) {
                console.log("🔭 KAIROS: Detectada persistencia incompleta. Sincronizando con helper robusto...");
                (async () => {
                    try {
                        if (typeof window.triggerNatalCalculationAndPersist === 'function') {
                            // [v650.5.77] Pasar state.user directamente: evita segunda lectura Firestore
                            // y cubre el caso donde birthLat/birthLng no se migraron al nuevo proyecto
                            const result = await window.triggerNatalCalculationAndPersist(user.uid, state.user);
                            if (result && result.success) {
                                state.user.natalPlanets = result.natalPlanets;
                                state.user.houses = result.houses;
                                state.user.natal_context = result.natal_context;
                            }
                        }
                    } catch(e) { console.warn("⚠️ KAIROS: Error en sincronización natal automática:", e); }
                })();
            }

            // V48.3+: MASTER DATA AUDIT (Sincronización de Supervivencia)
            if (state.user.setupComplete) {
              const u = state.user;
              let needsUpdate = false;

              // 1. Audit Name
              if (!u.name || u.name === 'User' || u.name === 'Usuario' || u.name === '') {
                  const detectedName = user.displayName || user.email.split('@')[0];
                  console.log("🛠️ KAIROS Audit: Name recovery ->", detectedName);
                  state.user.name = detectedName;
                  needsUpdate = true;
              }

              // 2. Audit Age from Birthdate
              if (u.birthDay && u.birthMonth && u.birthYear) {
                  const calculatedAge = calculateAge(u.birthDay, u.birthMonth, u.birthYear);
                  if (u.age !== calculatedAge) {
                      state.user.age = calculatedAge;
                      needsUpdate = true;
                  }
              }

              // 3. Audit Ascendant (Aries-0 Fix)
              if (u.birthDay && (!u.asc || u.asc === 'Aries' || u.engineVersion < 48.3)) {
                console.log("♻️ KAIROS: Restaurando Sincronización de Precisión...");
                const [bh, bmin] = (u.birthTime || "12:00").split(':').map(Number);
                const tzSync = u.birthTimeZone || (u.birthLng < -10 ? 'America/Bogota' : 'Europe/Madrid');
                
                if (typeof calculateAscendant === 'function') {
                    const newAsc = calculateAscendant(u.birthYear, u.birthMonth, u.birthDay, u.birthTime || "12:00", u.birthLat, u.birthLng, null, tzSync);
                    if (newAsc && !newAsc.error) {
                      state.user.birthUtcOffset = newAsc.offset;
                      state.user.asc = newAsc.sign;
                      state.user.ascDeg = newAsc.deg;
                      state.user.ascMin = newAsc.min;
                      state.user.engineVersion = 48.31;
                      needsUpdate = true;
                    }
                }
              }

              if (needsUpdate) {
                  console.log("💾 KAIROS: Datos regenerados por auditoría. Guardando...");
                  await saveUserProfile();
              }
            }


            
            // Forced UI Refresh
            try {
                updateTranslations();
            } catch (e) {
                console.warn("⚠️ KAIROS: updateTranslations failed during init (expected if DOM not ready)");
            }

            // --- LÓGICA DE SUSCRIPCIÓN ---
            if (!state.user.subscription) {
                // Inicializar suscripción para usuarios nuevos (TRIAL 15 DIAS) [v650.5.79]
                const trialEnd = new Date();
                trialEnd.setDate(trialEnd.getDate() + 15);
                state.user.subscription = {
                    status: 'TRIAL',
                    level: 1,
                    trialStart: firebase.firestore.FieldValue.serverTimestamp(),
                    trialEnd: trialEnd.toISOString(),
                    type: 'FREE_TRIAL'
                };
                db.collection('users').doc(user.uid).update({ subscription: state.user.subscription });
            }

            const sub = state.user.subscription || { status: 'FREE', level: 0 };
            if (sub && sub.status === 'TRIAL') {
                const now = new Date();
                const end = new Date(sub.trialEnd);
                if (now > end) {
                    state.user.subscription.status = 'FREE';
                    state.user.subscription.level = 0;
                    db.collection('users').doc(user.uid).update({ subscription: state.user.subscription });
                }
            }
            state.subscription = state.user.subscription || { status: 'FREE', level: 0 };
            // -----------------------------

            if (state.user.setupComplete) {
              // Update last login
              db.collection('users').doc(user.uid).update({
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
              }).catch(e => console.error("Update lastLogin error:", e));

              const isPremiumContext = window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE || window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG;
              if (!state.user.birthDay && !isPremiumContext) {
                // Fuerzo a usuarios normales legados a rellenar la info
                showView('onboarding-1b');
              } else {
                if (isPremiumContext && !state.user.birthDay) {
                    console.log("🛠️ KAIROS: Aplicando perfil de escenario para usuario premium/debug sin datos.");
                    Object.assign(state.user, TEST_DEBUG_PROFILE);
                }
                
                // Añadir ANTES del primer render / processRequest:
                if (typeof initKairosSession === 'function') {
                  await initKairosSession(state.user);
                } else {
                  console.warn('[SESSION] initKairosSession no disponible — modo degradado');
                  window.KAIROS_SESSION = { ready: false, version: '1.0' };
                }

                const isDebugPath = window.location.pathname.includes('matrix-debug');


                if (isDebugPath) {
                    window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG = true;
                    if (!state.user.birthDay) Object.assign(state.user, TEST_DEBUG_PROFILE);
                    showView('main');
                } else {
                    showView('main');
                }
              }
            } else {
              showView('intro-1');
            }
          } else {
            // New user or no profile yet
            state.user = { name: '', age: 0, asc: 'Aries', setupComplete: false, uid: user.uid };
            showView('intro-1');
          }
        } catch (error) {
          console.error("Firestore fetch error o timeout:", error);
          // Si falla Firestore por timeout pero tenemos cached data u otra anomalía,
          // intentamos que no colapse obligando a Setup.
          if (error.message && error.message.includes("Timeout")) {
              const errorEl2 = document.getElementById('bootstrap-error');
              if (errorEl2) {
                  errorEl2.classList.remove('hidden');
                  document.getElementById('bootstrap-errorText').innerText = "La conexión es muy lenta. Intentando acceder offline...";
              }
              // Si timeout pero ya teníamos data en sessionStorage/localStorage (opcional) 
              // mostraríamos 'main'. En v49.5 forzamos onboarding si no hay data.
          }
          state.user = { name: '', age: 0, asc: 'Aries', setupComplete: false, uid: user.uid };
          showView('intro-1');
        }
      } else {
        // [v1.4 UNBLOCK] No user, show auth view
        console.log("[BOOT] 🔒 No hay sesión activa. Mostrando acceso via showView('auth').");
        showView('auth');
      }
    });

    // Legacy timeout removed v1.3.1

  } else {
    // Si ni siquiera hay auth, algo va muy mal con la carga de Firebase
    const errorMsg = '<div style="color:red; padding:20px; text-align:center; font-family:sans-serif;">Error cargando el sistema de seguridad.</div>';
    if (document.getElementById('app-main')) document.getElementById('app-main').innerHTML = errorMsg;
    else document.body.innerHTML += errorMsg;
  }

  // Monitor Auth state for Logout button visibility
  if (auth) {
    auth.onAuthStateChanged(user => {
      const logoutBtn = document.getElementById('logout-btn');
      if (logoutBtn) {
        if (user) logoutBtn.classList.remove('hidden');
        else logoutBtn.classList.add('hidden');
      }
    });
  }

  setupCitySearch();
  setupBirthDataListeners();
  updateTranslations();
  initKairosGuideDOM();
}


/**
 * [v1.4 UNBLOCK] BYPASS DE SEGURIDAD
 * Permite entrar a la app aunque Auth falle o tarde demasiado.
 */
window.bypassAuthMode = function() {
    console.warn("🚨 KAIROS: Entrando en modo BYPASS (Invitado) por fallo de conexión.");
    
    // Generar perfil temporal de emergencia para que los motores no fallen
    const urlParams = new URLSearchParams(window.location.search);
    const contextRaw = urlParams.get('user_context');
    let injectedContext = {};
    if (contextRaw) {
        try { injectedContext = JSON.parse(contextRaw); } catch(e){}
    }
    
    const existingName = injectedContext.name || state.user?.name || state.user?.displayName || null;
    
    if (window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG) {
        state.user = { ...TEST_DEBUG_PROFILE };
    } else {
        state.user = {
            name: existingName, 
            age: injectedContext.age || 33,
            asc: injectedContext.asc || 'Aries',
            isGuest: true,
            setupComplete: true
        };
    }
    state.lang = 'es';
    
    // Ocultar pantalla de carga e ir a Main
    const shellMessage = document.getElementById('shell-bootstrap-message');
    if (shellMessage) shellMessage.classList.add('hidden');
    
    updateTranslations();
    if (typeof initKairosSession === 'function') {
        initKairosSession(state.user).then(() => {
            showView('main');
        }).catch(() => {
            window.KAIROS_SESSION = { ready: false, version: '1.0' };
            showView('main');
        });
    } else {
        window.KAIROS_SESSION = { ready: false, version: '1.0' };
        showView('main');
    }
};

let citySearchTimer = null;
window.citySearchTimer = null;

window.searchCity = async function(query) {
    const results = document.getElementById('city-results');
    if (!results) return;
    
    // [v650.5.36] Fix: Mao case needs at least 3 chars, trim to be safe
    if (query.trim().length < 3) {
        results.classList.add('hidden');
        return;
    }

    clearTimeout(window.citySearchTimer);
    window.citySearchTimer = setTimeout(async () => {
        try {
            // [v650.5.36] Added limit=10 and accept-language=es to avoid "Mao -> Madrid" confusion
            const res = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=10&addressdetails=1&accept-language=es`);
            const data = await res.json();
            
            results.innerHTML = '';
            if (!data || data.length === 0) {
                results.classList.add('hidden');
                return;
            }

            data.forEach(item => {
                const div = document.createElement('div');
                div.className = 'p-4 hover:bg-primary/10 cursor-pointer border-b border-slate-100 last:border-0 transition-all text-left';
                const parts = item.display_name.split(',');
                const mainName = parts[0];
                const subName = parts.slice(1).join(',').trim();
                div.innerHTML = `<div class="font-bold text-warm-grey text-xs uppercase">${mainName}</div><div class="text-[9px] text-slate-400 font-medium">${subName}</div>`;
                div.onclick = () => window.selectCity(item);
                results.appendChild(div);
            });
            results.classList.remove('hidden');
        } catch (err) {
            console.error("🔭 Global search error:", err);
        }
    }, 400);
};

window.selectCity = async function(item) {
    const cityInput = document.getElementById('city-input');
    const results = document.getElementById('city-results');
    const cityName = item.display_name.split(',')[0];
    
    if (cityInput) cityInput.value = cityName;
    if (results) results.classList.add('hidden');

    state.tempCityData = {
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        name: cityName
    };

    // [v650.5.36] Robust Timezone Detection
    try {
        const tzRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${item.lat}&longitude=${item.lon}&localityLanguage=es`);
        const tzData = await tzRes.json();
        
        let detectedTz = null;
        if (tzData && tzData.localityInfo && tzData.localityInfo.informative) {
            const tzItem = tzData.localityInfo.informative.find(i => i.description === 'time zone' || (i.name && i.name.includes('/')));
            if (tzItem) detectedTz = tzItem.name;
        }
        
        if (!detectedTz && tzData.timezone) detectedTz = tzData.timezone;
        
        state.tempTimeZone = detectedTz || (parseFloat(item.lon) > -10 ? 'Europe/Madrid' : 'UTC');
        console.log("🔭 Zona horaria detectada:", state.tempTimeZone);
    } catch (e) {
        state.tempTimeZone = parseFloat(item.lon) > -10 ? 'Europe/Madrid' : 'UTC';
    }

    // Force offset update if inputs exist
    if (typeof updateOffsetFromInputs === 'function') updateOffsetFromInputs();
};

function setupCitySearch() { 
    // Legacy support
}

function setupBirthDataListeners() {
  const dateInput = document.getElementById('input-birth-date');
  const timeInput = document.getElementById('input-time');

  if (dateInput) dateInput.addEventListener('change', updateOffsetFromInputs);
  if (timeInput) timeInput.addEventListener('change', updateOffsetFromInputs);
}

function updateOffsetFromInputs() {
  const dateVal = document.getElementById('input-birth-date').value;
  const timeVal = document.getElementById('input-time').value;
  const offsetSelect = document.getElementById('input-utc-offset');

  if (dateVal && timeVal && state.tempTimeZone && offsetSelect) {
    const [y, m, d] = dateVal.split('-').map(Number);
    const [h, min] = timeVal.split(':').map(Number);
    const lon = state.tempCityData ? state.tempCityData.lon : state.user.birthLng;
    const calculatedOff = getOffsetAtDate(y, m, d, h, min, state.tempTimeZone, lon);
    offsetSelect.value = Math.round(calculatedOff).toString();

    // Feedback visual de actualización (V30)
    const label = document.getElementById('lbl-utc-offset');
    if (label) {
      label.style.color = '#d7c188';
      setTimeout(() => label.style.color = '', 1000);
    }
    console.log(`🔭 Offset actualizado Proactivamente: ${calculatedOff}h para ${state.tempTimeZone}`);
  }
}

function renderCitySuggestions(data) {
  const suggestionsContainer = document.getElementById('city-suggestions');
  if (!suggestionsContainer) return;
  suggestionsContainer.innerHTML = '';

  if (data.length === 0) {
    suggestionsContainer.style.display = 'none';
    return;
  }

  data.forEach(item => {
    const div = document.createElement('div');
    div.className = 'suggestion-item';
    div.innerText = item.display_name;
    div.onclick = async () => {
      const cityName = item.display_name.split(',')[0];
      document.getElementById('input-city').value = cityName;
      state.tempCityData = {
        lat: parseFloat(item.lat),
        lon: parseFloat(item.lon),
        name: cityName
      };

      suggestionsContainer.style.display = 'none';
      document.getElementById('input-city').style.borderBottomColor = '#d7c188';

      // Detección automática de zona horaria (V48.3.11 - Universal Fix)
      const loader = document.getElementById('city-loader');
      if (loader) loader.classList.remove('hidden');
      try {
        const tzRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${item.lat}&longitude=${item.lon}&localityLanguage=en`);
        const tzData = await tzRes.json();
        
        let detectedTz = null;
        
        // 1. Buscamos en el array informativo (Formato estándar BigDataCloud)
        if (tzData && tzData.localityInfo && tzData.localityInfo.informative) {
            const tzItem = tzData.localityInfo.informative.find(i => i.description === 'time zone' || i.name.includes('/'));
            if (tzItem) detectedTz = tzItem.name;
        }
        
        // 2. Fallback a campo directo
        if (!detectedTz && tzData.timezone) detectedTz = tzData.timezone;
        
        // 3. Fallback final por Longitud (Aproximación Geodésica si falla el API)
        if (!detectedTz) {
            console.warn("⚠️ KAIROS: No se detectó IANA del API. Usando aproximación por Longitud.");
            detectedTz = 'UTC'; // O podríamos mapear zonas gruesas
        }

        if (detectedTz) {
          state.tempTimeZone = detectedTz;
          console.log(`🔭 Zona horaria universal detectada: ${state.tempTimeZone}`);

          // V29: Sincronizar el selector de offset automáticamente con el valor detectado
          const dateVal = document.getElementById('input-birth-date').value;
          const timeVal = document.getElementById('input-time').value;
          if (dateVal && timeVal) {
            const [y, m, d] = dateVal.split('-').map(Number);
            const [bh, bmin] = timeVal.split(':').map(Number);
            const calculatedOff = getOffsetAtDate(y, m, d, bh, bmin, state.tempTimeZone, item.lon);
            const offsetSelect = document.getElementById('input-utc-offset');
            if (offsetSelect) {
              offsetSelect.value = Math.round(calculatedOff).toString();
              console.log(`🔭 Selector sincronizado a UTC${calculatedOff >= 0 ? '+' : ''}${calculatedOff}`);
            }
          }
        }
      } catch (err) {
        console.error("🔭 Error detectando zona horaria:", err);
      } finally {
        if (loader) loader.classList.add('hidden');
      }
    };
    suggestionsContainer.appendChild(div);
  });
  suggestionsContainer.style.display = 'block';
}

// getOffsetAtDate() moved to ascendant_engine.js (LOCKED)

// Auth Handlers
function toggleAuthMode() {
  state.authMode = state.authMode === 'login' ? 'signup' : 'login';
  renderAuthComponent();
  const t = TRANSLATIONS[state.lang];

  const title = document.getElementById('txt-auth-title');
  const desc = document.getElementById('txt-auth-desc');
  const btnPrimary = document.getElementById('btn-auth-primary');
  const btnSecondary = document.getElementById('btn-auth-secondary');

  const btnForgot = document.getElementById('btn-forgot-password');

  if (state.authMode === 'login') {
    title.innerText = t.loginTitle;
    desc.innerText = t.loginDesc;
    btnPrimary.innerText = t.loginBtn;
    btnSecondary.innerText = t.signupLink;
    if (btnForgot) {
      btnForgot.classList.remove('hidden');
      btnForgot.innerText = TRANSLATIONS[state.lang].forgotPass;
    }
  } else {
    title.innerText = t.signupTitle;
    desc.innerText = t.signupDesc;
    btnPrimary.innerText = t.signupBtn;
    btnSecondary.innerText = t.loginLink;
    if (btnForgot) btnForgot.classList.add('hidden');
  }
}

async function handlePasswordReset() {
  const email = document.getElementById('auth-email').value.trim();
  const errorEl = document.getElementById('auth-error');
  const t = TRANSLATIONS[state.lang];

  if (!email) {
    errorEl.innerText = t.resetError;
    errorEl.classList.remove('hidden');
    errorEl.style.color = '#f87171'; // Red
    return;
  }

  try {
    await auth.sendPasswordResetEmail(email);
    errorEl.innerText = t.resetSent;
    errorEl.classList.remove('hidden');
    errorEl.style.color = '#d7c188'; // Primary (Gold)
  } catch (error) {
    errorEl.innerText = error.message;
    errorEl.classList.remove('hidden');
    errorEl.style.color = '#f87171'; // Red
  }
}

async function handleAuth() {
  console.log("🚀 KAIROS AUTH: Invocando handleAuth...");
  const emailInput = document.getElementById('auth-email');
  const passInput = document.getElementById('auth-password');

  if (!emailInput || !passInput) {
      console.error("❌ KAIROS AUTH: Inputs missing from DOM.");
      return;
  }

  const email = emailInput.value.trim();
  const password = passInput.value;
  const errorEl = document.getElementById('auth-error');

  if (!email || !password) {
      console.warn("⚠️ KAIROS AUTH: Email or password empty.");
      if (errorEl) {
          errorEl.innerText = "Por favor, completa los campos.";
          errorEl.classList.remove('hidden');
      }
      return;
  }

  try {
    if (errorEl) errorEl.classList.add('hidden');
    
    if (state.authMode === 'login') {
      await auth.signInWithEmailAndPassword(email, password);
    } else {
      await auth.createUserWithEmailAndPassword(email, password);
    }
    /* console.log("✅ KAIROS AUTH: Operación exitosa."); */
  } catch (error) {
    console.error("❌ KAIROS AUTH ERROR:", error.code, error.message);
    if (errorEl) {
        errorEl.innerText = error.message;
        errorEl.classList.remove('hidden');
    }
  }
}

async function loginWithGoogle() {
  const errorEl = document.getElementById('auth-error');
  try {
    if (errorEl) errorEl.classList.add('hidden');
    
    // [v6.8.1] Fix COOP on Localhost: Usar Redirect si estamos en local
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        await auth.signInWithRedirect(googleProvider);
    } else {
        await auth.signInWithPopup(googleProvider);
    }
  } catch (error) {
    // [v650.5.26] Auth exports moved up for earlier accessibility
    console.error("❌ KAIROS Google Auth Error:", error.code, error.message);
    if (errorEl) {
        errorEl.innerText = error.message;
        errorEl.classList.remove('hidden');
    }
  }
}

async function logout() {
  try {
    await auth.signOut();
    window.location.reload(); // Recomenzar flujo limpio
  } catch (error) {
    console.error("Logout error:", error);
  }
}
window.logout = logout;
window.handleLogout = logout;


async function saveUserProfile() {
  const user = auth.currentUser;
  if (!user) return;

  // NUCLEAR CLEANER V47: Limpieza absoluta antes de enviar a Firestore
  const cleanData = {};
  Object.keys(state.user).forEach(key => {
    let val = state.user[key];
    
    // Ignorar undefined y null
    if (val === undefined || val === null) return;
    
    // Convertir NaN a 0 si es número
    if (typeof val === 'number' && isNaN(val)) {
        val = 0;
    }
    
    cleanData[key] = val;
  });

  // Asegurar que 'asc' y campos críticos existen
  if (!cleanData.asc) cleanData.asc = 'Aries';
  if (cleanData.setupComplete === undefined) cleanData.setupComplete = false;

  try {
    await db.collection('users').doc(user.uid).set(cleanData, { merge: true });
    console.log("💾 Perfil guardado exitosamente (Data Cleaned).");
  } catch (e) {
    console.error("❌ Error guardando perfil:", e);
    throw e;
  }
}

function updateTranslations() {
  const t = TRANSLATIONS[state.lang] || TRANSLATIONS['es'];
  if (!t) return;

  const set = (id, text) => { 
    const el = document.getElementById(id);
    if (el) el.innerText = text; 
  };
  
  set('txt-welcome', t.welcome);
  set('txt-desc-welcome', t.descWelcome);
  set('lbl-identity', t.identity);
  
  const nameInput = document.getElementById('input-name');
  if (nameInput) nameInput.placeholder = t.placeholderName || "...";
  
  set('btn-begin', t.btnBegin);
  set('txt-struct-focus', t.structFocus);
  set('lbl-age', t.age);
  set('lbl-asc', t.ascendant);
  set('btn-finish', t.btnFinish);
  
  set('txt-intro-1-title', t.introTitle1);
  set('txt-intro-1-desc', t.introDesc1);
  set('txt-intro-2-title', t.introTitle2);
  set('txt-intro-2-desc', t.introDesc2);
  set('txt-intro-3-title', t.introTitle3);
  set('txt-intro-3-desc', t.introDesc3);
  set('txt-intro-4-title', t.introTitle4);
  set('txt-intro-4-desc', t.introDesc4);
  
  document.querySelectorAll('.btn-skip-intro').forEach(btn => {
      if (btn) btn.innerText = t.skipIntro || "Saltar";
  });
  set('txt-presented', t.presentedBy);

  // Update Tab Labels
  ['annual', 'weekly', 'monthly', 'daily', 'matrix', 'carta', 'contact'].forEach(tabId => {
    const tabEl = document.getElementById(`tab-${tabId}`);
    if (tabEl) {
        const labelEl = tabEl.querySelector('.shell-tab-label') || tabEl.querySelector('.tab-label');
        if (labelEl) labelEl.innerText = t[tabId] || tabId;
    }
  });
}

async function showView(viewId) {
    console.log("🔭 KAIROS Shell: Requesting view change to", viewId);
    const content = document.getElementById('app-main');
    if (!content) return;

    // Delegate dashboard tabs to setTab directly
    const dashboardTabs = ['matrix', 'annual', 'daily', 'weekly', 'monthly', 'carta', 'contact', 'lab'];
    if (dashboardTabs.includes(viewId)) {
        setTab(viewId);
        return;
    }

    // [V50.2] NUCLEAR FIX: Bypassing placeholder collision for dynamic components
    if (viewId === 'auth' || viewId.startsWith('intro') || viewId.startsWith('onboarding')) {
        console.log(`🔭 KAIROS Navigation: Forcing dynamic render for ${viewId}`);
        if (viewId === 'auth') {
            renderAuthComponent();
        } else if (viewId.startsWith('onboarding') || (viewId.startsWith('intro') && viewId !== 'intro')) {
            renderOnboardingComponent(viewId);
        } else if (viewId === 'intro') {
            const t = TRANSLATIONS[state.lang];
            const logoUrl = 'logo_kairos.png';
            content.innerHTML = `
                <div class="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in bg-white">
                    <div class="mb-12 relative">
                        <div class="absolute inset-0 bg-primary/10 rounded-full blur-2xl animate-pulse-slow"></div>
                        <img src="${logoUrl}" class="size-32 relative z-10" alt="">
                    </div>
                    <h1 class="text-2xl font-black text-warm-grey uppercase tracking-tighter mb-4">${t.welcomeTitle || 'Bienvenido a KAIROS'}</h1>
                    <p class="text-xs text-slate-500 font-bold uppercase tracking-widest max-w-[200px] leading-relaxed mb-12">${t.welcomeDesc || 'Tu tiempo personal, sincronizado con el cosmos.'}</p>
                    <div class="flex flex-col gap-4 w-full max-w-[240px]">
                        <button onclick="showView('auth')" class="w-full bg-primary text-white py-5 rounded-full text-xs font-black uppercase tracking-[0.3em] shadow-xl hover:scale-[1.02] transition-transform active:scale-95">Comenzar</button>
                        <button onclick="bypassAuthMode()" class="w-full text-[9px] font-black text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">Entrar como Invitado</button>
                    </div>
                </div>
            `;
        }
        return;
    }

    // Default 'main' entry

    // Default 'main' entry
    if (viewId === 'main') {
        const targetTab = state.currentTab || 'annual';
        console.log("🔭 KAIROS Navigation: Entering dashboard, default to", targetTab);
        setTab(targetTab); 
    }
}

/**
 * [v49] Dedicated Auth Component Renderer (Prevents "View missing" errors)
 */
function renderAuthComponent() {
    const content = document.getElementById('app-main');
    if (!content) return;
    const t = TRANSLATIONS[state.lang];
    
    content.innerHTML = `
        <div id="view-auth" class="h-full flex flex-col p-8 space-y-8 animate-fade-in">
            <div class="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                <img src="logo_kairos.png" class="size-20 mb-4" alt="KAIROS">
                <h2 id="txt-auth-title" class="text-3xl font-black text-warm-grey uppercase tracking-tighter">${state.authMode === 'login' ? t.loginTitle : t.signupTitle}</h2>
                <p id="txt-auth-desc" class="text-[10px] text-primary font-black uppercase tracking-[0.4em]">${state.authMode === 'login' ? t.loginDesc : t.signupDesc}</p>
                
                <div class="w-full space-y-4 pt-8">
                    <input type="email" id="auth-email" placeholder="email@example.com" class="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20" onkeyup="if(event.key==='Enter')handleAuth()">
                    <input type="password" id="auth-password" placeholder="••••••••" class="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20" onkeyup="if(event.key==='Enter')handleAuth()">
                    <div id="auth-error" class="hidden text-red-500 text-[10px] font-bold uppercase tracking-widest text-left px-2"></div>
                    
                    <button type="button" onclick="event.stopPropagation(); window.handleAuth()" id="btn-auth-primary" class="w-full py-5 bg-warm-grey text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">
                        ${state.authMode === 'login' ? t.loginBtn : t.signupBtn}
                    </button>
                    
                    <button type="button" id="btn-google-login" onclick="event.stopPropagation(); window.loginWithGoogle()" class="w-full py-4 border border-slate-200 rounded-[2rem] text-[9px] font-black uppercase tracking-widest flex items-center justify-center gap-2">
                        CONTINUAR CON GOOGLE
                    </button>

                    <!-- [v1.6] Bypass persistente en la vista de Auth -->
                    <button type="button" onclick="bypassAuthMode()" class="w-full py-4 mt-4 text-[9px] font-black text-primary uppercase tracking-[0.2em] border border-primary/10 rounded-full hover:bg-primary/5 transition-all">
                        Entrar como Invitado
                    </button>
                </div>

                <div class="space-y-4 pt-4">
                    <button onclick="toggleAuthMode()" id="btn-auth-secondary" class="text-[9px] font-black text-primary uppercase tracking-widest">
                        ${state.authMode === 'login' ? t.signupLink : t.loginLink}
                    </button>
                    <button onclick="handlePasswordReset()" id="btn-forgot-password" class="block mx-auto text-[8px] font-black text-slate-300 uppercase tracking-widest ${state.authMode === 'login' ? '' : 'hidden'}">
                        ${t.forgotPass}
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * [v49] Componente dinámico de Onboarding para garantizar flujo continuo.
 */
function renderOnboardingComponent(viewId) {
    const content = document.getElementById('app-main');
    if (!content) return;
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS['es'];
    
    let innerHTML = '';
    
    if (viewId === 'onboarding-1') {
        innerHTML = `
            <div id="view-onboarding-1" class="h-full flex flex-col p-8 space-y-12 animate-fade-in text-center justify-center">
                <p class="text-[10px] font-black text-primary uppercase tracking-[0.6em]">${t.identity || 'IDENTIDAD'}</p>
                <h2 class="text-4xl font-black text-warm-grey uppercase tracking-tighter">${t.welcome || 'BIENVENIDO'}</h2>
                <div class="space-y-4">
                    <input type="text" id="input-name" placeholder="${t.placeholderName || 'Tu nombre...'}" class="w-full bg-slate-50 border-none rounded-2xl p-6 text-xl font-bold text-center">
                    <button onclick="nextStep()" class="w-full py-6 bg-warm-grey text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">CONTINUAR</button>
                </div>
            </div>`;
    } else if (viewId === 'onboarding-1b') {
        innerHTML = `
            <div id="view-onboarding-1b" class="h-full flex flex-col p-8 space-y-8 animate-fade-in text-center justify-center">
                <p class="text-[10px] font-black text-primary uppercase tracking-[0.6em]">CALIBRACIÓN TEMPORAL</p>
                <h2 class="text-3xl font-black text-warm-grey uppercase tracking-tighter">DATOS DE ORIGEN</h2>
                <div class="space-y-4">
                    <div class="flex flex-col text-left gap-1">
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest px-2">Fecha de Nacimiento</label>
                        <input type="date" id="input-birth-date" class="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold">
                    </div>
                    <div class="flex flex-col text-left gap-1">
                        <label class="text-[8px] font-black text-slate-400 uppercase tracking-widest px-2">Hora (Aprox)</label>
                        <input type="time" id="input-time" class="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold">
                    </div>
                    <input type="text" id="city-input" placeholder="Escribe tu ciudad..." class="w-full bg-slate-50 border-none rounded-2xl p-4 text-sm font-bold" onkeyup="window.searchCity(this.value)">
                    <div class="relative w-full">
                        <div id="city-results" class="absolute top-0 left-0 right-0 bg-white shadow-2xl rounded-2xl mt-1 z-50 overflow-hidden hidden max-h-60 overflow-y-auto border border-slate-100"></div>
                    </div>
                    <button id="btn-next-1b" onclick="nextStep1b()" class="w-full py-6 bg-warm-grey text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.4em] shadow-xl mt-4">GENERAR MI CARTA</button>
                </div>
            </div>`;
    } else if (viewId === 'intro-1') {
        innerHTML = `
            <div id="view-intro-1" class="h-full flex flex-col p-8 space-y-8 animate-fade-in items-center justify-center text-center bg-white">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span class="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
                </div>
                <h2 id="txt-intro-1-title" class="text-3xl font-black text-warm-grey uppercase tracking-tighter">${t.introTitle1 || 'SINCRONIZACIÓN RADIAL'}</h2>
                <p id="txt-intro-1-desc" class="text-sm text-slate-500 font-medium leading-relaxed max-w-[280px]">${t.introDesc1 || 'Tu carta natal es el mapa de tu potencial energético.'}</p>
                <div class="pt-12 w-full max-w-[240px]">
                    <button onclick="showView('intro-2')" class="w-full py-5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">CONTINUAR</button>
                    <button onclick="showView('onboarding-1')" class="mt-4 text-[9px] font-black text-slate-300 uppercase tracking-widest w-full">${t.skipIntro || 'Saltar'}</button>
                </div>
            </div>`;
    } else if (viewId === 'intro-2') {
        innerHTML = `
            <div id="view-intro-2" class="h-full flex flex-col p-8 space-y-8 animate-fade-in items-center justify-center text-center bg-white">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span class="material-symbols-outlined text-primary text-4xl">history_toggle_off</span>
                </div>
                <h2 id="txt-intro-2-title" class="text-3xl font-black text-warm-grey uppercase tracking-tighter">${t.introTitle2 || 'CICLOS DINÁMICOS'}</h2>
                <p id="txt-intro-2-desc" class="text-sm text-slate-500 font-medium leading-relaxed max-w-[280px]">${t.introDesc2 || 'Entiende cómo los tránsitos actuales activan tu configuración original.'}</p>
                <div class="pt-12 w-full max-w-[240px]">
                    <button onclick="showView('intro-3')" class="w-full py-5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">CONTINUAR</button>
                    <button onclick="showView('onboarding-1')" class="mt-4 text-[9px] font-black text-slate-300 uppercase tracking-widest w-full">${t.skipIntro || 'Saltar'}</button>
                </div>
            </div>`;
    } else if (viewId === 'intro-3') {
        innerHTML = `
            <div id="view-intro-3" class="h-full flex flex-col p-8 space-y-8 animate-fade-in items-center justify-center text-center bg-white">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span class="material-symbols-outlined text-primary text-4xl">analytics</span>
                </div>
                <h2 id="txt-intro-3-title" class="text-3xl font-black text-warm-grey uppercase tracking-tighter">${t.introTitle3 || 'MATRIX DE INTEGRACIÓN'}</h2>
                <p id="txt-intro-3-desc" class="text-sm text-slate-500 font-medium leading-relaxed max-w-[280px]">${t.introDesc3 || 'Prácticas diarias diseñadas para alinear tu intención con el tiempo cósmico.'}</p>
                <div class="pt-12 w-full max-w-[240px]">
                    <button onclick="showView('intro-4')" class="w-full py-5 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">CONTINUAR</button>
                    <button onclick="showView('onboarding-1')" class="mt-4 text-[9px] font-black text-slate-300 uppercase tracking-widest w-full">${t.skipIntro || 'Saltar'}</button>
                </div>
            </div>`;
    } else if (viewId === 'intro-4') {
        innerHTML = `
            <div id="view-intro-4" class="h-full flex flex-col p-8 space-y-8 animate-fade-in items-center justify-center text-center bg-white">
                <div class="size-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <span class="material-symbols-outlined text-primary text-4xl">verified_user</span>
                </div>
                <h2 id="txt-intro-4-title" class="text-3xl font-black text-warm-grey uppercase tracking-tighter">${t.introTitle4 || 'TU ESPACIO SEGURO'}</h2>
                <p id="txt-intro-4-desc" class="text-sm text-slate-500 font-medium leading-relaxed max-w-[280px]">${t.introDesc4 || 'Comencemos configurando tu identidad astral única.'}</p>
                <div class="pt-12 w-full max-w-[240px]">
                    <button onclick="showView('onboarding-1')" class="w-full py-6 bg-warm-grey text-white rounded-[2rem] text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">COMENZAR CALIBRACIÓN</button>
                </div>
            </div>`;
    } else {
        innerHTML = `<div class="p-20 text-center opacity-50 uppercase text-[10px] font-black tracking-widest animate-pulse">Sincronizando ${viewId}...</div>`;
    }
    content.innerHTML = innerHTML;
}

window.nextStep = () => {
  const nameInput = document.getElementById('input-name');
  if (!nameInput || !nameInput.value.trim()) return;

  state.user.name = nameInput.value.trim();
  saveUserProfile();
  showView('onboarding-1b');
};

window.nextStep1b = async () => {
  const dateVal = document.getElementById('input-birth-date').value;
  const t = document.getElementById('input-time').value;
  const cityNameInput = document.getElementById('city-input')?.value || '';

  if (!dateVal || !t || !cityNameInput.trim()) {
    alert(state.lang === 'es' ? 'Por favor, completa todos los campos (Fecha, Hora y Ciudad).' : 'Please complete all fields (Date, Time, and City).');
    return;
  }

  if (!state.tempCityData) {
    alert(state.lang === 'es' ? 'BLOQUEO DE SEGURIDAD: Debes seleccionar tu ciudad de la lista de sugerencias que aparece al escribir para obtener las coordenadas exactas.' : 'SECURITY BLOCK: You must select your city from the suggestions list that appears while typing to get exact coordinates.');
    return;
  }

  const btn = document.getElementById('btn-next-1b');
  const originalText = btn.innerText;

  try {
    btn.innerText = state.lang === 'es' ? 'CALCULANDO...' : 'CALCULATING...';
    btn.style.opacity = '0.5';
    btn.style.pointerEvents = 'none';

    // Robust parsing for different browser date formats (split by - or /)
    const dateParts = dateVal.includes('-') ? dateVal.split('-') : dateVal.split('/');
    if (dateParts.length < 3) throw new Error("Format error: Use YYYY-MM-DD");
    
    // Ensure we handle YYYY-MM-DD correctly regardless of split char
    let y, m, d;
    if (dateParts[0].length === 4) { [y, m, d] = dateParts.map(Number); }
    else { [d, m, y] = dateParts.map(Number); } // Fallback for DD-MM-YYYY

    state.user.birthDay = d;
    state.user.birthMonth = m;
    state.user.birthYear = y;
    state.user.birthTime = t;
    state.user.age = new Date().getFullYear() - y;
    
    // Validación Nuclear de Coordenadas
    const finalLat = parseFloat(state.tempCityData?.lat !== undefined ? state.tempCityData.lat : state.user.birthLat);
    const finalLon = parseFloat(state.tempCityData?.lon !== undefined ? state.tempCityData.lon : state.user.birthLng);
    


    if (isNaN(finalLat) || isNaN(finalLon)) {
       console.error("❌ KAIROS: Coordenadas NaN detectadas antes de avanzar.");
       alert(state.lang === 'es' ? "Error: Coordenadas inválidas. Por favor, selecciona de nuevo tu ciudad." : "Error: Invalid coordinates. Please re-select your city.");
       btn.innerText = originalText;
       btn.style.opacity = '1';
       btn.style.pointerEvents = 'auto';
       return;
    }

    if (!finalLat && !finalLon && state.tempCityData?.name === undefined) {
       alert(state.lang === 'es' ? "Error: Por favor, vuelve a seleccionar tu ciudad para calibrar las coordenadas." : "Error: Please re-select your city to calibrate coordinates.");
       btn.innerText = originalText;
       btn.style.opacity = '1';
       btn.style.pointerEvents = 'auto';
       return;
    }

    state.user.birthLat = finalLat;
    state.user.birthLng = finalLon;
    state.user.birthCity = state.tempCityData?.name || state.user.birthCity;

    // Verificación final de integridad de librerías
    const hasAstronomy = typeof window.Astronomy !== 'undefined';
    const hasLuxon = typeof window.luxon !== 'undefined';



    if (!hasAstronomy || !hasLuxon) {
       console.error("❌ KAIROS: Astronomy o Luxon NO LISTOS para el cálculo.");
       alert(state.lang === 'es' ? "Motor cargando, espera un momento..." : "Motor loading, please wait a moment...");
       btn.innerText = originalText;
       btn.style.opacity = '1';
       btn.style.pointerEvents = 'auto';
       return;
    }

    // NUCLEAR DATA SYNC (V48.3)
    const tzArg = state.tempTimeZone || state.user.birthTimeZone || (state.user.birthLng > -10 ? 'Europe/Madrid' : 'America/Bogota');
    
    // El motor ahora es autónomo: calcula su propio offset vía Luxon internamente
    const ascData = calculateAscendant(y, m, d, t, state.user.birthLat, state.user.birthLng, null);

    if (!ascData || ascData.error) {
       console.error("❌ KAIROS: calculateAscendant falló con error:", ascData?.errorReason);
       throw new Error(state.lang === 'es' ? "Fallo en la sincronización del motor. Verifica hora y ciudad." : "Engine synchronization failed. Verify time and city.");
    }

    state.lastDiagnostic = ascData.diagnostic;

    state.user.birthUtcOffset = ascData.offset;
    state.user.birthTimeZone = tzArg;
    state.user.engineVersion = 48.3;



    // Fijar resultados en el estado maestro
    state.user.asc = ascData.sign;
    state.user.ascDeg = isNaN(ascData.deg) ? 0 : ascData.deg;
    state.user.ascMin = isNaN(ascData.min) ? 0 : ascData.min;
    state.user.setupComplete = true;
    state.user.lang = state.lang;



    // EXTRA SECURITY: Cleaning NaN values before Firestore
    Object.keys(state.user).forEach(key => {
        if (typeof state.user[key] === 'number' && isNaN(state.user[key])) {
            state.user[key] = 0;
        }
    });

    // [v650.5.21] Sincronización final de coordenadas para el motor de persistencia
    state.user.lat = state.user.birthLat;
    state.user.lng = state.user.birthLng;



    // 🚀 [v650.5.15] Persistencia Natal Centralizada y Robusta
    if (typeof window.triggerNatalCalculationAndPersist === 'function') {
        try {
            const result = await window.triggerNatalCalculationAndPersist(firebase.auth().currentUser.uid, state.user);
            if (result && result.success) {
                state.user.natalPlanets = result.natalPlanets;
                state.user.houses = result.houses;
                state.user.natal_context = result.natal_context;
                console.log("🔭 KAIROS: Perfil Natal completo generado y persistido.", Object.keys(result.natalPlanets));
            }
        } catch(e) {
            console.warn("⚠️ KAIROS: Error en persistencia natal (onboarding):", e);
        }
    }

    await saveUserProfile();

    // Redirección directa al Dashboard
    showView('main');
    setTab('annual');

  } catch (error) {
    console.error("🚀 Engine Error: ", error);
    alert(`${state.lang === 'es' ? 'Error crítico en el cálculo natal: ' : 'Critical error in natal calculation: '} ${error.message || 'Check connection/data'}`);
  } finally {
    btn.innerText = originalText;
    btn.style.opacity = '1';
    btn.style.pointerEvents = 'auto';
  }
};

window.prevStep1b = () => {
  if (state.user.setupComplete) {
    showView('main');
    setTab('annual');
  } else {
    showView('onboarding-1');
  }
};
window.prevStep = () => showView('onboarding-1b');

window.editBirthData = () => {
  const { birthDay, birthMonth, birthYear, birthTime, birthCity, birthLat, birthLng, birthUtcOffset, birthTimeZone } = state.user;
  const dateInput = document.getElementById('input-birth-date');
  const timeInput = document.getElementById('input-time');
  const cityInput = document.getElementById('input-city');
  const utcInput = document.getElementById('input-utc-offset');

  if (dateInput && birthDay && birthMonth && birthYear) {
    const mStr = String(birthMonth).padStart(2, '0');
    const dStr = String(birthDay).padStart(2, '0');
    dateInput.value = `${birthYear}-${mStr}-${dStr}`;
  }

  if (timeInput) timeInput.value = birthTime || '';
  if (cityInput) cityInput.value = birthCity || '';
  if (utcInput && birthUtcOffset !== undefined) utcInput.value = birthUtcOffset;

  if (birthCity && birthLat) {
    state.tempCityData = { lat: birthLat, lon: birthLng, name: birthCity };
  }

  // Restaurar zona horaria para el recalculo
  if (birthTimeZone) state.tempTimeZone = birthTimeZone;

  showView('onboarding-1b');
};

function renderZodiacSelector(containerId = 'zodiac-selector') {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  // Si estamos en el Dashboard, usamos dash-zodiac-selector
  // Aseguramos que el signo guardado en state.user.asc sea la referencia

  ZODIAC_LIST.forEach(sign => {
    const isActive = state.user.asc === sign;
    const card = document.createElement('div');
    card.className = `zodiac-card ${isActive ? 'selected' : ''}`;
    card.onclick = () => {
      // En el Dashboard (main), bloqueamos el cambio manual por directriz técnica (V24)
      if (containerId === 'dash-zodiac-selector') {
        return;
      }
      state.user.asc = sign;
      renderZodiacSelector(containerId);
      if (containerId !== 'zodiac-selector') {
        saveUserProfile();
        setTab(state.currentTab);
      }
    };
    card.innerHTML = `
            <div class="size-8 mb-2 ${isActive ? 'text-primary' : 'text-slate-300'}">${KAIROS_ICONS.zodiac[sign]}</div>
            <span class="text-[8px] font-black uppercase text-center">${sign}</span>
        `;
    container.appendChild(card);
  });

  // Autoscroll al seleccionado de forma más agresiva (V20)
  const selected = container.querySelector('.selected');
  if (selected) {
    setTimeout(() => {
      if (containerId === 'dash-zodiac-selector') {
        // [v4.1.0] FIX: Safe horizontal scroll to prevent jumping app shell vertical scroll
        const scrollOffset = selected.offsetLeft - (container.offsetWidth / 2) + (selected.offsetWidth / 2);
        container.scrollTo({ left: scrollOffset, behavior: 'smooth' });
      } else {
        selected.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 50);
  }
}

async function setTab(tabId) {
  // [v650v4.0] BOOT PROTECTION: ensure annual is truly active if coming from main
  const content = document.getElementById('app-main');
  const tabs = document.getElementById('app-tabs');

  if (!content) {
      console.error("⛔ CRITICAL: #app-main MISSING FROM DOM. Visual shell collapsed.");
      return;
  }

  // Actualizar estado global
  state.currentTab = tabId;
  
  // UI de navegación (v49 clean)
  if (tabs) {
      tabs.querySelectorAll('.shell-tab-item').forEach(t => t.classList.remove('active'));
      const activeTab = document.getElementById(`tab-${tabId}`);
      if (activeTab) activeTab.classList.add('active');
  }

  // Actualizar título de navegación
  const statusEl = document.getElementById('txt-nav-status');
  if (statusEl) {
      const titles = {
          daily: 'Hoy',
          weekly: 'Semana',
          monthly: 'Mes',
          annual: 'Año',
          matrix: 'Matrix',
          carta: 'Mapa',
          contact: 'Cuenta',
          lab: 'LAB CORE'
      };
      statusEl.textContent = titles[tabId] || 'Engine';
  }


  // Transición suave
  content.style.opacity = '0.3';

  try {
      await renderTabContent(tabId);
      updateKairosGuideVisibility();
      content.style.opacity = '1';
  } catch (err) {
      console.error("❌ setTab: Critical error during render:", err);
      content.innerHTML = `<div class="p-20 text-center opacity-50">Error en render [v49]: ${err.message}</div>`;
  }
}

// [v49] Brutal Fix and old navigation functions removed for clean rebuild.

window.toggleEngineState = () => {
    const btn = document.getElementById('power-btn');
    if (!btn) return;
    const isActive = btn.classList.contains('active');
    
    if (isActive) {
        btn.classList.remove('active');
        state.engineActive = false;
        console.log("🔋 KAIROS: Sistema en Standby.");
    } else {
        btn.classList.add('active');
        state.engineActive = true;
        console.log("🔋 KAIROS: Sistema en línea.");
    }
    setTab(state.currentTab);
};


window.finishSetup = () => {
  const ageInput = document.getElementById('input-age');
  if (!ageInput || !ageInput.value) return;

  state.user.age = parseInt(ageInput.value);
  state.user.setupComplete = true;
  state.user.lang = state.lang;

  saveUserProfile();
  showView('main');
  setTab('annual');
};

function toggleLanguage() {
  state.lang = state.lang === 'es' ? 'en' : 'es';
  state.user.lang = state.lang;
  updateTranslations();
  if (state.user.setupComplete) {
    saveUserProfile();
    setTab(state.currentTab);
  } else if (document.getElementById('view-onboarding-2').style.display !== 'none') {
    renderZodiacSelector();
  }
}

window.getActiveKairosContext = function() {
    const isLab = window.KAIROS_LAB_OVERRIDE === true && window.LAB_FULL_CHART;
    const context = isLab ? window.LAB_FULL_CHART : (window.totalShadowContext || {});
    
    if (isLab) {
        if (!context._logged) {
            console.log('[KAIROS CONTEXT SOURCE] LABORATORIO', {
                user: context.user_context?.name,
                asc: context.natal_context?.ascendant,
                is_lab: true
            });
            context._logged = true;
        }
    } else {
        // Log minimal para evitar spam en modo real
        if (!window._realContextLogged) {
            console.log('[KAIROS CONTEXT SOURCE] REAL');
            window._realContextLogged = true;
        }
    }
    return context;
};

async function renderTabContent(tabId) {
  console.log("🚀 renderTabContent (v49 Rebuild): Rendering for", tabId);
  const content = document.getElementById('app-main');
  if (!content) return;


  try {
    const lang = state.lang || 'es';
    const t = TRANSLATIONS[lang] || TRANSLATIONS['es'];

    // [v650.5.38] Identificación de usuario interno (Global para renderTabContent)
    const userEmail = (typeof firebase !== 'undefined' && firebase.auth().currentUser?.email) ||
                      state.user?.email || window.currentUser?.email || '';
    const isInternalUser = (Array.isArray(window.KAIROS_FLAGS?.INTERNAL_AUTH_EMAILS) &&
                            window.KAIROS_FLAGS.INTERNAL_AUTH_EMAILS.includes(userEmail)) ||
                           window.KAIROS_FLAGS?.KAIROS_PREMIUM_ACTIVE === true;

    // [v650.5.28] FUENTE ÚNICA DE VERDAD: getActiveKairosContext()
    // [v650.5.28] REDIRECCIÓN DE LABORATORIO EMBEBIDO (DEPRECATED)
    if (tabId === 'lab') {
        console.warn("⚠️ [KAIROS] El laboratorio embebido ha sido desactivado. Redirigiendo a /lab.html");
        window.location.href = '/lab.html';
        return;
    }

    let sc = window.getActiveKairosContext() || {};
    const isLabActive = !!sc.is_lab;

    const natalCtx = sc.natal_context || {};
    let natalPlanets = natalCtx.planets || {};



    // [FASE 6.14L] MAPEO ROBUSTO DE PLANETAS (Sol a Plutón + Casas)
    const getPlanetData = (esName, enName) => {
        try {
            // USAR LOCAL 'sc' derivado de getActiveKairosContext()
            const ctx = sc.natal_context || {};
            const planets = ctx.planets || (isLabActive ? {} : (state?.user?.natalPlanets || state?.natalPlanets || []));
            
            if (!planets || (Array.isArray(planets) && planets.length === 0)) return '—';

            let found = null;
            if (Array.isArray(planets)) {
                found = planets.find(p => {
                    const pName = (p.name || p.planet || '').toUpperCase();
                    return pName === esName.toUpperCase() || pName === enName.toUpperCase() ||
                           pName === 'JÚPITER' && esName === 'Jupiter' ||
                           pName === 'SATURNO' && esName === 'Saturno' ||
                           pName === 'PLUTÓN' && esName === 'Pluton';
                });
            } else {
                // Objeto: intentar todos los casos
                const keys = Object.keys(planets);
                const matchKey = keys.find(k => 
                    k.toUpperCase() === esName.toUpperCase() || 
                    k.toUpperCase() === enName.toUpperCase()
                );
                found = planets[matchKey] || planets[esName] || planets[enName];
            }

            if (!found) return '—';

            const sign = (found.sign || found.signName || found.signo || '—').toUpperCase();
            const degree = (found.degree !== undefined) ? found.degree : (found.grado !== undefined ? found.grado : '—');
            const house = found.house || found.casa || '—';
            const retro = found.isRetro || found.retro ? '(R)' : '';
            return `${sign} ${degree}° — CASA ${house} ${retro}`;
        } catch (e) {
            console.warn("Error in getPlanetData:", e);
            return '—';
        }
    };

    // Helper: Traducción de Fase Lunar (v6.14E)
    const getMoonPhaseES = () => {
        const rawPhase = sc.temporal_context?.moon_phase || state.momentRadar?.phase || 'New';
        const phaseMap = {
            'New': 'Nueva', 'Full': 'Llena', 'Waxing': 'Creciente', 'Waning': 'Menguante',
            'NEW': 'Nueva', 'FULL': 'Llena', 'WAXING': 'Creciente', 'WANING': 'Menguante',
            'New Moon': 'Nueva', 'Full Moon': 'Llena', 'Waxing Crescent': 'Creciente', 'Waning Crescent': 'Menguante'
        };
        return phaseMap[rawPhase] || rawPhase;
    };
    
    // [v1.7] Debug Data Injection - Ensure engines have valid input
    let safeUser = {
        name: sc.user_context?.name || state.user?.name || (state.lang === 'en' ? 'Explorer' : 'Explorador'),
        age: sc.user_context?.age || state.user?.age || 0,
        asc: sc.natal_context?.ascendant || state.user?.asc || 'Aries',
        setupComplete: !!(sc.natal_context?.planets || state.user?.setupComplete)
    };

    const age = safeUser.age;
    const asc = safeUser.asc;
    const name = safeUser.name;

    // [v49.1] Engine Safety Guard - Prevent shell collapse on missing core data
    const isGuest = safeUser.isGuest || false;
    const isBypassActive = (window.location.search.includes('user_context') || window.location.search.includes('bypass'));
    const isSetupReady = safeUser.setupComplete || false;
    const isPremiumActive = window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE || window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG;
    
    // Si somos invitado, estamos en bypass, premium o el setup ya está completo, no bloqueamos la renderización
    if ((!asc || age === undefined || age === 0) && tabId !== 'contact' && !isGuest && !isBypassActive && !isSetupReady && !isPremiumActive) {
        console.warn(`⚠️ renderTabContent [${tabId}]: Data incomplete (age=${age}, asc=${asc}), showing calibration pulse.`);
        content.innerHTML = `<div class="p-20 text-center opacity-50 uppercase text-[10px] font-black tracking-widest animate-pulse">${lang === 'es' ? 'Calibrando Identidad...' : 'Calibrating Identity...'}</div>`;
        return;
    }

    console.log("📊 Render Input Data:", { tabId, lang, age, asc, name });

    // 1. CAPA DE CÁLCULO (PRODUCT ENGINES)
    // [SESSION Fase 2B] Leer profección desde SESSION si está disponible — fallback a cálculo directo
    const sessionAnnual = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.annual)
      ? window.KAIROS_SESSION.annual
      : null;

    const profection = sessionAnnual
      ? {
          activeHouse: sessionAnnual.profectedHouse,
          activeSign:  sessionAnnual.profectedSign,
          lordOfYear:  sessionAnnual.lordOriginal,
          lordKey:     sessionAnnual.lordKey
        }
      : ((window.projection_engine && window.projection_engine.calculateProfection)
          ? window.projection_engine.calculateProfection(asc, age)
          : null);

    if (!profection) {
        content.innerHTML = `<div class="p-20 text-center opacity-50 italic">Datos aún no disponibles [Motor Profección]</div>`;
        return;
    }

    // Guard for House Data (mismo cálculo de siempre — solo cambia la fuente de activeHouse)
    const houseKey = profection.activeHouse || 1;
    const langHouseData = HOUSE_DATA_EXPANDED[lang] || HOUSE_DATA_EXPANDED['es'];
    profection.houseData = langHouseData[houseKey] || { name: "Ciclo de Vida", desc: "Sintonizando tu energía..." };

    // [SESSION Fase 2B] Leer lord desde SESSION — fallback al cálculo actual
    const lordOriginal = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.annual?.lordOriginal)
      ? window.KAIROS_SESSION.annual.lordOriginal
      : (safeUser.lordOfYear || (profection?.lordOfYear || 'Sol'));

    // [SESSION Fase 2B] Leer planeta del día desde SESSION — fallback a cálculo directo
    const dayPlanet = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.sky?.planetOfDay)
      ? window.KAIROS_SESSION.sky.planetOfDay
      : ((window.transit_engine && window.transit_engine.getDayPlanet) ? window.transit_engine.getDayPlanet() : 'Sol');

    const lunaPhase = getMoonPhaseES ? getMoonPhaseES() : 'Nueva';
    const matrixContext = {
        lord: lordOriginal,
        lang: lang,
        activeHouse: profection.activeHouse || 1,
        lunaPhase: lunaPhase,
        dayPlanet: dayPlanet
    };
    const matrixResult = (window.matrix_engine && window.matrix_engine.getMatrixData) ? window.matrix_engine.getMatrixData(lordOriginal, lang, matrixContext) : null;
    const matrix = matrixResult || {
        mastery: "Sincronía de la Matriz", body: "Cargando frecuencia...", mind: "Cargando frecuencia...", spirit: "Cargando frecuencia...", directive: "Escucha tu ritmo interno."
    };
  const intensityRaw = (window.matrix_engine && window.matrix_engine.getIntensity) ? window.matrix_engine.getIntensity(dayPlanet, lordOriginal) : 'Estable';
  
  // V49.5: Matrix Interpretation Enhancement
  if (matrix) {
      const activationText = lang === 'es' ? 
        `Activación en Casa ${profection.activeHouse} (${profection.activeSign})` : 
        `House ${profection.activeHouse} Activation (${profection.activeSign})`;
      
      const intensityText = lang === 'es' ? 
        `Clima: ${intensityRaw}` : 
        `Weather: ${intensityRaw}`;

      // Enriquecer el Mastery con contexto real
      matrix.masteryContext = `${activationText} · ${intensityText}`;
  }

  // [v650.5.14] UNIFICACIÓN DINÁMICA DE CONTEXTO (Anti-Regresión Fix)
  // [ROBUSTEZ] Evitar que la falta de sincronización en 'state.user' borre el mapa visual.
  const prevNatal = window.totalShadowContext?.natal_context || {};
  natalPlanets = state.user?.natalPlanets || (state.user?.natal_context?.planets) || prevNatal.planets || null;
  const natalHouses = state.user?.houses || state.user?.natalHouses || (state.user?.natal_context?.houses) || prevNatal.houses || null;

  const annual_context = { 
      profection_house: profection ? profection.activeHouse : 1, 
      profection_sign: profection ? profection.activeSign : 'Aries', 
      lord_of_year: lordOriginal,
      projection_context: profection
  };

  if (isLabActive) {
      // El contexto LAB ya viene pre-unificado por handleLabCalculate
      // No tocamos window.totalShadowContext para no contaminar al volver a modo real si fallamos
  } else {
      window.totalShadowContext = {
          ...(window.totalShadowContext || {}),
          user_context: { 
              name: name || window.totalShadowContext?.user_context?.name, 
              age:  age  || window.totalShadowContext?.user_context?.age, 
              language: lang, 
              subscription: state.subscription?.status || state.user?.subscription?.status || window.totalShadowContext?.user_context?.subscription || 'FREE',
              subscription_level: (isInternalUser || (state.subscription?.level ?? 0) > 0) ? 'PREMIUM' : 'FREE'
          },
          natal_context: { 
              ascendant: asc,
              planets: natalPlanets,
              houses: natalHouses,
              is_real: state.user?.setupComplete || prevNatal.is_real || false
          },
          annual_context,
          temporal_context: { 
              day_planet: dayPlanet || 'Sol',
              moon_phase: (window.KAIROS_SESSION && window.KAIROS_SESSION.ready && window.KAIROS_SESSION.sky?.lunarPhase)
                  ? window.KAIROS_SESSION.sky.lunarPhase
                  : ((window.CURRENT_TRANSITS?.moon_phase) || (window.totalShadowContext?.temporal_context?.moon_phase) || 'Nueva')
          },
          transit_context: {
              moon_transit_sign: (window.KAIROS_SESSION && window.KAIROS_SESSION.ready && window.KAIROS_SESSION.sky?.lunarSign)
                  ? window.KAIROS_SESSION.sky.lunarSign
                  : (window.CURRENT_TRANSITS?.Luna || 'Aries'),
              sun_transit_sign: window.CURRENT_TRANSITS?.Sol || 'Aries',
              planets: (() => {
                  const baseTransits = window.CURRENT_TRANSITS || {};
                  if (window.KAIROS_SESSION && window.KAIROS_SESSION.ready && window.KAIROS_SESSION.sky?.lunarSign) {
                      return {
                          ...baseTransits,
                          Luna: window.KAIROS_SESSION.sky.lunarSign,
                          Moon: window.KAIROS_SESSION.sky.lunarSign
                      };
                  }
                  return baseTransits;
              })(),
              moon_transit_house: (() => {
                  if (window.projection_engine &&
                      typeof window.projection_engine.getHouseForSign === 'function') {
                      return window.projection_engine.getHouseForSign(
                          (window.KAIROS_SESSION && window.KAIROS_SESSION.ready && window.KAIROS_SESSION.sky?.lunarSign)
                              ? window.KAIROS_SESSION.sky.lunarSign
                              : (window.CURRENT_TRANSITS?.Luna || 'Aries'),
                          asc
                      );
                  }
                  return 1; // fallback seguro — documentar como mejora futura
              })()
          },
          request_context: { view: tabId }
      };
  }

  // Actualizamos la referencia tras la unificación respetando la fuente única
  sc = window.getActiveKairosContext();

  const statusMap = { 'Estable': t.statusStable, 'Moderada': t.statusModerate, 'Activación': t.statusActivation };
  const intensityStatus = statusMap[intensityRaw] || t.statusModerate;
  const isStable = intensityRaw === 'Estable';
  const isModerate = intensityRaw === 'Moderada';
  const isActivation = intensityRaw === 'Activación';

  const translatedLord = (t.planets && t.planets[lordOriginal]) ? t.planets[lordOriginal] : lordOriginal;
  const translatedDayPlanet = (t.planets && t.planets[dayPlanet]) ? t.planets[dayPlanet] : dayPlanet;

  // Set dynamic body class for background based on Radar
  const radarStatusClass = state.momentRadar ? `body-${state.momentRadar.status}` : 'body-neutral';
  document.body.className = radarStatusClass;

  let html = '';

  if (!state.cache) {
      state.cache = { interpretations: {}, date: new Date().toDateString() };
  }

  const checkCache = (view) => {
      const today = new Date().toDateString();
      if (state.cache.date !== today) {
          state.cache.interpretations = {};
          state.cache.date = today;
          return null;
      }
      return state.cache.interpretations[view] || null;
  };

  if (tabId === 'annual') {
    html = `
            <div class="p-6 space-y-10">
                <!-- A-1 — Nuevo portal editorial de entrada -->
                <section id="annual-portal" class="relative bg-[#F7F4EE] rounded-[2.5rem] border border-[rgba(180,160,120,0.08)] p-8 text-center overflow-hidden">
                    <div class="relative z-10 space-y-6">
                        <div class="space-y-2">
                            <!-- A-1 — Personalización superior -->
                            <p class="text-[12px] font-bold text-warm-grey/40 uppercase tracking-[0.25em] mb-1">${name} · ${age} años</p>
                            <p class="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-2">GUÍA DEL AÑO</p>
                            <h2 id="annual-cycle-title-sub" class="text-4xl md:text-[3.2rem] font-black text-warm-grey uppercase tracking-tight leading-none mb-5">
                                ${(profection.houseData && profection.houseData.name) || 'CICLO DE EVOLUCIÓN'}
                            </h2>
                        </div>
                        
                        <div class="space-y-1">
                            <h3 class="text-[12px] font-bold text-warm-grey/60 uppercase tracking-[0.2em]">
                                CASA ${profection.activeHouse} · ${translatedLord} · ${new Date().getFullYear()}
                            </h3>
                        </div>

                        <!-- A-2 — SVG central con borde decorativo (A-4) -->
                        <div class="relative size-48 mx-auto flex items-center justify-center py-4">
                            <div class="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                            <!-- Contenedor con borde y fondo suave -->
                            <div class="absolute inset-4 border border-[rgba(180,160,120,0.16)] bg-white/45 rounded-full shadow-inner"></div>
                            <div class="size-32 text-primary drop-shadow-[0_0_15px_rgba(215,193,136,0.3)] animate-pulse-slow relative z-10">
                                ${KAIROS_ICONS.zodiac[profection.activeSign]}
                            </div>
                        </div>

                        <!-- Isla interior para el escenario -->
                        <div class="bg-white/55 rounded-[1.75rem] p-6 border border-[rgba(180,160,120,0.06)] shadow-sm">
                            <p id="annual-scenario-desc" class="text-[13px] font-medium text-warm-grey/80 leading-relaxed italic">
                                ${(profection.houseData && profection.houseData.desc) || 'Sintonizando con la base estructural de tu año...'}
                            </p>
                        </div>
                        
                        <!-- Firma técnica removida (A-2) -->
                    </div>

                    <!-- A-3 — Botones +/- ocultos pero conservando IDs para lógica si fuera necesario -->
                    <div class="hidden">
                        <button onclick="changeAge(-1)" id="btn-age-minus">-</button>
                        <button onclick="changeAge(1)" id="btn-age-plus">+</button>
                        <h2 id="display-age">${age}</h2>
                        <div id="edit-age-container">
                            <input type="number" id="input-edit-age" value="${age}">
                        </div>
                    </div>
                </section>

                <!-- PANEL INTERPRETATIVO KAIROS v4.8 (NARRATIVA ANUAL) -->
                <div id="kairos-annual-narrative" class="space-y-10">
                    
                    <!-- A-3 — Encabezado redundante eliminado -->
                    <!-- A-7 — Mantener intacto GUÍA DE VIDA (Señor del Año) -->
                    <div id="annual-life-guide" class="bg-warm-grey p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                        <div class="absolute top-0 right-0 p-8 opacity-5">
                            <div class="size-32">${KAIROS_ICONS.planets[lordOriginal]}</div>
                        </div>
                        <p class="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-6">${t.lord}</p>
                        <div class="flex items-center gap-6 mb-8 relative z-10">
                            <div class="size-16 text-primary drop-shadow-[0_0_10px_rgba(215,193,136,0.2)]">${KAIROS_ICONS.planets[lordOriginal]}</div>
                            <div>
                                <h4 class="text-2xl font-black uppercase tracking-tighter italic">${translatedLord}</h4>
                                <p id="annual-lord-tone" class="text-[10px] text-white/50 font-bold uppercase tracking-[0.25em] mt-1">${lordOriginal === 'Saturno' ? 'LA ESTRUCTURA' : 'EL GUÍA DEL CICLO'}</p>
                            </div>
                        </div>
                        <p id="annual-lord-request" class="text-[13px] text-slate-300 italic font-medium leading-relaxed border-l border-primary/30 pl-6">
                            "${t.lordIntro}"
                        </p>
                    </div>

                    <!-- A-6 — Renombrar bloque TU ASCENDENTE FILTRO -->
                    <div class="bg-slate-50/50 p-8 rounded-[3rem] border border-slate-100/50 transition-all text-center">
                        <div class="mb-4">
                            <h4 class="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-1">TU FORMA DE VIVIR EL AÑO</h4>
                            <p class="text-[9px] font-medium text-warm-grey/40 uppercase tracking-widest">Filtro de percepción basado en tu Ascendente natal</p>
                        </div>
                        <div class="flex items-center justify-center gap-2 mb-2">
                          <span class="w-5 h-5 opacity-60">${KAIROS_ICONS.zodiac[state.user.asc] || ''}</span>
                          <span class="text-[11px] font-semibold text-warm-grey/60 uppercase tracking-[0.15em]">${state.user.asc}</span>
                        </div>
                        <p id="annual-filter-text" class="text-[13px] text-warm-grey/60 font-medium leading-relaxed">
                            Desde tu Ascendente ${asc}, tu forma de vivir este ciclo de ${translatedLord} busca el equilibrio a través de tu naturaleza única.
                        </p>
                    </div>

                    <!-- A-5 — Agrupar Clima / Dirección / Cuidado -->
                    <div class="space-y-4">
                        <div id="annual-triplete" class="text-center mb-2">
                            <p class="text-[9px] font-black text-warm-grey/30 uppercase tracking-[0.4em]">TRES CLAVES DEL AÑO</p>
                        </div>
                        <div class="grid grid-cols-1 gap-4">
                            <div class="bg-primary/5 p-6 rounded-[2.5rem] border border-primary/10 px-8 py-4">
                                <p class="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2">CLIMA</p>
                                <p id="annual-triplete-clima" class="text-[11px] font-black text-warm-grey uppercase tracking-widest">Cargando...</p>
                            </div>
                            <div class="bg-primary p-6 rounded-[2.5rem] text-white shadow-xl shadow-primary/20 px-8 py-4">
                                <p class="text-[9px] font-black text-white/50 uppercase tracking-[0.4em] mb-2">DIRECCIÓN</p>
                                <p id="annual-triplete-direccion" class="text-[11px] font-black uppercase tracking-widest">Cargando...</p>
                            </div>
                            <div class="bg-slate-900 p-6 rounded-[2.5rem] text-white px-8 py-4">
                                <p class="text-[9px] font-black text-white/30 uppercase tracking-[0.4em] mb-2">CUIDADO</p>
                                <p id="annual-triplete-cuidado" class="text-[11px] font-black uppercase tracking-widest">Cargando...</p>
                            </div>
                        </div>
                    </div>

                    <!-- A-5 — GUÍA PRÁCTICA -> CÓMO HABITAR ESTE AÑO -->
                    <div id="annual-practical-block" class="bg-slate-50 p-10 rounded-[4rem] border border-primary/5">
                        <div class="text-center mb-8">
                            <h4 class="text-[10px] font-black text-primary uppercase tracking-[0.5em]">CÓMO HABITAR ESTE AÑO</h4>
                        </div>
                        <div id="annual-practical-key" class="space-y-5 px-2">
                            <p class="text-xs font-medium text-warm-grey/40 text-center animate-pulse">Sincronizando guía táctica...</p>
                        </div>
                    </div>

                    <!-- [SECCIÓN F] REGULACIÓN EMOCIONAL -->
                    <div id="annual-regulatory-close" class="hidden bg-[#F7F4EE]/50 p-8 rounded-[3.5rem] border border-[rgba(180,160,120,0.1)] text-center italic text-[13px] font-bold text-warm-grey/70 leading-relaxed shadow-sm mx-4">
                        Sincronizando regulación emocional...
                    </div>

                    <!-- A-4 — PROTOCOLO TÉCNICO -> BASE DEL CICLO -->
                    <div id="annual-base-cycle" class="p-8 rounded-[3rem] border border-slate-100 space-y-6 opacity-60 transition-all hover:opacity-100">
                        <div class="relative flex items-center justify-center border-b border-slate-100 pb-4">
                            <h4 class="text-[9px] font-black text-warm-grey/40 uppercase tracking-[0.4em] text-center w-full">BASE DEL CICLO</h4>
                            <span class="material-symbols-outlined text-warm-grey/20 text-sm absolute right-0">architecture</span>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-6">
                            <div class="space-y-1 text-center">
                                <p class="text-[8px] font-black text-warm-grey/30 uppercase tracking-widest">${t.profectionHouse}</p>
                                <p id="annual-tech-house" class="text-[10px] font-bold text-warm-grey/60 italic uppercase">CASA ---</p>
                            </div>
                            <div class="space-y-1 text-center">
                                <p class="text-[8px] font-black text-warm-grey/30 uppercase tracking-widest">${t.activatedSign}</p>
                                <p id="annual-tech-sign" class="text-[10px] font-bold text-warm-grey/60 italic uppercase">---</p>
                            </div>
                            <div class="col-span-2 space-y-1 pt-2 border-t border-slate-50 text-center">
                                <p class="text-[8px] font-black text-warm-grey/30 uppercase tracking-widest">${t.yearRuler}</p>
                                <p id="annual-tech-lord" class="text-[10px] font-bold text-warm-grey/60 italic uppercase">${translatedLord}</p>
                            </div>
                        </div>

                        <p id="annual-base-explanation" class="text-[10px] text-warm-grey/50 italic text-center mt-3 px-2 leading-relaxed">
                            Casa ${profection.activeHouse} concentra la experiencia principal de este año. ${profection.activeSign} describe el tono psicológico con el que ese aprendizaje se activa.
                        </p>

                        <div class="pt-4 border-t border-slate-50">
                            <p id="annual-profection-expl" class="text-[9px] text-warm-grey/40 leading-relaxed italic">
                                Sincronización basada en Profecciones Anuales (Serie 300).
                            </p>
                        </div>
                    </div>
                </div>

                <!-- A-6 — RUTA DEL CICLO ANUAL (Indicador visual) -->
                <section id="annual-cycle-route" class="bg-slate-50/50 p-6 rounded-[2.5rem] border border-slate-100/50">
                    <div class="mt-4">
                      <p class="text-[9px] font-black text-warm-grey/30 uppercase tracking-[0.4em] text-center mb-4">
                        RUTA DEL CICLO ANUAL
                      </p>
                      
                      <div class="flex items-center justify-center gap-3">
                        
                        <!-- Nodo 1: Ascendente -->
                        <div class="flex flex-col items-center gap-1">
                          <div class="w-10 h-10 rounded-full bg-white/40 border border-[rgba(180,160,120,0.2)] flex items-center justify-center">
                            <span class="w-5 h-5 opacity-60">${KAIROS_ICONS.zodiac[state.user.asc] || ''}</span>
                          </div>
                          <span class="text-[9px] text-warm-grey/60 font-semibold uppercase tracking-wide">${state.user.asc}</span>
                          <span class="text-[8px] text-warm-grey/35 uppercase tracking-wider">Ascendente</span>
                        </div>
                        
                        <!-- Conector -->
                        <div class="flex flex-col items-center gap-1 pb-4">
                          <div class="w-px h-4 bg-warm-grey/20"></div>
                          <span class="text-[8px] text-warm-grey/30">→</span>
                          <div class="w-px h-4 bg-warm-grey/20"></div>
                        </div>
                        
                        <!-- Nodo 2: Casa activa -->
                        <div class="flex flex-col items-center gap-1">
                          <div class="w-12 h-12 rounded-full bg-primary/8 border border-primary/20 flex items-center justify-center">
                            <span class="text-[13px] font-black text-primary">${profection.activeHouse}</span>
                          </div>
                          <span class="text-[9px] text-primary/70 font-semibold uppercase tracking-wide">Casa ${profection.activeHouse}</span>
                          <span class="text-[8px] text-warm-grey/35 uppercase tracking-wider">Activa</span>
                        </div>
                        
                        <!-- Conector -->
                        <div class="flex flex-col items-center gap-1 pb-4">
                          <div class="w-px h-4 bg-warm-grey/20"></div>
                          <span class="text-[8px] text-warm-grey/30">→</span>
                          <div class="w-px h-4 bg-warm-grey/20"></div>
                        </div>
                        
                        <!-- Nodo 3: Signo activo -->
                        <div class="flex flex-col items-center gap-1">
                          <div class="w-10 h-10 rounded-full bg-white/40 border border-[rgba(180,160,120,0.2)] flex items-center justify-center">
                            <span class="w-5 h-5 opacity-60">${KAIROS_ICONS.zodiac[profection.activeSign] || ''}</span>
                          </div>
                          <span class="text-[9px] text-warm-grey/60 font-semibold uppercase tracking-wide">${profection.activeSign}</span>
                          <span class="text-[8px] text-warm-grey/35 uppercase tracking-wider">Signo activo</span>
                        </div>
                        
                      </div>
                      
                      <!-- Texto de contexto -->
                      <p class="text-[8px] text-warm-grey/35 italic text-center mt-3 px-4">
                        Tu profección anual activa Casa ${profection.activeHouse} en ${profection.activeSign} este ciclo
                      </p>
                    </div>
                </section>

                <!-- [AÑO_PREMIUM] Bloque premium — se puebla por renderAnnualPremiumBlock -->
                <div id="annual-premium-container"></div>

            </div>
    `;

    // [v650.5.13] Usar el contexto unificado
    const annualShadowContext = sc;
    const cached = checkCache('annual');

    if (!cached && window.interpreter_engine) {
        (async () => {
            const response = await window.interpreter_engine.processRequest(annualShadowContext);
            if (response && response.content) {
                state.cache.interpretations['annual'] = response.content;
                renderAnnualNarrative(response.content, lang);
            }
        })();
    }

    // [AÑO_PREMIUM] Poblar bloque premium (siempre, independiente del interpreter)
    renderAnnualPremiumBlock(lordOriginal, profection, lang);

  } else if (tabId === 'weekly') {
    const ascSign = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.user?.ascendant)
      ? window.KAIROS_SESSION.user.ascendant
      : (state.user?.asc || 'Aries');
    const lordOfYear = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.annual?.lordOriginal)
      ? window.KAIROS_SESSION.annual.lordOriginal
      : (typeof lordOriginal !== 'undefined' ? lordOriginal : 'Sol');

    // --- 1. HTML Base del Módulo SEMANA ---
    html = `
        <div class="px-4 pt-4 space-y-8 pb-32 animate-fade-in" id="weekly-container">

            <!-- SEMANA-VISUAL-1: Portal Editorial Superior -->
            <div class="rounded-[2.5rem] bg-[#F7F4EE] border border-[rgba(180,160,120,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.03)] px-6 pt-10 pb-9 space-y-7">

                <!-- 1. ENCABEZADO -->
                <header class="text-center">
                    <div class="flex flex-col items-center gap-4">
                        <div class="size-16 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/10 shadow-sm mb-2">
                             <span class="material-symbols-outlined text-4xl">auto_graph</span>
                        </div>
                        <div>
                            <div id="weekly-header-label" class="mb-3 text-[10px] font-black text-primary uppercase tracking-[0.35em] leading-none">
  GUÍA PARA LA SEMANA
</div>
                            <h2 class="text-4xl font-black text-warm-grey uppercase tracking-tighter leading-none" id="weekly-verb-title">SEMANA</h2>
                        </div>
                        <p class="text-xs text-warm-grey/75 leading-relaxed max-w-[260px] mx-auto mt-2 hidden" id="weekly-verb-desc"></p>
                    </div>
                </header>

                <!-- SEPARADOR EDITORIAL -->
                <div class="border-t border-[rgba(180,160,120,0.12)]"></div>

                <!-- 2. ISLA INTERIOR — núcleo emocional semanal -->
                <div class="rounded-[1.75rem] bg-white/55 px-5 py-7 space-y-5 text-center">
                    <p id="weekly-intro-text" class="text-[22px] font-semibold text-warm-grey leading-[1.3] tracking-tight italic max-w-[280px] mx-auto">
                        Sincronizando tu semana...
                    </p>
                    <!-- Firma / contexto astrológico semanal (Cambio 3) -->
                    <p id="weekly-pulso-activo" class="text-[10px] uppercase tracking-[0.18em] text-warm-grey/40 font-bold hidden">
                        <!-- Inyectado dinámicamente si existe -->
                    </p>
                </div>

            </div>

            <!-- Gráfica de Ritmo Semanal -->
            <section class="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm" id="weekly-chart-section">
                <p class="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-5">
                    CÓMO RESPIRA LA SEMANA
                </p>

                <!-- Gráfica SVG de curva de ritmo -->
                <div id="weekly-rhythm-chart" class="relative">
                    <!-- Skeleton mientras carga -->
                    <div class="flex items-end justify-between gap-2 h-24" id="weekly-chart-skeleton">
                        ${Array(7).fill(0).map((_, i) => `<div class="flex-1 flex flex-col items-center gap-2">
                            <div class="w-full rounded-full bg-slate-100 animate-pulse" style="height: ${20 + i * 5}px"></div>
                            <div class="w-4 h-2 bg-slate-100 rounded animate-pulse"></div>
                        </div>`).join('')}
                    </div>
                    <!-- Contenido real inyectado por renderWeeklyNarrative -->
                    <div id="weekly-chart-real" class="hidden">
                        <svg id="weekly-curve-svg" viewBox="-5 -20 430 130" class="w-full overflow-visible" style="height:110px"></svg>
                        <div id="weekly-day-labels" class="flex justify-between mt-2 px-2"></div>
                    </div>
                </div>

                <!-- Leyenda de colores (siempre visible) -->
                <div class="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <p class="text-[8px] font-black text-warm-grey/40 uppercase tracking-widest mb-3">QUÉ SIGNIFICA EL COLOR</p>
                    <div class="flex items-start gap-3">
                        <span class="w-2.5 h-2.5 rounded-full mt-0.5 flex-shrink-0" style="background-color:#C4A46A"></span>
                        <p class="text-[10px] text-warm-grey/40 leading-relaxed"><strong class="text-warm-grey/60">Día abierto.</strong> El terreno tiene más espacio. Lo que se inicia tiene tracción natural.</p>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="w-2.5 h-2.5 rounded-full mt-0.5 flex-shrink-0" style="background-color:#9DA8B5"></span>
                        <p class="text-[10px] text-warm-grey/40 leading-relaxed"><strong class="text-warm-grey/60">Día sostenido.</strong> El arco avanza con su propio ritmo. Sin empuje ni resistencia marcada.</p>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="w-2.5 h-2.5 rounded-full mt-0.5 flex-shrink-0" style="background-color:#7C8CA0"></span>
                        <p class="text-[10px] text-warm-grey/40 leading-relaxed"><strong class="text-warm-grey/60">Día denso.</strong> El arco concentra más peso. Conviene ir a lo esencial.</p>
                    </div>
                    <div class="flex items-start gap-3">
                        <span class="w-2.5 h-2.5 rounded-full border mt-0.5 flex-shrink-0" style="background-color:transparent;border-color:#9DA8B5"></span>
                        <p class="text-[10px] text-warm-grey/40 leading-relaxed"><strong class="text-warm-grey/60">Cambio de tono.</strong> La Luna entra en nueva zona. El registro de la semana se desplaza.</p>
                    </div>
                </div>
            </section>

            <!-- Tres Tramos -->
            <section id="weekly-movement-section">
                <p class="text-[9px] font-black text-primary uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                    <span class="material-symbols-outlined text-xs">timeline</span> CÓMO SE MUEVE LA SEMANA
                </p>
                <div class="space-y-4" id="weekly-tramos-container">
                    <div class="p-6 rounded-[2rem] border border-dashed border-slate-200 text-center">
                        <p class="text-xs text-warm-grey/50 italic">Calculando el ritmo de la semana...</p>
                    </div>
                </div>
            </section>

            <!-- Bloques Premium SEMANA -->
            <section class="mt-2 space-y-4">

                <!-- 1. Activaciones personales -->
                <div style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                    <div style="text-align:center;padding:4px 0 14px">
                        <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                        <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Activaciones personales de la semana</p>
                        <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">Los momentos donde tu carta se activa con más intensidad durante esta semana.</p>
                        <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                    </div>
                </div>

                <!-- 2. Ventanas de oportunidad -->
                <div style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                    <div style="text-align:center;padding:4px 0 14px">
                        <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                        <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Ventanas de oportunidad dinámica</p>
                        <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">Días donde ciertas decisiones, conversaciones o movimientos encuentran más apertura.</p>
                        <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                    </div>
                </div>

                <!-- 3. Zonas de desgaste -->
                <div style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                    <div style="text-align:center;padding:4px 0 14px">
                        <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                        <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Zonas de desgaste y saturación</p>
                        <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">Momentos donde conviene bajar ritmo, simplificar o evitar sobrecarga.</p>
                        <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                    </div>
                </div>

                <!-- 4. Dirección emocional -->
                <div style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                    <div style="text-align:center;padding:4px 0 14px">
                        <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                        <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Dirección emocional de la semana</p>
                        <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">El tono interno que atraviesa la semana y cómo puede influir en tu manera de responder.</p>
                        <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                    </div>
                </div>

            </section>

        </div>
    `;

    // --- 2. Motor de Sombra Semanal (Post-inyección) ---
    // [v650.5.161] Movido al ciclo de vida post-inyección para evitar race conditions en re-visitas.
  } else if (tabId === 'daily') {
    const dayName = new Date().toLocaleDateString(state.lang, { weekday: 'long' });
    const dayNameCap = dayName.charAt(0).toUpperCase() + dayName.slice(1);
    // Asegurar que planetas de día se calculen siempre frescos matemáticamente, no por fallbacks cacheados de estado
    const planetDayCalc = (window.KAIROS_SESSION && window.KAIROS_SESSION.ready && window.KAIROS_SESSION.sky?.planetOfDay)
        ? window.KAIROS_SESSION.sky.planetOfDay
        : ((window.transit_engine && window.transit_engine.getDayPlanet) ? window.transit_engine.getDayPlanet(new Date()) : 'Sol');
    const translatedDayPlanet = t.planets[planetDayCalc] || planetDayCalc;

    // Actualizar tránsitos globales de forma proactiva
    await refreshTransits();
    const currentTransits = window.CURRENT_TRANSITS || {};

    // SKELETON KAIROS (Eliminado el zombie daily_engine)
    const dailyData = {
        title: currentTransits['Luna'] ? `Luna en ${currentTransits['Luna']} · Día de ${planetDayCalc}` : `Día de ${planetDayCalc}`,
        synthesis: "Sincronizando el cielo de hoy...",
        intensity: "---",
        actionRecommended: "---",
        warning: "---",
        dailyQuestion: "..."
    };

    // Humanizar Radar (simplificando la jerga técnica)
    let radarHumanLabel = "";
    let radarStatusClass = "neutral";
    if (state.momentRadar) {
        if (state.momentRadar.status === "peak") {
            radarHumanLabel = "Día de Tensión Creativa";
            radarStatusClass = "peak";
        } else if (state.momentRadar.status === "integration") {
            radarHumanLabel = "Día de Integración";
            radarStatusClass = "integration";
        } else if (state.momentRadar.status === "low") {
            radarHumanLabel = "Día de Pausa Activa";
            radarStatusClass = "low";
        } else {
            radarHumanLabel = "Día de Acción";
            radarStatusClass = "neutral";
        }
    }

    html = `
            <div class="px-4 pt-4 space-y-6 pb-32 animate-fade-in">

                <!-- HOY-VISUAL-1: Portal Editorial Superior -->
                <div id="daily-portal" class="rounded-[2.5rem] bg-[#F7F4EE] border border-[rgba(180,160,120,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.03)] px-6 pt-10 pb-9 space-y-7">

                    <!-- 1. ENCABEZADO PULSO LUNAR -->
                    <header class="text-center">
                        <div class="flex flex-col items-center gap-4">
                            <div class="size-16 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/10 shadow-sm mb-2">
                                 <span class="material-symbols-outlined text-4xl">${currentTransits['Luna'] === 'Nueva' ? 'brightness_3' : 'brightness_6'}</span>
                            </div>
                            <div>
                                <p class="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3" id="daily-header-label">${t.profectionDaily}</p>
                                <h2 class="text-3xl font-black text-warm-grey uppercase tracking-tighter leading-none" id="daily-header-title">${dailyData.title}</h2>
                            </div>
                        </div>
                    </header>

                    <!-- ESCENARIO DEL DÍA -->
                    <section id="daily-scenario" class="text-center space-y-2 rounded-2xl border border-primary/10 px-4 py-3">
                        <p class="text-[10px] font-black text-primary uppercase tracking-[0.4em]">ESCENARIO DEL DÍA</p>
                        <p class="text-xs font-bold text-warm-grey italic opacity-80" id="daily-area-activada">Sincronizando escenario...</p>
                    </section>

                    <!-- 2.5. APERTURA HOY-2B -->
                    <section class="text-center px-2">
                        <p class="text-sm font-medium text-warm-grey leading-relaxed" id="daily-apertura" style="min-height:1.2em">&nbsp;</p>
                    </section>

                    <!-- 3. RELATO CENTRAL — HOY-VISUAL-3: isla interior núcleo emocional -->
                    <article id="daily-narrative" class="text-center pt-6 border-t border-[rgba(180,160,120,0.12)]">
                        <div class="rounded-[1.75rem] bg-white/55 px-5 py-7 space-y-5">
                            <p id="daily-narrativa" class="text-[22px] font-semibold text-warm-grey leading-[1.3] tracking-tight italic max-w-[280px] mx-auto">
                                ${dailyData.narrative}
                            </p>
                            <!-- Firma astrológica -->
                            <p id="daily-pulso-activo" class="text-[10px] uppercase tracking-[0.18em] text-warm-grey/40 font-bold">
                                ${dailyData.pulso_activo || ''}
                            </p>
                        </div>
                    </article>

                </div>
                <!-- fin portal editorial HOY-VISUAL-1 -->


                <!-- 4. TRIPLETE KAIROS — Layout vertical HOY-2B -->
                <section id="daily-triplet" class="bg-slate-900 px-8 py-8 rounded-[3rem] text-white shadow-xl shadow-slate-200 space-y-6">
                    <div>
                        <p class="text-[7px] font-black text-white/30 uppercase tracking-widest mb-2">CLIMA</p>
                        <p class="text-[12px] font-medium text-white/90 leading-relaxed" id="daily-triplete-clima">${dailyData.intensity}</p>
                    </div>
                    <div class="w-full h-px bg-white/10"></div>
                    <div>
                        <p class="text-[7px] font-black text-primary uppercase tracking-widest mb-2">DIRECCIÓN</p>
                        <p class="text-[12px] font-semibold text-white leading-relaxed" id="daily-triplete-direccion">${dailyData.actionRecommended}</p>
                    </div>
                    <div class="w-full h-px bg-white/10"></div>
                    <div>
                        <p class="text-[7px] font-black text-white/30 uppercase tracking-widest mb-2">CUIDADO</p>
                        <p class="text-[11px] font-medium text-white/60 italic leading-relaxed" id="daily-triplete-cuidado">${dailyData.warning}</p>
                    </div>
                </section>

                <!-- 5. MATIZ OPERATIVO -->
                <section class="p-6 bg-slate-50 rounded-[2.5rem] flex items-start gap-5 border border-slate-100">
                    <div class="size-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                        ${KAIROS_ICONS.planets[planetDayCalc] || KAIROS_ICONS.planets['Sol']}
                    </div>
                    <div class="pt-1">
                        <p class="text-[9px] font-black text-primary uppercase tracking-widest mb-1">${dayNameCap}</p>
                        <p class="text-[11px] text-warm-grey/80 leading-snug font-medium italic" id="daily-matiz-dia">
                            Sincronizando matiz planetario...
                        </p>
                    </div>
                </section>

                    <!-- 5.5. RESONANCIA PERSONAL -->
                    <section id="daily-resonance" class="pt-4 px-2 text-center">
                        <p class="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-2">TU RESONANCIA PERSONAL HOY</p>
                        <p class="text-sm font-medium text-warm-grey italic leading-relaxed" id="daily-resonancia-personal">
                            Sincronizando cielo natal...
                        </p>
                    </section>

                    <!-- PREGUNTA CENTRAL — movida aquí, antes de los bloques bloqueados -->
                    <div class="pt-6 text-center">
                        <p class="text-[9px] font-black text-primary/30 uppercase tracking-[0.5em] mb-4">PREGUNTA CENTRAL</p>
                        <p class="text-lg font-black text-warm-grey italic leading-tight mb-8 px-6" id="daily-pregunta">
                            "${dailyData.dailyQuestion}"
                        </p>
                    </div>

                    <!-- HOY-2B: Bloques avanzados bloqueados — tokens idénticos a AÑO -->
                    <section class="mt-2 space-y-4">

                        <!-- SEÑAL OCULTA -->
                        <div style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Señal Oculta</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">
                                    Qué está siendo activado hoy en tu carta natal. La capa que explica por qué este día se siente diferente para ti.
                                </p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

                        <!-- BRÚJULA KAIROS -->
                        <div style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Brújula Kairos</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">
                                    Tu orientación personalizada para hoy. Qué expandir, qué sostener, qué iniciar y qué soltar — según tu carta natal y el momento actual.
                                </p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

                        <!-- EL ORIGEN DEL DÍA -->
                        <div style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">El Origen del Día</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">
                                    Por qué este día te afecta exactamente así a ti. La razón natal concreta detrás de lo que estás sintiendo.
                                </p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

                    </section>

                    <!-- [FEATURE FLAG OCULTA: daily_future_signals_visible = false] -->
                    <!-- TEMPLATE PREPARADO PARA FUTURA CAPA DE ANÁLISIS ASTROLÓGICA (No alterar div ni IDs) -->
                    <!-- Oculto para producción v650.5.45 -->
                    <section id="daily-future-signals-teaser" class="hidden mt-8 p-6 bg-slate-900/5 rounded-[2.5rem] border border-slate-200/50">
                        <div class="flex flex-col items-center gap-2 mb-3">
                            <span class="material-symbols-outlined text-primary text-sm opacity-50">science</span>
                            <p class="text-[8px] font-black text-warm-grey uppercase tracking-[0.4em] opacity-40">PRÓXIMA CAPA DE ANÁLISIS</p>
                        </div>
                        <div class="space-y-3 text-center opacity-40 grayscale">
                            <p class="text-[10px] font-bold text-warm-grey uppercase tracking-widest truncate" id="daily-future-moon-activation">ACTIVACIÓN DE LUNA NATAL</p>
                            <p class="text-[10px] font-bold text-warm-grey uppercase tracking-widest truncate" id="daily-future-lunar-events">EVENTOS LUNARES</p>
                            <p class="text-[10px] font-bold text-warm-grey uppercase tracking-widest truncate" id="daily-future-key-days">DÍAS CLAVE DEL CICLO</p>
                        </div>
                    </section>

                    <!-- 6. MOMENT RADAR (Cierre) -->
                    <footer class="space-y-8 mt-8">
                        ${(state.momentRadar && radarHumanLabel !== "Día de Acción") ? `
                        <div class="p-8 rounded-[3rem] border border-primary/5 bg-white shadow-sm text-center radar-pulse radar-${radarStatusClass}">
                            <div class="flex items-center justify-center gap-3 mb-4">
                                <div class="h-px w-6 bg-primary/20"></div>
                                <p class="text-[8px] font-black text-primary/40 tracking-[0.4em] uppercase">RADAR KAIROS</p>
                                <div class="h-px w-6 bg-primary/20"></div>
                            </div>
                            <div class="text-2xl font-black text-warm-grey tracking-tighter mb-2">${radarHumanLabel}</div>
                        </div>
                        ` : ''}

                        <!-- [SECCIÓN F] REGULACIÓN EMOCIONAL DIARIA (KAIROS LEVANTADO) -->
                        <div id="daily-regulatory-close" class="hidden mt-6 bg-slate-900 p-8 rounded-[3rem] text-center italic text-xs font-bold text-primary leading-relaxed shadow-xl border border-primary/20">
                            Sincronizando regulación...
                        </div>
                    </footer>
            </div>
        `;

    // --- MODO SOMBRA KAIROS (Caché e Independencia) ---
    const cachedDaily = checkCache('daily');
    if (cachedDaily) {
        // Diferir para asegurar que el DOM ya existe
        setTimeout(() => {
            if (state.currentTab === 'daily') {
                console.log("📄 KAIROS: Restaurando narrativa diaria desde caché...");
                renderDailyNarrative(cachedDaily);
            }
        }, 0);
    } else if (window.KAIROS_FLAGS && window.KAIROS_FLAGS.ENABLE_SHADOW_INTERPRETER && window.interpreter_engine) {
        (async () => {
            try {
                const ascSign = state.user?.asc || 'Aries';
                const moonSign = currentTransits?.Luna || 'Aries';
                const moonHouse = await window.transit_engine.getMoonHouse(ascSign);

                // [v650.5.13] Usar el contexto unificado
                const shadowContext = {
                    ...sc,
                    request_context: { view: 'daily' }
                };

                const interpreteResult = await window.interpreter_engine.processRequest(shadowContext);
                if (interpreteResult && interpreteResult.content) {
                    state.cache.interpretations['daily'] = interpreteResult.content;
                    renderDailyNarrative(interpreteResult.content);
                }
            } catch (e) {
                console.error("[KAIROS STABILITY] Error en Daily Engine:", e);
            }
        })();
    }

    // --- DISPARO DE AUDITORÍA ASTRONÓMICA ---
    if (window.KAIROS_FLAGS.ENABLE_ASTRO_AUDIT && window.astro_audit) {
        setTimeout(async () => {
            const auditRes = await window.astro_audit.runAudit();
            window.astro_audit.renderAuditPanel(auditRes);
        }, 200);
    }
  } else if (tabId === 'matrix') {
    const activeEmail = (typeof firebase !== 'undefined' && firebase.auth().currentUser?.email) || state.user?.email || '';
    const isInternal = (Array.isArray(window.KAIROS_FLAGS?.INTERNAL_AUTH_EMAILS) && window.KAIROS_FLAGS.INTERNAL_AUTH_EMAILS.includes(activeEmail)) || window.KAIROS_FLAGS?.KAIROS_PREMIUM_ACTIVE === true;
    const hasPremiumAccess = isInternal || window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG === true || window.location.search.includes('premium=true');
    
    // Gating eliminado para permitir shell FREE en v650.5.33


    const ascSign = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.user?.ascendant)
      ? window.KAIROS_SESSION.user.ascendant
      : (state.user?.asc || 'Aries');
    const lord = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.annual?.lordOriginal)
      ? window.KAIROS_SESSION.annual.lordOriginal
      : (typeof lordOriginal !== 'undefined' ? lordOriginal : (state.user?.lordOfYear || 'Sol'));
    const currentPlanet = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.sky?.planetOfDay)
      ? window.KAIROS_SESSION.sky.planetOfDay
      : (state.temporalContext?.day_planet || 'Sol');
    
    // --- 1. Preparación de HTML Base (Integrative Shell) ---
    html = `
        <div class="p-8 space-y-12 bg-deep-navy text-white min-h-screen rounded-t-[4rem]" id="matrix-container">
            <!-- Encabezado de Maestría -->
            <section class="text-center pt-10 animate-fade-in flex flex-col items-center">
                <!-- Icono circular de MATRIX -->
                <div class="size-16 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/10 shadow-sm mb-4 mx-auto">
                     <span class="material-symbols-outlined text-4xl">hub</span>
                </div>
                <div>
                    <p class="text-sm font-black text-primary uppercase tracking-[0.6em] mb-3" id="matrix-header-label">MATRIX</p>
                    <h2 class="text-4xl font-black italic tracking-tighter uppercase mb-4 leading-none" id="matrix-mastery-title">
                        LO QUE TU MOMENTO NECESITA
                    </h2>
                </div>
                <div class="h-1 w-12 bg-primary mx-auto rounded-full mt-2"></div>
            </section>

            <!-- TOOLKIT DE NAVEGACIÓN: Los 3 Pilares -->
            <div class="grid grid-cols-1 gap-12 pt-4 px-4" id="matrix-toolkit-container">
                <!-- CUERPO -->
                <div class="animate-fade-in" style="animation-delay: 0.1s">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary text-lg">health_and_safety</span>
                            <h4 class="text-[11px] font-black tracking-[0.1em] text-primary">Cuerpo</h4>
                        </div>
                        <div class="flex gap-1" id="intensity-body">
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                        </div>
                    </div>
                    <div class="bg-white/5 p-6 rounded-[2rem] border border-white/5">
                        <p class="text-sm text-slate-300 italic font-medium leading-relaxed" id="matrix-body-val"></p>
                    </div>
                </div>

                <!-- MENTE -->
                <div class="animate-fade-in" style="animation-delay: 0.2s">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary text-lg">psychology</span>
                            <h4 class="text-[11px] font-black tracking-[0.1em] text-primary">Mente</h4>
                        </div>
                        <div class="flex gap-1" id="intensity-mind">
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                        </div>
                    </div>
                    <div class="bg-white/5 p-6 rounded-[2rem] border border-white/5">
                        <p class="text-sm text-slate-300 italic font-medium leading-relaxed" id="matrix-mind-val"></p>
                    </div>
                </div>

                <!-- ENERGÍA -->
                <div class="animate-fade-in" style="animation-delay: 0.3s">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-primary text-lg">flare</span>
                            <h4 class="text-[11px] font-black tracking-[0.1em] text-primary">Energía</h4>
                        </div>
                        <div class="flex gap-1" id="intensity-energy">
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                            <div class="w-3 h-1 rounded-full bg-white/10"></div>
                        </div>
                    </div>
                    <div class="bg-white/5 p-6 rounded-[2rem] border border-white/5">
                        <p class="text-sm text-slate-300 italic font-medium leading-relaxed" id="matrix-energy-val"></p>
                    </div>
                </div>
            </div>



        </div>
    `;

    // --- 2. Disparar Motor de Sombra Matrix (Con Caché e Independencia) ---
    const cachedMatrix = checkCache('matrix');
    if (window.KAIROS_FLAGS && window.KAIROS_FLAGS.ENABLE_SHADOW_INTERPRETER && window.interpreter_engine) {
        (async () => {
            // [v6.8.5] Detección Robusta de Acceso Premium Interno
            const activeUserEmail = (typeof firebase !== 'undefined' && firebase.auth().currentUser?.email) || state.user?.email;
            const isInternalAuth = window.KAIROS_FLAGS.INTERNAL_AUTH_EMAILS.includes(activeUserEmail) || window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE === true;
            const isDebugMode = window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG === true || window.location.search.includes('matrix-debug');
            const hasPremiumAccess = isInternalAuth || isDebugMode;

            // Recolectar contextos de todas las vistas de forma autónoma
            const moonHouse = await window.transit_engine.getMoonHouse(ascSign);
            const monthlyHotspots = await window.transit_engine.getMonthlyHotspots();
            // [SESSION Fase 2B] Leer secuencia semanal desde SESSION — fallback a cálculo directo
            const weeklySequence = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.sky?.weeklySequence)
              ? window.KAIROS_SESSION.sky.weeklySequence
              : await window.transit_engine.getWeeklySequence(ascSign);
            
            // [v650.5.35] Normalizar claves de natal_context.planets para compatibilidad con módulo Matrix
            const rawNatalPlanets = sc.natal_context?.planets || {};
            const planetKeyMap = {
                'luna': 'Luna', 'sol': 'Sol', 'mercurio': 'Mercurio', 'venus': 'Venus',
                'marte': 'Marte', 'jupiter': 'Júpiter', 'saturno': 'Saturno',
                'urano': 'Urano', 'neptuno': 'Neptuno', 'pluton': 'Plutón',
                'moon': 'Luna', 'sun': 'Sol', 'mars': 'Marte', 'mercury': 'Mercurio'
            };
            const normalizedNatalPlanets = { ...rawNatalPlanets };
            Object.entries(rawNatalPlanets).forEach(([k, v]) => {
                const mappedKey = planetKeyMap[k.toLowerCase()];
                if (mappedKey && !normalizedNatalPlanets[mappedKey]) {
                    normalizedNatalPlanets[mappedKey] = v;
                }
            });

            // [v650.5.13] Usar el contexto unificado extendido
            const matrixShadowContext = {
                ...sc,
                natal_context: {
                    ...sc.natal_context,
                    planets: normalizedNatalPlanets   // [v650.5.35] planetas con claves normalizadas
                },
                monthly_context: {
                    hotspots: monthlyHotspots
                },
                weekly_context: {
                    verb: state.weeklyContext?.verb || 'Navigare',
                    is_critical: (moonHouse === (sc.annual_context.profection_house)),
                    moon_sequence: weeklySequence
                },
                request_context: { view: 'matrix', access_level: hasPremiumAccess ? 'full' : 'gated' }
            };

            // [FASE 6.14G] UNIFICACIÓN: Hacer persistente el contexto respetando el modo (v650.5.28)
            if (window.KAIROS_LAB_OVERRIDE) {
                window.LAB_FULL_CHART = matrixShadowContext;
            } else {
                window.totalShadowContext = matrixShadowContext;
            }

            const response = await window.interpreter_engine.processRequest(matrixShadowContext);

            // Integración Silenciosa MOTOR PREMIUM (Acceso Interno Real)
            let premiumData = null;
            if (window.KAIROS_PREMIUM_ENGINE && hasPremiumAccess && !window.KAIROS_LAB_OVERRIDE) {
                try {
                    // [v650.5.26] Configuración por defecto si no se pudo cargar de biblioteca
                    const engineConfig = { model: 'gemini-1.5-pro', temperature: 0.1 };
                    premiumData = await window.KAIROS_PREMIUM_ENGINE.matrix.processDetailedAnalysis(matrixShadowContext, response.content, engineConfig);
                } catch (e) {
                    console.error("[KAIROS PREMIUM] Crash en processDetailedAnalysis:", e);
                }
            }


            if (response && response.content) {
                state.cache.interpretations['matrix'] = response.content;
                renderMatrixNarrative(response.content, state.lang, lord, premiumData);
            }
        })();
    }
  } else if (tabId === 'monthly') {
    const ascSign = state.user?.asc || 'Aries';
    
    // --- 1. Preparación de HTML Base (MES-EDITORIAL-1) ---
    html = `
        <div class="p-6 space-y-6 pb-32 animate-fade-in" id="monthly-container">
            
            <!-- 1. PORTAL EDITORIAL SUPERIOR -->
            <div id="monthly-portal-container" class="rounded-[2.5rem] bg-[#F7F4EE] border border-[rgba(180,160,120,0.08)] shadow-[0_8px_30px_rgba(0,0,0,0.03)] px-6 pt-10 pb-9 space-y-7">
                
                <!-- EJE DEL MES — pieza dominante con Icono (Cambio 1 & 5) -->
                <header class="text-center">
                    <div class="flex flex-col items-center gap-4">
                        <!-- Icono circular de MES -->
                        <div class="size-16 bg-primary/5 rounded-full flex items-center justify-center text-primary border border-primary/10 shadow-sm mb-2">
                             <span class="material-symbols-outlined text-4xl">autorenew</span>
                        </div>
                        <p class="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-3" id="monthly-header-label">GUÍA PARA EL MES</p>
                        <div>
                            <h2 class="text-4xl font-black text-warm-grey uppercase tracking-tighter leading-[0.95] text-center mb-4" id="monthly-verb-title">
                                ${t.monthlyTitle}
                            </h2>
                        </div>

                    </div>
                </header>

                <!-- Separador editorial -->
                <div class="border-t border-[rgba(180,160,120,0.12)]"></div>

                <!-- Isla interior — desarrollo del eje -->
                <div class="rounded-[1.75rem] bg-white/55 px-5 py-7 space-y-4 text-center">
                    <h3 id="monthly-proceso-destacado" class="text-2xl font-black text-primary uppercase tracking-wide leading-none mb-1">
                        PROCESO EN...
                    </h3>
                    <p id="monthly-intro-text" class="text-[22px] font-semibold text-warm-grey leading-[1.3] tracking-tight italic max-w-[280px] mx-auto">
                        Sincronizando el eje del mes...
                    </p>
                    <p id="monthly-firma" class="text-[10px] uppercase tracking-[0.18em] text-warm-grey/40 font-bold">
                        <!-- Inyectado dinámicamente -->
                    </p>
                </div>

                <!-- Métricas transformadas (Cambio 4) -->
                <section id="monthly-keys-grid" class="grid grid-cols-2 gap-4 animate-fade-in hidden">
                    <div class="p-5 rounded-[2rem] bg-white/40 border border-slate-100/50 flex flex-col items-center text-center backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white/60">
                        <p class="text-[8px] font-black text-warm-grey/40 uppercase tracking-widest mb-1">TONO DEL CICLO</p>
                        <p class="text-xs font-bold text-warm-grey" id="monthly-key-intensity">—</p>
                    </div>
                    <div class="p-5 rounded-[2rem] bg-white/40 border border-slate-100/50 flex flex-col items-center text-center backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white/60">
                        <p class="text-[8px] font-black text-warm-grey/40 uppercase tracking-widest mb-1">VERBO GUÍA</p>
                        <p class="text-xs font-bold text-warm-grey" id="monthly-key-focus">—</p>
                    </div>
                </section>
            </div>

            <!-- 2. TU ESCENARIO ACTIVO (Sube de posición - Cambio 2) -->
            <section id="monthly-connection-box" class="p-8 rounded-[3.5rem] bg-warm-grey text-white shadow-2xl shadow-warm-grey/30 relative overflow-hidden hidden">
                <div class="absolute -top-4 -right-4 size-32 opacity-5 rotate-12">
                    <span class="material-symbols-outlined text-9xl">account_tree</span>
                </div>
                <p class="text-[10px] font-black text-white/40 tracking-[0.4em] uppercase mb-6">TU ESCENARIO ACTIVO</p>
                <div class="space-y-6">
                    <div>
                        <h4 class="text-2xl font-black uppercase tracking-tight leading-none mb-1" id="monthly-area-name"></h4>
                        <p class="text-[11px] text-white/50 font-technical tracking-widest uppercase italic" id="monthly-area-desc"></p>
                    </div>
                    <div class="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <p class="text-[13px] leading-relaxed text-white/90 font-medium" id="monthly-area-cruce"></p>
                    </div>
                </div>
            </section>

            <div class="h-4"></div>

            <!-- 3. HITOS DEL CICLO (Renombrado - Cambio 3) -->
            <section id="monthly-hitos-section" class="space-y-6">
                <div class="flex justify-between items-center px-2">
                    <p class="text-[10px] font-black text-primary uppercase tracking-[0.4em]">MOMENTOS DEL PROCESO</p>
                    <span class="text-[8px] font-black text-warm-grey/40 uppercase tracking-widest" id="monthly-hitos-count">-- HITOS</span>
                </div>
                <div id="monthly-hitos-grid" class="space-y-4">
                    <!-- Cards dinámicas -->
                </div>
            </section>

            <div class="h-4"></div>

            <!-- 4. ORIENTACIÓN: CÓMO NAVEGAR ESTE CICLO -->
            <section id="monthly-navigation-section" class="space-y-6">
                <p class="text-[10px] font-black text-primary uppercase tracking-[0.4em] px-2">CÓMO NAVEGAR ESTE CICLO</p>
                <div class="space-y-3" id="monthly-accordions-container">
                    <!-- Desplegables dinámicos -->
                </div>
            </section>

            <div class="h-4"></div>

            <!-- 5. ONDA DE ENERGÍA -->
            <section id="monthly-wave-section" class="bg-white p-7 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden">
                <div class="flex justify-between items-center mb-6">
                    <p class="text-[9px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                        <span class="material-symbols-outlined text-[14px]">analytics</span> ONDA DE ENERGÍA
                    </p>
                    <span class="text-[8px] font-black text-slate-300 uppercase tracking-widest" id="monthly-current-month">--</span>
                </div>
                <div class="mb-4 text-center px-4">
                    <p class="text-[9px] font-black text-warm-grey/30 uppercase tracking-[0.2em] mb-1">Sincronización Mensual</p>
                    <p id="monthly-graph-explanation" class="text-[11px] text-warm-grey/60 italic font-medium leading-relaxed">"El ciclo del mes toma forma según las fases lunares y los movimientos del periodo."</p>
                </div>
                <div class="relative h-48 mb-4 mt-8">
                    <svg id="monthly-wave-svg" class="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100"></svg>
                    <div id="monthly-today-cursor" class="absolute h-full w-px bg-orange-400/30 transition-all duration-1000 z-10 bottom-0" style="left: 0%">
                        <div id="monthly-today-date-badge" class="absolute top-[-14px] -translate-x-1/2 px-3 py-1.5 bg-orange-500 text-white text-[9px] font-black uppercase rounded-lg shadow-xl tracking-widest leading-none whitespace-nowrap z-20">--</div>
                        <div class="absolute bottom-[-6px] -translate-x-1/2 w-2 h-2 rounded-full bg-orange-500 border-2 border-white shadow-sm ring-4 ring-orange-500/10"></div>
                    </div>
                </div>
                <div class="flex justify-between px-2 pt-2 mb-8">
                   <div class="text-center">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest" id="monthly-first-day">--</p>
                   </div>
                   <div class="text-center">
                        <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest" id="monthly-last-day">--</p>
                   </div>
                </div>
                <div class="flex justify-between items-center px-1 pt-6 border-t border-slate-50">
                    <div class="flex items-center gap-1 text-[8px] font-bold text-warm-grey/40 uppercase tracking-widest">
                        <div class="size-1.5 rounded-full border border-primary/60 bg-white"></div>
                        <span>Luna Nueva</span>
                    </div>
                    <div class="flex items-center gap-1 text-[8px] font-bold text-warm-grey/40 uppercase tracking-widest">
                        <div class="size-1.5 rounded-full bg-primary/30 border border-primary/50"></div>
                        <span>Luna Llena</span>
                    </div>
                    <div class="flex items-center gap-1 text-[8px] font-bold text-orange-600 uppercase tracking-widest">
                        <div class="size-2 rounded-full bg-orange-500"></div>
                        <span>Hoy</span>
                    </div>
                    <div class="flex items-center gap-1 text-[8px] font-bold text-warm-grey/50 uppercase tracking-widest">
                        <div class="size-2 rounded-full border border-primary/40 border-dashed bg-white"></div>
                        <span>Pico del ciclo</span>
                    </div>
                </div>
            </section>

            <!-- 6. ESCENARIO DEL MES (Contexto cósmico) -->
            <section id="monthly-escenario-container"></section>

            <!-- [F] PREMIUM SHELL — [MES_PREMIUM_v1] IDs añadidos para inyección -->
            <section id="monthly-premium-shell" class="mt-8 space-y-4">

                        <div id="monthly-premium-activaciones-natales" style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Activaciones Natales</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">Qué planetas de tu carta se activan este mes. La capa que convierte el ciclo en algo tuyo.</p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

                        <div id="monthly-premium-transitos-tono" style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Tránsitos de Tono</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">Cómo los tránsitos del mes resuenan con tu configuración natal concreta.</p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

                        <div id="monthly-premium-momentos-clave" style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Momentos Clave</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">Los días de mayor intensidad personal dentro de este ciclo. No son iguales para todos.</p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

                        <div id="monthly-premium-activaciones-profundas" style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Activaciones Profundas</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">La lectura natal del mes. Lo que se mueve en ti, no solo en el cielo.</p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

                        <div id="monthly-premium-transitos-avanzados" style="background:#F7F4EE;border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.15)">
                            <div style="text-align:center;padding:4px 0 14px">
                                <div style="margin-bottom:10px;opacity:0.7"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                                <p style="font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 8px">Tránsitos Avanzados</p>
                                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:260px">Lectura completa de los tránsitos sobre tu carta a lo largo del mes.</p>
                                <button disabled style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
                            </div>
                        </div>

            </section>
        </div>
    `;

    // --- 2. Disparar Motor de Sombra Mensual (Con Caché e Independencia) ---
    const cachedMonthly = checkCache('monthly');
    if (cachedMonthly) {
        // Diferir para asegurar que el DOM ya existe
        setTimeout(() => {
            if (state.currentTab === 'monthly') {
                console.log("📄 KAIROS: Restaurando narrativa mensual desde caché...");
                renderMonthlyNarrative(cachedMonthly, state.lang);
                renderMonthlyPremiumBlock(cachedMonthly, state.lang); // [MES_PREMIUM_v1]
            }
        }, 0);
    } else if (window.KAIROS_FLAGS && window.KAIROS_FLAGS.ENABLE_SHADOW_INTERPRETER && window.interpreter_engine) {
        (async () => {
            const monthlyHotspots = await window.transit_engine.getMonthlyHotspots();
            // D.4.4-E1: hotspots del mes siguiente para Próximo Pulso
            const _now = new Date();
            const _nextMonthDate = new Date(_now.getFullYear(), _now.getMonth() + 1, 15);
            const nextMonthHotspots = await window.transit_engine.getMonthlyHotspots(_nextMonthDate);
            // [v650.5.13] Usar el contexto unificado extendido
            const monthlyShadowContext = {
                ...sc,
                monthly_context: {
                    hotspots: monthlyHotspots,
                    next_hotspots: nextMonthHotspots,   // D.4.4-E1
                    current_day: new Date().getDate()
                },
                request_context: {
                    view: 'monthly'
                }
            };

            const response = await window.interpreter_engine.processRequest(monthlyShadowContext);
            if (response && response.content) {
                state.cache.interpretations['monthly'] = response.content;
                renderMonthlyNarrative(response.content, state.lang);
                renderMonthlyPremiumBlock(response.content, state.lang); // [MES_PREMIUM_v1]
            }
        })();
    }
  } else if (tabId === 'carta') {
    // [v650.5.13] Contexto ya unificado en el scope superior de renderTabContent

    // [FASE 6.14N-DEBUG] Delegación total a natal_panel_renderer.js
    // [v650.5.35] Gating dinámico: Siempre mostramos la Carta Base.
    // Los módulos avanzados se bloquean dentro de natal_panel_renderer.js
    const hasAccess = (state.subscription?.level ?? 0) > 0 || isInternalUser;

    // Exponer decisión de acceso para que chart_650_v2.js la lea
    window.KAIROS_CARTA_ACCESS = hasAccess;

    const natalPanelHTML = (() => {
      if (typeof window.renderNatalPanel === 'function') {
        return window.renderNatalPanel(state, {
          age,
          profection,
          lordOriginal,
          translatedDayPlanet,
          sc,
          t,
          hasAccess // <-- fuente de verdad del acceso
        });
      }
      return '<div style="padding:24px;text-align:center;">⚠️ Error al cargar el renderizador natal.</div>';
    })();

    html = `
        <div class="p-6 space-y-8 pb-32 text-center">
            <header class="pt-10">
                <p class="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-4">${t.cartaTitle}</p>
                <h2 class="text-5xl font-black text-warm-grey uppercase tracking-tighter mb-2">
                    ${state.lang === 'es' ? 'TU MAPA ESTELAR' : 'YOUR STAR MAP'}
                </h2>
                <div class="h-1 w-12 bg-primary mx-auto rounded-full"></div>
            </header>

            <div class="space-y-4 text-left">
                ${natalPanelHTML}
            </div>
        </div>
    `;
  } else if (tabId === 'contact') {
      html = `
        <div class="p-8 space-y-12 pb-32">
            <header class="text-center pt-10">
                <p class="text-[10px] font-black text-primary uppercase tracking-[0.6em] mb-2">${t.contactHeading}</p>
                <h2 class="text-4xl font-black text-warm-grey uppercase tracking-tighter italic">${name}</h2>
            </header>

            <div class="space-y-4">
                 <div class="flex border-b border-primary/10 pb-2">
                    <button onclick="document.getElementById('tech-layer').classList.add('hidden'); document.getElementById('verification-layer')?.classList.add('hidden'); document.getElementById('user-layer').classList.remove('hidden');" class="flex-1 text-[10px] font-black uppercase tracking-widest py-2">ESTADO</button>
                    ${isInternalUser ? `
                        <button onclick="document.getElementById('user-layer').classList.add('hidden'); document.getElementById('verification-layer')?.classList.add('hidden'); document.getElementById('tech-layer').classList.remove('hidden');" class="flex-1 text-[10px] font-black uppercase tracking-widest py-2">LABORATORIO</button>
                    ` : ''}
                    ${window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE ? `
                        <button onclick="document.getElementById('user-layer').classList.add('hidden'); document.getElementById('tech-layer').classList.add('hidden'); document.getElementById('verification-layer').classList.remove('hidden');" class="flex-1 text-[10px] font-black uppercase tracking-widest py-2 text-primary">VERIFICACIÓN</button>
                    ` : ''}
                 </div>
            </div>

            <!-- CAPA A: USUARIO -->
            <section id="user-layer" class="animate-fade-in space-y-8">
                <div class="bg-slate-50 p-8 rounded-[3rem] border border-slate-100">
                    <div class="space-y-4">
                        <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest border-b border-slate-200 pb-3">
                            <span class="text-warm-grey/40">${t.age}</span>
                            <span class="text-primary font-bold">${age} AÑOS</span>
                        </div>
                        <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest border-b border-slate-200 pb-3">
                            <span class="text-warm-grey/40">${t.ascendant}</span>
                            <span class="text-primary font-bold">${state.user?.asc || 'Aries'}</span>
                        </div>
                    </div>

                    <div class="mt-8 bg-primary/5 p-8 rounded-[2rem] border border-primary/10">
                         <div class="flex justify-between items-center mb-4">
                             <p class="text-[9px] font-black text-primary uppercase tracking-widest">Nivel de Cuenta</p>
                             <span class="px-3 py-1 bg-primary text-white text-[8px] font-bold rounded-full">${state.subscription?.status ?? 'FREE'}</span>
                         </div>
                         ${state.subscription?.status === 'TRIAL' ? `
                             <p class="text-[10px] text-warm-grey/60 italic mb-4">Tu prueba Premium de 7 días está activa. Disfruta de la máxima precisión.</p>
                         ` : ''}
                         ${state.subscription?.status === 'FREE' ? `
                             <button onclick="initPaymentSession('premium')" class="w-full bg-primary text-white font-black py-4 rounded-2xl text-[9px] uppercase tracking-widest shadow-lg shadow-primary/20">ACTIVAR PREMIUM</button>
                         ` : `
                             <div class="text-[9px] text-primary font-black text-center uppercase tracking-widest py-3 border border-primary/20 rounded-2xl bg-white/50 italic">Suscripción Activa</div>
                         `}
                    </div>
                </div>

                <div class="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm" id="sync-history-container">
                    <p class="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-4">${t.syncHistory}</p>
                    <p class="text-[10px] text-warm-grey/40 italic mb-6">"${t.historyIntro}"</p>
                    <div id="history-patterns-list" class="space-y-4 text-left"></div>
                </div>

                <button onclick="handleLogout()" class="w-full py-4 border border-red-50 text-red-400 rounded-2xl text-[9px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-sm">logout</span> ${t.logout}
                </button>
            </section>

            <!-- CAPA B: TÉCNICA -->
            <section id="tech-layer" class="hidden animate-fade-in space-y-8">
                <div class="p-6 bg-slate-900 text-slate-100 rounded-[2.5rem] font-mono text-[9px] space-y-8 overflow-hidden border border-primary/20">
                    
                    <div>
                        <p class="text-primary font-black uppercase mb-4 tracking-widest border-b border-white/10 pb-2">${t.natalPositions}</p>
                        <div class="grid grid-cols-1 gap-2">
                            ${state.user?.natalPlanets ? Object.entries(state.user.natalPlanets).map(([p, data]) => {
                                const lon = (data.longitude !== undefined && !isNaN(data.longitude)) ? data.longitude : (signToDeg(data.sign) + (parseFloat(data.degree || 0)) + (parseFloat(data.minute || 0) / 60));
                                return `
                                <div class="flex justify-between items-center py-1 border-b border-white/5 opacity-80">
                                    <span class="text-primary font-bold w-16">${p.toUpperCase()}</span>
                                    <span>${(data.sign || '---').toUpperCase()}</span>
                                    <span class="text-white/60">${Math.floor(lon % 30)}° ${Math.floor((lon % 1) * 60)}'</span>
                                </div>
                                `;
                            }).join('') : '<p class="opacity-40 italic">Calculando...</p>'}
                        </div>
                    </div>

                    <div>
                        <p class="text-primary font-black uppercase mb-4 tracking-widest border-b border-white/10 pb-2">${t.currentTransits}</p>
                        <div class="grid grid-cols-1 gap-2">
                            ${Object.entries(window.CURRENT_TRANSITS || {}).map(([p, sign]) => {
                                const signStr = (typeof sign === 'string') ? sign : (sign?.sign || '---');
                                return `
                                    <div class="flex justify-between items-center py-1 border-b border-white/5 opacity-80">
                                        <span class="text-primary font-bold w-16">${p.toUpperCase()}</span>
                                        <span>${signStr.toUpperCase()}</span>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>

                    <div class="space-y-4 p-4 bg-white/5 rounded-2xl">
                        <p class="text-primary font-black uppercase mb-2 tracking-widest">${t.cycleProtocol}</p>
                        <div class="space-y-2 opacity-60 leading-relaxed italic">
                            <p><strong>CASA ${profection.activeHouse}:</strong> Escenario profectada.</p>
                            <p><strong>RULER:</strong> ${translatedLord} (${lordOriginal})</p>
                            <p><strong>DAY RULER:</strong> ${translatedDayPlanet}</p>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <p class="text-primary font-black uppercase mb-4 tracking-widest border-b border-white/10 pb-2">${t.systemDiagnostic}</p>
                        <div class="space-y-2 opacity-80">
                            <div class="flex justify-between"><span>${t.engineVer}:</span> <span>v49.5</span></div>
                            <div class="flex justify-between"><span>${t.activeShadow}:</span> <span>${window.KAIROS_FLAGS?.ENABLE_SHADOW_INTERPRETER ? 'ON' : 'OFF'}</span></div>
                            <div class="flex justify-between"><span>${t.systemStatus}:</span> <span class="text-green-400">NOMINAL</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CAPA C: VERIFICACIÓN INTERNA (v6.14) -->
            <!-- CAPA C: VERIFICACIÓN INTERNA (v6.14L) -->
            ${window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE ? `
            <section id="verification-layer" class="block animate-fade-in space-y-6">
                
                <!-- 1. INTERPRETACIÓN PREMIUM (PROTOTIPO) -->
                <div class="bg-primary/5 p-8 rounded-[3rem] border border-primary/10 text-left">
                    <p class="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-4">Interpretación Premium</p>
                    <p class="text-xs text-warm-grey italic leading-relaxed">
                        Este panel integra el motor astronómico de alta precisión con la lectura interpretativa de la Serie 650.
                    </p>
                </div>

                <!-- 2. IDENTIDAD DE RODAJE (VALIDACIÓN MOTOR) -->
                <div class="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden text-left">
                    <div class="absolute top-0 right-0 p-4 opacity-10">
                        <span class="material-symbols-outlined text-4xl">verified_user</span>
                    </div>
                    <p class="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-6">Validación de Motor Natal</p>
                    <div class="grid grid-cols-2 gap-y-6 gap-x-4">
                        <div class="space-y-1">
                            <p class="text-[8px] text-warm-grey/40 uppercase font-black tracking-widest leading-none">Ascendente</p>
                            <p class="text-xs font-bold text-warm-grey uppercase">${safeUser.asc || 'Aries'}</p>
                        </div>
                        <div class="space-y-1">
                            <p class="text-[8px] text-warm-grey/40 uppercase font-black tracking-widest leading-none">Señor del Año</p>
                            <p class="text-xs font-bold text-warm-grey uppercase">${lordOriginal}</p>
                        </div>
                        <div class="space-y-1">
                            <p class="text-[8px] text-warm-grey/40 uppercase font-black tracking-widest leading-none">Edad</p>
                            <p class="text-xs font-bold text-warm-grey uppercase">${age} años</p>
                        </div>
                        <div class="space-y-1">
                            <p class="text-[8px] text-warm-grey/40 uppercase font-black tracking-widest leading-none">Casa Activa</p>
                            <p class="text-xs font-bold text-warm-grey uppercase">CASA ${profection.activeHouse}</p>
                        </div>
                    </div>
                </div>

                <!-- 3. SECCIÓN CARTA NATAL BASE -->
                <div class="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 transition-all text-left">
                    <p class="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-6">CARTA NATAL COMPLETA: 10 PLANETAS</p>
                    <div class="space-y-3">
                        ${[
                            ['Sol', 'Sun'], ['Luna', 'Moon'], ['Mercurio', 'Mercury'], 
                            ['Venus', 'Venus'], ['Marte', 'Mars'], ['Jupiter', 'Jupiter'], 
                            ['Saturno', 'Saturn'], ['Urano', 'Uranus'], ['Neptuno', 'Neptune'], 
                            ['Pluton', 'Pluto'], ['Ascendente', 'Ascendant']
                        ].map(([es, en]) => `
                            <div class="flex justify-between items-center text-[10px] border-b border-slate-200/40 pb-2">
                                <span class="text-warm-grey/40 font-bold w-16 uppercase italic text-left">${es}</span>
                                <span class="text-primary font-bold font-mono">${getPlanetData(es, en)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 4. SECCIÓN CASAS NATALES (12 CASAS) -->
                <div class="bg-slate-900 p-8 rounded-[3rem] border border-white/10 text-slate-100 text-left">
                    <p class="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-6">Mapa de las 12 Casas</p>
                    <div class="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[9px]">
                        ${(() => {
                            const activeCtx = window.getActiveKairosContext();
                            const hs = activeCtx?.natal_context?.houses || state.user?.houses || {};
                            return Array.from({length: 12}, (_, i) => i + 1).map(h => {
                                const data = hs[h] || hs[String(h)] || {};
                                return `
                                    <div class="flex justify-between items-center py-1 border-b border-white/5">
                                        <span class="text-primary/60 font-bold">C${h}</span>
                                        <span>${(typeof data.sign === 'string') ? data.sign.toUpperCase().substring(0,3) : '—'} ${data.degree ?? '—'}°</span>
                                    </div>
                                `;
                            }).join('');
                        })()}
                    </div>
                </div>

                <!-- 5. SECCIÓN AÑO ACTIVO -->
                <div class="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 text-left">
                    <div class="size-10 bg-slate-50 rounded-full flex items-center justify-center">
                        <span class="material-symbols-outlined text-slate-400 text-lg">calendar_today</span>
                    </div>
                    <div class="flex-1">
                        <p class="text-[8px] text-warm-grey/40 uppercase font-black tracking-widest mb-0.5">Sección Año Activo</p>
                        <p class="text-[9px] font-black text-warm-grey uppercase tracking-tighter">
                            REGENTE DEL AÑO: ${lordOriginal}
                        </p>
                    </div>
                </div>

                <!-- 6. SECCIÓN MOMENTO ACTUAL (TRÁNSITOS) -->
                <div class="bg-warm-grey text-white p-8 rounded-[3rem] shadow-xl text-left">
                    <div class="flex items-center justify-between mb-6">
                        <p class="text-[8px] font-black text-primary uppercase tracking-[0.4em]">Sección Momento Actual</p>
                        <span class="text-[7px] text-white/30 uppercase tracking-widest font-bold">Source: ${window.getPlanetaryPositions ? 'High-Precision' : 'Standard'}</span>
                    </div>
                    <div class="grid grid-cols-1 gap-3">
                        ${Object.entries(window.CURRENT_TRANSITS || {}).map(([p, sign]) => {
                            const signStr = (typeof sign === 'string') ? sign : (sign?.sign || '—');
                            return `
                                <div class="flex justify-between items-center text-[10px] border-b border-white/10 pb-2">
                                    <span class="text-white/40 font-bold w-16 uppercase">${p === 'Sol' || p === 'Luna' ? p : p.substring(0, 3)}</span>
                                    <span class="text-primary font-black uppercase text-right">${signStr.toUpperCase()}</span>
                                    <span class="text-white/20 text-[8px] italic flex-1 text-right">sincronizado</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div class="mt-6">
                        <button onclick="location.reload()" class="w-full py-3 bg-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-white/20 transition-all border border-white/5">
                            Refrescar Tránsitos
                        </button>
                    </div>
                </div>

                <!-- 7. INFRAESTRUCTURA DE CÁLCULO -->
                <div class="bg-white p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4 text-left">
                    <div class="size-10 bg-slate-50 rounded-full flex items-center justify-center">
                        <span class="material-symbols-outlined text-slate-400 text-lg">settings_suggest</span>
                    </div>
                    <div class="flex-1">
                        <p class="text-[8px] text-warm-grey/40 uppercase font-black tracking-widest mb-0.5">Infraestructura de Cálculo</p>
                        <p class="text-[9px] font-black text-warm-grey uppercase tracking-tighter">
                            v${state.user.engineVersion || '483'} · ${state.engineActive ? 'ONLINE' : 'STANDBY'} · ${window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG ? 'DEBUG SCENARIO' : 'LIVE'}
                        </p>
                    </div>
                </div>

            </section>
            ` : ''}

            <footer class="text-center space-y-6 pt-10 border-t border-slate-100">
                <div class="size-12 mx-auto grayscale opacity-20">
                    <img src="logo_kairos.png" class="w-full" alt="KAIROS">
                </div>
                <p class="text-xs text-warm-grey/50 leading-relaxed max-w-xs mx-auto italic">
                    "${t.contactPhrase}"
                </p>
                <div class="pt-4">
                    <a href="https://wa.me/your_number" class="px-8 py-4 bg-primary text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl inline-block">
                        ${t.contactCTA}
                    </a>
                </div>
            </footer>
        </div>
      `;
  }

  console.log("📥 Injecting HTML into content. Length:", html.length);
  content.innerHTML = html;
  
  // [v650v4.1] Reliable scroll reset after asynchronous rendering process
  setTimeout(() => {
    if (content) {
      content.scrollTo({ top: 0, behavior: 'auto' });
      console.log("📍 KAIROS: Scroll reset focus applied to top.");
    }
  }, 10);
  
  if (tabId === 'annual') {
    console.log("🎨 Rendering dashboard zodiac...");
    // setTimeout(() => renderZodiacSelector('dash-zodiac-selector'), 50);

    // [v650v4.2] Restaurar narrativa desde caché tras inyección DOM segura
    const cached = checkCache('annual');
    if (cached) {
        console.log("📄 KAIROS: Restaurando narrativa anual desde caché...");
        renderAnnualNarrative(cached, lang);
    }

    // [AÑO_PREMIUM] Poblar bloque premium tras inyección DOM (restauración de tab)
    const _lordForPremium = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.annual?.lordOriginal)
      ? window.KAIROS_SESSION.annual.lordOriginal
      : (typeof lordOriginal !== 'undefined' ? lordOriginal : (state.user?.lordOfYear || 'Sol'));
    const _profForPremium = typeof profection !== 'undefined' ? profection : {};
    renderAnnualPremiumBlock(_lordForPremium, _profForPremium, lang);
  }
  
  if (tabId === 'matrix') {
    // [v650v4.2] Restaurar narrativa Matrix desde caché
    const cached = checkCache('matrix');
    if (cached) {
        console.log("📄 KAIROS: Restaurando narrativa matrix desde caché...");
        const lordForCache = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.annual?.lordOriginal)
          ? window.KAIROS_SESSION.annual.lordOriginal
          : (typeof lordOriginal !== 'undefined' ? lordOriginal : (state.user?.lordOfYear || 'Sol'));
        renderMatrixNarrative(cached, state.lang, lordForCache, null); // premiumData se reconstruirá si aplica
    }
  }

  if (tabId === 'weekly') {
    // --- 2. Motor de Sombra Semanal con FIX de contexto ---
    const cachedWeekly = checkCache('weekly');
    if (cachedWeekly) {
        console.log("📄 KAIROS: Restaurando narrativa semanal desde caché...");
        renderWeeklyNarrative(cachedWeekly, state.lang);
    } else if (window.KAIROS_FLAGS && window.KAIROS_FLAGS.ENABLE_SHADOW_INTERPRETER && window.interpreter_engine) {
        (async () => {
            try {
                const ascSign = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.user?.ascendant)
                  ? window.KAIROS_SESSION.user.ascendant
                  : (state.user?.asc || 'Aries');

                // [SESSION Fase 2B] Leer secuencia semanal desde SESSION — fallback a cálculo directo
                const moonSequence = (window.KAIROS_SESSION?.ready && window.KAIROS_SESSION?.sky?.weeklySequence)
                  ? window.KAIROS_SESSION.sky.weeklySequence
                  : await window.transit_engine.getWeeklySequence(ascSign);

                // [v650.5.13] Usar el contexto unificado extendido
                const weeklyShadowContext = {
                    ...sc,
                    weekly_context: {
                        moon_sequence: moonSequence  // Datos reales de los 7 días
                    },
                    request_context: { view: 'weekly' }
                };

                const response = await window.interpreter_engine.processRequest(weeklyShadowContext);
                if (response && response.content) {
                    state.cache.interpretations['weekly'] = response.content;
                    if (state.currentTab === 'weekly') {
                        renderWeeklyNarrative(response.content, state.lang);
                    }
                }
            } catch (e) {
                console.error('[KAIROS WEEKLY] Error en motor semanal:', e);
            }
        })();
    }
  }
  
  if (tabId === 'daily' && (state.subscription?.level ?? 0) > 0 && state.user?.natalPlanets) {
      renderPremiumActivations();
  }
  
  if (tabId === 'contact') {
      loadSyncHistory();
  }

  } catch (renderError) {
    console.error("❌ Error constructing tab HTML:", renderError);
    content.innerHTML = `<div class='p-10 text-center text-primary opacity-50 italic'>Recalibrando motor de visualización... [${tabId}]</div>`;
  }

  console.log("🏁 END renderTabContent");
}

async function loadSyncHistory() {
    if (!state.user || !state.user.uid) return;
    
    const container = document.getElementById('history-patterns-list');
    if (!container) return;

    try {
        const snapshot = await db.collection('users').doc(state.user.uid)
            .collection('journal')
            .orderBy('timestamp', 'desc')
            .limit(20)
            .get();

        const entries = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            // Fallback for older entries
            if (!data.radarStatus) data.radarStatus = 'neutral';
            entries.push(data);
        });

        const analysis = history_engine.analyzeJournal(entries, state.lang);
        
        if (!analysis.ready) {
            container.innerHTML = `
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-[11px] text-warm-grey/60 text-center">
                    ${analysis.message}
                </div>
            `;
            return;
        }

        container.innerHTML = analysis.patterns.map(p => `
            <div class="flex gap-4 items-start p-4 bg-primary/5 rounded-2xl border border-primary/10">
                <span class="material-symbols-outlined text-primary text-sm mt-0.5">insights</span>
                <p class="text-[11px] font-medium text-warm-grey/80 leading-relaxed italic">"${p}"</p>
            </div>
        `).join('');

    } catch (e) {
        console.error("History load error:", e);
        container.innerHTML = `<p class="text-[10px] text-red-500 italic">Error cargando historial.</p>`;
    }
}

async function renderPremiumActivations() {
    const container = document.getElementById('natal-activations-container');
    if (!container) return;
    
    try {
        const activations = await transit_engine.getNatalActivations(state.user.natalPlanets, state.user.natalHouses, window.Astronomy.MakeTime(new Date()), state.lang);
        if (activations.length === 0) {
            container.innerHTML = `<p class="text-[11px] italic opacity-80">No hay activaciones mayores hoy. El cielo está en calma sobre tu mapa natal.</p>`;
            return;
        }
        
        container.innerHTML = activations.map(a => `
            <div class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/5">
                <span class="text-xs">${a.type === 'HOUSE' ? '🏠' : '✨'}</span>
                <p class="text-[11px] font-medium leading-relaxed">${a.desc}</p>
            </div>
        `).join('');
    } catch (e) {
        console.error("Premium activations error:", e);
    }
}

async function saveJournalEntry() {
    const energy = document.getElementById('journal-energy').value;
    const emotions = document.getElementById('journal-emotions').value;
    const decisions = document.getElementById('journal-decisions').value;
    const btn = document.getElementById('btn-save-journal');

    if (!state.user || !state.user.uid) {
        alert("Debes iniciar sesión para usar el Diario.");
        return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const originalText = btn.innerText;
    btn.innerText = "...";
    btn.disabled = true;

    try {
        await db.collection('users').doc(state.user.uid).collection('journal').doc(todayStr).set({
            energy: parseInt(energy),
            emotions: emotions,
            decisions: decisions,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            currentMoon: window.CURRENT_TRANSITS?.Luna || 'Desconocida',
            radarStatus: state.momentRadar?.status || 'neutral',
            radarScore: state.momentRadar?.score || 50,
            engineVersion: 48.3
        });
        
        btn.innerText = TRANSLATIONS[state.lang].journalSuccess;
        btn.classList.add('bg-green-500');
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('bg-green-500');
            btn.disabled = false;
        }, 3000);
    } catch (e) {
        console.error("Journal save error:", e);
        alert("Error al guardar en el diario.");
        btn.innerText = originalText;
        btn.disabled = false;
    }
}

const KAIROS_GUIDE = {
  annual: {
    'annual-portal': {
      title: "Portal del Año",
      content: "Esta sección describe la atmósfera general de tu año. El 'Eje' es el aprendizaje central que marca tu evolución, mientras que el 'Escenario' señala el ámbito de vida donde esta energía se manifestará con más fuerza.\n\nÚsalo como un recordatorio del propósito de fondo. Cuando te sientas perdido, vuelve aquí para recordar qué estás aprendiendo realmente más allá de los eventos cotidianos."
    },
    'annual-life-guide': {
      title: "Guía de Vida",
      content: "El Señor del Año es el planeta que lidera tu proceso durante estos 12 meses. Representa una función de tu psique que necesita ser integrada y el 'personaje' interno que toma las riendas para guiarte.\n\nObserva su tono y su petición. No es solo información técnica, sino una invitación a encarnar esa energía específica para navegar el ciclo con mayor conciencia y maestría."
    },
    'annual-triplete': {
      title: "Tres Claves",
      content: "Aquí desglosamos tu año en tres pilares: Clima (la atmósfera emocional), Dirección (hacia dónde enfocar tu voluntad) y Cuidado (lo que necesitas proteger para no desequilibrarte).\n\nEstas claves son tu brújula estratégica. Consúltalas antes de tomar decisiones importantes para asegurar que tus acciones están alineadas con la corriente natural de tu ciclo actual."
    },
    'annual-base-cycle': {
      title: "Base del Ciclo",
      content: "Muestra los cimientos técnicos de tu año: la Profección (el signo y la casa que se activan por tiempo) y el Señor del Año. Es la raíz astronómica de donde brota toda tu narrativa anual.\n\nAunque parece información técnica, es el mapa de tu 'terreno' actual. Te permite entender exactamente qué partes de tu carta natal están bajo el foco de atención ahora mismo."
    },
    'annual-cycle-route': {
      title: "Ruta del Ciclo",
      content: "Es la representación visual de tu camino evolutivo este año. Conecta tu identidad base (Ascendente) con el escenario activado y culmina en la energía del Señor del Año.\n\nEste indicador te ayuda a ver tu año como un proceso dinámico y no como algo estático. Es el puente entre quién eres por naturaleza y quién estás llamado a ser durante este ciclo."
    },
    'annual-premium-depth': {
      title: "Tu año en profundidad",
      content: "Esta sección profundiza el diseño de tu año a través de cuatro bloques de análisis astrológico y psicológico.\n\nTU SEÑOR NATAL\n\nAquí se muestra cómo actúa tu energía guía desde su posición natal original. El signo y la casa donde vive tu planeta regente describen la forma particular en que enfrentas los procesos importantes del ciclo. No habla de un planeta genérico, sino de cómo funciona tu impulso real dentro de tu propia carta.\n\nLO QUE ACTIVA ESTE AÑO\n\nEste bloque muestra qué parte de tu vida entra en movimiento durante este ciclo anual y cuál es el tono específico del proceso. La casa profectada señala el escenario principal donde se concentra la experiencia del año, mientras que su signo describe cómo se vive emocional y psicológicamente ese movimiento.\n\nCÓMO SE MUEVE AHORA\n\nAquí se traduce el movimiento actual del cielo sobre tu carta natal. Los tránsitos de tu planeta guía muestran qué energía está activa en este momento concreto, qué procesos internos se están moviendo y hacia dónde conviene dirigir la atención ahora.\n\nCUÁNDO PRESTAR MÁS ATENCIÓN\n\nCada planeta tiene ritmos y momentos del año donde su energía se vuelve más visible o intensa. Este bloque ayuda a identificar las etapas donde conviene avanzar, sostener, revisar o simplemente observar con más conciencia el proceso que estás atravesando."
    }
  },
  daily: {
    'daily-portal': {
      title: "Portal de Hoy",
      content: "Esta sección combina la Luna actual con el planeta que rige el día de la semana. Describe el 'tono' emocional inmediato y la frecuencia sobre la que se mueve la jornada.\n\nÚsala para sintonizar con el ritmo colectivo. Te ayuda a entender por qué el ambiente se siente de cierta manera y cómo navegar esa ola sin resistencia."
    },
    'daily-scenario': {
      title: "Guía para hoy",
      content: "Esta guía combina la Luna de hoy, el planeta del día y tu ciclo anual para orientarte en el momento presente.\n\nNo predice lo que va a pasar. Te ayuda a reconocer qué energía está más activa hoy y cómo moverte dentro de ella con más claridad.\n\nLa casa y el Señor del Año muestran el fondo del ciclo. La Luna y el planeta del día muestran cómo ese fondo se mueve hoy."
    },
    'daily-narrative': {
      title: "Pulso del Momento",
      content: "Es la síntesis narrativa que une el clima astrológico con tu realidad personal. Traduce los tránsitos complejos a una guía directa y poética para tu conciencia.\n\nLee este mensaje como una brújula para tu estado interno. No busca predecir eventos, sino ofrecerte una perspectiva que te permita habitar el presente con mayor claridad y calma."
    },
    'daily-triplet': {
      title: "Clima · Dirección · Cuidado",
      content: "Tres ángulos del mismo momento:\n\nClima — el tono emocional activo ahora. Lo que el entorno y tu estado interno están generando. No se controla, se reconoce.\n\nDirección — hacia dónde conviene mover la energía hoy. No es una orden: es una orientación. El tipo de acción que tiene más posibilidad de fluir.\n\nCuidado — lo que puede desregularte o dispersarte hoy. No para evitar la vida, sino para no gastar energía en la dirección equivocada."
    },
    'daily-resonance': {
      title: "Resonancia Personal",
      content: "Esta es la capa más profunda, donde el cielo de hoy toca directamente tu mapa natal. Describe cómo resuena tu identidad única con la frecuencia del momento.\n\nEs la parte más privada y específica de la guía. Te explica por qué este día puede sentirse diferente para ti que para los demás, basándose en la configuración exacta de tus planetas natales."
    }
  },
  weekly: {
    'weekly-header-label': {
      title: "Portal de la Semana",
      content: "El Portal Semanal establece el tono dominante de estos siete días. El 'Verbo' principal resume la acción necesaria para fluir con el ritmo colectivo actual.\n\nObserva este portal como la puerta de entrada a tu semana. Te ayuda a mentalizarte sobre el tipo de energía que estará disponible para tus proyectos y relaciones."
    },
    'weekly-chart-section': {
      title: "La curva de la semana",
      content: "La curva muestra cómo se distribuye el peso del arco semanal de lunes a domingo. No hay días buenos ni días malos — hay días con más apertura, días con más densidad, y días de aterrizaje.\n\nEl punto más marcado señala cuándo el ritmo alcanza su máxima resonancia personal. Los días más atenuados ya pasaron."
    },
    'weekly-movement-section': {
      title: "Cómo se mueve la semana",
      content: "Esta sección divide la semana en tres momentos: Arranque, Centro y Cierre. No son predicciones separadas, sino fases de un mismo movimiento interno.\n\nEl Arranque muestra cómo entra la energía. El Centro señala dónde aparece el giro o la mayor intensidad. El Cierre ayuda a integrar lo vivido antes de pasar al siguiente ciclo."
    },
    'weekly-tramo-0': {
      title: "Arranque Semanal",
      content: "Representa el pulso con el que entras en la semana. Define el tono inicial y marca el punto de partida desde donde conviene empezar a mover tu energía.\n\nObserva este inicio no como una meta, sino como la sintonía necesaria para que el resto de los días fluyan con coherencia y propósito."
    },
    'weekly-tramo-1': {
      title: "Centro Semanal",
      content: "Es el punto de mayor movimiento, giro o intensidad de tu semana. Aquí es donde los procesos suelen pedirte más presencia, capacidad de respuesta o un ajuste en la dirección.\n\nPresta atención a los cambios de ritmo en este tramo; es el momento ideal para integrar lo aprendido en el arranque y recalibrar antes de que el ciclo empiece a cerrar."
    },
    'weekly-tramo-2': {
      title: "Cierre Semanal",
      content: "Describe cómo se integra lo vivido durante el ciclo. Es el espacio para asimilar las experiencias, cosechar los aprendizajes y preparar el terreno para soltar lo que ya no es útil.\n\nHabita este cierre con calma. Te permite vaciar tu espacio interno para quedar listo y receptivo ante el siguiente portal que se abrirá el lunes."
    },
    // [v650.5.190] FASE-2B — Capas Contextuales Suaves: signos, casas, chips de tramo
    'weekly-chip-arranque': {
      title: "Inicio de semana",
      content: "El arranque de la semana es el momento de mayor apertura: el movimiento todavía no tiene dirección fija, y esa es exactamente su fuerza. Lo que se pone en marcha en estos días tiende a definir el tono de lo que sigue. No es el momento de estar listo — es el momento de ponerse en movimiento."
    },
    'weekly-chip-centro': {
      title: "Centro de semana",
      content: "El centro de la semana es donde el movimiento se asienta o se dispersa. Lo que arrancó ya tiene contexto: se puede ajustar, sostener o corregir. No hay urgencia de arrancar ni de cerrar — hay espacio para saber cómo está yendo lo que está en marcha."
    },
    'weekly-chip-cierre': {
      title: "Cierre de semana",
      content: "El cierre de la semana lleva el peso de lo que se movió. No es el momento de abrir frentes nuevos — es el momento de saber qué queda. Lo que esta semana activó, removió o aclaró puede asentarse aquí antes de que la siguiente empiece a pedir su propia dirección."
    },
    'weekly-chip-cambio-lunar': {
      title: "Cambio de signo lunar",
      content: "La Luna cambia de signo cada dos o tres días. Cada transición no es un evento externo — es un cambio en el fondo sobre el que todo sucede. Un cambio de temperatura en el clima de la semana."
    },
    'weekly-chip-anio': {
      title: "El Señor del Año",
      content: "El Señor del Año es el planeta que gobierna el ciclo de doce meses en curso, según la profección natal. No determina los días — da color y gravedad al año completo. Una cualidad de fondo que está presente en todo lo que ocurre durante ese período."
    },
    'weekly-sign-aries': {
      title: "Aries en el cielo",
      content: "Aries impulsa. Es la energía del primer movimiento: directa, sin rodeos, orientada hacia la salida antes que hacia la reflexión. Aries abre camino. No evalúa el terreno antes de pisar — lo pisa, y desde ahí construye la dirección."
    },
    'weekly-sign-tauro': {
      title: "Tauro en el cielo",
      content: "Tauro sostiene. Es la energía de la presencia física y el arraigo: hacer, terminar, tocar. Tauro no acelera — consolida. Su fuerza no está en la velocidad sino en la constancia: lo que Tauro sostiene, permanece."
    },
    'weekly-sign-geminis': {
      title: "Géminis en el cielo",
      content: "Géminis ramifica. Es la energía del intercambio y la multiplicación: comunicación, conexiones rápidas, ideas en movimiento paralelo. Géminis no cierra — circula. Su naturaleza no es la profundidad sino la anchura: conecta lo que de otro modo permanecería separado."
    },
    'weekly-sign-cancer': {
      title: "Cáncer en el cielo",
      content: "Cáncer interioriza. Es la energía de la receptividad y la memoria: cercanía, cuidado, lo familiar. Cáncer no avanza — protege. Su movimiento es hacia adentro, hacia lo que da seguridad, hacia lo que tiene historia propia."
    },
    'weekly-sign-leo': {
      title: "Leo en el cielo",
      content: "Leo proyecta. Es la energía de la expresión y la presencia: hacer algo que valga la pena, ocupar espacio, importar. Leo no se oculta — brilla. Su impulso es hacia afuera: crear, mostrar, recibir el reconocimiento de lo que se ha hecho."
    },
    'weekly-sign-virgo': {
      title: "Virgo en el cielo",
      content: "Virgo afina. Es la energía del criterio y el ajuste: exactitud, revisión, atención al detalle. Virgo no improvisa — discrimina. Su fuerza está en la capacidad de distinguir lo que funciona de lo que no, y de mejorar lo que ya está en marcha."
    },
    'weekly-sign-libra': {
      title: "Libra en el cielo",
      content: "Libra pondera. Es la energía del equilibrio y el acuerdo: pesar opciones, encontrar el punto justo, relacionar. Libra no decide en solitario — busca el otro. Su movimiento natural es hacia el encuentro, hacia donde dos perspectivas pueden coexistir."
    },
    'weekly-sign-escorpio': {
      title: "Escorpio en el cielo",
      content: "Escorpio profundiza. Es la energía de la transformación y la concentración: ir al fondo, dejar atrás, hacer espacio para lo nuevo. Escorpio no roza la superficie — la atraviesa. Su impulso es hacia lo que está debajo de lo visible."
    },
    'weekly-sign-sagitario': {
      title: "Sagitario en el cielo",
      content: "Sagitario expande. Es la energía de la amplitud y el sentido: exploración, visión larga, apertura hacia lo desconocido. Sagitario no se estrecha — se extiende. Su movimiento natural es hacia el horizonte: más lejos, más amplio, más lleno de significado."
    },
    'weekly-sign-capricornio': {
      title: "Capricornio en el cielo",
      content: "Capricornio estructura. Es la energía de la responsabilidad y la construcción: disciplina, criterio, consecuencias reales. Capricornio no improvisa — construye con intención. Su fuerza está en convertir el tiempo en algo duradero."
    },
    'weekly-sign-acuario': {
      title: "Acuario en el cielo",
      content: "Acuario desconecta del patrón. Es la energía de la ruptura y la perspectiva: pensamiento libre, originalidad, visión del conjunto. Acuario no reproduce — innova. Su impulso es alejarse lo suficiente del sistema para poder verlo desde afuera."
    },
    'weekly-sign-piscis': {
      title: "Piscis en el cielo",
      content: "Piscis disuelve los bordes. Es la energía de la porosidad y la intuición: fluir sin forzar, dejar que las formas encuentren su camino. Piscis no controla — permite. Su movimiento es hacia lo que se siente antes de saberse."
    },
    'weekly-house-1':  { title: "Casa 1 — El impulso propio",    content: "La Casa 1 es el territorio de la identidad inmediata: el arranque personal, la presencia propia, el primer movimiento hacia el mundo. Es el dominio de cómo uno se sostiene desde dentro y cómo aparece desde afuera." },
    'weekly-house-2':  { title: "Casa 2 — Los recursos",          content: "La Casa 2 es el territorio de los recursos propios: lo que se tiene, lo que vale, lo que sostiene la vida concreta. Dinero, energía, talentos, tiempo. Es el dominio de lo que se acumula, lo que se cuida y lo que se gasta." },
    'weekly-house-3':  { title: "Casa 3 — El intercambio cercano", content: "La Casa 3 es el territorio del intercambio cercano: comunicación, entorno inmediato, desplazamientos cortos, relaciones de proximidad. Es el dominio de las ideas que circulan, las palabras que conectan y los vínculos que se mantienen por la frecuencia." },
    'weekly-house-4':  { title: "Casa 4 — La raíz",               content: "La Casa 4 es el territorio del origen y el refugio: hogar, familia, historia personal, lo íntimo. Es el dominio de lo que da base — el suelo firme desde el que todo lo demás se construye y al que se vuelve cuando lo exterior falla." },
    'weekly-house-5':  { title: "Casa 5 — La expresión",          content: "La Casa 5 es el territorio de la expresión y el juego: creatividad, placer, lo que se hace por el gusto de hacerlo. Es el dominio de la vitalidad personal — lo que nace del centro de uno mismo sin necesitar justificación." },
    'weekly-house-6':  { title: "Casa 6 — El servicio y el cuerpo", content: "La Casa 6 es el territorio del trabajo cotidiano y los ritmos de vida: hábitos, salud, los procesos que sostienen el funcionamiento diario. Es el dominio de la atención a lo pequeño — la calidad de lo que se hace cada día, no de lo que se hace una vez." },
    'weekly-house-7':  { title: "Casa 7 — El vínculo",            content: "La Casa 7 es el territorio de las relaciones significativas: pareja, socios, colaboradores, el otro como espejo. Es el dominio del encuentro real — donde uno negocia, acuerda y descubre lo que solo aparece en presencia del otro." },
    'weekly-house-8':  { title: "Casa 8 — La transformación",     content: "La Casa 8 es el territorio de la transformación profunda: recursos compartidos, herencias, lo que cambia radicalmente y no vuelve atrás. Es el dominio de lo que se deja atrás — el espacio donde algo termina para que otra cosa tenga sitio." },
    'weekly-house-9':  { title: "Casa 9 — El horizonte",          content: "La Casa 9 es el territorio de la expansión y el sentido: viajes, filosofía, creencias, estudios que amplían la visión. Es el dominio de la búsqueda — de lo que no cabe en el entorno cotidiano y pide un horizonte más amplio." },
    'weekly-house-10': { title: "Casa 10 — La dirección pública",  content: "La Casa 10 es el territorio del rol social y la trayectoria: carrera, vocación, lo que se construye en el mundo visible. Es el dominio de la dirección pública — lo que se proyecta hacia afuera y la huella que se deja en el tiempo." },
    'weekly-house-11': { title: "Casa 11 — La red",               content: "La Casa 11 es el territorio del colectivo y los proyectos compartidos: amigos, grupos, visión de futuro común. Es el dominio de la pertenencia — el lugar que se ocupa dentro de algo más grande que uno mismo." },
    'weekly-house-12': { title: "Casa 12 — El retiro",            content: "La Casa 12 es el territorio de lo que está fuera del foco ordinario: lo inconsciente, el retiro, lo que se procesa sin palabras. Es el dominio de la quietud — lo que solo se aclara cuando se deja de empujar." }
  },
  monthly: {
    'monthly-portal-container': {
      title: "Portal del Mes",
      content: "MES muestra el proceso que se abre durante este período. No habla de una acción inmediata ni de una dirección anual completa: traduce el patrón que está tomando forma ahora.\n\nLéelo como un territorio temporal. El mes muestra qué tema pide atención, qué movimiento interno se repite y qué comprensión puede ayudarte a atravesarlo con más claridad."
    },
    'monthly-connection-box': {
      title: "Escenario Activo",
      content: "El escenario activo es el corazón del mes. Nombra el clima psicológico principal y la zona donde el proceso se vuelve más evidente.\n\nNo es una predicción. Es una forma de reconocer qué tipo de experiencia está organizando este tramo del año."
    },
    'monthly-hitos-section': {
      title: "Hitos del Ciclo",
      content: "Los hitos del ciclo muestran cómo se despliega el mes por fases. Cada hito señala una cualidad distinta: apertura, tensión, integración o cierre.\n\nNo tienes que vivirlos como fechas rígidas. Úsalos como señales para entender en qué parte del movimiento mensual estás."
    },
    'monthly-navigation-section': {
      title: "Navegación del Mes",
      content: "Esta sección te ayuda a orientarte dentro del mes. No añade más información: organiza el recorrido para que puedas leer el proceso con más claridad.\n\nÚsala como una brújula interna. Cuando el mes se sienta disperso, vuelve aquí para recordar qué parte del camino estás atravesando."
    },
    'monthly-wave-section': {
      title: "Onda de Energía",
      content: "La onda de energía muestra el movimiento emocional del mes. Algunas fases abren, otras tensan, otras piden integración.\n\nNo se trata de controlar el mes, sino de reconocer su ritmo. Cuando entiendes la onda, puedes dejar de pelearte con el proceso y empezar a acompañarlo."
    }
  }
};

window.kairosGuideObserver = null;

window.initKairosGuideDOM = function() {
  if (document.getElementById('kairos-guide-panel')) return;

  const overlay = document.createElement('div');
  overlay.id = 'kairos-guide-overlay';
  overlay.className = 'fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] hidden transition-opacity duration-300 opacity-0';
  overlay.onclick = closeKairosGuide;
  document.body.appendChild(overlay);

  const panel = document.createElement('div');
  panel.id = 'kairos-guide-panel';
  panel.className = 'fixed top-0 right-0 h-full w-[320px] bg-white shadow-2xl z-[9999] transform translate-x-full transition-transform duration-500 ease-out p-8 flex flex-col';
  panel.innerHTML = `
    <div class="flex justify-between items-center mb-8">
      <div class="flex items-center gap-2">
        <span style="font-size:10px;color:rgba(180,160,120,0.65);">✦</span>
        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60">Guía KAIROS</span>
      </div>
      <button onclick="closeKairosGuide()" class="p-2 hover:bg-slate-50 rounded-full transition-colors">
        <svg viewBox="0 0 24 24" class="w-4 h-4 text-warm-grey" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/></button>
    </div>
    <div id="kairos-guide-content" class="flex-1 overflow-y-auto pr-2 custom-scrollbar">
      <h3 id="kairos-guide-title" class="text-2xl font-black text-primary mb-4 tracking-tighter">Tu Guía Anual</h3>
      <div id="kairos-guide-body" class="text-sm leading-relaxed text-warm-grey/80 space-y-4">
        Selecciona una sección o desplázate para ver información detallada.
      </div>
    </div>
  `;
  document.body.appendChild(panel);

  const btn = document.createElement('button');
  btn.id = 'kairos-guide-btn';
  btn.className = 'fixed bottom-[84px] left-[24px] z-50 w-14 h-14 rounded-full bg-white/85 border border-[rgba(180,160,120,0.18)] shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 hidden';
  btn.style.opacity = '0.32';
  btn.style.filter = 'blur(0.35px)';
  btn.innerHTML = `
    <img 
      src="logo_kairos.png" 
      alt="KAIROS" 
      class="w-8 h-8 object-contain rounded-full"
      style="display:block;"
    />
  `;
  btn.onclick = openKairosGuide;
  btn.onmouseenter = () => {
    btn.style.opacity = '1';
    btn.style.filter = 'none';
  };
  btn.onmouseleave = () => {
    const panel = document.getElementById('kairos-guide-panel');
    if (panel && panel.style.transform === 'translateX(0%)' || panel.style.transform === 'translateX(0px)') return;
    btn.style.opacity = '0.32';
    btn.style.filter = 'blur(0.35px)';
  };
  document.body.appendChild(btn);
};

window.openKairosGuide = function() {
  const panel = document.getElementById('kairos-guide-panel');
  const overlay = document.getElementById('kairos-guide-overlay');
  const btn = document.getElementById('kairos-guide-btn');
  if (panel && overlay) {
    overlay.classList.remove('hidden');
    if (btn) {
      btn.style.opacity = '1';
      btn.style.filter = 'none';
    }
    setTimeout(() => {
      overlay.style.opacity = '1';
      panel.style.transform = 'translateX(0)';
    }, 10);
  }
};

window.closeKairosGuide = function() {
  const panel = document.getElementById('kairos-guide-panel');
  const overlay = document.getElementById('kairos-guide-overlay');
  const btn = document.getElementById('kairos-guide-btn');
  if (panel && overlay) {
    panel.style.transform = 'translateX(100%)';
    overlay.style.opacity = '0';
    if (btn) {
      btn.style.opacity = '0.32';
      btn.style.filter = 'blur(0.35px)';
    }
    setTimeout(() => overlay.classList.add('hidden'), 500);
  }
};

window.updateKairosGuideContent = function(sectionId) {
  const currentTab = state.currentTab || 'annual';
  const guideData = KAIROS_GUIDE[currentTab] ? KAIROS_GUIDE[currentTab][sectionId] : null;
  if (!guideData) return;

  const titleEl = document.getElementById('kairos-guide-title');
  const bodyEl = document.getElementById('kairos-guide-body');
  
  if (titleEl && bodyEl) {
    // Actualizar título general según tab si es necesario
    if (currentTab === 'annual') titleEl.innerText = "Tu Guía Anual";
    else if (currentTab === 'daily') titleEl.innerText = "Tu Guía Diaria";
    else if (currentTab === 'weekly') titleEl.innerText = "Tu Guía Semanal";

    // Luego poner el título de la sección específica
    titleEl.innerText = guideData.title;

    // Dividir en párrafos por el doble salto de línea
    const paragraphs = guideData.content.split('\n\n');
    bodyEl.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  highlightKairosGuideSection(sectionId);
};

// Abre el panel KAIROS y carga el contenido de la sección.
// Usar SOLO en onclicks explícitos (chips) — nunca en observers automáticos.
window.openKairosGuideWithContent = function(sectionId) {
  openKairosGuide();
  updateKairosGuideContent(sectionId);
};

window.highlightKairosGuideSection = function(sectionId) {
  // En SEMANA no se aplica highlight visual sobre ninguna sección
  if (state.currentTab === 'weekly') return;
  // Limpiar todos los posibles highlights de cualquier sección de la guía dinámicamente
  Object.keys(KAIROS_GUIDE).forEach(tabKey => {
    Object.keys(KAIROS_GUIDE[tabKey]).forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.style.outline = 'none';
        el.style.boxShadow = 'none';
        el.classList.remove('ring-1', 'ring-primary/20', 'bg-primary/[0.03]', 'transition-all', 'duration-500');
      }
    });
  });

  const el = document.getElementById(sectionId);
  if (!el) return;

  el.classList.add('transition-all', 'duration-500');
  
  const isDark = el.className.includes('slate') || 
                 el.className.includes('bg-slate') || 
                 el.className.includes('bg-[#0') || 
                 el.className.includes('bg-black') || 
                 el.className.includes('bg-warm-grey');

  if (isDark) {
    el.style.outline = '2px solid rgba(247,244,238,0.55)';
    el.style.boxShadow = '0 0 0 6px rgba(247,244,238,0.10), 0 14px 32px rgba(0,0,0,0.18)';
  } else {
    el.style.outline = '2px solid rgba(180,160,120,0.45)';
    el.style.boxShadow = '0 0 0 6px rgba(180,160,120,0.08), 0 14px 32px rgba(180,160,120,0.05)';
  }
};

window.updateKairosGuideVisibility = function() {
  const btn = document.getElementById('kairos-guide-btn');
  if (!btn) return;

  if (state.currentTab === 'annual' || state.currentTab === 'daily' || state.currentTab === 'weekly' || state.currentTab === 'monthly') {
    btn.classList.remove('hidden');
    initKairosGuideObserver(state.currentTab);
  } else {
    btn.classList.add('hidden');
    if (window.kairosGuideObserver) {
      window.kairosGuideObserver.disconnect();
      window.kairosGuideObserver = null;
    }
  }
};

window.initKairosGuideObserver = function(tabId) {
  if (window.kairosGuideObserver) {
    window.kairosGuideObserver.disconnect();
  }

  const sections = Object.keys(KAIROS_GUIDE[tabId] || {});
  const options = { threshold: 0.5 };

  window.kairosGuideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateKairosGuideContent(entry.target.id);
      }
    });
  }, options);

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) window.kairosGuideObserver.observe(el);
  });
};

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
window.KAIROS_ICONS = KAIROS_ICONS;


window.toggleAgeEdit = () => {
  const display = document.getElementById('display-age').parentElement;
  const edit = document.getElementById('edit-age-container');
  if (edit.classList.contains('hidden')) {
    display.classList.add('hidden');
    edit.classList.remove('hidden');
    document.getElementById('input-edit-age').focus();
  } else {
    display.classList.remove('hidden');
    edit.classList.add('hidden');
  }
};

window.saveAge = () => {
  const newAge = document.getElementById('input-edit-age').value;
  if (!newAge || newAge < 0) return;

  state.user.age = parseInt(newAge);
  saveUserProfile();
  setTab('annual'); // Re-render
};

window.changeAge = (delta) => {
  state.user.age = Math.max(0, state.user.age + delta);
  saveUserProfile();
  setTab('annual');
};

window.recalibrateEngine = () => {
  if (typeof Astronomy === 'undefined' || typeof luxon === 'undefined') return;
  const u = state.user;
  if (!u.birthYear) return;
  const [bh, bmin] = u.birthTime.split(':').map(Number);
  const tzRecal = u.birthTimeZone || (u.birthLng < -10 ? 'America/Bogota' : 'Europe/Madrid');
  const newOff = getOffsetAtDate(u.birthYear, u.birthMonth, u.birthDay, bh, bmin, tzRecal, u.birthLng);
  const newAsc = calculateAscendant(u.birthYear, u.birthMonth, u.birthDay, u.birthTime, u.birthLat, u.birthLng, newOff);

  if (!newAsc || newAsc.error) {
     alert("Error en recalibración. Datos inválidos.");
     return;
  }

  state.lastDiagnostic = newAsc.diagnostic;
  state.user.birthUtcOffset = newOff;
  state.user.asc = newAsc.sign;
  state.user.ascDeg = newAsc.deg;
  state.user.ascMin = newAsc.min;
  state.user.engineVersion = 48.3;
  saveUserProfile();
  console.log("♻️ ENGINE RESET: Sincronizada.");
  setTab('carta'); // Refresh view
  console.log("♻️ Recalibración Forzada V48.0 Exitosa.");
};

// v50.1.7: DOMContentLoaded is faster and safer than 'load'
document.addEventListener("DOMContentLoaded", function() {
  console.log("🔎 INITIALIZING KAIROS SHELL REBUILD (v50.1.7 UNBLOCK PROACTIVE)...");
  initApp().catch(e => {
      console.error("⛔ CRITICAL initApp CRASH:", e);
      const errTxt = document.getElementById('bootstrap-errorText');
      if (errTxt) errTxt.innerText = "Error en el arranque: " + e.message;
      const errEl = document.getElementById('bootstrap-error');
      if (errEl) errEl.classList.remove('hidden');
  });
});

// [AÑO_PREMIUM] Bloque premium de profundidad anual
async function renderAnnualPremiumBlock(lordOriginal, profection, lang) {
    const container = document.getElementById('annual-premium-container');
    if (!container) return;

    const isInternalUser = window.KAIROS_FLAGS.INTERNAL_AUTH_EMAILS.includes(state.user?.email || '');
    const isPremiumActive = window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE || isInternalUser || window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG;

    const LOCK_SVG = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b8a070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
    const LOCK_SM = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;

    // Glyphs KAIROS — misma utilidad que renderMonthlyPremiumBlock
    const _glyphA = (type, key, sz) => {
        try {
            if (!window.getKairosSymbol) return '';
            const path = window.getKairosSymbol(type, key);
            if (!path) return '';
            return `<svg viewBox="0 0 100 100" width="${sz||13}" height="${sz||13}" style="display:inline-block;vertical-align:-2px;margin:0 2px 0 1px;opacity:0.7" stroke="currentColor" stroke-width="8" fill="none" aria-hidden="true">${path}</svg>`;
        } catch(e) { return ''; }
    };
    const _pgA = (name, sz) => _glyphA('planets', name, sz);
    const _sgA = (name, sz) => _glyphA('zodiac', name, sz);

    // Estilos — cada bloque es una tarjeta independiente (patrón MES/HOY/SEMANA)
    const CARD = `background:rgba(247,244,238,0.6);border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.20);margin-bottom:12px`;
    const LBL  = `font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;display:block;margin-bottom:8px`;
    const TXT  = `font-size:13px;color:#4a3f2a;line-height:1.65;margin:0`;
    const TXT2 = `font-size:13px;color:rgba(74,63,42,0.65);line-height:1.65;margin:8px 0 0`;

    // Estado FREE — 4 tarjetas bloqueadas independientes · layout centrado como HOY/SEMANA
    // Los datos astrológicos (signo, casa) aparecen solo en estado PREMIUM desbloqueado
    if (!isPremiumActive) {
        const _locked = (title, teaser) => `
            <div style="${CARD};text-align:center">
                <div style="display:flex;justify-content:center;align-items:center;gap:6px;margin-bottom:10px">
                    <span style="${LBL};margin:0">${title}</span>
                    <div style="opacity:0.6;flex-shrink:0">${LOCK_SVG}</div>
                </div>
                <p style="font-size:13px;color:rgba(80,65,40,0.55);line-height:1.65;margin:0 auto 18px;max-width:280px">${teaser}</p>
                <div style="text-align:center">
                    <button onclick="window._kairosPremiumCTA&&window._kairosPremiumCTA()" style="background:transparent;border:0.5px solid #d7c188;border-radius:10px;padding:11px 20px;color:#d7c188;font-size:12px;letter-spacing:0.06em;cursor:default;display:inline-flex;align-items:center;gap:8px;opacity:0.6">${LOCK_SM} Seguir profundizando</button>
                </div>
            </div>`;
        container.innerHTML =
            _locked('Tu energía guía',
                `Cómo opera tu ${lordOriginal} natal desde su configuración específica — qué cualidad define cómo gobierna este ciclo.`) +
            _locked('Lo que se activa este año',
                `Qué área de tu vida está bajo el foco de este ciclo y cómo el año la está modulando.`) +
            _locked('Cómo se mueve ahora',
                `El movimiento actual de tu ${lordOriginal} y lo que produce en este tramo del año.`) +
            _locked('Por qué este ciclo te afecta así',
                `La razón natal concreta — no genérica — por la que este año se expresa así en ti.`);
        return;
    }

    // --- PREMIUM: construir las 4 capas ---

    // A — Posición natal del señor
    const planetKeyMap = {
        'Sol': ['Sol', 'sol', 'sun', 'Sun'],
        'Luna': ['Luna', 'luna', 'moon', 'Moon'],
        'Marte': ['Marte', 'marte', 'mars', 'Mars'],
        'Mercurio': ['Mercurio', 'mercurio', 'mercury', 'Mercury'],
        'Júpiter': ['Júpiter', 'jupiter', 'Jupiter', 'júpiter'],
        'Venus': ['Venus', 'venus'],
        'Saturno': ['Saturno', 'saturno', 'saturn', 'Saturn']
    };
    // Normalizar la clave del señor para buscar en natalPlanets (mayúsculas sin acentos)
    const lordKey = lordOriginal.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    const natalLord = state.user?.natalPlanets?.[lordKey];
    const natalSign = natalLord?.sign || '—';
    let natalHouseNum = '';
    // Intento 1: calcular desde longitude_raw + cúspides de casas
    if (natalLord?.longitude_raw !== undefined && state.user?.houses?.length) {
        const lon = natalLord.longitude_raw;
        const cusps = state.user.houses.map(h => h.longitude);
        for (let i = 0; i < 11; i++) {
            const s = cusps[i], e = cusps[i+1];
            if ((s < e && lon >= s && lon < e) || (s >= e && (lon >= s || lon < e))) { natalHouseNum = i + 1; break; }
        }
        if (!natalHouseNum) natalHouseNum = 12;
    }
    // Intento 2: campo .house directo en el planeta natal
    if (!natalHouseNum && natalLord?.house) {
        natalHouseNum = parseInt(natalLord.house) || '';
    }
    // Intento 3: buscar en natal_context del shadow context
    if (!natalHouseNum) {
        const _scNatal = window.totalShadowContext?.natal_context?.planets || {};
        const _scLord = _scNatal[lordKey] || _scNatal[lordOriginal] || {};
        if (_scLord.house) natalHouseNum = parseInt(_scLord.house) || '';
    }

    // Dónde vive el señor (área de vida de la casa natal)
    // [AÑO_PREMIUM v3] CAPA A — Chispa + fusión planeta·signo·casa
    const HOUSE_CONTEXT = {
        1:'En Casa 1, esa energía opera directamente sobre ti — cómo te presentas, cómo te percibes, cómo el mundo te reconoce. Es la casa de la presencia más inmediata.',
        2:'En Casa 2, esa energía vive en los recursos y en lo que valoras — el cuerpo, el dinero, la estabilidad que necesitas para sentirte seguro. Lo material y lo corporal son el territorio.',
        3:'En Casa 3, esa energía vive en la mente y el entorno próximo — la forma en que piensas, cómo te comunicas, las personas e ideas que conforman tu tribu diaria.',
        4:'En Casa 4, esa energía vive en tus raíces — la vida interior, la historia familiar, los cimientos más privados de quién eres. Es el territorio más personal que existe.',
        5:'En Casa 5, esa energía vive en la expresión y el disfrute — la creatividad, el amor, los hijos, todo lo que te hace sentir vivo de verdad.',
        6:'En Casa 6, esa energía vive en el cuerpo y el trabajo cotidiano — los hábitos que te sostienen, la salud, el servicio que das y recibes día a día.',
        7:'En Casa 7, esa energía vive en los vínculos más significativos — la pareja, los socios, los espejos que más te revelan de ti mismo.',
        8:'En Casa 8, esa energía vive en la transformación — lo que se entrega, lo que se recibe, lo que muere y renace. El territorio de las profundidades.',
        9:'En Casa 9, esa energía vive en la búsqueda de sentido y de horizonte — los viajes, el conocimiento que transforma, las preguntas que cambian la forma de ver el mundo.',
        10:'En Casa 10, esa energía vive en la vocación y el lugar en el mundo — la dirección pública de tu vida, lo que construyes para ser reconocido y para contribuir.',
        11:'En Casa 11, esa energía vive en la red y el propósito colectivo — los amigos elegidos, los grupos, el futuro que imaginas y hacia el que trabajas.',
        12:'En Casa 12, esa energía vive en el interior más profundo — lo que se retira del mundo, el inconsciente, la dimensión espiritual y la integración silenciosa.'
    };

    // Texto planeta+signo con chispa (sin "Tu" inicial — más directo y narrativo)
    const LORD_SIGN_SPARK = {
        'Sol': {
            'Aries':'El Sol en Aries vive en el impulso. La identidad en ti se construye en la acción, no en la reflexión — el centro no duda, se lanza. Lo más genuino de quien eres aparece cuando decides sin esperar.',
            'Tauro':'El Sol en Tauro vive en lo tangible. La identidad en ti se construye en lo que puedes sostener — el cuerpo, los recursos, lo que es real y duradero. Lo más genuino de quien eres aparece cuando estás arraigado.',
            'Géminis':'El Sol en Géminis vive en la conexión. La identidad en ti se construye en el intercambio — entre ideas, entre personas, entre mundos. Lo más genuino de quien eres aparece cuando comunicas.',
            'Cáncer':'El Sol en Cáncer vive en el sentimiento. La identidad en ti se construye desde dentro hacia afuera — el centro es receptivo, protector, profundamente personal. Lo más genuino de quien eres aparece cuando cuidas.',
            'Leo':'El Sol en Leo vive en la expresión. La identidad en ti se construye cuando te muestras — no por ego, sino porque es la única forma en que eres completamente tú. Lo más genuino de quien eres aparece cuando das lo mejor de ti.',
            'Virgo':'El Sol en Virgo vive en el discernimiento. La identidad en ti se construye en la utilidad y la precisión — el centro sabe que el valor está en los detalles. Lo más genuino de quien eres aparece cuando mejoras algo.',
            'Libra':'El Sol en Libra vive en la relación. La identidad en ti se define en el espejo del otro — el centro busca el equilibrio, la armonía, el punto justo. Lo más genuino de quien eres aparece en el vínculo.',
            'Escorpio':'El Sol en Escorpio vive en la profundidad. La identidad en ti no se muestra fácilmente — el centro opera desde capas que la mayoría no ve. Lo más genuino de quien eres aparece en la transformación, en los momentos donde algo muere y algo nace.',
            'Sagitario':'El Sol en Sagitario vive en la búsqueda. La identidad en ti se construye en la expansión — el centro no se asienta, avanza. Lo más genuino de quien eres aparece cuando hay un horizonte hacia el que moverte.',
            'Capricornio':'El Sol en Capricornio vive en la construcción. La identidad en ti se asienta en lo que edificas — el centro es paciente, responsable, orientado al largo plazo. Lo más genuino de quien eres aparece en lo que sostienes con el tiempo.',
            'Acuario':'El Sol en Acuario vive en la diferencia. La identidad en ti se construye yendo más allá de lo establecido — el centro es independiente, visionario, mira más allá del consenso. Lo más genuino de quien eres aparece cuando piensas diferente.',
            'Piscis':'El Sol en Piscis vive en la permeabilidad. La identidad en ti es difusa y profunda a la vez — absorbe lo de los demás sin siempre saber qué es tuyo y qué no. Lo más genuino de quien eres aparece cuando sientes sin resistir, cuando te permites ser tocado.'
        },
        'Luna': {
            'Aries':'La Luna en Aries siente en impulsos. Las emociones en ti son directas y necesitan moverse — la seguridad interior se activa en la acción, no en la espera. Lo que sientes, lo expresas antes de procesarlo.',
            'Tauro':'La Luna en Tauro siente con el cuerpo. Las emociones en ti son lentas, profundas, buscan estabilidad — la seguridad interior se activa en lo que permanece. Necesitas sentir el suelo bajo los pies para sentirte bien.',
            'Géminis':'La Luna en Géminis siente a través del pensamiento. Las emociones en ti se procesan hablando, analizando, conectando — la seguridad interior se activa cuando comprendes lo que sientes, no solo cuando lo sientes.',
            'Cáncer':'La Luna en Cáncer siente todo, profundamente. Las emociones en ti son el centro de la experiencia — la seguridad interior se activa en el vínculo y el hogar. Eres permeable al estado de quienes te rodean.',
            'Leo':'La Luna en Leo siente a través del reconocimiento. Las emociones en ti necesitan expresarse y ser vistas — la seguridad interior se activa cuando puedes dar y recibir afecto libremente, sin disimulo.',
            'Virgo':'La Luna en Virgo siente a través del análisis. Las emociones en ti se procesan buscando utilidad y orden — la seguridad interior se activa cuando puedes ser útil y cuando el entorno tiene sentido.',
            'Libra':'La Luna en Libra siente en relación. Las emociones en ti necesitan armonía y reciprocidad — la seguridad interior se activa cuando los vínculos están en equilibrio. El conflicto abierto desregula.',
            'Escorpio':'La Luna en Escorpio siente en profundidad y silencio. Las emociones en ti son intensas, protegidas, raramente en la superficie — la seguridad interior se activa en la confianza real, no en la cercanía superficial.',
            'Sagitario':'La Luna en Sagitario siente a través de la libertad. Las emociones en ti necesitan espacio y significado — la seguridad interior se activa cuando hay horizonte y cuando lo que vives tiene sentido.',
            'Capricornio':'La Luna en Capricornio siente con contención. Las emociones en ti son profundas pero raramente visibles — la seguridad interior se activa en la estructura y el logro. Lo emocional se procesa, no se desborda.',
            'Acuario':'La Luna en Acuario siente desde la distancia. Las emociones en ti necesitan ser comprendidas antes de sentirse plenamente — la seguridad interior se activa en la libertad y en sentirte diferente de alguna manera.',
            'Piscis':'La Luna en Piscis siente todo sin filtro. Las emociones en ti son fluidas y empáticas — disuelven fronteras, absorben el estado de los demás. La seguridad interior se activa en la quietud, en los momentos donde el mundo externo desaparece.'
        },
        'Marte': {
            'Aries':'Marte en Aries actúa sin rodeos. La fuerza en ti es directa y pionera — no espera permiso ni momento ideal. El impulso busca el movimiento inmediato, la acción que nadie ha iniciado todavía.',
            'Tauro':'Marte en Tauro no irrumpe — persiste. La fuerza en ti es lenta y casi inamovible: una vez en marcha, nada la detiene fácilmente. El impulso construye, no conquista.',
            'Géminis':'Marte en Géminis actúa a través de la palabra y la mente. La fuerza en ti se despliega en múltiples frentes simultáneos — el impulso busca conexión y velocidad, no el objetivo único.',
            'Cáncer':'Marte en Cáncer actúa para proteger. La fuerza en ti es defensiva y movilizada por el vínculo más que por la ambición. El impulso no es visible — opera desde dentro, cuando algo que le importa está en juego.',
            'Leo':'Marte en Leo actúa con presencia. La fuerza en ti necesita ser reconocida — el impulso se activa cuando hay algo que defender con orgullo, algo que brillar con convicción.',
            'Virgo':'Marte en Virgo actúa con precisión. La fuerza en ti es analítica y meticulosa — el impulso no busca el espectáculo sino el resultado correcto, conseguido de la forma correcta.',
            'Libra':'Marte en Libra actúa en relación. La fuerza en ti necesita un contexto de sentido compartido para movilizarse — el impulso busca justicia y equilibrio, no dominio.',
            'Escorpio':'Marte en Escorpio actúa desde las profundidades. La fuerza en ti es estratégica, concentrada, invisible hasta que se necesita — y entonces, implacable. El impulso no se dispersa: se reserva para lo que realmente importa.',
            'Sagitario':'Marte en Sagitario actúa desde la convicción. La fuerza en ti es expansiva y filosófica — el impulso se enciende cuando hay una causa, una dirección, algo en lo que creer profundamente.',
            'Capricornio':'Marte en Capricornio actúa con estructura. La fuerza en ti es disciplinada y orientada al largo plazo — el impulso no necesita resultados inmediatos, sabe que construye para lo que dura.',
            'Acuario':'Marte en Acuario actúa desde la idea. La fuerza en ti es colectiva e innovadora — el impulso se moviliza cuando hay un sistema que transformar, no un adversario que vencer.',
            'Piscis':'Marte en Piscis no actúa desde el control sino desde la corriente. La fuerza en ti es intuitiva — no irrumpe, fluye. Cuando actúas desde ese Marte, no decides racionalmente: sientes el momento y te mueves cuando algo profundo te lo pide.'
        },
        'Venus': {
            'Aries':'Venus en Aries ama con urgencia. El deseo en ti es directo, apasionado, necesita respuesta — la conexión se activa en el impulso y la novedad. No esperas a que el amor llegue: vas hacia él.',
            'Tauro':'Venus en Tauro ama con los sentidos. El deseo en ti es profundo, sensorial, leal — la conexión se activa en la continuidad y el placer tangible. Amas lo que puedes tocar, oler, sostener.',
            'Géminis':'Venus en Géminis ama a través de la mente. El deseo en ti necesita conversación e intercambio — la conexión se activa en la chispa intelectual. Amas lo que te hace pensar.',
            'Cáncer':'Venus en Cáncer ama con todo el cuerpo emocional. El deseo en ti es profundo y protector, necesita seguridad para abrirse — la conexión se activa en el cuidado mutuo. Amas desde el hogar interior.',
            'Leo':'Venus en Leo ama con generosidad y expresión. El deseo en ti necesita ser celebrado — la conexión se activa cuando hay reconocimiento y creatividad compartida. Amas siendo visto.',
            'Virgo':'Venus en Virgo ama a través del servicio. El deseo en ti es discreto y selectivo, se expresa en los detalles precisos — la conexión se activa en el cuidado concreto, no en los grandes gestos.',
            'Libra':'Venus en Libra ama en armonía. El deseo en ti busca equilibrio y reciprocidad — la conexión se activa cuando todo está en su justo lugar. Amas la belleza del vínculo tanto como a la persona.',
            'Escorpio':'Venus en Escorpio ama en profundidad absoluta. El deseo en ti es intenso, exclusivo, transformador — la conexión se activa en la entrega total o no se activa. El amor superficial no alimenta.',
            'Sagitario':'Venus en Sagitario ama en libertad. El deseo en ti necesita espacio y significado compartido — la conexión se activa cuando hay un horizonte común. Amas lo que te expande.',
            'Capricornio':'Venus en Capricornio ama con responsabilidad. El deseo en ti es serio, comprometido, orientado al largo plazo — la conexión se activa en la lealtad construida con el tiempo. Amas lo que perdura.',
            'Acuario':'Venus en Acuario ama en la diferencia. El deseo en ti necesita libertad y originalidad — la conexión se activa en la amistad profunda y la visión compartida. Amas lo que te permite ser completamente tú.',
            'Piscis':'Venus en Piscis ama sin fronteras. El deseo en ti es empático y romántico, disuelve la separación — la conexión se activa en la compasión y el sueño compartido. Amas desde la totalidad, no desde la distancia.'
        },
        'Mercurio': {
            'Aries':'Mercurio en Aries piensa rápido. La mente en ti es directa y decisiva — llega a la conclusión antes que otros alcancen el principio. No necesita certeza para hablar: el pensamiento se activa en el movimiento.',
            'Tauro':'Mercurio en Tauro piensa despacio, pero profundo. La mente en ti necesita tiempo para procesar — una vez que concluye, es difícil moverla. Piensa a través de lo concreto, lo sensorial, lo que puede comprobarse.',
            'Géminis':'Mercurio en Géminis piensa en múltiples frentes a la vez. La mente en ti es ágil y curiosa, se mueve entre ideas con facilidad — el pensamiento se activa en la conexión entre cosas aparentemente no relacionadas.',
            'Cáncer':'Mercurio en Cáncer piensa con la memoria y el sentimiento. La mente en ti procesa a través de lo que ha vivido y de lo que siente — el pensamiento se activa cuando hay seguridad emocional en el entorno.',
            'Leo':'Mercurio en Leo piensa con narrativa. La mente en ti organiza la experiencia como una historia — el pensamiento se activa cuando puede ser expresado y compartido, cuando tiene una audiencia.',
            'Virgo':'Mercurio en Virgo piensa con precisión. La mente en ti analiza, discrimina, busca la exactitud — el pensamiento se activa en el detalle. Las ideas sueltas no satisfacen: necesitas que encajen.',
            'Libra':'Mercurio en Libra piensa en perspectivas. La mente en ti ve todos los ángulos antes de concluir — el pensamiento se activa en el diálogo. Necesitas el contrapunto para llegar a lo que realmente piensas.',
            'Escorpio':'Mercurio en Escorpio piensa en profundidad. La mente en ti va al fondo de todo, no acepta la superficie — el pensamiento se activa en la investigación y en la búsqueda de lo que se oculta. La verdad importa más que la comodidad.',
            'Sagitario':'Mercurio en Sagitario piensa en grandes marcos. La mente en ti conecta los datos con el sentido más amplio — el pensamiento se activa en la visión y la filosofía. No te interesan los detalles si no conectan con algo mayor.',
            'Capricornio':'Mercurio en Capricornio piensa con estructura. La mente en ti es pragmática y organizada — el pensamiento se activa cuando tiene un objetivo concreto. Piensas para construir, no solo para explorar.',
            'Acuario':'Mercurio en Acuario piensa diferente. La mente en ti es sistémica y original — el pensamiento se activa cuando puede ir más allá del consenso, cuando hay algo establecido que cuestionar o reformular.',
            'Piscis':'Mercurio en Piscis piensa de forma no lineal. La mente en ti opera con imágenes, sensaciones e intuiciones más que con lógica secuencial — el pensamiento se activa en la evocación. A veces sabes antes de saber por qué.'
        },
        'Júpiter': {
            'Aries':'Júpiter en Aries expande a través de la acción. La confianza en ti se activa cuando te lanzas sin esperar garantías — la abundancia llega en movimiento, no en espera. El exceso de planificación frena lo que podría fluir.',
            'Tauro':'Júpiter en Tauro expande a través de la materia y la paciencia. La confianza en ti se activa cuando construyes despacio y disfrutas el proceso — la abundancia llega cuando valoras lo que ya tienes antes de pedir más.',
            'Géminis':'Júpiter en Géminis expande a través del conocimiento y la conexión. La confianza en ti se activa cuando aprendes y compartes — la abundancia llega a través de las ideas y de las personas que traen perspectivas nuevas.',
            'Cáncer':'Júpiter en Cáncer expande a través del vínculo y el hogar. La confianza en ti se activa cuando hay raíz y pertenencia — la abundancia llega cuando te sientes parte de algo, no cuando estás solo.',
            'Leo':'Júpiter en Leo expande a través de la expresión. La confianza en ti se activa cuando te muestras plenamente — la abundancia llega cuando eres generoso con lo que tienes para dar, sin retenerlo.',
            'Virgo':'Júpiter en Virgo expande a través del servicio y la precisión. La confianza en ti se activa cuando eres realmente útil — la abundancia llega cuando aplicas el discernimiento con disciplina.',
            'Libra':'Júpiter en Libra expande a través de la relación. La confianza en ti se activa en la colaboración y el vínculo equitativo — la abundancia llega a través del otro, no a pesar de él.',
            'Escorpio':'Júpiter en Escorpio expande a través de la profundidad. La confianza en ti se activa cuando te permites ir al fondo — la abundancia llega en los procesos de transformación, no en la superficie de las cosas.',
            'Sagitario':'Júpiter en Sagitario expande a través de la visión. La confianza en ti se activa cuando hay un horizonte que inspira — la abundancia llega en la búsqueda, no en la llegada. Necesitas creer en algo.',
            'Capricornio':'Júpiter en Capricornio expande a través de la estructura. La confianza en ti se activa cuando construyes con método y sostienes el esfuerzo — la abundancia llega en el largo plazo, no en el resultado inmediato.',
            'Acuario':'Júpiter en Acuario expande a través de lo colectivo. La confianza en ti se activa cuando contribuyes a algo más grande — la abundancia llega cuando las ideas conectan con una red que las amplifica.',
            'Piscis':'Júpiter en Piscis expande a través de la entrega. La confianza en ti se activa cuando confías en el flujo — la abundancia llega cuando sueltas el control y te permites ser llevado por lo que ya está moviéndose.'
        },
        'Saturno': {
            'Aries':'Saturno en Aries interroga el impulso. La energía de acción existe en ti, pero este planeta le pregunta: ¿actúas porque debes o porque quieres? La madurez llega cuando diriges esa fuerza sin suprimirla.',
            'Tauro':'Saturno en Tauro interroga la estabilidad. La relación con los recursos en ti no es fácil — este planeta enseña que el valor real no se acumula con prisa sino con constancia y tiempo.',
            'Géminis':'Saturno en Géminis interroga la coherencia. La mente en ti puede dispersarse — este planeta pide que lo que piensas, lo que dices y lo que haces formen una sola dirección con el tiempo.',
            'Cáncer':'Saturno en Cáncer interroga la vulnerabilidad. El reto en ti no es suprimirla — es integrarla. La madurez llega cuando el cuidado no se convierte en control, ni la emoción en una fortaleza.',
            'Leo':'Saturno en Leo interroga la necesidad de aprobación. La expresión en ti existe, pero este planeta pregunta: ¿brillas porque quieres, o porque necesitas que te vean? La madurez llega cuando ya no dependes del aplauso.',
            'Virgo':'Saturno en Virgo interroga el perfeccionismo. El estándar de excelencia en ti es real — este planeta pide discernir cuándo es suficiente. La madurez llega cuando la exigencia no se convierte en autocastigo.',
            'Libra':'Saturno en Libra interroga los compromisos. El equilibrio en ti es una búsqueda constante — este planeta pide honestidad en los vínculos, no solo armonía superficial. La madurez llega en la equidad real.',
            'Escorpio':'Saturno en Escorpio interroga el poder. La intensidad en ti es real — este planeta enseña a integrarla, no a temerla ni a abusar de ella. La madurez llega cuando la profundidad se convierte en sabiduría.',
            'Sagitario':'Saturno en Sagitario interroga la libertad. El horizonte en ti es necesario — pero este planeta pide que la libertad tenga forma: una visión a la que servir, no solo un horizonte que perseguir sin rumbo.',
            'Capricornio':'Saturno en Capricornio interroga la construcción. La disciplina en ti es real — este planeta la amplifica hasta el límite. La madurez llega cuando el logro deja de ser la única forma de validarse.',
            'Acuario':'Saturno en Acuario interroga las ideas. Las visiones en ti son genuinas — pero este planeta pide que dejen de ser rebelión y se conviertan en sistema. La madurez llega cuando la innovación tiene un plan.',
            'Piscis':'Saturno en Piscis interroga los límites. La compasión en ti es real — pero este planeta enseña que sentir todo no significa cargarlo todo. La madurez llega cuando la empatía no disuelve sino que fortalece.'
        }
    };

    // Texto combinado A: spark + casa integrada
    const sparkText = (LORD_SIGN_SPARK[lordOriginal] || {})[natalSign] || '';
    const houseString = HOUSE_CONTEXT[natalHouseNum] || '';

    // El dato astrológico (planeta + signo + casa) se integra con glifos en la apertura del texto
    // No aparece como subtítulo separado — forma parte de la narrativa del cuerpo
    let finalTextA = '';
    if (sparkText && natalHouseNum && houseString) {
        // Prefijo con glifos KAIROS integrados
        const _lordPfx = ['Sol', 'Luna'].includes(lordOriginal)
            ? `${lordOriginal === 'Sol' ? 'El Sol' : 'La Luna'} en ${natalSign}`
            : `${lordOriginal} en ${natalSign}`;
        const _glyphedPfx = ['Sol', 'Luna'].includes(lordOriginal)
            ? `${_pgA(lordOriginal)} ${lordOriginal === 'Sol' ? 'Sol' : 'Luna'} en ${_sgA(natalSign)} ${natalSign}`
            : `${_pgA(lordOriginal)} ${lordOriginal} en ${_sgA(natalSign)} ${natalSign}`;

        let integratedSpark = sparkText;
        if (integratedSpark.startsWith(_lordPfx)) {
            integratedSpark = integratedSpark.replace(_lordPfx, `${_glyphedPfx} en Casa ${natalHouseNum}`);
        }
        let integratedHouse = houseString.replace(new RegExp(`^En Casa ${natalHouseNum}, `), "Allí, ");
        finalTextA = `${integratedSpark} ${integratedHouse}`;
    } else if (sparkText) {
        finalTextA = `${_pgA(lordOriginal)}${sparkText} ${houseString}`;
    } else {
        finalTextA = `${_pgA(lordOriginal)}${lordOriginal} en ${_sgA(natalSign)}${natalSign}${natalHouseNum ? ` en Casa ${natalHouseNum}` : ''} opera desde una naturaleza particular que marca cómo actúa tu guía de ciclo este año. ${houseString}`;
    }

    const hasNatalSign = natalSign && natalSign !== '—';
    const _casaActivaA = profection?.activeHouse || '—';
    const labelAText = hasNatalSign
        ? `${_pgA(lordOriginal)}${lordOriginal} natal — ${_sgA(natalSign)}${natalSign}${natalHouseNum ? ` · Casa ${natalHouseNum}` : ''}${(_casaActivaA && _casaActivaA !== '—') ? ` → Casa ${_casaActivaA} activa` : ''}`
        : `${_pgA(lordOriginal)}${lordOriginal} natal`;

    // Cómo opera cada planeta como Señor del Año — segunda capa de A
    const _lordAnnualRole = {
        'Sol':      'Como Señor del Año, esa búsqueda de propósito y dirección se convierte en el marco del ciclo completo. El año te pide construir desde lo que realmente eres — no desde lo que crees que deberías ser. Cada decisión importante de este ciclo está siendo filtrada por esa pregunta: ¿esto me representa?',
        'Luna':     'Como Señora del Año, ese ritmo emocional se convierte en el pulso del ciclo. El año avanza cuando escuchas lo que sientes antes de decidir lo que haces. Las señales más importantes de este ciclo llegarán a través de lo que tu sistema emocional percibe antes de que la mente lo procese.',
        'Mercurio': 'Como Señor del Año, esa forma de procesar y comunicar se convierte en el motor del ciclo. El año avanza cuando hay claridad de pensamiento y se detiene cuando la mente se dispersa o se acelera demasiado. La palabra y la conexión son las herramientas del ciclo.',
        'Venus':    'Como Señora del Año, ese patrón de vinculación y valor se convierte en la guía del ciclo. El año te pide definir qué merece tu energía y qué no. Las decisiones más importantes de este ciclo tienen que ver con lo que eliges sostener, atraer o soltar.',
        'Marte':    'Como Señor del Año, ese impulso y esa forma de actuar se convierten en el motor del ciclo. El año avanza cuando actúas desde tu propio centro y se atasca cuando actúas desde la reacción o el agotamiento. La dirección importa más que la velocidad.',
        'Júpiter':  'Como Señor del Año, esa forma de crecer y confiar se convierte en el filtro de todo el ciclo. El año no te pide que fuerces la expansión — te pide que reconozcas cuándo llega sola. La confianza genuina, no el optimismo forzado, es la llave del ciclo.',
        'Saturno':  'Como Señor del Año, esa capacidad de construir y madurar se convierte en el eje del ciclo. El año no premia la velocidad — premia la consistencia. Lo que construyas este ciclo con paciencia real tendrá más peso que lo que intentes acelerar.'
    };
    const _roleTextA = _lordAnnualRole[lordOriginal] || '';

    // [v3.4-B] _lordFromHouse: calidad que aporta el señor desde su casa natal al año
    const _lordFromHouse = {
        'Sol': {
            1:'Desde Casa 1, el Sol opera desde el centro de la propia presencia. El propósito que lleva este año es inmediato y visible — la identidad se construye en lo que hace, no en lo que planifica. Lo que el ciclo activa llevará esa misma urgencia de dirección: el área profectada pedirá que te presentes y que tomes posición desde quien realmente eres.',
            2:'Desde Casa 2, el Sol opera a través de lo que valoras y lo que posees. El propósito que lleva este año tiene raíz tangible — la identidad se construye en la estabilidad y en lo que puede sostenerse con tiempo. Lo que el ciclo activa llevará esa misma solidez: el área profectada pedirá que la energía tenga peso real, no solo intención.',
            3:'Desde Casa 3, el Sol opera a través del intercambio y la conexión. El propósito que lleva este año se activa en la comunicación — la identidad se define en el vínculo con las ideas y con las personas del entorno próximo. Lo que el ciclo activa llevará esa misma calidad: el área profectada se moverá a través de lo que se nombra, se comparte y se conecta.',
            4:'Desde Casa 4, el Sol opera desde las raíces más personales. El propósito que lleva este año viene de lo más íntimo — la identidad se construye en la historia familiar, en los cimientos interiores, en lo que protege y da continuidad. Lo que el ciclo activa llevará esa misma profundidad: el área profectada tendrá más peso cuando conecte con lo que en ti es más privado y más duradero.',
            5:'Desde Casa 5, el Sol opera a través de la expresión y la creatividad. El propósito que lleva este año necesita mostrarse — la identidad se construye al crear, al disfrutar, al poner algo genuino en el mundo. Lo que el ciclo activa llevará esa vitalidad: el área profectada pedirá presencia real y la capacidad de hacer algo desde dentro hacia afuera.',
            6:'Desde Casa 6, el Sol opera a través del trabajo y el servicio cotidiano. El propósito que lleva este año se concreta en la utilidad — la identidad se construye en lo que hace bien, en lo que sirve, en la disciplina aplicada día a día. Lo que el ciclo activa llevará esa misma precisión: el área profectada se moverá mejor con método que con impulso.',
            7:'Desde Casa 7, el Sol opera a través del otro. El propósito que lleva este año se define en el vínculo — la identidad no se construye en soledad sino en el espejo que devuelve la relación. Lo que el ciclo activa llevará ese mismo carácter: el área profectada ganará forma y dirección en contacto con otros, no de forma aislada.',
            8:'Desde Casa 8, el Sol opera desde la transformación. El propósito que lleva este año viene de lo que ya se ha atravesado — la identidad se construye en los procesos que dejan huella, no en los que pasan sin dejar rastro. Lo que el ciclo activa llevará esa misma densidad: el área profectada pedirá que algo se entregue o se renueve de verdad.',
            9:'Desde Casa 9, el Sol opera a través de la búsqueda de sentido. El propósito que lleva este año necesita horizonte — la identidad se construye en la expansión, en el conocimiento que transforma la forma de ver. Lo que el ciclo activa llevará esa misma orientación: el área profectada pedirá que la energía sepa hacia qué sirve antes de moverse.',
            10:'Desde Casa 10, el Sol opera a través de la vocación y el lugar en el mundo. El propósito que lleva este año tiene peso público — la identidad se construye en lo que se edifica y en cómo se contribuye. Lo que el ciclo activa llevará esa misma orientación estructural: el área profectada pedirá que el proceso tenga dirección y forma reconocible.',
            11:'Desde Casa 11, el Sol opera a través de lo colectivo y la visión compartida. El propósito que lleva este año trasciende lo individual — la identidad se construye en la red, en la causa, en el futuro hacia el que se trabaja con otros. Lo que el ciclo activa llevará esa misma orientación: el área profectada tendrá más sentido cuando conecte con algo más amplio que uno mismo.',
            12:'Desde Casa 12, el Sol opera en las capas más interiores. El propósito que lleva este año no es visible ni inmediato — se construye en la integración silenciosa, en lo que se procesa antes de salir a la luz. Lo que el ciclo activa llevará esa misma calidad: el área profectada puede revelar cosas que estaban madurando sin hacerse notar.'
        },
        'Luna': {
            1:'Desde Casa 1, la Luna opera directamente sobre el cuerpo y la presencia. El campo emocional que lleva este año es inmediato e instintivo — lo que sientes se expresa antes de que lo proceses. Lo que el ciclo activa llevará esa misma reactividad: el área profectada se moverá según cómo estés emocionalmente en cada momento, no según un plan fijo.',
            2:'Desde Casa 2, la Luna opera a través de los recursos y la seguridad material. El campo emocional que lleva este año necesita base tangible — la estabilidad interior está ligada a lo que tienes y a lo que valoras. Lo que el ciclo activa llevará esa misma búsqueda de suelo firme: el área profectada tendrá más presencia cuando haya continuidad y algo concreto en lo que apoyarse.',
            3:'Desde Casa 3, la Luna opera a través de la mente y el entorno próximo. El campo emocional que lleva este año se regula en el intercambio — la seguridad interior llega a través de la comunicación y la conexión cotidiana. Lo que el ciclo activa se procesará de la misma manera: el área profectada se moverá mejor cuando haya diálogo y relación cercana.',
            4:'Desde Casa 4, la Luna opera desde sus raíces más profundas. El campo emocional que lleva este año tiene memoria — lo que sientes está ligado a la historia más personal, a lo que se formó en el origen. Lo que el ciclo activa llevará esa misma profundidad: el área profectada puede remover capas que van más atrás de lo que parece.',
            5:'Desde Casa 5, la Luna opera a través de la expresión y el disfrute. El campo emocional que lleva este año necesita espacio para mostrarse — la seguridad interior se activa cuando hay creatividad y cuando el mundo interior puede salir al exterior. Lo que el ciclo activa llevará esa misma vitalidad: el área profectada pedirá presencia genuina, no solo presencia funcional.',
            6:'Desde Casa 6, la Luna opera a través del cuerpo y el trabajo cotidiano. El campo emocional que lleva este año se regula en la rutina — la seguridad interior llega cuando hay algo concreto que cuidar o hacer bien. Lo que el ciclo activa llevará esa misma calidad práctica: el área profectada se moverá mejor con constancia que con intensidad puntual.',
            7:'Desde Casa 7, la Luna opera a través del vínculo. El campo emocional que lleva este año está ligado al estado de las relaciones — la seguridad interior fluctúa con la calidad del contacto con el otro. Lo que el ciclo activa llevará ese mismo carácter relacional: el área profectada tendrá más presencia emocional cuando haya reciprocidad real.',
            8:'Desde Casa 8, la Luna opera en las capas emocionales más profundas y menos visibles. El campo emocional que lleva este año es intenso y raramente en la superficie — lo que sientes de verdad llega después. Lo que el ciclo activa llevará esa misma densidad: el área profectada puede revelar procesos que estaban activos antes de hacerse notorios.',
            9:'Desde Casa 9, la Luna opera a través de la búsqueda de significado. El campo emocional que lleva este año necesita sentido — la seguridad interior llega cuando lo que vives conecta con algo más amplio que lo cotidiano. Lo que el ciclo activa llevará esa misma orientación: el área profectada tendrá más peso cuando puedas ver para qué sirve.',
            10:'Desde Casa 10, la Luna opera a través de la vocación y el lugar visible en el mundo. El campo emocional que lleva este año está ligado al reconocimiento — la seguridad interior fluctúa con cómo se percibe lo que construyes. Lo que el ciclo activa llevará esa misma necesidad de dirección: el área profectada se moverá mejor cuando haya una orientación clara.',
            11:'Desde Casa 11, la Luna opera a través del sentido de pertenencia colectiva. El campo emocional que lleva este año se regula en la red y en el propósito compartido — la seguridad interior llega cuando hay un grupo o una causa en la que el mundo interior encaja. Lo que el ciclo activa llevará esa misma orientación: el área profectada tendrá más resonancia cuando conecte con otros.',
            12:'Desde Casa 12, la Luna opera en el interior más silencioso. El campo emocional que lleva este año se procesa lejos de la superficie — hay capas que se mueven sin nombrarse. Lo que el ciclo activa llevará esa misma calidad de integración profunda: el área profectada puede moverse de formas que no siempre son visibles en el momento.'
        },
        'Marte': {
            1:'Desde Casa 1, Marte opera desde el centro mismo de la presencia. El impulso que gobierna este año es directo e inmediato — la fuerza aquí no necesita contexto ni preparación larga: es la energía de quien actúa porque así se define. Lo que el ciclo activa llevará esa misma urgencia: el área profectada se pondrá en movimiento desde la iniciativa personal, no desde la espera.',
            2:'Desde Casa 2, Marte opera a través de lo tangible. El impulso que gobierna este año busca resultados concretos — construir, sostener, ver fruto real. No es el Marte del movimiento por el movimiento: es el que avanza cuando hay algo real que ganar o proteger. Lo que el ciclo activa llevará ese mismo peso: el área profectada pedirá que la energía tenga forma, resultado, algo que pueda sostenerse.',
            3:'Desde Casa 3, Marte opera a través de la palabra y el pensamiento. El impulso que gobierna este año se activa en el intercambio, en la comunicación, en las conexiones del entorno próximo — la acción no es silenciosa, piensa en voz alta y conecta puntos. Lo que el ciclo activa se procesará de la misma forma: el área profectada se moverá a través del lenguaje, las ideas y la relación con lo cercano.',
            4:'Desde Casa 4, Marte opera desde las raíces. El impulso que gobierna este año viene de lo más personal — la historia que se lleva dentro, los cimientos de quién eres. No es un Marte visible ni ruidoso: actúa cuando algo que importa de verdad está en juego. Lo que el ciclo activa llevará esa misma intensidad interior: el área profectada se moverá desde lo que en ti es más privado y más hondo.',
            5:'Desde Casa 5, Marte opera a través de la expresión y el deseo. El impulso que gobierna este año tiene energía creativa — necesita crear, mostrar, sentir el placer de hacer algo desde cero. La fuerza aquí no es táctica sino vital, espontánea. Lo que el ciclo activa se moverá desde esa misma vitalidad: el área profectada pedirá presencia real, no solo esfuerzo.',
            6:'Desde Casa 6, Marte opera a través del trabajo sostenido. El impulso que gobierna este año no busca el golpe único sino la constancia aplicada día a día — la disciplina del cuerpo y el hábito como forma de fuerza real. Lo que el ciclo activa llevará esa misma calidad práctica: el área profectada no pedirá intensidad puntual sino presencia regular, pequeñas acciones acumuladas que construyen algo que dura.',
            7:'Desde Casa 7, Marte opera a través del vínculo. El impulso que gobierna este año no actúa en soledad: se activa en la relación, en el choque o la colaboración con el otro. La fuerza aquí busca o necesita un espejo — alguien que la confirme o que la desafíe. Lo que el ciclo activa llevará ese mismo carácter relacional: el área profectada se moverá en relación con otros, no de forma aislada.',
            8:'Desde Casa 8, el impulso que gobierna este año no opera en la superficie. Viene de lo que ya se ha transformado en ti — de los procesos que pasaron por el fuego y dejaron algo más denso. Lo que el ciclo mueve en el área activa lleva esa misma calidad: no es un movimiento ligero, sino uno que pide que algo se entregue o se renueve antes de poder avanzar.',
            9:'Desde Casa 9, Marte opera a través de la búsqueda y la dirección. El impulso que gobierna este año necesita horizonte — una causa, una visión, un sentido que justifique el movimiento. La fuerza aquí no se activa en lo pequeño o lo repetitivo: se enciende cuando hay algo en lo que creer. Lo que el ciclo activa llevará esa orientación: el área profectada pedirá que la energía sepa hacia dónde va antes de moverse.',
            10:'Desde Casa 10, Marte opera a través de la ambición y el lugar en el mundo. El impulso que gobierna este año tiene orientación pública — construir algo con peso, avanzar en dirección reconocible, dejar una huella real. La fuerza aquí tiene estructura y objetivo concreto. Lo que el ciclo activa llevará esa misma determinación: el área profectada pedirá que el esfuerzo tenga dirección y forma, no solo intención.',
            11:'Desde Casa 11, Marte opera a través de lo colectivo y la visión compartida. El impulso que gobierna este año no busca el logro individual — se activa en la red, en la causa, en lo que se construye con otros hacia algo que trasciende la ganancia personal. Lo que el ciclo activa llevará esa misma orientación: el área profectada se moverá mejor en colaboración que en soledad, y ganará peso cuando conecte con algo más grande que uno mismo.',
            12:'Desde Casa 12, Marte opera en silencio. El impulso que gobierna este año no es visible desde afuera — actúa en las capas que no se nombran fácilmente: lo que se procesa en soledad, lo que se acumula antes de salir a la luz. Esto no lo debilita, pero sí lo hace menos predecible: la energía del ciclo actúa desde dentro, y solo se hace evidente cuando ya ha tomado forma.'
        },
        'Mercurio': {
            1:'Desde Casa 1, Mercurio opera desde la presencia directa. La mente que lleva este año es rápida y orientada a la acción — el pensamiento no se queda en la teoría, busca aplicarse de inmediato. Lo que el ciclo activa llevará esa misma agilidad: el área profectada se moverá mejor cuando haya claridad mental y capacidad de decidir sin demora.',
            2:'Desde Casa 2, Mercurio opera a través de lo concreto y lo útil. La mente que lleva este año piensa en recursos, en valor, en lo que puede sostenerse. El pensamiento aquí no es abstracto: busca aplicación práctica y resultado tangible. Lo que el ciclo activa llevará esa misma solidez: el área profectada se moverá mejor cuando las ideas tengan forma real.',
            3:'Desde Casa 3, Mercurio opera en su territorio natural. La mente que lleva este año es ágil, curiosa y orientada al intercambio — el pensamiento se activa en la conexión con ideas y personas. Lo que el ciclo activa llevará esa misma vitalidad mental: el área profectada se moverá a través de la comunicación, el aprendizaje y la relación con el entorno próximo.',
            4:'Desde Casa 4, Mercurio opera desde la memoria y lo íntimo. La mente que lleva este año piensa a través de lo que ha vivido — el pensamiento está ligado a la historia personal y al mundo interior. Lo que el ciclo activa llevará esa misma profundidad reflexiva: el área profectada se procesará mejor cuando haya espacio para pensar sin presión externa.',
            5:'Desde Casa 5, Mercurio opera a través de la expresión y la creatividad. La mente que lleva este año piensa con narrativa — el pensamiento busca salida, forma, una audiencia. Las ideas no sirven si no se expresan. Lo que el ciclo activa llevará esa misma energía: el área profectada se moverá mejor cuando la mente pueda crear y mostrar lo que procesa.',
            6:'Desde Casa 6, Mercurio opera a través del análisis y la utilidad práctica. La mente que lleva este año es meticulosa y orientada al detalle — el pensamiento busca la mejora concreta, el proceso que funciona mejor. Lo que el ciclo activa llevará esa misma precisión: el área profectada se moverá mejor con método que con improvisación.',
            7:'Desde Casa 7, Mercurio opera a través del diálogo. La mente que lleva este año piensa en perspectivas — el pensamiento se activa en el intercambio con el otro, en el contrapunto, en la negociación. Lo que el ciclo activa llevará ese mismo carácter: el área profectada se procesará mejor en conversación que en soledad.',
            8:'Desde Casa 8, Mercurio opera en las profundidades. La mente que lleva este año no acepta la superficie — el pensamiento investiga, profundiza, busca lo que se oculta. Lo que el ciclo activa llevará esa misma intensidad cognitiva: el área profectada pedirá que la mente vaya más allá de la primera lectura para encontrar lo que realmente está en juego.',
            9:'Desde Casa 9, Mercurio opera a través del marco amplio. La mente que lleva este año conecta los datos con el sentido más grande — el pensamiento se activa en la visión y la filosofía. Lo que el ciclo activa llevará esa misma orientación: el área profectada se moverá mejor cuando haya un horizonte conceptual que dé dirección al proceso.',
            10:'Desde Casa 10, Mercurio opera a través de la estructura y el objetivo. La mente que lleva este año es pragmática y orientada al resultado — el pensamiento tiene un para qué. Lo que el ciclo activa llevará esa misma claridad funcional: el área profectada se moverá mejor cuando la mente sepa exactamente qué está construyendo.',
            11:'Desde Casa 11, Mercurio opera a través de lo colectivo y la innovación. La mente que lleva este año piensa en sistemas y en redes — el pensamiento se activa cuando puede ir más allá del guión establecido. Lo que el ciclo activa llevará esa misma originalidad: el área profectada ganará más cuando la mente conecte ideas con el potencial de lo que todavía no existe.',
            12:'Desde Casa 12, Mercurio opera en las capas menos lineales del pensamiento. La mente que lleva este año procesa de forma no secuencial — a través de imágenes, intuiciones y asociaciones que no siempre siguen una lógica visible. Lo que el ciclo activa llevará esa misma calidad: el área profectada puede revelarse más a través de la percepción que del análisis directo.'
        },
        'Venus': {
            1:'Desde Casa 1, Venus opera desde la presencia y la imagen personal. El patrón de valor y vinculación que lleva este año está ligado a cómo te percibes y cómo te presentas — la atracción es directa, instintiva. Lo que el ciclo activa llevará esa misma visibilidad: el área profectada se moverá según cuánto espacio te permites ocupar en ella.',
            2:'Desde Casa 2, Venus opera en su territorio natural de valor y recursos. El patrón de vinculación que lleva este año está ligado a lo que posees y a lo que consideras bello o valioso — la atracción es sensorial, leal, orientada a lo que dura. Lo que el ciclo activa llevará esa misma calidad: el área profectada pedirá que la energía sea genuina y sostenible, no de corta duración.',
            3:'Desde Casa 3, Venus opera a través de la palabra y el intercambio. El patrón de vinculación que lleva este año se activa en la comunicación — la atracción tiene componente intelectual y conversacional. Lo que el ciclo activa llevará esa misma calidad: el área profectada se moverá mejor cuando haya intercambio real, cuando las ideas y las palabras creen conexión.',
            4:'Desde Casa 4, Venus opera desde el hogar interior. El patrón de vinculación que lleva este año está ligado a los vínculos más íntimos y a la historia más personal — la atracción viene de lo que se siente como hogar. Lo que el ciclo activa llevará esa misma profundidad: el área profectada tendrá más presencia cuando conecte con lo que en ti es más privado y más duradero.',
            5:'Desde Casa 5, Venus opera a través de la creatividad y el disfrute. El patrón de vinculación que lleva este año necesita expresión y placer — la atracción es espontánea, generosa, orientada a disfrutar el proceso. Lo que el ciclo activa llevará esa misma vitalidad: el área profectada pedirá presencia auténtica, no solo esfuerzo.',
            6:'Desde Casa 6, Venus opera a través del servicio y el cuidado cotidiano. El patrón de vinculación que lleva este año se expresa en los detalles concretos — la atracción no es espectacular sino consistente, ligada a lo útil y lo bien hecho. Lo que el ciclo activa llevará esa misma calidad: el área profectada se moverá mejor con cuidado regular que con gestos puntuales.',
            7:'Desde Casa 7, Venus opera en su territorio natural de relación. El patrón de vinculación que lleva este año está completamente orientado al vínculo — la energía se activa en la reciprocidad y el equilibrio con el otro. Lo que el ciclo activa llevará esa misma calidad relacional: el área profectada tendrá más resonancia cuando haya un intercambio genuino.',
            8:'Desde Casa 8, Venus opera en la profundidad del vínculo. El patrón de vinculación que lleva este año no es superficial — la atracción busca la entrega total o no busca nada. Lo que el ciclo activa llevará esa misma intensidad: el área profectada pedirá que la energía vaya de verdad al fondo, sin quedarse en lo seguro.',
            9:'Desde Casa 9, Venus opera a través de la libertad y la expansión. El patrón de vinculación que lleva este año necesita horizonte y sentido compartido — la atracción se activa cuando hay un propósito o una visión que supera lo cotidiano. Lo que el ciclo activa llevará esa misma orientación: el área profectada tendrá más valor cuando conecte con algo que amplíe la perspectiva.',
            10:'Desde Casa 10, Venus opera a través de la vocación y la construcción pública. El patrón de vinculación que lleva este año está ligado a lo que se construye con el tiempo y a lo que puede ser reconocido — la atracción es seria, comprometida. Lo que el ciclo activa llevará esa misma orientación: el área profectada pedirá que la energía tenga forma y dirección concreta.',
            11:'Desde Casa 11, Venus opera a través de la amistad y la visión colectiva. El patrón de vinculación que lleva este año se activa en la red y en lo que se comparte con otros hacia algo más amplio — la atracción busca la amistad dentro del amor y la colaboración dentro del vínculo. Lo que el ciclo activa llevará esa misma calidad: el área profectada tendrá más fuerza cuando se conecte con otros.',
            12:'Desde Casa 12, Venus opera en el amor silencioso y la compasión. El patrón de vinculación que lleva este año es profundamente interior — la atracción disuelve fronteras, absorbe el estado del otro. Lo que el ciclo activa llevará esa misma permeabilidad: el área profectada puede moverse desde una sensibilidad que percibe lo que todavía no se ha nombrado.'
        },
        'Júpiter': {
            1:'Desde Casa 1, Júpiter opera desde la presencia y la expansión personal. La confianza que lleva este año es directa e inmediata — se activa en la acción y en la afirmación personal. Lo que el ciclo activa llevará esa misma amplitud: el área profectada se moverá con más facilidad cuando haya disposición a mostrarse y a ocupar el espacio.',
            2:'Desde Casa 2, Júpiter opera a través de los recursos y lo que se valora. La confianza que lleva este año tiene raíz tangible — se activa cuando hay una base concreta sobre la que expandirse. Lo que el ciclo activa llevará esa misma solidez: el área profectada ofrecerá más cuando se construya desde lo que ya está, no desde el vacío.',
            3:'Desde Casa 3, Júpiter opera a través del conocimiento y el intercambio. La confianza que lleva este año se activa en el aprendizaje y la comunicación — la expansión llega a través de las ideas y de las personas que abren perspectivas nuevas. Lo que el ciclo activa llevará esa misma calidad: el área profectada se moverá mejor cuando haya intercambio real de ideas.',
            4:'Desde Casa 4, Júpiter opera desde las raíces. La confianza que lleva este año tiene origen en lo más personal — se activa cuando hay base interior y pertenencia. Lo que el ciclo activa llevará esa misma profundidad: el área profectada ofrecerá más cuando conecte con lo que en ti es más genuino y más duradero.',
            5:'Desde Casa 5, Júpiter opera a través de la creatividad y la expresión. La confianza que lleva este año se activa cuando te muestras plenamente — la expansión llega siendo generoso con lo que tienes para dar. Lo que el ciclo activa llevará esa misma vitalidad: el área profectada pedirá presencia real y disposición a crear desde dentro.',
            6:'Desde Casa 6, Júpiter opera a través del servicio y la disciplina. La confianza que lleva este año se activa cuando hay utilidad real — la expansión llega aplicando el discernimiento con constancia. Lo que el ciclo activa llevará esa misma orientación práctica: el área profectada crecerá más con trabajo sostenido que con inspiración puntual.',
            7:'Desde Casa 7, Júpiter opera a través de la relación y la colaboración. La confianza que lleva este año se activa en el vínculo equitativo — la expansión llega a través del otro, no a pesar de él. Lo que el ciclo activa llevará ese mismo carácter: el área profectada ofrecerá más cuando haya un interlocutor real, alguien con quien moverse.',
            8:'Desde Casa 8, Júpiter opera a través de la transformación y la profundidad. La confianza que lleva este año se activa cuando hay disposición a ir al fondo — la expansión llega en los procesos de transformación real. Lo que el ciclo activa llevará esa misma calidad: el área profectada ofrecerá más cuando la energía no se quede en la superficie.',
            9:'Desde Casa 9, Júpiter opera en su territorio natural de expansión y sentido. La confianza que lleva este año se activa cuando hay un horizonte que inspira — la abundancia llega en la búsqueda, no en la llegada. Lo que el ciclo activa llevará esa misma orientación: el área profectada tendrá más fuerza cuando conecte con un propósito más amplio.',
            10:'Desde Casa 10, Júpiter opera a través de la vocación y el logro visible. La confianza que lleva este año se activa cuando hay una dirección concreta y reconocible — la expansión llega construyendo con método y sosteniendo el esfuerzo. Lo que el ciclo activa llevará esa misma orientación: el área profectada crecerá cuando tenga forma y objetivo claro.',
            11:'Desde Casa 11, Júpiter opera a través de lo colectivo y la visión compartida. La confianza que lleva este año se activa cuando hay contribución a algo más grande — la expansión llega cuando las ideas se conectan con una red que las amplifica. Lo que el ciclo activa llevará esa misma orientación: el área profectada ganará más en colaboración que en soledad.',
            12:'Desde Casa 12, Júpiter opera a través de la entrega y la confianza profunda. La confianza que lleva este año se activa cuando se suelta el control — la expansión llega cuando hay disposición a ser llevado por lo que ya se está moviendo. Lo que el ciclo activa llevará esa misma calidad: el área profectada puede crecer de formas que no siempre son visibles desde el inicio.'
        },
        'Saturno': {
            1:'Desde Casa 1, Saturno opera desde la presencia con exigencia. La disciplina que lleva este año está ligada a la propia imagen y a la autoridad personal — la madurez se construye en cómo te presentas y en lo que te responsabilizas de ser. Lo que el ciclo activa llevará esa misma exigencia: el área profectada pedirá que la energía sea honesta y que asuma el peso que le corresponde.',
            2:'Desde Casa 2, Saturno opera a través de la relación con los recursos y el valor. La disciplina que lleva este año tiene que ver con lo que se construye con constancia — la madurez llega cuando el valor real no se acumula con prisa sino con tiempo. Lo que el ciclo activa llevará esa misma solidez: el área profectada pedirá paciencia y construcción real, no resultado inmediato.',
            3:'Desde Casa 3, Saturno opera a través de la mente y la coherencia. La disciplina que lleva este año pide que lo que se piensa, dice y hace formen una sola dirección — la madurez llega cuando el pensamiento tiene estructura y la palabra tiene peso. Lo que el ciclo activa llevará esa misma exigencia de coherencia: el área profectada pedirá claridad antes que velocidad.',
            4:'Desde Casa 4, Saturno opera desde los cimientos más personales. La disciplina que lleva este año viene de la historia más íntima — la madurez se construye integrando lo que se lleva dentro, no suprimiéndolo. Lo que el ciclo activa llevará esa misma profundidad: el área profectada puede moverse desde capas que van más atrás de lo que parece en la superficie.',
            5:'Desde Casa 5, Saturno opera a través de la expresión con estructura. La disciplina que lleva este año pide que la creatividad tenga forma y que la expresión se sostenga más allá del impulso inicial — la madurez llega cuando el talento se combina con el trabajo. Lo que el ciclo activa llevará esa misma exigencia: el área profectada pedirá compromiso con el proceso, no solo con el resultado.',
            6:'Desde Casa 6, Saturno opera en su territorio natural de disciplina y constancia. La disciplina que lleva este año se construye en el trabajo cotidiano — la madurez llega cuando el estándar de excelencia no se convierte en autoexigencia destructiva. Lo que el ciclo activa llevará esa misma calidad: el área profectada crecerá con constancia real, no con intensidad puntual.',
            7:'Desde Casa 7, Saturno opera a través de los compromisos y los vínculos reales. La disciplina que lleva este año pide honestidad en las relaciones — la madurez llega cuando el equilibrio en los vínculos es genuino, no solo apariencia. Lo que el ciclo activa llevará esa misma exigencia: el área profectada pedirá autenticidad y responsabilidad real.',
            8:'Desde Casa 8, Saturno opera a través del poder y la transformación. La disciplina que lleva este año pide integrar la intensidad en lugar de temerla o abusar de ella — la madurez llega cuando la profundidad se convierte en sabiduría. Lo que el ciclo activa llevará esa misma densidad: el área profectada pedirá que la energía vaya de verdad al fondo.',
            9:'Desde Casa 9, Saturno opera a través de la libertad con forma. La disciplina que lleva este año pide que la visión tenga una dirección concreta a la que servir — la madurez llega cuando la búsqueda de horizonte tiene estructura y no solo movimiento. Lo que el ciclo activa llevará esa misma orientación: el área profectada pedirá que la energía sepa hacia qué sirve antes de moverse.',
            10:'Desde Casa 10, Saturno opera en su territorio natural de construcción y autoridad. La disciplina que lleva este año es la de quien construye para lo que dura — la madurez llega cuando el logro deja de ser la única forma de validarse. Lo que el ciclo activa llevará esa misma orientación: el área profectada pedirá esfuerzo real y una dirección que valga la pena sostener.',
            11:'Desde Casa 11, Saturno opera a través de las ideas con sistema. La disciplina que lleva este año pide que las visiones dejen de ser rebelión y se conviertan en estructura — la madurez llega cuando la innovación tiene un plan. Lo que el ciclo activa llevará esa misma exigencia: el área profectada pedirá que la energía colectiva tenga forma concreta para poder avanzar.',
            12:'Desde Casa 12, Saturno opera en los límites de lo que se puede cargar. La disciplina que lleva este año pide discernir entre lo que se siente de verdad y lo que se absorbe de los demás — la madurez llega cuando la compasión tiene límites y la empatía no disuelve. Lo que el ciclo activa llevará esa misma calidad: el área profectada pedirá honestidad sobre lo que realmente es tuyo.'
        }
    };
    const _fromHouseText = natalHouseNum ? ((_lordFromHouse[lordOriginal] || {})[natalHouseNum] || '') : '';

    // Puente natal → profectada (una línea de orientación)
    const _houseAreaBriefA = {
        1:'la identidad y la presencia', 2:'los recursos y lo que valoras',
        3:'la mente y el entorno cercano', 4:'las raíces y el hogar interior',
        5:'la expresión, la creatividad y el placer', 6:'el cuerpo y el trabajo cotidiano',
        7:'los vínculos más significativos', 8:'la transformación profunda',
        9:'la expansión y el sentido', 10:'la vocación y el lugar en el mundo',
        11:'la red y el propósito colectivo', 12:'el interior silencioso y la dimensión espiritual'
    };
    const _lordImplicitA = {
        'Sol':'consciencia de propósito', 'Luna':'campo emocional',
        'Marte':'impulso', 'Venus':'deseo', 'Mercurio':'mente',
        'Júpiter':'confianza', 'Saturno':'disciplina'
    };
    const _bridgeAText = (_fromHouseText && _casaActivaA && _casaActivaA !== '—')
        ? `Esa ${_lordImplicitA[lordOriginal] || 'energía'}, que en ti viene de ${_houseAreaBriefA[natalHouseNum] || `Casa ${natalHouseNum}`}, llega este año a Casa ${_casaActivaA} — ${_houseAreaBriefA[Number(_casaActivaA)] || `Casa ${_casaActivaA}`}.`
        : '';

    const _lordSynthesisA = {
        'Sol': 'En ese territorio, la dirección no viene de fuera — viene de reconocer qué parte de quien eres pide expresarse ahí.',
        'Luna': 'En ese territorio, lo que avanza lo hace cuando el estado interior está alineado con lo que ocurre afuera — el campo emocional no es el obstáculo, es la brújula.',
        'Mercurio': 'En ese territorio, la claridad es la herramienta principal — lo que logras nombrar empieza a encontrar dirección; lo que no, espera.',
        'Venus': 'En ese territorio, la energía va a donde va el deseo genuino — no donde urge ni donde conviene, sino donde algo en ti dice que vale la pena.',
        'Marte': 'En ese territorio, la velocidad importa menos que la dirección — el impulso que sabe hacia dónde va tiene más fuerza que el que simplemente actúa.',
        'Júpiter': 'En ese territorio, el crecimiento no se fuerza — aparece cuando hay confianza y espacio. Lo que se intenta controlar demasiado suele perder margen para desarrollarse.',
        'Saturno': 'En ese territorio, lo que perdura no viene de la intensidad sino de la constancia — cada paso sostenido tiene más peso del que parece en el momento.'
    };
    const _synthTextA = _lordSynthesisA[lordOriginal] || '';

    // Label alineado izquierda · dato natal como sublabel · retrogradación si aplica
    const _sublabelA = hasNatalSign
        ? `<p style="${TXT2};margin:0 0 10px">${labelAText}</p>` : '';
    const _lordIsRetro = Boolean(natalLord?.isRetro || natalLord?.retrograde || natalLord?.is_retro);
    const _retroNote = _lordIsRetro
        ? `<p style="${TXT2}">En retrogradación: su influencia se dirige hacia adentro antes de expresarse afuera — el proceso de este año pide revisión antes que expansión.</p>` : '';
    const blockA = `<div id="annual-premium-energia" style="${CARD}">
        <span style="${LBL}">Tu energía guía</span>
        ${_sublabelA}
        <p style="${TXT}">${finalTextA}</p>
        ${_fromHouseText ? `<p style="${TXT2}">${_fromHouseText}</p>` : ''}
        ${_bridgeAText ? `<p style="${TXT2}">${_bridgeAText}</p>` : ''}
        ${_synthTextA ? `<p style="${TXT2}">${_synthTextA}</p>` : ''}
        ${_roleTextA ? `<p style="${TXT2}">${_roleTextA}</p>` : ''}
        ${_retroNote}
    </div>`;

    // [AÑO_PREMIUM v3] CAPA B — Casa profectada + signo + referencia implícita al señor
    const casaActiva = profection?.activeHouse || '—';
    const activeSign = profection?.activeSign || '—';

    const HOUSE_AREA_BRIEF = {
        1:'la identidad y la presencia', 2:'los recursos y lo que valoras',
        3:'la mente y el entorno cercano', 4:'las raíces y el hogar interior',
        5:'la expresión, la creatividad y el placer', 6:'el cuerpo y el trabajo cotidiano',
        7:'los vínculos más significativos', 8:'la transformación profunda',
        9:'la expansión y el sentido', 10:'la vocación y el lugar en el mundo',
        11:'la red y el propósito colectivo', 12:'el interior silencioso y la dimensión espiritual'
    };

    const SIGN_INTRO = {
        'Aries':'Aries lo acelera','Tauro':'Tauro lo arraiga','Géminis':'Géminis lo multiplica',
        'Cáncer':'Cáncer lo hace personal','Leo':'Leo lo expone','Virgo':'Virgo lo afina',
        'Libra':'Libra lo equilibra','Escorpio':'Escorpio lo profundiza','Sagitario':'Sagitario lo expande',
        'Capricornio':'Capricornio lo estructura','Acuario':'Acuario lo innova','Piscis':'Piscis lo disuelve'
    };

    const SIGN_ON_HOUSE = {
        'Aries':'no espera el momento perfecto — pide acción, decisión, movimiento',
        'Tauro':'no se apresura — pide construir capa por capa, valorar lo que ya hay antes de pedir más',
        'Géminis':'no se fija en un solo punto — pide conectar, comunicar, explorar varios frentes a la vez',
        'Cáncer':'no opera en la superficie — pide cuidado, protección, volver a lo que de verdad importa',
        'Leo':'no se esconde — pide presencia, expresión, ser completamente visible sin disculpas',
        'Virgo':'no acepta lo aproximado — pide precisión, discernimiento, mejorar desde dentro',
        'Libra':'no tolera el desequilibrio — pide reciprocidad real, el punto justo entre dar y recibir',
        'Escorpio':'no tolera lo superficial — pide ir al fondo de lo que se activa, transformar lo que hace falta',
        'Sagitario':'no acepta límites — pide expansión, horizonte, un sentido que mueva desde dentro',
        'Capricornio':'no se dispersa — pide estructura, método, orientación clara al largo plazo',
        'Acuario':'no repite el guión — pide originalidad, romper el patrón, aportar algo genuinamente nuevo',
        'Piscis':'no se aferra — pide soltar lo que ya no encaja, confiar en el flujo de lo que viene'
    };

    const LORD_IMPLICIT = {
        'Sol':'Esa consciencia de propósito','Luna':'Ese campo emocional',
        'Marte':'Ese impulso','Venus':'Ese deseo','Mercurio':'Esa mente',
        'Júpiter':'Esa confianza','Saturno':'Esa disciplina'
    };

    const houseAreaText = HOUSE_AREA_BRIEF[casaActiva] || `Casa ${casaActiva}`;
    // Signo activo con glifo KAIROS integrado en el texto
    const signIntroText = `${_sgA(activeSign)} ${SIGN_INTRO[activeSign] || `${activeSign} lo condiciona`}`;
    const signOnHouseText = SIGN_ON_HOUSE[activeSign] || 'pide atención y presencia en este proceso';
    const lordImplicit = LORD_IMPLICIT[lordOriginal] || 'Esa energía';

    // Cierre específico por señor — rompe la plantilla fija y diferencia el tono de cada lord
    const _lordClosingB = {
        'Sol':      'Lo que está en juego aquí no es solo lo que ocurre en esa área — sino si lo que haces en ella lleva tu propia firma.',
        'Luna':     'Lo más importante no es lo que pase afuera sino lo que sientes que está moviéndose dentro mientras eso ocurre.',
        'Marte':    'La pregunta que este ciclo pone sobre la mesa no es qué hacer — sino desde qué impulso real lo estás haciendo.',
        'Venus':    'Lo que el año está poniendo a prueba no es el área en sí — sino lo que de verdad valoras dentro de ella.',
        'Mercurio': 'La clave no es solo lo que ocurre en ese territorio — sino cómo lo estás interpretando y comunicando.',
        'Júpiter':  'Lo que importa no es cuánto se abre o crece — sino desde qué tipo de confianza real se está moviendo.',
        'Saturno':  'La pregunta no es cuánto se logra — sino si lo que estás construyendo ahí responde a algo que realmente importa.'
    };

    let finalTextB = '';
    if (Number(casaActiva) === 5 && activeSign === 'Escorpio') {
        finalTextB = `Lo que se activa este año no es la expresión en general — es la expresión que transforma. Casa 5 en ${_sgA('Escorpio')} Escorpio convoca lo que creas desde las capas más hondas, no desde la superficie. Lo que produces este año tiene carga real: no es decorativo, sino que mueve algo en quien lo recibe y en ti mismo al crearlo.`;
    } else {
        finalTextB = `<strong>Casa ${casaActiva}</strong> se activa este año — <strong>${houseAreaText}</strong>. ${signIntroText}: ${signOnHouseText}. ${lordImplicit} es quien lleva ese proceso. ${_lordClosingB[lordOriginal] || ''}`;
    }

    // Puente natal→profectada con relación entre casas (v3.4-A)
    const _bridgeB = () => {
        if (!natalHouseNum || !casaActiva || casaActiva === '—') return '';
        const h1 = parseInt(natalHouseNum), h2 = parseInt(casaActiva);
        const natalArea = HOUSE_AREA_BRIEF[h1] || `Casa ${h1}`;
        const profArea  = HOUSE_AREA_BRIEF[h2] || `Casa ${h2}`;

        // Relación entre las dos casas
        const diff = Math.abs(h1 - h2);
        const normDiff = diff > 6 ? 12 - diff : diff;

        let _relText = '';
        if (h1 === h2) {
            _relText = `${_pgA(lordOriginal)}${lordOriginal} natal vive en esta misma casa — <strong>Casa ${h1}</strong>. El señor del año opera en su territorio más familiar. La activación de este ciclo no es extraña: es una profundización de algo que ya forma parte de tu naturaleza. Lo que el año pide no es cambiar de dirección — es ir más adentro en la que ya llevas.`;
        } else if (normDiff === 4 || normDiff === 8) {
            // Trígono — flujo natural entre casas del mismo elemento
            _relText = `${_pgA(lordOriginal)}${lordOriginal} natal vive en <strong>Casa ${h1}</strong> — ${natalArea}. Este año esa energía llega a <strong>Casa ${h2}</strong> — ${profArea}. La relación entre ambas casas es de flujo natural: lo que en ti viene de ${natalArea} encuentra este año un canal afín en ${profArea}. El movimiento no genera resistencia — genera forma.`;
        } else if (normDiff === 3 || normDiff === 9) {
            // Cuadratura — tensión productiva
            _relText = `${_pgA(lordOriginal)}${lordOriginal} natal vive en <strong>Casa ${h1}</strong> — ${natalArea}. Este año esa energía llega a <strong>Casa ${h2}</strong> — ${profArea}. La relación entre ambas casas genera tensión productiva: lo que en ti viene de ${natalArea} no encaja de forma automática en ${profArea}. Ese roce es parte del proceso — el año pide que resuelvas esa tensión, no que la evites.`;
        } else if (normDiff === 6) {
            // Oposición — espejo
            _relText = `${_pgA(lordOriginal)}${lordOriginal} natal vive en <strong>Casa ${h1}</strong> — ${natalArea}. Este año esa energía se activa en <strong>Casa ${h2}</strong> — ${profArea}. Estas casas se enfrentan como espejos: lo que en ti viene de ${natalArea} este año se ve reflejado en ${profArea}. El ciclo pide que integres ambos territorios — no que elijas uno.`;
        } else {
            // Cruce de territorios
            _relText = `${_pgA(lordOriginal)}${lordOriginal} natal vive en <strong>Casa ${h1}</strong> — ${natalArea}. Este año lo lleva hasta <strong>Casa ${h2}</strong> — ${profArea}. La energía que en ti viene de ${natalArea} tiene que expresarse ahora a través de ${profArea}. No son el mismo territorio — y esa distancia es precisamente lo que el ciclo pone en movimiento.`;
        }
        return _relText;
    };
    const _bridgeTextB = _bridgeB();

    const blockB = `<div id="annual-premium-casa" style="${CARD}">
        <span style="${LBL}">Lo que se activa este año</span>
        <p style="${TXT}">${finalTextB}</p>
        ${_bridgeTextB ? `<p style="${TXT2}">${_bridgeTextB}</p>` : ''}
    </div>`;

    // Ritmo propio de cada señor durante el ciclo anual — texto de fondo siempre presente en C
    const _lordRhythmC = {
        'Sol':      'Los ciclos del Sol son largos y estables — la dirección del año se asienta de forma gradual, no en destellos puntuales. Lo que parece lento es, en realidad, consolidación real.',
        'Luna':     'La Luna tiene ciclos cortos dentro del año largo — hay momentos de mayor apertura emocional y momentos de mayor repliegue. Ambos son parte del mismo movimiento.',
        'Mercurio': 'Mercurio trabaja en sprints — períodos de gran claridad mental seguidos de momentos de revisión. La mente del ciclo necesita pausa para ordenar lo que procesa.',
        'Venus':    'Venus opera por atracción, no por esfuerzo — este ciclo avanza cuando te permites recibir además de dar. La energía forzada no produce los mismos resultados que la energía invitada.',
        'Marte':    'Marte trabaja en ráfagas — hay momentos de impulso intenso y momentos necesarios de recarga. Reconocer el ritmo propio del ciclo es tan importante como actuar.',
        'Júpiter':  'Júpiter trabaja en horizontes largos — la expansión de este ciclo no se mide en semanas sino en el arco completo del año. Lo que siembras ahora puede no mostrarse hasta la segunda mitad.',
        'Saturno':  'Saturno trabaja capa por capa — lo que construyes este año es la base de lo que vendrá después, aunque ahora no lo veas todavía. El resultado es invisible mientras el proceso ocurre.'
    };
    const _rhythmTextC = _lordRhythmC[lordOriginal] || '';

    // C — Cómo se mueve ahora: momento del ciclo + tránsitos del señor
    const _scC = window.totalShadowContext || {};
    const _bDayC = Number(_scC.annual_context?.birth_day || state.user?.birthDay || state.user?.birth_day || 0);
    const _bMonC = Number(_scC.annual_context?.birth_month || state.user?.birthMonth || state.user?.birth_month || 0);
    const _bYrC  = Number(_scC.annual_context?.birth_year || state.user?.birthYear || state.user?.birth_year || 0);
    let _monthsInCycle = null, _cycleStageText = '';
    if (_bDayC && _bMonC && _bYrC) {
        const _todayC = new Date();
        let _csYear = _todayC.getFullYear();
        if ((_todayC.getMonth()+1) < _bMonC || ((_todayC.getMonth()+1) === _bMonC && _todayC.getDate() < _bDayC)) _csYear -= 1;
        const _cs = new Date(_csYear, _bMonC - 1, _bDayC);
        _monthsInCycle = ((_todayC.getFullYear() - _cs.getFullYear()) * 12) + (_todayC.getMonth() - _cs.getMonth()) + 1;
        if (_monthsInCycle >= 1 && _monthsInCycle <= 5)
            _cycleStageText = 'El ciclo todavía está abriendo su dirección principal. Esta primera parte del año sirve para reconocer hacia dónde empieza a moverse tu energía.';
        else if (_monthsInCycle === 6)
            _cycleStageText = 'El ciclo llega a su punto medio. Lo importante ahora no es abrir más frentes, sino revisar qué parte del año ya mostró su dirección.';
        else if (_monthsInCycle >= 9 && _monthsInCycle <= 10)
            _cycleStageText = 'El año entra en fase de concentración. Lo vivido empieza a mostrar su aprendizaje central.';
        else if (_monthsInCycle >= 11)
            _cycleStageText = 'El ciclo prepara su transición. Algo de lo vivido ya no pide expansión, sino integración.';
    }
    // Modulación por Ascendente — cómo cada ascendente procesa este momento del ciclo (v3.4-A)
    const _ascModulation = {
        'Aries':       'Para Aries ascendente, este momento del ciclo pide acción antes que reflexión — el cuerpo sabe antes que la mente.',
        'Tauro':       'Para Tauro ascendente, este momento del ciclo pide paciencia real — lo que madura lento tiene más raíz.',
        'Géminis':     'Para Géminis ascendente, este momento del ciclo activa la mente — las conexiones que hagas ahora tienen más peso del que parecen.',
        'Cáncer':      'Para Cáncer ascendente, este momento del ciclo se procesa desde dentro — el mundo interior precede siempre a la expresión exterior.',
        'Leo':         'Para Leo ascendente, este momento del ciclo necesita expresión — lo que no se nombra ni muestra todavía no puede ser reconocido.',
        'Virgo':       'Para Virgo ascendente, este momento del ciclo pide discernimiento — la mejora concreta vale más que la expansión sin orden.',
        'Libra':       'Para Libra ascendente, este momento del ciclo pide equilibrio entre lo que das y lo que recibes — la reciprocidad es la condición, no el extra.',
        'Escorpio':    'Para Escorpio ascendente, este momento del ciclo activa capas que no siempre son visibles — lo más importante puede estar ocurriendo en silencio.',
        'Sagitario':   'Para Sagitario ascendente, este momento del ciclo pide dirección antes que movimiento — saber hacia dónde antes de actuar.',
        'Capricornio': 'Para Capricornio ascendente, este momento del ciclo pide estructura real — lo que no tiene forma concreta todavía no puede crecer.',
        'Acuario':     'Para Acuario ascendente, este momento del ciclo activa la perspectiva — ver el sistema desde afuera tiene más valor que seguir sus instrucciones.',
        'Piscis':      'Para Piscis ascendente, este momento del ciclo pide apertura antes que control — confiar en el flujo produce resultados que forzar la forma no alcanza.'
    };
    const _userAsc = state.user?.asc || '';
    const _ascText = _ascModulation[_userAsc] || '';

    const _cStageHTML = _cycleStageText
        ? `<p style="${TXT}">${_monthsInCycle ? `<strong>Mes ${_monthsInCycle} de 12.</strong> ` : ''}${_cycleStageText}</p>` : '';
    let blockC = `<div id="annual-premium-movimiento" style="${CARD}">
        <span style="${LBL}">Cómo se mueve ahora</span>
        ${_cStageHTML}
        <p style="${_cStageHTML ? TXT2 : TXT}" id="annual-premium-transits">Calculando el movimiento actual...</p>
        ${_rhythmTextC ? `<p style="${TXT2}">${_rhythmTextC}</p>` : ''}
        ${_ascText ? `<p style="${TXT2}">${_ascText}</p>` : ''}
    </div>`;

    // ── BLOQUE D — Por qué este ciclo te afecta así específicamente a ti ────────
    // 4 capas: calidad natal señor · puente natal→activa · ritmo temporal · comprensión del ciclo

    // CAPA 1+2 — Patrón vivido del señor en su signo natal (7 × 12)
    // Voz directa: segunda persona, experiencia observable, sin "opera desde", sin nombre de planeta
    const _lordNatalQuality = {
        'Sol': {
            'Aries':    'Sueles saber quién eres cuando actúas — la indecisión te desgasta más que el propio error.',
            'Tauro':    'Tu sentido de dirección se asienta cuando hay algo concreto que construir y sostener — sin eso, el propósito se vuelve difuso.',
            'Géminis':  'Encuentras tu centro en el intercambio — cuando conectas ideas o personas, algo en ti se clarifica.',
            'Cáncer':   'Tu propósito se aclara cuando protege o sostiene algo que te importa — sin ese vínculo, la dirección pierde fuerza.',
            'Leo':      'Necesitas mostrarte para saber quién eres — no puedes definirte solo desde dentro, necesitas que el mundo lo confirme.',
            'Virgo':    'Tu propósito se concreta en la mejora — necesitas ver que lo que haces sirve de algo específico para sentir que tiene sentido.',
            'Libra':    'Te defines mejor en relación que en soledad — el otro te devuelve una parte de ti que no encuentras sin espejo.',
            'Escorpio': 'Lo que realmente eres aparece en la transformación — la superficie dice poco; lo que atraviesas dice mucho más.',
            'Sagitario':'Necesitas horizonte para saber hacia dónde vas — sin movimiento o búsqueda, el sentido de dirección se difumina.',
            'Capricornio':'Tu propósito se concreta en lo que construyes con esfuerzo real — necesitas ver los resultados para saber que la dirección existe.',
            'Acuario':  'Tu identidad se afirma cuando vas más allá del guión — la diferencia no es una rebeldía, es lo que te hace ser tú.',
            'Piscis':   'Tu propósito llega a través de lo que trasciende lo concreto — cuando estás demasiado enfocado en los detalles, el centro se diluye.'
        },
        'Luna': {
            'Aries':    'Tu seguridad interior llega en movimiento — la quietud forzada te genera más ansiedad que la propia acción.',
            'Tauro':    'Te sientes a salvo cuando hay continuidad — los cambios abruptos activan en ti una inseguridad difícil de nombrar.',
            'Géminis':  'Tu sistema emocional se regula cuando puedes hablar y conectar — el silencio forzado te genera más ruido interno, no menos.',
            'Cáncer':   'Lo que sientes aquí tiene raíz profunda — no es reacción pasajera, viene de una capa que tardas en reconocer.',
            'Leo':      'Tu equilibrio emocional depende de poder expresarte — cuando no hay espacio para eso, la carga se acumula de formas que no siempre ves.',
            'Virgo':    'Te sientes emocionalmente a salvo cuando tienes algo concreto que cuidar o mejorar — la sensación de inutilidad te genera ansiedad real.',
            'Libra':    'Tu equilibrio emocional está ligado al estado de tus vínculos — cuando hay tensión en las relaciones, te cuesta encontrar calma interior.',
            'Escorpio': 'Tu mundo emocional opera en capas que no siempre son visibles — lo que sientes de verdad tarda en llegar a la superficie.',
            'Sagitario':'Te sientes más estable cuando tienes libertad de movimiento que cuando tienes certeza — el encierro emocional te desorienta.',
            'Capricornio':'Tu seguridad interior necesita estructura — la incertidumbre sin ningún tipo de orden te genera una carga mayor que el esfuerzo.',
            'Acuario':  'Necesitas cierta distancia para procesar lo que sientes — no porque no sientas, sino porque el exceso de proximidad emocional te desconecta.',
            'Piscis':   'Tu sistema emocional no tiene fronteras nítidas — absorbes el estado de quienes te rodean sin siempre darte cuenta de que ocurre.'
        },
        'Marte': {
            'Aries':    'Actúas antes de analizar — tu energía más genuina es la del movimiento directo, sin rodeos ni preparación larga.',
            'Tauro':    'Tu impulso más fuerte es el que construye en lugar del que destruye — la constancia te da más poder que la velocidad.',
            'Géminis':  'Tu energía de acción se activa en la palabra y la conexión — necesitas comunicar para poder actuar con verdadera fuerza.',
            'Cáncer':   'Actúas con más fuerza cuando hay algo que proteger — el impulso en ti es profundamente relacional, no abstracto.',
            'Leo':      'Tu impulso se activa ante la posibilidad de dejar una marca — actúas con más energía cuando lo que haces puede ser visto.',
            'Virgo':    'Tu energía más precisa no es la del ímpetu sino la de la corrección — encuentras el poder en perfeccionar, no en lanzarte sin rumbo.',
            'Libra':    'Actúas más eficazmente cuando el contexto es justo — el impulso solitario sin contexto relacional te desgasta más de lo que te impulsa.',
            'Escorpio': 'Tu energía más poderosa no se adelanta ni se dispersa — acumulas antes de actuar, y cuando lo haces, el impacto es difícil de ignorar.',
            'Sagitario':'Te mueve más una causa que un objetivo — sin un sentido que te impulse, la energía se dispersa con rapidez.',
            'Capricornio':'Tu impulso es paciente pero implacable — no urgente pero tampoco negociable cuando la meta está clara.',
            'Acuario':  'Tu energía busca transformar un sistema más que ganar una batalla — el impacto colectivo te interesa más que el individual.',
            'Piscis':   'Tu impulso sigue corrientes que no siempre son visibles — actúas mejor cuando confías en el flujo que cuando fuerzas el resultado.'
        },
        'Venus': {
            'Aries':    'Deseas con urgencia — la lentitud o la ambigüedad en los vínculos te genera una impaciencia que a veces se confunde con frialdad.',
            'Tauro':    'Valoras lo que dura — no el destello inicial, sino la profundidad que se construye con el tiempo y la presencia.',
            'Géminis':  'Tu manera de querer necesita conversación — sin intercambio real y variado, los vínculos se vuelven planos para ti.',
            'Cáncer':   'Te resulta más fácil amar cuando puedes cuidar — el afecto en ti busca proteger tanto como ser protegido.',
            'Leo':      'Necesitas que el vínculo tenga espacio para la expresión y el disfrute — sin eso, sientes que falta algo esencial.',
            'Virgo':    'Tu forma de querer se expresa en los detalles y el cuidado concreto — más que palabras, lo tuyo son los gestos precisos.',
            'Libra':    'Lo que valoras genuinamente es la reciprocidad real — las dinámicas de dar y recibir en desequilibrio te generan un malestar que tarda en resolverse.',
            'Escorpio': 'No te interesa lo superficial en los vínculos — cuando algo tiene profundidad real, la entrega es total; cuando no, el desapego también.',
            'Sagitario':'Valoras la libertad dentro del vínculo — la conexión que te exige demasiada restricción pierde atractivo rápidamente.',
            'Capricornio':'Tu forma de querer es seria y comprometida — la ligereza sin fondo no te genera confianza ni atracción duradera.',
            'Acuario':  'Valoras la amistad dentro del amor — los vínculos que te permiten ser diferente y original te resultan más sostenibles.',
            'Piscis':   'Tu manera de conectar disuelve fronteras — con facilidad te fusionas con lo que amas, y a veces olvidar dónde terminas tú.'
        },
        'Mercurio': {
            'Aries':    'Tu mente decide antes de analizar — la velocidad es tu herramienta, aunque a veces te adelanta a conclusiones que luego hay que revisar.',
            'Tauro':    'Procesas lento pero con profundidad — cuando das una conclusión, es porque ya la has sostenido mucho tiempo internamente.',
            'Géminis':  'Tu mente necesita variedad para funcionar bien — la repetición y el trabajo monótono la apagan más que el cansancio.',
            'Cáncer':   'Piensas desde lo que sientes — los datos sin carga emocional te cuesta integrarlos de forma que te resulten reales.',
            'Leo':      'Tu mente organiza la experiencia como una historia — necesitas que lo que dices tenga audiencia, aunque sea de una sola persona.',
            'Virgo':    'Tu pensamiento busca la exactitud — preferirías no decir nada antes que decir algo impreciso o a medias.',
            'Libra':    'Antes de concluir, necesitas ver todos los ángulos — lo que a veces parece indecisión es en realidad un proceso de escucha real.',
            'Escorpio': 'Tu mente no acepta explicaciones superficiales — preguntas hasta llegar al fondo, aunque el fondo no sea cómodo.',
            'Sagitario':'Piensas en marcos grandes — los detalles aislados sin contexto mayor te aburren o te dispersan.',
            'Capricornio':'Tu pensamiento más natural es el pragmático — lo que no puede convertirse en algo concreto te cuesta tomarlo en serio.',
            'Acuario':  'Tu mente va más allá del consenso por defecto — a veces la idea más valiosa que tienes es la que nadie más se ha atrevido a decir.',
            'Piscis':   'Tu pensamiento opera con imágenes y sensaciones más que con lógica lineal — a veces sabes algo sin poder explicar exactamente cómo lo sabes.'
        },
        'Júpiter': {
            'Aries':    'Sueles crecer más cuando actúas sin esperar el momento perfecto — el movimiento antes que el plan completo.',
            'Tauro':    'Tu expansión más genuina llega construyendo capa por capa — el crecimiento que viene del proceso sostenido te dura más que el del impulso.',
            'Géminis':  'Creces más cuando conectas lo que aprendes con alguien más — el conocimiento compartido te genera más confianza que el acumulado en solitario.',
            'Cáncer':   'Tu expansión necesita raíz — creces mejor cuando hay pertenencia y cuidado cerca que cuando hay horizontes pero no ancla.',
            'Leo':      'Creces cuando te permites mostrarte sin disculpas — la confianza más genuina llega de la expresión, no de la preparación.',
            'Virgo':    'Tu expansión más real llega siendo útil de forma concreta — cuando encuentras el punto exacto donde puedes mejorar algo, algo en ti también crece.',
            'Libra':    'Creces más en colaboración que en solitario — la reciprocidad real es el terreno donde tu confianza se expande más naturalmente.',
            'Escorpio': 'Tu crecimiento más profundo llega cuando dejas que algo se transforme — no desde la superficie, sino desde lo que muda internamente.',
            'Sagitario':'Sueles crecer cuando hay un horizonte que te inspira — sin visión ni sentido de hacia dónde, la energía de expansión se dispersa.',
            'Capricornio':'Tu expansión más genuina llega cuando construyes con método — el crecimiento que no tiene estructura no te convence aunque sea grande.',
            'Acuario':  'Sueles crecer cuando lo que construyes tiene sentido más allá de tus propios intereses — cuando hay algo colectivo o nuevo en lo que puedes contribuir.',
            'Piscis':   'Tu expansión llega cuando confías en el flujo más que en el plan — cuando dejas de empujar, algo se abre.'
        },
        'Saturno': {
            'Aries':    'Tu mayor reto es aprender a actuar con fuerza sin necesitar controlarlo todo — la disciplina más útil en ti dirige el impulso, no lo frena.',
            'Tauro':    'Tu proceso de madurez pasa por descubrir que el valor genuino no está en lo que acumulas sino en cómo lo usas.',
            'Géminis':  'La coherencia entre lo que piensas, lo que dices y lo que haces es la estructura más importante que necesitas construir.',
            'Cáncer':   'Tu camino hacia la madurez pasa por aprender a sostenerte emocionalmente tú mismo — no porque no necesites apoyo, sino porque ese trabajo nadie más puede hacerlo.',
            'Leo':      'La estructura más importante que necesitas construir es la autoestima que no depende del aplauso — cuando eso está, el resto se asienta.',
            'Virgo':    'Tu proceso de madurez incluye aprender a saber cuándo es suficiente — la exigencia sin autocompasión es la forma más cara en que pagas la perfección.',
            'Libra':    'Tu camino hacia la madurez pasa por los compromisos honestos — la armonía superficial te cuesta más de lo que aparenta a largo plazo.',
            'Escorpio': 'Tu proceso de madurez está ligado a cómo integras la intensidad — ni reprimiéndola ni siendo dominado por ella.',
            'Sagitario':'Tu forma de madurar incluye convertir la libertad en compromiso real — la visión que no puede aterrizarse en algo concreto se queda en ilusión.',
            'Capricornio':'Tu camino de madurez es la disciplina sostenida — no el esfuerzo puntual ni la perfección, sino la constancia en lo que importa.',
            'Acuario':  'Tu proceso de madurez pasa por convertir las ideas en sistemas — la rebeldía que no puede organizarse no transforma nada.',
            'Piscis':   'Tu camino de madurez incluye aprender a poner límites a la compasión — no para dejar de sentir, sino para no disolverse en lo que sientes.'
        }
    };

    // CAPA 3 — Ritmo temporal por señor (cuándo se concentra la activación)
    const _lordTemporalRhythm = {
        'Sol':'La segunda mitad del año tiende a intensificar la consciencia de propósito — es cuando lo iniciado empieza a pedir consolidación.',
        'Luna':'Cada luna nueva abre un umbral pequeño pero real. Los cambios de ciclo mensual concentran más apertura interior — el sistema emocional está más permeable en esos tramos.',
        'Marte':'El tramo de verano hasta principios de otoño concentra más activación — el impulso pide ser dirigido, no dispersado. Los momentos decisivos no siempre llegan con urgencia visible.',
        'Venus':'Primavera y otoño abren ventanas de mayor apertura — momentos donde lo relacional y lo creativo tiene más resonancia. La conexión se da cuando el sistema está abierto, no cuando se fuerza.',
        'Mercurio':'La primavera tardía y el inicio de verano concentran la mayor claridad del ciclo. El otoño abre una segunda ventana, más reflexiva. Los períodos de retrogradación no son para avanzar sino para revisar.',
        'Júpiter':'El año tiene un arco de apertura que se hace más evidente hacia la segunda mitad. La clave es reconocer cuando la expansión llega sola, sin necesidad de empujarla.',
        'Saturno':'El primer tramo del ciclo pide claridad de estructura. La segunda mitad pide integrar lo construido sin añadir nuevas capas. La paciencia no es pasividad: es estrategia.'
    };

    // CAPA 4 — Comprensión del ciclo (señor × casa profectada activa) — 7 × 12
    const _cycleInsight = {
        'Sol': {
            1:'Lo que este ciclo parece insistir en mostrar es la relación entre quién eres internamente y cómo eso se hace visible en el mundo.',
            2:'Lo que este ciclo parece insistir en mostrar es la relación entre el sentido de propósito y los recursos concretos que lo sostienen.',
            3:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que piensas de ti mismo y cómo lo comunicas al entorno próximo.',
            4:'Lo que este ciclo parece insistir en mostrar es la relación entre la identidad personal y las raíces de las que proviene.',
            5:'Lo que este ciclo parece insistir en mostrar es la relación entre el propósito y el placer — si lo que haces te hace sentir completamente vivo.',
            6:'Lo que este ciclo parece insistir en mostrar es la relación entre el sentido de dirección y los hábitos cotidianos que lo sustentan o lo debilitan.',
            7:'Lo que este ciclo parece insistir en mostrar es cómo los vínculos más significativos reflejan algo del propio propósito que aún está por clarificarse.',
            8:'Lo que este ciclo parece insistir en mostrar es que hay algo por transformar antes de que el propósito pueda expresarse más plenamente.',
            9:'Lo que este ciclo parece insistir en mostrar es la relación entre la búsqueda de sentido y la capacidad de actuar desde lo que ya se ha encontrado.',
            10:'Lo que este ciclo parece insistir en mostrar es la relación entre quién eres y lo que construyes para dejar en el mundo.',
            11:'Lo que este ciclo parece insistir en mostrar es la relación entre el propósito personal y lo que puede aportarse al entorno colectivo.',
            12:'Lo que este ciclo parece insistir en mostrar es que antes de que el propósito se exprese hacia afuera, necesita tiempo de integración interior.'
        },
        'Luna': {
            1:'Lo que este ciclo parece insistir en mostrar es la relación entre el mundo emocional interior y la forma en que te presentas al exterior.',
            2:'Lo que este ciclo parece insistir en mostrar es la relación entre la seguridad emocional y la seguridad material — cómo se sostienen mutuamente.',
            3:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que sientes y la manera en que lo comunicas al entorno próximo.',
            4:'Lo que este ciclo parece insistir en mostrar es algo que tiene raíz en la historia personal — algo del pasado que necesita ser revisado o integrado.',
            5:'Lo que este ciclo parece insistir en mostrar es la relación entre el mundo emocional y la capacidad de disfrutar, crear y expresarse libremente.',
            6:'Lo que este ciclo parece insistir en mostrar es la relación entre el estado emocional y el cuerpo — cómo la energía interna se refleja en la salud y la rutina.',
            7:'Lo que este ciclo parece insistir en mostrar es la relación entre la necesidad emocional personal y lo que se pide y recibe en los vínculos más importantes.',
            8:'Lo que este ciclo parece insistir en mostrar es que hay una capa emocional profunda que pide ser vista antes de que algo pueda cambiar realmente.',
            9:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que sientes y el sentido que le das a la experiencia.',
            10:'Lo que este ciclo parece insistir en mostrar es la relación entre el mundo emocional privado y lo que se proyecta en la vocación y el lugar público.',
            11:'Lo que este ciclo parece insistir en mostrar es la relación entre la seguridad interior y los grupos y redes a los que se pertenece.',
            12:'Lo que este ciclo parece insistir en mostrar es que hay algo que integrar en silencio — una corriente emocional que necesita espacio antes de moverse.'
        },
        'Marte': {
            1:'Lo que este ciclo parece insistir en mostrar es la relación entre la energía de acción y la imagen que proyectas — si lo que haces coincide con quien eres.',
            2:'Lo que este ciclo parece insistir en mostrar es la relación entre el impulso de actuar y los recursos concretos que respaldan esa acción.',
            3:'Lo que este ciclo parece insistir en mostrar es la relación entre la energía de acción y la forma en que se comunica — si el impulso tiene salida o se acumula.',
            4:'Lo que este ciclo parece insistir en mostrar es la relación entre la energía de acción y las raíces — de dónde viene el impulso y cómo se sostiene.',
            5:'Lo que este ciclo parece insistir en mostrar es la relación entre la energía de acción y el placer — si lo que se hace con energía también se disfruta.',
            6:'Lo que este ciclo parece insistir en mostrar es la relación entre el impulso y la sostenibilidad — si la energía puede mantenerse sin agotar el cuerpo.',
            7:'Lo que este ciclo parece insistir en mostrar es la relación entre el propio impulso y el de quienes están cerca — si generan tensión o se complementan.',
            8:'Lo que este ciclo parece insistir en mostrar es la relación entre la energía de acción y la transformación — si el impulso está siendo usado para cambiar algo real.',
            9:'Lo que este ciclo parece insistir en mostrar es la relación entre el impulso y el sentido — si la energía tiene una dirección que realmente vale la pena.',
            10:'Lo que este ciclo parece insistir en mostrar es la relación entre la energía de acción y la vocación — si el impulso está al servicio de algo que construye.',
            11:'Lo que este ciclo parece insistir en mostrar es la relación entre el impulso personal y el propósito colectivo — si la energía sirve al conjunto o solo al individuo.',
            12:'Lo que este ciclo parece insistir en mostrar es que hay algo que necesita procesarse antes de que el impulso pueda tener dirección clara.'
        },
        'Venus': {
            1:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que valoras de verdad y cómo te presentas — si hay coherencia entre los dos.',
            2:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que deseas y los recursos con los que cuentas para construirlo.',
            3:'Lo que este ciclo parece insistir en mostrar es la relación entre el deseo y la comunicación — si lo que quieres y lo que dices están alineados.',
            4:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que valoras y las raíces — qué parte del deseo tiene origen en la historia personal.',
            5:'Lo que este ciclo parece insistir en mostrar es la relación entre el deseo y la expresión — si lo que valoras puede manifestarse con plenitud.',
            6:'Lo que este ciclo parece insistir en mostrar es la relación entre el deseo y la rutina cotidiana — si los hábitos sostienen o limitan lo que realmente importa.',
            7:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que deseas y lo que los vínculos más importantes reflejan de ese deseo.',
            8:'Lo que este ciclo parece insistir en mostrar es que la apertura al deseo pasa por soltar algo — un apego, una forma de controlar o de retener.',
            9:'Lo que este ciclo parece insistir en mostrar es la relación entre el deseo y el sentido — si lo que valoras tiene un horizonte que lo orienta.',
            10:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que amas y lo que construyes públicamente — si los dos van en la misma dirección.',
            11:'Lo que este ciclo parece insistir en mostrar es la relación entre el deseo personal y los lazos que se eligen — si la red que te rodea nutre lo que valoras.',
            12:'Lo que este ciclo parece insistir en mostrar es que hay algo por apreciar en silencio antes de que el deseo pueda expresarse sin ambivalencia.'
        },
        'Mercurio': {
            1:'Lo que este ciclo parece insistir en mostrar es la relación entre cómo piensas sobre ti mismo y cómo eso modela la imagen que proyectas.',
            2:'Lo que este ciclo parece insistir en mostrar es la relación entre la forma de pensar y los recursos — si la mente está al servicio de lo que construyes.',
            3:'Lo que este ciclo parece insistir en mostrar es la relación entre la forma de pensar y la de comunicar — si hay coherencia o algo se distorsiona en el camino.',
            4:'Lo que este ciclo parece insistir en mostrar es la relación entre los patrones mentales actuales y los que se formaron en la historia personal.',
            5:'Lo que este ciclo parece insistir en mostrar es la relación entre la mente y la expresión creativa — si el pensamiento libera o contiene la capacidad de crear.',
            6:'Lo que este ciclo parece insistir en mostrar es la relación entre los hábitos mentales y los físicos — si la forma de pensar el cuerpo y el trabajo te sostiene o te desgasta.',
            7:'Lo que este ciclo parece insistir en mostrar es la relación entre la forma de pensar y los vínculos — si la mente escucha tanto como habla en las relaciones importantes.',
            8:'Lo que este ciclo parece insistir en mostrar es la relación entre la mente y la transformación — si el pensamiento puede atravesar la incomodidad o tiende a evitarla.',
            9:'Lo que este ciclo parece insistir en mostrar es la relación entre la forma de pensar y el sentido — si la mente está al servicio de la comprensión o de la justificación.',
            10:'Lo que este ciclo parece insistir en mostrar es la relación entre la forma de pensar y lo que se construye públicamente — si la mente sirve a la vocación.',
            11:'Lo que este ciclo parece insistir en mostrar es la relación entre la forma de pensar y los grupos a los que se pertenece — si la mente conecta o separa.',
            12:'Lo que este ciclo parece insistir en mostrar es que hay patrones de pensamiento que necesitan tiempo de silencio para reorganizarse.'
        },
        'Júpiter': {
            1:'Lo que este ciclo parece insistir en mostrar es la relación entre lo que crees posible para ti y cómo finalmente decides presentarte al mundo.',
            2:'Lo que este ciclo parece insistir en mostrar es la relación entre confiar en la abundancia y construir una base material real que la sostenga.',
            3:'Lo que este ciclo parece insistir en mostrar es la relación entre la amplitud de miras y la precisión de lo que comunicas al entorno próximo.',
            4:'Lo que este ciclo parece insistir en mostrar es la relación entre el horizonte que buscas y las raíces que necesitas para poder avanzar.',
            5:'Lo que este ciclo parece insistir en mostrar es la relación entre la abundancia y la capacidad de disfrutar sin necesitar que todo tenga un propósito mayor.',
            6:'Lo que este ciclo parece insistir en mostrar es la relación entre el deseo de expansión y la disciplina del cuerpo y la rutina cotidiana.',
            7:'Lo que este ciclo parece insistir en mostrar es la relación entre la apertura personal y lo que los vínculos más significativos pueden devolverle a esa apertura.',
            8:'Lo que este ciclo parece insistir en mostrar es que el crecimiento real pasa por soltar algo — una seguridad, un control, un modo anterior de funcionar.',
            9:'Lo que este ciclo parece insistir en mostrar es la relación entre la búsqueda de sentido y lo que ya sabes pero no terminas de integrar en la práctica.',
            10:'Lo que este ciclo parece insistir en mostrar es la relación entre creer en tus posibilidades y construir algo concreto con esa creencia en el mundo.',
            11:'Lo que este ciclo parece insistir en mostrar es la relación entre el crecimiento individual y lo que puedes aportar genuinamente al conjunto que te rodea.',
            12:'Lo que este ciclo parece insistir en mostrar es que hay algo que integrar antes de que la expansión pueda ser visible y sostenida al exterior.'
        },
        'Saturno': {
            1:'Lo que este ciclo parece insistir en mostrar es la relación entre la estructura interna y la imagen que proyectas — si lo que construyes coincide con quien realmente eres.',
            2:'Lo que este ciclo parece insistir en mostrar es la relación entre la disciplina y los recursos — si lo que construyes tiene una base material que lo sostenga a largo plazo.',
            3:'Lo que este ciclo parece insistir en mostrar es la relación entre la exigencia interior y la forma en que se comunica — si la estructura sirve al entendimiento o lo dificulta.',
            4:'Lo que este ciclo parece insistir en mostrar es la relación entre las estructuras que llevas construidas y las que heredaste — cuáles sostienen y cuáles limitan.',
            5:'Lo que este ciclo parece insistir en mostrar es la relación entre la exigencia y el disfrute — si la disciplina deja espacio para la expresión libre o la contiene en exceso.',
            6:'Lo que este ciclo parece insistir en mostrar es la relación entre la disciplina y el cuerpo — si la estructura que aplicas al trabajo cotidiano te sostiene o te agota.',
            7:'Lo que este ciclo parece insistir en mostrar es la relación entre la estructura personal y los vínculos — qué nivel de compromiso real está siendo construido o revisado.',
            8:'Lo que este ciclo parece insistir en mostrar es la relación entre la disciplina y la transformación — si la estructura que mantienes permite el cambio o lo bloquea.',
            9:'Lo que este ciclo parece insistir en mostrar es la relación entre la estructura y el sentido — si la disciplina que aplicas responde a algo que realmente crees.',
            10:'Lo que este ciclo parece insistir en mostrar es la relación entre la exigencia propia y lo que construyes públicamente — si la disciplina está al servicio de la vocación.',
            11:'Lo que este ciclo parece insistir en mostrar es la relación entre la estructura personal y el propósito colectivo — si lo que construyes sirve a algo más que al individuo.',
            12:'Lo que este ciclo parece insistir en mostrar es que hay algo que estructura en silencio — un patrón que pide tiempo de integración antes de poder modificarse.'
        }
    };

    // Ancla astrológica del bloque D — 1 frase por planeta, con glifo KAIROS
    // Recupera la identidad KAIROS sin repetir el mecanismo natal de bloque A
    const _lordCharacterization = {
        'Sol':      `${_pgA('Sol')} Sol en tu carta define la forma en que buscas dirección y propósito propio.`,
        'Luna':     `${_pgA('Luna')} Luna en tu carta condiciona cómo te mueves emocionalmente y qué necesitas para sentirte a salvo.`,
        'Marte':    `${_pgA('Marte')} Marte en tu carta determina la forma en que actúas y ejerces tu impulso.`,
        'Venus':    `${_pgA('Venus')} Venus en tu carta moldea cómo te vinculas y qué buscas cuando conectas con el mundo.`,
        'Mercurio': `${_pgA('Mercurio')} Mercurio en tu carta define cómo piensas y cómo procesas lo que te rodea.`,
        'Júpiter':  `${_pgA('Júpiter')} Júpiter en tu carta marca la forma en que creces y en qué tipo de expansión confías.`,
        'Saturno':  `${_pgA('Saturno')} Saturno en tu carta determina qué tipo de madurez estás construyendo y cómo lo haces.`
    };

    // Términos implícitos del señor para el puente natal→activa (conecta con la nueva voz directa)
    const _lordImplicitD = {
        'Sol':      'Esa forma de encontrar propósito',
        'Luna':     'Ese patrón emocional',
        'Marte':    'Ese impulso',
        'Venus':    'Esa forma de valorar y conectar',
        'Mercurio': 'Esa forma de procesar y comunicar',
        'Júpiter':  'Esa forma de crecer',
        'Saturno':  'Ese proceso de madurez'
    };

    // Construcción del texto D — sin repetir nombre del planeta (A ya lo nombró)
    const _qualityD = (_lordNatalQuality[lordOriginal] || {})[natalSign] || '';
    const _temporalD = _lordTemporalRhythm[lordOriginal] || 'Este año tiene momentos de mayor apertura y momentos de mayor introspección.';
    const _insightD  = (_cycleInsight[lordOriginal] || {})[parseInt(casaActiva)] || '';
    const _implicitD = _lordImplicitD[lordOriginal] || 'Esa energía';
    const _natalAreaD  = HOUSE_AREA_BRIEF[natalHouseNum] || `Casa ${natalHouseNum}`;
    const _activeAreaD = HOUSE_AREA_BRIEF[casaActiva]    || `Casa ${casaActiva}`;

    const _anchorD = _lordCharacterization[lordOriginal] || '';
    let windowsTextD = '';
    if (_qualityD && natalHouseNum && casaActiva && _insightD) {
        // Ancla astrológica (glifo + planeta) → patrón vivido → puente natal→activa → ritmo → comprensión
        windowsTextD = `${_anchorD} ${_qualityD} ${_implicitD}, que en tu carta viene de ${_natalAreaD}, este año llega al territorio de ${_activeAreaD}. ${_temporalD} ${_insightD}`;
    } else if (_qualityD) {
        windowsTextD = `${_anchorD} ${_qualityD} ${_temporalD} ${_insightD}`;
    } else {
        windowsTextD = `${_anchorD} ${_temporalD}`;
    }

    // Síntesis del aprendizaje por relación de casas natal→profectada (v3.4-A)
    const _yearLearning = () => {
        if (!natalHouseNum || !casaActiva || casaActiva === '—') return '';
        const h1 = parseInt(natalHouseNum), h2 = parseInt(casaActiva);
        const natalArea = HOUSE_AREA_BRIEF[h1] || `Casa ${h1}`;
        const profArea  = HOUSE_AREA_BRIEF[h2] || `Casa ${h2}`;
        const diff = Math.abs(h1 - h2);
        const normDiff = diff > 6 ? 12 - diff : diff;

        if (h1 === h2) return `La razón profunda por la que este ciclo te afecta así: el señor del año opera en su propio territorio natal. El año no pide expansión hacia lo desconocido — pide ir más adentro en lo que ya conoces. Eso es más difícil de lo que parece.`;
        if (normDiff === 4 || normDiff === 8) return `La razón profunda por la que este ciclo te afecta así: ${natalArea} y ${profArea} forman un canal natural en tu carta. La energía se mueve sin resistencia entre ellas — y eso significa que lo que hagas este año tiene la posibilidad de construirse con más fluidez de la habitual. El riesgo es no aprovechar esa ventana.`;
        if (normDiff === 3 || normDiff === 9) return `La razón profunda por la que este ciclo te afecta así: ${natalArea} y ${profArea} generan tensión en tu carta. El año no es cómodo — y no debería serlo. Esa incomodidad es la señal de que algo real está siendo movido. El aprendizaje no está en resolver la tensión sino en trabajar con ella.`;
        if (normDiff === 6) return `La razón profunda por la que este ciclo te afecta así: ${natalArea} y ${profArea} se enfrentan como espejos en tu carta. Lo que en ti viene de ${natalArea} este año necesita ser visto desde el ángulo opuesto. El ciclo pide integración — no elección entre uno y otro.`;
        return `La razón profunda por la que este ciclo te afecta así: ${natalArea} y ${profArea} son territorios distintos en tu carta. La energía que en ti viene de ${natalArea} tiene que aprender este año a operar en ${profArea}. Ese desplazamiento no es casualidad — es la mecánica exacta de cómo crece lo que el señor del año representa en ti.`;
    };
    const _yearLearningText = _yearLearning();

    // Tercera capa D — actitud que favorece el ciclo (por señor)
    const _lordAttitudeD = {
        'Sol':      'La actitud que favorece este ciclo no es el esfuerzo constante sino el reconocimiento. Saber cuándo lo que haces te representa realmente y cuándo estás actuando desde la inercia.',
        'Luna':     'La actitud que favorece este ciclo es la escucha antes que la acción. Cuando el ruido externo aumenta, el ciclo pide volver al centro emocional antes de responder.',
        'Mercurio': 'La actitud que favorece este ciclo es la precisión antes que la velocidad. Pensar antes de hablar, escribir antes de enviar, revisar antes de concluir.',
        'Venus':    'La actitud que favorece este ciclo es la receptividad. No la pasividad — sino la apertura a recibir lo que llega sin forzar lo que no llega todavía.',
        'Marte':    'La actitud que favorece este ciclo es la dirección clara antes del movimiento. No cualquier acción vale — la que viene del centro propio tiene más impacto que diez movimientos reactivos.',
        'Júpiter':  'La actitud que favorece este ciclo es la apertura sin agenda. Confiar en que lo que tiene que expandirse se expandirá — no necesita ser empujado, necesita ser reconocido cuando llega.',
        'Saturno':  'La actitud que favorece este ciclo es la paciencia con el proceso. Lo que construyes ahora puede no mostrarse todavía — pero cada paso hecho con intención real suma.'
    };
    const _attitudeD = _lordAttitudeD[lordOriginal] || '';

    // Bloque D dividido en tres párrafos: patrón natal · puente y ritmo · actitud del ciclo
    let _partD1 = '', _partD2 = '', _partD3 = '';
    if (_qualityD && natalHouseNum && casaActiva && _insightD) {
        _partD1 = `${_anchorD} <strong>${_qualityD}</strong>`;
        _partD2 = `${_implicitD}, que en tu carta viene de ${_natalAreaD}, este año llega al territorio de <strong>${_activeAreaD}</strong>. ${_temporalD} ${_insightD}`;
        _partD3 = _attitudeD;
    } else if (_qualityD) {
        _partD1 = `${_anchorD} <strong>${_qualityD}</strong>`;
        _partD2 = `${_temporalD}`;
        _partD3 = _attitudeD;
    } else {
        _partD1 = `${_anchorD}`;
        _partD2 = `${_temporalD}`;
        _partD3 = _attitudeD;
    }
    const blockD = `<div id="annual-premium-ventana" style="${CARD}">
        <span style="${LBL}">Por qué este ciclo te afecta así</span>
        <p style="${TXT}">${_partD1}</p>
        ${_partD2 ? `<p style="${TXT2}">${_partD2}</p>` : ''}
        ${_partD3 ? `<p style="${TXT2}">${_partD3}</p>` : ''}
        ${_yearLearningText ? `<p style="${TXT2}">${_yearLearningText}</p>` : ''}
    </div>`;

    // ── ACTIVACIONES NATALES DEL AÑO v1 ──────────────────────────────────────
    // Qué partes de la carta natal están siendo llamadas por el ciclo anual.
    // v1: Priority 0 (señor natal) + Priority 1 (planetas en casa profectada).
    // v2 añadirá: getNatalActivations() filtrado por Júpiter/Saturno en tránsito.

    const _pKeysNA = ['SOL','LUNA','VENUS','MARTE','MERCURIO','JUPITER','SATURNO'];
    const _pDisplayNA = {
        'SOL':'Sol','LUNA':'Luna','VENUS':'Venus','MARTE':'Marte',
        'MERCURIO':'Mercurio','JUPITER':'Júpiter','SATURNO':'Saturno'
    };
    // v1.1 — 4 capas narrativas: C1 (quién) · C2 (cómo) · C3 (cuándo) · C4 (qué emerge)
    const _pTextNA = {
        'SOL': {
            c1: 'Tu sentido de dirección y la parte de ti que necesita ser reconocida y expresar quién eres.',
            c2: 'Este año esa parte tiene más visibilidad — lo que haces te representa con más claridad de lo habitual.',
            c3: 'Aparece cuando tienes que tomar decisiones que afectan tu identidad o cuando alguien te pide que te posiciones.',
            c4: 'El año puede darte claridad sobre qué quieres construir y quién eres realmente en este momento de tu vida.'
        },
        'LUNA': {
            c1: 'Tu mundo emocional, los patrones que vienen de lejos y lo que necesitas para sentirte seguro/a.',
            c2: 'Este año esa capa está más activa — las señales internas llegan con más intensidad que en otros ciclos.',
            c3: 'Aparece cuando el entorno cambia rápido, cuando los vínculos cercanos atraviesan ajustes, o cuando el cuerpo pide un ritmo distinto.',
            c4: 'El año puede darte acceso a patrones emocionales que necesitaban ser vistos y revisados.'
        },
        'VENUS': {
            c1: 'Lo que valoras, cómo te vinculas y qué tipo de intercambio te nutre realmente.',
            c2: 'Este año esa capacidad está siendo calibrada — lo que merece tu energía y lo que no tiene más definición.',
            c3: 'Aparece en las relaciones, en las decisiones sobre recursos, y en momentos donde tienes que elegir entre lo cómodo y lo verdadero.',
            c4: 'El año puede traer mayor claridad sobre qué tipo de vínculos y valores quieres sostener.'
        },
        'MARTE': {
            c1: 'Tu impulso, la energía que usas para actuar y la forma en que te defiendes o avanzas.',
            c2: 'Este año esa fuerza está en movimiento — con más visibilidad e impacto que en ciclos anteriores.',
            c3: 'Aparece cuando hay que tomar iniciativa, cuando surge conflicto, o cuando el ritmo del entorno no encaja con el tuyo.',
            c4: 'El año puede mostrarte dónde actúas desde la reacción y dónde desde una dirección real.'
        },
        'MERCURIO': {
            c1: 'Tu forma de pensar, procesar información y comunicarte con el entorno.',
            c2: 'Este año esa capacidad tiene más peso — las conversaciones, decisiones y conexiones que hagas dejan huella.',
            c3: 'Aparece en intercambios importantes, en momentos donde tienes que articular lo que piensas, o cuando el contexto pide claridad.',
            c4: 'El año puede darte más precisión sobre cómo comunicas y qué tipo de intercambios quieres construir.'
        },
        'JUPITER': {
            c1: 'Tu capacidad de crecer, confiar y encontrar sentido en lo que vives.',
            c2: 'Este año descubrirás con más claridad dónde confías de verdad y dónde todavía intentas controlar el resultado.',
            c3: 'Las situaciones que aparezcan tenderán a mostrarte la diferencia entre crecer desde la confianza o crecer desde la necesidad de tenerlo todo bajo control.',
            c4: 'El año puede traer una apertura real si aceptas soltar lo que ya no cabe.'
        },
        'SATURNO': {
            c1: 'Tu capacidad de construir estructuras que duran, de madurar y de asumir responsabilidad real.',
            c2: 'Este año esa capacidad está siendo exigida — lo que construyes con intención tiene más peso que en otros ciclos.',
            c3: 'Aparece cuando hay que comprometerse con algo a largo plazo, cuando el trabajo requiere consistencia, o cuando el entorno pide más de ti.',
            c4: 'El año puede traer madurez concreta si aceptas trabajar con lo que hay.'
        }
    };

    const _activationsNA = [];
    const _usedNA = new Set();

    // Priority 0 — el señor del año natal es siempre el primero
    if (natalLord && natalSign !== '—') {
        const _txt0 = _pTextNA[lordKey];
        if (_txt0) {
            const _hStr0 = natalHouseNum ? ` · Casa ${natalHouseNum}` : '';
            _activationsNA.push({
                key: lordKey,
                display: _pDisplayNA[lordKey] || lordOriginal,
                sign: natalSign,
                houseStr: _hStr0,
                role: 'lord',
                c1: _txt0.c1,
                c2: _txt0.c2,
                c3: _txt0.c3,
                c4: _txt0.c4
            });
            _usedNA.add(lordKey);
        }
    }

    // Priority 1 — planetas natales que viven en la casa profectada (están "en escena" este año)
    if (casaActiva && casaActiva !== '—') {
        for (const _pk of _pKeysNA) {
            if (_usedNA.has(_pk) || _activationsNA.length >= 3) break;
            const _pd = state.user?.natalPlanets?.[_pk];
            if (!_pd) continue;
            const _ph = _pd.house ? parseInt(_pd.house) : null;
            if (!_ph || String(_ph) !== String(casaActiva)) continue;
            const _txt1 = _pTextNA[_pk];
            if (!_txt1) continue;
            const _hStr1 = ` · Casa ${_ph}`;
            _activationsNA.push({
                key: _pk,
                display: _pDisplayNA[_pk] || _pk,
                sign: _pd.sign || '—',
                houseStr: _hStr1,
                role: 'scene',
                c1: _txt1.c1,
                c2: _txt1.c2,
                c3: _txt1.c3,
                c4: _txt1.c4
            });
            _usedNA.add(_pk);
        }
    }

    let blockActivaciones = '';
    if (_activationsNA.length > 0) {
        const _apertureNA = 'Este año, el ciclo llama a partes concretas de tu carta natal. Lo que está activo no es genérico — es específico a tu configuración.';
        const _items = _activationsNA.map(a => {
            const _signGlyph = a.sign && a.sign !== '—' ? `${_sgA(a.sign)}${a.sign}` : '';
            const _signLine = _signGlyph ? ` en ${_signGlyph}${a.houseStr}` : a.houseStr;
            const _roleTag = a.role === 'lord'
                ? `<span style="font-size:10px;color:rgba(180,140,60,0.75);text-transform:uppercase;letter-spacing:0.04em;margin-left:6px">Señor del año</span>`
                : `<span style="font-size:10px;color:rgba(120,100,70,0.60);text-transform:uppercase;letter-spacing:0.04em;margin-left:6px">En escena</span>`;
            return `<div style="margin-bottom:16px;padding-bottom:16px;border-bottom:0.5px solid rgba(180,160,120,0.12)">
                <p style="${TXT}"><strong>${_pgA(a.display)}${a.display} natal${_signLine}</strong>${_roleTag}</p>
                <p style="${TXT};margin-top:8px">${a.c1}</p>
                <p style="${TXT2};margin-top:4px">${a.c2}</p>
                ${a.c3 ? `<p style="${TXT2};margin-top:4px">${a.c3}</p>` : ''}
                ${a.c4 ? `<p style="${TXT2};margin-top:4px;font-style:italic">${a.c4}</p>` : ''}
            </div>`;
        }).join('');
        blockActivaciones = `<div id="annual-premium-activaciones" style="${CARD}">
            <span style="${LBL}">Lo que el año despierta en tu carta</span>
            <p style="${TXT}">${_apertureNA}</p>
            <div style="margin-top:14px">${_items}</div>
        </div>`;
    }

    // ── ECLIPSES DEL AÑO v1.3 ─────────────────────────────────────────────────
    // Tabla estática 2026–2036. Fuente: NASA/GSFC Fred Espenak + Jean Meeus Algorithms.
    // Script offline reproducible: scripts/eclipse_table_generator.js — NO usar en runtime.
    // NO tocar astronomy.js. Campos: yr,mo,dy · t='S'|'L' · st='T'|'A'|'H'|'P' · lon,si,deg,oi,mag
    const _ET = [
        {yr:2026,mo:2,dy:17,t:'S',st:'A',lon:328.84,si:10,deg:28,oi:4,mag:0.963},
        {yr:2026,mo:3,dy:3,t:'L',st:'T',lon:162.90,si:5,deg:12,oi:11,mag:1.151},
        {yr:2026,mo:8,dy:12,t:'S',st:'T',lon:140.04,si:4,deg:20,oi:10,mag:1.039},
        {yr:2026,mo:8,dy:28,t:'L',st:'P',lon:334.90,si:11,deg:4,oi:5,mag:0.930},
        {yr:2027,mo:2,dy:6,t:'S',st:'A',lon:317.63,si:10,deg:17,oi:4,mag:0.928},
        {yr:2027,mo:8,dy:2,t:'S',st:'T',lon:129.92,si:4,deg:9,oi:10,mag:1.079},
        {yr:2028,mo:1,dy:26,t:'S',st:'A',lon:306.18,si:10,deg:6,oi:4,mag:0.921},
        {yr:2028,mo:7,dy:6,t:'L',st:'P',lon:285.20,si:9,deg:15,oi:3,mag:0.389},
        {yr:2028,mo:7,dy:22,t:'S',st:'T',lon:119.85,si:3,deg:29,oi:9,mag:1.056},
        {yr:2028,mo:12,dy:31,t:'L',st:'T',lon:100.55,si:3,deg:10,oi:9,mag:1.246},
        {yr:2029,mo:6,dy:26,t:'L',st:'T',lon:274.84,si:9,deg:4,oi:3,mag:1.844},
        {yr:2029,mo:12,dy:20,t:'L',st:'T',lon:89.34,si:2,deg:29,oi:8,mag:1.117},
        {yr:2030,mo:6,dy:1,t:'S',st:'A',lon:70.84,si:2,deg:10,oi:8,mag:0.944},
        {yr:2030,mo:6,dy:15,t:'L',st:'P',lon:264.71,si:8,deg:24,oi:2,mag:0.503},
        {yr:2030,mo:11,dy:25,t:'S',st:'T',lon:243.04,si:8,deg:3,oi:2,mag:1.047},
        {yr:2031,mo:5,dy:21,t:'S',st:'A',lon:60.07,si:2,deg:0,oi:8,mag:0.959},
        {yr:2031,mo:11,dy:14,t:'S',st:'H',lon:232.30,si:7,deg:22,oi:1,mag:1.011},
        {yr:2032,mo:4,dy:25,t:'L',st:'T',lon:215.97,si:7,deg:5,oi:1,mag:1.191},
        {yr:2032,mo:5,dy:9,t:'S',st:'A',lon:49.48,si:1,deg:19,oi:7,mag:0.996},
        {yr:2032,mo:10,dy:18,t:'L',st:'T',lon:25.96,si:0,deg:25,oi:6,mag:1.103},
        {yr:2033,mo:3,dy:30,t:'S',st:'T',lon:10.35,si:0,deg:10,oi:6,mag:1.046},
        {yr:2033,mo:4,dy:14,t:'L',st:'T',lon:205.15,si:6,deg:25,oi:0,mag:1.094},
        {yr:2033,mo:10,dy:8,t:'L',st:'T',lon:15.48,si:0,deg:15,oi:6,mag:1.350},
        {yr:2034,mo:3,dy:20,t:'S',st:'T',lon:359.88,si:11,deg:29,oi:5,mag:1.046},
        {yr:2034,mo:9,dy:12,t:'S',st:'A',lon:169.98,si:5,deg:19,oi:11,mag:0.974},
        {yr:2035,mo:3,dy:9,t:'S',st:'A',lon:349.20,si:11,deg:19,oi:5,mag:0.992},
        {yr:2035,mo:8,dy:19,t:'L',st:'P',lon:325.93,si:10,deg:25,oi:4,mag:0.104},
        {yr:2035,mo:9,dy:2,t:'S',st:'T',lon:159.46,si:5,deg:9,oi:11,mag:1.032},
        {yr:2036,mo:2,dy:11,t:'L',st:'T',lon:142.76,si:4,deg:22,oi:10,mag:1.300},
        {yr:2036,mo:8,dy:7,t:'L',st:'T',lon:315.20,si:10,deg:15,oi:4,mag:1.454},
    ];
    const _ECLSL = ['Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'];

    // Ventanas temporales — revelación progresiva según cercanía del eclipse
    const _eclToday = new Date();
    const _eclDias  = (e) => Math.floor((new Date(e.yr, e.mo - 1, e.dy) - _eclToday) / 86400000);
    const _eclVent  = (d) => d < 0 ? 'PASADO' : d <= 14 ? 'INMINENTE' : d <= 30 ? 'CERCANO' : d <= 60 ? 'PROXIMO' : 'LEJANO';
    const _eclEtiq  = (d) => d < 0 ? `Hace ${Math.abs(d)} días`
                           : d === 0 ? 'Hoy' : d === 1 ? 'Mañana'
                           : d <= 30 ? `En ${d} días` : `En ${Math.round(d/7)} semanas`;

    // ── GADGETS VISUALES AÑO PREMIUM ─────────────────────────────────────────
    // Regla: cada gadget se coloca donde mejor ayuda a leer el módulo (no todos al final).
    // Cronoesfera: apertura · Mapa de Territorios: intermedio · Espejo Temporal: cierre.

    // ── Estilos de gadgets — inyección única ─────────────────────────────────
    if (!document.getElementById('kairos-gadgets-styles')) {
        const _kgSt = document.createElement('style');
        _kgSt.id = 'kairos-gadgets-styles';
        _kgSt.textContent = `
            @keyframes crono-pulse {
                0%   { opacity:0.5; filter:drop-shadow(0 0 2px #d7c188); }
                50%  { opacity:1;   filter:drop-shadow(0 0 8px #d7c188); }
                100% { opacity:0.5; filter:drop-shadow(0 0 2px #d7c188); }
            }
            @keyframes hoy-pulse {
                0%   { opacity:0.5; filter:drop-shadow(0 0 1px #d7c188); }
                50%  { opacity:1;   filter:drop-shadow(0 0 5px #d7c188); }
                100% { opacity:0.5; filter:drop-shadow(0 0 1px #d7c188); }
            }
            .crono-active-segment { animation: crono-pulse 3s infinite ease-in-out; }
            .crono-node { transition: transform 0.3s ease, opacity 0.3s ease; }
            .crono-node:hover { transform: scale(1.2); opacity:1 !important; }
            .mapa-segmento { transition: opacity 0.3s ease, stroke-width 0.3s ease; }
            .mapa-segmento:hover { opacity:1 !important; stroke-width:14px !important; }
            .mapa-marker { transition: transform 0.3s ease, filter 0.3s ease; }
            .mapa-marker:hover { transform:scale(1.3); filter:drop-shadow(0 0 4px rgba(255,255,255,0.6)); }
            .espejo-hoy-glow { animation: hoy-pulse 2.5s infinite ease-in-out; }
            .espejo-nodo { transition: transform 0.2s ease, opacity 0.2s ease; }
            .espejo-nodo:hover { transform:scale(1.25); opacity:1 !important; }
        `;
        document.head.appendChild(_kgSt);
    }

    // ── Variables compartidas por los 3 gadgets ───────────────────────────────
    // Mes del ciclo — base: cumpleaños como año cero de la profección
    const _crBDay = state.user?.birthDay, _crBMon = state.user?.birthMonth;
    const _crToday = new Date();
    const _crHasBirthdate = _crBDay && _crBMon;
    let _crCycleMonth = null, _crCyclePct = null, _crDaysSince = null;
    if (_crHasBirthdate) {
        const _crThisYearBday = new Date(_crToday.getFullYear(), _crBMon - 1, _crBDay);
        const _crCycleStart = _crToday >= _crThisYearBday
            ? _crThisYearBday
            : new Date(_crToday.getFullYear() - 1, _crBMon - 1, _crBDay);
        _crDaysSince  = Math.floor((_crToday - _crCycleStart) / 86400000);
        _crCycleMonth = Math.min(12, Math.floor(_crDaysSince / 30.44) + 1);
        _crCyclePct   = Math.min(100, Math.round(_crDaysSince / 365 * 100));
    }

    // Próximo eclipse
    const _crNextEcl     = _ET.find(e => _eclDias(e) > 0) || null;
    const _crNextEclDays = _crNextEcl ? _eclDias(_crNextEcl) : null;
    const _crNextEclTxt  = _crNextEclDays === 1 ? 'mañana'
                         : _crNextEclDays !== null ? `en ${_crNextEclDays} días`
                         : null;
    // _crEclipsePct: posición REAL del eclipse en el año (no la posición actual del usuario)
    const _crEclipsePct = (_crDaysSince !== null && _crNextEclDays !== null)
        ? Math.min(100, Math.round((_crDaysSince + _crNextEclDays) / 365 * 100))
        : null;

    // Júpiter y Saturno por casa (whole-sign)
    const _ZODIAC_CR  = ['Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'];
    const _crCalcH    = (tr, asc) => { const t=_ZODIAC_CR.indexOf(tr), a=_ZODIAC_CR.indexOf(asc); return (t===-1||a===-1)?null:(t-a+12)%12+1; };
    const _crAsc      = state.user?.asc || null;
    const _crJupSg    = window.CURRENT_TRANSITS?.['Júpiter'] || window.CURRENT_TRANSITS?.['Jupiter'] || null;
    const _crSatSg    = window.CURRENT_TRANSITS?.['Saturno'] || window.CURRENT_TRANSITS?.['Saturn'] || null;
    const _crJupH     = (_crJupSg && _crAsc) ? _crCalcH(_crJupSg, _crAsc) : null;
    const _crSatH     = (_crSatSg && _crAsc) ? _crCalcH(_crSatSg, _crAsc) : null;

    // Casas de eclipses para el Mapa de Territorios (calculadas desde _ET real)
    const _crAscIdx   = _ZODIAC_CR.indexOf(_crAsc || '');
    const _crEclHFn   = (e) => _crAscIdx >= 0 ? (e.si - _crAscIdx + 12) % 12 + 1 : null;
    const _crFutEcls  = _ET.filter(e => _eclDias(e) > -60).slice(0, 4);
    const _crEclH1    = _crFutEcls[0] ? _crEclHFn(_crFutEcls[0]) : null;
    const _crEclH2    = _crFutEcls[1] ? _crEclHFn(_crFutEcls[1]) : null;

    // Áreas de casas (etiquetas cortas para gadgets)
    const _crAreas = {
        1:'Identidad', 2:'Recursos', 3:'Entorno', 4:'Raíces',
        5:'Expresión', 6:'Trabajo', 7:'Vínculos', 8:'Transformación',
        9:'Expansión', 10:'Reputación', 11:'Comunidad', 12:'Interioridad'
    };

    // ── GADGET 1: CRONOESFERA ORBITAL v1.0 ───────────────────────────────────
    // Apertura de AÑO Premium. Responde: ¿dónde estoy en mi año?
    // 12 segmentos de arco — meses pasados en ámbar, activo pulsante, eclipse como marcador orbital.
    (function _buildCronos() {
        const _cx=140, _cy=140, _rRing=95, _gap=4, _strokeW=8, _rPlanets=132, _offsetA=-90;
        let _segs='', _eclMarker='', _planets='';
        for (let i=0;i<12;i++) {
            const _aStart = _offsetA+(i*30)+(_gap/2), _aEnd = _offsetA+((i+1)*30)-(_gap/2);
            const _rs=(_aStart*Math.PI)/180, _re=(_aEnd*Math.PI)/180;
            const x1=_cx+_rRing*Math.cos(_rs), y1=_cy+_rRing*Math.sin(_rs);
            const x2=_cx+_rRing*Math.cos(_re), y2=_cy+_rRing*Math.sin(_re);
            const _mn=i+1;
            let _sc='rgba(255,255,255,0.08)', _cls='', _flt='';
            if (_crCycleMonth && _mn < _crCycleMonth) { _sc='#b8a070'; }
            else if (_crCycleMonth && _mn === _crCycleMonth) { _sc='#d7c188'; _cls='crono-active-segment'; _flt='filter:url(#crono-glow);'; }
            _segs += `<path d="M ${x1} ${y1} A ${_rRing} ${_rRing} 0 0 1 ${x2} ${y2}" fill="none" stroke="${_sc}" stroke-width="${_strokeW}" stroke-linecap="round" class="${_cls}" style="${_flt}"/>`;
        }
        if (_crEclipsePct !== null) {
            const _aEcl = _offsetA+(_crEclipsePct*360/100), _rEcl=(_aEcl*Math.PI)/180;
            const _xE=_cx+115*Math.cos(_rEcl), _yE=_cy+115*Math.sin(_rEcl);
            _eclMarker = `<g transform="translate(${_xE},${_yE}) rotate(${_aEcl+45})" class="crono-node" style="opacity:0.9"><rect x="-4" y="-4" width="8" height="8" fill="#d7c188" filter="url(#crono-glow)"/></g>`;
        }
        if (_crJupH) { const _aJ=_offsetA+((_crJupH-1)*30)+15, _rJ=(_aJ*Math.PI)/180; _planets+=`<text x="${_cx+_rPlanets*Math.cos(_rJ)}" y="${_cy+_rPlanets*Math.sin(_rJ)+4}" text-anchor="middle" fill="#f5f0e8" class="crono-node" style="font-size:12px;font-family:sans-serif;opacity:0.5">♃</text>`; }
        if (_crSatH) { const _aS=_offsetA+((_crSatH-1)*30)+15, _rS=(_aS*Math.PI)/180; _planets+=`<text x="${_cx+_rPlanets*Math.cos(_rS)}" y="${_cy+_rPlanets*Math.sin(_rS)+4}" text-anchor="middle" fill="#f5f0e8" class="crono-node" style="font-size:12px;font-family:sans-serif;opacity:0.5">♄</text>`; }
        const _legend = [
            _crCycleMonth ? `Mes ${_crCycleMonth} de 12` : null,
            _crNextEclTxt ? `Eclipse ${_crNextEclTxt}` : null
        ].filter(Boolean).join(' · ') || '';
        window._kronosHTML = `<div id="annual-premium-cronos" style="background:#0d1b2a;border-radius:24px;padding:24px;margin-bottom:12px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.3),inset 0 1px 1px rgba(255,255,255,0.1);display:flex;flex-direction:column;align-items:center;box-sizing:border-box">
            <svg viewBox="0 0 280 280" width="100%" style="max-width:280px;overflow:visible">
                <defs><filter id="crono-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs>
                <circle cx="140" cy="140" r="110" fill="#070f18" opacity="0.5"/>
                <circle cx="140" cy="140" r="115" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="3 3"/>
                ${_segs}${_eclMarker}${_planets}
                <text x="140" y="128" text-anchor="middle" fill="#f5f0e8" style="font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;font-family:system-ui,sans-serif">${lordOriginal}</text>
                <line x1="115" y1="136" x2="165" y2="136" stroke="rgba(215,193,136,0.3)" stroke-width="1"/>
                <text x="140" y="154" text-anchor="middle" fill="#b8a070" style="font-size:11px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase">CASA ${casaActiva}</text>
            </svg>
            ${_legend ? `<p style="margin:16px 0 0;font-size:12px;color:rgba(245,240,232,0.6);letter-spacing:0.5px;text-align:center">${_legend}</p>` : ''}
        </div>`;
    })();
    const blockCronos = window._kronosHTML || '';
    delete window._kronosHTML;

    // ── GADGET 2: MAPA DE TERRITORIOS v1.1 ───────────────────────────────────
    // Intermedio — entre bloques A-D y Activaciones. Responde: ¿qué territorios están vivos?
    (function _buildMapa() {
        const _cx=140, _cy=140, _rRing=95, _rPerim=115, _rLabel=128, _gapA=3, _strokeBase=4, _strokeActivo=10;
        let _baseSegs='', _activeSegs='', _labelSegs='', _planets='';
        const _areaPrincipal = _crAreas[casaActiva] || 'Ciclo';
        const _labeledH = new Set();
        for (let i=1;i<=12;i++) {
            const _aStart=-90+((i-1)*30)+(_gapA/2), _aEnd=-90+(i*30)-(_gapA/2);
            const _rs=(_aStart*Math.PI)/180, _re=(_aEnd*Math.PI)/180;
            const x1=_cx+_rRing*Math.cos(_rs), y1=_cy+_rRing*Math.sin(_rs);
            const x2=_cx+_rRing*Math.cos(_re), y2=_cy+_rRing*Math.sin(_re);
            _baseSegs+=`<path d="M ${x1} ${y1} A ${_rRing} ${_rRing} 0 0 1 ${x2} ${y2}" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${_strokeBase}" stroke-linecap="round"/>`;
            // Etiqueta sobre segmento activo (radio exterior al anillo)
            const _midRad = (-90+((i-1)*30)+15)*Math.PI/180;
            const _lx = (_cx+_rLabel*Math.cos(_midRad)).toFixed(1);
            const _ly = (_cy+_rLabel*Math.sin(_midRad)+2.5).toFixed(1);
            if (i===Number(casaActiva)) {
                _activeSegs+=`<path d="M ${x1} ${y1} A ${_rRing} ${_rRing} 0 0 1 ${x2} ${y2}" fill="none" stroke="#d7c188" stroke-width="${_strokeActivo}" stroke-linecap="round" class="mapa-segmento" filter="url(#mapa-glow)"/>`;
                if (!_labeledH.has(i)) {
                    _labelSegs+=`<text x="${_lx}" y="${_ly}" text-anchor="middle" fill="#d7c188" style="font-size:7px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;font-family:system-ui,sans-serif">${_crAreas[i]||`C${i}`}</text>`;
                    _labeledH.add(i);
                }
            } else if (i===_crEclH1||i===_crEclH2) {
                _activeSegs+=`<path d="M ${x1} ${y1} A ${_rRing} ${_rRing} 0 0 1 ${x2} ${y2}" fill="none" stroke="#f5f0e8" stroke-width="${_strokeActivo-2}" stroke-linecap="round" opacity="0.85" class="mapa-segmento"/>`;
                if (!_labeledH.has(i)) {
                    _labelSegs+=`<text x="${_lx}" y="${_ly}" text-anchor="middle" fill="rgba(245,240,232,0.75)" style="font-size:7px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;font-family:system-ui,sans-serif">${_crAreas[i]||`C${i}`}</text>`;
                    _labeledH.add(i);
                }
            }
        }
        const _angC = (n) => -90+((n-1)*30)+15;
        if (_crJupH) {
            const _aJ=(_angC(_crJupH)*Math.PI)/180;
            _planets+=`<g transform="translate(${_cx+_rPerim*Math.cos(_aJ)},${_cy+_rPerim*Math.sin(_aJ)})" class="mapa-marker"><circle r="4.5" fill="#7eb8c9"/><text y="-8" text-anchor="middle" fill="#7eb8c9" style="font-size:9px;font-weight:bold;font-family:monospace">♃</text></g>`;
        }
        if (_crSatH) {
            const _aS=(_angC(_crSatH)*Math.PI)/180;
            _planets+=`<g transform="translate(${_cx+_rPerim*Math.cos(_aS)},${_cy+_rPerim*Math.sin(_aS)})" class="mapa-marker"><circle r="4" fill="#a0a8b0"/><text y="13" text-anchor="middle" fill="#a0a8b0" style="font-size:9px;font-weight:bold;font-family:monospace">♄</text></g>`;
        }
        window._mapaHTML = `<div id="annual-premium-mapa" style="background:#0d1b2a;border-radius:24px;padding:24px;margin-bottom:12px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.3),inset 0 1px 1px rgba(255,255,255,0.1);display:flex;flex-direction:column;align-items:center;box-sizing:border-box">
            <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(245,240,232,0.4);text-align:center">LOS ESCENARIOS PRINCIPALES DEL AÑO</p>
            <svg viewBox="0 0 280 280" width="100%" style="max-width:280px;overflow:visible">
                <defs><filter id="mapa-glow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs>
                <circle cx="140" cy="140" r="80" fill="#070f18" opacity="0.4"/>
                ${_baseSegs}${_activeSegs}${_labelSegs}${_planets}
                <text x="140" y="134" text-anchor="middle" fill="#f5f0e8" style="font-size:14px;font-weight:700;letter-spacing:2px;text-transform:uppercase;font-family:system-ui,sans-serif">${_areaPrincipal}</text>
                <text x="140" y="154" text-anchor="middle" fill="#a0a8b0" style="font-size:11px;font-weight:500;letter-spacing:1px;font-family:system-ui,sans-serif">CASA ${casaActiva}</text>
            </svg>
            <p style="margin:14px 0 0;font-size:11px;color:rgba(245,240,232,0.3);letter-spacing:0.3px;text-align:center;line-height:1.6">● Territorio principal &nbsp;·&nbsp; ◌ Eclipse &nbsp;·&nbsp; ♃ Júpiter &nbsp;·&nbsp; ♄ Saturno</p>
        </div>`;
    })();
    const blockMapa = window._mapaHTML || '';
    delete window._mapaHTML;

    // Territorios natales por casa (lenguaje humano, sin tecnicismos)
    const _TERR = {
        1:'tu presencia y la forma en que te muestras al mundo',
        2:'tus recursos y lo que sostienes materialmente',
        3:'tu entorno cercano y tus intercambios cotidianos',
        4:'tus raíces y tu mundo privado',
        5:'tu expresión creativa y los vínculos de placer',
        6:'tu trabajo cotidiano y tu salud',
        7:'tus vínculos más significativos y compromisos',
        8:'la transformación y los recursos compartidos',
        9:'tus creencias y lo que te expande',
        10:'lo que construyes en público y tu reputación',
        11:'tus proyectos colectivos y las redes que te sostienen',
        12:'los procesos que ocurren fuera de tu vista consciente'
    };

    // ── Narrativas BASE por casa × tipo — v1.3.1 ─────────────────────────────
    // Estructura: qué se abrió/cerró · qué se integra · qué observar ahora
    // Lenguaje de proceso, no de acontecimiento. Sin tecnicismos.
    const _TERR_S = {
        1: 'Este eclipse abrió un ciclo relacionado con tu presencia y la manera en que te construyes hacia afuera. Puede haber señalado el inicio de un cambio en cómo te percibes o en cómo quieres ser reconocido — un proceso que a veces no se hace visible de inmediato, pero que va redefiniendo algo esencial. Observa si hay algo en tu forma de presentarte al mundo que ha empezado a cambiar desde entonces, aunque todavía no tenga nombre claro.',
        2: 'Este eclipse abrió una revisión sobre tu relación con los recursos y el valor personal. Puede haber señalado el inicio de un proceso donde te preguntas qué merece realmente tu energía y qué ya no estás dispuesto a sostener — más allá de lo económico, una pregunta sobre lo que realmente vale. Observa si tu relación con la seguridad material o con lo que valoras ha empezado a tomar una forma más clara.',
        3: 'Este eclipse abrió un ciclo relacionado con tus intercambios cotidianos, conversaciones importantes o tu entorno más inmediato. Puede haber señalado el inicio de nuevas formas de comunicar, de procesar lo que te rodea o de relacionarte con lo cercano. Observa si hay conversaciones, decisiones o conexiones del día a día que se han ido transformando desde entonces.',
        4: 'Este eclipse abrió un ciclo relacionado con tu hogar, tus raíces o los fundamentos desde los que te sostienes. Puede haber señalado el inicio de un movimiento interno profundo, o de transformaciones en tu vida doméstica o familiar que tardan en hacerse plenamente visibles. Observa si hay algo en tu base — tu espacio, tu familia o tu mundo interior — que está tomando una forma nueva.',
        5: 'Este eclipse abrió un ciclo relacionado con tu expresión creativa, el placer o los vínculos que te dan vida. Puede haber señalado el inicio de proyectos, conexiones o momentos en los que te sentiste más cercano a lo que realmente quieres crear o experimentar. Observa si hay algo en tu vida relacionado con el disfrute, la creatividad o el juego que está tomando más espacio desde entonces.',
        6: 'Este eclipse abrió un ciclo relacionado con tu trabajo cotidiano, tu salud o la manera en que organizas tu energía. Puede haber señalado el inicio de nuevos hábitos, cambios en tu entorno laboral o una toma de conciencia sobre cómo estás distribuyendo tus recursos internos. Observa si hay algo en tu rutina, en tu cuerpo o en tu relación con el trabajo que ha empezado a reorganizarse.',
        7: 'Este eclipse abrió un ciclo relacionado con tus vínculos más significativos, asociaciones o compromisos con otros. Puede haber señalado el inicio de una transformación en la manera de relacionarte o en lo que buscas en el otro — no necesariamente un cambio externo visible, sino un proceso interno sobre lo que quieres construir con alguien. Observa si hay algo en tus vínculos más importantes que está evolucionando hacia una forma más auténtica.',
        8: 'Este eclipse abrió un ciclo de transformación profunda. Puede haber activado procesos relacionados con la intimidad, las herencias emocionales, los recursos compartidos o la necesidad de dejar ir algo para que algo nuevo pueda entrar. Este tipo de movimiento suele ocurrir por dentro antes de hacerse visible en lo externo. Observa si hay algo que estás soltando gradualmente o algo que está ganando profundidad desde entonces.',
        9: 'Este eclipse abrió un ciclo relacionado con tus creencias, tu visión del mundo o lo que te da sentido. Puede haber señalado el inicio de una expansión — a través del estudio, los viajes o una revisión profunda sobre qué es lo que realmente crees y por qué. Observa si hay algo en tu manera de dar sentido a lo que vives que está tomando una dirección más clara o más amplia.',
        10: 'Este eclipse abrió un ciclo relacionado con tu carrera, tu reputación o tu proyección en el mundo. Puede haber señalado el inicio de un nuevo rol, una visibilidad distinta o una toma de conciencia sobre lo que estás construyendo y hacia dónde quieres dirigirlo. Observa si hay algo en tu trayectoria o en la manera en que te posicionas hacia afuera que ha empezado a tomar una dirección más definida.',
        11: 'Este eclipse abrió un ciclo relacionado con tus proyectos colectivos, tus redes de apoyo o los grupos a los que perteneces. Puede haber señalado el inicio de nuevas alianzas o una revisión de con quién quieres construir y qué compartes realmente con los demás. Observa si hay algo en tus redes, proyectos compartidos o vínculos de comunidad que está tomando una forma más auténtica.',
        12: 'Este eclipse abrió un ciclo de trabajo interno. No necesariamente en lo externo, sino en lo que se mueve por dentro antes de hacerse visible: necesidades de retiro, patrones que empiezan a aflojarse o intuiciones que señalan algo que todavía no sabes nombrar del todo. Observa en las semanas siguientes qué necesita más silencio, más espacio o más descanso — a veces la integración de estos procesos ocurre antes de que podamos verla.'
    };
    const _TERR_L = {
        1: 'Este eclipse cerró un capítulo relacionado con tu imagen o tu identidad. Algo en la manera en que te veías o la forma en que querías proyectarte llegó a su punto de madurez, dejando una comprensión más clara de lo que eres y lo que ya no necesitas sostener. Observa si hay una versión más definida de ti mismo que ha empezado a asentarse desde entonces.',
        2: 'Este eclipse cerró un ciclo relacionado con tus recursos o tu seguridad. Algo en la manera de gestionar lo material o de percibir tu propio valor llegó a su punto de resolución, ya fuera a través de una decisión concreta o de un cambio gradual en lo que consideras prioritario. Observa si hay una mayor claridad sobre qué estás dispuesto a invertir y qué ya no.',
        3: 'Este eclipse cerró un capítulo relacionado con tus intercambios cotidianos, conversaciones o la manera en que te relacionas con tu entorno cercano. Algo que estaba abierto en ese espacio encontró su punto de resolución, aunque es posible que todavía estés comprendiendo todo lo que aquello significó. Observa si hay algo en tu manera de comunicarte o de relacionarte con lo cercano que ha tomado una dirección más definida.',
        4: 'Este eclipse cerró un capítulo relacionado con el hogar, la familia o tu mundo interior más privado. Algo que estaba pendiente en ese espacio encontró su punto de cierre o de transformación, aunque lo que aprendiste en ese proceso puede seguir asentándose. Observa si hay algo en tu manera de sentirte en casa — en el espacio físico o en ti mismo — que ha cambiado desde entonces.',
        5: 'Este eclipse cerró un capítulo relacionado con la expresión personal, el placer o los vínculos que te nutren. Puede haber traído mayor claridad sobre qué te da vida y qué ya no, sobre proyectos que encontraron su punto de madurez o sobre formas de disfrutar que están cambiando. Observa si hay algo en tu manera de expresarte o de conectar con lo que te alegra que está redefiniendo su forma.',
        6: 'Este eclipse cerró un capítulo relacionado con tu trabajo cotidiano, tu salud o los compromisos que has estado sosteniendo. Algo que requería esfuerzo mantener llegó a su punto de resolución o de transformación, ya fuera una etapa laboral, un hábito o una manera de relacionarte con el servicio. Observa si hay algo en tu forma de usar tu energía cotidiana que está encontrando un ritmo más sostenible.',
        7: 'Este eclipse cerró un capítulo relacionado con tus vínculos más significativos. Puede haber traído mayor claridad sobre una relación, un compromiso o una forma de vincularte que estaba llegando a su punto de cambio. Observa si hay algo en la manera en que te relacionas con los demás — o en lo que esperas de esas relaciones — que ha ganado mayor claridad desde entonces.',
        8: 'Este eclipse cerró un proceso de transformación. Puede haber traído mayor claridad sobre temas de intimidad, dependencia, herencias emocionales o recursos compartidos. No siempre lo que se movió fue visible desde fuera, pero algo en tu relación con lo profundo, con lo que no controlas del todo, encontró su punto de resolución. Observa si hay algo que llevabas cargando que ha empezado a sentirse más liviano desde entonces.',
        9: 'Este eclipse cerró un capítulo relacionado con tus creencias, tu búsqueda de sentido o la manera en que entiendes el mundo. Algo que has estado explorando o cuestionando llegó a un punto de resolución, dejando una comprensión más asentada de lo que te guía. Observa si hay ideas o creencias que han perdido su fuerza desde entonces, dejando espacio para algo más auténtico.',
        10: 'Este eclipse cerró un capítulo relacionado con tu carrera, tu rol público o la manera en que construyes tu lugar en el mundo. Algo en ese espacio llegó a su punto de resolución o de transformación, dejando más claro qué dirección tiene sentido y cuál ya no. Observa si hay algo en tu trayectoria o en tu proyección hacia afuera que está encontrando una forma más auténtica.',
        11: 'Este eclipse cerró un capítulo relacionado con tus proyectos compartidos, tus redes o los grupos que te sostenían. Puede haber traído mayor claridad sobre quién realmente forma parte de tu mundo y quién no, sobre proyectos colectivos que encontraron su punto de madurez o sobre formas de colaborar que están cambiando. Observa si hay algo en tus vínculos colectivos que está ganando mayor claridad o coherencia desde entonces.',
        12: 'Este eclipse cerró un proceso que ocurrió, en gran parte, fuera de tu vista consciente. Puede haber marcado el cierre de un periodo de cansancio acumulado, la resolución de algo que llevabas cargando sin saberlo del todo, o el inicio de una limpieza emocional que todavía se está integrando. Observa si hay algo que has dejado de necesitar sostener activamente, aunque todavía no tengas palabras del todo claras para describir qué fue.'
    };

    // Textos cuerpo por planeta × tipo (S=solar, L=lunar) — sin orbes, sin tecnicismos
    const _ECL_CB = {
        SOL:      { S:'Lo que este año representa para ti —quién estás siendo y cómo te posicionas— pasa por un umbral de claridad. El antes y el después de esta fecha suelen ser visibles en retrospectiva.',
                    L:'Algo que has estado construyendo en ese plano llega a un punto de resultado, con o sin decisión consciente.' },
        LUNA:     { S:'Algo en tu vida interior está listo para moverse. No necesariamente de forma dramática, pero sí con dirección.',
                    L:'Patrones emocionales que has estado procesando encuentran un punto de completitud o de relevo.' },
        VENUS:    { S:'Lo que empieces, reencuadres o decidas en ese territorio durante las semanas cercanas tiene más peso del habitual.',
                    L:'Lo que has sostenido en ese plano muestra su resultado. Lo que ya no tiene lugar se hace más visible.' },
        MARTE:    { S:'La forma en que tomas iniciativa o diriges tu energía puede encontrar un nuevo cauce a partir de aquí.',
                    L:'La energía que has invertido en ese territorio encuentra su punto de resultado o de liberación.' },
        MERCURIO: { S:'Las conversaciones, decisiones e intercambios que ocurran en ese territorio durante este periodo tienen más peso y más permanencia.',
                    L:'Lo que has articulado o negociado en ese plano llega a su punto de resolución natural.' },
        JUPITER:  { S:'Un nuevo territorio de crecimiento se hace visible. La pregunta es si confías en lo que se abre.',
                    L:'Lo que has buscado comprender o expandir muestra hasta dónde ha llegado realmente.' },
        SATURNO:  { S:'Los compromisos y estructuras que establezcas en ese territorio durante este periodo tienen vocación de permanencia.',
                    L:'Lo que has sostenido con esfuerzo y disciplina llega a un punto de madurez — o de revisión de lo que merece seguir.' }
    };

    // Señor del Año — derivado de lordOriginal (ya calculado en el scope)
    const _eclLordKey = (lordOriginal || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();

    // Casa natal del Señor del Año — ya calculada en el scope como natalHouseNum
    const _lordNatalHouse = natalHouseNum ? (parseInt(natalHouseNum) || null) : null;

    // Profección activa
    const _profH    = profection?.activeHouse || null;
    const _profS    = profection?.activeSign  || '';
    const _profSIdx = _ECLSL.indexOf(_profS);
    const _profSOpp = _profSIdx >= 0 ? _ECLSL[(_profSIdx + 6) % 12] : '';

    // Calcular en qué casa natal cae un eclipse
    // state.user.houses es {1:{sign,degree}, 2:...} — SIN .longitude (no se guarda en Firestore)
    // Se calcula longitude desde sign+degree usando el mismo índice que _ECLSL
    const _eclHouseOf = (lon) => {
        const rawH = state.user?.houses
                  || state.user?.natalHouses
                  || state.user?.natal_context?.houses
                  || window.totalShadowContext?.natal_context?.houses
                  || null;
        if (!rawH) return null;
        let housesArr = [];
        if (Array.isArray(rawH)) {
            housesArr = rawH;
        } else if (typeof rawH === 'object') {
            housesArr = Object.keys(rawH).sort((a, b) => parseInt(a) - parseInt(b)).map(k => rawH[k]);
        }
        if (housesArr.length < 12) return null;
        // Longitud: usar .longitude si existe, sino calcular desde signo+grado
        const _SI = {'Aries':0,'Tauro':1,'Géminis':2,'Cáncer':3,'Leo':4,'Virgo':5,'Libra':6,'Escorpio':7,'Sagitario':8,'Capricornio':9,'Acuario':10,'Piscis':11};
        const cusps = housesArr.map(h => {
            if (h.longitude !== undefined && !isNaN(Number(h.longitude))) return Number(h.longitude);
            const si = _SI[h.sign];
            return (si !== undefined && h.degree !== undefined) ? si * 30 + (Number(h.degree) || 0) : null;
        });
        if (cusps.some(c => c === null || isNaN(c))) return null;
        for (let i = 0; i < 11; i++) {
            const s = cusps[i], nx = cusps[i + 1];
            if ((s < nx && lon >= s && lon < nx) || (s >= nx && (lon >= s || lon < nx))) return i + 1;
        }
        return 12;
    };

    // Orbe interno (no visible al usuario)
    const _eclOrb = (a, b) => { const d = Math.abs(a - b) % 360; return d > 180 ? 360 - d : d; };
    const _ECL_PKS = ['SOL','LUNA','VENUS','MARTE','MERCURIO','JUPITER','SATURNO'];

    // Construir datos enriquecidos — ahora incluye eclHouse
    const _eclYear = new Date().getFullYear();
    const _yearEcl = _ET.filter(e => e.yr === _eclYear);
    const _eclItems = _yearEcl.map(e => {
        const dias = _eclDias(e);
        const vent = _eclVent(dias);
        const etiq = _eclEtiq(dias);
        const eclHouse = _eclHouseOf(e.lon);
        const acts = [];
        if (vent !== 'LEJANO' && vent !== 'PROXIMO') {
            for (const pk of _ECL_PKS) {
                const pd = state.user?.natalPlanets?.[pk];
                if (!pd) continue;
                const pLon = pd.longitude_raw !== undefined ? pd.longitude_raw
                           : pd.lon !== undefined ? pd.lon : pd.longitude;
                if (pLon === undefined || pLon === null || isNaN(Number(pLon))) continue;
                if (_eclOrb(e.lon, Number(pLon)) <= 5) {
                    acts.push({ key:pk, house:parseInt(pd.house)||null, sign:pd.sign||'—' });
                }
            }
        }
        return { ...e, dias, vent, etiq, eclHouse, acts };
    });

    const _eclTL = {T:'Total',A:'Anular',H:'Híbrido',P:'Parcial'};
    const _eclNB  = {
        ST:'Los eclipses solares totales abren ciclos con claridad — el antes y el después de esta fecha suelen ser visibles en retrospectiva.',
        SA:'Un eclipse anular señala una apertura de ciclo. Lo que empieza no es menor, aunque su forma pueda tardar en definirse.',
        SH:'El eclipse híbrido es un umbral doble — apertura y cierre en el mismo punto. Lo que aquí empieza ya lleva algo del pasado.',
        SP:'Un eclipse parcial marca una inflexión — no todo el ciclo cambia, pero algo en esta área empieza a moverse.',
        LT:'Los eclipses lunares totales cierran ciclos con intensidad. Lo que ha estado en proceso encuentra su punto de resolución, con o sin decisión consciente.',
        LP:'Un eclipse lunar parcial señala un cierre gradual. Algo que has estado sosteniendo llega a su punto de inflexión natural.'
    };
    const _MTHS = ['','Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const _ECL_DN = {SOL:'Sol',LUNA:'Luna',VENUS:'Venus',MARTE:'Marte',MERCURIO:'Mercurio',JUPITER:'Júpiter',SATURNO:'Saturno'};

    let blockEclipses = '';
    if (_eclItems.length > 0) {
        const _apertura = 'Los eclipses marcan los puntos de bisagra del año — momentos donde algo abre, cierra o se transforma de forma estructural. Algunos te tocan directamente; otros pasan lejos de tu carta.';

        const _eclHtml = _eclItems.map((e, idx) => {
            const isSolar  = e.t === 'S';
            const sl       = _ECLSL[e.si] || '—';
            const ol       = _ECLSL[e.oi] || '—';
            const tLabel   = (isSolar ? 'Solar ' : 'Lunar ') + (_eclTL[e.st] || '');
            const narrBase = _eclNB[e.t + e.st] || (isSolar ? _eclNB['SA'] : _eclNB['LP']);
            const hasActs  = e.acts.length > 0;
            const isLast   = idx === _eclItems.length - 1;
            const terr     = e.eclHouse && _TERR[e.eclHouse] ? _TERR[e.eclHouse] : null;

            // Relevancia especial
            const isCentral  = !!(e.eclHouse && _profH && e.eclHouse === _profH);
            const isLordCasa = !!(e.eclHouse && _lordNatalHouse && e.eclHouse === _lordNatalHouse && !isCentral);

            // Etiqueta de tiempo + relevancia + activaciones
            let etiqStr = e.etiq;
            if (isCentral  && e.vent !== 'LEJANO') etiqStr += ' · Casa activa este año';
            else if (isLordCasa && e.vent !== 'LEJANO') etiqStr += ` · Casa de ${lordOriginal}`;
            if (hasActs) {
                const pStr = e.acts.map(a => _ECL_DN[a.key] || a.key).join(', ');
                etiqStr += ` · Activa ${pStr}`;
            }
            const etiqHtml = `<span style="font-size:10px;color:rgba(140,110,60,0.70);letter-spacing:0.04em;margin-left:8px">${etiqStr}</span>`;

            // ── Cuerpo según ventana ──────────────────────────────────────────
            let cuerpo = '';

            if (e.vent === 'LEJANO') {
                // Mínimo: signo + casa si está disponible
                const casaHint = e.eclHouse ? ` · Casa ${e.eclHouse}` : '';
                cuerpo = `<p style="${TXT2};margin-top:8px">Punto de bisagra en ${sl}${casaHint}. Por ahora basta con observar esta área de tu vida. A medida que se acerque la fecha, aparecerán más claves sobre cómo este eclipse se relaciona con tu proceso de este año.</p>`;

            } else if (e.vent === 'PROXIMO') {
                // Añadir casa + territorio si disponible
                if (terr) {
                    cuerpo = `<p style="${TXT};margin-top:8px">Este eclipse caerá en tu Casa ${e.eclHouse} — ${terr}.</p>`;
                    cuerpo += `<p style="${TXT};margin-top:6px">${narrBase}</p>`;
                } else {
                    cuerpo = `<p style="${TXT};margin-top:8px">${narrBase}</p>`;
                }
                if (hasActs) {
                    cuerpo += `<p style="${TXT2};margin-top:6px">El detalle de su impacto sobre tu carta se despliega en los próximos días.</p>`;
                }

            } else {
                // CERCANO / INMINENTE / PASADO — interpretación completa
                const verbAb  = isSolar ? 'abre'  : 'cierra';
                const verbPas = isSolar ? 'abrió' : 'cerró';

                // Capa 0 — casa natal del eclipse (siempre, si hay datos de casas)
                if (terr) {
                    const casaFrase = e.vent === 'PASADO'
                        ? `Este eclipse cayó en tu Casa ${e.eclHouse} — ${terr}.`
                        : `Este eclipse cae en tu Casa ${e.eclHouse} — ${terr}.`;
                    cuerpo = `<p style="${TXT};margin-top:8px">${casaFrase}</p>`;
                } else {
                    // Sin datos de casas — comportamiento anterior
                    cuerpo = e.vent === 'PASADO'
                        ? `<p style="${TXT};margin-top:8px">Este eclipse ${verbPas} un ciclo en ${sl}. Lo que comenzó entonces sigue desplegándose.</p>`
                        : `<p style="${TXT};margin-top:8px">${narrBase}</p>`;
                }

                // Párrafo de relevancia (depende de CENTRAL / LORD_CASA / BASE)
                if (terr) {
                    let relevTxt = '';

                    if (isCentral) {
                        const centralCuerpo = e.vent === 'PASADO'
                            ? `Esta casa es el territorio central de tu año. Lo que se activó aquí entonces tiene resonancia para todo el ciclo.`
                            : `Esta casa es el territorio central de tu año. Un eclipse que ocurre aquí coincide con el foco principal del ciclo que estás viviendo. Lo que se mueva en esta área alrededor de esta fecha tiene resonancia para el año completo.`;
                        relevTxt = narrBase + ' ' + centralCuerpo;
                    } else if (isLordCasa) {
                        relevTxt = narrBase + ` Esta casa aloja a ${lordOriginal} en tu carta natal — el planeta que está conduciendo tu ciclo este año. Un eclipse que pasa por su territorio puede amplificar los temas que ya estás trabajando.`;
                    } else if (!hasActs) {
                        // BASE sin activación natal — narrativa específica por casa (v1.3.1)
                        if (e.vent === 'PASADO') {
                            relevTxt = isSolar
                                ? (_TERR_S[e.eclHouse] || `Este eclipse abrió un proceso en ese territorio. Lo que ocurrió en torno a esa fecha puede seguir desplegándose.`)
                                : (_TERR_L[e.eclHouse] || `Este eclipse cerró un proceso en ese territorio. Lo que llegó a su resolución entonces todavía está integrándose.`);
                        } else {
                            relevTxt = narrBase + ` No hace falta que active un planeta exacto para que este territorio tenga significado dentro de tu año.`;
                        }
                    }
                    // Si hay activación natal sin CENTRAL/LORD_CASA:
                    // la relevancia la aportan los bloques de activación — no añadir texto aquí

                    if (relevTxt) {
                        cuerpo += `<p style="${TXT};margin-top:8px">${relevTxt}</p>`;
                    }
                }

                // Bloques de activación natal
                if (hasActs) {
                    const actBlocks = e.acts.map(a => {
                        const actTerr   = a.house && _TERR[a.house] ? _TERR[a.house] : null;
                        const cTxt      = _ECL_CB[a.key] ? _ECL_CB[a.key][e.t] : null;
                        const sameHouse = a.house && e.eclHouse && a.house === e.eclHouse;

                        // Si el planeta vive en la misma casa que el eclipse: no repetir territorio
                        let actTxt = '';
                        if (!sameHouse && actTerr) {
                            actTxt = e.vent === 'PASADO'
                                ? `Este eclipse atravesó un umbral en el área de tu carta donde ${actTerr}.`
                                : `Este eclipse ${verbAb} un ciclo en el área de tu carta donde ${actTerr}.`;
                        }
                        if (cTxt) actTxt += (actTxt ? ' ' : '') + cTxt;
                        if (e.vent === 'PASADO' && actTxt) {
                            actTxt += ' Lo que se activó entonces todavía está en proceso.';
                        }

                        // Fusión con profección (casos A, B, C, D — sin cambios respecto v1.2)
                        let profTxt = '';
                        const isLord        = a.key === _eclLordKey;
                        const isInProfH     = _profH && a.house === _profH;
                        const eclInProfSign = sl === _profS;
                        const eclInOppSign  = _profSOpp && sl === _profSOpp;

                        if (isLord) {
                            profTxt = `Este año, ${_ECL_DN[a.key]||a.key} está conduciendo tu ciclo anual. Un eclipse que lo activa directamente toca el centro del año — lo que se mueva aquí tiene resonancia estructural para todo el ciclo.`;
                        } else if (isInProfH) {
                            profTxt = `El área donde vive este planeta natal es exactamente el territorio donde tu profección está trabajando este año. Este eclipse y tu ciclo anual están hablando del mismo tema.`;
                        } else if (eclInProfSign) {
                            profTxt = `Este eclipse cae en ${_profS}, el territorio central de tu año. Su impacto coincide con el eje donde ${lordOriginal} está conduciendo el ciclo.`;
                        } else if (eclInOppSign) {
                            profTxt = `Este eclipse activa el eje ${_profS}–${_profSOpp}, tocando tanto tu casa activa como su polo contrario. Lo que se mueve aquí afecta al ciclo central del año desde los dos extremos.`;
                        }

                        const anclaje = e.vent === 'INMINENTE'
                            ? `<p style="${TXT2};margin-top:6px">Durante los días cercanos a esta fecha, lo que ocurra en ese territorio tiene más peso del habitual.</p>`
                            : '';

                        if (!actTxt && !profTxt && !anclaje) return '';
                        return `<div style="margin-top:12px;padding-top:12px;border-top:0.5px solid rgba(180,160,120,0.10)">
                            ${actTxt ? `<p style="${TXT}">${actTxt}</p>` : ''}
                            ${profTxt ? `<p style="${TXT2};margin-top:6px">${profTxt}</p>` : ''}
                            ${anclaje}
                        </div>`;
                    }).join('');
                    cuerpo += actBlocks;
                }
            }

            return `<div style="margin-bottom:16px;padding-bottom:${isLast?'0':'16px'};${isLast?'':'border-bottom:0.5px solid rgba(180,160,120,0.12)'}">
                <p style="${TXT}"><strong>Eclipse ${tLabel} · ${e.dy} ${_MTHS[e.mo]}</strong>${etiqHtml}</p>
                <p style="${TXT2};margin-top:4px">${_sgA(sl)}${sl} ${e.deg}° · Eje ${sl}–${ol}</p>
                ${cuerpo}
            </div>`;
        }).join('');

        blockEclipses = `<div id="annual-premium-eclipses" style="${CARD}">
            <span style="${LBL}">Los puntos de bisagra del año</span>
            <p style="${TXT}">${_apertura}</p>
            <div style="margin-top:14px">${_eclHtml}</div>
        </div>`;
    }

    // ── TRÁNSITOS MAESTROS v1.0 ───────────────────────────────────────────────
    // Júpiter y Saturno en tránsito × casa natal whole-sign.
    // v1.0: casa del tránsito + relación con profectada + relación con señor del año.
    // v1.1 pendiente: cruce con planetas natales (longitude_raw del tránsito, aspectos ±3°-5°).
    const _ZODIAC_TM = ['Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'];
    const _tmHouse = (transitSign, ascSign) => {
        const t = _ZODIAC_TM.indexOf(transitSign), a = _ZODIAC_TM.indexOf(ascSign);
        return (t === -1 || a === -1) ? null : (t - a + 12) % 12 + 1;
    };
    const _tmAsc    = state.user?.asc || null;
    const _tmJupSign = window.CURRENT_TRANSITS?.['Júpiter'] || window.CURRENT_TRANSITS?.['Jupiter'] || null;
    const _tmSatSign = window.CURRENT_TRANSITS?.['Saturno'] || window.CURRENT_TRANSITS?.['Saturn'] || null;
    const _tmJupHouse = (_tmJupSign && _tmAsc) ? _tmHouse(_tmJupSign, _tmAsc) : null;
    const _tmSatHouse = (_tmSatSign && _tmAsc) ? _tmHouse(_tmSatSign, _tmAsc) : null;

    const _tmJupText = {
        1: 'Júpiter está recorriendo el territorio de la presencia y la identidad. Su expansión aquí opera desde adentro hacia afuera — no a través de logros externos, sino a través de una mayor disponibilidad para ocupar el propio espacio. Las oportunidades que llegan en este tránsito suelen aparecer cuando hay menos adaptación al entorno y más expresión desde el centro propio.',
        2: 'Júpiter está recorriendo el territorio de los recursos y el valor personal. El tránsito no garantiza abundancia — amplía la capacidad de recibir y de reconocer lo que vale la pena sostener. Lo que se genere, se gestione o se valore en este período tiene más margen para crecer que en otros ciclos.',
        3: 'Júpiter está recorriendo el territorio de los intercambios, la mente y el entorno cercano. Las conversaciones, conexiones y aprendizajes de este período tienen más alcance de lo habitual. Lo que se comunica llega más lejos; lo que se aprende se integra con más facilidad.',
        4: 'Júpiter está recorriendo el territorio de las raíces y el mundo privado. Su expansión aquí va hacia adentro: el espacio interior se ensancha, lo familiar gana más profundidad. Lo que se trabaje en el hogar o en los fundamentos más íntimos tiene condiciones para crecer con solidez.',
        5: 'Júpiter está recorriendo el territorio de la expresión, la creatividad y el placer. El tránsito amplía lo que se crea, se juega y se comparte. Lo que nace desde la autenticidad — proyectos, vínculos de placer, expresión personal — encuentra más eco del habitual.',
        6: 'Júpiter está recorriendo el territorio del trabajo cotidiano y el cuerpo. Su expansión aquí no es espectacular — opera en los sistemas y los hábitos. Las mejoras que se hagan en ese plano durante este tránsito tienen más alcance y más permanencia que las que se hacen en otros momentos.',
        7: 'Júpiter está recorriendo el territorio de los vínculos más significativos. El tránsito abre posibilidades en los encuentros, los compromisos y las alianzas. Lo que se establezca o profundice en el plano de los vínculos importantes durante este ciclo tiende a tener mayor resonancia.',
        8: 'Júpiter está recorriendo el territorio de la transformación y los recursos compartidos. Su expansión aquí va hacia la profundidad — lo que se comparte económica o emocionalmente gana más espacio. El tránsito puede traer apertura donde antes había cierre o estancamiento.',
        9: 'Júpiter está en su territorio natural — el de la expansión, la búsqueda de sentido y la apertura de horizontes. Cuando Júpiter transita su propia casa, lo que se aprende, se explora o se cree tiene una disponibilidad especial. El período favorece todo lo que amplía la perspectiva.',
        10: 'Júpiter está recorriendo el territorio de la vocación y el lugar público. Las oportunidades en este tránsito tienden a aparecer a través de la visibilidad, el reconocimiento y las conexiones en el plano profesional. Lo que se construye en público durante este ciclo tiene más capacidad de crecer.',
        11: 'Júpiter está recorriendo el territorio de las redes, los proyectos colectivos y el propósito compartido. El tránsito amplía los círculos y las alianzas. Lo que se hace junto a otros — proyectos colectivos, comunidades, causas compartidas — tiene más margen para expandirse.',
        12: 'Júpiter está recorriendo el territorio del interior silencioso y la dimensión no visible. Su expansión aquí ocurre hacia adentro: los procesos internos, la integración y el descanso tienen más espacio. No todo crecimiento es visible — el de este tránsito se acumula en lo que no se muestra.'
    };
    const _tmSatText = {
        1: 'Saturno está recorriendo el territorio de la presencia y la identidad. El tránsito no facilita la imagen — demanda que lo que se muestra al mundo tenga consistencia real. Lo que se construya en ese plano desde la autenticidad tiene condiciones para durar; lo que dependa de la adaptación constante al entorno, pide revisión.',
        2: 'Saturno está recorriendo el territorio de los recursos y el valor personal. El período no trae abundancia fácil — exige claridad sobre lo que realmente se puede sostener y sobre lo que merece la energía. Lo que se construya con rigor en ese plano durante este ciclo tiene condiciones para perdurar.',
        3: 'Saturno está recorriendo el territorio de los intercambios y la mente. Las conversaciones y decisiones de este período tienen más peso que lo habitual — lo que se comunica debe poder sostenerse. El tránsito favorece la precisión por encima de la velocidad.',
        4: 'Saturno está recorriendo el territorio de las raíces y el hogar interior. Algo en los cimientos — en el espacio privado, en la familia, en lo más interno — pide consolidación o revisión honesta. Lo que se trabaje desde ahí con conciencia tiene una solidez particular.',
        5: 'Saturno está recorriendo el territorio de la expresión y la creatividad. La creación que nace de este tránsito no es espontánea — es trabajada, construida con forma y compromiso visible. El período no favorece la improvisación, pero lo que se produce con estructura tiene más peso.',
        6: 'Saturno está recorriendo el territorio del trabajo cotidiano y el cuerpo. Los hábitos, los ritmos y los sistemas piden rigor. Lo que se consolide en ese plano — en la manera de trabajar, en la relación con el cuerpo — durante este ciclo tiende a establecerse de forma duradera.',
        7: 'Saturno está recorriendo el territorio de los vínculos más significativos. Los compromisos importantes se prueban durante este tránsito — los que tienen estructura real se consolidan; los que no, piden ser revisados con honestidad. El período exige claridad sobre los términos reales de las relaciones más importantes.',
        8: 'Saturno está recorriendo el territorio de la transformación y los recursos compartidos. Lo que se comparte — económica o emocionalmente — pide claridad sobre los límites y las responsabilidades reales. El tránsito no evita la profundidad: la exige con rigor.',
        9: 'Saturno está recorriendo el territorio de la expansión y las creencias. El período puede estrechar el horizonte — no para cerrarlo, sino para clarificar qué tipo de sentido se persigue realmente. Lo que se sostenga bajo esa presión es lo que tiene raíces genuinas.',
        10: 'Saturno está recorriendo el territorio de la vocación y el lugar público. El tránsito no suaviza lo que se construye en público — lo pone a prueba. Lo que se consolide aquí durante este ciclo tiene condiciones para perdurar; lo que se mantenga sin estructura real, difícilmente sobreviva el paso de Saturno por ese territorio.',
        11: 'Saturno está recorriendo el territorio de las redes y el propósito colectivo. El período exige selectividad sobre dónde se pone realmente la energía colectiva. Los círculos y alianzas que sobrevivan este tránsito tienen consistencia real; los que no, piden ser revisados sin apego.',
        12: 'Saturno está recorriendo el territorio del interior silencioso. El tránsito trae a la superficie procesos internos que se han pospuesto — límites no resueltos, integración pendiente. No es el período más cómodo, pero lo que se trabaje desde ahí tiene un peso específico que no tiene ningún otro tránsito.'
    };

    // Párrafo 2 — relación dinámica con el ciclo del usuario (v1.0.1 — lenguaje humano)
    const _tmRelacion = (planet, house) => {
        const isCasaActiva = house && casaActiva && String(house) === String(casaActiva);
        const isLord = (planet === 'Júpiter' && lordOriginal === 'Júpiter') ||
                       (planet === 'Saturno' && lordOriginal === 'Saturno');
        const _profArea  = _houseAreaBriefA[Number(casaActiva)] || null;
        const _tranArea  = _houseAreaBriefA[house] || `Casa ${house}`;
        const _natalArea = _houseAreaBriefA[natalHouseNum] || (natalHouseNum ? `Casa ${natalHouseNum}` : null);
        if (isCasaActiva && isLord) {
            return `Tu ${planet} natal gobierna el año desde adentro. El ${planet} en tránsito también está recorriendo ahora ${_tranArea} — que es exactamente el territorio que el año tiene activo. Los tres factores apuntan al mismo lugar: el ciclo de profecciones, tu natal y el cielo actual. Cuando eso ocurre, lo que se trabaje en ese territorio tiene condiciones que pocas veces se producen.`;
        }
        if (isCasaActiva) {
            return `Este año tu atención está puesta sobre ${_tranArea} — y ${planet} también está recorriendo ese mismo territorio ahora. Cuando el ciclo interno y el contexto externo apuntan al mismo lugar, lo que ocurre ahí tiene más peso del que tendría en otro momento.`;
        }
        if (isLord) {
            const _na = _natalArea || (natalHouseNum ? `Casa ${natalHouseNum}` : 'su posición natal');
            return `Tu ${planet} natal opera desde ${_na} — ese es el motor interno de este año. El ${planet} que transita el cielo ahora está en otro territorio: ${_tranArea}. El mismo principio aparece en dos planos a la vez: uno desde dentro, el otro como contexto externo.`;
        }
        if (_profArea) {
            return `Este año tu atención está puesta sobre ${_profArea}. ${planet}, sin embargo, está actuando en otro territorio: ${_tranArea}. Son dos capas distintas del mismo momento: una habla de lo que el año te pide vivir; la otra, del contexto en el que eso ocurre.`;
        }
        return `${planet} está actuando en ${_tranArea} mientras el año trabaja en otro plano.`;
    };

    const _tmSection = (planet, sign, house, textMap) => {
        if (!sign || !house || !textMap[house]) return '';
        const _p2 = _tmRelacion(planet, house);
        const _tag = `<span style="font-size:10px;color:rgba(100,120,150,0.60);text-transform:uppercase;letter-spacing:0.04em;margin-left:8px">En tránsito</span>`;
        return `<div style="margin-bottom:14px;padding-bottom:14px;border-bottom:0.5px solid rgba(180,160,120,0.12)">
            <p style="${TXT}"><strong>${_pgA(planet)}${planet} en ${_sgA(sign)}${sign} · Casa ${house}</strong>${_tag}</p>
            <p style="${TXT2};margin-top:8px">${textMap[house]}</p>
            ${_p2 ? `<p style="${TXT2};margin-top:6px">${_p2}</p>` : ''}
        </div>`;
    };

    let blockTransitos = '';
    const _tmJupSec = _tmSection('Júpiter', _tmJupSign, _tmJupHouse, _tmJupText);
    const _tmSatSec = _tmSection('Saturno', _tmSatSign, _tmSatHouse, _tmSatText);
    if (_tmJupSec || _tmSatSec) {
        blockTransitos = `<div id="annual-premium-transitos" style="${CARD}">
            <span style="${LBL}">Las fuerzas de fondo este año</span>
            <p style="${TXT}">El ciclo del año tiene su motor interno. Júpiter y Saturno operan en paralelo — no como protagonistas de tu ciclo, sino como el clima en el que ese motor trabaja.</p>
            <div style="margin-top:14px">${_tmJupSec}${_tmSatSec}</div>
        </div>`;
    }

    // ── GADGET 3: ESPEJO TEMPORAL v1.0 ───────────────────────────────────────
    // Cierre de AÑO Premium — después de Tránsitos. Responde: ¿qué significa este momento?
    // Línea temporal horizontal: pasado ← HOY → eclipse → fin de ciclo.
    (function _buildEspejo() {
        const _xIni=20, _xFin=300, _ancho=280, _yL=60;
        const _pxPasado = _crCyclePct !== null ? Math.round((_ancho*_crCyclePct)/100) : 0;
        const _xHoy = _xIni + _pxPasado;
        // Marcador HOY
        const _markerHoy = _crCycleMonth ? `
            <line x1="${_xHoy}" y1="42" x2="${_xHoy}" y2="68" stroke="#d7c188" stroke-width="1.5" class="espejo-hoy-glow"/>
            <polygon points="${_xHoy},42 ${_xHoy-3},37 ${_xHoy+3},37" fill="#d7c188"/>
            <text x="${_xHoy}" y="18" text-anchor="middle" fill="#f5f0e8" style="font-size:10px;font-weight:bold;letter-spacing:0.5px;font-family:system-ui,sans-serif">AHORA</text>
            <text x="${_xHoy}" y="29" text-anchor="middle" fill="#d7c188" style="font-size:8px;font-weight:500;font-family:system-ui,sans-serif">MES ${_crCycleMonth}</text>` : '';
        // Marcador Eclipse (posición real futura — usa _crEclipsePct, no _crCyclePct)
        let _markerEcl = '';
        if (_crEclipsePct !== null) {
            const _xEcl = _xIni+Math.round((_ancho*_crEclipsePct)/100);
            _markerEcl = `
                <g transform="translate(${_xEcl},${_yL}) rotate(45)" class="espejo-nodo" style="opacity:0.9"><rect x="-4" y="-4" width="8" height="8" fill="#f5f0e8" stroke="#0d1b2a" stroke-width="1" filter="url(#espejo-glow)"/></g>
                <text x="${_xEcl}" y="48" text-anchor="middle" fill="#f5f0e8" style="font-size:8px;font-weight:500;font-family:system-ui,sans-serif">◆ Eclipse</text>
                ${_crNextEclTxt ? `<text x="${_xEcl}" y="95" text-anchor="middle" fill="rgba(245,240,232,0.4)" style="font-size:7.5px;font-family:system-ui,sans-serif">${_crNextEclTxt}</text>` : ''}`;
        }
        // Planetas — ID corregido a 'espejo-planetas-group' (coherente con HTML)
        let _planetsE = '';
        if (_crJupH) { const _xJ=_xIni+Math.round((_ancho*(_crJupH-1))/12); _planetsE+=`<g transform="translate(${_xJ},112)" class="espejo-nodo" style="opacity:0.55"><circle r="1" fill="#7eb8c9" cx="0" cy="-10"/><text x="0" y="0" text-anchor="middle" fill="#7eb8c9" style="font-size:10px;font-family:sans-serif">♃</text></g>`; }
        if (_crSatH) { const _xS=_xIni+Math.round((_ancho*(_crSatH-1))/12); _planetsE+=`<g transform="translate(${_xS},112)" class="espejo-nodo" style="opacity:0.55"><circle r="1" fill="#a0a8b0" cx="0" cy="-10"/><text x="0" y="0" text-anchor="middle" fill="#a0a8b0" style="font-size:10px;font-family:sans-serif">♄</text></g>`; }
        const _diasRestantes = _crDaysSince !== null ? 365 - _crDaysSince : null;
        const _legendE = _crDaysSince !== null
            ? `Llevas <strong>${_crDaysSince} días</strong> en tu año de <strong>${lordOriginal}</strong>. ${_diasRestantes !== null ? `Faltan ${_diasRestantes} días para el próximo ciclo.` : ''}`
            : `Año de <strong>${lordOriginal}</strong>`;
        window._espejoHTML = `<div id="annual-premium-espejo" style="background:#0d1b2a;border-radius:24px;padding:24px;margin-bottom:12px;box-shadow:0 10px 25px -5px rgba(0,0,0,0.3),inset 0 1px 1px rgba(255,255,255,0.1);display:flex;flex-direction:column;align-items:center;box-sizing:border-box">
            <p style="margin:0 0 16px;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(245,240,232,0.4);text-align:center">EL MOMENTO ACTUAL DEL CICLO</p>
            <svg viewBox="0 0 320 120" width="100%" style="overflow:visible">
                <defs><filter id="espejo-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.5" result="blur"/><feComposite in="SourceGraphic" in2="blur" operator="over"/></filter></defs>
                <line x1="20" y1="60" x2="300" y2="60" stroke="rgba(255,255,255,0.1)" stroke-width="3" stroke-linecap="round"/>
                <line x1="20" y1="60" x2="${_xIni+_pxPasado}" y2="60" stroke="#b8a070" stroke-width="3" stroke-linecap="round"/>
                <circle cx="20" cy="60" r="3.5" fill="#b8a070"/>
                <text x="20" y="80" text-anchor="middle" fill="rgba(245,240,232,0.4)" style="font-size:8px;letter-spacing:0.5px;font-family:system-ui,sans-serif">Inicio</text>
                <circle cx="300" cy="60" r="3.5" fill="rgba(255,255,255,0.2)"/>
                <text x="300" y="80" text-anchor="middle" fill="rgba(245,240,232,0.4)" style="font-size:8px;letter-spacing:0.5px;font-family:system-ui,sans-serif">Fin</text>
                ${_markerHoy}${_markerEcl}
                <g id="espejo-planetas-group">${_planetsE}</g>
            </svg>
            <p style="margin:12px 0 0;font-size:11px;color:rgba(245,240,232,0.5);letter-spacing:0.3px;text-align:center;line-height:1.4">${_legendE}</p>
        </div>`;
    })();
    const blockEspejo = window._espejoHTML || '';
    delete window._espejoHTML;

    // Cierre del bloque AÑO Premium — remate visual después del Espejo Temporal
    const blockCierre = `<div id="annual-premium-cierre" style="display:flex;flex-direction:column;align-items:center;padding:40px 24px 16px;gap:14px">
        <span style="font-size:20px;color:rgba(215,193,136,0.75);letter-spacing:4px">✦</span>
        <p style="margin:0;font-size:12px;color:rgba(245,240,232,0.55);letter-spacing:1px;text-align:center;font-style:italic">Tu ciclo continúa.</p>
        <button onclick="document.querySelector('#annual-premium-cronos')?.scrollIntoView({behavior:'smooth',block:'start'});" style="background:none;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:5px;padding:10px 20px;opacity:0.65;transition:opacity 0.2s" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.65'">
            <span style="font-size:16px;color:#d7c188">↑</span>
            <span style="font-size:10px;color:#d7c188;letter-spacing:1.5px;text-transform:uppercase;font-weight:700">Volver al inicio del año</span>
        </button>
    </div>`;

    // Gadgets intercalados — Cronoesfera (apertura) · Mapa (intermedio) · Espejo (cierre)
    // Regla: cada gadget en el punto donde mejor ayuda a leer el módulo.
    container.innerHTML = `${blockCronos}${blockA}${blockB}${blockC}${blockD}${blockMapa}${blockActivaciones}${blockEclipses}${blockTransitos}${blockEspejo}${blockCierre}`;

    // TRADUCCIÓN PSICOLÓGICA DE ACTIVACIONES — Capa C (MOVIMIENTO)
    const HOUSE_ACTIVATION_NARRATIVE = {
      'Sol': {
        1: 'La energía del ciclo ilumina tu presencia — hay impulso hacia ser visto y hacia iniciativas que te representan directamente.',
        2: 'El foco se orienta hacia los recursos y el valor propio — lo que construyes o consolidas este tramo tiene peso real.',
        3: 'El movimiento es mental y comunicativo — ideas, intercambios y conexiones próximas toman protagonismo.',
        4: 'La energía se vuelve hacia lo íntimo y lo raíz — el hogar, el origen y lo que sostiene piden atención.',
        5: 'Hay apertura hacia la expresión y la creatividad — lo que haces con genuina alegría encuentra su momento.',
        6: 'El impulso se orienta hacia el trabajo concreto y el cuerpo — la constancia y el orden tienen su recompensa ahora.',
        7: 'La energía se mueve hacia los vínculos — las relaciones importantes, los acuerdos y lo que compartes con otros.',
        8: 'El foco va hacia la transformación profunda — lo que debe renovarse, cerrarse o trascenderse está activo.',
        9: 'El movimiento es expansivo — aprendizaje, horizonte y búsqueda de sentido cobran fuerza.',
        10: 'La energía apunta hacia lo público y el propósito — lo que construyes hacia el mundo tiene visibilidad.',
        11: 'El impulso se orienta hacia lo colectivo — proyectos compartidos, ideales y redes de afinidad.',
        12: 'La energía opera en silencio — procesos internos, elaboración invisible y escucha profunda antes que acción exterior.'
      },
      'Luna': {
        1: 'El ritmo emocional es visible — tu estado interno se refleja directamente en cómo te presentas.',
        2: 'Las necesidades emocionales se conectan con la seguridad y los recursos — lo que te nutre pide atención.',
        3: 'El mundo emocional se expresa a través de palabras e intercambios — la comunicación tiene carga afectiva.',
        4: 'El ritmo emocional vuelve al origen — el hogar, la familia y lo que da base son el centro.',
        5: 'Las emociones buscan expresión — lo creativo, lo lúdico y el afecto son el canal natural ahora.',
        6: 'El ritmo emocional se ancla en la rutina y el cuerpo — el bienestar depende de lo cotidiano.',
        7: 'Las necesidades emocionales se activan en los vínculos — lo que das y recibes en las relaciones pesa.',
        8: 'El ritmo emocional toca capas profundas — hay movimiento interior que no siempre es visible pero sí real.',
        9: 'El mundo emocional busca expansión y sentido — el deseo de comprender y trascender lo cotidiano.',
        10: 'Las emociones se conectan con el propósito y el rol público — lo que sientes sobre tu trayectoria.',
        11: 'El ritmo emocional se orienta hacia lo colectivo — los ideales compartidos y la pertenencia.',
        12: 'Las emociones operan en profundidad y en silencio — lo que procesas internamente tiene más peso que lo que expresas.'
      },
      'Marte': {
        1: 'El impulso es directo y personal — hay energía para iniciativas que te representan y que parten desde ti.',
        2: 'La acción se orienta hacia consolidar recursos y valor propio — construir, producir, sostener.',
        3: 'La energía es rápida y comunicativa — ideas que se accionan, intercambios que mueven.',
        4: 'El impulso trabaja en el interior — en el hogar, en los cimientos, en lo que da base.',
        5: 'La energía busca expresión activa — crear, jugar, arriesgar con genuinas ganas.',
        6: 'El impulso va hacia el trabajo concreto — eficiencia, mejora, el placer de hacer bien.',
        7: 'La acción se mueve hacia los vínculos — acuerdos, negociaciones, la energía en lo compartido.',
        8: 'El impulso toca lo que debe transformarse — lo que requiere valentía para morir o renacer.',
        9: 'La energía es expansiva y orientada al horizonte — aprender, explorar, ir más allá.',
        10: 'El impulso apunta al propósito público — construir, liderar, hacerse visible.',
        11: 'La acción se orienta hacia lo colectivo — proyectos que trascienden lo individual.',
        12: 'La energía de este ciclo se mueve hacia dentro. No es un momento de acción visible, sino de procesos que necesitan silencio para madurar. Lo que trabajas ahora en privado tiene fuerza real.'
      },
      'Venus': {
        1: 'La atracción y el valor se orientan hacia ti mismo — presencia, imagen y lo que proyectas.',
        2: 'Venus activa el placer de los recursos y lo sensorial — el disfrute de lo que posees y construyes.',
        3: 'El vínculo y la belleza se expresan en palabras — conversaciones que nutren, ideas que conectan.',
        4: 'La armonía busca el hogar y el origen — crear belleza y bienestar en lo íntimo.',
        5: 'Venus en su elemento — el placer, la creatividad y el amor encuentran expresión natural.',
        6: 'El vínculo se conecta con el servicio y el cuerpo — el cuidado y el bienestar cotidiano.',
        7: 'La energía de vínculo y atracción se activa plenamente en las relaciones — los acuerdos y el amor.',
        8: 'La atracción toca lo profundo — lo que une más allá de lo superficial, la intimidad real.',
        9: 'Venus busca expansión y belleza en las ideas — el placer del conocimiento y el horizonte.',
        10: 'El valor y la atracción se orientan al propósito público — lo que construyes tiene magnetismo.',
        11: 'La conexión se activa en lo colectivo — el placer de pertenecer y de crear con otros.',
        12: 'Venus opera en silencio — el amor y el valor se elaboran internamente antes de expresarse.'
      },
      'Júpiter': {
        1: 'La expansión es personal y directa — hay oportunidad de crecimiento en lo que emprendes desde ti.',
        2: 'Júpiter amplifica los recursos — hay potencial de crecimiento material y de valor propio.',
        3: 'La expansión es mental y comunicativa — el aprendizaje, los contactos y las ideas se multiplican.',
        4: 'El crecimiento toca el origen y el hogar — ampliar la base, el bienestar íntimo.',
        5: 'Júpiter potencia la creatividad y el gozo — hay abundancia en la expresión y el disfrute.',
        6: 'La expansión va al trabajo y al cuerpo — mejoras en salud, eficiencia y proceso cotidiano.',
        7: 'Júpiter amplifica los vínculos — oportunidades de crecimiento a través de los otros.',
        8: 'La expansión toca la transformación — lo que debe crecer más allá de sus límites actuales.',
        9: 'Júpiter en su casa — la expansión, el viaje, el conocimiento y el sentido se multiplican.',
        10: 'El crecimiento se orienta al propósito público — la trayectoria y el reconocimiento.',
        11: 'La expansión es colectiva — los proyectos y las redes de afinidad crecen.',
        12: 'Júpiter amplifica lo que opera en silencio — el crecimiento espiritual, la generosidad invisible.'
      }
    };

    const CONJUNCTION_NARRATIVE = {
      'Sol': { default: 'El tránsito del Sol activa un punto natal — hay iluminación sobre algo que empieza a ser visible.' },
      'Luna': { default: 'La Luna toca un punto natal — hay resonancia emocional con algo de tu carta que se activa brevemente.' },
      'Marte': { default: 'Marte en contacto con un punto natal — hay energía concentrada sobre algo que pide movimiento o decisión.' },
      'Venus': { default: 'Venus en contacto con un punto natal — hay apertura afectiva o de valor sobre algo de tu carta.' },
      'Júpiter': { default: 'Júpiter amplifica un punto natal — hay oportunidad de expansión en el área que toca.' },
      'Saturno': { default: 'Saturno en contacto con un punto natal — hay presión que pide estructura, madurez o consolidación.' }
    };

    const NO_ACTIVATION_TEXT = {
      'Sol': 'El Sol transita por tu carta sin activaciones directas en este momento. El proceso del año avanza en su propio ritmo.',
      'Luna': 'La Luna transita sin activaciones directas ahora. El ritmo emocional está en pausa activa.',
      'Marte': 'Marte no tiene activaciones directas sobre tu carta en este momento. El impulso del año opera de fondo, acumulando.',
      'Venus': 'Venus transita sin contactos directos ahora. La armonía del ciclo opera de forma sutil.',
      'Júpiter': 'Júpiter no tiene activaciones directas en este momento. La expansión trabaja a largo plazo.',
      'Saturno': 'Saturno no tiene activaciones directas ahora. La estructura del ciclo se consolida sin presión puntual.',
      'Mercurio': 'Mercurio transita sin activaciones directas. La mente del ciclo procesa en quietud.'
    };

    function translateActivation(activation, lordOriginal) {
        if (activation.type === 'HOUSE') {
            const houseNarratives = HOUSE_ACTIVATION_NARRATIVE[activation.transit];
            if (houseNarratives && houseNarratives[activation.house]) {
                return houseNarratives[activation.house];
            }
        }
        if (activation.type === 'CONJUNCIÓN' || activation.type === 'OPOSICIÓN') {
            const conjNarr = CONJUNCTION_NARRATIVE[activation.transit];
            return conjNarr ? conjNarr.default : null;
        }
        return null;
    }

    const transitsEl = document.getElementById('annual-premium-transits');
    
    // Nivel 1: Validación Crítica (Planetas ≥ 7 y Casas == 12)
    const hasNatalPlanets = state.user?.natalPlanets && Object.keys(state.user.natalPlanets).length >= 7;
    const _rawHouses = state.user?.houses || state.user?.natalHouses || state.user?.natal_context?.houses || state.user?.chart?.houses || null;
    let _natalHousesArray = [];
    if (_rawHouses) {
        if (Array.isArray(_rawHouses)) {
            _natalHousesArray = _rawHouses;
        } else if (typeof _rawHouses === 'object') {
            _natalHousesArray = Object.values(_rawHouses);
        }
    }
    const hasHouses = _natalHousesArray.length >= 12;
    const hasCriticalData = hasNatalPlanets && hasHouses;

    // Nivel 2: Validación Suave (Coordenadas de nacimiento)
    const hasBirthData = state.user?.birthLat !== undefined && state.user?.birthLng !== undefined;

    if (!hasCriticalData) {
        if (transitsEl) {
            if (!hasBirthData) {
                transitsEl.textContent = `Para calcular los tránsitos precisos de ${lordOriginal}, completa tu lugar de nacimiento en tu perfil.`;
            } else {
                transitsEl.textContent = `Calculando la resonancia de tu carta...`;
            }
        }
    } else if (window.transit_engine) {
        try {
            const t = window.Astronomy.MakeTime(new Date());
            const activations = await window.transit_engine.getNatalActivations(state.user.natalPlanets, _natalHousesArray, t, lang);
            
            const lordActivations = activations.filter(a => a.transit === lordOriginal);
            const narrativeTexts = lordActivations
                .map(a => translateActivation(a, lordOriginal))
                .filter(Boolean);

            const finalText = narrativeTexts.length > 0
                ? narrativeTexts[0]
                : (NO_ACTIVATION_TEXT[lordOriginal] || `${lordOriginal} transita por tu carta sin activaciones directas en este momento.`);

            const liveTransitsEl = document.getElementById('annual-premium-transits');
            if (liveTransitsEl) {
                liveTransitsEl.textContent = finalText;
            }
        } catch(e) {
            const liveTransitsEl = document.getElementById('annual-premium-transits');
            if (liveTransitsEl) liveTransitsEl.textContent = `El movimiento de ${lordOriginal} sobre tu carta continúa su curso este año.`;
        }
    }
}

window.renderAnnualNarrative = (content, lang) => {
    if (!content) return;

    // Poblar datos de la guía contextual
    window.KAIROS_ANNUAL_GUIDE_DATA = {
        asc: state.user.asc,
        activeHouse: content.profection ? content.profection.house : '',
        activeSign: content.profection ? content.profection.sign : '',
        lord: content.lord ? content.lord.planet : ''
    };
    const doc = document;
    const update = (id, text) => {
        const el = doc.getElementById(id);
        if (el) el.innerText = text;
    };
    
    update('annual-cycle-title', content.header.title);
    if (content.ano_eje) update('annual-cycle-title-sub', content.ano_eje);
    update('annual-cycle-phrase', `"${content.header.phrase}"`);
    update('annual-scenario-desc', content.scenario.desc);
    update('annual-lord-tone', content.lord.tone.toUpperCase());
    update('annual-lord-request', content.lord.request);
    update('annual-filter-text', content.filter);
    update('annual-triplete-clima', content.triplete.clima);
    update('annual-triplete-direccion', content.triplete.direccion);
    update('annual-triplete-cuidado', content.triplete.cuidado);

    // Renderizar Cómo Habitar — BUG-001: content.ano_habitar no existe, el campo real es content.practical
    const _practicalText = Array.isArray(content.practical)
        ? content.practical.map(p => typeof p === 'string' ? p : (p.text || p.label || p.content || p.desc || '')).join(' ')
        : (content.practical || '');
    update('annual-practical-key', _practicalText);

    // Bloque Técnico Secundario (Capa de Transparencia)
    if (content.profection) {
        const houseEl = doc.getElementById('annual-tech-house');
        if (houseEl) houseEl.innerText = `CASA ${content.profection.house}`;

        const signEl = doc.getElementById('annual-tech-sign');
        if (signEl) {
            signEl.innerHTML = `<span class="inline-flex items-center justify-center gap-1">
                <span class="w-4 h-4 opacity-70">${KAIROS_ICONS.zodiac[content.profection.sign] || ''}</span>
                <span>${content.profection.sign.toUpperCase()}</span>
            </span>`;
        }

        const lordEl = doc.getElementById('annual-tech-lord');
        if (lordEl) {
            lordEl.innerHTML = `<span class="inline-flex items-center justify-center gap-1">
                <span class="w-4 h-4 opacity-70">${KAIROS_ICONS.planets[content.lord.planet] || ''}</span>
                <span>${content.lord.planet.toUpperCase()}</span>
            </span>`;
        }

        update('annual-profection-expl', `Sincronización basada en Profecciones Anuales (${content.profection.meaning.split('.')[0]}.).`);
    }

    // [SECCIÓN F] Regulación Emocional Anual
    const annualRegContainer = doc.getElementById('annual-regulatory-close');
    if (annualRegContainer && content.regulatory_close) {
        annualRegContainer.innerText = content.regulatory_close;
        annualRegContainer.classList.remove('hidden');
    }
    
    console.log("🎨 KAIROS: Narrativa Anual (Refined Structure) Renderizada.");
};

/**
 * Renderizador de Narrativa SEMANAL v0.2.
 * Nueva estructura: Verbo ampliado, gráfica de curva SVG, Tres Tramos, capa premium oculta.
 */
// 🔒 SEMANA CONGELADA v0.2 — NO MODIFICAR SIN DESBLOQUEO EXPLÍCITO
// Validada en producción el 2026-03-19. Baseline estable.
// Cambios autorizados solo si KAIROS_FLAGS.weekly_locked === false.
function renderWeeklyNarrative(content, lang) {
    const update = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
    const safe   = (v, fallback = '') => (v !== undefined && v !== null) ? v : fallback;

    // 1. Verbo y Microexplicación
    update('weekly-verb-title', safe(content.verbo, 'SEMANA'));
    // No sobreescribimos weekly-verb-desc: ya tiene la microexplicación fija y human-first en el HTML

    // 0. Intro semanal D.4.2-B
    update('weekly-intro-text', safe(content.weekly_intro, ''));

    // 2. Gráfica SVG de Ritmo Semanal
    const skeleton  = document.getElementById('weekly-chart-skeleton');
    const chartReal = document.getElementById('weekly-chart-real');
    const svg       = document.getElementById('weekly-curve-svg');
    const labelsEl  = document.getElementById('weekly-day-labels');

    if (svg && content.intensity_map && content.intensity_map.length) {
        const days   = content.intensity_map;
        const n      = days.length;
        const W      = 420;
        const H      = 100;
        const padX   = 30;
        const padY   = 10;
        const plotW  = W - padX * 2;
        const plotH  = H - padY * 2;

        // Paleta KAIROS — apertura cálida / neutral / densidad contenida — sin semáforo
        const colorHex = { green: '#C4A46A', amber: '#9DA8B5', rose: '#7C8CA0' };

        // Calcular coordenadas XY para cada día (normalización relativa)
        const _vols = days.map(d => d.voltage);
        const _minV = Math.min(..._vols);
        const _rangeV = Math.max(Math.max(..._vols) - _minV, 10);

        const points = days.map((d, i) => ({
            x: padX + (i / (n - 1)) * plotW,
            y: padY + plotH - ((d.voltage - _minV) / _rangeV) * plotH,
            ...d
        }));

        // Crear curva suavizada (cubic bezier)
        let pathD = `M ${points[0].x} ${points[0].y}`;
        for (let i = 0; i < points.length - 1; i++) {
            const cp1x = points[i].x + (points[i+1].x - points[i].x) / 2;
            const cp2x = points[i].x + (points[i+1].x - points[i].x) / 2;
            pathD += ` C ${cp1x} ${points[i].y}, ${cp2x} ${points[i+1].y}, ${points[i+1].x} ${points[i+1].y}`;
        }

        // Construir SVG completo
        // FIX CRÍTICO: <defs> SIEMPRE al inicio del SVG para que los degradados
        // se resuelvan antes de usarse (fix Safari/WebKit/Chrome mobile)
        let svgContent = `
            <defs>
                <linearGradient id="weeklyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#C4A46A" stop-opacity="0.15"/>
                    <stop offset="100%" stop-color="#C4A46A" stop-opacity="0"/>
                </linearGradient>
            </defs>`;


        // Curva de fondo (relleno) — referencia el degradado ya definido
        const fillPath = pathD + ` L ${points[n-1].x} ${H} L ${padX} ${H} Z`;
        svgContent += `<path d="${fillPath}" fill="url(#weeklyGradient)" opacity="1"/>`;

        // Línea de ritmo — stroke más visible (era #cbd5e1 casi invisible)
        svgContent += `<path d="${pathD}" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

        // Puntos de cada día con color real + temporalidad
        points.forEach((p, i) => {
            const hex     = colorHex[p.color] || '#94a3b8';
            const radius  = p.isProfectionDay ? 7 : 5;
            const opacity = p.isPast ? 0.35 : p.isCurrent ? 1.0 : 0.85;
            const strokeAttr = p.isProfectionDay ? 'stroke="white" stroke-width="2"' : `stroke="${hex}" stroke-width="1"`;

            // Marcador de día presente — halo suave antes del punto
            if (p.isCurrent) {
                svgContent += `<circle cx="${p.x}" cy="${p.y}" r="${radius + 5}"
                    fill="none" stroke="${hex}" stroke-width="1" opacity="0.22"/>`;
            }

            // Marcador de cambio lunar — anillo exterior sutil (reemplaza ⚡)
            if (p.isMoonIngress) {
                svgContent += `<circle cx="${p.x}" cy="${p.y}" r="${radius + 3.5}"
                    fill="none" stroke="${hex}" stroke-width="0.75" opacity="${opacity * 0.45}"/>`;
            }

            svgContent += `<circle cx="${p.x}" cy="${p.y}" r="${radius}"
                fill="${hex}" ${strokeAttr} opacity="${opacity}"/>`;
        });

        svg.innerHTML = svgContent;

        // Etiquetas de días debajo de la gráfica
        if (labelsEl) {
            labelsEl.innerHTML = points.map(p => `
                <div class="flex-1 flex flex-col items-center gap-0.5" style="opacity:${p.isPast ? 0.35 : p.isCurrent ? 1.0 : 0.85}">
                    <span class="text-[8px] font-black text-warm-grey/70">${safe(p.dayShort, 'D')}</span>
                    <span class="text-[7px] text-warm-grey/40">${(p.dateLabel || '').split(' ')[0]}</span>
                </div>
            `).join('');
        }

        // Mostrar gráfica real, ocultar skeleton
        if (skeleton)  skeleton.classList.add('hidden');
        if (chartReal) chartReal.classList.remove('hidden');
    }

    // 4. Tres Tramos
    const tramosContainer = document.getElementById('weekly-tramos-container');
    if (tramosContainer && content.tramos && content.tramos.length) {
        tramosContainer.innerHTML = content.tramos.map((tramo, idx) => {
            const tramoKey = idx === 0 ? 'arranque' : idx === 1 ? 'centro' : 'cierre';
            const signoRaw = safe(tramo.signo, '');
            const signoId  = signoRaw.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
            const casaNum  = safe(tramo.casa, '');

            const hasProfBadge = tramo.hasProfection
                ? `<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-primary text-white cursor-pointer hover:opacity-70 transition-opacity" onclick="window.openKairosGuideWithContent('weekly-chip-anio')">Año</span>`
                : '';
            const hasIngressBadge = tramo.hasIngress
                ? `<span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-amber-100 text-amber-700 cursor-pointer hover:opacity-70 transition-opacity" onclick="window.openKairosGuideWithContent('weekly-chip-cambio-lunar')">⚡ Cambio lunar</span>`
                : '';
            const tramoLabel = idx === 0 ? 'ARRANQUE' : idx === 1 ? 'CENTRO' : 'CIERRE';

            const tramoId = `weekly-tramo-${idx}`;

            return `
            <div id="${tramoId}" class="p-6 rounded-[2rem] border border-slate-100 bg-white shadow-sm animate-fade-in"
                 style="animation-delay: ${idx * 0.15}s">
                <div class="flex justify-between items-start mb-3">
                    <h4 class="text-[9px] font-black uppercase tracking-[0.3em] text-primary cursor-pointer hover:opacity-70 transition-opacity" onclick="window.openKairosGuideWithContent('weekly-chip-${tramoKey}')">${tramoLabel}</h4>
                    <span class="text-[9px] font-bold text-warm-grey/70 px-3 py-1 rounded-full bg-slate-50">${safe(tramo.rango, '')}</span>
                </div>
                <p class="text-xs leading-relaxed text-warm-grey/90">${safe(tramo.narrativa, '')}</p>
                <div class="mt-4 flex flex-wrap gap-2">
                    <span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-slate-100 text-warm-grey cursor-pointer hover:opacity-70 transition-opacity" onclick="window.openKairosGuideWithContent('weekly-sign-${signoId}')">${signoRaw}</span>
                    <span class="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-slate-100 text-warm-grey cursor-pointer hover:opacity-70 transition-opacity" onclick="window.openKairosGuideWithContent('weekly-house-${casaNum}')">Casa ${casaNum}</span>
                    ${hasProfBadge}
                    ${hasIngressBadge}
                </div>
            </div>`;
        }).join('');
    } else if (tramosContainer && (!content.tramos || !content.tramos.length)) {
        tramosContainer.innerHTML = `
            <div class="p-6 rounded-[2rem] border border-dashed border-slate-200 text-center">
                <p class="text-xs text-warm-grey/50 italic">El ritmo semanal se sincroniza con las efemérides en curso.</p>
            </div>`;
    }

    // 5. Capa futura premium (siempre oculta en producción)
    const premiumSection = document.getElementById('weekly-future-premium');
    if (premiumSection) {
        const signals = content.weekly_signals;
        if (signals && signals.enabled === true) {
            premiumSection.classList.remove('hidden');
            update('weekly-premium-activaciones', signals.activaciones_personales?.narrative || '—');
            update('weekly-premium-ventanas',     signals.ventanas_favorables?.narrative    || '—');
            update('weekly-premium-senales',      signals.senales_especiales?.narrative     || '—');
        } else {
            premiumSection.classList.add('hidden');
        }
    }


}

window.renderWeeklyNarrative = renderWeeklyNarrative;

// ── KTSE-v1: Kairos Temporal Signature Engine ─────────────────────────────────
function _buildTemporalSignature(lordKey, natalPlanets) {
    const lord = natalPlanets[lordKey] || {};
    const luna = natalPlanets['LUNA'] || {};

    // Normalizar signo: eliminar tildes, minúsculas
    const signRaw = (lord.sign || '').toLowerCase().trim();
    const signKey = signRaw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    // Elemento del signo natal → amplitud
    const _elemMap = {
        'aries': 1.18, 'leo': 1.18, 'sagitario': 1.18,
        'cancer': 1.12, 'escorpio': 1.12, 'piscis': 1.12,
        'geminis': 0.88, 'libra': 0.88, 'acuario': 0.88,
        'tauro': 0.78, 'virgo': 0.78, 'capricornio': 0.78,
    };
    const elemAmp = _elemMap[signKey] || 1.0;

    // Casa natal del lord → offset de base
    const house = lord.house || 6;
    const casaOffset = [1, 4, 7, 10].includes(house) ? +0.06
                     : [2, 5, 8, 11].includes(house) ? +0.02
                     : -0.03;

    // Grado de Luna natal → microfase
    const lunaPhase = (luna.longitude || 0) % 30 / 30 * 0.6;

    // Modalidad del signo natal → ritmo (periodo)
    const _modalMap = {
        'aries': 'cardinal', 'cancer': 'cardinal',
        'libra': 'cardinal', 'capricornio': 'cardinal',
        'tauro': 'fijo', 'leo': 'fijo',
        'escorpio': 'fijo', 'acuario': 'fijo',
        'geminis': 'mutable', 'virgo': 'mutable',
        'sagitario': 'mutable', 'piscis': 'mutable',
    };
    const modalidad = _modalMap[signKey] || 'fijo';
    const periodMod = modalidad === 'cardinal' ? 0.93
                    : modalidad === 'mutable'  ? 1.00
                    : 1.07;
    const isMutable = modalidad === 'mutable';

    return { elemAmp, casaOffset, lunaPhase, periodMod, isMutable };
}
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Renderizador de Narrativa MENSUAL v1.3 [DETERMINISTIC_PROPORTION].
 */
function renderMonthlyNarrative(content, lang) {
    /* console.log("%c[KAIROS RENDER] Building Monthly Narrative v1.5 [EXPANDABLES]...", "color: #C05C33; font-weight: bold;"); */
    
    const update = (id, val) => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = val;
        } else {
            console.warn(`[KAIROS RENDER] Element not found: ${id}`);
        }
    };

    // [0] Títulos y Conceptos Editorial (MES-EDITORIAL-1)
    const axisTitle = content.eje_mes || content.title || content.verbo || 'ATRAVESAR EL PROCESO';
    update('monthly-verb-title', axisTitle);

    // Deactivate redundant header subtitle, fallback to static HTML placeholder (sprint visual requirement)
    // update('monthly-subtitle', content.subtitle || content.proceso_subtitulo);

    // Restore the large, prominent identificativa instance of "Proceso en [Signo]" inside the white island
    if (content.subtitle || content.proceso_subtitulo) {
        update('monthly-proceso-destacado', content.subtitle || content.proceso_subtitulo);
    }

    // [0.1] Isla Interior — [REFINADO]
    const introText = content.mainConcept || content.concept || content.intro || content.apertura || '';
    update('monthly-intro-text', introText);

    // [0.2] Firma Dinámica — Casa activa · Señor del Año · Mes
    const today = new Date();
    const monthName = today.toLocaleDateString('es-ES', { month: 'long' }).toUpperCase();
    const activeHouse = content.conexion_anual?.nombre || '';
    const lord = content.lord || '';
    
    let firmaParts = [];
    if (activeHouse) firmaParts.push(activeHouse);
    if (lord) firmaParts.push(lord);
    if (monthName) firmaParts.push(monthName);
    
    const firmaFinal = firmaParts.length > 1 ? firmaParts.join(' · ') : '';
    update('monthly-firma', firmaFinal);

    // [A] CLAVES DEL MES (Métricas transformadas)
    if (content.verbo || content.eje_mes) {
        update('monthly-key-focus', content.verbo || content.eje_mes);
        document.getElementById('monthly-keys-grid')?.classList.remove('hidden');
    if (content.tono_ciclo) {
        update('monthly-key-intensity', content.tono_ciclo);
    }
    }

    // [B] Timeline y Onda de Energía 
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const todayDate = today.getDate();
    
    // Mapeo Determinístico 0-100% v1.5
    const todayProgress = ((todayDate - 1) / (lastDay - 1)) * 100;

    update('monthly-current-month', monthName);

    const dateBadge = document.getElementById('monthly-today-date-badge');
    if (dateBadge) {
        dateBadge.innerText = `${todayDate} DE ${monthName}`;
    }
    const cursor = document.getElementById('monthly-today-cursor');
    if (cursor) {
        cursor.style.left = `${todayProgress}%`;
        cursor.style.transition = "left 1.5s cubic-bezier(0.4, 0, 0.2, 1)";
    }

    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayObj = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    update('monthly-first-day', firstDay.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }).toUpperCase());
    update('monthly-last-day', lastDayObj.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }).toUpperCase());

    const svgLayer = document.getElementById('monthly-wave-svg');
    if (svgLayer) {
        const allHitos = content.hitos || [];
        
        // 1. ANCLAJES LUNARES — timezone-safe
        const _safeDay = (value) => {
            if (!value) return 1;
            if (value instanceof Date) return value.getDate();
            const str = String(value);
            const datePart = str.includes('T') ? str.split('T')[0] : str;
            const parsed = new Date(`${datePart}T12:00:00`);
            const day = parsed.getDate();
            return Number.isFinite(day) ? day : 1;
        };
        const nm = allHitos.find(h => h.label?.toLowerCase().includes('nueva'));
        const lm = allHitos.find(h => h.label?.toLowerCase().includes('llena'));
        const nmDate = nm ? _safeDay(nm.date) : 1;
        const lmDate = lm ? _safeDay(lm.date) : 15;

        // 2. MODULACIÓN SEMÁNTICA por tono_ciclo
        const tono = (content.tono_ciclo || '').toLowerCase();
        const tonoOffset   = tono.includes('asimilación')      ? -0.12 : 0.0;
        const tonoAmplitud = tono.includes('expansión activa') ?  1.05
                           : tono.includes('tensión creativa')  ?  1.08
                           : tono.includes('apertura')              ?  0.90
                           : 1.0;

        // 3. MODULACIÓN ARQUETÍPICA por Señor del Año (MES-GRAFICA-v2)
        const _lordWaveMap = {
            'marte':    { base: +0.02, amp: 1.20 },
            'mercurio': { base:  0.00, amp: 0.90 },
            'venus':    { base: +0.04, amp: 0.82 },
            'sol':      { base: +0.06, amp: 0.75 },
            'luna':     { base:  0.00, amp: 1.25 },
            'saturno':  { base: -0.03, amp: 0.78 },
            'júpiter':  { base: +0.07, amp: 0.88 },
        };
        const _lw = _lordWaveMap[(content.lord || 'sol').toLowerCase().trim()] || { base: 0, amp: 1.0 };
        const _lordBase = _lw.base;

        // 4. FIRMA TEMPORAL NATAL (KTSE-v1)
        const _natalCtx = (window.totalShadowContext && window.totalShadowContext.natal_context) || {};
        const _natalPlanets = _natalCtx.planets || {};
        const _lordKeyNatal = (content.lord || '').toUpperCase().trim().replace('Ú', 'U');
        const _sig = _buildTemporalSignature(_lordKeyNatal, _natalPlanets);
        const _periodFinal = 14.7 * _sig.periodMod;
        const _ampFinal = Math.max(0.28, Math.min(0.52, 0.4 * tonoAmplitud * _lw.amp * _sig.elemAmp));

        const curvePoints = [];
        for (let d = 0; d <= lastDay; d++) {
            const x = (d / lastDay) * 100;
            let intensity = (0.5 + tonoOffset + _lordBase + _sig.casaOffset) + _ampFinal * Math.sin((d - nmDate) / _periodFinal * Math.PI - (Math.PI/2) + _sig.lunaPhase);
            if (_sig.isMutable) intensity += 0.04 * Math.sin((d - nmDate) / (_periodFinal / 2) * Math.PI);
            if (!Number.isFinite(intensity)) intensity = 0.5;
            intensity = Math.max(0.05, Math.min(1.0, intensity));
            const dailyHito = allHitos.find(h => _safeDay(h.date) === d);
            const _hitoEsDelLord = dailyHito && dailyHito.planet &&
                dailyHito.planet.toLowerCase().trim() === (content.lord || '').toLowerCase().trim();
            if (dailyHito) intensity = Math.min(1.0, intensity + dailyHito.intensity * (_hitoEsDelLord ? 0.65 : 0.30));
            const y = 90 - (intensity * 82);
            curvePoints.push({ x, y, intensity, date: d });
        }

        const keyDay = curvePoints.reduce((max, p) => p.intensity > max.intensity ? p : max, curvePoints[0]);

        let pathD = `M ${curvePoints[0].x} ${curvePoints[0].y}`;
        for (let i = 0; i < curvePoints.length - 1; i++) {
            const p0 = curvePoints[i], p1 = curvePoints[i+1], cpX = p0.x + (p1.x - p0.x) / 2;
            pathD += ` S ${cpX} ${p0.y}, ${p1.x} ${p1.y}`;
        }
        const areaD = pathD + ` L 100 100 L 0 100 Z`;

        // 6. RENDER DE MARCADORES (Unificación 100% v1.9)
        let markers = ``;
        const getX_p = (d) => (d/lastDay)*100;
        const getY_p = (d) => curvePoints.find(p => p.date === d)?.y || 50;

        // Luna Nueva (Exacto a Leyenda: Círculo vacío)
        if (nm) {
            markers += `<circle cx="${getX_p(nmDate)}" cy="${getY_p(nmDate)}" r="1.5" fill="white" stroke="#C05C33" stroke-width="1" />`;
        }

        // Luna Llena (Exacto a Leyenda: Relleno suave)
        if (lm) {
            markers += `<circle cx="${getX_p(lmDate)}" cy="${getY_p(lmDate)}" r="2" fill="#C05C33" opacity="0.4" stroke="#C05C33" stroke-width="0.5" />`;
        }

        // Tu Punto (Dashed Halo + Dynamic Date)
        if (keyDay) {
            const longMonth = today.toLocaleDateString('es-ES', { month: 'long' }).toUpperCase();
            const keyDayLabel = `${keyDay.date} DE ${longMonth}`;
            
            // Actualización dinámica de la explicación v1.10
            const explNode = document.getElementById('monthly-graph-explanation');
            if (explNode) {
                const _tonoLabel = { 'apertura': 'Un mes de apertura de ciclo.', 'expansión activa': 'Un mes de expansión y culminación.', 'tensión creativa': 'Un mes de alta activación.', 'asimilación': 'Un mes de integración y cierre.' };
                const _tonoDesc = _tonoLabel[content.tono_ciclo] || 'El ciclo mensual en curso.';
                explNode.innerHTML = `"${_tonoDesc} El arco alcanza su punto más alto el <span class="font-black text-primary not-italic">${keyDayLabel}</span>."`;
            }

            markers += `
                <g class="animate-pulse">
                    <circle cx="${keyDay.x}" cy="${keyDay.y}" r="2.5" fill="white" stroke="#C05C33" stroke-width="0.8" stroke-dasharray="1,1" />
                    <text x="${keyDay.x}" y="${keyDay.y - 6}" text-anchor="middle" font-size="2.6" font-weight="900" fill="#C05C33" opacity="0.8">PICO DEL CICLO · ${keyDayLabel}</text>
                </g>
            `;
        }

        // Eventos Clave (Puntos mínimos)
        allHitos.filter(h => h.intensity >= 0.8 && h !== nm && h !== lm).slice(0, 3).forEach(h => {
             const d = new Date(h.date).getDate();
             markers += `<circle cx="${getX_p(d)}" cy="${getY_p(d)}" r="0.8" fill="#C05C33" opacity="0.2" />`;
        });

        const todayY = curvePoints.find(p => p.date === todayDate)?.y || 85;

        svgLayer.innerHTML = `
            <defs>
                <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#C05C33" stop-opacity="0.08" />
                    <stop offset="100%" stop-color="#C05C33" stop-opacity="0.0" />
                </linearGradient>
            </defs>
            <path d="${areaD}" fill="url(#waveGradient)" class="transition-all duration-1000" />
            <path d="${pathD}" fill="none" stroke="#C05C33" stroke-width="1.0" stroke-linecap="round" class="transition-all duration-1000" />
            ${markers}
            <!-- HOY (Prioridad #1) -->
            <g id="today-marker-group" class="transition-all duration-1000">
                <circle cx="${todayProgress}" cy="${todayY}" r="3" fill="#EE9B00" stroke="white" stroke-width="1" shadow="0 2px 4px rgba(0,0,0,0.1)" />
            </g>
        `;
    }

    // [C] HITOS DEL MES
    const hitosGrid = document.getElementById('monthly-hitos-grid');
    if (hitosGrid) {
        const _fmtProse = (iso) => { try { return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }); } catch(e) { return iso || 'Fecha'; } };
        const rawHitos = content.hitos || [];

        // D.4.4-D: Mostrar todos los eventos del mes; distinguir pasados visualmente
        const todayStart = new Date();
        todayStart.setHours(0,0,0,0);

        // G1: solo eventos futuros del mes actual — los pasados no se muestran
        const futureHitos = rawHitos.filter(hito => new Date(hito.date) >= todayStart);
        update('monthly-hitos-count', `${futureHitos.length} HITOS`);

        if (futureHitos.length === 0) {
            hitosGrid.innerHTML = `
                <div class="col-span-full py-8 text-center">
                    <div class="w-12 h-px bg-slate-200 mx-auto mb-5"></div>
                    <p class="text-[13px] text-warm-grey/50 italic tracking-tight leading-relaxed">El proceso del mes continúa sin tensiones destacadas.</p>
                    <p class="text-[11px] text-warm-grey/35 mt-1.5 tracking-tight">La energía permanece estable.</p>
                </div>
            `;
        } else {
            hitosGrid.innerHTML = futureHitos.map(hito => {
                const planetIcon = KAIROS_ICONS.planets[hito.planet] || '';
                const signIcon = KAIROS_ICONS.zodiac[hito.sign] || '';

                return `
                    <div class="p-6 rounded-[2.5rem] border border-slate-100 bg-white shadow-sm animate-fade-in relative overflow-hidden" data-planet="${hito.planet}">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex items-center gap-3">
                                <div class="flex items-center -space-x-1.5 translate-y-[-2px]">
                                    <div class="size-9 bg-slate-50 rounded-full flex items-center justify-center p-1.5 text-warm-grey border border-white shadow-sm monthly-hito-card-icon">${planetIcon}</div>
                                    <div class="size-9 bg-white border border-slate-100 rounded-full flex items-center justify-center p-1.5 text-slate-400 shadow-sm">${signIcon}</div>
                                </div>
                                <div>
                                    <span class="text-[11px] font-black text-warm-grey uppercase tracking-widest block leading-tight">${hito.label}</span>
                                    <span class="text-[8px] font-bold text-primary uppercase font-technical tracking-wider">${_fmtProse(hito.date)}</span>
                                </div>
                            </div>
                        </div>
                        <p class="text-[13px] leading-relaxed text-warm-grey/80 font-medium pr-2">${hito.texto}</p>
                    </div>
                `;
            }).join('');
        }
    }

    // [C2] PRÓXIMO PULSO (D.4.4-E2)
    const nextHitosData = content.next_hitos || [];
    if (nextHitosData.length > 0) {
        const _today2 = new Date();
        _today2.setHours(0,0,0,0);
        const _daysInMonth = new Date(_today2.getFullYear(), _today2.getMonth() + 1, 0).getDate();
        const _daysLeft = _daysInMonth - _today2.getDate();
        const _futureThisMes = (content.hitos || []).filter(h => new Date(h.date) >= _today2);
        const _showProximo = _futureThisMes.length === 0 || _daysLeft <= 7;

        if (_showProximo) {
            const _proxHitos = nextHitosData.slice(0, 3);
            const _hitosEl = document.getElementById('monthly-hitos-grid');
            if (_hitosEl) {
                let _proxContainer = document.getElementById('monthly-proximo-pulso');
                if (!_proxContainer) {
                    _proxContainer = document.createElement('div');
                    _proxContainer.id = 'monthly-proximo-pulso';
                    _proxContainer.className = 'mt-6';
                    _hitosEl.parentNode.insertBefore(_proxContainer, _hitosEl.nextSibling);
                }
                _proxContainer.innerHTML = `
                    <div class="mb-3">
                        <p class="text-[10px] font-black text-warm-grey/40 uppercase tracking-[0.4em]">PRÓXIMO PULSO</p>
                    </div>
                    <div class="space-y-3">
                        ${_proxHitos.map(hito => {
                            const pIcon = KAIROS_ICONS.planets[hito.planet] || '';
                            const sIcon = KAIROS_ICONS.zodiac[hito.sign] || '';
                            return `
                                <div class="p-5 rounded-[2rem] border border-slate-100 bg-slate-50/60 opacity-60">
                                    <div class="flex items-center gap-3 mb-2">
                                        <div class="flex items-center -space-x-1.5">
                                            <div class="size-7 bg-slate-100 rounded-full flex items-center justify-center p-1 text-warm-grey/60 border border-white">${pIcon}</div>
                                            <div class="size-7 bg-white border border-slate-100 rounded-full flex items-center justify-center p-1 text-slate-300">${sIcon}</div>
                                        </div>
                                        <div>
                                            <span class="text-[10px] font-black text-warm-grey/60 uppercase tracking-widest block leading-tight">${hito.label}</span>
                                            <span class="text-[7px] font-bold text-slate-400 uppercase font-technical tracking-wider">${hito.dateLabel}</span>
                                        </div>
                                    </div>
                                    <p class="text-[12px] leading-relaxed text-warm-grey/50 font-medium">${hito.shortText || hito.texto}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            }
        }
    }

    // [v650.5.85] D.4.11 hotfix — helpers de prosa (fechas completas + lowercase inicial)
    const _fmtProse = (iso) => { try { return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }); } catch(e) { return iso || 'Fecha'; } };
    const _lcFirst  = (s) => (s && s.length) ? s.charAt(0).toLowerCase() + s.slice(1) : (s || '');

    // [C.5] ESCENARIO DEL MES — [v650.5.85] D.4.11 — contexto cósmico, sin repetir keywords de área
    const _escenarioContainer = document.getElementById('monthly-escenario-container');
    if (_escenarioContainer) {
        const _scenProximo = (content.hitos || []).find(h => !h.esPasado);
        const _scenLord    = content.lord;
        const _scenNombre  = content.conexion_anual?.nombre || null; // "Casa 5" — compacto, no repite keywords

        // Frase 1 — qué casa opera el señor del año (sin keywords de área)
        let _scenText = _scenNombre
            ? `Este mes ${_scenLord} opera sobre tu ${_scenNombre}.`
            : `Este mes ${_scenLord} activa tu escenario anual.`;

        // Frase 2 — contexto del hito más próximo con fecha completa (solo aquí se nombra el evento)
        if (_scenProximo) {
            const _scenFecha = _fmtProse(_scenProximo.date);
            const _tensionMap = {
                'LUNA_NUEVA': `La Luna Nueva del ${_scenFecha} abre un momento de inicio — hay apertura natural para lo que ya está madurando.`,
                'LUNA_LLENA': `La Luna Llena del ${_scenFecha} trae un punto de máxima presión — algo llega a su tope y pide resolución.`,
                'INGRESO':    `${_scenProximo.planet} cambia de signo el ${_scenFecha} — el contexto se mueve y con él la forma de actuar.`,
                'SOLAR':      `El ingreso solar del ${_scenFecha} marca un giro colectivo que coincide con tu proceso.`
            };
            _scenText += ' ' + (_tensionMap[_scenProximo.tipo] || `El momento clave llega el ${_scenFecha}.`);
        }

        // Frase 3 — actitud concreta del señor del año (sin mencionar área)
        const _actitudMap = {
            'Marte':    'La actitud que sostiene el proceso: atravesar la intensidad como terreno, no como obstáculo.',
            'Venus':    'La actitud que sostiene el proceso: dejar que la conexión madure sin forzar el intercambio.',
            'Saturno':  'La actitud que sostiene el proceso: mantener la dirección sin exigir resultados inmediatos.',
            'Júpiter':  'La actitud que sostiene el proceso: acompañar lo que se abre, sin necesidad de acelerar la expansión.',
            'Mercurio': 'La actitud que sostiene el proceso: integrar antes de abrir el siguiente ciclo — la claridad aparece cuando el proceso asienta.',
            'Sol':      'La actitud que sostiene el proceso: reconocer la aportación sin necesidad de demostrarla.',
            'Luna':     'La actitud que sostiene el proceso: seguir el pulso interior cuando el exterior pide más de lo que corresponde.'
        };
        _scenText += ' ' + (_actitudMap[_scenLord] || `La actitud: ${(content.verbo || 'navegar').toLowerCase()} con conciencia del ciclo.`);

        _escenarioContainer.innerHTML = `
            <div class="bg-warm-grey/5 rounded-3xl p-6 space-y-3">
                <p class="text-[9px] font-black text-primary uppercase tracking-[0.3em] flex items-center gap-2">
                    <span class="material-symbols-outlined text-[14px]">event_note</span>
                    ESCENARIO DEL MES
                </p>
                <p class="text-[13px] leading-relaxed text-warm-grey/80 font-medium">${_scenText}</p>
            </div>
        `;
    }

    // [D] DESPLEGABLES (Estrategia)
    const accordionContainer = document.getElementById('monthly-accordions-container');
    if (accordionContainer && content.como_atravesar) {
        // [v650.5.85] D.4.11 — Navegación Estratégica: dirección pura
        // El tipo de evento (Luna Nueva, etc.) ya se nombró en Escenario — aquí solo fecha de referencia
        const _navProximo   = (content.hitos || []).find(h => !h.esPasado);
        // D.5.1: usar campo estructurado si existe, fallback a split() para compatibilidad
        const _navBaseClean = content.navegacion_base
            || (content.como_atravesar || '').split('. En ')[0].trim();
        let _navEstrategicaText = `${_navBaseClean}.`;
        if (_navProximo) {
            const _navFecha = _fmtProse(_navProximo.date);
            // Sin repetir tipo de evento: solo ancla temporal neutral
            _navEstrategicaText += ` El punto de mayor movimiento este mes: el ${_navFecha}.`;
        } else {
            _navEstrategicaText += ' El mes no tiene picos de tensión — el trabajo es sostenido y de fondo.';
        }

        // [v650.5.86] Bugfix — Foco Práctico: primera frase de psicologico + primera frase de acción
        // Regla 006: campos multi-oración → usar solo primera frase en bloques breves
        const _focoProximo   = (content.hitos || []).find(h => !h.esPasado);
        // D.5.1: psicologico_frase ya viene preprocesado desde interpreter
        const _focoPsicol1 = content.psicologico_frase
            || (() => {
                const raw = content.conexion_anual?.psicologico || '';
                return (raw.split(/\.\s+/)[0] || raw).replace(/[.!?]+$/, '').trim() || null;
            })();
        // D.5.1: foco_accion ya viene estructurado desde interpreter
        const _focoAccionRaw  = (content.como_atravesar || '').split('. En ')[1] || '';
        const _focoAccionFull = _focoAccionRaw.includes(':')
            ? _focoAccionRaw.split(':').slice(1).join(':').replace(/[.!?]+$/, '').trim()
            : null;
        const _focoAccion = content.foco_accion
            || (_focoAccionFull ? (_focoAccionFull.split(/\.\s+/)[0] || _focoAccionFull).trim() : null);

        let _focoPracticoText = '';
        if (_focoAccion) {
            // Capitalizar primera letra de la acción extraída
            _focoPracticoText = `${_focoAccion.charAt(0).toUpperCase()}${_focoAccion.slice(1)}.`;
            if (_focoPsicol1) {
                _focoPracticoText += ` El proceso de fondo: ${_lcFirst(_focoPsicol1)}.`;
            }
        } else if (_focoPsicol1) {
            _focoPracticoText = `Lo que importa practicar: ${_lcFirst(_focoPsicol1)}.`;
        } else {
            _focoPracticoText = `Trabaja desde ${(content.verbo || 'la conciencia').toLowerCase()}.`;
        }
        if (_focoProximo) {
            const _focoFecha = _fmtProse(_focoProximo.date);
            const _focoTipoMap = {
                'LUNA_NUEVA': `Antes del ${_focoFecha}: define un inicio concreto, aunque sea pequeño.`,
                'LUNA_LLENA': `Para el ${_focoFecha}: ten claro qué quieres que culmine — no lo dejes al azar.`,
                'INGRESO':    `Antes del ${_focoFecha}: cierra lo pendiente, el tono va a cambiar.`,
                'SOLAR':      `Con el ${_focoFecha}: revisa si tu foco está alineado con el nuevo ciclo.`
            };
            _focoPracticoText += ' ' + (_focoTipoMap[_focoProximo.tipo] || `Fecha clave: el ${_focoFecha}.`);
        } else {
            _focoPracticoText += ' Sin eventos fuertes pendientes — mantén el ritmo sin esperar un detonante externo.';
        }
        accordionContainer.innerHTML = `
            <details class="group bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden" open>
                <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-primary">explore</span>
                        <span class="text-[11px] font-black text-warm-grey uppercase tracking-widest">Navegación Estratégica</span>
                    </div>
                    <span class="material-symbols-outlined text-slate-300 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div class="p-6 pt-0 text-[13px] leading-relaxed text-warm-grey/70 font-medium border-t border-slate-50 mt-[-1px]">
                    ${_navEstrategicaText}
                </div>
            </details>

            <details class="group bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-primary">target</span>
                        <span class="text-[11px] font-black text-warm-grey uppercase tracking-widest">Foco Práctico</span>
                    </div>
                    <span class="material-symbols-outlined text-slate-300 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div class="p-6 pt-0 text-[13px] leading-relaxed text-warm-grey/70 font-medium border-t border-slate-50 mt-[-1px]">
                    ${_focoPracticoText}
                </div>
            </details>
        `;
    }

    // [E] CONEXIÓN ANUAL
    if (content.conexion_anual) {
        update('monthly-area-name', content.conexion_anual.nombre);
        update('monthly-area-desc', content.conexion_anual.area);
        update('monthly-area-cruce', content.conexion_anual.cruce);
        document.getElementById('monthly-connection-box')?.classList.remove('hidden');
    }
}

window.renderMonthlyNarrative = renderMonthlyNarrative;

// ─────────────────────────────────────────────────────────────────────────────
// [MES_PREMIUM_v1] renderMonthlyPremiumBlock
// Activa los 5 bloques premium de MES para usuarios con suscripción activa.
// Patrón: mismo que renderAnnualPremiumBlock — todo en engine, no toca interpreter.
// Datos: state.user.natalPlanets, window.totalShadowContext, content del interpreter.
// ─────────────────────────────────────────────────────────────────────────────
function renderMonthlyPremiumBlock(content, lang) {
    const shell = document.getElementById('monthly-premium-shell');
    if (!shell) return;

    const isInternalUser = window.KAIROS_FLAGS.INTERNAL_AUTH_EMAILS.includes(state.user?.email || '');
    const isPremiumActive = window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE || isInternalUser || window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG;

    if (!isPremiumActive) return; // Shell estático ya visible para FREE

    // --- Datos base ---
    const natalPlanets = state.user?.natalPlanets || {};
    const sc = window.totalShadowContext || {};
    const lord = content.lord || sc.annual_context?.lord_of_year || 'Sol';
    const profHouse = sc.annual_context?.profection_house || content.conexion_anual?.casa || 1;
    const hitos = content.hitos || [];

    // --- Helpers ---
    const _normKey = (name) => (name || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase().trim();
    const _getNatal = (planetName) => {
        const key = _normKey(planetName);
        return natalPlanets[key] || natalPlanets[key.toLowerCase()] || null;
    };
    const _fmtDate = (iso) => {
        try { return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' }); } catch(e) { return ''; }
    };
    const _stripEnd = (s) => (s || '').replace(/[.!?]+$/, '').trim();

    // --- Glifos inline (usa window.KAIROS_GLYPHS de chart_650_v1.js — motor congelado) ---
    // Renderiza el glifo SVG de un planeta o signo inline en el texto
    const _glyph = (type, key, sz) => {
        try {
            if (!window.getKairosSymbol) return '';
            const path = window.getKairosSymbol(type, key);
            if (!path) return '';
            return `<svg viewBox="0 0 100 100" width="${sz||13}" height="${sz||13}" style="display:inline-block;vertical-align:-2px;margin:0 2px 0 1px;opacity:0.7" stroke="currentColor" stroke-width="8" fill="none" aria-hidden="true">${path}</svg>`;
        } catch(e) { return ''; }
    };
    const _pg = (name, sz) => _glyph('planets', name, sz); // glifo de planeta
    const _sg = (name, sz) => _glyph('zodiac', name, sz);  // glifo de signo

    // --- Significado humano de cada signo (2-3 palabras) ---
    const _signMeaning = {
        'Aries':'instinto e impulso', 'Tauro':'calma y arraigo', 'Géminis':'agilidad y conexión',
        'Cáncer':'cuidado e intuición', 'Leo':'expresión y protagonismo', 'Virgo':'análisis y ajuste',
        'Libra':'vínculo y equilibrio', 'Escorpio':'profundidad e intensidad', 'Sagitario':'amplitud y sentido',
        'Capricornio':'estructura y logro', 'Acuario':'perspectiva y distancia', 'Piscis':'permeabilidad y apertura'
    };

    // --- Dominio humano de cada planeta (qué rige en tu vida) ---
    const _planetMeaning = {
        SOL:'tu sentido de dirección y propósito personal', LUNA:'tu respuesta emocional y necesidad de seguridad',
        MERCURIO:'tu forma de pensar y comunicarte', VENUS:'tus vínculos y lo que valoras',
        MARTE:'tu impulso y energía de acción', JUPITER:'tu capacidad de apertura y expansión',
        SATURNO:'tu sentido de estructura y compromiso'
    };

    // --- Señor del año natal ---
    const lordNatal = _getNatal(lord);
    const lordNatalSign = lordNatal?.sign || null;
    const lordNatalHouse = lordNatal?.house || null;
    const lordIsRetro = lordNatal?.isRetrograde || false;

    // --- Estilos bloque activo ---
    const BLOCK_ACTIVE = 'background:rgba(247,244,238,0.6);border-radius:16px;padding:20px;border:0.5px solid rgba(180,160,120,0.20)';
    const LBL = 'font-size:9px;font-weight:700;color:#b8a070;letter-spacing:0.14em;text-transform:uppercase;margin:0 0 10px;display:block';
    const TXT = 'font-size:13px;color:#4a3f2a;line-height:1.65;margin:0';
    const TXT2 = 'font-size:13px;color:rgba(74,63,42,0.65);line-height:1.6;margin:10px 0 0';

    // ── BLOQUE 1 — Activaciones Natales ──────────────────────────────────────
    // Pregunta: ¿Qué planeta o zona natal se activa este mes y qué significa para ti?
    const lunations = hitos.filter(h => h.tipo === 'LUNA_NUEVA' || h.tipo === 'LUNA_LLENA');
    const personalPlanets = ['SOL','LUNA','MERCURIO','VENUS','MARTE','JUPITER','SATURNO'];
    const _displayName = { SOL:'Sol', LUNA:'Luna', MERCURIO:'Mercurio', VENUS:'Venus', MARTE:'Marte', JUPITER:'Júpiter', SATURNO:'Saturno' };

    // Qué activa una Luna Nueva sobre ese planeta natal (semilla, inicio de ciclo)
    const _lunaNewEffect = {
        SOL:'algo en ti quiere arrancar — no como reacción, sino como dirección propia',
        LUNA:'tu mundo emocional pide ser escuchado antes de que actúes. Es el momento de sentir, no de resolver',
        MERCURIO:'hay una idea, conversación o decisión que está pidiendo apertura. La mente puede dar un salto claro',
        VENUS:'algo en tus vínculos o en lo que valoras quiere comenzar o renovarse. Presta atención a lo que llega',
        MARTE:'hay energía disponible para moverse, iniciar o marcar una posición que has estado postergando',
        JUPITER:'el ciclo se abre hacia algo más grande. Una oportunidad real — no hay que esperarla, hay que activarla',
        SATURNO:'lo que empieza aquí viene para quedarse. Este inicio pide seriedad, no urgencia'
    };
    // Qué activa una Luna Llena sobre ese planeta natal (cosecha, visibilidad, cierre)
    const _lunaFullEffect = {
        SOL:'algo que iniciaste en este ciclo sale a la luz y puede ser evaluado. Es momento de ver qué creaste',
        LUNA:'tu mundo emocional alcanza su punto más visible e intenso. Lo que sentías en silencio ahora emerge',
        MERCURIO:'una idea, conversación o decisión llega a su punto de resultado. El ciclo cierra ese hilo abierto',
        VENUS:'lo que construiste en vínculos o en lo que valoras se hace visible y concreto este mes',
        MARTE:'lo que impulsaste llega a su expresión. La energía acumulada necesita salir y mostrarse',
        JUPITER:'lo que expandiste llega a su punto de resultado. ¿El crecimiento fue real o fue ilusión?',
        SATURNO:'lo que construiste con esfuerzo llega a su momento de evaluación. El trabajo se muestra tal como es'
    };

    const b1Lines = [];
    lunations.forEach(l => {
        const lSign = l.sign || '';
        const isNew = l.tipo === 'LUNA_NUEVA';
        const lDate = _fmtDate(l.date);
        const activados = [];
        Object.entries(natalPlanets).forEach(([pKey, pData]) => {
            if (!pData || !pData.sign) return;
            if (!personalPlanets.includes(_normKey(pKey))) return;
            if (pData.sign === lSign) activados.push(_normKey(pKey));
        });
        if (activados.length > 0) {
            activados.forEach(k => {
                const efectoMap = isNew ? _lunaNewEffect : _lunaFullEffect;
                const efecto = efectoMap[k] || (isNew ? 'se activa algo propio tuyo en este ciclo' : 'lo que gestabas llega a la luz');
                const dname = _displayName[k] || k;
                b1Lines.push(`La ${_pg('Luna')}Luna ${isNew ? 'Nueva' : 'Llena'} del ${lDate || 'este mes'} cae en ${_sg(lSign)}${lSign}, donde tienes tu ${_pg(dname)}${dname} natal: ${efecto}.`);
            });
        } else if (lordNatalSign && _normKey(lSign) === _normKey(lordNatalSign)) {
            b1Lines.push(`La ${_pg('Luna')}Luna ${isNew ? 'Nueva' : 'Llena'} del ${lDate || 'este mes'} activa ${_sg(lSign)}${lSign}, el signo donde vive tu ${_pg(lord)}${lord} natal — tu guía anual recibe una señal directa del ciclo lunar.`);
        } else {
            const smLun = _signMeaning[lSign] || '';
            // Fallback diferenciado: Luna Nueva ≠ Luna Llena — no repetir la misma frase de cierre
            const noActFallback = isNew
                ? `La ${_pg('Luna')}Luna Nueva del ${lDate || 'este mes'} recorre ${_sg(lSign)}${lSign}${smLun ? ' — ' + smLun : ''} sin tocar planetas natales propios. No hay un planeta tuyo que reciba este inicio — el ciclo arranca en terreno colectivo.`
                : `La ${_pg('Luna')}Luna Llena del ${lDate || 'este mes'} recorre ${_sg(lSign)}${lSign}${smLun ? ' — ' + smLun : ''} sin tocar planetas natales propios. La culminación del ciclo es colectiva — nada en tu carta se hace especialmente visible en este punto.`;
            b1Lines.push(noActFallback);
        }
    });
    if (lordNatalSign) {
        const hStr = lordNatalHouse ? `, Casa ${lordNatalHouse}` : '';
        const rStr = lordIsRetro ? ' — en retrogradación: su influencia se dirige hacia adentro antes de expresarse afuera' : '';
        const smLord = _signMeaning[lordNatalSign] || '';
        b1Lines.push(`Tu ${_pg(lord)}${lord} natal está en ${_sg(lordNatalSign)}${lordNatalSign}${hStr}${rStr}${smLord ? ' — ' + smLord : ''}. Como Señor del Año, es el filtro a través del cual este mes aterriza en ti.`);
    }
    if (b1Lines.length === 0) b1Lines.push(`Este mes no hay lunaciones que caigan sobre planetas natales personales. El ciclo lunar avanza en terreno colectivo — un momento de observar más que de responder.`);

    const el1 = document.getElementById('monthly-premium-activaciones-natales');
    if (el1) {
        el1.style.cssText = BLOCK_ACTIVE;
        el1.innerHTML = `<span style="${LBL}">Activaciones Natales</span>${b1Lines.map((l,i)=>`<p style="${i===0?TXT:TXT2}">${l}</p>`).join('')}`;
    }

    // ── BLOQUE 2 — Tránsitos de Tono ─────────────────────────────────────────
    // Pregunta: ¿Qué planeta en tránsito cambia el tono del mes y cómo se nota en ti?
    const fastIngresses = hitos.filter(h => h.tipo === 'INGRESO' && ['Mercurio','Venus','Marte'].includes(h.planet));
    const conexion = content.conexion_anual || {};
    const areaAnual = conexion.area || conexion.nombre || '';
    // Qué rige cada planeta rápido (para el caso retorno y para el genérico sin natal)
    const _planetDomainShort = { Mercurio:'tu pensamiento y comunicación', Venus:'tus vínculos y lo que valoras', Marte:'tu impulso y energía de acción' };
    // Frase de cambio de registro diferenciada por planeta — no repetir la misma estructura
    // Cada planeta describe CONCRETAMENTE qué cambia para el usuario en ese modo distinto
    const _planetChangePhrase = {
        Mercurio: 'Este mes, tu manera de pensar, hablar y decidir necesita traducirse con más cuidado antes de salir hacia fuera.',
        Venus:    'Este mes, tus vínculos y tus elecciones de valor piden más presencia, más expresión y menos automatismo.',
        Marte:    'Este mes, tu forma de actuar cambia de ritmo: menos impulso disperso y más dirección consciente.',
        Sol:      'Este mes, tu forma de tomar dirección busca una expresión más clara y menos forzada.',
        Luna:     'Este mes, tu respuesta emocional cambia de registro: necesitas escucharte antes de reaccionar.',
        Júpiter:  'Este mes, tu forma de abrirte a nuevas posibilidades necesita distinguir expansión real de exceso.',
        Saturno:  'Este mes, tu forma de sostener responsabilidades pide más estructura y menos carga innecesaria.'
    };
    const _planetChangeFallback = 'Este mes, esa parte de tu carta se expresa en un registro distinto al habitual — vale la pena prestarle atención consciente.';

    const b2Lines = [];
    fastIngresses.forEach(ing => {
        const natalData = _getNatal(ing.planet);
        const lDate = _fmtDate(ing.date);
        const pGlyph = _pg(ing.planet);
        const sGlyph = _sg(ing.sign);
        const domain = _planetDomainShort[ing.planet] || ing.planet;
        const smTransit = _signMeaning[ing.sign] || '';
        if (natalData?.sign) {
            const smNatal = _signMeaning[natalData.sign] || '';
            const nGlyph = _sg(natalData.sign);
            if (natalData.sign === ing.sign) {
                // Retorno planetario — el planeta vuelve a su signo natal
                b2Lines.push(`${pGlyph}${ing.planet} entra en ${sGlyph}${ing.sign}${lDate ? ' el ' + lDate : ''} — el mismo signo donde vive en tu carta. Un retorno: ${domain} opera este mes desde su terreno propio${smTransit ? ', con su registro natural de ' + smTransit : ''}.`);
            } else {
                // El planeta transita un signo distinto al natal — cambio de registro
                // Frase de cambio diferenciada por planeta para evitar repetición de estructura
                const changePhrase = _planetChangePhrase[ing.planet] || _planetChangeFallback;
                b2Lines.push(`${pGlyph}${ing.planet} entra en ${sGlyph}${ing.sign}${lDate ? ' el ' + lDate : ''}${smTransit ? ' — ' + smTransit : ''}. Tu ${ing.planet} natal está en ${nGlyph}${natalData.sign}${smNatal ? ' — ' + smNatal : ''}. ${changePhrase}`);
            }
        } else {
            b2Lines.push(`${pGlyph}${ing.planet} entra en ${sGlyph}${ing.sign}${lDate ? ' el ' + lDate : ''}${smTransit ? ' — ' + smTransit : ''}. Su tono define ${domain} durante este tramo del mes.`);
        }
    });
    if (b2Lines.length === 0) b2Lines.push(`Este mes, ${_pg('Mercurio')}Mercurio, ${_pg('Venus')}Venus y ${_pg('Marte')}Marte no protagonizan cruces con tu carta natal. Sus ingresos llegan sin amplificación personal — el tono exterior opera en terreno neutral para ti.`);

    const el2 = document.getElementById('monthly-premium-transitos-tono');
    if (el2) {
        el2.style.cssText = BLOCK_ACTIVE;
        el2.innerHTML = `<span style="${LBL}">Tránsitos de Tono</span>${b2Lines.map((l,i)=>`<p style="${i===0?TXT:TXT2}">${l}</p>`).join('')}`;
    }

    // ── BLOQUE 3 — Momentos Clave ─────────────────────────────────────────────
    const scoredHitos = hitos.filter(h => !h.esPasado).map(h => {
        let nScore = 0;
        const nd = _getNatal(h.planet);
        if (nd) { nScore += 0.4; if (nd.sign === h.sign) nScore += 0.4; }
        if (_normKey(h.planet) === _normKey(lord)) nScore += 0.3;
        return { ...h, pScore: (h.intensity || 0.5) + nScore };
    }).sort((a, b) => b.pScore - a.pScore).slice(0, 3);

    // Pregunta B3: ¿Qué fecha importa, qué planeta/signo participa y por qué ese día es personal?
    // ── Mapas de descripción diferenciada por planeta natal activado ──────────
    // Caso A — resonancia directa (tránsito en mismo signo que el natal)
    // Cada planeta recibe la señal "en su terreno propio" — distinto para cada uno
    // Variantes por planeta (3 por caso) — garantía mecánica de no-repetición cuando el mismo planeta natal se activa más de una vez
    // Caso A — resonancia directa (tránsito en mismo signo que el natal)
    const _b3DirectPhraseVariants = {
        SOL:      [
            'Tu sentido de dirección recibe la señal en su propio terreno — algo se aclara sobre lo que realmente quieres.',
            'Este momento habla directamente a tu propósito. No hace falta interpretar: lo que se ilumina es tuyo.',
            'La activación llega en el mismo idioma que tu Sol natal. Lo que sientes como claridad aquí es orientación real.'
        ],
        LUNA:     [
            'Tu respuesta emocional actúa desde su modo más natural. Lo que sientes aquí es señal directa, no ruido.',
            'La activación toca tu mundo emocional en su propio terreno. Lo que emerge ahora tiene raíz, no es reacción pasajera.',
            'Este hito mueve tu Luna en su registro nativo. Prestarle atención es más útil que gestionarlo.'
        ],
        MERCURIO: [
            'La mente recibe la señal en su frecuencia propia: algo se ordena, una idea se aclara o una conversación encuentra apertura.',
            'Este momento activa tu forma de pensar desde dentro. Una conexión que no encontrabas puede aparecer ahora.',
            'La activación llega a tu Mercurio natal en su propio signo. Es un momento útil para comunicar lo que estabas postergando.'
        ],
        VENUS:    [
            'Tus vínculos y lo que valoras reciben la señal sin filtros — lo que importa se hace visible y concreto.',
            'Este hito activa tu Venus en su propio registro. Lo que sientes en torno a vínculos o elecciones de valor tiene peso real.',
            'La activación llega directa a tu forma de querer y valorar. No requiere análisis: requiere atención a lo que ya sientes.'
        ],
        MARTE:    [
            'Tu energía de acción recibe la señal en su terreno propio. Hay claridad sobre qué hacer y hacia dónde moverse.',
            'Este momento activa tu Marte desde dentro. La iniciativa que surja aquí tiene dirección, no solo impulso.',
            'La activación llega a tu capacidad de actuar en su propio idioma. Lo que decides mover ahora tiene más tracción que en otros momentos.'
        ],
        JUPITER:  [
            'Tu capacidad de apertura se activa sin obstáculos — algo se amplifica y una posibilidad se vuelve concreta.',
            'Este hito toca tu Júpiter en su propio terreno. La expansión que percibes aquí tiene base, no es solo optimismo.',
            'La activación llega a tu sentido de posibilidad desde dentro. Vale identificar qué oportunidad concreta se está abriendo.'
        ],
        SATURNO:  [
            'Tu sentido de estructura y compromiso recibe una señal de alineación — lo que construyes con esfuerzo encuentra solidez.',
            'Este momento activa tu Saturno en su propio registro. Lo que exige más disciplina ahora también ofrece más resultado.',
            'La activación llega a tu forma de sostener lo que importa. Es un momento de mayor claridad sobre qué vale la pena seguir construyendo.'
        ]
    };
    // Caso B — activación indirecta (tránsito desde signo distinto al natal)
    const _b3CrossPhraseVariants = {
        SOL:      [
            'Tu dirección personal recibe una presión distinta a la habitual. Antes de actuar, conviene aclarar qué decisión nace de ti y cuál nace de la presión externa.',
            'Este hito toca tu forma de afirmarte desde un ángulo menos familiar. Puede mostrar dónde necesitas más claridad sin forzar una respuesta inmediata.',
            'La activación roza tu sentido de propósito desde fuera de tu terreno. No pide demostrar nada: pide revisar desde dónde estás tomando dirección.'
        ],
        LUNA:     [
            'Tu mundo emocional responde, pero desde un terreno menos habitual. Conviene escuchar primero qué emoción aparece y después decidir.',
            'La activación toca tu manera de buscar seguridad desde otro registro. No exige reacción inmediata: pide reconocer qué necesidad interna está hablando.',
            'Este hito mueve una zona sensible de tu carta desde fuera de su signo. La clave no es actuar rápido, sino distinguir entre emoción presente y costumbre antigua.'
        ],
        MERCURIO: [
            'Tu forma de pensar recibe un estímulo desde otro registro. Puede ayudarte a ordenar conversaciones pendientes sin resolverlas deprisa.',
            'Este hito mueve tu manera de comunicar desde un terreno distinto. Conviene escuchar mejor antes de explicar demasiado.',
            'La activación llega a tu mente práctica desde fuera de su frecuencia. No todo necesita respuesta inmediata, pero sí más claridad antes de hablar.'
        ],
        VENUS:    [
            'Tu forma de valorar y vincularte se mueve desde un registro menos automático. Observa qué eliges por deseo real y qué por costumbre.',
            'Este hito toca tu sensibilidad afectiva desde otro terreno. Puede mostrar dónde necesitas más honestidad en lo que das y recibes.',
            'La activación mueve tus vínculos o tu manera de disfrutar desde fuera de tu signo natal. No fuerza una decisión, pero sí revela qué tiene valor real.'
        ],
        MARTE:    [
            'Tu impulso se activa desde un terreno distinto. Antes de actuar, conviene revisar si la energía tiene dirección o solo urgencia.',
            'Este hito toca tu forma de moverte y poner límites desde otro registro. Puede ayudarte a actuar con más precisión y menos desgaste.',
            'La activación mueve tu iniciativa desde fuera de su modo habitual. No se trata de hacer más, sino de usar mejor la energía disponible.'
        ],
        JUPITER:  [
            'Tu manera de abrir posibilidades se activa desde otro registro. Conviene distinguir crecimiento real de exceso antes de comprometerte.',
            'Este hito toca tu confianza y tu visión de futuro desde un ángulo poco familiar. Puede ampliar perspectiva, pero pide medida.',
            'La activación mueve tu deseo de expansión desde fuera de tu terreno. El punto no es crecer por crecer, sino reconocer qué sí tiene sentido abrir.'
        ],
        SATURNO:  [
            'Tu forma de sostener responsabilidades se activa desde otro terreno. Puede mostrar dónde necesitas más estructura y menos carga innecesaria.',
            'Este hito toca tus límites y tu manera de ordenar lo que importa desde un registro distinto. No pide dureza: pide claridad sobre qué sí vale sostener.',
            'La activación mueve una zona de exigencia desde fuera de su signo natal. La clave es separar responsabilidad real de peso que ya no corresponde cargar.'
        ]
    };
    const _b3DirectFallback  = 'Lo que se activa aquí es tuyo: el tránsito y el natal hablan el mismo idioma.';
    const _b3CrossFallback   = 'Lo que se activa aquí es tuyo, pero en un registro que no reconoces de inmediato. Vale prestarle atención consciente.';

    const b3Lines = [];
    const usedPlanetCounts = {}; // contador de variante por planeta — garantiza rotación mecánica cuando el mismo natal se activa varias veces
    if (scoredHitos.length > 0) {
        scoredHitos.forEach(h => {
            const lDate = _fmtDate(h.date);
            const nd = _getNatal(h.planet);
            const hPlanetGlyph = h.planet ? _pg(h.planet) : '';
            const hSignGlyph = h.sign ? _sg(h.sign) : '';
            const hPlanetKey = _normKey(h.planet);
            // índice de variante para este planeta (se incrementa en cada uso)
            const _varIdx = usedPlanetCounts[hPlanetKey] || 0;
            usedPlanetCounts[hPlanetKey] = _varIdx + 1;
            let why = '';
            if (nd?.sign === h.sign) {
                // Resonancia directa — el natal y el tránsito coinciden en signo
                const ndGlyph = _sg(nd.sign);
                const _dv = _b3DirectPhraseVariants[hPlanetKey];
                const _dp = _dv ? _dv[_varIdx % _dv.length] : _b3DirectFallback;
                why = `Tu ${hPlanetGlyph}${h.planet} natal también está en ${ndGlyph}${nd.sign}. ${_dp}`;
            } else if (nd?.sign) {
                // Activación indirecta — el natal existe pero en signo distinto
                const ndGlyph = _sg(nd.sign);
                const _cv = _b3CrossPhraseVariants[hPlanetKey];
                const _cp = _cv ? _cv[_varIdx % _cv.length] : _b3CrossFallback;
                why = `Tu ${hPlanetGlyph}${h.planet} natal está en ${ndGlyph}${nd.sign}. ${_cp}`;
            } else if (hPlanetKey === _normKey(lord)) {
                why = `${hPlanetGlyph}${h.planet} es tu Señor del Año. Cada vez que se mueve, lo que estás viviendo en el ciclo completo se intensifica.`;
            } else {
                why = `Este momento destaca por intensidad colectiva. Sin cruce natal directo, es un punto de peso real en el arco del mes.`;
            }
            const headerLabel = `${hPlanetGlyph}${h.label}${h.sign ? ' · ' + hSignGlyph + h.sign : ''}`;
            b3Lines.push(`<strong style="font-size:10px;font-weight:700;color:#b8a070;display:block;margin:0 0 2px">${lDate || 'Próximamente'}</strong>${headerLabel} — ${why}`);
        });
    } else {
        b3Lines.push(`Los hitos de mayor intensidad de este mes ya han ocurrido. Lo que pusieron en movimiento está en fase de integración: el foco cambia de actuar a asimilar.`);
    }

    const el3 = document.getElementById('monthly-premium-momentos-clave');
    if (el3) {
        el3.style.cssText = BLOCK_ACTIVE;
        el3.innerHTML = `<span style="${LBL}">Momentos Clave</span>${scoredHitos.length > 0 ? b3Lines.map((l,i)=>`<p style="${i===0?TXT:TXT2}">${l}</p>`).join('') : `<p style="${TXT}">${b3Lines[0]}</p>`}`;
    }

    // ── BLOQUE 4 — Activaciones Profundas ────────────────────────────────────
    const psicofrase = content.psicologico_frase || conexion.psicologico || '';
    const b4Lines = [];

    if (psicofrase) {
        const p = psicofrase.charAt(0).toUpperCase() + psicofrase.slice(1);
        b4Lines.push(p + (p.endsWith('.') ? '' : '.'));
    }

    if (lordNatalSign) {
        const hStr = lordNatalHouse ? `, Casa ${lordNatalHouse}` : '';
        const rStr = lordIsRetro ? ' — en retrogradación: tiende a actuar hacia adentro antes de expresarse afuera' : '';
        const smLS = _signMeaning[lordNatalSign] || '';
        b4Lines.push(`Tu ${_pg(lord)}${lord} natal vive en ${_sg(lordNatalSign)}${lordNatalSign}${hStr}${rStr}${smLS ? ' — ' + smLS : ''}. Como Señor del Año, no guía el ciclo de forma abstracta: lo filtra a través de esa configuración natal tuya. Lo que el mes activa llega ya marcado por ese sello.`);
    } else {
        b4Lines.push(`${_pg(lord)}${lord} marca el territorio de este mes desde lo colectivo. No hay datos natales directos de su posición en tu carta — lo que rige este ciclo te llega desde la energía arquetípica del planeta, sin el filtro personal de su signo natal.`);
    }

    // Tono del ciclo — qué tipo de movimiento predomina este mes
    const tonoMap = {
        'apertura': 'El tono del ciclo es de apertura: algo quiere comenzar, y lo que pide no es urgencia — es espacio para arrancar bien.',
        'expansión activa': 'El tono del ciclo es de expansión activa: hay impulso real disponible, pero dispersarse es el riesgo. Elige dónde va esa energía.',
        'tensión creativa': 'El tono del ciclo es de tensión creativa: dos fuerzas que no encajan a la primera — y por eso producen algo que ninguna podría crear sola.',
        'asimilación': 'El tono del ciclo es de asimilación: el movimiento es hacia adentro antes de que sea hacia afuera. No es falta de energía — es que la energía trabaja en lo invisible.'
    };
    if (tonoMap[content.tono_ciclo]) b4Lines.push(tonoMap[content.tono_ciclo]);

    const el4 = document.getElementById('monthly-premium-activaciones-profundas');
    if (el4) {
        el4.style.cssText = BLOCK_ACTIVE;
        el4.innerHTML = `<span style="${LBL}">Activaciones Profundas</span>${b4Lines.map((l,i)=>`<p style="${i===0?TXT:TXT2}">${l}</p>`).join('')}`;
    }

    // ── BLOQUE 5 — Tránsitos Avanzados ───────────────────────────────────────
    const sorted = hitos.slice().sort((a,b) => new Date(a.date)-new Date(b.date));
    const firstH = sorted[0];
    const midH = sorted[Math.floor(sorted.length/2)];
    const lastFutureH = sorted.filter(h=>!h.esPasado).slice(-1)[0];
    const b5Lines = [];

    // Tono de apertura — cómo arranca el mes según tono_ciclo
    const _tonoApertura = {
        'apertura': 'El ciclo arranca con espacio: algo está disponible para comenzar.',
        'expansión activa': 'El ciclo arranca con impulso: la energía está disponible, pero pide dirección.',
        'tensión creativa': 'El ciclo arranca con fricción: dos fuerzas activas que necesitan coexistir antes de resolverse.',
        'asimilación': 'El ciclo arranca hacia adentro: el movimiento real es interior antes de volverse visible.'
    };
    const tonoAperturaPhrase = _tonoApertura[content.tono_ciclo] || '';

    if (firstH) {
        const lDate = _fmtDate(firstH.date);
        const pastNote = firstH.esPasado ? ' — ya ocurrido' : '';
        const fPGlyph = firstH.planet ? _pg(firstH.planet) : '';
        const fSGlyph = firstH.sign ? _sg(firstH.sign) : '';
        b5Lines.push(`El mes abre con ${fPGlyph}${firstH.label}${firstH.sign ? ' en ' + fSGlyph + firstH.sign : ''}${lDate ? ' (' + lDate + pastNote + ')' : ''}. ${tonoAperturaPhrase}`);
    }
    if (midH && midH !== firstH && midH !== lastFutureH) {
        const lDate = _fmtDate(midH.date);
        const ndMid = _getNatal(midH.planet);
        const mPGlyph = midH.planet ? _pg(midH.planet) : '';
        const mSGlyph = midH.sign ? _sg(midH.sign) : '';
        const midNote = ndMid?.sign
            ? ` Tu ${_pg(midH.planet)}${midH.planet} natal, en ${_sg(ndMid.sign)}${ndMid.sign}, entra en contacto directo con este punto — no es solo un evento colectivo: es un hito tuyo.`
            : ` Es el punto de mayor densidad en el arco colectivo del mes.`;
        b5Lines.push(`En el centro, ${mPGlyph}${midH.label}${midH.sign ? ' en ' + mSGlyph + midH.sign : ''}${lDate ? ' (' + lDate + ')' : ''} marca el momento donde el ciclo alcanza su mayor tensión o claridad.${midNote}`);
    }
    if (lastFutureH && lastFutureH !== firstH) {
        const lDate = _fmtDate(lastFutureH.date);
        const ndLast = _getNatal(lastFutureH.planet);
        const lPGlyph = lastFutureH.planet ? _pg(lastFutureH.planet) : '';
        const lSGlyph = lastFutureH.sign ? _sg(lastFutureH.sign) : '';
        const lastNote = ndLast?.sign
            ? ` Tu ${_pg(lastFutureH.planet)}${lastFutureH.planet} natal, en ${_sg(ndLast.sign)}${ndLast.sign}, recibe este cierre: lo que el ciclo activó en esa parte de ti llega a su punto de síntesis.`
            : ` Con eso, el mes cierra el arco que abrió al inicio.`;
        b5Lines.push(`El cierre llega con ${lPGlyph}${lastFutureH.label}${lastFutureH.sign ? ' en ' + lSGlyph + lastFutureH.sign : ''}${lDate ? ' (' + lDate + ')' : ''}.${lastNote}`);
    } else if (sorted.every(h=>h.esPasado)) {
        b5Lines.push(`Los tránsitos del mes ya han ocurrido. El ciclo está en integración: lo que se activó no desaparece, se asienta. Ahora toca observar qué dejó.`);
    }
    if (b5Lines.length === 0) b5Lines.push(`Este mes el cielo avanza sin tránsitos de alta resonancia sobre tu carta. Sin presión exterior, el ciclo ofrece estabilidad — un momento útil para consolidar lo que ya está en movimiento.`);

    const el5 = document.getElementById('monthly-premium-transitos-avanzados');
    if (el5) {
        el5.style.cssText = BLOCK_ACTIVE;
        el5.innerHTML = `<span style="${LBL}">Tránsitos Avanzados</span>${b5Lines.map((l,i)=>`<p style="${i===0?TXT:TXT2}">${l}</p>`).join('')}`;
    }
}

window.renderMonthlyPremiumBlock = renderMonthlyPremiumBlock;

/**
 * Renderizador de Narrativa DIARIA.
 */
function renderDailyNarrative(content) {
    if (!content) return;
    const doc = document;
    const update = (id, text) => {
        const el = doc.getElementById(id);
        if (el) el.innerText = text;
    };
    
    update('daily-header-title', content.title);
    update('daily-area-activada', content.area_activada);
    
    // HOY-2C — Inyección de Firma Astrológica
    update('daily-pulso-activo', content.pulso_activo);

    // HOY-2B — Conectar apertura
    const aperturaEl = doc.getElementById('daily-apertura');
    if (aperturaEl) {
        if (content.apertura) {
            aperturaEl.textContent = content.apertura;
            aperturaEl.parentElement.style.display = '';
        } else {
            aperturaEl.parentElement.style.display = 'none';
        }
    }

    // HOY-2C — Narrativa sin comillas forzadas (vienen del banco si se desea, o se dejan limpias)
    const narrativaEl = doc.getElementById('daily-narrativa');
    if (narrativaEl) narrativaEl.innerText = content.narrativa;

    if (content.sun_sign) update('daily-sun-context', `SOL EN ${content.sun_sign.toUpperCase()}`);
    if (content.reflection) update('daily-pregunta', `"${content.reflection}"`);
    update('daily-triplete-clima', content.triplete.clima);
    update('daily-triplete-direccion', content.triplete.direccion);
    update('daily-triplete-cuidado', content.triplete.cuidado);

    update('daily-matiz-dia', content.matiz);
    
    // Nueva resonancia personal
    if (content.resonancia_personal) {
        update('daily-resonancia-personal', content.resonancia_personal);
    }
    
    // Nueva actualización para la pregunta central si viniera del intérprete
    if (content.pregunta) update('daily-pregunta', `"${content.pregunta}"`);
    
    /* 🕵️ Bloque técnico desactivado en producción (v650.5.45)
    if (content.future_signals && content.future_signals.enabled) {
        const section = doc.getElementById('daily-future-signals-teaser');
        if (section) {
            section.classList.remove('hidden', 'opacity-40', 'grayscale');
            section.classList.add('bg-primary/10', 'border-primary/50'); // Highlight for test
            
            const fSignals = content.future_signals;
            
            // Natal Activation
            let natalStr = fSignals.natal_activation.active 
                ? `[ASPECT]: L Tránsito ${fSignals.natal_activation.transit_sign} forma ${fSignals.natal_activation.type} con L Natal ${fSignals.natal_activation.natal_sign}`
                : `[INACTIVO]: Tránsito ${fSignals.natal_activation.transit_sign} vs Natal ${fSignals.natal_activation.natal_sign}`;
            update('daily-future-moon-activation', natalStr);
            
            // Events
            let eventStr = fSignals.lunar_events.active 
                ? `[EVENTO]: FASE EXACTA ${fSignals.lunar_events.event_type}`
                : `[INACTIVO]: Sólo fase ${fSignals.lunar_events.event_type || '?'}`;
            update('daily-future-lunar-events', eventStr);
            
            // Key Day
            let keyStr = fSignals.kairos_key_day.active 
                ? `[KAIROS CLAVE]: ${fSignals.kairos_key_day.reason}`
                : `[ESTÁNDAR]: Sin cruces mayores (Lord org: ${content.technical_audit?.lord_active || '?'})`;
            update('daily-future-key-days', keyStr);
        }
    } else {
        const section = doc.getElementById('daily-future-signals-teaser');
        if (section && !section.classList.contains('hidden')) {
            section.classList.add('hidden');
        }
    }
    */
    
    // [SECCIÓN F] Regulación Emocional Diaria
    const dailyRegContainer = doc.getElementById('daily-regulatory-close');
    if (dailyRegContainer && content.regulatory_close) {
        dailyRegContainer.innerText = content.regulatory_close;
        dailyRegContainer.classList.add('hidden'); // Editorial pendiente — oculto hasta contextualización
    }
    
    console.log("🎨 KAIROS: Narrativa Diaria Renderizada.");
};

/**
 * Renderizador de Card individual con Tuteo e Instrucciones Limpias.
 */
// [MATRIX_RENDER_2.5] Toggle helper para guía expandible
window._kairosToggleGuia = function(cardId) {
    const el = document.getElementById(cardId);
    const btn = document.getElementById('btn-' + cardId);
    if (!el || !btn) return;
    const isOpen = el.style.display !== 'none';
    el.style.display = isOpen ? 'none' : 'block';
    btn.innerHTML = isOpen
        ? 'Ver guía <span style="font-size:9px;opacity:0.6">▾</span>'
        : 'Cerrar guía <span style="font-size:9px;opacity:0.6">▲</span>';
};

// [MATRIX_RENDER_2.6] Toggle helper para panel de info astrológico
window._kairosToggleInfo = function() {
    const el = document.getElementById('matrix-info-panel');
    if (!el) return;
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
};

// [MATRIX_RENDER_2.6] Mapa tags_estado → línea de reconocimiento emocional (vocabulario preciso por pilar)
const ESTADO_RECONOCIMIENTO = {
    'hiperactivacion':  'Tu cuerpo lleva demasiado tiempo sosteniendo una tensión que aún no ha podido descargar.',
    'alarma':           'Hay una activación de alerta en el cuerpo que todavía no ha podido bajar.',
    'panico':           'El sistema está en un nivel de desbordamiento que pide una parada real ahora.',
    'sobrecarga':       'Llevas demasiada carga encima y el cuerpo necesita un momento para soltar peso.',
    'tension_fisica':   'Tu cuerpo acumula tensión física que la mente sola no puede liberar.',
    'impulso':          'Hay una energía activa que necesita dirección y una salida concreta.',
    'bloqueo':          'La energía no fluye — el sistema necesita un pequeño reset para moverse.',
    'agotamiento':      'El cuerpo y la mente han llegado a su límite y piden parar para recuperar.',
    'rumia':            'El pensamiento lleva demasiadas horas girando sobre lo mismo sin encontrar salida.',
    'dispersion':       'La atención está repartida en demasiados lugares a la vez y necesita recogerse.',
    'confusion':        'Falta claridad sobre por dónde seguir — la mente necesita un punto de referencia.',
    'oscilacion':       'El estado interior sube y baja sin estabilizarse y necesita un ancla.',
    'cierre_pendiente': 'Un vínculo o situación sin cerrar sigue ocupando espacio emocional interior.',
    'expansion_activa': 'Hay energía disponible y el sistema quiere canalizarla hacia algo concreto.',
    'foco_necesario':   'La mente necesita concentrarse en un solo punto antes de seguir avanzando.'
};

// [MATRIX_RENDER_2.6] Intro terapéutica por subserie — mostrada SOLO dentro de "Ver guía"
const GUIA_INTRO_SUBSERIE = {
    '810': 'El cuerpo responde al contacto y al movimiento antes de que la mente pueda procesar. No necesitas prepararte — solo darte permiso para parar.',
    '820': 'La mente recupera presencia cuando deja de intentar controlar. Este ejercicio hace el trabajo por ti — tú solo tienes que seguirlo.',
    '830': 'Dar salida a lo que llevas dentro libera espacio emocional sin que tengas que resolver nada. Solo dejar que salga.',
    '840': 'Reconocer lo que está pendiente en tus vínculos ayuda al sistema a procesar lo que sigue ocupando espacio interior.',
    '850': 'Redirigir la energía disponible hacia dentro equilibra el estado. Poca acción externa, mucho efecto interno.',
    '860': 'Cuando la mente para, el sistema reorganiza solo. La quietud activa más claridad que el esfuerzo.',
    '870': 'La respiración es el acceso más directo a la regulación. Dos o tres minutos cambian el estado del cuerpo.'
};

function renderMatrixCard(label, practice, precomputedRec) {
    if (!practice) return `<p class="text-sm text-slate-300 italic">No disponible</p>`;
    
    if (typeof practice === 'string') {
        const processed = practice.replace(/tono de fuego/gi, 'energía de fuego')
                                 .replace(/tono de aire/gi, 'energía de aire')
                                 .replace(/tono de agua/gi, 'energía de agua')
                                 .replace(/tono de tierra/gi, 'energía de tierra');
        return `<p class="text-sm text-white font-medium leading-relaxed">${processed}</p>`;
    }

    const clarify = (text) => {
        if (!text) return "";
        const mapping = {
            'fascia': 'fascia (zona alta del pecho)',
            'inercia mental': 'inercia mental (darle vueltas a lo mismo)',
            'nervio vago': 'nervio vago (respuesta de calma corporal)',
            'tono vagal': 'tono vagal (tu capacidad de calmarte)',
            'sistema límbico': 'sistema límbico (lo que sientes dentro)',
            'cintura escapular': 'cintura escapular (la zona de hombros)',
            'columna lumbar': 'columna lumbar (tu espalda baja)',
            'parasimpática': 'parasimpática (el relax de tu cuerpo)',
            'visceral': 'visceral (sensación en el abdomen)',
            'sobrepensamiento': 'sobrepensamiento (ruido en tu cabeza)',
            'amígdala': 'amígdala (tu señal de alerta)'
        };
        let cleaned = text;
        Object.keys(mapping).forEach(term => {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            if (cleaned.toLowerCase().includes(term) && !cleaned.includes('(' + mapping[term].split('(')[1])) {
                cleaned = cleaned.replace(regex, mapping[term]);
            }
        });
        return cleaned;
    };

    const mapVerb = (v) => {
        const irregulares = {
            'hacer': 'haz', 'ir': 've', 'ser': 'sé', 'tener': 'ten', 'venir': 'ven', 
            'poner': 'pon', 'salir': 'sal', 'dar': 'da', 'decir': 'di', 'buscar': 'busca',
            'sentarse': 'siéntate', 'cerrar': 'cierra', 'dormir': 'duerme', 
            'sentir': 'siente', 'soltar': 'suelta', 'pensar': 'piensa', 
            'volver': 'vuelve', 'beber': 'bebe', 'escribir': 'escribe',
            'leer': 'lee', 'mirar': 'mira', 'observar': 'observa', 'escuchar': 'escucha',
            'reír': 'ríe', 'visualizar': 'visualiza', 'tocar': 'toca', 'tapar': 'tapa',
            'detenerse': 'detente', 'moverse': 'muévete', 'lavarse': 'lávate', 'emitir': 'emite',
            'abrir': 'abre', 'sacudir': 'sacude', 'masajear': 'masajea', 'aplicar': 'aplica',
            'colocar': 'coloca', 'cruzar': 'cruza', 'sumergir': 'sumerge', 'inhala': 'inhala',
            'exhala': 'exhala', 'respira': 'respira', 'relajar': 'relaja', 'enfocar': 'enfoca',
            'acostarse': 'acuéstate', 'acostar': 'acuesta', 'abrazar': 'abraza', 'imaginar': 'imagina'
        };
        const low = v.toLowerCase();
        if (irregulares[low]) return irregulares[low];

        const clitics = ['la', 'lo', 'las', 'los', 'me', 'nos', 'te'];
        for (const c of clitics) {
            if (low.endsWith(c) && low.length > c.length + 2) {
                const base = low.slice(0, -c.length);
                if (base.endsWith('r')) {
                    const imp = mapVerb(base.slice(0, -1) + (base.endsWith('ar') ? 'a' : 'e'));
                    if (imp.length >= 2) return imp.replace(/[aeiou]/, m => ({'a':'á','e':'é','i':'í','o':'ó','u':'ú'}[m])) + c;
                    return imp + c;
                }
            }
        }
        
        if (low.endsWith('arse')) return mapVerb(v.replace(/arse$/, 'ar')) + 'te';
        if (low.endsWith('erse')) return mapVerb(v.replace(/erse$/, 'er')) + 'te';
        if (low.endsWith('irse')) return mapVerb(v.replace(/irse$/, 'ir')) + 'te';
        if (low.endsWith('ar')) return v.slice(0, -2) + 'a';
        if (low.endsWith('er')) return v.slice(0, -2) + 'e';
        if (low.endsWith('ir')) return v.slice(0, -2) + 'e';
        return v;
    };

    const forceTuteo = (text) => {
        if (!text) return "";
        let result = text.trim();
        const spaceIdx = result.indexOf(' ');
        if (spaceIdx > -1) {
            const first = result.substring(0, spaceIdx);
            result = mapVerb(first) + result.substring(spaceIdx);
        } else {
            result = mapVerb(result);
        }
        result = result.replace(/( y |, | o | e | u )([a-zA-Záéíóúüñ]+r\b|[a-zA-Záéíóúüñ]+rse\b|[a-zA-Záéíóúüñ]+rla[s]?\b|[a-zA-Záéíóúüñ]+rlo[s]?\b)/gi, (match, sep, verb) => {
            return sep + mapVerb(verb.toLowerCase());
        });
        return result.charAt(0).toUpperCase() + result.slice(1);
    };

    const cleanAction = (text) => {
        if (!text) return "Realiza la práctica";
        return text.split(':')[0].split('(')[0]
            .replace(/\.\.\./g, '')
            .replace(/exactamente/gi, '')
            .trim();
    };

    const cleanBenefit = (text) => {
        if (!text) return "sentirte mejor";
        let clean = text.split(':')[0].split('(')[0].split(',')[0].split('.')[0]
            .replace(/\.\.\./g, '')
            .trim();
        
        let words = clean.split(' ');
        if (words.length > 6) words = words.slice(0, 6);
        while (words.length > 0 && ['de', 'del', 'el', 'la', 'con', 'para', 'en', 'a', 'y', 'los', 'las'].includes(words[words.length-1].toLowerCase())) {
            words.pop();
        }
        return words.join(' ');
    };

    let duration = (practice.duracion || "unos segundos")
        .replace(/(\d+)\s*-\s*(\d+)/g, '$1 a $2') 
        .replace(/(\d+)\s*s\b/g, '$1 segundos') 
        .replace(/(\d+)\s*min\b/g, '$1 minutos');
    
    // Aplicar aclaraciones
    const actionRaw = cleanAction(practice.accion);
    const action = forceTuteo(clarify(actionRaw));
    const benefitRaw = cleanBenefit(practice.efecto).toLowerCase();
    const benefit = clarify(benefitRaw);

    // Duración solo dentro del desplegable, formato "de X a Y minutos"
    let durationGuia = (practice.duracion || "unos minutos")
        .replace(/(\d+)\s*-\s*(\d+)/g, '$1 a $2')
        .replace(/(\d+)\s*s\b/g, '$1 segundos')
        .replace(/(\d+)\s*min\b/g, '$1 minutos');
    if (/^\d/.test(durationGuia)) durationGuia = 'de ' + durationGuia;

    // [MATRIX_RENDER_2.6] Cara limpia: reconocimiento + texto_kairos + Ver guía
    const textoKairos = practice.texto_kairos ? practice.texto_kairos.trim() : null;
    const nombre = practice.nombre ? practice.nombre.trim() : null;

    if (textoKairos) {
        // Reconocimiento pre-calculado (anti-redundancia) o fallback desde tags_estado
        const estados = practice.tags_estado || [];
        const reconocimiento = precomputedRec !== undefined ? precomputedRec :
            estados.reduce((found, e) => found || ESTADO_RECONOCIMIENTO[e] || null, null);

        // ID único por tarjeta según label (CUERPO / MENTE / ENERGÍA)
        const cardId = 'guia-' + label.toLowerCase()
            .replace(/í/g,'i').replace(/é/g,'e').replace(/á/g,'a').replace(/[^a-z]/g,'');

        // Color de acento por pilar — solo dentro del desplegable
        const accentColor = label === 'Cuerpo'  ? 'rgba(212,175,55,0.5)' :
                            label === 'Mente'    ? 'rgba(180,190,255,0.5)' :
                                                   'rgba(200,160,255,0.5)';

        // Intro terapéutica desde subserie — dentro del desplegable
        const subserie = practice.subserie ? String(practice.subserie).substring(0, 3) : null;
        const guiaIntro = subserie && GUIA_INTRO_SUBSERIE[subserie] ? GUIA_INTRO_SUBSERIE[subserie] : null;

        // Pasos desde campo accion (split por ;)
        const accionRaw = practice.accion ? practice.accion.trim() : null;
        const parseSteps = (text) => {
            if (!text) return [];
            const bySemi = text.split(/;/).map(s => s.trim().replace(/^[,\s]+/, '')).filter(s => s.length > 8);
            if (bySemi.length > 1) return bySemi.slice(0, 4).map(s => s.charAt(0).toUpperCase() + s.slice(1));
            return [text.charAt(0).toUpperCase() + text.slice(1)];
        };
        const steps = parseSteps(accionRaw);
        const stepsHtml = steps.map((step) =>
            `<li style="display:flex;gap:10px;margin-bottom:12px;align-items:flex-start">
                <span style="color:rgba(212,175,55,0.35);font-size:8px;flex-shrink:0;padding-top:4px;line-height:1">·</span>
                <span style="color:rgba(255,255,255,0.62);font-size:12px;line-height:1.6">${step}</span>
            </li>`
        ).join('');

        const guiaHtml = accionRaw ? `
            <div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.08)">
                <button
                    id="btn-${cardId}"
                    onclick="_kairosToggleGuia('${cardId}')"
                    style="display:flex;align-items:center;gap:4px;background:none;border:none;cursor:pointer;padding:0;color:rgba(255,255,255,0.28);font-size:11px;font-weight:500;letter-spacing:0.02em"
                    onmouseover="this.style.color='rgba(255,255,255,0.55)'"
                    onmouseout="this.style.color='rgba(255,255,255,0.28)'"
                >Ver guía <span style="font-size:9px;opacity:0.5">▾</span></button>
                <div id="${cardId}" style="display:none;margin-top:14px">
                    ${nombre ? `<p style="font-size:10px;color:${accentColor};font-weight:600;letter-spacing:0.08em;margin-bottom:14px;text-transform:uppercase">${nombre} · ${durationGuia}</p>` : ''}
                    <ul style="list-style:none;margin:0;padding:0;margin-bottom:${guiaIntro ? '14px' : '0'}">${stepsHtml}</ul>
                    ${guiaIntro ? `<p style="font-size:12px;color:rgba(255,255,255,0.30);line-height:1.65;font-style:italic;margin-top:4px;padding-top:10px;border-top:1px solid rgba(255,255,255,0.06)">${guiaIntro}</p>` : ''}
                </div>
            </div>` : '';

        return `
            ${reconocimiento ? `<p style="font-size:12px;color:rgba(255,255,255,0.35);line-height:1.55;margin-bottom:8px">${reconocimiento}</p>` : ''}
            <p style="font-size:15px;color:rgba(255,248,235,0.93);font-weight:500;line-height:1.5;font-style:italic;margin-bottom:0">${textoKairos}</p>
            ${guiaHtml}
        `;
    }

    // Fallback legacy: si no hay texto_kairos, construir desde accion + efecto
    return `<p class="text-sm text-white font-medium leading-relaxed">
        ${action} durante ${durationGuia} para ${benefit}.
    </p>`;
}

/**
 * Renderizador de Narrativa MATRIX (Integración Total).
 */
function renderMatrixNarrative(content, lang = 'es', lord = 'Sol', premiumData = null) {
    const container = document.getElementById('matrix-container');
    
    const update = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = val;
    };

    const adjustCopy = (text) => {
        if (!text) return "";
        return text
            .replace(/tono de fuego/gi, 'energía de fuego')
            .replace(/tono de aire/gi, 'energía de aire')
            .replace(/tono de agua/gi, 'energía de agua')
            .replace(/tono de tierra/gi, 'energía de tierra')
            .replace(/regular antes de empujar/gi, 'calmarte antes de actuar')
            .replace(/tono dominante/gi, 'energía dominante');
    };

    let userName = state.user?.name || state.user?.displayName || "";
    if (userName.toLowerCase() === 'rober') userName = 'Roberto';
    
    // Eliminamos nombre de debug del UI para que se vea como producto real
    const isDebugProfile = state.user?.debug_mode || userName.includes('Test');
    const fullName = (userName && !/^(invitado|tester|explora|test debug)$/i.test(userName) && !isDebugProfile) ? userName : "";
    
    // [MATRIX_RENDER_2.6] Header "Un espacio para regular" + botón i + panel info
    const infoNeedsLabels = {
        'calmar':   'descarga física, claridad mental y recuperación emocional',
        'activar':  'activación corporal, foco mental y canalización de energía',
        'enfocar':  'claridad mental, presencia física y orientación interna',
        'expandir': 'expansión energética, apertura mental y regulación corporal',
        'descargar':'descarga física, vaciado mental y liberación emocional',
        'descansar':'recuperación física, calma mental y restauración energética'
    };
    const need = content.target_need || 'calmar';
    const infoNeeds = infoNeedsLabels[need] || 'regulación física, mental y emocional';

    const headerHtml = `
        <p style="font-size:clamp(1.3rem,5.5vw,1.9rem);color:rgba(255,248,230,0.93);line-height:1.28;font-weight:700;text-transform:uppercase;margin:0 auto;padding-top:8px;max-width:280px;letter-spacing:0.04em">
            A veces el cuerpo habla antes que la mente pueda entenderlo.
        </p>
        <p style="margin-top:22px;font-size:0.92rem;color:rgba(255,248,230,0.72);line-height:1.7;font-weight:300;text-transform:none;max-width:240px;margin-left:auto;margin-right:auto;letter-spacing:0.01em">
            <span style="color:rgba(215,193,136,0.90);letter-spacing:0.10em;font-weight:500;font-style:italic">MATRIX</span> traduce ese clima en algo que puedes empezar a escuchar.
        </p>
        <div style="margin-top:18px;display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:8px">
            <span style="font-size:0.92rem;font-weight:400;color:rgba(255,255,255,0.74);letter-spacing:0.03em;text-transform:none"
            >Un espacio para regularte</span>
            <button
                onclick="_kairosToggleInfo()"
                style="width:20px;height:20px;border-radius:50%;border:1px solid rgba(255,255,255,0.2);background:none;cursor:pointer;color:rgba(255,255,255,0.3);font-size:11px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1"
                title="¿Cómo se eligen estas prácticas?"
            >i</button>
        </div>
        <div id="matrix-info-panel" style="display:none;margin-top:14px;padding:14px 16px;background:rgba(255,255,255,0.04);border-radius:12px;border:0.5px solid rgba(255,255,255,0.08);text-align:left;text-transform:none">
            <p style="font-size:12px;color:rgba(255,255,255,0.68);line-height:1.7;margin:0 0 8px;text-transform:none;font-weight:300;font-style:normal;letter-spacing:0.01em">Estas prácticas cambian según el momento emocional y simbólico que atraviesas.</p>
            <p style="font-size:12px;color:rgba(255,255,255,0.68);line-height:1.7;margin:0 0 8px;text-transform:none;font-weight:300;font-style:normal;letter-spacing:0.01em">La selección tiene en cuenta ciclos personales, ritmos lunares y dinámicas temporales para proponer recursos de regulación física, mental y emocional.</p>
            <p style="font-size:11px;color:rgba(255,255,255,0.45);line-height:1.6;margin:0;text-transform:none;font-weight:300;font-style:normal;letter-spacing:0.01em">Hoy el sistema detecta necesidad de ${infoNeeds}.</p>
        </div>
    `;
    update('matrix-mastery-title', headerHtml);
    update('matrix-directive-val', '');
    update('matrix-intro-val', '');
    update('matrix-context-label', content.profection_context);

    // 2. Toolkit (3 Pilares) con anti-redundancia entre reconocimientos
    const bodyPractice  = content.body_obj   || content.body;
    const mindPractice  = content.mind_obj   || content.mind;
    const energyPractice = content.spirit_obj || content.spirit;

    // Anti-redundancia: si dos pilares producen el mismo reconocimiento, el segundo usa siguiente tag disponible
    const _getRec = (practice, usedTexts) => {
        if (!practice || typeof practice === 'string') return null;
        const estados = practice.tags_estado || [];
        for (const e of estados) {
            const txt = ESTADO_RECONOCIMIENTO[e];
            if (txt && !usedTexts.has(txt)) { usedTexts.add(txt); return txt; }
        }
        return null;
    };
    const usedRecs = new Set();
    const recBody   = _getRec(bodyPractice, usedRecs);
    const recMind   = _getRec(mindPractice, usedRecs);
    const recEnergy = _getRec(energyPractice, usedRecs);

    update('matrix-body-val',   renderMatrixCard('Cuerpo',  bodyPractice,   recBody));
    update('matrix-mind-val',   renderMatrixCard('Mente',   mindPractice,   recMind));
    update('matrix-energy-val', renderMatrixCard('Energía', energyPractice, recEnergy));

    // Indicadores de Intensidad
    const renderIntensity = (id, val) => {
        const container = document.getElementById(id);
        if (!container) return;
        const level = val?.toLowerCase() || 'suave';
        const colors = level === 'alta' ? ['bg-primary', 'bg-primary', 'bg-primary'] : 
                       level === 'media' ? ['bg-primary', 'bg-primary', 'bg-white/10'] : 
                       ['bg-primary', 'bg-white/10', 'bg-white/10'];
        container.innerHTML = colors.map(c => `<div class="w-3 h-1 rounded-full ${c} transition-all duration-700"></div>`).join('');
    };

    renderIntensity('intensity-body', content.body_obj?.intensidad);
    renderIntensity('intensity-mind', content.mind_obj?.intensidad);
    renderIntensity('intensity-energy', content.spirit_obj?.intensidad);

    // 3. Monitor de Tránsito
    const status = content.intensity_status; 
    const resetTraffic = () => {
        ['traffic-stable', 'traffic-moderate', 'traffic-activation'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.classList.add('opacity-20');
                el.classList.remove('scale-110', 'opacity-100');
            }
        });
    };
    
    resetTraffic();
    let activeId = 'traffic-stable';
    let label = (lang === 'es' ? 'Clima de fondo estable.' : 'Stable background climate.');
    
    if (status === 'Moderada') {
        activeId = 'traffic-moderate';
        label = (lang === 'es' ? 'Carga moderada. Gestiona tu energía.' : 'Moderate load. Manage your energy.');
    } else if (status === 'Activación' || status === 'Alta') {
        activeId = 'traffic-activation';
        label = (lang === 'es' ? 'ALTA INTENSIDAD. Prioriza la regulación.' : 'HIGH INTENSITY. Prioritize regulation.');
    }

    const activeEl = document.getElementById(activeId);
    if (activeEl) {
        activeEl.classList.remove('opacity-20');
        activeEl.classList.add('opacity-100', 'scale-110');
        activeEl.children[0].classList.add('border-2', 'border-white/40');
        update('matrix-intensity-desc', label);
    }

    // --- 4. Bloque PREMIUM Visual (PIPELINE DE 7 PASOS) ---
    const isInternalUser = window.KAIROS_FLAGS.INTERNAL_AUTH_EMAILS.includes(state.user?.email || state.user?.id);
    const isPremiumActive = window.KAIROS_FLAGS.KAIROS_PREMIUM_ACTIVE || isInternalUser || window.KAIROS_FLAGS.KAIROS_PREMIUM_DEBUG;

    let premiumBlock = `
        <section id="matrix-premium-block" style="margin-top:32px;margin-bottom:16px">
            <div style="border-top:0.5px solid #d7c188;margin-bottom:24px;opacity:0.18"></div>
            <div style="text-align:center;margin-bottom:16px">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;margin-bottom:10px"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <p style="font-size:10px;font-weight:700;letter-spacing:0.12em;color:#d7c188;text-transform:uppercase;margin-bottom:10px">Análisis integrado Premium</p>
                <p style="font-size:12px;color:rgba(255,255,255,0.38);line-height:1.65;margin-bottom:20px;padding:0 8px">Accede a una lectura más profunda que integra tu carta natal, tránsitos actuales y ciclo anual en una sola visión práctica.</p>
            </div>
            <button onclick="window._kairosPremiumCTA&&window._kairosPremiumCTA()" style="background:transparent;border:0.5px solid #d7c188;border-radius:12px;padding:14px 20px;color:#d7c188;font-size:12px;letter-spacing:0.05em;cursor:pointer;display:flex;align-items:center;gap:10px;width:100%;justify-content:center"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#d7c188" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Seguir profundizando</button>
        </section>
    `;

    if (isPremiumActive && premiumData) {
        premiumBlock = `
            <section id="matrix-premium-real" class="mt-8 mb-12 select-none animate-fade-in border-t-2 border-primary/20 pt-12">
                <div class="bg-primary/5 p-8 rounded-[3.5rem] border border-primary/30 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-5">
                        <span class="material-symbols-outlined text-9xl text-primary">auto_awesome</span>
                    </div>
                    
                    <h3 class="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-12 flex items-center gap-2">
                        <span class="size-2 rounded-full bg-primary animate-pulse"></span> ANÁLISIS INTEGRADO PREMIUM
                    </h3>

                    <div class="space-y-12">
                        <!-- 1 & 2 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="space-y-3">
                                <p class="text-[9px] font-black text-white/30 uppercase tracking-widest">1. SENSACIÓN INTERNA</p>
                                <p class="text-[14px] leading-relaxed text-slate-200 font-medium italic opacity-90">"${premiumData.sensacion_interna}"</p>
                            </div>
                            <div class="space-y-3">
                                <p class="text-[9px] font-black text-white/30 uppercase tracking-widest">2. POR QUÉ TE PASA</p>
                                <p class="text-[13px] leading-relaxed text-primary/80 font-medium">${premiumData.por_que_te_pasa}</p>
                            </div>
                        </div>

                        <!-- 3, 4, 5 (Vertical Layout) -->
                        <div class="flex flex-col gap-4">
                            <div class="p-6 bg-white/5 rounded-[2rem] border border-white/5 transition-all hover:bg-white/10 group">
                                <p class="text-[8px] font-black text-white/40 uppercase tracking-[0.3em] mb-3 group-hover:text-primary transition-colors">3. REGULAR</p>
                                <p class="text-[12px] text-white/90 leading-relaxed font-medium">${premiumData.lo_que_necesitas_regular}</p>
                            </div>
                            <div class="p-6 bg-white/5 rounded-[2rem] border border-white/5 transition-all hover:bg-white/10 group">
                                <p class="text-[8px] font-black text-white/40 uppercase tracking-[0.3em] mb-3 group-hover:text-primary transition-colors">4. ORDENAR</p>
                                <p class="text-[12px] text-white/90 leading-relaxed font-medium">${premiumData.lo_que_necesitas_ordenar}</p>
                            </div>
                            <div class="p-6 bg-white/5 rounded-[2rem] border border-white/5 transition-all hover:bg-white/10 group">
                                <p class="text-[8px] font-black text-white/40 uppercase tracking-[0.3em] mb-3 group-hover:text-primary transition-colors">5. INTEGRAR</p>
                                <p class="text-[12px] text-white/90 leading-relaxed font-medium">${premiumData.lo_que_necesitas_integrar}</p>
                            </div>
                        </div>

                        <!-- 6 -->
                        <div class="py-6 border-y border-white/5 flex items-center gap-4">
                            <span class="material-symbols-outlined text-primary/40 text-2xl">visibility</span>
                            <div>
                                <p class="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">6. QUÉ VIENE AHORA</p>
                                <p class="text-[13px] text-primary/90 font-bold">${premiumData.que_viene_ahora}</p>
                            </div>
                        </div>

                        <!-- 7 -->
                        <div class="space-y-6">
                            <p class="text-[9px] font-black text-white/30 uppercase tracking-widest">7. RECURSOS PREMIUM DISPONIBLES</p>
                            <div class="flex flex-wrap gap-2">
                                ${premiumData.expanded_practices.map((p, idx) => `
                                    <button onclick="window.showResourceDetail('res-detail-${idx}', '${p.title}', '${p.reason}')" class="px-4 py-2 bg-primary/10 hover:bg-primary/20 transition-all rounded-full text-[9px] font-black text-primary/80 uppercase tracking-widest border border-primary/20">
                                        ${p.title}
                                    </button>
                                `).join('')}
                            </div>
                            <div id="matrix-resource-detail" class="mt-4 hidden border-l-2 border-primary/30 pl-4 py-2 animate-fade-in"></div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    if (container) {
        const oldP = container.querySelector('#matrix-premium-block');
        const oldR = container.querySelector('#matrix-premium-real');
        if (oldP) oldP.remove();
        if (oldR) oldR.remove();

        const premiumDiv = document.createElement('div');
        premiumDiv.innerHTML = premiumBlock;
        container.appendChild(premiumDiv);
    }
}

// === NAVEGACIÓN PERFIL ===
function toggleProfileMenu() {
    const panel = document.getElementById('profile-menu-panel');
    if (!panel) return;
    
    if (panel.classList.contains('hidden')) {
        panel.classList.remove('hidden');
        panel.classList.add('flex');
    } else {
        panel.classList.add('hidden');
        panel.classList.remove('flex');
    }
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
    const container = document.getElementById('profile-menu-container');
    const panel = document.getElementById('profile-menu-panel');
    if (container && panel && !container.contains(e.target)) {
        panel.classList.add('hidden');
        panel.classList.remove('flex');
    }
});

const KAIROS_PREMIUM_ENGINE = {
    // Helpers de Calibración Humana (Traducción de Datos a Lenguaje KAIROS)
    helpers: {
        getBiologicalFunction: (planet) => {
            const map = {
                'Luna': 'ritmo biológico y la absorción emocional',
                'Sol': 'eje de vitalidad y la expresión del yo',
                'Mercurio': 'sistema nervioso y el procesamiento de información',
                'Venus': 'equilibrio sensorial y la búsqueda de bienestar',
                'Marte': 'impulso motor y la capacidad de acción',
                'Júpiter': 'expansión de recursos internos y externos',
                'Saturno': 'límites de realidad y la estructura de seguridad'
            };
            return map[planet] || 'equilibrio sistémico de tu energía';
        },
        getProcessingStyle: (mercurySign) => {
            const map = {
                'Aries': 'directo, rápido e impulsivo',
                'Tauro': 'concreto, estable y pausado',
                'Géminis': 'curioso, asociativo y múltiple',
                'Cáncer': 'intuitivo, protector y receptivo',
                'Leo': 'centralizado, creativo y expresivo',
                'Virgo': 'analítico, detallista y organizador',
                'Libra': 'diplomático, reflexivo y relacional',
                'Escorpio': 'inquisitivo, profundo y transformador',
                'Sagitario': 'proyectivo, conceptual y expansivo',
                'Capricornio': 'pragmático, estructurado y realista',
                'Acuario': 'original, sistémico y desapegado',
                'Piscis': 'difuso, imaginativo e inspirador'
            };
            return map[mercurySign] || 'personal y único';
        },
        getIntegrationPattern: (lord, moon) => {
            const desc = {
                'fuerza': ['Marte', 'Sol'],
                'estructura': ['Saturno', 'Capricornio', 'Virgo'],
                'sensibilidad': ['Luna', 'Piscis', 'Cáncer'],
                'fluidez': ['Júpiter', 'Sagitario', 'Acuario']
            };
            const getT = (v) => {
                for (let k in desc) if (desc[k].includes(v)) return k;
                return 'naturaleza';
            };
            return `la ${getT(lord)} de tu guía del año con la ${getT(moon)} del clima lunar de hoy`;
        },
        // --- Generadores de Bloques Humanos (v6.13) ---
        generateSensacion: (natal, current) => {
            if (natal === current) {
                return `Tu naturaleza emocional coincide hoy con el pulso del entorno al estar ambos en ${natal}. Sientes que tu forma instintiva de reaccionar es validada por el clima externo, lo que te aporta una claridad inusual y una sensación de estar en tu centro. Es un momento de profunda nitidez donde tus necesidades internas y las demandas del momento hablan el mismo lenguaje.`;
            }
            const contrastes = {
                'Aries-Libra': `Tu naturaleza emocional tiende a la acción directa y al impulso inmediato, pero el clima de hoy en Libra te empuja a considerar la perspectiva del otro antes de moverte. Este contraste genera una sensación de freno en tu cuerpo, ya que tu instinto busca ganar velocidad mientras que el entorno exige una pausa para mantener el equilibrio. Aprender a negociar tus deseos sin perder tu fuerza es el reto físico hoy.`,
                'Tauro-Escorpio': `Tu búsqueda de estabilidad choca con un clima externo que pide transformación profunda y desapego. Sientes una resistencia interna a soltar lo conocido, lo que puede manifestarse como una tensión en la musculatura o una fijación mental. Lo que conviene es notar dónde el control de ayer impide el flujo de hoy, permitiéndote una apertura necesaria hacia lo nuevo.`
            };
            const key = `${natal}-${current}`;
            return contrastes[key] || `Tu impronta emocional en ${natal} recibe hoy el estímulo del clima en ${current}. Esta diferencia entre cómo sientes naturalmente y lo que el momento te pide genera un contraste que puedes notar como una inquietud física o una duda al decidir. Es un ejercicio de adaptación donde tu base interna debe aprender a dialogar con una frecuencia externa distinta.`;
        },
        generatePorQue: (asc, lord, house) => {
            const base = {
                'Cáncer': 'Sientes una necesidad constante de proteger tu mundo interno y el de los tuyos, filtrando lo que ocurre desde la sensibilidad.',
                'Aries': 'Abordas el mundo con valentía y ganas de iniciar cosas nuevas, filtrando la realidad a través de la acción.'
            };
            const motor = {
                'Marte': `Pero ${lord}, como guía de tu año, está inyectando una dosis de urgencia y demanda externa sobre esa base.`,
                'Saturno': `Sin embargo ${lord}, como autoridad de tu ciclo actual, impone límites y exige una estructura que ralentiza tus planes.`
            };
            return `${base[asc] || 'Tu forma de abordar el mundo desde tu base vital se encuentra hoy con un desafío externo directo.'} ${motor[lord] || `Tu guía del año, ${lord}, está operando en tu área de vida ${house}, forzando un movimiento que no puedes ignorar.`} Esta tensión entre lo que necesitas para sentirte seguro y lo que el ciclo te exige es lo que genera tu cansancio o tu impulso actual. No es un error del sistema, sino la forma en que tu año te pide madurar un área concreta.`;
        },
        generateRegular: (planet) => {
            const bio = KAIROS_PREMIUM_ENGINE.helpers.getBiologicalFunction(planet);
            const consejos = {
                'Sol': 'Conviene realizar un gesto de repliegue consciente a mitad del día, permitiendo que tu presencia sea sutil en lugar de dominante.',
                'Marte': 'Busca un canal físico para descargar el excedente de impulso antes de que se convierta en una respuesta defensiva o irascible.',
                'Mercurio': 'Silencia las notificaciones y reduce el intercambio de mensajes para permitir que tu mente procese lo que ya sabe.'
            };
            return `Hoy el pulso planetario activa directamente tu ${bio}. Necesitas regular esta función para evitar una saturación que te deje sin energía antes de terminar la jornada. Si no pones un límite consciente, el desborde de esta función te llevará a reaccionar de forma automática ante estímulos que hoy no son tu prioridad.`;
        },
        generateOrdenar: (sign) => {
            const estilo = KAIROS_PREMIUM_ENGINE.helpers.getProcessingStyle(sign);
            const especificos = {
                'Piscis': 'Evita tomar decisiones basadas solo en presentimientos difusos y busca aterrizar tus ideas en una lista concreta de pasos lógicos.',
                'Aries': 'Respira antes de concluir y busca una segunda opinión que te ayude a ver los detalles que tu rapidez mental suele pasar por alto.',
                'Virgo': 'Deja de analizar los fragmentos y trata de ver la imagen completa para no quedar atrapado en una perfección que hoy no es necesaria.'
            };
            return `Tu pensamiento procesa la realidad de forma ${estilo}. En un momento como hoy, este estilo natural necesita un orden adicional para no perderse en sus propias mallas de procesamiento. Utiliza tu capacidad de enfoque para separar lo que es urgente de lo que es meramente accesorio, protegiendo tu paz mental de la dispersión de datos.`;
        },
        generateIntegrar: (lord, moon) => {
            const p = KAIROS_PREMIUM_ENGINE.helpers.getIntegrationPattern(lord, moon);
            return `El aprendizaje central de esta jornada consiste en integrar ${p}. Existe una fricción evidente entre el impulso de tu año y la necesidad de equilibrio que el momento lunar requiere. El punto medio útil es actuar con firmeza pero con una comunicación impecable, preguntándote si tu decisión de hoy construye un puente sólido o simplemente derriba un obstáculo sin mirar las consecuencias.`;
        },
        generateAnticipacion: (evento, currentSign) => {
            if (!evento) return `La Luna continúa moviéndose por ${currentSign}, marcando un periodo de consolidación interna. Es el momento de completar lo que ya tienes entre manos antes de que el ciclo cambie de fase y pida una nueva dirección. Lo que hoy dejes cerrado te dará la disponibilidad necesaria para lo que vendrá después.`;
            
            const tipos = {
                'NEW': 'Luna Nueva',
                'FULL': 'Luna Llena',
                'ingress': 'entrada planetaria',
                'new': 'Luna Nueva',
                'full': 'Luna Llena'
            };
            
            const d = new Date(evento.date);
            const fechaStr = d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
            let nombreEvento = tipos[evento.type] || tipos[evento.tipo] || evento.description || 'un cambio de ciclo';
            if (nombreEvento.toLowerCase().includes('new')) nombreEvento = 'Luna Nueva';
            if (nombreEvento.toLowerCase().includes('full')) nombreEvento = 'Luna Llena';

            return `El próximo hito importante es la ${nombreEvento} que ocurrirá el ${fechaStr}. Este movimiento empezará a remover tu necesidad de iniciar algo desde cero, por lo que podrías notar un incremento en la inquietud interna unos días antes. Preparar el terreno hoy significa despejar lo que ya no sirve para que tu próxima siembra de intenciones tenga espacio real donde crecer.`;
        }
    },

    matrix: {
        // ============================================================
        // ⚠️ MÓDULO CONGELADO — MATRIX PREMIUM v1
        // NO MODIFICAR sin aprobación expresa de Roberto
        // Datos activos validados: Luna Libra, LunaNatal Aries, 
        // Asc Cáncer, Marte Señor del Año, Mercurio Piscis
        // Última validación: Fase 6.13 — Abril 2026
        // ============================================================
        processDetailedAnalysis: async function(context, activeMatrixContent = null, config = null) {
            // TAREA 3: CORRECCIÓN QUIRÚRGICA DE LUNA Y BLOQUE 6 (v6.12D)
            const shadowCtx = context || {};
            
            // Luna NATAL — dato fijo de la carta
            const lunaNatalObj = shadowCtx.natal_context?.planets?.Luna
                              || shadowCtx.natal_context?.planets?.Moon
                              || shadowCtx.natal_context?.moon
                              || {};
            const lunaNatalSigno = lunaNatalObj.sign || lunaNatalObj.signo || 'Aries';

            // Luna ACTUAL transitante — dato dinámico (LIBRA SEGÚN TRUTH)
            const transitPlanets = shadowCtx.transit_context?.planets || window.CURRENT_TRANSITS || {};
            const lunaTransitoObj = shadowCtx.temporal_context?.moon
                                 || shadowCtx.temporal_context?.current_moon
                                 || shadowCtx.transit?.moon
                                 || shadowCtx.transitData?.moon
                                 || shadowCtx.dailyContext?.moon
                                 || shadowCtx.daily_context?.moon
                                 || {};
            
            const lunaSigno = (typeof transitPlanets.Luna === 'string' ? transitPlanets.Luna : null) 
                             || (typeof transitPlanets.Moon === 'string' ? transitPlanets.Moon : null)
                             || lunaTransitoObj.sign || lunaTransitoObj.signo || shadowCtx.temporal_context?.moon_sign || 'desconocido';
            
            const lunaGrado = lunaTransitoObj.degree ? Math.floor(lunaTransitoObj.degree) : (shadowCtx.temporal_context?.moon_degree || 0);
            const lunaFase = lunaTransitoObj.phase || lunaTransitoObj.fase || shadowCtx.temporal_context?.moon_phase || 'desconocida';

            const ascSigno = shadowCtx.natal_context?.ascendant || 'Aries';
            const seniorNombre = shadowCtx.annual_context?.lord_of_year || 'Sol';



            // Normalización de Hotspots (Tarea 4)
            const rawHotspots = shadowCtx.monthly_context?.hotspots;
            let normalizedHotspots = [];
            if (Array.isArray(rawHotspots)) {
                normalizedHotspots = rawHotspots;
            } else if (rawHotspots && typeof rawHotspots === 'object') {
                if (rawHotspots.lunations) normalizedHotspots.push(...rawHotspots.lunations);
                if (rawHotspots.operational_ingresses) normalizedHotspots.push(...rawHotspots.operational_ingresses);
                if (rawHotspots.solar_ingress) normalizedHotspots.push(rawHotspots.solar_ingress);
                if (normalizedHotspots.length === 0) normalizedHotspots = Object.values(rawHotspots).filter(v => v).flat();
            }

            const proximoEvento = normalizedHotspots.find(h => {
                if (!h) return false;
                const fecha = h.date ? new Date(h.date) : null;
                return fecha && !isNaN(fecha) && fecha > new Date();
            }) || null;

            const realData = {
                currentMoon: lunaSigno,
                moonPhase: lunaFase,
                natalMoon: lunaNatalSigno,
                ascendant: ascSigno,
                lordOfYear: seniorNombre,
                profectionHouse: shadowCtx.annual_context?.profection_house || 1,
                dayPlanet: shadowCtx.temporal_context?.day_planet || 'Sol',
                mercurySign: shadowCtx.natal_context?.planets?.Mercurio?.sign || 'Piscis',
                nextEvent: proximoEvento
            };

            const estructura = config?.premium_por_capa?.matrix?.estructura || [
                "sensacion_interna", "por_que_te_pasa", "lo_que_necesitas_regular", 
                "lo_que_necesitas_ordenar", "lo_que_necesitas_integrar", "que_viene_ahora", "recursos_avanzados"
            ];

            const analysisResults = {};
            
            // 1. SENSACIÓN INTERNA
            if (estructura.includes("sensacion_interna")) {
                analysisResults.sensacion_interna = KAIROS_PREMIUM_ENGINE.helpers.generateSensacion(realData.natalMoon, realData.currentMoon);
            }

            // 2. POR QUÉ TE PASA
            if (estructura.includes("por_que_te_pasa")) {
                analysisResults.por_que_te_pasa = KAIROS_PREMIUM_ENGINE.helpers.generatePorQue(realData.ascendant, realData.lordOfYear, realData.profectionHouse);
            }

            // 3. REGULAR
            if (estructura.includes("lo_que_necesitas_regular")) {
                analysisResults.lo_que_necesitas_regular = KAIROS_PREMIUM_ENGINE.helpers.generateRegular(realData.dayPlanet);
            }

            // 4. ORDENAR
            if (estructura.includes("lo_que_necesitas_ordenar")) {
                analysisResults.lo_que_necesitas_ordenar = KAIROS_PREMIUM_ENGINE.helpers.generateOrdenar(realData.mercurySign);
            }

            // 5. INTEGRAR
            if (estructura.includes("lo_que_necesitas_integrar")) {
                analysisResults.lo_que_necesitas_integrar = KAIROS_PREMIUM_ENGINE.helpers.generateIntegrar(realData.lordOfYear, realData.currentMoon);
            }

            // 6. QUÉ VIENE AHORA
            if (estructura.includes("que_viene_ahora")) {
                analysisResults.que_viene_ahora = KAIROS_PREMIUM_ENGINE.helpers.generateAnticipacion(proximoEvento, realData.currentMoon);
            }

            // 7. RECURSOS AVANZADOS (Serie 800 + Necesidad)
            // Determinar la necesidad principal basada en el contexto
            const intensity = activeMatrixContent?.intensity_score || 50;
            const need = intensity > 70 ? 'body' : (intensity > 40 ? 'mind' : 'spirit');

            // Filtrar Serie 800 (Simulado con lógica de compatibilidad)
            const resources = activeMatrixContent ? [
                { id: '810.' + (intensity % 100), title: (activeMatrixContent.body_obj?.nombre || 'Práctica Biológica'), reason: analysisResults.lo_que_necesitas_regular },
                { id: '820.' + (intensity % 100), title: (activeMatrixContent.mind_obj?.nombre || 'Práctica Cognitiva'), reason: analysisResults.lo_que_necesitas_ordenar }
            ] : [];
            


            const finalData = {
                ...analysisResults,
                expanded_practices: resources,
                is_internal: shadowCtx.natal_context?.is_real || false
            };


            return finalData;
        }
    },
    hoy: {
        processDailyAnalysis: function(context) {
            return { status: "Shadow Mode Active" };
        }
    },
    semana: {
        processWeeklyAnalysis: function(context) {
            return { status: "Shadow Mode Active" };
        }
    },
    mes: {
        processMonthlyAnalysis: function(context) {
            return { status: "Shadow Mode Active" };
        }
    },
    anual: {
        processAnnualAnalysis: function(context) {
            return { status: "Shadow Mode Active" };
        }
    }
};

window.KAIROS_PREMIUM_ENGINE = KAIROS_PREMIUM_ENGINE;

window.renderMatrixNarrative = renderMatrixNarrative;
window.renderDailyNarrative = renderDailyNarrative;
window.toggleLanguage = toggleLanguage;
window.setTab = setTab;
window.handleAuth = handleAuth;
window.toggleAuthMode = toggleAuthMode;
window.toggleAgeEdit = toggleAgeEdit;
window.saveAge = saveAge;
window.changeAge = changeAge;
window.handlePasswordReset = handlePasswordReset;
window.loginWithGoogle = loginWithGoogle;
window.nextStep = nextStep;
window.prevStep = prevStep;
window.finishSetup = finishSetup;
window.saveUserProfile = saveUserProfile;
window.saveJournalEntry = saveJournalEntry;
window.logout = logout;
window.handleLogout = logout;

// [v6.10] Premium Resource UI Handler
window.showResourceDetail = function(id, title, reason) {
    const container = document.getElementById('matrix-resource-detail');
    if (!container) return;
    
    // If it's already showing this specific one, toggle hide
    if (container.dataset.activeId === id && !container.classList.contains('hidden')) {
        container.classList.add('hidden');
        return;
    }
    
    container.innerHTML = `
        <div class="p-6 bg-primary/10 border border-primary/20 rounded-3xl space-y-3 relative overflow-hidden select-none">
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div class="flex items-center justify-between">
                <h4 class="text-[10px] font-black text-primary uppercase tracking-[0.3em]">${title}</h4>
                <button onclick="document.getElementById('matrix-resource-detail').classList.add('hidden')" class="text-white/30 hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-sm">close</span>
                </button>
            </div>
            <p class="text-[12px] text-white/80 leading-relaxed font-medium pt-1">
                ${reason}
            </p>
        </div>
    `;
    
    container.classList.remove('hidden');
    container.dataset.activeId = id;
    
    // Smooth scroll to see the detail if needed
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
};


/**
 * ============================================================
 * KAIROS LABORATORY CORE
 * [v650.5.26] REBUILT & SANDBOXED
 * ============================================================
 */

