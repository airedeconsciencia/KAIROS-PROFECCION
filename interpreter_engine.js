// ============================================================
// ⚠️ MÓDULO CONGELADO — interpreter_engine.js v1.7.1
// NO MODIFICAR sin aprobación expresa de Roberto
// Última validación: Fase 6.18 — Abril 2026
// ============================================================
/**
 * KAIROS | Interpreter Engine v0.6.0 (SHADOW MODE - FIRESTORE LIVE)
 * Módulo puente entre el sistema matemático y kairos_library.
 */

const ANNUAL_RICH_DATA = {
    // [SECCIÓN F] POOLS DE REGULACIÓN EMOCIONAL (KAIROS LEVANTADO)
    // Fuente: Lexico Kairos Expandido - Sección F (Transcripción manual)
    regulation_pools: {
        F7: [
            "Tu cuerpo ya lo procesó. Lo que sientes en el pecho, en el estómago, en los hombros — eso también es información.",
            "Antes de decidir, respira. El cuerpo tiene una respuesta que la mente todavía no formuló.",
            "Tu sistema nervioso está pidiendo una pausa, no una solución rápida. Escucha el latido antes del pensamiento.",
            "La tensión física que percibes es el residuo de una batalla que ya no necesitas pelear. Suelta los hombros."
        ],
        F3: [
            "La urgencia que sientes no es impaciencia — es señal de que algo en ti ya tomó una decisión que la mente todavía está procesando.",
            "No es que no sepas — es que lo que sabes no encaja con lo que querías. Dale espacio a esa verdad.",
            "La tensión que sientes es el puente entre quien eras y quien estás empezando a ser. No la evites.",
            "Esa incomodidad sutil es tu brújula interna avisando que el mapa que usas ya no describe el territorio actual."
        ],
        F2: [
            "Necesitas actuar. No más análisis. Solo el primer paso.",
            "La claridad no llega esperando — llega haciendo. Elige una acción pequeña hoy.",
            "Simplifica. La respuesta no está en la complejidad, sino en la dirección que ya conoces.",
            "El exceso de reflexión está asfixiando tu impulso vital. Muévete, aunque sea un centímetro, en la dirección que temes."
        ]
    }
};

const ANNUAL_RICH_DATA_LEGACY = {
    casas: {
        '1': { direccion: "Reinventar tu identidad y tomar la iniciativa vital.", cuidado: "Evita el egoísmo excesivo o la impaciencia con los demás.", practica: ["Prioriza proyectos personales que dependan solo de ti.", "Cuida tu cuerpo y renueva tu imagen o presencia.", "Atrévete a liderar y no esperes permiso para empezar."] },
        '2': { direccion: "Consolidar recursos y reconocer tu valor propio.", cuidado: "Evita la terquedad o el apego excesivo a lo material.", practica: ["Ordena tus finanzas y pon límite a los gastos innecesarios.", "Invierte tiempo en monetizar tus talentos naturales.", "Dedica momentos al disfrute físico y la buena alimentación."] },
        '3': { direccion: "Aprender, comunicar y optimizar tu entorno cercano.", cuidado: "Evita la dispersión mental o el exceso de información.", practica: ["Inscríbete en cursos cortos o aprende una nueva habilidad.", "Mejora la comunicación con tus hermanos o vecinos inmediatos.", "Escribe, habla o difunde tus ideas más claramente."] },
        '4': { direccion: "Nutrir tus raíces, el hogar y el mundo emocional.", cuidado: "Evita el aislamiento o quedarte atrapado en el pasado.", practica: ["Transforma o embellece tu espacio físico (casa o habitación).", "Sana dinámicas familiares o conecta con tus ancestros.", "Prioriza tu paz interior por encima de las demandas externas."] },
        '5': { direccion: "Permitir el juego, la creatividad y la autoexpresión.", cuidado: "Evita el drama excesivo o la necesidad de ser el centro todo el tiempo.", practica: ["Dedica tiempo a proyectos creativos personales.", "Permite más juego y disfrute genuino en tu vida.", "Expresa tu identidad sin buscar aprobación externa."] },
        '6': { direccion: "Optimizar hábitos, salud y eficiencia en el trabajo.", cuidado: "Evita el perfeccionismo tóxico o descuidar tu descanso.", practica: ["Implementa rutinas enfocadas en tu bienestar físico y mental.", "Optimiza tus procesos y ordena tu espacio de trabajo cotidiano.", "Enfócate en la técnica y no en el reconocimiento."] },
        '7': { direccion: "Equilibrar relaciones, asociaciones y la vida de pareja.", cuidado: "Evita la dependencia emocional o anularte por complacer al otro.", practica: ["Establece acuerdos justos y claros con socias/os o pareja.", "Aprende a negociar y encontrar puntos medios saludables.", "Observa qué proyectas en los demás para aprender de ti."] },
        '8': { direccion: "Transformar a profundidad y soltar viejas pieles.", cuidado: "Evita caer en paranoias, luchas de poder o intentar manipular.", practica: ["Inicia procesos terapéuticos o de autoconocimiento profundo.", "Revisa tus compromisos financieros compartidos.", "Permite que termine lo que ya no tiene vitalidad en tu vida."] },
        '9': { direccion: "Expandir tu visión, horizontes y marco de creencias.", cuidado: "Evita el fanatismo o creer que tienes la verdad absoluta.", practica: ["Planifica un viaje importante o estudia saberes mayores.", "Cuestiona tus dogmas y ábrete a perspectivas diferentes.", "Conecta con mentores o busca inspiración de filosofías nuevas."] },
        '10': { direccion: "Materializar éxito, asumir autoridad y destacar.", cuidado: "Evita la rigidez profesional extrema y el abandono de tu vida privada.", practica: ["Asume el liderazgo en proyectos profesionales importantes.", "Diseña un plan estratégico para escalar en tu vocación.", "Acepta la visibilidad y hazte cargo de tus responsabilidades."] },
        '11': { direccion: "Conectar con redes, amistades y visiones de futuro.", cuidado: "Evita disolverte en la masa o aislarte en rebeldía sin causa.", practica: ["Asóciate con grupos o tribus afines a tus ideales.", "Colabora en proyectos comunitarios o de impacto social.", "Actualiza tus sueños y proyecta a largo plazo activamente."] },
        '12': { direccion: "Retirarse, soltar el control y limpiar el subconsciente.", cuidado: "Evita la evasión escapista o adoptar un rol de víctima.", practica: ["Incorpora prácticas meditativas o tiempos de largo silencio.", "Atiende a tus sueños e intuición: lleva un diario nocturno.", "Cierra ciclos, perdona y prepara la tierra para un nuevo año."] }
    },
    lord_clima: {
        'Sol': "Radiante, expresivo, central e iluminador",
        'Luna': "Íntimo, fluctuante, nutritivo y emocional",
        'Mercurio': "Rápido, curioso, analítico y comunicativo",
        'Venus': "Armonioso, sensual, atraído a la belleza y el goce",
        'Marte': "Cortante, dinámico, asertivo y de conquista",
        'Júpiter': "Expansivo, optimista, filosófico y abundante",
        'Saturno': "Estructural, lento, exigente y consolidador"
    }
};

function getToneForCombination(lord, lordSign, profectedHouse) {
  if (!lord || !lordSign) return null;
  const baseTone = (typeof TONE_BY_PLANET_SIGN !== 'undefined')
    ? TONE_BY_PLANET_SIGN[lord]?.[lordSign] || null
    : null;
  if (!baseTone) return null;
  return { base: baseTone, house: profectedHouse, lord: lord, sign: lordSign };
}

function detectNarrativeTension(lord, dayPlanet) {
  const NATURE = {
    'Sol':'expansion','Luna':'observación','Marte':'acción',
    'Mercurio':'observación','Júpiter':'expansion','Venus':'apertura','Saturno':'contención'
  };
  const OPPOSITES = {
    'expansion':'contención','contención':'expansion',
    'acción':'observación','observación':'acción',
    'apertura':'cierre','cierre':'apertura'
  };
  const lN = NATURE[lord] || null;
  const dN = NATURE[dayPlanet] || null;
  if (!lN || !dN) return { hasTension: false };
  const opp = OPPOSITES[lN] === dN;
  return { hasTension: opp, type: opp ? `${lN}_vs_${dN}` : null };
}

function buildBridgeSentence(tension, lord, dayPlanet) {
  if (!tension?.hasTension) return '';
  const B = {
    'acción_vs_observación': lord + ' marca el ciclo; hoy conviene escuchar antes de actuar.',
    'expansion_vs_contención': 'El año abre; hoy consolida antes de avanzar.',
    'apertura_vs_cierre': 'El ciclo empuja hacia afuera; hoy el ritmo pide interior.',
    'contención_vs_acción': 'El año trabaja en silencio; hoy el impulso quiere moverse.',
    'observación_vs_expansion': 'El ciclo pide calma; hoy la energía empuja hacia más.'
  };
    return B[tension.type] || (lord + ' marca el proceso; hoy ' + (dayPlanet||'') + ' añade su matiz.');
}

const TONE_BY_PLANET_SIGN = {
  'Sol': {
    'Aries':
      'eres más tú cuando lideras o cuando tomas la iniciativa sin esperar permiso. Tu energía funciona de forma directa e inmediata — el impulso es tu punto de partida natural',
    'Tauro':
      'tu forma de avanzar es constante y sólida, no rápida. Necesitas que las cosas tengan base real antes de comprometerte, y esa paciencia es una fortaleza, no una limitación',
    'Géminis':
      'tu mente necesita moverse entre ideas y perspectivas distintas para sentirse viva. Esa curiosidad constante es tu motor — funciona mejor cuando tienes variedad que cuando tienes rutina fija',
    'Cáncer':
      'tu fuerza viene de adentro: de la intuición, del cuidado y de los vínculos reales. Lo que sientes sobre una situación suele ser más certero de lo que parece desde fuera',
    'Leo':
      'necesitas expresarte y sentirte reconocido para dar lo mejor de ti. No es vanidad — es que tu energía se activa cuando hay un espacio donde puedes ser genuinamente tú',
    'Virgo':
      'tu poder está en los detalles y en saber cómo mejorar lo que ya existe. Eres más efectivo cuando hay algo concreto que analizar, ordenar o perfeccionar',
    'Libra':
      'funciones mejor cuando el entorno está en equilibrio. Las decisiones te cuestan más cuando hay tensión no resuelta cerca — la armonía no es un lujo para ti, es una condición',
    'Escorpio':
      'tu fuerza viene de ir a fondo. Raramente te quedas en la superficie de nada — y cuando algo no te cuadra, tu instinto para detectar lo que falta suele acertar',
    'Sagitario':
      'necesitas una visión que te mueva, un porqué claro, para funcionar de verdad. Sin esa dirección, la energía se dispersa; con ella, puedes ir muy lejos',
    'Capricornio':
      'construyes con paciencia y estructura — no buscas resultados inmediatos porque sabes que lo que vale tarda. Esa constancia silenciosa es una de tus mayores fortalezas',
    'Acuario':
      'eres más tú cuando puedes pensar diferente y moverte a tu manera. Los moldes convencionales te limitan más de lo que ayudan — tu visión poco ortodoxa suele estar adelantada',
    'Piscis':
      'tu fuerza es difícil de ver pero muy real: opera a través de la intuición, la empatía y la sensibilidad. Captas lo que otros no perciben, y eso tiene un valor que a veces infravaloras'
  },

  'Marte': {
    'Aries':
      'actúas rápido y de forma directa — el impulso es tu primer lenguaje. Esa velocidad es una ventaja real cuando hay que mover algo, pero a veces conviene un segundo antes de lanzarse',
    'Tauro':
      'tu acción es lenta pero muy sólida. No arrancas fácil, pero una vez en marcha eres difícil de parar. La consistencia es tu forma de conseguir resultados, no los arranques de energía',
    'Géminis':
      'te mueves a través de ideas, conexiones y cambios de dirección. Eso te da agilidad, pero también dispersión — tu reto habitual es elegir un frente y cerrarlo antes de abrir otro',
    'Cáncer':
      'actúas desde lo que sientes, especialmente cuando hay algo o alguien que proteger. Tu energía se activa ante lo emocional — y eso puede ser muy potente o muy reactivo según el momento',
    'Leo':
      'tu acción necesita tener sentido y resonancia para que te mueva de verdad. Cuando lo que haces importa o tiene visibilidad, rindes más — sin ese motor, el esfuerzo se siente hueco',
    'Virgo':
      'eres más efectivo cuando tienes un plan claro y puedes ejecutar con precisión. Tu reto habitual es saber cuándo algo es suficientemente bueno — porque la perfección puede frenar el avance',
    'Libra':
      'prefieres actuar con consenso y con todos los ángulos considerados. Eso te da solidez, pero también puede costarte tiempo cuando la situación pide una decisión más rápida',
    'Escorpio':
      'actúas con estrategia y con intención — rara vez haces algo sin un propósito real detrás. Esa profundidad te da ventaja, aunque a veces tiende hacia el control de lo que no se puede controlar',
    'Sagitario':
      'te mueves mejor cuando hay una idea grande detrás de lo que haces. El propósito es tu combustible — sin él, la energía se dispersa aunque tengas todas las condiciones para avanzar',
    'Capricornio':
      'tu acción es constante, estructurada y orientada a largo plazo. No buscas la victoria rápida — buscas construir algo que dure, y eso requiere un ritmo diferente al de la mayoría',
    'Acuario':
      'actúas mejor cuando hay una causa colectiva o una idea que va más allá de ti. Lo puramente personal te motiva menos — buscas que lo que haces tenga un impacto más amplio',
    'Piscis':
      'actúas desde la intuición y la emoción, lo que puede ser muy potente pero también difuso. Tu energía necesita una dirección concreta para no dispersarte o quedarte sin rumbo'
  },

  'Venus': {
    'Aries':
      'te atraes hacia lo que te produce emoción directa o te desafía. Eres más sincero en el afecto que indirecto — si algo o alguien te importa, lo expresas con bastante claridad',
    'Tauro':
      'valoras la seguridad y el placer real por encima de la novedad. Construyes los vínculos despacio y con mucho cuidado — y cuando algo es tuyo de verdad, es muy difícil que lo sueltes',
    'Géminis':
      'te conectas a través de la conversación y el intercambio intelectual. Necesitas que haya variedad y movimiento en tus relaciones — la rutina sin estímulo te desconecta',
    'Cáncer':
      'das y recibes afecto a través del cuidado. Para ti, querer a alguien se expresa en estar presente, proteger y recordar los detalles — y esperas algo de eso de vuelta',
    'Leo':
      'necesitas sentirte admirado y poder ser generoso. Cuando das, das en grande — y cuando no te sientes reconocido en lo que aportas, algo se apaga',
    'Virgo':
      'expresas el afecto de forma práctica y concreta: ayudando, resolviendo, cuidando los detalles. Para ti, hacer algo bien por alguien es una de las formas más reales de querer',
    'Libra':
      'buscas equilibrio y reciprocidad genuina en tus relaciones. Cuando algo no se siente justo o simétrico, lo notas antes de que nadie lo diga — aunque a veces cueste nombrarlo',
    'Escorpio':
      'te conectas de forma profunda o no te conectas. Las relaciones superficiales te agotan más que la soledad — necesitas algo real, aunque sea intenso o complicado',
    'Sagitario':
      'necesitas libertad y una visión compartida para sentirte genuinamente conectado. Sin esa expansión en la relación, algo se siente limitado aunque todo lo demás esté bien',
    'Capricornio':
      'construyes los vínculos con paciencia y compromisos reales. No eres de gestos rápidos ni de declaraciones vacías — lo que ofreces tarda en llegar pero es sólido',
    'Acuario':
      'amas desde la libertad y la originalidad. Necesitas que haya espacio en tus relaciones para ser diferente — la presión de encajar en un molde convencional te aleja',
    'Piscis':
      'te fusionas fácilmente con lo que te rodea, lo que puede ser muy bello o muy agotador. Tienes una compasión natural que a veces hace difícil distinguir dónde terminas tú y dónde empieza el otro'
  },

  'Mercurio': {
    'Aries':
      'tu mente funciona mejor cuando va directa al punto — los detalles te saturan y el análisis excesivo te frena. Tu forma de pensar es rápida e intuitiva, y eso tiene mucho valor',
    'Tauro':
      'piensas despacio pero con mucha solidez. Tu mente necesita tiempo para procesar, y cuando llega a una conclusión, esa conclusión es firme — no cambia con facilidad',
    'Géminis':
      'tu mente es ágil y curiosa, y conecta ideas de forma muy rápida. El reto es la dispersión — tienes muchos frentes abiertos y a veces cuesta cerrar uno antes de abrir el siguiente',
    'Cáncer':
      'piensas con intuición y emoción, y tu memoria es muy fuerte — especialmente para lo que tiene carga afectiva. Lo que sientes sobre algo suele ser una parte real de cómo entiendes el mundo',
    'Leo':
      'tu mente funciona mejor cuando se expresa — hablar, escribir o compartir lo que piensas te ayuda a clarificarlo. Necesitas ser escuchado para terminar de procesar, no solo para comunicar',
    'Virgo':
      'analizas con mucha precisión y atención al detalle. Eso te da ventaja en casi todo, pero también puede frenarte — el reto habitual es saber cuándo un análisis ya es suficiente',
    'Libra':
      'ves todos los lados de una situación antes de posicionarte, lo que te da perspectiva y también puede generarte indecisión. Tu mente busca el equilibrio incluso antes de hablar',
    'Escorpio':
      'tu mente va directo a lo que está oculto o sin decir. Detectas lo que los demás no ven, lo que te da una capacidad de análisis muy profunda — y a veces cierta desconfianza por defecto',
    'Sagitario':
      'piensas en grande y con visión amplia, pero a veces a costa de los detalles. Tu mente busca el sentido general antes que la precisión — eso te da perspectiva, aunque a veces pierde matiz',
    'Capricornio':
      'piensas de forma estructurada y orientada a resultados concretos. Tu mente busca la aplicación práctica de las ideas — si algo no lleva a algún lado, le cuesta mantener el interés',
    'Acuario':
      'tu mente genera ideas originales con frecuencia, muchas veces adelantadas a su tiempo. Piensas diferente de forma natural — y a veces eso hace que las ideas cuesten más de comunicar que de tener',
    'Piscis':
      'piensas de forma intuitiva y simbólica, lo que te da acceso a perspectivas que otros no ven. El reto es la confusión — las ideas llegan en capas y a veces necesitan ser externalizadas para tomar forma'
  },

  'Júpiter': {
    'Aries':
      'creces cuando te lanzas a algo nuevo sin esperar garantías. Tu expansión viene de la acción directa — la oportunidad que no se persigue no existe para ti',
    'Tauro':
      'creces a través de la acumulación paciente — de conocimiento, de recursos, de experiencia consolidada. Lo que construyes tarda, pero tiene una solidez que pocas cosas tienen',
    'Géminis':
      'creces aprendiendo y conectando ideas de fuentes distintas. El intercambio, la curiosidad y la variedad son tus motores de expansión reales',
    'Cáncer':
      'creces cuando te sientes en casa emocionalmente — cuando hay vínculos reales y un espacio que sientes tuyo. Lo que nutre también expande',
    'Leo':
      'creces cuando te expresas con confianza y cuando inspiras a otros. Tu expansión tiene una dimensión pública — necesitas audiencia, aunque sea pequeña, para desplegar lo que tienes',
    'Virgo':
      'creces a través del servicio y la mejora continua. Cada vez que ayudas a que algo funcione mejor, también te expandes tú — aunque eso no siempre sea visible desde fuera',
    'Libra':
      'creces a través de las relaciones y los intercambios reales. Las colaboraciones bien construidas y las conexiones genuinas abren para ti más puertas que el trabajo en solitario',
    'Escorpio':
      'creces cuando te atreves a transformarte. Tu expansión pasa por lo profundo — los ciclos que cierras de verdad son los que te dan acceso al siguiente nivel',
    'Sagitario':
      'creces cuando exploras, cuando aprendes algo que amplía tu marco de referencia y cuando tienes una visión que te reta. La expansión es tu estado natural cuando hay horizonte delante',
    'Capricornio':
      'creces a través de la estructura y el logro a largo plazo. Cada paso concreto en una dirección sostenida tiene para ti un efecto acumulativo que va mucho más allá del paso en sí',
    'Acuario':
      'creces cuando innovas y cuando lo que haces tiene un impacto colectivo. Tu expansión se activa especialmente cuando puedes aportar algo que va más allá de ti',
    'Piscis':
      'creces a través de la conexión con algo más grande — la espiritualidad, el arte, la compasión, lo intangible. Cuando te permites ese contacto, tu perspectiva se expande de formas que la lógica sola no puede dar'
  },

  'Saturno': {
    'Aries':
      'estás aprendiendo a construir tu propia iniciativa con paciencia, sin saltarte pasos. La energía de Saturno aquí no frena — pide que lo que inicias tenga una base real antes de avanzar',
    'Tauro':
      'estás construyendo seguridad real, no ilusoria. Cada decisión responsable sobre recursos o estabilidad tiene un peso específico en lo que acabas creando a largo plazo',
    'Géminis':
      'estás aprendiendo a profundizar en lugar de solo explorar. La disciplina en el pensamiento — leer con más atención, comunicar con más cuidado — es donde está tu desarrollo real',
    'Cáncer':
      'estás aprendiendo que los vínculos verdaderos requieren tiempo y cierta vulnerabilidad. Saturno aquí pide que no protejas tanto que no puedas recibir — ni que cuides tanto que te olvides de ti',
    'Leo':
      'estás aprendiendo que el reconocimiento real se construye, no se pide. La disciplina en tu expresión — hacer el trabajo aunque nadie lo vea todavía — es lo que acaba siendo visible',
    'Virgo':
      'construyes a través del trabajo constante y preciso. Saturno en Virgo refuerza lo que ya sabes hacer bien — el detalle, el servicio, la mejora continua — pero pide también que te perdones cuando no llega a perfecto',
    'Libra':
      'estás aprendiendo que las relaciones maduras requieren honestidad, no solo armonía. La paz que se mantiene callando algo importante tiene un coste que Saturno tarde o temprano presenta',
    'Escorpio':
      'estás aprendiendo a transformarte a través de lo que más te cuesta soltar. Saturno aquí no es castigo — es una presión que empuja hacia la integración real de lo que ya viviste',
    'Sagitario':
      'estás aprendiendo que la libertad real requiere también compromiso. Las grandes visiones necesitan también estructura para aterrizar — sin eso, se quedan en intención',
    'Capricornio':
      'eres muy efectivo construyendo con paciencia y estructura. Saturno en su propio signo te da una capacidad de trabajo sostenido que pocas personas tienen — el riesgo es la rigidez, no la falta de esfuerzo',
    'Acuario':
      'estás aprendiendo a innovar con responsabilidad. Las ideas de cambio que no tienen estructura debajo no duran — Saturno aquí te pide que combines la visión con la sostenibilidad',
    'Piscis':
      'estás aprendiendo a poner límites sin perder la sensibilidad. Saturno en Piscis pide que definas dónde terminas tú — no para cerrarte, sino para que lo que das tenga una fuente que no se agote'
  },

  'Luna': {
    'Aries':
      'reacciones rápido emocionalmente y con intensidad — pero esa intensidad pasa también rápido. Tu primer impulso emocional es real, aunque no siempre es el que mejor representa lo que de verdad sientes',
    'Tauro':
      'necesitas estabilidad emocional para funcionar bien. Los cambios bruscos o la incertidumbre te afectan más de lo que muestras — y recuperarte requiere tiempo y entorno predecible',
    'Géminis':
      'procesas lo que sientes pensando o hablando — las emociones que no se verbalizan se quedan dando vueltas. Necesitas entender lo que te pasa para poder integrarlo',
    'Cáncer':
      'eres muy sensible al ambiente emocional de lo que te rodea, especialmente de las personas cercanas. Captas lo que otros sienten antes de que lo expresen — lo cual es un regalo y también un peso',
    'Leo':
      'necesitas sentirte visto y apreciado para estar bien emocionalmente. No es capricho — es que tu bienestar genuino depende de que haya espacio para expresarte y para ser reconocido en lo que aportas',
    'Virgo':
      'cuando algo te preocupa, tu mente analiza en detalle. Eso puede ayudarte a entender lo que sientes, pero también puede convertir una emoción en un problema técnico que intenta resolverse con lógica',
    'Libra':
      'buscas equilibrio emocional y evitas el conflicto de forma instintiva. Mantener la armonía es importante para ti — aunque a veces ese instinto lleva a callar cosas que necesitarían decirse',
    'Escorpio':
      'sientes las cosas de forma muy intensa y te cuesta soltar lo que ha impactado. Tu mundo emocional tiene mucha profundidad — y los procesos que vives internamente suelen ser más complejos de lo que muestras',
    'Sagitario':
      'necesitas sentido y libertad para sentirte bien emocionalmente. Cuando algo no tiene propósito claro o cuando te sientes atrapado, el malestar llega antes de lo que lo harías notar',
    'Capricornio':
      'contienes las emociones y las procesas de forma interna, con distancia. Mostrar lo que sientes requiere esfuerzo — y a veces esa contención acumula más de lo que reconocerías',
    'Acuario':
      'procesas las emociones desde la mente — primero entiendes, luego sientes. Eso te da perspectiva, pero puede hacer que los demás perciban distancia donde tú simplemente estás procesando',
    'Piscis':
      'absorbes el estado emocional de lo que te rodea con mucha facilidad. Tu sensibilidad es muy fina — y eso significa que distinguir qué es tuyo y qué has captado del entorno no siempre es sencillo'
  }
};

const ACCION_TRANSLATION = {
  'afirmacion':
    'la necesidad de afirmarte o tomar decisiones propias, especialmente cuando alguien no reconozca tu esfuerzo o cuando tengas que decidir algo importante sin apoyo externo',
  'nutricion':
    'la necesidad de cuidarte o de cuidar a alguien cercano, especialmente cuando alguien de tu entorno necesite apoyo o cuando notes que llevas días sin darte un espacio real para ti',
  'intercambio':
    'la necesidad de hablar o compartir lo que piensas, especialmente cuando tengas que explicar algo complejo, aclarar un malentendido o negociar algo con otra persona',
  'vinculo':
    'la necesidad de conectar o de equilibrar algo en una relación, especialmente cuando alguien importante para ti esté más distante de lo habitual o cuando haya algo pendiente entre vosotros',
  'confrontacion':
    'la necesidad de reaccionar rápido o defender tu postura, especialmente cuando alguien cuestione tu punto de vista o no esté de acuerdo contigo',
  'expansion':
    'la necesidad de ampliar tu perspectiva o explorar algo nuevo, especialmente cuando tengas que tomar una decisión que afecta al futuro o cuando una oportunidad lleve tiempo esperando tu respuesta',
  'consolidacion':
    'la necesidad de mantener el foco o cerrar algo pendiente, especialmente cuando tienes varios frentes abiertos y el avance en ninguno de ellos se nota todavía'
};

const DAY_PLANET_ORIENTATION = {
  'Sol':
    'Hoy tienes más claridad que de costumbre — es buen momento para tomar una decisión que llevas tiempo aplazando o para hacer algo que requiere seguridad.',
  'Luna':
    'Antes de actuar, presta atención a lo que sientes — hoy tu intuición te da información que la lógica sola no daría.',
  'Marte':
    'Hoy la energía para actuar está más alta — úsalo para cerrar algo pendiente que requería un empujón.',
  'Mercurio':
    'Hoy es buen día para hablar lo que necesitas aclarar, tomar decisiones o poner por escrito lo que tienes en mente.',
  'Júpiter':
    'Antes de reaccionar o decidir, mira si ese tema va a tener peso real en unos días — hoy tienes más perspectiva que de costumbre para ver las consecuencias antes de actuar.',
  'Venus':
    'Hoy los vínculos y el disfrute tienen más peso — no todo tiene que ser productivo para que valga la pena.',
  'Saturno':
    'Hoy el foco y la constancia dan resultado — elige una cosa importante y hazla bien, sin dispersarte.'
};

// ─── SEMANA_NATAL_GUIDE v1.0 (D.4.2-B) ───────────────────────────────────
// Orientación semanal base por planeta. Fase siguiente: matiz por signo.
const SEMANA_NATAL_GUIDE = {
    'Sol':      (sign) => `Esta semana funciona mejor tomar la iniciativa que esperar a que las condiciones sean perfectas.`,
    'Luna':     (sign) => `Esta semana te ayuda más escuchar lo que sientes que actuar desde lo que crees que deberías hacer.`,
    'Marte':    (sign) => `Esta semana funciona mejor saber a dónde vas antes de moverte que ajustar el rumbo sobre la marcha.`,
    'Mercurio': (sign) => `Esta semana te ayuda ordenar el pensamiento antes de comunicarlo — lo que no está claro por dentro difícilmente llega bien por fuera.`,
    'Júpiter':  (sign) => `Esta semana funciona mejor ir a fondo en una sola cosa que tocar muchas sin completar ninguna.`,
    'Venus':    (sign) => `Esta semana el vínculo responde mejor al cuidado que al resultado. Lo que das sin pedir tiene más retorno del que esperas.`,
    'Saturno':  (sign) => `Esta semana lo que avanza de forma constante llega más lejos que lo que se fuerza. El ritmo propio es el que rinde.`
};
// SEMANA_HOUSE_GUIDE (D.4.2-E)
// 3 tonos × intro+clave por cada casa.
// intro = experiencia del tramo / clave = orientación práctica
// ─────────────────────────────────────────────────────────────────────────────
const SEMANA_HOUSE_GUIDE = {
    1: {
        favorable: { intro: 'Tu criterio propio está más claro esta semana. Sabes mejor lo que quieres y por qué.', clave: 'Decide con criterio propio. El momento está a favor de avanzar sin esperar validación.' },
        neutral:   { intro: 'Tu forma de posicionarte está cambiando esta semana — aunque todavía no veas hacia dónde.', clave: 'No te precipites. La respuesta aparece cuando dejas de forzarla.' },
        sensitive: { intro: 'Puede que esta semana te cueste reconocerte en las decisiones que estás tomando.', clave: 'No es momento para movimientos grandes. Cuida el ritmo y observa antes de actuar.' }
    },
    2: {
        favorable: { intro: 'Esta semana hay más margen del que sientes. Lo que tienes alcanza si lo usas con cabeza.', clave: 'Organiza antes de gastar energía. Lo que está ordenado rinde más.' },
        neutral:   { intro: 'Puede que tu forma de gestionar el tiempo o el dinero esté pidiendo un ajuste que llevas posponiendo.', clave: 'Un cambio pequeño ahora evita un problema mayor después.' },
        sensitive: { intro: 'Puede que esta semana el esfuerzo no rinda como esperabas, o que lo que tienes no se sienta suficiente.', clave: 'Protege lo que no puedes perder ahora mismo en lo económico.' }
    },
    3: {
        favorable: { intro: 'Lo que dices esta semana tiene más peso del que crees. Las conversaciones importan.', clave: 'Aprovecha para aclarar, escribir o decir lo que llevas tiempo postergando.' },
        neutral:   { intro: 'Una idea o conversación lleva días dando vueltas sin encontrar las palabras exactas.', clave: 'Escríbelo sin filtros primero. Cuando lo veas claro, entonces sí compártelo.' },
        sensitive: { intro: 'Puede que esta semana lo que dices no llegue como quieres, o que lo escuches todo de forma más reactiva.', clave: 'Habla menos y escucha más. Lo que no se dice ahora tiene más valor que lo que sí.' }
    },
    4: {
        favorable: { intro: 'El entorno próximo esta semana da más de lo que esperas. Lo que está cerca es suficiente.', clave: 'Atiende lo cercano con más presencia. No hace falta buscar más lejos.' },
        neutral:   { intro: 'Tu hogar o alguien cercano lleva tiempo esperando más presencia. Esta semana es buen momento.', clave: 'No necesitas resolverlo todo. Con atender lo que espera es suficiente por ahora.' },
        sensitive: { intro: 'Las personas cercanas o el entorno de casa pueden sentirse más exigentes de lo normal esta semana.', clave: 'Baja el ritmo exterior. Lo que necesitas está más adentro que afuera.' }
    },
    5: {
        favorable: { intro: 'Esta semana hay un impulso creativo o expresivo en ti que quiere salir — sin tener que justificarlo.', clave: 'No lo postergues. Lo que te da vida también te hace rendir mejor en todo lo demás.' },
        neutral:   { intro: 'Puede que un proyecto creativo esté esperando que le hagas un hueco real.', clave: 'No esperes el momento perfecto. Empieza aunque sea en pequeño.' },
        sensitive: { intro: 'Puede que esta semana lo que normalmente te da energía no esté disponible de la misma forma.', clave: 'No lo fuerces. A veces descansar también es crear.' }
    },
    6: {
        favorable: { intro: 'Esta semana el trabajo concreto rinde. Lo que hagas con método y constancia produce resultados visibles.', clave: 'Aprovecha para avanzar en pendientes o poner orden donde hace falta.' },
        neutral:   { intro: 'La rutina avanza, pero cómo organizas tu tiempo o energía en el trabajo pide un ajuste real.', clave: 'Un cambio de hábito pequeño ahora produce resultados en semanas.' },
        sensitive: { intro: 'Esta semana puede que el cuerpo o el trabajo pesen más de lo que deberían. Es una señal, no un obstáculo.', clave: 'No añadas más. Haz bien lo cotidiano concreto y suelta el resto.' }
    },
    7: {
        favorable: { intro: 'Esta semana una relación importante puede avanzar si le das espacio. Lo que llevas postergando en ese vínculo tiene margen de moverse.', clave: 'Acuerda, colabora o atiende ese vínculo que lleva tiempo esperando.' },
        neutral:   { intro: 'Hay un vínculo cercano que lleva tiempo esperando más presencia de tu parte.', clave: 'Una conversación honesta ahora vale más que esperar el momento perfecto.' },
        sensitive: { intro: 'Esta semana las relaciones pueden pedir más de lo que tienes disponible para dar.', clave: 'Pon límites sin cerrar puertas. Cuidarte no es descuidar a los demás.' }
    },
    8: {
        favorable: { intro: 'Esta semana hay una claridad inusual sobre qué ya no encaja. Es buen momento para soltar sin dramatizar.', clave: 'Haz espacio — en lo material, en lo emocional o en cómo usas tu energía.' },
        neutral:   { intro: 'Una preocupación sigue ocupando espacio — esta semana puedes verla con más claridad.', clave: 'No tienes que decidir todo ahora. Pero sí vale la pena mirar.' },
        sensitive: { intro: 'Puede que esta semana se produzca un cambio en tus compromisos que no pediste y que cuesta gestionar.', clave: 'No tienes que entenderlo todo ahora. Soltar a tiempo es el movimiento más inteligente.' }
    },
    9: {
        favorable: { intro: 'Esta semana la perspectiva se amplía. Aparecen conexiones o ideas que antes no eran visibles.', clave: 'Aprende algo, explora más allá de lo habitual o deja que la mente vuele un poco.' },
        neutral:   { intro: 'Hay una situación o pregunta que quieres entender, pero estás demasiado dentro para verla con claridad.', clave: 'Esta semana busca perspectiva, no respuestas. La distancia es parte del proceso.' },
        sensitive: { intro: 'Puede que esta semana el horizonte se sienta difuso o que haya demasiadas direcciones posibles.', clave: 'No es momento de elegir. Es momento de observar sin comprometerte.' }
    },
    10: {
        favorable: { intro: 'Esta semana el impulso está disponible en lo profesional. Lo que mueves ahora tiene más inercia que lo habitual.', clave: 'Toma la iniciativa que llevas aplazando. El momento está a favor.' },
        neutral:   { intro: 'Puede que haya algo en tu área de responsabilidad esperando una decisión que todavía no está tomada.', clave: 'No dejes que la inercia decida por ti. Un paso pequeño ahora vale más que esperar.' },
        sensitive: { intro: 'Puede que esta semana lo externo exija más de lo que sientes que puedes dar.', clave: 'Define qué es tuyo y qué no lo es. El control que tienes es suficiente.' }
    },
    11: {
        favorable: { intro: 'Esta semana el entorno social da energía. Abrirse a otros produce más de lo que esperas.', clave: 'Acude a quien de verdad te aporta. No es semana para estar solo.' },
        neutral:   { intro: 'Uno de tus proyectos colectivos o alguien en tu red no está funcionando como esperabas.', clave: 'Esta semana es momento de verlo sin filtros. Confirma antes de asumir alineación.' },
        sensitive: { intro: 'Puede que esta semana el entorno social se sienta lejano o que los proyectos compartidos pierdan tracción.', clave: 'No lo fuerces. A veces el grupo necesita pausa antes de volver a moverse.' }
    },
    12: {
        favorable: { intro: 'Esta semana hay más espacio interior disponible. Darte permiso de usarlo no es perder el tiempo.', clave: 'Procesa, descansa o deja que algo madure sin forzarlo hacia afuera.' },
        neutral:   { intro: 'Un proceso interno está tomando forma que todavía no tiene nombre. No lo apresures.', clave: 'Lo que se cocina lento suele ser lo más nutritivo. Dale tiempo.' },
        sensitive: { intro: 'Puede que esta semana el mundo exterior pese más de lo habitual. No es falta de voluntad — es que tu energía interior necesita recuperarse.', clave: 'No es señal de debilidad. Es señal de que necesitas recuperarte antes de volver a dar.' }
    }
};

const SEMANA_PROFECTION_CONTEXT = {
    1:  'Este año el foco está en ti — en cómo te presentas y qué eliges para tu propia vida.',
    2:  'Este año el foco está en tus recursos — lo que ganas, lo que gastas y cómo valoras tu tiempo.',
    3:  'Este año el foco está en cómo te comunicas y conectas con el mundo cercano.',
    4:  'Este año el foco está en las raíces — el hogar, la familia o lo que necesitas para sentirte seguro.',
    5:  'Este año el foco está en expresarte — crear, disfrutar y dejar que lo tuyo salga al exterior.',
    6:  'Este año el foco está en el trabajo concreto y en cómo cuidas tu cuerpo y tu rutina diaria.',
    7:  'Este año el foco está en las relaciones importantes — los acuerdos y los vínculos que te definen.',
    8:  'Este año el foco está en la transformación — soltar lo que ya no sirve y reorganizar recursos.',
    9:  'Este año el foco está en ampliar perspectiva — aprender, viajar o encontrar nuevos marcos de sentido.',
    10: 'Este año el foco está en lo profesional — tu posición, tu dirección y cómo te defines hacia fuera.',
    11: 'Este año el foco está en tu red — los proyectos compartidos y las personas con quienes construyes.',
    12: 'Este año el foco está en la vida interior — procesar, sanar o soltar lo que lleva tiempo cargando.'
};
// ─── SEMANA_INGRESS_PHRASES (D.4.2-B) ────────────────────────────────────
const SEMANA_INGRESS_PHRASES = [
    'En este tramo la Luna cambia de signo — ajusta el ritmo antes de seguir.',
    'Aquí la Luna cambia de signo: lo que funcionaba en el tramo anterior puede pedir otro enfoque.',
    'Este cambio de signo lunar redirige la atención — revisa si la dirección sigue siendo la correcta.'
];


// ─────────────────────────────────────────────────────────────────────────────
// D.4.2-G — SISTEMA TONO KAIROS SEMANA
// ─────────────────────────────────────────────────────────────────────────────

const LORD_GROUP = {
    'Sol':      'Luminar',
    'Luna':     'Luminar',
    'Marte':    'Activo',
    'Júpiter':  'Activo',
    'Venus':    'Relacional',
    'Mercurio': 'Procesador',
    'Saturno':  'Procesador'
};

const SEMANA_IMPACTO = {
    1: {
        favorable: ['Esta semana va de cómo te posicionas tú cuando el entorno presiona.', 'Toma la iniciativa esta semana.', 'Decide tu postura.'],
        neutral:   ['Esta semana decide tu postura antes de que el entorno te la marque.', 'Elige tu dirección propia esta semana, aunque no sea la más cómoda.', 'Esta semana define cómo quieres responder desde tu criterio propio.'],
        sensitive: ['La semana pide que te sostengas en tu posición cuando llegue la presión externa.', 'Tu ritmo propio primero — sin ajustarte al paso de nadie.', 'Esta semana verifica qué necesitas tú antes de responder a lo que viene de fuera.']
    },
    2: {
        favorable: ['Gestiona mejor lo que ya tienes en lo económico.', 'Esta semana pon a trabajar lo que ya tienes en lo económico.', 'Aprovecha bien lo disponible en lo económico esta semana.'],
        neutral:   ['Revisa tu gestión económica.', 'Esta semana ordena tus compromisos económicos antes de ampliar nada nuevo.', 'Esta semana usa lo que ya tienes en lo económico antes de abrir algo nuevo.'],
        sensitive: ['Esta semana cubre primero lo económico básico — antes de cualquier gasto extra.', 'Protege lo que tienes en lo económico — no es momento de arriesgar.', 'Esta semana sostén lo que ya tienes en lo económico sin abrir nuevos frentes.']
    },
    3: {
        favorable: ['Esta semana va de poner en palabras lo que llevas tiempo sin decir en tu entorno cercano.', 'Di lo que ya tienes claro en tu entorno cercano — no lo guardes más.', 'Cierra lo pendiente en tu entorno próximo — comunícalo y acláralo.'],
        neutral:   ['Esta semana aclara lo que ya está maduro y comunícalo en tu entorno cercano.', 'Ordena lo que ya tienes claro y exprésalo.', 'Esta semana aclara lo que lleva tiempo dando vueltas en tus conversaciones cercanas.'],
        sensitive: ['Escucha antes de hablar en tu entorno cercano.', 'Lo que quieres comunicar todavía no está del todo claro — dale tiempo esta semana.', 'Esta semana aclara primero para ti lo que quieres decir antes de comunicarlo.']
    },
    4: {
        favorable: ['Tu entorno familiar tiene lo que necesitas esta semana — ponle presencia real.', 'Mira hacia tu entorno familiar.', 'Esta semana dale presencia real a tu hogar y a tu familia.'],
        neutral:   ['Atiende tu base emocional esta semana — lo que está pasando en casa necesita tu presencia.', 'El foco va al hogar y a los vínculos familiares.', 'Esta semana lo familiar y lo doméstico piden tu presencia.'],
        sensitive: ['Vuelve a tu base esta semana — al hogar y a las personas de confianza.', 'Esta semana vuelve a tu hogar y a las personas que te sostienen — sin forzar nada más.', 'Esta semana lo de casa y lo familiar van primero — no lo postergues.']
    },
    5: {
        favorable: ['Esta semana va de hacer lo que quieres crear o expresar.', 'Haz lo que quieres disfrutar esta semana.', 'Esta semana dale espacio al impulso creativo.'],
        neutral:   ['Esta semana pon el foco en lo que te da disfrute o energía creativa.', 'Recupera el espacio para lo que quieres crear o disfrutar esta semana.', 'Esta semana abre espacio para lo creativo.'],
        sensitive: ['No pierdas de vista lo que de verdad quieres crear o disfrutar esta semana.', 'Lo que quieres expresar todavía tiene espacio esta semana.', 'Esta semana protege el espacio para tu creatividad y disfrute.']
    },
    6: {
        favorable: ['Esta semana va de hacer bien lo que tienes delante en el trabajo diario.', 'Trabaja con método esta semana y cuida tu rutina diaria.', 'Esta semana el foco es lo concreto y útil en el trabajo.'],
        neutral:   ['Haz bien lo que ya tienes en el trabajo diario.', 'Esta semana mantén lo que ya funciona en tu rutina de trabajo.', 'Esta semana sostén tu rutina de trabajo con cuidado.'],
        sensitive: ['Esta semana escucha tu cuerpo y respeta tu ritmo en lo cotidiano.', 'Cuida primero lo básico en la rutina y en la salud esta semana.', 'El ritmo diario y la salud van primero esta semana.']
    },
    7: {
        favorable: ['Esta semana va de los acuerdos y vínculos importantes.', 'Los vínculos importantes piden atención y presencia esta semana.', 'Esta semana mueve lo que está pendiente en tus relaciones cercanas.'],
        neutral:   ['Esta semana atiende lo que tus vínculos cercanos están pidiendo.', 'Considera lo que los demás necesitan antes de moverte esta semana.', 'Esta semana considera lo relacional antes de tomar decisiones importantes.'],
        sensitive: ['Esta semana atiende lo que llevas pendiente en el vínculo.', 'Los vínculos que llevan tiempo esperando atención van primero esta semana.', 'Elige bien dónde pones tu energía relacional esta semana.']
    },
    8: {
        favorable: ['Esta semana va de soltar lo que ya no tiene retorno.', 'Haz espacio esta semana soltando lo que ya cumplió su ciclo.', 'Esta semana libera lo que ya no funciona.'],
        neutral:   ['Esta semana revisa qué consume recursos sin darte retorno.', 'Identifica qué ya no tiene retorno en tus compromisos económicos esta semana.', 'Esta semana revisa qué puedes soltar en tus compromisos.'],
        sensitive: ['Esta semana lo que ya no encaja en tus compromisos pide ser revisado.', 'Suelta lo que ya no tiene lugar esta semana.', 'Dale espacio a lo que ya está cambiando esta semana.']
    },
    9: {
        favorable: ['Esta semana va de ver más grande antes de actuar.', 'Esta semana va de ampliar perspectiva antes de seguir ejecutando.', 'Esta semana va de aprender y ver más allá de lo inmediato.'],
        neutral:   ['Esta semana gana perspectiva antes de actuar.', 'Esta semana entiende mejor el marco antes de moverte.', 'Amplía el campo de visión esta semana.'],
        sensitive: ['Esta semana toma distancia antes de decidir.', 'Esta semana gana perspectiva antes de dar el siguiente paso.', 'Observa desde más lejos esta semana antes de actuar.']
    },
    10: {
        favorable: ['Esta semana va de mantener lo que construyes en lo profesional.', 'Esta semana avanza un paso en lo profesional.', 'Toma posición esta semana en lo que estás construyendo.'],
        neutral:   ['Esta semana da un paso concreto en lo que construyes.', 'Esta semana avanza en lo profesional aunque el camino no esté del todo claro.', 'Ejecuta lo que está pendiente en lo profesional esta semana.'],
        sensitive: ['Esta semana cuida tu postura en lo profesional.', 'Esta semana sostén lo que ya tienes en lo profesional.', 'Esta semana cuida lo que construyes hacia fuera.']
    },
    11: {
        favorable: ['Esta semana va de elegir bien con quién te mueves en lo colectivo.', 'Esta semana va de revisar hacia dónde van tu red y tus proyectos compartidos.', 'Alinéate esta semana con quién avanza realmente en tu dirección.'],
        neutral:   ['Esta semana revisa con quién avanzas realmente.', 'Esta semana confirma quién está contigo en los proyectos.', 'Esta semana considera lo que piden tus proyectos colectivos.'],
        sensitive: ['Esta semana pon el foco en tu red y en los proyectos compartidos.', 'Esta semana revisa con quién avanzas y con quién no.', 'Esta semana no disperses energía en colectivos que no te aportan.']
    },
    12: {
        favorable: ['Esta semana ve hacia adentro y procesa lo que llevas acumulando.', 'Esta semana el movimiento real es hacia adentro.', 'Esta semana deja que las cosas maduren sin forzarlas.'],
        neutral:   ['Esta semana dale tiempo al proceso interno.', 'Esta semana protege tu espacio interior.', 'Esta semana deja que tome forma lo que está madurando.'],
        sensitive: ['Esta semana el espacio interior y el silencio tienen prioridad.', 'Recupérate esta semana antes de volver a dar.', 'Dale tiempo esta semana a lo que está madurando por dentro.']
    }
};

const SEMANA_ENERGIA = {
    'Sol':      { favorable: ['Hay claridad para decidir y tomar posición.', 'La energía está a favor de decidir con claridad y actuar.', 'Hay claridad disponible — úsala para tomar posición.'], neutral: ['El impulso de liderazgo está disponible, pero necesita dirección antes de moverse.', 'Hay energía para decidir, pero conviene orientarla antes de actuar.', 'La claridad llega si paras a ordenar antes de moverte.'], sensitive: ['La claridad llega cuando te permites parar antes de actuar.', 'No es semana de forzar claridad. Llega cuando baja el ritmo.', 'El impulso de decidir está ahí, pero conviene no apresurarlo.'] },
    'Luna':     { favorable: ['Lo emocional está activo y disponible — escuchar antes de moverse.', 'Lo que sientes esta semana es información útil — escúchalo antes de actuar.', 'Lo emocional apoya esta semana — integra antes de decidir.'], neutral: ['El estado emocional fluctúa. No es el mejor momento para decisiones grandes.', 'Lo emocional está en movimiento. Observa antes de comprometerte.', 'El estado interior varía esta semana. No es el momento de fijar nada.'], sensitive: ['Lo que sientes esta semana tiene información. Escúchalo antes de ignorarlo.', 'Lo emocional puede estar sensible. No lo fuerces ni lo ignores.', 'Hay más movimiento interior de lo habitual. Dale espacio antes de actuar.'] },
    'Marte':    { favorable: ['Hay impulso para avanzar — pide dirección antes de velocidad.', 'El impulso está disponible — dirección primero, velocidad después.', 'Hay energía para moverse — elige hacia dónde antes de con qué fuerza.'], neutral: ['El impulso está, pero disperso. Una sola dirección esta semana rinde más que varias.', 'Hay energía, pero sin foco claro. Elige una dirección antes de moverse.', 'El impulso existe, pero se dispersa fácil. Una cosa a la vez esta semana.'], sensitive: ['La energía fluctúa — úsala cuando esté disponible, descansa cuando no.', 'No es semana de forzar el ritmo. La energía va y viene — respeta eso.', 'El impulso no está constante esta semana — no lo exijas cuando no está.'] },
    'Mercurio': { favorable: ['La mente está activa — ordenar antes de comunicar.', 'Hay claridad mental disponible — organiza antes de hablar.', 'La mente funciona bien esta semana — úsala para ordenar antes de ordenar antes de actuar.'], neutral: ['Hay mucho procesamiento mental esta semana. Escribe para aclarar antes de hablar.', 'La mente está activa pero dispersa. Poner por escrito ayuda a aclarar.', 'Hay mucho dando vueltas mentalmente. Ordena antes de comunicar.'], sensitive: ['La mente puede saturarse fácilmente — prioriza lo que de verdad necesita pensarse.', 'El procesamiento mental puede saturarse. No todo necesita resolverse ahora.', 'La mente puede sobrecargarse esta semana. Menos inputs, más claridad.'] },
    'Júpiter':  { favorable: ['Hay expansión disponible — pero la dispersión es el riesgo.', 'El potencial está disponible — elige una dirección y ve a fondo.', 'Hay más posibilidades de lo habitual — elige bien dónde poner la energía.'], neutral: ['Hay oportunidades visibles, pero no todas merecen energía. Elige una.', 'El potencial está ahí, pero dispersarse lo neutraliza. Una dirección.', 'Hay expansión disponible, pero conviene no sobreextenderse esta semana.'], sensitive: ['El exceso puede costar más de lo que da — menos esta semana es más.', 'No es semana de ampliar más. Es de consolidar lo que ya hay.', 'Más no es mejor esta semana. Lo concreto y lo esencial primero.'] },
    'Venus':    { favorable: ['Lo relacional está activo — el vínculo antes que los resultados.', 'Hay energía en los vínculos esta semana — cuídalos antes de pedir.', 'Lo relacional fluye esta semana — invierte en el vínculo antes que en el resultado.'], neutral: ['Las relaciones piden atención esta semana. No lo postpongas.', 'Lo relacional necesita presencia esta semana. Dásela.', 'Hay algo en los vínculos que pide ser atendido esta semana.'], sensitive: ['El vínculo está sensible — cuida antes de pedir, escucha antes de hablar.', 'Lo relacional está más delicado de lo normal esta semana. Cuida el tono.', 'Los vínculos pueden estar sensibles esta semana. Menos exigencia, más presencia.'] },
    'Saturno':  { favorable: ['Hay solidez disponible — constancia antes que impulso.', 'La constancia esta semana da más que el impulso. Ritmo sostenido.', 'Hay estructura disponible — úsala para avanzar de forma sostenida.'], neutral: ['Lo que se mantiene con ritmo esta semana avanza. Lo que se fuerza, no.', 'Esta semana funciona mejor la constancia que los grandes movimientos.', 'El ritmo constante rinde más que el impulso esta semana. Mantén el paso.'], sensitive: ['La estructura te sostiene esta semana — no la abandones aunque cueste.', 'Mantener el ritmo esta semana es la acción correcta, aunque parezca poco.', 'No es semana de romper la estructura. Es de apoyarte en ella.'] }
};

const SEMANA_DIRECCION = {
    1:  { Luminar: ['Decide desde lo que sientes, no desde lo que deberías.', 'Lo que sientes al respecto tiene peso. No lo ignores al decidir.', 'Esta semana confiar en tu propio criterio rinde más que seguir lo que se espera.'], Activo: ['Si no marcas dirección propia, terminarás siguiendo la de otro.', 'Elige tu dirección antes de que el entorno te la marque.', 'La dirección propia esta semana da más que dejar que el entorno decida por ti.'], Relacional: ['Cuida cómo te presentas. Lo que proyectas esta semana importa.', 'La impresión que generas esta semana tiene consecuencias. Vale cuidarla.', 'Lo que muestras de ti esta semana abre o cierra puertas.'], Procesador: ['Ordena primero qué quieres. Luego actúa.', 'Sin claridad sobre lo que quieres, la acción no lleva lejos esta semana.', 'Define qué es lo que quieres antes de moverte. La claridad ahorra energía.'] },
    2:  { Luminar: ['Decide qué vale la pena y deja de invertir en lo que no.', 'Lo que eliges priorizar esta semana define qué crece y qué no.', 'Tu energía y tu tiempo son el recurso. Decide conscientemente dónde van.'], Activo: ['Mueve recursos con intención. Lo disperso no acumula.', 'Un movimiento concreto en lo que tienes rinde más que muchas ideas.', 'Aplica lo que tienes en una sola dirección. La concentración produce más.'], Relacional: ['El intercambio equilibrado esta semana da más que el unilateral.', 'Lo que recibes y lo que das esta semana conviene que estén en equilibrio.', 'Cuida los intercambios. Lo que das sin reciprocidad drena esta semana.'], Procesador: ['Un ajuste en cómo gestionas el tiempo o el dinero rinde más que grandes cambios.', 'Revisa dónde va el tiempo. Un ajuste pequeño produce más de lo que parece.', 'No hace falta un cambio grande. Una mejora concreta en la gestión es suficiente.'] },
    3:  { Luminar: ['Di lo que sabes. Esta semana la claridad en las palabras tiene peso.', 'Lo que tienes claro vale decirlo. Esta semana las palabras precisas hacen diferencia.', 'Habla desde lo que sabes, no desde lo que crees que esperan oír.'], Activo: ['Las conversaciones que evitas esta semana cuestan más después.', 'Lo pendiente de decir no desaparece. Esta semana moverlo cuesta menos que callarlo.', 'Hay apertura esta semana para decir lo que llevas guardando. No hace falta que sea perfecto.'], Relacional: ['Escucha antes de hablar. Lo que el otro tiene que decir también importa.', 'Hay información útil en lo que el otro quiere decir. Escúchalo primero.', 'Dale espacio al otro para hablar antes de responder. Puede sorprenderte.'], Procesador: ['Escríbelo primero. Cuando lo veas claro, entonces sí compártelo.', 'Lo que no está claro por dentro difícilmente llega bien por fuera. Ordena antes.', 'Antes de comunicar, pon por escrito lo que quieres decir. La claridad llega al escribir.'] },
    4:  { Luminar: ['Atiende lo cercano desde lo que de verdad sientes al respecto.', 'Lo que sientes sobre lo de casa esta semana tiene información. Escúchalo.', 'No postergues lo próximo. Lo que sientes al respecto también merece atención.'], Activo: ['El impulso está en lo próximo, no en lo lejano. No lo ignores.', 'Lo que puede avanzar esta semana está cerca, no lejos. Mira ahí primero.', 'Mueve algo en el entorno próximo. Es donde el impulso tiene retorno real esta semana.'], Relacional: ['Cuida las personas cercanas. Esta semana eso es lo que más retorno da.', 'El vínculo con los de casa esta semana necesita presencia, no gestos.', 'Las personas próximas responden a la atención real. Dásela esta semana.'], Procesador: ['Pon orden en lo inmediato. El entorno que sostienes también te sostiene.', 'Un ajuste en el entorno próximo libera energía. No hace falta que sea grande.', 'Ordena algo cercano. Lo que te rodea afecta cómo piensas y cómo rindes.'] },
    5:  { Luminar: ['Decide qué quieres expresar. Luego hazlo sin pedir permiso.', 'Lo que quieres crear o expresar no necesita justificación. Solo hacerlo.', 'La energía para hacer lo tuyo está disponible. No la supedites a la aprobación de nadie.'], Activo: ['Si no eliges dirección, terminarás respondiendo a lo que venga. Primero decide.', 'Elige hacia dónde va tu energía creativa. Sin dirección se dispersa.', 'Decide qué quieres mover esta semana. La iniciativa es tuya — tómala.'], Relacional: ['Comparte lo que creas. Esta semana la expresión conecta más que el silencio.', 'Lo que haces y compartes esta semana genera más vínculo del que esperas.', 'Mostrar lo tuyo esta semana abre. No lo guardes solo para ti.'], Procesador: ['Haz espacio para lo que te da vida. No esperes a tener tiempo — créalo.', 'Lo que te da energía necesita un hueco real en la semana. No lo dejes para después.', 'Planifica aunque sea un momento para lo que quieres. Sin agenda no ocurre.'] },
    6:  { Luminar: ['El trabajo concreto esta semana habla. Hazlo bien y con conciencia.', 'Lo que produces esta semana tiene más peso de lo que parece. Ponle atención.', 'Hacer bien lo cotidiano esta semana es la acción que más retorno da.'], Activo: ['Menos ideas, más ejecución. Lo que hagas con constancia produce resultado.', 'Esta semana el hacer concreto vale más que el planear. Pon el cuerpo.', 'Un paso real en lo concreto avanza más que diez ideas sin ejecutar.'], Relacional: ['El cuidado del cuerpo o el servicio a otros esta semana da retorno real.', 'Lo que cuidas o a quien cuidas esta semana tiene peso. No lo descuides.', 'El servicio genuino o el autocuidado esta semana producen más de lo visible.'], Procesador: ['Un cambio de rutina pequeño pero real rinde más que cualquier plan grande.', 'Ajusta algo concreto en la rutina. Lo pequeño sostenido produce más que lo grande esporádico.', 'Una mejora real en la rutina diaria esta semana compensa más que cualquier cambio grande.'] },
    7:  { Luminar: ['Atiende la relación desde lo que sientes, no desde lo que deberías.', 'Lo que sientes sobre el vínculo tiene información. No lo ignores.', 'Responde al otro desde lo que de verdad sientes, no desde el guión esperado.'], Activo: ['Lo pendiente en un vínculo pide movimiento. Esta semana no lo postergues.', 'Hay algo en una relación importante que lleva demasiado tiempo en espera.', 'Mueve lo que lleva pendiente en un vínculo importante. Esta semana hay apertura.'], Relacional: ['El vínculo tiene espacio para avanzar si le das presencia real.', 'La presencia real avanza más en el vínculo esta semana que cualquier gesto.', 'Dale tiempo de calidad a la relación que importa. Eso es lo que produce esta semana.'], Procesador: ['Aclara lo que no está dicho. Los acuerdos implícitos cuestan más que los explícitos.', 'Nombra lo que está tácito. Un acuerdo claro esta semana evita costes futuros.', 'Pon palabras a lo que se da por supuesto. La claridad en el vínculo libera energía.'] },
    8:  { Luminar: ['Siente qué ya no encaja. No tienes que entenderlo todo — solo reconocerlo.', 'Lo que ya no sirve se siente antes de que se vea. Confía en eso esta semana.', 'Presta atención a lo que ya no se siente bien. Esa señal tiene valor.'], Activo: ['Suelta sin dramatizar. Lo que liberas esta semana da más energía de la que consume.', 'Mover lo que está estancado esta semana libera más energía de lo que cuesta.', 'El impulso está en soltar, no en acumular. Actúa desde ahí.'], Relacional: ['Define qué es tuyo y qué pertenece al vínculo.', 'Clarifica qué es tuyo y qué es del otro. La confusión de límites drena.', 'El vínculo se aclara cuando cada uno sabe qué es suyo. Esta semana es buen momento.'], Procesador: ['Revisa dónde va tu energía. Lo que no produce retorno, libéralo.', 'Observa dónde va tu energía esta semana. Puede que haya algo que ya no necesita tanto.', 'Vale la pena notar qué sostiene y qué drena. No hace falta resolver todo — solo verlo.'] },
    9:  { Luminar: ['Amplía el marco antes de decidir. La perspectiva vale más que la acción esta semana.', 'Ver más no es perder el tiempo. Esta semana la comprensión abre más que el movimiento.', 'Lo que entiendes esta semana vale más que lo que produces. Dale espacio a eso.'], Activo: ['El impulso está en aprender, no en hacer. Dale espacio.', 'Esta semana la energía está para aprender y explorar, no para ejecutar.', 'Muévete hacia lo que amplía, no hacia lo que produce. El horizonte es la dirección.'], Relacional: ['Busca perspectiva en alguien que piensa diferente. Esta semana el contraste abre.', 'Una conversación con alguien que ve diferente esta semana vale más que un plan.', 'El vínculo que te expande esta semana produce más que el que te confirma.'], Procesador: ['Lee, escucha, observa. La información que acumulas vale más que las conclusiones.', 'Recopila antes de concluir. Esta semana el input vale más que el output.', 'Alimenta la mente antes de pedirle que decida. Más input, mejores conclusiones.'] },
    10: { Luminar: ['Decide cómo quieres que te vean esta semana. La posición que tomas importa.', 'Tomar posición esta semana tiene peso. Lo que proyectas hacia fuera define lo que recibes.', 'Sé consciente de cómo te presentas en lo profesional. Esta semana eso importa más de lo habitual.'], Activo: ['El impulso profesional está disponible. Muévete con intención, no con urgencia.', 'Esta semana hay apertura para avanzar en lo profesional. No dejes pasar el impulso.', 'Usa el impulso disponible para mover algo en lo que construyes. Con dirección, no con prisa.'], Relacional: ['La relación con quienes tienen autoridad o visibilidad esta semana tiene peso.', 'Cuida los vínculos en el ámbito profesional esta semana. Tienen retorno real.', 'Lo que inviertes en la relación profesional esta semana produce consecuencias visibles.'], Procesador: ['Un paso concreto en lo profesional vale más que esperar el momento perfecto.', 'Mueve algo concreto en lo que construyes. La espera esta semana no suma.', 'Ejecuta aunque no todo esté listo. Un paso real avanza más que el plan perfecto.'] },
    11: { Luminar: ['Elige con quién te alineas esta semana. El entorno que eliges te moldea.', 'El entorno colectivo que cultivas esta semana define hacia dónde vas.', 'Decide con quién inviertes energía esta semana. No todas las redes suman.'], Activo: ['El proyecto colectivo necesita impulso. Aporta lo tuyo y confirma que los demás también.', 'Mueve algo en lo compartido. Los proyectos colectivos avanzan cuando alguien empuja.', 'El impulso colectivo necesita que alguien lo active. Esta semana puede ser tú.'], Relacional: ['Los vínculos de red producen más si das antes de pedir.', 'Dar sin pedir esta semana genera más retorno en la red que cualquier transacción.', 'Invierte en la red desde la generosidad. Esta semana eso tiene retorno real.'], Procesador: ['Revisa qué proyectos realmente avanzan en tu dirección. No todo merece tu energía.', 'Mira con atención qué colectivos de verdad avanzan en tu dirección.', 'No todos los proyectos colectivos merecen el mismo nivel de energía. Esta semana es buen momento para notarlo.'] },
    12: { Luminar: ['Escucha lo que está pasando adentro. El silencio tiene más información que el ruido.', 'Hay más información disponible en el interior esta semana que en el exterior. Escúchalo.', 'Lo que sientes adentro esta semana habla más claro que cualquier señal exterior.'], Activo: ['El impulso esta semana es hacia adentro. No lo fuerces hacia afuera.', 'La energía no está disponible para el exterior esta semana. Respeta eso.', 'No uses el impulso para producir hacia afuera. Esta semana está disponible para procesar.'], Relacional: ['El vínculo se nutre desde lo que procesas en silencio, no desde lo que das.', 'Lo que cuidas adentro esta semana nutre más el vínculo que lo que das hacia afuera.', 'La mejor contribución al vínculo esta semana es tu propio equilibrio interior.'], Procesador: ['Dale tiempo a lo que está madurando. Esta semana el proceso interno es la acción real.', 'No apresures lo que está tomando forma. Procesar es avanzar esta semana.', 'La maduración interna no es pasividad — es la acción correcta esta semana.'] }
};

const interpreter_engine = {
    last_status: "OK",

    /**
     * [CORRECTIVO 510.5] Inyecta la regulación emocional (Capa F)
     * Dependencia EXCLUSIVA: Casa 8 o Saturno como Señor del Año.
     */
    applyEmotionalRegulation(planData, context) {
        if (!planData) return;
        
        const pools = ANNUAL_RICH_DATA.regulation_pools;
        const _firstFrom = (pool) => (pool && pool.length > 0) ? pool[0] : null;

        const house = String(context.annual_context?.profection_house || '');
        const lord = context.annual_context?.lord_of_year;

        let regulation = null;

        // Regla 1: Casa 8 (Prioridad funcional)
        if (house === '8') {
            regulation = _firstFrom(pools.F7);
        } 
        // Regla 2: Saturno (Señor del Año confirmado como 'Saturno')
        else if (lord === 'Saturno') {
            regulation = _firstFrom(pools.F3) || _firstFrom(pools.F2);
        }

        // Inyectar solo si se cumple alguna condición (Cierre Regulatorio)
        if (regulation) {
            planData.regulatory_close = regulation;
        }
    },

    /**
     * [Sprint 511-A] Wrapper para serializar narrativa a bloques y mantener sidecar.
     * Facilita futura modulación sin romper estructuras rígidas (arrays, objetos).
     */
    toNarrativeBlockAnnual(content) {
        const practicalStr = Array.isArray(content.practical)
            ? content.practical.map(p => typeof p === 'string' ? p : (p.text || p.label || p.content || p.desc || '')).join(' | ')
            : (content.practical || '');

        const blocks = [
            {
                block_id: 'AÑO_reconocimiento_0',
                block_type: 'reconocimiento',
                module: 'AÑO',
                intensity: 'T3',
                premium: false,
                enabled: true,
                content: content.header?.phrase || '',
                source: 'content.header.phrase',
                priority: 1
            },
            {
                block_id: 'AÑO_profundización_1',
                block_type: 'profundización',
                module: 'AÑO',
                intensity: 'T4',
                premium: false,
                enabled: true,
                content: content.scenario?.desc || '',
                source: 'content.scenario.desc',
                priority: 2
            },
            {
                block_id: 'AÑO_profundización_2',
                block_type: 'profundización',
                module: 'AÑO',
                intensity: 'T4',
                premium: true,
                enabled: true,
                content: content.filter || '',
                source: 'content.filter',
                priority: 3
            },
            {
                block_id: 'AÑO_acción_3',
                block_type: 'acción',
                module: 'AÑO',
                intensity: 'T3',
                premium: true,
                enabled: true,
                content: practicalStr,
                source: 'content.practical',
                priority: 4,
                _readOnly: true
            }
        ];

        return {
            blocks,
            sidecar: {
                original_content: JSON.parse(JSON.stringify(content)),
                _readOnly: true
            }
        };
    },

    /**
     * [Sprint 511-A] Unwrapper para restaurar estructura original.
     * Actualmente en modo Passthrough idéntico.
     */
    fromNarrativeBlockAnnual(wrapper) {
        return wrapper.sidecar.original_content;
    },

    applyNarrativeModulation(blocks, context) {
        let t4Count = 0;

        for (const block of blocks) {
            if (!block || !block.enabled || !block.intensity) continue;

            if (block.intensity === 'T4') {
                t4Count++;

                if (t4Count > 1) {
                    // 511-E — 510.2: reducir T4 excedente a T3
                    // No se modifica el texto ni el bloque en producción — solo metadata interna
                    block._flagged_intensity = true;
                    block._original_intensity = 'T4';
                    block.intensity = 'T3';

                    console.log(
                        '[511-E] T4 excedente reducido a T3:',
                        block.block_id
                    );
                }
            }
        }

        return blocks;
    },

    /**
     * Punto de entrada principal.
     */
    async processRequest(contextoInterpretativo) {
        if (window.KAIROS_FLAGS?.LOG_LEVEL === "verbose") {
            console.log("[KAIROS SHADOW DAILY] 📥 Contexto Recibido:", contextoInterpretativo);
        }

        if (!this.validateContext(contextoInterpretativo)) {
            console.error("[KAIROS SHADOW DAILY] ❌ Error de Contrato: Contexto inválido.");
            return null;
        }

        try {
            if (contextoInterpretativo.request_context.view === 'daily') {
                return await this.generateDailyReading(contextoInterpretativo);
            }
            if (contextoInterpretativo.request_context.view === 'annual') {
                return await this.generateAnnualReading(contextoInterpretativo);
            }
            if (contextoInterpretativo.request_context.view === 'weekly') {
                return await this.generateWeeklyReading(contextoInterpretativo);
            }
            if (contextoInterpretativo.request_context.view === 'monthly') {
                return await this.generateMonthlyReading(contextoInterpretativo);
            }
            if (contextoInterpretativo.request_context.view === 'matrix') {
                return await this.generateMatrixReading(contextoInterpretativo);
            }
            return null;
        } catch (error) {
            console.error("[KAIROS SHADOW] ❌ Error en orquestación:", error);
            return null;
        }
    },

    /**
     * Orquestador de lectura ANUAL con jerarquía KAIROS.
     */
    async generateAnnualReading(context) {
        const startTime = performance.now();
        
        const docIds = [
            '304_casa_activada_por_profeccion', // [D.0.1] fix: 330 no existe en Firestore → 304
            '303_senor_del_ano_por_planeta',
            '220_significado_casas',
            '210_significado_signos',
            '260_profeccion_anual',
            '270_senor_del_ano'
        ];

        try {
            const docs = await this.fetchDocumentsFromLibrary(docIds);
            const endTime = performance.now();
            const latency = (endTime - startTime).toFixed(2);

            const lang = context.user_context?.language || 'es';
            const lord = context.annual_context?.lord_of_year || 'Sol';
            const house = String(context.annual_context?.profection_house || 1);
            const asc = context.natal_context?.ascendant || 'Aries';

            const houseData = docs['304_casa_activada_por_profeccion']?.contenido?.casas?.[house] || // [D.0.1]
                             docs['220_significado_casas']?.contenido?.catalogo?.[house] || {};
            const lordData = docs['303_senor_del_ano_por_planeta']?.contenido?.planetas?.[lord] || {};
            const signsDoc = docs['210_significado_signos']?.contenido?.catalogo || {};
            const ascData = signsDoc[asc.toUpperCase()] || {};

            // Bloque 1: Encabezado
            const cycleTitle = `Tu año · Casa ${house}`;
            const cyclePhrase = (houseData.nombre || houseData.area) 
                ? `Tu año se centra en ${houseData.nombre || houseData.area}. Es un tiempo para ${houseData.potencial || 'madurar tus procesos'}.`
                : '';

            // Bloque 2: Escenario
            const scenario = {
                title: `Escenario: ${houseData.nombre || ('Casa ' + house)}`,
                desc: houseData.psicologia || houseData.desc || (house === '5' || house === 5 ? "Un ciclo de fuego creativo, expresión personal profunda e intensidad vital." : "Un ciclo profundo para explorar tu capacidad creadora y el disfrute.")
            };

            // Bloque 3: El Señor del Año
            const lordInfo = {
                planet: lord,
                tone: lordData.clima_psicologico || (lord.toLowerCase() === 'marte' ? "Acción, coraje y decisión" : "Ciclo activo y de aprendizaje"),
                request: lordData.potencial ? `Con la guía de ${lord}, este ciclo te pide ${lordData.potencial}.` : (lord.toLowerCase() === 'marte' ? `Este año, Marte te pide cortar con la duda, atreverte a liderar tu propio proceso y defender tu territorio vital.` : `Este año, ${lord} te pide integrar su maestría con paciencia.`)
            };

            // Bloque 4: Matiz Ascendente
            const personalFilter = `Tu Ascendente ${asc} matiza este ciclo: buscas desarrollar tu ${ascData.evolutivo || 'autenticidad'} a través de ${ascData.estilo || 'tu enfoque natural'}.`;

            const richHouse = ANNUAL_RICH_DATA_LEGACY.casas[house] || ANNUAL_RICH_DATA_LEGACY.casas['1'];
            const richClima = ANNUAL_RICH_DATA_LEGACY.lord_clima[lord] || "Activo, dinámico e integrado";

            // Bloque 5: Triplete KAIROS
            const triplete = {
                clima: richClima,
                direccion: richHouse.direccion,
                cuidado: richHouse.cuidado
            };

            // Bloque 6: Orientación Práctica (Array con bullets)
            const practical = richHouse.practica;

            const content = {
                header: { title: cycleTitle, phrase: cyclePhrase },
                scenario: scenario,
                lord: lordInfo,
                filter: personalFilter,
                triplete: triplete,
                practical: practical,
                profection: {
                    house: house,
                    sign: context.annual_context?.profection_sign || '---',
                    meaning: docs['260_profeccion_anual']?.contenido?.resumen || ""
                },
                technical_audit: { latency, status: "OK", lord_active: lord }
            };

            // [Sprint 511-C] Pipeline completo (modulación passthrough en esta fase)
            const wrapper = this.toNarrativeBlockAnnual(content);
            const modulatedBlocks = this.applyNarrativeModulation(wrapper.blocks, context);
            const finalContent = this.fromNarrativeBlockAnnual({ blocks: modulatedBlocks, sidecar: wrapper.sidecar });

            this.applyEmotionalRegulation(finalContent, context);
            return this.buildOutput(finalContent, 'annual', latency);

        } catch (error) {
            console.error("[KAIROS SHADOW ANNUAL] ❌ Fallo en fetch/ensamblaje:", error);
            throw error;
        }
    },

    /**
     * Valida la estructura del contexto.
     */
    validateContext(context) {
        const requiredBlocks = ['user_context', 'natal_context', 'annual_context', 'temporal_context', 'transit_context', 'request_context'];
        const missing = requiredBlocks.filter(b => !context[b]);
        
        // monthly_context is only strictly required for certain views
        const view = context.request_context?.view;
        if ((view === 'monthly' || view === 'matrix') && !context.monthly_context) {
            missing.push('monthly_context');
        }

        if (missing.length > 0) {
            console.warn("[KAIROS CONTRACT] ⚠️ Missing blocks:", missing);
        }
        return missing.length === 0;
    },

    /**
     * Orquestador de lectura DIARIA con Firestore real.
     */
    async generateDailyReading(context) {
        const startTime = performance.now();
        
        const docIds = [
            '405_lecturas_diarias',                     
            '305_luna_en_transito_por_signo',           
            '250_planeta_del_dia',                      
            '270_senor_del_ano',                        
            '230_fases_lunares',
            '303_senor_del_ano_por_planeta',
            '220_significado_casas',
            '308_cruces_planeta_dia_senor_del_ano' 
        ];

        try {
            const libraryDocs = await this.fetchDocumentsFromLibrary(docIds);
            const endTime = performance.now();
            const latency = (endTime - startTime).toFixed(2);

            console.log("\\n==========================================");
            console.log("📊 KAIROS DIAGNOSTIC: MÓDULO 'HOY'");
            console.log("------------------------------------------");
            console.log("1. AUDITORÍA DE DOCUMENTOS:");
            console.log("   ➤ Pedidos: ", docIds);
            const loaded = Object.keys(libraryDocs).filter(id => libraryDocs[id]);
            console.log("   ✅ Cargados:", loaded);
            const missing = Object.keys(libraryDocs).filter(id => !libraryDocs[id]);
            console.log(`   ❌ No encontrados:`, missing.length > 0 ? missing : 'Gota limpia.');
            console.log(`   ⏱️  Latencia: ${latency}ms`);
            console.log("------------------------------------------");

            const outputFinal = this.applyAssemblyRules(context, libraryDocs);
            return this.buildOutput(outputFinal, 'daily', latency);

        } catch (error) {
            console.error("[KAIROS SHADOW DAILY] ❌ Fallo en fetch/ensamblaje de Firestore:", error);
            throw error;
        }
    },

    /**
     * Consulta a Firestore con CACHÉ de sesión. 
     */
    async fetchDocumentsFromLibrary(docIds) {
        if (!window.db) {
            throw new Error("Firestore (db) no está inicializado.");
        }

        // Inicializar caché si no existe
        if (!this._docCache) this._docCache = {};

        const db = window.db;
        const libraryMap = {};
        const docsToFetch = [];

        docIds.forEach(id => {
            if (this._docCache[id]) {
                libraryMap[id] = this._docCache[id];
            } else {
                docsToFetch.push(id);
            }
        });

        if (docsToFetch.length === 0) return libraryMap;

        const promises = docsToFetch.map(async (docId) => {
            try {
                const docRef = db.collection('kairos_library').doc(docId);
                const snap = await docRef.get();
                const data = snap.exists ? snap.data() : null;
                if (data) this._docCache[docId] = data; // Guardar en caché
                libraryMap[docId] = data;
            } catch (e) {
                console.error(`[KAIROS SHADOW] ❌ Error leyendo doc ${docId}:`, e);
                libraryMap[docId] = null;
            }
        });

        await Promise.all(promises);
        return libraryMap;
    },

    /**
     * Lógica de ensamblaje v0.3.1: Defensa ante datos faltantes.
     */
    applyAssemblyRules(context, docs) {
        const lang = context.user_context.language || 'es';
        const subLevel = context.user_context.subscription_level
            || context.user_context.subscription
            || 'FREE';
        this.last_status = "OK";
        
        // --- 1. Variables de Contexto ---
        const lunaSign = context.transit_context?.moon_transit_sign || 'Aries';
        const moonHouse = context.transit_context?.moon_transit_house || 1;
        const planetaDia = context.temporal_context?.day_planet || 'Sol';
        const lord = context.annual_context?.lord_of_year || 'Sol';
        const faseLunar = context.temporal_context?.moon_phase || 'Nueva';
        const casaProfectada = context.annual_context?.profection_house || 1;

        // Condición natal del Señor — derivación mínima (C.1)
        const natalPlanets   = context.natal_context?.planets || {};
        const lordKey        = Object.keys(natalPlanets).find(
                                 k => k.toLowerCase() === lord.toLowerCase()
                               ) || lord;
        const lordNatalData  = natalPlanets[lordKey] || null;
        const lordNatalSign  = lordNatalData?.sign  || null;
        const lordNatalHouse = lordNatalData?.house || lordNatalData?.houseNumber || null;
        const lordIsRetro    = lordNatalData?.isRetro || false;
        const lordNatalCondition = lordNatalSign
            ? `${lord} natal en ${lordNatalSign}`
              + (lordNatalHouse ? ` (Casa ${lordNatalHouse})` : '')
              + (lordIsRetro    ? ' Rx' : '')
            : null;

        // --- 2. Extracción de Datos de Biblioteca ---
        const getFromSerie = (docId, key) => {
            const doc = docs[docId];
            if (!doc || !doc.contenido) return { data: null, source: `FALLBACK (Doc nulo: ${docId})` };
            const found = doc.contenido[key] || doc.contenido.catalogo?.[key] || doc.contenido.planetas?.[key.toLowerCase()];
            if (found) return { data: found, source: `FIRESTORE (${docId})` };
            return { data: null, source: `FALLBACK (Llave '${key}' faltante en ${docId})` };
        };

        const lunaInfo = getFromSerie('305_luna_en_transito_por_signo', lunaSign);
        const planetaInfo = getFromSerie('250_planeta_del_dia', planetaDia);
        const lordInfo = getFromSerie('303_senor_del_ano_por_planeta', lord);
        
        // Cambio de jerarquía C.1: casaProfectada es el escenario principal
        const houseInfo     = getFromSerie('220_significado_casas', String(casaProfectada));
        const moonHouseInfo = getFromSerie('220_significado_casas', String(moonHouse));
        const faseInfo = getFromSerie('230_fases_lunares', faseLunar);

        console.log("2. FUENTE POR BLOQUE:");
        console.log(`   🔸 PULSO (Luna en ${lunaSign}):`, lunaInfo.source);
        console.log(`   🔸 MATIZ (Día de ${planetaDia}):`, planetaInfo.source);
        console.log(`   🔸 ESCENARIO (Casa ${casaProfectada}):`, houseInfo.source);
        console.log(`   🔸 CLIMA ANUAL (${lord}):`, lordInfo.source);
        console.log(`   🔸 FASE LUNAR (${faseLunar}):`, faseInfo.source);
        console.log("------------------------------------------");

        const lunaData = lunaInfo.data || { interpretacion: "Pulso emocional activo.", precaucion: "Mantén el equilibrio." };
        const planetData = planetaInfo.data || { tono: 'Neutral', potencial: 'Organizar la jornada' };
        const lordData = lordInfo.data || { clima_psicologico: 'Ciclo activo de aprendizaje' };
        const houseData = houseInfo.data || { area: "vida cotidiana", nombre: "Interioridad" };
        const moonHouseData = moonHouseInfo.data || { area: "vida cotidiana", nombre: "Interioridad" };
        const faseData = faseInfo.data || { keyword: "Fluir", desc: "Sincronía con el ciclo natural." };

        // --- 3. Construcción del Relato (Jerarquía KAIROS C.1) ---
        
        // Título y Pulso
        const pulsoHeader = `Casa ${casaProfectada} · Señor del Año: ${lord}`;
        const areaAnual = houseData.nombre || houseData.area || "tu centro";
        const areaLunar = moonHouseData.nombre || moonHouseData.area || "tu centro";
        
        // Limpiar strings de base de datos para fluir mejor
        const cleanString = (str) => {
            if (!str) return '';
            str = str.trim();
            if (str.endsWith('.')) str = str.slice(0, -1);
            return str.charAt(0).toLowerCase() + str.slice(1);
        };

        const focoLuna = cleanString(lunaData.interpretacion) || "un pulso emocional activo";
        const precaucionLuna = cleanString(lunaData.precaucion) || "no perder el centro";
        const accionPlaneta = cleanString(planetData.potencial) || "accionar con claridad";
        const condLord = lordNatalCondition ? ` Con ${lordNatalCondition}.` : '';

        const normalizeHuman = (text) => {
            if (!text) return text;
            let normalized = text
                .replace(/la persona puede sentirse/gi, 'tú puedes sentirte')
                .replace(/la persona siente/gi, 'tú sientes')
                .replace(/la persona busca/gi, 'tú buscas')
                .replace(/la persona/gi, 'tú')
                .replace(/se siente/gi, 'te sientes')
                .replace(/tú siente\b/gi, 'tú sientes')
                .replace(/tiene un tono/gi, 'se siente')
                .replace(/su energía/gi, 'tu energía')
                .replace(/la zona de /gi, 'tu ')
                .replace(/Al tener a (\w+) en (\w+) en tu nacimiento/gi, 'Con $1 natal en $2')
                .replace(/al tener a (\w+) en (\w+)/gi, 'con $1 natal en $2')
                .replace(/en tu nacimiento/gi, 'en tu carta')
                .replace(/capacidad de confrontación/gi, (match) => {
                    const variants = ['tu impulso para actuar', 'tu fuerza de decisión', 'tu valentía para avanzar'];
                    return variants[Math.floor(Math.random() * variants.length)];
                })
                .replace(/confrontación/gi, 'tensión constructiva')
                .replace(/el tono de la semana se renueva/gi, 'esta semana abre un ciclo distinto')
                .replace(/el tono de la semana/gi, 'el ritmo de la semana')
                .replace(/el tono cambia/gi, 'la energía cambia')
                .replace(/renueva el tono/gi, 'abre una nueva etapa')
                .replace(/el tono de/gi, 'el ritmo de')
                .replace(/zona de (\w+)/gi, '$1')
                .replace(/operar desde natal en (\w+)/gi, 'desde tu posición natal en $1')
                .replace(/Como pulsas desde tu Ascendente/gi, 'Desde tu naturaleza ascendente')
                .replace(/pulsas desde tu Ascendente (\w+)/gi, 'tu energía $1 se activa')
                .replace(/Cronografía anual activada\./gi, '')
                .replace(/Tu ciclo se enfoca en el centro vital/gi, '') // Será reemplazado en la lógica
                .replace(/defenderse/gi, 'defenderte')
                .replace(/afirmarse/gi, 'afirmarte')
                .replace(/hacerse visible/gi, 'hacerte visible')
                .replace(/percibe/gi, 'percibes')
                .replace(/busca/gi, 'buscas')
                .replace(/tú sientess/gi, 'tú sientes'); // Fix de seguridad

            // Limpieza de cualquier residuo técnico entre corchetes (Regla de oro D.3.A.1)
            normalized = normalized.replace(/\[.*?\]/g, '');
            // Limpieza de espacios dobles resultantes
            normalized = normalized.replace(/\s\s+/g, ' ').trim();

            return normalized;
        };

        // Relato Unificado Humanizado (Normalización D.2.1)
        let relato = "";
        if (subLevel !== 'FREE') {
            // Capa 1: Escenario anual (Artículo + 2da persona)
            const art = ['Hogar','Éxito','Trabajo','Servicio','Cuerpo'].includes(areaAnual) ? 'el' : 'la';
            const fraseAnual = `Tu año gira en torno a ${art} ${areaAnual}, bajo la guía de ${lord}, quien activa tu ${areaAnual}.`;
            
            // Capa 2: Condición natal (Experiencial + Sujeto Tú)
            const fraseNatal = lordNatalSign ? ` Con ${lord} natal en ${lordNatalSign} (Casa ${lordNatalHouse}), percibes este impulso como ${cleanString(lordData.tono)}.` : '';
            
            // Capa 3: Modulador lunar (Directo)
            const fraseHoy = ` Hoy la Luna en ${lunaSign} moviliza tu ${areaLunar}.`;
            relato = fraseAnual + fraseNatal + fraseHoy;
        } else {
            relato = `Tu año está marcado por ${areaAnual}. `
                   + `Hoy la Luna en ${lunaSign} añade un matiz de ${focoLuna}.`;
        }

        // Triplete KAIROS (Humano y Accionable)
        const triplete = {
            clima: normalizeHuman(lordData.clima_psicologico || planetData.tono || "Enfoque activo"),
            direccion: `Activar tu ${areaAnual}`,
            cuidado: normalizeHuman(precaucionLuna ? (precaucionLuna.charAt(0).toUpperCase() + precaucionLuna.slice(1)) : `Observar el ritmo de ${lunaSign}`)
        };

        // Matiz del Día
        const matiz = `${planetaDia} marca el ritmo de hoy. Su cualidad es ideal para que logres ${accionPlaneta}.`;

        // Resonancia Personal (Conexión Natal)
        const ascendant = context.natal_context?.ascendant || 'Aries';
        let resonanciaPersonal = "";
        
        if (subLevel !== 'FREE') {
            const toneData = getToneForCombination(lord, lordNatalSign, casaProfectada);
            const toneFrase = toneData?.base
                ? ` Con tu ${lord} natal en ${lordNatalSign}, ${toneData.base}.`
                : '';
            const tension = detectNarrativeTension(lord, planetaDia || context?.temporal_context?.day_planet);
            const bridge = tension.hasTension
                ? ' ' + buildBridgeSentence(tension, lord, planetaDia || '')
                : '';
            const accionRaw = cleanString(lordData.accion) || '';
            const accionKey = accionRaw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const activacion = `Con tu Ascendente en ${ascendant}, hoy puedes notar más ${ACCION_TRANSLATION[accionKey] || accionRaw}.`;
            const accion = DAY_PLANET_ORIENTATION[planetaDia] || '';
            resonanciaPersonal = `${activacion} ${accion}`;
            resonanciaPersonal += toneFrase + bridge;
        } else {
            resonanciaPersonal = `Tu Ascendente en ${ascendant} te invita a observar cómo resuena hoy la energía de la Luna en tu ${areaLunar}.`;
        }

        // --- 4. DATA DE SEÑALES FUTURAS DE HOY (Ocultas por ahora) ---
        // TODO: Esta data debe activarse con KAIROS_FLAGS.ENABLE_DAILY_FUTURE_SIGNALS en el futuro, no está lista en UI
        const natalMoon = context.natal_context?.natal_moon || null;
        
        let natalActivationActive = false;
        let natalActivationType = null;
        const tm = context.transit_context?.moon_transit_sign;
        const nm = natalMoon?.sign;
        
        if (tm && nm) {
            const signs = ['Aries','Tauro','Géminis','Cáncer','Leo','Virgo','Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'];
            const idxTm = signs.indexOf(tm);
            const idxNm = signs.indexOf(nm);
            
            if (tm === nm) {
                natalActivationActive = true;
                natalActivationType = 'conjunción (por signo)';
            } else if (idxTm !== -1 && idxNm !== -1) {
                const diff = Math.abs(idxTm - idxNm);
                if (diff === 6) {
                    natalActivationActive = true;
                    natalActivationType = 'oposición (por signo)';
                } else if (diff === 3 || diff === 9) {
                    natalActivationActive = true;
                    natalActivationType = 'cuadratura (por signo)';
                }
            }
        }
        
        const phase = context.temporal_context?.moon_phase;
        const exactPhases = ['Nueva', 'Llena', 'Cuarto Creciente', 'Cuarto Menguante'];
        const isLunarEvent = exactPhases.includes(phase);
        const dayPlanet = context.temporal_context?.day_planet;
        const isKeyDay = (natalActivationActive || isLunarEvent) && (lord === 'Luna' || lord === dayPlanet);
        
        const futureSignals = {
            enabled: true, 
            natal_activation: {
                active: natalActivationActive,
                type: natalActivationType, 
                narrative_key: null, 
                natal_sign: nm,
                transit_sign: tm
            },
            lunar_events: {
                active: isLunarEvent,
                event_type: phase, 
                narrative: null
            },
            kairos_key_day: {
                active: isKeyDay,
                reason: isKeyDay ? `Combinación: Activación Lunar + Lord/Día Planetario (${lord})` : null,
                narrative: null
            }
        };

        const finalOutput = {
            title: pulsoHeader,
            area_activada: `Hoy el pulso cae en: ${areaAnual}`,
            narrativa: relato,
            sun_sign: context.transit_context?.sun_transit_sign || 'Aries',
            triplete: triplete,
            matiz: matiz,
            resonancia_personal: resonanciaPersonal,
            future_signals: futureSignals,
            reflection: `¿Cómo utilizas la fuerza de ${lord} para potenciar tu avance bajo esta Luna?`,
            technical_audit: {
                moon_house: moonHouse,
                lord_active: lord,
                status: this.last_status,
                docs_count: Object.keys(docs).filter(k => docs[k]).length
            }
        };

        // [Sprint 511-B] Passthrough
        const wrapper = this.toNarrativeBlockDaily(finalOutput);
        const processedOutput = this.fromNarrativeBlockDaily(wrapper);

        this.applyEmotionalRegulation(processedOutput, context);
        return processedOutput;
    },

    /**
     * [Sprint 511-B] Wrapper para serializar narrativa a bloques y mantener sidecar (Módulo Hoy).
     */
    toNarrativeBlockDaily(content) {
        return {
            blocks: [
                content.area_activada,
                content.narrativa,
                content.matiz,
                content.resonancia_personal,
                content.reflection
            ],
            sidecar: {
                original_content: JSON.parse(JSON.stringify(content)),
                _readOnly: true
            }
        };
    },

    /**
     * [Sprint 511-B] Unwrapper para restaurar estructura original (Módulo Hoy).
     */
    fromNarrativeBlockDaily(wrapper) {
        return wrapper.sidecar.original_content;
    },

    /**
     * Orquestador de lectura SEMANAL v0.2.
     * FIX: moon_sequence ahora se recibe desde el contexto correctamente.
     * Usa weekly_engine para scoring real multivariable.
     */
    _deriveLordNatalCondition(lord, context) {
        const natalPlanets = context?.natal_context?.planets || {};
        const lordKey = Object.keys(natalPlanets).find(k => k.toLowerCase() === (lord || '').toLowerCase()) || lord;
        const lordData = natalPlanets[lordKey] || null;

        if (!lordData) {
            return { sign: null, house: null, isRetro: false, active: false };
        }

        return {
            sign: lordData.sign || null,
            house: lordData.house || lordData.natal_house || lordData.houseNumber || null,
            isRetro: lordData.retrograde === true || lordData.isRetro === true,
            active: true  // hay datos natales disponibles
        };
    },

    async generateWeeklyReading(context) {
        const startTime = performance.now();
        // LIMPIEZA: Solo los 2 documentos que se usan realmente
        const docIds = [
            '303_senor_del_ano_por_planeta',
            '220_significado_casas'
        ];

        try {
            const docs = await this.fetchDocumentsFromLibrary(docIds);
            const lord        = context.annual_context?.lord_of_year    || 'Sol';
            const profHouse   = context.annual_context?.profection_house || 1;
            
            // [C.2] Condición natal del Señor (mínima: signo, casa, retro)
            const lordNatal = this._deriveLordNatalCondition(lord, context);

            // Construir frase de condición natal (solo si hay datos)
            let lordNatalPhrase = '';
            if (lordNatal.active && lordNatal.sign) {
                lordNatalPhrase = lordNatal.house
                    ? `natal en ${lordNatal.sign} (casa ${lordNatal.house}${lordNatal.isRetro ? ', retrógrado' : ''})`
                    : `natal en ${lordNatal.sign}${lordNatal.isRetro ? ' retrógrado' : ''}`;
            }

            const lordDoc  = docs['303_senor_del_ano_por_planeta'];
            const lordData = lordDoc?.contenido?.[lord]
                || lordDoc?.contenido?.catalogo?.[lord]
                || lordDoc?.contenido?.planetas?.[lord.toLowerCase()]
                || {};
            const houseLib    = docs['220_significado_casas']?.contenido?.catalogo || {};

            // FIX CRÍTICO: moon_sequence llega desde el contexto
            const moonSeq = context.weekly_context?.moon_sequence || [];

            // 🔒 SEMANA LOCKED: flujo protegido — no introducir nuevas variables ni lógica adicional
            if (window.KAIROS_FLAGS?.weekly_locked) {
                // Usar flujo validado v0.2 sin alteraciones
                console.log('[KAIROS] generateWeeklyReading: modo locked v0.2 activo.');
            }

            this.last_status = "OK";

            // ── Motor de scoring ───────────────────────────────────────────
            const we = window.weekly_engine;
            const scoredDays = we ? we.scoreDays(moonSeq, lord, profHouse) : [];

            // ── Verbo semanal enriquecido ──────────────────────────────────
            const verbo = we
                ? we.getWeeklyVerb(lord, scoredDays, profHouse)
                : { palabra: 'FLUIR', concepto: 'La semana invita a moverse con el ritmo natural.', accion: 'fluir' };

            // ── Post-proceso de tramos D.4.2-D: variantes por tono y posición ──
            const tramoActionMap = {
                favorable: [
                    'El ritmo está a favor en este tramo. Úsalo en lo que depende de ti, no en urgencias externas.',
                    'Este es el tramo para avanzar. Muévete con intención clara.',
                    'El momento está a favor. Es buen momento para tomar una decisión pendiente.'
                ],
                neutral: [
                    'Avanza sin forzar. Lo que se sostiene sin esfuerzo extra es lo que funciona.',
                    'Mantén el ritmo. No es tramo de grandes movimientos, sino de constancia.',
                    'Distingue lo que puedes mover de lo que no depende de ti — y actúa solo en lo primero.'
                ],
                sensitive: [
                    'Ve despacio. La energía que cuidas ahora te rinde más después.',
                    'No es momento de resolver todo. Con atender lo esencial es suficiente.',
                    'Menos movimiento, más atención. Eso es lo que funciona en este tramo.'
                ]
            };
            const tramosRaw = we ? we.buildTramos(scoredDays, houseLib, lord) : [];
            const tramos = tramosRaw.map((tramo, idx) => {
                const avgScore = tramo.dias.length > 0
                    ? tramo.dias.reduce((s, d) => s + d.score, 0) / tramo.dias.length
                    : 50;
                const scoreTone  = avgScore >= 70 ? 'favorable' : avgScore >= 40 ? 'neutral' : 'sensitive';
                const guide      = SEMANA_HOUSE_GUIDE[tramo.casa]?.[scoreTone] || {};
                const profLine   = tramo.hasProfection ? 'La Luna activa tu escenario del año: pon atención a lo que surja.' : '';
                const actionLine = tramoActionMap[scoreTone]?.[idx % 3] || '';
                const ingressLine = tramo.hasIngress ? SEMANA_INGRESS_PHRASES[idx % SEMANA_INGRESS_PHRASES.length] : '';
                // Estructura D.4.2-E: experiencia (intro) + orientación (clave) + acción (prof o tono) + [cambio lunar]
                const newNarrativa = [guide.intro || '', guide.clave || '', profLine || actionLine, ingressLine].filter(Boolean).join(' ');
                return { ...tramo, narrativa: newNarrativa, scoreTone };
            });

            // ── Intro semanal D.4.2-G: IMPACTO + ENERGÍA + DIRECCIÓN ──────────────
            const weekAvgScore = scoredDays.length > 0
                ? scoredDays.reduce((s, d) => s + d.score, 0) / scoredDays.length
                : 50;
            const dominantTone = weekAvgScore >= 70 ? 'favorable' : weekAvgScore >= 40 ? 'neutral' : 'sensitive';

            const birthStr = context.natal_context?.birth_data?.date
                || context.natal_context?.ascendant
                || 'Aries';
            const userSeed = Array.from(birthStr).reduce((s, c) => s + c.charCodeAt(0), 0) % 7;

            const _isoD = new Date();
            _isoD.setHours(0, 0, 0, 0);
            _isoD.setDate(_isoD.getDate() + 3 - (_isoD.getDay() + 6) % 7);
            const _isoW1 = new Date(_isoD.getFullYear(), 0, 4);
            const isoWeek = 1 + Math.round(((_isoD.getTime() - _isoW1.getTime()) / 86400000 - 3 + (_isoW1.getDay() + 6) % 7) / 7);

            const microIdx = (isoWeek + userSeed) % 3;

            const lordGroup       = LORD_GROUP[lord] || 'Luminar';
            const weeklyImpacto   = SEMANA_IMPACTO[profHouse]?.[dominantTone]?.[microIdx]  || '';
            const weeklyEnergia   = SEMANA_ENERGIA[lord]?.[dominantTone]?.[microIdx]        || '';
            const weeklyDireccion = SEMANA_DIRECCION[profHouse]?.[lordGroup]?.[microIdx]    || '';
            const weekly_intro    = [weeklyImpacto, weeklyEnergia, weeklyDireccion, (lordNatalPhrase ? `Tu ${lord} ${lordNatalPhrase} guía este pulso.` : '')].filter(Boolean).join(' ');
            const lord_tone    = `${lord} rige tu año desde la casa ${profHouse}${lordNatalPhrase ? ', ' + lordNatalPhrase : ''}.`;
            const lordCuidado  = lordData.desequilibrios?.[0] || '';

            // ── Mapa de intensidad (scoring real) ─────────────────────────
            const intensityMap = scoredDays.map(d => ({
                label:     d.dateLabel,
                dayShort:  d.dayShort,
                dayIndex:  d.dayIndex,
                voltage:   d.score,
                color:     d.color,
                colorClass: d.colorClass,
                colorLabel: d.colorLabel,
                dayRuler:  d.dayRuler,
                daySymbol: d.daySymbol,
                moonSign:  d.moonSign,
                moonHouse: d.moonHouse,
                isMoonIngress:  d.isMoonIngress,
                isProfectionDay: d.isProfectionDay
            }));

            // 🔒 CAPA PREMIUM PREPARADA — ACTIVACIÓN FUTURA
            // No modificar la estructura. Solo cambiar enabled: true cuando sea premium.
            // Requiere: biblioteca 410, 420, 430 + activación de carta natal semanal.
            const weeklySignals = {
                enabled: Boolean(
                    scoredDays.some(d => d.isProfectionDay) || 
                    lordNatal?.active || 
                    scoredDays.some(d => d.isProfectionDay && d.dayRuler === lord)
                ), 
                activaciones_personales: {
                    active: scoredDays.some(d => d.isProfectionDay),
                    casas_activadas: [...new Set(scoredDays.map(d => d.moonHouse))],
                    narrative: scoredDays.some(d => d.isProfectionDay)
                        ? `La Luna recorre tu ${houseLib[profHouse]?.nombre || 'centro'} esta semana, activando tu escenario del año.`
                        : ''
                },
                ventanas_favorables: {
                    active: scoredDays.some(d => d.score >= 70),
                    mejor_dia: scoredDays.reduce((best, d) => d.score > best.score ? d : best, scoredDays[0] || { score: 0 }),
                    narrative: ''
                },
                senales_especiales: {
                    active: scoredDays.some(d => d.isProfectionDay && d.dayRuler === lord),
                    narrative: scoredDays.some(d => d.isProfectionDay && d.dayRuler === lord)
                        ? `Coincidencia mayor: la Luna recorre tu ${houseLib[profHouse]?.nombre || 'centro'} y ${lord} rige el día. Tienes una ventana de alta potencia.`
                        : ''
                }
            };

            const content = {
                verbo:         verbo.palabra,
                concept:       verbo.concepto,
                lord:          lord,
                lord_tone:     lord_tone,
                lord_cuidado:  lordCuidado,
                tramos:        tramos,
                intensity_map: intensityMap,
                weekly_signals: weeklySignals,
                weekly_intro:  weekly_intro
            };

            const endTime = performance.now();
            return this.buildOutput(content, 'weekly', (endTime - startTime).toFixed(2));

        } catch (error) {
            console.error("[KAIROS INTERPRETER] ❌ Error en lectura semanal:", error);
            throw error;
        }
    },

    /**
     * Orquestador de lectura MENSUAL v0.2.
     * Usa: 210 (signos), 220 (casas), 230 (fases lunares), 303 (Lord del año)
     */
    async generateMonthlyReading(context) {
        const startTime = performance.now();
        const docIds = [
            '303_senor_del_ano_por_planeta',
            '220_significado_casas',
            '230_fases_lunares',
            '210_significado_signos'
        ];

        try {
            const docs = await this.fetchDocumentsFromLibrary(docIds);
            const lord         = context.annual_context?.lord_of_year || 'Sol';
            const profHouse    = context.annual_context?.profection_house || 1;
            const profSign     = context.annual_context?.profection_sign || 'Aries';
            
            // [C.2] Condición natal del Señor
            const lordNatal = this._deriveLordNatalCondition(lord, context);

            let lordNatalPhrase = '';
            if (lordNatal.active && lordNatal.sign) {
                lordNatalPhrase = lordNatal.house
                    ? `natal en ${lordNatal.sign} (Casa ${lordNatal.house}${lordNatal.isRetro ? ', retrógrado' : ''})`
                    : `natal en ${lordNatal.sign}${lordNatal.isRetro ? ' retrógrado' : ''}`;
            }

            const moonSign     = context.transit_context?.moon_transit_sign || 'Aries';
            const hotspots     = context.monthly_context?.hotspots || {};
            const today        = new Date();

            // --- Biblioteca ---
            const lordData  = docs['303_senor_del_ano_por_planeta']?.contenido?.planetas?.[lord] || {};
            const casas     = docs['220_significado_casas']?.contenido?.catalogo || {};
            const signos    = docs['210_significado_signos']?.contenido?.catalogo || {};
            const fasesDoc  = docs['230_fases_lunares']?.contenido?.fases || {};

            const houseData = casas[profHouse] || {};
            const areaSign  = houseData.signo || 'Aries';
            const areaSignData = signos[areaSign.toUpperCase()] || {};
            this.last_status = 'OK';

            // --- [A] Clima del mes ---
            const lordClima = lordData.clima_psicologico || 'activo';
            const estrategia = this.calculateMonthlyStrategy(lord, hotspots);

            // Signo solar actual
            const sunSign = context.transit_context?.sun_transit_sign || hotspots.solar_ingress?.sign || moonSign;
            const sunSignData = signos[(sunSign || '').toUpperCase()] || {};
            const climaFrase  = `El Sol transita ${sunSign || 'este signo'} — ${sunSignData.naturaleza || 'un tiempo de cambio'}. Con ${lord} guiando tu año, este mes se siente ${lordClima.toLowerCase()} y te enfoca en ${lordData.accion || 'tu propósito'}.`;

            // --- [C] Hitos del mes con sujeto claro y texto de biblioteca ---
            const natalPlanets = context.natal_context?.planets || {}; // D.4.7
            const hitos = this.buildMonthlyHitos(hotspots, fasesDoc, signos, lord, estrategia, houseData, today, lordData, natalPlanets);
            // D.4.4-E1: hitos del mes siguiente para Próximo Pulso
            const nextHotspots = context.monthly_context?.next_hotspots || {};
            const nextHitos = Object.keys(nextHotspots).length > 0
                ? this.buildMonthlyHitos(nextHotspots, fasesDoc, signos, lord, estrategia, houseData, today, lordData, natalPlanets)
                : [];

            // --- [D] Conexión anual (D.4.5-C) ---
            const _housePsicol = houseData.psicologico
                ? houseData.psicologico.charAt(0).toUpperCase() + houseData.psicologico.slice(1) + '.'
                : '';
            const _lordClimaCruce = lordData.clima_psicologico
                ? ` ${lord} aporta un tono ${lordData.clima_psicologico.toLowerCase()} a todo lo que toques aquí.`
                : '';
            const _cruceBase = lordNatal.active
                ? `Tu ${lord} ${lordNatalPhrase} conecta directamente con este escenario.`
                : `${lord} activa este escenario como Señor del Año.`;

            const conexionAnual = {
                casa: profHouse,
                nombre: houseData.nombre || `Casa ${profHouse}`,
                area: houseData.area || 'Enfoque mensual',
                psicologico: houseData.psicologico || '',
                cruce: `${_cruceBase} ${_housePsicol}${_lordClimaCruce}`.trim()
            };

            // --- [E] Cómo atravesarlo (D.4.5-B) ---
            const proximoHito = hitos.find(h => !h.esPasado);
            const _lordActionMap = {
                'Saturno':  'define prioridades claras y trabaja en una sola dirección',
                'Júpiter':  'abre las puertas que encajan con tu visión actual, descarta el resto',
                'Marte':    'decide con claridad antes de lanzarte, luego ve a fondo',
                'Venus':    'cuida los vínculos que alimentan tu proceso y suelta el desgaste',
                'Mercurio': 'revisa lo que dejaste pendiente y ajusta antes de avanzar',
                'Sol':      'identifica dónde está tu aportación real y exponla sin dudar',
                'Luna':     'presta atención a lo que tu cuerpo y emociones señalan antes de actuar'
            };
            const _lordAction = _lordActionMap[lord] || 'avanza con atención al ciclo';
            const _houseArea  = houseData.area || 'tu escenario del año';
            const _conceptoPrimero = estrategia.concepto.split('.')[0];
            let atravStr;
            if (proximoHito) {
                const hDate = new Date(proximoHito.fullDate || proximoHito.date);
                const dayLabel = hDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
                atravStr = `${_conceptoPrimero}. En ${_houseArea}: ${_lordAction}. Próximo punto de inflexión: ${dayLabel}.`;
            } else {
                atravStr = `${_conceptoPrimero}. En ${_houseArea}: ${_lordAction}. El ciclo avanza aunque no haya eventos pendientes.`;
            }
            const atravesar = atravStr;

            // --- CAPA PREMIUM OCULTA ---
            // 🔒 NO ACTIVAR — Arquitectura preparada para activación futura
            const monthlySignals = {
                enabled: Boolean(lordNatal?.active),
                ventanas_clave:         { active: false, narrative: '' },
                activaciones_personales: { active: false, narrative: '' },
                coincidencias_fuertes:  { active: false, narrative: '' }
            };

            // --- NARRATIVA MAESTRA (D.4.3-B) ---
            const MONTH_HOUSE_AREAS = {
                1: 'identidad, decisiones propias e imagen',
                2: 'dinero, recursos y valor personal',
                3: 'comunicación, entorno cercano e ideas',
                4: 'hogar, base emocional y familia',
                5: 'creatividad, deseo y expresión',
                6: 'trabajo diario, salud y hábitos',
                7: 'relaciones, acuerdos y vínculos',
                8: 'procesos profundos, legados y finanzas compartidas',
                9: 'expansión, creencias y sentido de vida',
                10: 'carrera, estatus y visibilidad pública',
                11: 'grupos, proyectos futuros y amistades',
                12: 'introspección, cierres y mundo interno'
            };

            const area = MONTH_HOUSE_AREAS[profHouse] || 'tu desarrollo personal';
            const title = `Casa ${profHouse} · Ciclo de ${lord}`;
            const subtitle = `Proceso en ${profSign}`;
            const mainConcept = `Este mes activa ${area}. ${lord} marca la forma de actuar dentro de ese proceso.`;

            const content = {
                title: title,
                subtitle: subtitle,
                mainConcept: mainConcept,
                clima_frase: climaFrase,
                lord: lord,
                lunations:    hotspots.lunations || [],
                solar_ingress: hotspots.solar_ingress || null,
                ingresses:    hotspots.operational_ingresses || [],
                hitos: hitos,
                next_hitos: nextHitos,          // D.4.4-E1
                conexion_anual: conexionAnual,
                como_atravesar: atravesar,
                // D.5.1 semantic contract transition
                // Legacy split()-based parsing kept temporarily for backward compatibility.
                // Remove after D.5.3 stabilization.
                // Future: group under content.monthly_semantic = { navegacion_base, foco_accion, psicologico_frase }
                navegacion_base:   _conceptoPrimero,
                foco_accion:       _lordAction,
                psicologico_frase: (() => {
                    const raw = houseData.psicologico || '';
                    return (raw.split(/\.\s+/)[0] || raw).replace(/[.!?]+$/, '').trim();
                })(),
                verbo: estrategia.accion || 'Navegar',
                concept: estrategia.concepto
            };

            const endTime = performance.now();
            return this.buildOutput(content, 'monthly', (endTime - startTime).toFixed(2));

        } catch (error) {
            console.error('[KAIROS INTERPRETER] ❌ Error en lectura mensual:', error);
            throw error;
        }
    },

    /**
     * Construye los hitos del mes con sujeto claro, texto de biblioteca y distinción pasado/futuro.
     */
    buildMonthlyHitos(hotspots, fasesDoc, signos, lord, estrategia, houseData, today, lordData, natalPlanets = {}) { // D.4.7
        const hitos = [];
        const todayNoTime = new Date(today);
        todayNoTime.setHours(0,0,0,0);

        // Lunaciones
        (hotspots.lunations || []).forEach(l => {
            const lDate = new Date(l.date);
            const esPasado = lDate < todayNoTime;
            const isNew = l.type === 'NEW';
            const faseKey = isNew ? 'LUNA_NUEVA' : 'LUNA_LLENA';
            const faseData = fasesDoc[faseKey] || {};
            const signData = signos[(l.sign || '').toUpperCase()] || {};

            const favorable = (faseData.favorables || [])[0] || (isNew ? 'iniciar' : 'evaluar');
            const riesgo    = faseData.riesgos || '';
            const psicol    = faseData.psicologico || (isNew ? 'intuición' : 'intensidad');
            const naturSig  = signData.naturaleza || l.sign;

            const textoBase = isNew
                ? `La Luna Nueva en ${l.sign} invita a ${favorable} desde ${naturSig}. Buen momento para fijar intenciones sin exigirte resultados inmediatos.`
                : `La Luna Llena en ${l.sign} trae ${psicol} — ${naturSig}. Lo que estaba latente busca salida.${ riesgo ? ` Ojo: tendencia a la ${riesgo}.` : '' }`;

            hitos.push({
                tipo: isNew ? 'LUNA_NUEVA' : 'LUNA_LLENA',
                label: isNew ? 'Luna Nueva' : 'Luna Llena',
                dateLabel: l.dateLabel || 'Fecha',
                date: l.date,
                fullDate: l.date,
                planet: 'Luna',
                sign: l.sign,
                texto: textoBase,
                shortText: isNew
                    ? `intención · nuevo comienzo · ${l.sign}`
                    : `intensidad · culminación · ${l.sign}`,
                esPasado: esPasado,
                intensity: isNew ? 0.8 : 1.0
            });
        });

        // Ingreso solar
        if (hotspots.solar_ingress) {
            const sDate = new Date(hotspots.solar_ingress.date);
            const esPasado = sDate < todayNoTime;
            const sig = hotspots.solar_ingress.sign;
            const signData = signos[(sig || '').toUpperCase()] || {};
            hitos.push({
                tipo: 'SOLAR',
                label: 'Ingreso Solar',
                dateLabel: hotspots.solar_ingress.dateLabel || 'Fecha',
                date: hotspots.solar_ingress.date,
                fullDate: hotspots.solar_ingress.date,
                planet: 'Sol',
                sign: sig,
                texto: `El Sol entra en ${sig} — ${signData.naturaleza || sig}. Con la guía de ${lord}, este tránsito define tu centro mensual.`,
                shortText: signData.naturaleza || sig,
                esPasado: esPasado,
                intensity: 0.8
            });
        }

        // Ingresos operativos
        (hotspots.operational_ingresses || []).forEach(ing => {
            const iDate = new Date(ing.date);
            const esPasado = iDate < todayNoTime;
            const signData = signos[(ing.sign || '').toUpperCase()] || {};
            const interp = this.interpretIngress(ing.planet, ing.sign, lord, signData, houseData, lordData, natalPlanets); // D.4.7
            
            hitos.push({
                tipo: 'INGRESO',
                label: `${ing.planet}`,
                dateLabel: ing.dateLabel || 'Fecha',
                date: ing.date,
                fullDate: ing.date,
                planet: ing.planet,
                sign: ing.sign,
                texto: interp || `${ing.planet} entra en ${ing.sign}.`,
                shortText: `${(signData.motivaciones || [])[0] || ing.planet} · ${ing.sign}`,
                esPasado: esPasado,
                intensity: 0.6
            });
        });

        // --- DEDUPLICACIÓN (Evitar eventos el mismo día para el mismo planeta/tipo) ---
        const seen = new Set();
        const cleanHitos = hitos.filter(h => {
             const d = new Date(h.date);
             const dayKey = `${h.tipo}-${h.planet}-${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
             if (seen.has(dayKey)) return false;
             seen.add(dayKey);
             return true;
        });

        // Ordenar cronológicamente
        return cleanHitos.sort((a, b) => new Date(a.date) - new Date(b.date));
    },

    /**
     * Genera texto interpretativo personalizado para un ingreso planetario.
     */
    // D.4.4-F1: interpretIngress enriquecido con houseData.area, lordData.accion y signo real
    interpretIngress(planet, sign, lord, signData, houseData, lordData, natalPlanets = {}) { // D.4.7
        const naturSign = signData.naturaleza || sign;
        const motivacion = (signData.motivaciones || [])[0] || 'profundidad';
        const houseArea = houseData.area || 'tu desarrollo personal';
        const lordAccion = (lordData.accion || lord).toLowerCase();

        const nucleos = {
            'Venus':    `Venus entra en ${sign} — ${naturSign}. El vínculo y el valor se impregnan de ${motivacion}.`,
            'Marte':    `Marte entra en ${sign} — ${naturSign}. La acción se tiñe de ${motivacion}.`,
            'Mercurio': `Mercurio entra en ${sign} — ${naturSign}. La mente y la comunicación toman tono de ${motivacion}.`,
            'Sol':      `El Sol entra en ${sign} — ${naturSign}. El foco interior y colectivo se orienta hacia ${motivacion}.`
        };

        let texto = nucleos[planet] || `${planet} entra en ${sign} — ${naturSign}.`;

        texto += ` En tu ciclo de ${houseArea}, este movimiento toca directamente lo que estás desarrollando este año.`;

        if (lord === planet) {
            texto += ` Al ser ${lord} tu Señor del Año, este ingreso es el pulso más importante del mes: define el tono de tu acción durante las próximas semanas.`;
        } else if (planet === 'Venus' && (lord === 'Marte' || lord === 'Saturno')) {
            texto += ` Bajo un año de ${lord}, Venus aporta equilibrio: estrategia con valor, no solo impulso.`;
        } else if (planet === 'Marte' && (lord === 'Venus' || lord === 'Luna')) {
            texto += ` Bajo un año de ${lord}, Marte activa y protege lo que valoras. Es momento de mover ficha con claridad.`;
        } else {
            texto += ` Con ${lord} guiando tu año desde ${lordAccion}, observa cómo este ingreso amplía o contrasta tu dirección.`;
        }

        // D.4.7 — Resonancia natal FREE (1 línea)
        const _natalInSign = Object.entries(natalPlanets)
            .filter(([pName, pData]) => pData?.sign === sign);
        if (_natalInSign.length > 0) {
            const [_pName] = _natalInSign[0];
            texto += ` Al tocar tu ${_pName} natal en ${sign}, este tránsito se siente más personal.`;
        }

        return texto;
    },

    /**
     * Cruza el Señor del Año con los hitos del mes.
     */
    calculateMonthlyStrategy(lord, hotspots) {
        const strategyMap = {
            'Saturno':  { verbo: 'Cimentar',  accion: 'Cimentar', concepto: 'Este mes pide consolidar antes de avanzar. La estructura protege contra los vaivenes del ciclo.' },
            'Júpiter':  { verbo: 'Expandir',  accion: 'Expandir', concepto: 'Los cambios de este mes abren puertas. Aprovecha las aperturas para crecer sin forzar el ritmo.' },
            'Marte':    { verbo: 'Activar',   accion: 'Activar',  concepto: 'Los momentos de intensidad este mes son tus aliados. Actúa cuando el cielo lo pida, no antes.' },
            'Venus':    { verbo: 'Vincular',  accion: 'Vincular', concepto: 'Los hitos del mes se atraviesan mejor desde la conexión. Cultiva tu red antes de los giros fuertes.' },
            'Mercurio': { verbo: 'Analizar',  accion: 'Analizar', concepto: 'Este mes pide claridad antes que velocidad. Revisa, ajusta y comunica con precisión en cada cambio.' },
            'Sol':      { verbo: 'Liderar',   accion: 'Liderar',  concepto: 'Mantén el foco en lo que importa. Los giros del mes son secundarios a tu propósito central.' },
            'Luna':     { verbo: 'Nutrir',    accion: 'Nutrir',   concepto: 'Atiende tu pulso emocional en cada hito del mes. La fuerza viene de dentro, no del calendario.' }
        };
        const res = strategyMap[lord] || { verbo: 'Navegar', accion: 'Navegar', concepto: 'Sigue el flujo del ciclo con atención a los cambios de tono.' };
        return res;
    },

    /**
     * Genera una micro-introducción dinámica que explica el "porqué" de los recursos.
     * Formato: "Hoy [planeta/contexto] está marcando tu día. Esto puede hacer que [efecto humano]. Por eso, te ayudará [acción clara]."
     */
    calculateMatrixIntro(lord, targetNeed, context) {
        const contexts = {
            'calmar': { effect: 'te sientas con más presión o exigencia propia', action: 'bajar el ritmo y buscar tranquilidad antes de decidir' },
            'activar': { effect: 'sientas estancamiento o falta de impulso', action: 'activar tu capacidad de acción y ponerte en movimiento' },
            'enfocar': { effect: 'tengas demasiados frentes abiertos a la vez', action: 'ordenar tus prioridades y dar un paso concreto' },
            'expandir': { effect: 'sientas una gran apertura y ganas de crecer', action: 'aprovechar las oportunidades con visión amplia y confianza' },
            'descargar': { effect: 'acumules demasiada tensión física', action: 'liberar el peso acumulado y recuperar ligereza' },
            'descansar': { effect: 'arrastres cansancio físico o mental', action: 'hacer una pausa real y recuperar tu centro' }
        };

        const moonTone = {
            'Aries': { tone: 'decisión e impulso', effect: 'estés con una impaciencia más alta o ganas de arrancar algo nuevo' },
            'Tauro': { tone: 'estabilidad y confort', effect: 'busques más seguridad, placer o calma física' },
            'Géminis': { tone: 'curiosidad e intercambio', effect: 'tengas la mente más dispersa o con ganas de nuevas ideas' },
            'Cáncer': { tone: 'protección y sensibilidad', effect: 'estés con una sensibilidad más alta y necesites cuidarte más' },
            'Leo': { tone: 'expresión y autoafirmación', effect: 'sientas la necesidad de mostrarte, crear o simplemente disfrutar' },
            'Virgo': { tone: 'orden y practicidad', effect: 'te enfoques más en la limpieza, el detalle o la utilidad de lo que haces' },
            'Libra': { tone: 'armonía y vínculos', effect: 'busques puntos medios con los demás o belleza en tu entorno' },
            'Escorpio': { tone: 'profundidad e introspección', effect: 'vivas las emociones con mucha intensidad o ganas de ir al fondo' },
            'Sagitario': { tone: 'apertura y optimismo', effect: 'desees aventura, movimiento o una visión más libre' },
            'Capricornio': { tone: 'realismo y disciplina', effect: 'te sientas con más seriedad, foco en tus metas o sobriedad' },
            'Acuario': { tone: 'originalidad y red', effect: 'busques conectar con ideas diferentes o con tu grupo' },
            'Piscis': { tone: 'intuición y entrega', effect: 'estés más soñador, permeable o con ganas de fluir' }
        };

        const ctx = contexts[targetNeed] || { effect: 'sientas falta de dirección', action: 'ajustar tu enfoque hoy' };
        const moonSign = context.temporal_context?.moon_sign
                      || context.transit_context?.moon_transit_sign
                      || 'Aries';
        const moonCtx = moonTone[moonSign] || { tone: 'cambio', effect: 'sientas el peso de lo imprevisto' };
        
        const lordPart = lord === 'Sol' ? 'el propósito central' : (lord === 'Júpiter' ? 'la oportunidad de crecer' : lord);
        
        return `Hoy puedes notar que ${lordPart} marca el ritmo de lo que te rodea. Es posible que ${ctx.effect}. Además, al estar en un momento de ${moonCtx.tone}, puede que ${moonCtx.effect}. Por eso, hoy te ayudará ${ctx.action}.`;
    },

    /**
     * Mapeo de Lord y Luna a una Necesidad Humana (calmar, activar, enfocar, descargar, descansar).
     */
    calculateTargetNeed(lord, moonHouse) {
        if (lord === 'Saturno' || moonHouse === 4 || moonHouse === 12) return 'calmar';
        if (lord === 'Marte' || moonHouse === 1 || moonHouse === 8) return 'activar';
        if (lord === 'Mercurio' || moonHouse === 3 || moonHouse === 6) return 'enfocar';
        if (lord === 'Júpiter' || moonHouse === 9) return 'expandir';
        if (lord === 'Luna' || moonHouse === 2 || moonHouse === 12) return 'descargar';
        if (lord === 'Sol' || moonHouse === 5 || moonHouse === 10) return 'enfocar';
        return 'calmar';
    },

    /**
     * Orquestador de integración MATRIX.
     * Cruza Año, Mes, Semana y Hoy para generar el Toolkit Práctico.
     */
    async generateMatrixReading(context) {
        const startTime = performance.now();
        const docIds = [
            '303_senor_del_ano_por_planeta',
            '220_significado_casas',
            '210_significado_signos'
        ];

        try {
            const docs = await this.fetchDocumentsFromLibrary(docIds);
            this.last_status = "OK";

            const lord = context.annual_context?.lord_of_year || 'Sol';
            const lordData = docs['303_senor_del_ano_por_planeta']?.contenido?.planetas?.[lord] || {};
            const moonHouse = context.transit_context?.moon_transit_house || 1;
            const houseData = docs['220_significado_casas']?.contenido?.catalogo?.[String(moonHouse)] || {};
            
            // 1. Directriz Integrada (Cruzando Año y Luna de Hoy)
            const directriz = this.calculateMatrixDirective(lord, moonHouse);

            // 2. Micro-Prácticas (Toolkit Resolutivo)
            const targetNeed = this.calculateTargetNeed(lord, moonHouse);
            const rawToolkit = window.matrix_engine.getMatrixCombination({ targetNeed });
            
            const toolkit = {
                cuerpo: this.generateBodyPractice(lord, context.temporal_context?.day_planet, rawToolkit.cuerpo),
                mente: this.generateMindPractice(context.weekly_context?.verb || 'Navigare', moonHouse, rawToolkit.mente),
                energia: this.generateEnergyPractice(lord, context.temporal_context?.moon_phase || 'Nueva', rawToolkit.energia)
            };

            // 3. Semáforo de Intensidad Unificado
            const intensidad = this.calculateIntegratedIntensity(context);

            const content = {
                mastery: directriz.titulo,
                directive: directriz.frase,
                micro_intro: this.calculateMatrixIntro(lord, targetNeed, context),
                target_need: targetNeed,
                body: toolkit.cuerpo,
                mind: toolkit.mente,
                spirit: toolkit.energia,
                // Pasamos los objetos crudos para el renderMatrixCard de la UI
                body_obj: rawToolkit.cuerpo,
                mind_obj: rawToolkit.mente,
                spirit_obj: rawToolkit.energia,
                intensity_status: intensidad,
                lord_name: lord,
                profection_context: `Tu ${houseData.nombre || 'centro'} está activo este año.`
            };

            const endTime = performance.now();
            return this.buildOutput(content, 'matrix', (endTime - startTime).toFixed(2));

        } catch (error) {
            console.error("[KAIROS INTERPRETER] ❌ Error en lectura Matrix:", error);
            throw error;
        }
    },

    /**
     * Genera la directriz de mando del día integrando escalas.
     */
    calculateMatrixDirective(lord, moonHouse) {
        const humanSubtitles = {
            'Saturno': "Hoy te ayuda bajar el ritmo y recuperar estructura.",
            'Marte': "Tu momento pide acción enfocada y determinación.",
            'Júpiter': "El día invita a ampliar tu visión y conectar con nuevas oportunidades.",
            'Venus': "Prioriza el valor propio y busca armonía en lo cotidiano.",
            'Mercurio': "Tu momento pide foco, claridad y una acción concreta.",
            'Sol': "Hoy te conviene brillar desde tu centro y simplificar.",
            'Luna': "Hoy es buen día para escuchar tu intuición y bajar la guardia."
        };
        return {
            titulo: "LO QUE TU MOMENTO NECESITA",
            frase: humanSubtitles[lord] || "Hoy te conviene ordenar tu energía y hacer menos, pero mejor."
        };
    },

    /**
     * Micro-práctica para el CUERPO.
     */
    generateBodyPractice(lord, dayPlanet, practice) {
        const p = practice || (window.matrix_engine?.MATRIX_LIBRARY_SAMPLE["810"] ? window.matrix_engine.MATRIX_LIBRARY_SAMPLE["810"][0] : null);
        if (p) {
            // Transformación humana: [Acción clara] durante [duración] para [efecto]
            return `${p.accion} durante ${p.duracion} para ${p.efecto.toLowerCase()}.`;
        }
        return "Realiza estiramientos suaves durante 5 minutos para liberar tensión.";
    },

    /**
     * Micro-práctica para la MENTE.
     */
    generateMindPractice(weeklyVerb, moonHouse, practice) {
        const p = practice || (window.matrix_engine?.MATRIX_LIBRARY_SAMPLE["820"] ? window.matrix_engine.MATRIX_LIBRARY_SAMPLE["820"][0] : null);
        if (p) {
            return `${p.accion} durante ${p.duracion} para ${p.efecto.toLowerCase()}.`;
        }
        return `Dedica un momento a tu foco semanal "${weeklyVerb}" para ganar claridad hoy.`;
    },

    /**
     * Micro-práctica para la ENERGÍA / REGULACIÓN INTERNA.
     */
    generateEnergyPractice(lord, moonPhase, practice) {
        const p = practice || (window.matrix_engine?.MATRIX_LIBRARY_SAMPLE["870"] ? window.matrix_engine.MATRIX_LIBRARY_SAMPLE["870"][0] : null);
        if (p) {
            return `${p.accion} durante ${p.duracion} para ${p.efecto.toLowerCase()}.`;
        }
        return "Dedica 3 minutos a observar tu respiración sin juicios para calmar tu sistema.";
    },

    /**
     * Calcula intensidad cruzando escalas.
     */
    calculateIntegratedIntensity(context) {
        const lord = context.annual_context?.lord_of_year || 'Sol';
        const dayPlanet = context.temporal_context?.day_planet || 'Sol';
        
        // Simulación de matriz de tensión (simplificada)
        const tensionPlanets = ['Marte', 'Saturno'];
        let baseScore = 30;
        
        if (tensionPlanets.includes(lord) && tensionPlanets.includes(dayPlanet)) baseScore += 40;
        else if (tensionPlanets.includes(lord) || tensionPlanets.includes(dayPlanet)) baseScore += 20;
        
        // Bonus por criticidad semanal
        if (context.weekly_context?.is_critical) baseScore += 30;
        
        if (baseScore >= 70) return 'Activación';
        if (baseScore >= 45) return 'Moderada';
        return 'Estable';
    },

    /**
     * Empaquetador final.
     */
    buildOutput(content, view, latency) {
        return {
            metadata: {
                view: view,
                engine: 'kairos_interpreter_v0.5.2',
                timestamp: new Date().toISOString(),
                latency_ms: latency,
                status: this.last_status === "OK" ? 'INTERPRETATION_READY' : 'PARTIAL_READY'
            },
            content: content
        };
    }
};

if (typeof module !== 'undefined') {
    module.exports = interpreter_engine;
}
window.interpreter_engine = interpreter_engine;
console.log("[KAIROS SHADOW] interpreter_engine.js v0.5.2 (Final Normalization) LOADED");
