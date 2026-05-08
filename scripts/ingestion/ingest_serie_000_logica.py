
import os
import json
import urllib.request
import urllib.error

# Configuración de Firebase
try:
    with open('/Users/robertoriveroramos/.config/configstore/firebase-tools.json', 'r') as f:
        config = json.load(f)
        access_token = config['tokens']['access_token']
except Exception as e:
    print(f"Error al cargar el token: {e}")
    exit(1)

PROJECT_ID = "kairos-eng-714ee"
BASE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents/kairos_library"
HEADERS = {
    "Authorization": f"Bearer {access_token}",
    "Content-Type": "application/json"
}

def make_request(url, method='PATCH', data=None):
    req = urllib.request.Request(url, headers=HEADERS, method=method)
    if data:
        json_data = json.dumps(data).encode('utf-8')
        req.data = json_data
    try:
        with urllib.request.urlopen(req) as response:
            return response.status, json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode('utf-8')
    except Exception as e:
        return 500, str(e)

# --- CONTENIDO ESTRUCTURADO DE LA SERIE 000 ---

SERIE_000_DATA = {
    "000_indice_maestro_de_la_biblioteca": {
        "serie": "000",
        "titulo": "Índice Maestro de la Biblioteca",
        "tipo": "operativo-estructural",
        "nivel": "nuclear",
        "objetivo": "Catalogar la totalidad de la biblioteca KAIROS y establecer su organización general.",
        "contenido": {
            "proposito": "Ordenar, identificar y clasificar todos los documentos del sistema.",
            "funciones_centrales": ["Ordenar la biblioteca", "Evitar duplicidades", "Mostrar jerarquía", "Facilitar integración técnica", "Facilitar mantenimiento", "Puerta de entrada al sistema"],
            "bloques_documentales": {
                "000": "Operativa y Gobernanza",
                "100": "Fundamentos",
                "200": "Biblioteca Base",
                "300": "Biblioteca Relacional",
                "400": "Salida Humana",
                "500": "Reglas de Ensamblaje"
            },
            "principios_organizacion": ["Organización por series", "Un documento - una función", "Diferencia entre conocimiento y operación", "Trazabilidad", "Escalabilidad"]
        }
    },
    "001_mapa_de_dependencias": {
        "serie": "000",
        "titulo": "Mapa de Dependencias",
        "tipo": "operativo-estructural",
        "nivel": "nuclear",
        "objetivo": "Mostrar qué documentos alimentan a cuáles y cómo fluye el conocimiento dentro del sistema.",
        "contenido": {
            "tipos_dependencia": ["Fundacional (Serie 100)", "Semántica (Serie 200)", "Relacional (Serie 300)", "Narrativa (Serie 400)", "Ensamblaje (Serie 500)", "Operativa (Serie 000)"],
            "flujo_general_conocimiento": ["100 Fundamentos", "200 Biblioteca Base", "300 Biblioteca Relacional", "500 Reglas de Ensamblaje", "000 Serie Operativa", "400 Salida Humana"],
            "dependencias_criticas": {
                "capa_1": "Toda salida depende de fundamentos (100)",
                "capa_2": "Biblioteca base (200) requiere interpretación y traducción",
                "capa_3": "Serie operativa (000) convierte biblioteca en sistema ejecutable"
            }
        }
    },
    "002_esquema_de_variables_de_kairos": {
        "serie": "000",
        "titulo": "Esquema de Variables de KAIROS",
        "tipo": "operativo-técnico",
        "nivel": "nuclear",
        "objetivo": "Definir todas las variables internas del sistema, su origen, su uso y su prioridad.",
        "contenido": {
            "bloques_variables": {
                "A": "Identidad y Configuración (user_id, lang, timezone)",
                "B": "Natales Estructurales (natal_sun_sign, natal_houses, natal_aspects)",
                "C": "Ciclo Anual (lord_of_year, annual_profection_house)",
                "D": "Temporales Dinámicas (day_ruler, moon_sign_today, moon_phase)",
                "E": "Tránsitos y Activaciones (relevant_transits, house_triggers)",
                "F": "Derivadas del Motor (dominant_theme, energy_tone, semantic_core)",
                "G": "Salida (output_type, output_modules, output_length)",
                "H": "Control y QA (qa_status, library_version, trace_id)"
            },
            "principios_diseno": ["Una variable - una función", "Separación de capas", "Trazabilidad", "Prioridad interpretativa explícita"]
        }
    },
    "003_motor_de_orquestacion_interpretativa": {
        "serie": "000",
        "titulo": "Motor de Orquestación Interpretativa",
        "tipo": "operativo-lógico",
        "nivel": "crítico",
        "objetivo": "Definir cómo piensa KAIROS cuando recibe datos reales y genera una interpretación.",
        "contenido": {
            "principio_rector": "La interpretación se construye por jerarquía de sentido, no por acumulación.",
            "capas_interpretativas": {
                "capa_1": "Estructura del ciclo (Profección, Señor del Año)",
                "capa_2": "Activación del presente (Tránsitos mayores)",
                "capa_3": "Clima temporal corto (Luna, Planeta del día)",
                "capa_4": "Traducción humana (Síntesis, Advertencia, Acción)"
            },
            "fases_operativas": ["1. Validación entrada", "2. Estado interpretativo", "3. Detección factores activos", "4. Pesado (Scoring)", "5. Resolución conflicto", "6. Selección nodos biblioteca", "7. Núcleo semántico", "8. Mapeo módulos salida"]
        }
    },
    "004_pipeline_de_generacion_de_respuesta": {
        "serie": "000",
        "titulo": "Pipeline de Generación de Respuesta",
        "tipo": "operativo-funcional",
        "nivel": "crítico",
        "objetivo": "Definir el flujo operativo completo desde entrada de datos hasta salida visible en la app.",
        "contenido": {
            "flujo_operativo": ["Solicitud", "Carga Usuario", "Carga Astral", "Normalización", "Validación Integridad", "Detección Factores", "Jerarquización", "Selección Nodos", "Núcleo Semántico", "Ensamblaje Módulos", "Control Narrativo", "QA", "Persistencia", "Entrega UI"],
            "arquitectura_capas": ["Entrada", "Datos Astrales", "Orquestación", "Salida Modular", "Control/QA", "Persistencia/Entrega"]
        }
    },
    "005_reglas_de_QA_de_salida": {
        "serie": "000",
        "titulo": "Reglas de QA de Salida",
        "tipo": "operativo-control",
        "nivel": "crítico",
        "objetivo": "Establecer criterios de control de calidad para impedir respuestas contradictorias o pobres.",
        "contenido": {
            "categorias_control": ["Coherencia jerárquica", "Coherencia interna (no contradicción)", "Coherencia entre vistas (día/mes/año)", "Calidad narrativa y tono terapéutico", "Claridad y legibilidad", "Proporcionalidad interpretativa", "Diferenciación modular", "Longitud y densidad", "Trazabilidad técnica"],
            "niveles_validacion": ["Passed (Válida)", "Warning (Usable con aviso)", "Failed (Bloqueada/Fallback)"],
            "reglas_obligatorias": ["Respeto jerarquía", "Sin contradicción grave", "Sin fatalismo", "Claridad mínima", "Proporcionalidad"]
        }
    },
    "006_estructura_de_firestore_para_kairos": {
        "serie": "000",
        "titulo": "Estructura de Firestore para KAIROS",
        "tipo": "operativo-estructural",
        "nivel": "nuclear",
        "objetivo": "Definir el modelo de datos físico en base de datos para la biblioteca y procesos.",
        "contenido": {
            "colecciones_principales": {
                "kairos_library": "Biblioteca documental completa (Series 000-700)",
                "users": "Perfil y configuración (Bloque A de variables)",
                "natal_charts": "Cálculos natales persistidos (Bloque B de variables)",
                "user_readings": "Historial de lecturas (Bloque H de variables/trazabilidad)"
            },
            "estados_documento": ["borrador", "en revisión", "validado", "activo", "obsoleto"]
        }
    }
}

def to_firestore_map(data):
    """Convierte un diccionario de Python a la estructura de MapValue de Firestore."""
    fields = {}
    for key, value in data.items():
        if isinstance(value, str):
            fields[key] = {"stringValue": value}
        elif isinstance(value, bool):
            fields[key] = {"booleanValue": value}
        elif isinstance(value, int) or isinstance(value, float):
            fields[key] = {"doubleValue": value}
        elif isinstance(value, list):
            fields[key] = {"arrayValue": {"values": [to_firestore_map_item(v) for v in value]}}
        elif isinstance(value, dict):
            fields[key] = {"mapValue": {"fields": to_firestore_map(value)}}
    return fields

def to_firestore_map_item(item):
    if isinstance(item, str):
        return {"stringValue": item}
    elif isinstance(item, bool):
        return {"booleanValue": item}
    elif isinstance(item, (int, float)):
        return {"doubleValue": item}
    elif isinstance(item, dict):
        return {"mapValue": {"fields": to_firestore_map(item)}}
    return {"stringValue": str(item)}

def ingest_serie_000():
    print("--- Iniciando Ingestión LÓGICA de la SERIE 000 ---")
    for doc_id, data in SERIE_000_DATA.items():
        print(f"Ingiriendo contenido real en {doc_id}...")
        
        # Estrucutra de campos según el esquema definido
        fields = {
            "codigo": {"stringValue": doc_id},
            "serie": {"stringValue": data["serie"]},
            "titulo": {"stringValue": data["titulo"]},
            "tipo": {"stringValue": data["tipo"]},
            "version": {"stringValue": "1.0"},
            "estado": {"stringValue": "activo"},
            "objetivo": {"stringValue": data["objetivo"]},
            "contenido": {"mapValue": {"fields": to_firestore_map(data["contenido"])}}
        }
        
        status, resp = make_request(f"{BASE_URL}/{doc_id}", method='PATCH', data={'fields': fields})
        
        if status == 200:
            print(f"✅ Documento {doc_id} ingerido con contenido lógico.")
        else:
            print(f"❌ Error en {doc_id}: {resp}")

if __name__ == "__main__":
    ingest_serie_000()
