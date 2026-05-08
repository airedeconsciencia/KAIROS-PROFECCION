import urllib.request
import urllib.error
import json
import os

PROJECT_ID = "kairos-eng-714ee"
COLLECTION = "kairos_library"
BASE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents/{COLLECTION}"

def get_access_token():
    try:
        config_path = os.path.expanduser('~/.config/configstore/firebase-tools.json')
        with open(config_path, 'r') as f:
            data = json.load(f)
            return data.get('tokens', {}).get('access_token')
    except Exception as e:
        print(f"Error loading Firebase token: {e}")
        return None

def ingest_document(doc_id, data, token):
    url = f"{BASE_URL}/{doc_id}"
    
    firestore_data = {"fields": {}}
    for key, value in data.items():
        if isinstance(value, str):
            firestore_data["fields"][key] = {"stringValue": value}
        elif isinstance(value, dict) or isinstance(value, list):
            firestore_data["fields"][key] = {"stringValue": json.dumps(value, ensure_ascii=False)}

    json_payload = json.dumps(firestore_data).encode('utf-8')
    
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    try:
        req = urllib.request.Request(url, data=json_payload, headers=headers, method='PATCH')
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                print(f"✅ Documento {doc_id} ingerido correctamente.")
            else:
                print(f"⚠️ Doc {doc_id} HTTP Status: {response.status}")
    except urllib.error.HTTPError as e:
        print(f"❌ Error al ingerir {doc_id}: {e.code} - {e.reason}")
        error_body = e.read().decode('utf-8')
        print(error_body)

def get_serie_600_data():
    return {
        "601_significado_de_la_carta_natal_en_kairos": {
            "codigo": "601_significado_de_la_carta_natal_en_kairos",
            "serie": "600",
            "titulo": "Significado de la carta natal en el sistema KAIROS",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir el papel de la carta natal como núcleo estructural del sistema interpretativo KAIROS, estableciendo cómo funciona como matriz base para personalizar todas las lecturas generadas por la aplicación.",
            "contenido": {
                "alcance": {
                    "incluye": [
                        "definición conceptual de la carta natal dentro de KAIROS",
                        "estructura básica de la matriz natal",
                        "su función como filtro interpretativo",
                        "su relación con ciclos temporales"
                    ],
                    "no_incluye": [
                        "interpretación detallada de planetas natales",
                        "interpretación detallada de signos o casas",
                        "interpretación de aspectos natales"
                    ]
                },
                "definiciones_clave": {
                    "carta_natal": "Mapa astrológico calculado para el momento exacto del nacimiento que describe la estructura energética y psicológica básica del individuo.",
                    "matriz_natal": "Configuración permanente de planetas, signos y casas que define el marco interpretativo base del usuario dentro del sistema.",
                    "promesa_natal": "Principio interpretativo según el cual los eventos o experiencias activadas por ciclos temporales deben estar previamente representados en la carta natal.",
                    "filtro_interpretativo": "Mecanismo mediante el cual el sistema adapta cualquier evento astrológico general a la estructura específica de la carta del usuario.",
                    "arquitectura_natal": "Conjunto de relaciones estructurales dentro de la carta natal que organizan las funciones psicológicas, las áreas de experiencia y los estilos energéticos del individuo."
                },
                "logica_estructural": {
                    "naturaleza_en_kairos": "La carta natal es la matriz fundamental y el punto fijo desde el cual se interpreta el movimiento del tiempo.",
                    "niveles_matriz": ["Planetas (funciones)", "Signos (estilos)", "Casas (áreas de experiencia)"],
                    "principio_promesa_natal": "Los ciclos no crean experiencias nuevas, activan potenciales existentes. Ninguna interpretación temporal se genera sin cruzarla previamente con la matriz natal.",
                    "funcion_filtro": "Transforma eventos generales en lecturas adaptadas a la estructura específica del usuario."
                },
                "interaccion_con_ciclos": [
                    "Tránsitos: se interpretan en relación con los planetas natales.",
                    "Profecciones: cálculo de casa y Señor del Año se basa en carta natal.",
                    "Ciclos lunares: adquieren significado al interactuar con puntos natales.",
                    "Planeta del día: se interpreta según resuena con la estructura natal."
                ],
                "reglas_de_uso": [
                    "Toda interpretación debe basarse en la carta natal.",
                    "Eventos generales deben filtrarse por la matriz natal.",
                    "Ciclos deben relacionarse con posición natal, casas implicadas y estructura general.",
                    "Evitar interpretaciones universalistas."
                ]
            }
        },
        "602_planetas_natales_como_base_del_usuario": {
            "codigo": "602_planetas_natales_como_base_del_usuario",
            "serie": "600",
            "titulo": "Planetas natales como base psicológica del usuario",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir el papel de los planetas natales como funciones psicológicas fundamentales del individuo dentro del sistema interpretativo de KAIROS.",
            "contenido": {
                "alcance": {
                    "incluye": [
                        "definición conceptual de los planetas natales",
                        "su función psicológica dentro de la carta natal",
                        "su activación a través de ciclos temporales",
                        "su papel dentro del motor interpretativo del sistema"
                    ],
                    "no_incluye": [
                        "interpretación detallada de cada planeta en signos o casas",
                        "interpretación de aspectos natales",
                        "interpretación específica de tránsitos planetarios"
                    ]
                },
                "definiciones_clave": {
                    "planetas_natales": "Posiciones planetarias en el momento exacto del nacimiento.",
                    "funcion_psicologica_planetaria": "Principio arquetípico que describe una capacidad o necesidad fundamental.",
                    "nucleo_psicologico": "Conjunto de funciones que estructuran la identidad interna.",
                    "activacion_planetaria": "Proceso mediante el cual un planeta natal se vuelve relevante por un ciclo temporal.",
                    "matriz_planetaria_natal": "Base estructural del mapa psicológico del individuo."
                },
                "logica_estructural": {
                    "matriz_identidad": "Perfil energético base del usuario formado por la interacción dinámica de todos los planetas natales.",
                    "activacion_temporal": "Las funciones psicológicas se activan y visibilizan mediante tránsitos, profecciones, fases lunares y regentes diarios."
                },
                "uso_en_kairos": [
                    "Filtro de relevancia interpretativa.",
                    "Personalización de lectura.",
                    "Organización del proceso evolutivo.",
                    "Contextualización de tránsitos."
                ],
                "reglas_de_uso": [
                    "Son el nivel más estable del sistema interpretativo.",
                    "Toda interpretación temporal debe evaluarse en relación con ellos.",
                    "Tránsitos no deben interpretarse aisladamente de los planetas natales.",
                    "Traducir las funciones en lenguaje aplicable y comprensible."
                ]
            }
        },
        "603_signos_natales_como_estilo_de_base": {
            "codigo": "603_signos_natales_como_estilo_de_base",
            "serie": "600",
            "titulo": "Signos natales como estilo de expresión de base",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir el papel de los signos zodiacales como estilo de expresión de las funciones planetarias dentro de la carta natal.",
            "contenido": {
                "alcance": {
                    "incluye": [
                        "definición conceptual de los signos zodiacales",
                        "su papel como estilos psicológicos",
                        "su influencia sobre la expresión de planetas",
                        "su interacción con ciclos temporales y uso en KAIROS"
                    ],
                    "no_incluye": [
                        "interpretaciones detalladas de cada signo",
                        "combinaciones planeta-signo",
                        "tránsitos por signo"
                    ]
                },
                "definiciones_clave": {
                    "signos_zodiacales": "Sectores simbólicos que representan diferentes estilos energéticos.",
                    "estilo_psicologico": "Forma característica en que se manifiesta una función.",
                    "modulacion_planetaria": "Modificación de la expresión planetaria por el signo.",
                    "clima_psicologico_natal": "Tono general del funcionamiento psicológico.",
                    "contexto_zodiacal": "Marco energético en el que se desarrollan los ciclos."
                },
                "logica_estructural": {
                    "relacion_planeta_signo": "Planeta = función psicológica; Signo = estilo de expresión de esa función.",
                    "modulacion": "El signo modifica la velocidad, reacción, tono emocional y modo de interactuar de la función.",
                    "clima_permanente": "Preferencias y patrones de reacción estables a lo largo de la vida."
                },
                "reglas_de_uso": [
                    "Interpretar signos siempre en relación con los planetas que ocupan.",
                    "Toda activación temporal debe considerar el signo del planeta implicado.",
                    "Usar signos como moduladores cualitativos y de estilo en las salidas narrativas."
                ]
            }
        },
        "604_casas_natales_como_escenarios_de_base": {
            "codigo": "604_casas_natales_como_escenarios_de_base",
            "serie": "600",
            "titulo": "Casas natales como escenarios de experiencia de base",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir el papel de las casas astrológicas como escenarios de experiencia dentro de la carta natal y cómo KAIROS las utiliza para contextualizar interpretaciones.",
            "contenido": {
                "alcance": {
                    "incluye": [
                        "definición conceptual de casas",
                        "papel como escenarios de experiencia",
                        "relación con planetas y signos",
                        "activación temporal y uso en KAIROS"
                    ],
                    "no_incluye": [
                        "descripción de las 12 casas",
                        "planetas específicos en casas",
                        "tránsitos por casa"
                    ]
                },
                "definiciones_clave": {
                    "escenario_de_experiencia": "Ámbito vital donde se manifiestan las funciones psicológicas.",
                    "contexto_de_manifestacion": "Marco situacional en la vida cotidiana.",
                    "activacion_de_casas": "Proceso por el que un área adquiere protagonismo mediante ciclos."
                },
                "logica_estructural": {
                    "formula_interpretativa": "Planeta (qué) -> Signo (cómo) -> Casa (dónde).",
                    "estructuracion": "Las casas con mayor presencia planetaria indican escenarios importantes de desarrollo."
                },
                "reglas_de_uso": [
                    "Interpretar casas siempre en relación a los planetas y signos presentes.",
                    "Contextualizar activaciones temporales mediante la casa correspondiente.",
                    "Traducir interpretaciones simbólicas en escenarios concretos de vida."
                ]
            }
        },
        "605_aspectos_natales_como_patrones_de_fondo": {
            "codigo": "605_aspectos_natales_como_patrones_de_fondo",
            "serie": "600",
            "titulo": "Aspectos natales como patrones de relación psicológica",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir el papel de los aspectos natales como patrones de relación entre funciones psicológicas.",
            "contenido": {
                "alcance": {
                    "incluye": [
                        "definición de aspectos planetarios",
                        "papel como relaciones dinámicas",
                        "patrones internos y reacción a ciclos"
                    ],
                    "no_incluye": [
                        "interpretación específica de aspectos",
                        "orbes",
                        "aspectos de tránsito"
                    ]
                },
                "definiciones_clave": {
                    "aspectos_planetarios": "Relaciones angulares que describen interacciones entre funciones psicológicas.",
                    "patron_psicologico": "Configuración estable que influye en la reacción habitual a la experiencia.",
                    "red_de_aspectos": "Entramado interno de conexiones psicológicas."
                },
                "dinamicas_planetarias": [
                    "Integración: Operación conjunta.",
                    "Armonía: Cooperación natural y fluidez.",
                    "Tensión: Fricción interna e impulso de equilibrio.",
                    "Desafío evolutivo: Esfuerzo consciente para integrar energías."
                ],
                "reglas_de_uso": [
                    "Interpretar siempre como relaciones funcionales.",
                    "Evitar interpretar planetas sin considerar sus aspectos.",
                    "Evaluar la red del planeta natal implicado durante activaciones temporales."
                ]
            }
        },
        "606_dignidad_natal_y_fuerza_del_planeta": {
            "codigo": "606_dignidad_natal_y_fuerza_del_planeta",
            "serie": "600",
            "titulo": "Dignidad natal y capacidad operativa de los planetas",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir la dignidad natal como indicador de capacidad operativa y afinidad de los planetas dentro de la carta natal.",
            "contenido": {
                "alcance": {
                    "incluye": [
                        "definición de dignidad",
                        "relación planeta-signo",
                        "evaluación de la capacidad operativa",
                        "influencia psicológica y uso en KAIROS"
                    ]
                },
                "definiciones_clave": {
                    "dignidad_planetaria": "Grado de afinidad entre un planeta y el signo donde se encuentra.",
                    "capacidad_operativa": "Facilidad con la que una función se expresa en la persona.",
                    "friccion_psicologica": "Tensión al expresar una función en un signo poco afín."
                },
                "estados_esenciales": [
                    "Domicilio (Alta afinidad, naturalidad)",
                    "Exaltación (Potenciación intensa)",
                    "Exilio o detrimento (Expresión en entorno disonante, requiere adaptación)",
                    "Caída (Mayor necesidad de desarrollo consciente)"
                ],
                "reglas_de_uso": [
                    "Dignidad es un indicador de afinidad energética, no un juicio de valor (evitar 'bueno' o 'malo').",
                    "Ajustar fluidez o complejidad en la interpretación de la función.",
                    "Planetas debilitados son áreas de aprendizaje, no destinos inamovibles."
                ]
            }
        },
        "607_relacion_entre_carta_natal_y_profeccion": {
            "codigo": "607_relacion_entre_carta_natal_y_profeccion",
            "serie": "600",
            "titulo": "Carta natal y activación anual mediante profecciones",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir cómo la técnica de profecciones anuales activa elementos de la carta natal dentro del sistema interpretativo KAIROS.",
            "contenido": {
                "mecanismo_activacion": {
                    "casa_activada": "El escenario principal del año.",
                    "planetas_en_casa": "Funciones que ganan protagonismo durante el ciclo.",
                    "senor_del_ano": "Planeta regente de la casa activada; indicador del tono psicológico anual."
                },
                "reglas_de_uso": [
                    "La carta natal es la base estructural del ciclo anual.",
                    "Identificar el Señor del Año buscando el regente de la casa activada y considerando su posición natal.",
                    "Priorizar eventos que relacionan la casa activada o su regente."
                ]
            }
        },
        "608_relacion_entre_carta_natal_y_transitos": {
            "codigo": "608_relacion_entre_carta_natal_y_transitos",
            "serie": "600",
            "titulo": "Carta natal y activación mediante tránsitos",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir cómo los tránsitos planetarios interactúan y activan elementos de la carta natal.",
            "contenido": {
                "filosofia_kairos": "El tránsito no crea desde cero una experiencia; activa, intensifica o visibiliza un potencial ya contenido en la matriz natal.",
                "capas_activacion": [
                    "Planetas (funciones psicológicas movilizadas)",
                    "Aspectos (patrones relacionales reactivados)",
                    "Casas (escenarios de vida afectados)"
                ],
                "reglas_de_uso": [
                    "Tránsitos no se usan como horóscopo general. Solo importan si activan puntos sensibles.",
                    "Orden interpretativo: tránsito (estímulo) -> planeta natal (función) -> aspecto natal (patrón) -> casa natal (escenario).",
                    "Traducir tránsitos como procesos de revisión o activación, evitar lenguaje determinista literal."
                ]
            }
        },
        "609_relacion_entre_carta_natal_y_salida_humana": {
            "codigo": "609_relacion_entre_carta_natal_y_salida_humana",
            "serie": "600",
            "titulo": "Transformación de la estructura natal en interpretación comprensible",
            "tipo": "Núcleo Personal",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir cómo los datos estructurales astrológicos se transforman en lenguaje humano útil y reflexivo.",
            "contenido": {
                "proceso_sintesis": "Planeta (función) + Signo (estilo) + Casa (escenario) + Aspectos (relaciones). KAIROS no lee esto aislado, sino integrado.",
                "principios_psicologicos": [
                    "Evitar determinismo y fatalismo.",
                    "Promover el autoconocimiento.",
                    "Mantener un equilibrio interpretativo entre el potencial y el desafío."
                ],
                "reglas_de_uso": [
                    "La interpretación debe partir siempre de la matriz del usuario.",
                    "Traducir términos técnicos a experiencias humanas corrientes.",
                    "No dramatizar tensiones ni sobre-idealizar armonías."
                ]
            }
        }
    }

def run_ingestion():
    print(f"--- Iniciando Ingestión LÓGICA de la SERIE 600 en {PROJECT_ID} ---")
    token = get_access_token()
    if not token:
        print("❌ Error: No se pudo obtener el token de Firebase.")
        return

    data = get_serie_600_data()
    
    success_count = 0
    for doc_id, doc_data in data.items():
        print(f"Ingiriendo {doc_id}...")
        ingest_document(doc_id, doc_data, token)
        success_count += 1
        
    print(f"--- Ingestión finalizada ---")

if __name__ == "__main__":
    run_ingestion()
