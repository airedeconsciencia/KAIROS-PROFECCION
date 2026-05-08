import json
import urllib.request
import urllib.error
import os

# Firebase Config
PROJECT_ID = "kairos-eng-714ee"
FIRESTORE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"
COLLECTION = "kairos_library"

# Load Firebase Token
def get_firebase_token():
    config_path = os.path.expanduser("~/.config/configstore/firebase-tools.json")
    try:
        with open(config_path, 'r') as f:
            data = json.load(f)
            return data.get('tokens', {}).get('access_token')
    except Exception as e:
        print(f"Error loading Firebase token: {e}")
        return None

TOKEN = get_firebase_token()
if not TOKEN:
    print("❌ No valid Firebase token found. Exiting.")
    exit(1)

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json"
}

# The Series 400 Content
DOCS_400 = [
    {
        "codigo": "401_sintesis_breve",
        "serie": "400",
        "titulo": "Síntesis interpretativa breve del momento",
        "tipo": "Formato de Salida Humana",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir el formato de síntesis interpretativa breve para comprensión rápida y clara del clima simbólico.",
        "contenido": {
            "principios": {
                "claridad": "Lenguaje simple y directo. Traducción de conceptos técnicos a lenguaje cotidiano.",
                "coherencia_ciclo": "Integración con la casa activada, Señor del Año y dinámica general.",
                "equilibrio": "Reflejar posibilidades y tensiones sin exagerar ni predecir de forma fatalista.",
                "reflexion": "Orientación que invite a observar la experiencia."
            },
            "estructura_generacion": {
                "1_contexto": "Breve descripción del clima simbólico general.",
                "2_dinamica": "Explicación sencilla del tipo de proceso activo.",
                "3_orientacion": "Reflexión breve para comprender/integrar la experiencia."
            }
        }
    },
    {
        "codigo": "402_advertencias",
        "serie": "400",
        "titulo": "Advertencias interpretativas y zonas de atención del ciclo",
        "tipo": "Formato de Salida Humana",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Ayudar al usuario a reconocer áreas del ciclo con fricciones o exigencias sin generar alarma.",
        "contenido": {
            "principios": {
                "no_alarmismo": "Evitar lenguaje fatalista o predicciones inevitables.",
                "contextualizacion": "Situar la tensión dentro del proceso general del usuario.",
                "orientacion_consciente": "Sugerir actitudes de prudencia, paciencia o reflexión.",
                "proporcionalidad": "No exagerar pequeñas tensiones."
            },
            "estructura_generacion": {
                "1_identificacion": "Descripción breve de la tensión.",
                "2_contexto": "Escenario donde puede manifestarse la fricción.",
                "3_orientacion": "Sugerencia de actitud consciente frente a la dinámica."
            }
        }
    },
    {
        "codigo": "403_acciones_recomendadas",
        "serie": "400",
        "titulo": "Acciones recomendadas para la integración consciente del ciclo",
        "tipo": "Formato de Salida Humana",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Traducir la interpretación astrológica en sugerencias prácticas.",
        "contenido": {
            "principios": {
                "libertad_personal": "No son instrucciones obligatorias; proponen posibilidades.",
                "coherencia": "Alineadas con la profección, el Señor del Año y la energía del momento.",
                "aplicabilidad": "Comprensibles y útiles para la cotidianidad.",
                "equilibrio": "Responsabilidad personal frente al símbolo."
            },
            "estructura_generacion": {
                "1_reconocimiento": "Referencia a la energía viva del momento.",
                "2_sugerencia": "Propuesta de actitud o enfoque sugerido.",
                "3_integracion": "Invitación a observar cómo se integra esa dinámica."
            }
        }
    },
    {
        "codigo": "404_preguntas_de_reflexion",
        "serie": "400",
        "titulo": "Preguntas de reflexión para la toma de conciencia del ciclo",
        "tipo": "Formato de Salida Humana",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Fomentar la autoexploración del usuario mediante preguntas abiertas alineadas a su ciclo.",
        "contenido": {
            "principios": {
                "apertura": "Múltiples posibles respuestas; no imponen interpretaciones.",
                "resonancia": "Surgen de las tensiones, energías o escenario del ciclo evaluado.",
                "respeto": "No presuponen hechos concretos, ni juzgan."
            },
            "estructura_generacion": {
                "observacion": "Reconocimiento de la experiencia actual (Ej: '¿En qué áreas sientes más movimiento?').",
                "comprension": "Exploración de significado (Ej: '¿Qué aprendizajes emergen?').",
                "orientacion": "Nuevas formas de relación (Ej: '¿Qué actitud te ayudaría hoy?')."
            }
        }
    },
    {
        "codigo": "405_lecturas_diarias",
        "serie": "400",
        "titulo": "Lecturas diarias del clima simbólico del momento",
        "tipo": "Formato de Salida Humana",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Ofrecer comprensión contextualizada del clima del día dentro del ciclo mayor.",
        "contenido": {
            "factores_integrados": ["ciclo anual", "casa profectada", "Señor del Año", "Luna en tránsito", "planeta regente del día"],
            "principios": {
                "coherencia_anual": "El marco del año contiene la modulación del día.",
                "modulacion_temporal": "Factores rápidos matizan el tono inmediato, no redefinen el ciclo.",
                "claridad": "Lenguaje humano, sin tecnicismo astrológico pesado."
            },
            "estructura_generacion": {
                "1_contexto": "Clima simbólico general guiado por el cielo del día.",
                "2_dinamica": "Energía activa o proceso favorecido.",
                "3_orientacion": "Reflexión hacia dónde llevar la energía hoy."
            }
        }
    },
    {
        "codigo": "407_lecturas_mensuales",
        "serie": "400",
        "titulo": "Lecturas mensuales del ciclo evolutivo",
        "tipo": "Formato de Salida Humana",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Observar el desarrollo del proceso vital marcando apertura, culminación o integración a la escala del mes.",
        "contenido": {
            "factores_integrados": ["casa profectada", "Señor del Año", "Sol actual", "fases lunares", "tránsitos mayores"],
            "principios": {
                "desarrollo_panoramico": "Ver evolución del ciclo a medio plazo.",
                "ritmo_lunar": "Momentos de inicio, clímax e integración dentro del mes.",
                "movimiento_solar": "El arquetipo que ilumina la conciencia general del periodo."
            },
            "estructura_generacion": {
                "1_contexto": "Movimiento solar y clima mensual.",
                "2_dinamica": "Procesos que se despliegan según fases o tránsitos.",
                "3_orientacion": "Observación del aprendizaje mensual continuo."
            }
        }
    },
    {
        "codigo": "408_matrix_cuerpo_mente_espiritu",
        "serie": "400",
        "titulo": "Matriz de integración cuerpo-mente-espíritu",
        "tipo": "Capa Terapéutica Integral",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Traducir información astrológica a tres niveles de experiencia humana directa.",
        "contenido": {
            "niveles": {
                "cuerpo": "Manifestación física: energía, descanso, hábitos (sin diagnóstico médico).",
                "mente": "Dimensión psicológica: emociones, decisiones, pensamientos.",
                "espiritu": "Dimensión existencial: sentido, dirección vital, propósito."
            },
            "principios": {
                "coherencia": "Un mismo tránsito resuena en los tres niveles de distintas formas.",
                "orientacion_practica": "Brindar claves de observación en cada esfera, no descripciones fatales."
            }
        }
    },
    {
        "codigo": "409_textos_para_nivel_de_energia",
        "serie": "400",
        "titulo": "Interpretación del nivel de energía del ciclo",
        "tipo": "Métrica Descriptiva",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Traducir los factores astrológicos a sensación del ritmo energético vital percibido.",
        "contenido": {
            "categorias_energeticas": {
                "expansiva": "Apertura, crecimiento, avance exterior.",
                "accion": "Impulso resolutivo, intensidad mental/emocional.",
                "ajuste": "Fricción, adaptación, reorganización estructural.",
                "introspeccion": "Retiro sensible, observación, pausa interior.",
                "integracion": "Asentamiento, maduración, consolidación tras el cierre."
            },
            "aplicacion": "Permite clasificar el clima base diariamente o semanalmente antes del texto detallado."
        }
    },
    {
        "codigo": "410_textos_para_diario_personal",
        "serie": "400",
        "titulo": "Textos de reflexión para diario personal",
        "tipo": "Herramienta de Acompañamiento",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Estimular el registro del proceso evolutivo y el insight personal en relación al ciclo.",
        "contenido": {
            "principios": {
                "reflexion_abierta": "No dirigir la respuesta; inspirar búsqueda.",
                "conexion_ciclo": "La pregunta bebe del clima astrológico subyacente.",
                "integracion_evolutiva": "Reconocer hitos y lecciones a lo largo del tiempo."
            },
            "estructura_generacion": {
                "1_introduccion": "Breve frase reflexiva o insight.",
                "2_preguntas": "Uno o varios interrogantes limpios ('¿Qué decisión madura en ti?').",
                "3_registro": "Invitación final a escribir y asimilar la experiencia."
            }
        }
    }
]

def format_firestore_value(val):
    if isinstance(val, str):
        return {"stringValue": val}
    elif isinstance(val, int):
        return {"integerValue": str(val)}
    elif isinstance(val, float):
        return {"doubleValue": val}
    elif isinstance(val, bool):
        return {"booleanValue": val}
    elif isinstance(val, list):
        return {"arrayValue": {"values": [format_firestore_value(v) for v in val]}}
    elif isinstance(val, dict):
        return {"mapValue": {"fields": {k: format_firestore_value(v) for k, v in val.items()}}}
    else:
        return {"nullValue": None}

def document_to_firestore_format(doc_data):
    fields = {}
    for key, value in doc_data.items():
        fields[key] = format_firestore_value(value)
    return {"fields": fields}

def upload_document(doc_data):
    doc_id = doc_data["codigo"]
    url = f"{FIRESTORE_URL}/{COLLECTION}?documentId={doc_id}"
    
    payload = document_to_firestore_format(doc_data)
    req = urllib.request.Request(url, data=json.dumps(payload).encode('utf-8'), headers=HEADERS, method='POST')
    
    try:
        urllib.request.urlopen(req)
        print(f"✅ Documento {doc_id} ingerido correctamente.")
        return True
    except urllib.error.HTTPError as e:
        if e.code == 409: # Patch
            patch_url = f"{FIRESTORE_URL}/{COLLECTION}/{doc_id}"
            req_patch = urllib.request.Request(patch_url, data=json.dumps(payload).encode('utf-8'), headers=HEADERS, method='PATCH')
            try:
                urllib.request.urlopen(req_patch)
                print(f"✅ Documento {doc_id} actualizado correctamente.")
                return True
            except Exception as e2:
                print(f"❌ Error actualizando {doc_id}: {e2}")
        else:
            print(f"❌ Error HTTP ingiriendo {doc_id}: {e.code} - {e.read().decode()}")
    except Exception as e:
        print(f"❌ Error ingiriendo {doc_id}: {e}")
    return False

if __name__ == "__main__":
    print(f"--- Iniciando Ingestión LÓGICA de la SERIE 400 en {PROJECT_ID} ---")
    success_count = 0
    for doc in DOCS_400:
        print(f"Ingiriendo {doc['codigo']}...")
        if upload_document(doc):
            success_count += 1
            
    print(f"--- Ingestión finalizada: {success_count}/{len(DOCS_400)} exitosos ---")
