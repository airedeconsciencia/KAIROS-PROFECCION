
import os
import json
import urllib.request
import urllib.error

# Cargar el token de Firebase
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

# Datos de la Serie 000
SERIE_000_CONTENT = {
    "000_indice_maestro_de_la_biblioteca": {
        "titulo": "Índice Maestro de la Biblioteca",
        "objetivo": "Catalogar la totalidad de la biblioteca KAIROS y establecer su organización general.",
        "tipo": "operativo-estructural",
        "nivel": "nuclear"
    },
    "001_mapa_de_dependencias": {
        "titulo": "Mapa de Dependencias",
        "objetivo": "Mostrar qué documentos alimentan a cuáles y cómo fluye el conocimiento dentro del sistema.",
        "tipo": "operativo-estructural",
        "nivel": "nuclear"
    },
    "002_esquema_de_variables_de_kairos": {
        "titulo": "Esquema de Variables de KAIROS",
        "objetivo": "Definir todas las variables internas del sistema, su origen, su uso y su prioridad.",
        "tipo": "operativo-técnico",
        "nivel": "nuclear"
    },
    "003_motor_de_orquestacion_interpretativa": {
        "titulo": "Motor de Orquestación Interpretativa",
        "objetivo": "Definir cómo piensa KAIROS cuando recibe datos reales y genera una interpretación.",
        "tipo": "operativo-lógico",
        "nivel": "crítico"
    },
    "004_pipeline_de_generacion_de_respuesta": {
        "titulo": "Pipeline de Generación de Respuesta",
        "objetivo": "Definir el flujo operativo completo desde entrada de datos hasta salida visible en la app.",
        "tipo": "operativo-funcional",
        "nivel": "crítico"
    },
    "005_reglas_de_QA_de_salida": {
        "titulo": "Reglas de QA de Salida",
        "objetivo": "Establecer criterios de control de calidad para impedir respuestas contradictorias o pobres.",
        "tipo": "operativo-control",
        "nivel": "crítico"
    }
}

def ingest_serie_000():
    print("--- Iniciando Ingestión SERIE 000 ---")
    
    for doc_id, meta in SERIE_000_CONTENT.items():
        print(f"Creando {doc_id}...")
        
        fields = {
            "codigo": {"stringValue": doc_id},
            "serie": {"stringValue": "000"},
            "titulo": {"stringValue": meta["titulo"]},
            "objetivo": {"stringValue": meta["objetivo"]},
            "tipo": {"stringValue": meta["tipo"]},
            "nivel": {"stringValue": meta["nivel"]},
            "version": {"stringValue": "1.0"},
            "estado": {"stringValue": "activo"},
            "contenido": {"mapValue": {"fields": {}}} # Se llenará con el texto analizado en el futuro o se deja estructural
        }
        
        status, resp = make_request(f"{BASE_URL}/{doc_id}", method='PATCH', data={'fields': fields})
        
        if status == 200:
            print(f"✅ {doc_id} creado en Firestore.")
        else:
            print(f"❌ Error al crear {doc_id}: {resp}")

if __name__ == "__main__":
    ingest_serie_000()
