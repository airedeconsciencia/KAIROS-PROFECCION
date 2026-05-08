import json
import urllib.request
import urllib.error
import os

PROJECT_ID = "kairos-eng-714ee"
FIRESTORE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"
COLLECTION = "kairos_library"

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

# The Series 500 Content mapped to the exact required taxonomy
DOCS_500 = [
    {
        "codigo": "500_reglas_de_prioridad_interpretativa",
        "serie": "500",
        "titulo": "Reglas de prioridad interpretativa de KAIROS",
        "tipo": "Regla de Ensamblaje",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir la jerarquía interpretativa que KAIROS debe aplicar al combinar múltiples factores astrológicos.",
        "contenido": {
            "principio_general": "Distinguir lo estructural de lo accesorio; ordenar información antes de expresar; sostener coherencia evitando lectura fragmentada.",
            "jerarquia_interpretativa": {
                "prioridad_1": "Casa activada por profección anual (Define el escenario principal)",
                "prioridad_2": "Señor del Año (Define la cualidad dominante)",
                "prioridad_3": "Condición natal del Señor del Año (Determina la capacidad real de operar)",
                "prioridad_4": "Tránsitos que afectan al Señor del Año (Activadores temporales del eje)",
                "prioridad_5": "Luna en tránsito (Modulador breve del clima)",
                "prioridad_6": "Planeta regente del día (Matiz cotidiano complementario)"
            },
            "logica_ensamblaje": "Descendente: desde el factor estructural hasta el circunstancial. Suma por capas, donde factores inferiores matizan pero no redefinen al superior."
        }
    },
    {
        "codigo": "501_reglas_de_conflicto",
        "serie": "500",
        "titulo": "Reglas de resolución de conflicto interpretativo",
        "tipo": "Regla de Ensamblaje",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir cómo gestionar situaciones con energías contradictorias entre factores.",
        "contenido": {
            "principio_general": "KAIROS no elimina las tensiones, las integra subordinando el conflicto a la jerarquía principal.",
            "tipos_de_conflicto": ["Expansión vs restricción", "Acción vs pausa", "Apertura emocional vs protección", "Cambio vs estabilidad"],
            "estrategia_narrativa": {
                "paso_1": "Reconocer la tensión entre las energías.",
                "paso_2": "Establecer el contexto estructural guiado por el factor de mayor prioridad.",
                "paso_3": "Integrar el segundo factor como modulador o desafío.",
                "paso_4": "Traducir la tensión en proceso evolutivo o de aprendizaje (no como contradicción)."
            }
        }
    },
    {
        "codigo": "502_reglas_de_fallback",
        "serie": "500",
        "titulo": "Reglas de fallback interpretativo",
        "tipo": "Regla de Ensamblaje",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir cómo actuar cuando la información astrológica disponible es débil o insuficiente.",
        "contenido": {
            "principio_general": "Apoyarse en las estructuras estables del modelo cuando no existen activaciones de eventos relevantes.",
            "orden_fallback": {
                "1_soporte": "Casa activada por profección",
                "2_soporte": "Señor del Año",
                "3_soporte": "Naturaleza del planeta regente",
                "4_soporte": "Significado del signo implicado",
                "5_soporte": "Significado general de la casa implicada"
            },
            "estrategia_narrativa": "Enfocarse en procesos de integración, desarrollo gradual, y observación consciente."
        }
    },
    {
        "codigo": "503_reglas_de_longitud",
        "serie": "500",
        "titulo": "Reglas de longitud y profundidad narrativa",
        "tipo": "Regla de Ensamblaje",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir la extensión y profundidad narrativa para garantizar consistencia en cada formato de salida.",
        "contenido": {
            "niveles_profundidad": {
                "corto": "20-50 palabras. Mensaje directo. Síntesis y advertencias.",
                "medio": "70-120 palabras. Orientación práctica. Lectura diaria.",
                "profundo": "150-300 palabras. Integración de factores. Lectura semanal/mensual."
            },
            "reglas_por_formato": {
                "sintesis_breves": "20-40 palabras",
                "advertencias": "20-50 palabras",
                "acciones_recomendadas": "20-50 palabras",
                "preguntas_de_reflexion": "1-2 preguntas",
                "lecturas_diarias": "70-120 palabras",
                "lecturas_semanales": "120-200 palabras",
                "lecturas_mensuales": "180-300 palabras",
                "matrix_cuerpo_mente_espiritu": "180-270 totales (60-90 por dimensión)",
                "nivel_de_energia": "40-80 palabras",
                "textos_diario": "80-150 palabras"
            }
        }
    },
    {
        "codigo": "504_reglas_de_personalizacion",
        "serie": "500",
        "titulo": "Reglas de personalización interpretativa",
        "tipo": "Regla de Ensamblaje",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Adaptar mediante variables los mensajes para contextualizar la lectura en la etapa vital del usuario.",
        "contenido": {
            "variables_activas": ["Nombre del usuario", "Edad", "Ciclo anual activo", "Casa profectada", "Señor del Año", "Tránsitos"],
            "niveles_personalizacion": {
                "1_basica": "Uso ocasional y no forzado de nombre y segunda persona.",
                "2_contextual": "Incluir referencias al momento vital ('En esta etapa de tu ciclo...').",
                "3_interpretativa": "Integrar múltiples factores (Ej. Tránsito actual hacia el Señor del Año)."
            },
            "regla_limite": "Priorizar claridad. Evitar sobrecarga astrológica, tecnicismos, y uso exagerado del nombre."
        }
    },
    {
        "codigo": "505_reglas_de_coherencia_entre_vistas",
        "serie": "500",
        "titulo": "Reglas de consistencia interpretativa entre vistas",
        "tipo": "Regla de Ensamblaje",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Mantener coherencia conceptual y narrativa evitando mensajes contradictorios entre escalas de tiempo.",
        "contenido": {
            "regla_fundamental": "Las escalas temporales más cortas nunca deben contradecir el marco estructural de las escalas superiores.",
            "integracion_escalas": {
                "lectura_anual": "Define el tema y proceso central.",
                "lectura_mensual": "Es una etapa dentro del año.",
                "lectura_semanal": "Activaciones concretas dentro del mes.",
                "lectura_diaria": "Modulación del clima inmediato dentro de la semana.",
                "matrix_integral": "Es la manifestación del proceso vigente en niveles físico, psíquico y espiritual."
            },
            "gestion_contradicciones": "Interpretar el factor de menor jerarquía (ej. un tránsito expansivo) como una oportunidad específica, pero enmarcada dentro de un proceso superior que podría ser distinto (ej. dentro de un año de consolidación saturnina)."
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
    print(f"--- Iniciando Ingestión LÓGICA de la SERIE 500 en {PROJECT_ID} ---")
    success_count = 0
    for doc in DOCS_500:
        print(f"Ingiriendo {doc['codigo']}...")
        if upload_document(doc):
            success_count += 1
            
    print(f"--- Ingestión finalizada: {success_count}/{len(DOCS_500)} exitosos ---")
