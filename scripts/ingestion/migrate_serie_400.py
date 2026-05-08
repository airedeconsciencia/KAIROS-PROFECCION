import json
import urllib.request
import urllib.error
import os

PROJECT_ID = "kairos-eng-714ee"
FIRESTORE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"
COLLECTION = "kairos_library"

MAPPING = {
    "401_sintesis_breve": "400_sintesis_breves",
    "402_advertencias": "410_advertencias",
    "403_acciones_recomendadas": "420_acciones_recomendadas",
    "404_preguntas_de_reflexion": "430_preguntas_de_reflexion",
    "405_lecturas_diarias": "440_lecturas_diarias",
    "407_lecturas_mensuales": "460_lecturas_mensuales",
    "408_matrix_cuerpo_mente_espiritu": "470_matriz_cuerpo_mente_espiritu",
    "409_textos_para_nivel_de_energia": "480_nivel_de_energia",
    "410_textos_para_diario_personal": "490_textos_para_diario_personal"
}

# New document to be explicitly created
DOC_450 = {
    "codigo": "450_lecturas_semanales",
    "serie": "400",
    "titulo": "Lecturas semanales del clima simbólico",
    "tipo": "Formato de Salida Humana",
    "version": "1.0",
    "estado": "activo",
    "fecha_actualizacion": "2026-03-13",
    "objetivo": "Ofrecer comprensión contextualizada del desarrollo del ciclo en un arco de 7 días, permitiendo ajustar ritmos y observar tendencias.",
    "contenido": {
        "factores_integrados": [
            "casa profectada", 
            "Señor del Año", 
            "Sol actual", 
            "Luna en tránsito", 
            "tránsitos rápidos de la semana"
        ],
        "principios": {
            "coherencia_mensual": "La modulación semanal se enmarca dentro del clima mensual sugerido por el Sol y el mes.",
            "ritmo_sostenido": "Identifica variaciones y progresiones a lo largo de los días de la semana.",
            "claridad": "Lenguaje humano que une el ritmo cotidiano con hitos mayores sin sobrecargar."
        },
        "estructura_generacion": {
            "1_contexto": "El clima y tendencia dominante de los próximos días.",
            "2_dinamica": "Procesos que requerirán atención o que fluirán con facilidad en la semana.",
            "3_orientacion": "Sugerencias para planificar o transitar la semana conscientemente."
        }
    }
}

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

def get_document(doc_id):
    url = f"{FIRESTORE_URL}/{COLLECTION}/{doc_id}"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode())
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return None
        print(f"Error getting {doc_id}: {e}")
        return None
    except Exception as e:
        print(f"Error getting {doc_id}: {e}")
        return None

def create_raw_document(doc_id, firestore_payload):
    url = f"{FIRESTORE_URL}/{COLLECTION}?documentId={doc_id}"
    req = urllib.request.Request(url, data=json.dumps(firestore_payload).encode('utf-8'), headers=HEADERS, method='POST')
    try:
        urllib.request.urlopen(req)
        return True
    except urllib.error.HTTPError as e:
        if e.code == 409: # Patch
            patch_url = f"{FIRESTORE_URL}/{COLLECTION}/{doc_id}"
            req_patch = urllib.request.Request(patch_url, data=json.dumps(firestore_payload).encode('utf-8'), headers=HEADERS, method='PATCH')
            try:
                urllib.request.urlopen(req_patch)
                return True
            except Exception as e2:
                print(f"❌ Error patching {doc_id}: {e2}")
        else:
            print(f"❌ Error posting {doc_id}: {e.code} - {e.read().decode()}")
    except Exception as e:
        print(f"❌ Error creating {doc_id}: {e}")
    return False

def create_document(doc_id, doc_data):
    payload = document_to_firestore_format(doc_data)
    return create_raw_document(doc_id, payload)

def delete_document(doc_id):
    url = f"{FIRESTORE_URL}/{COLLECTION}/{doc_id}"
    req = urllib.request.Request(url, headers=HEADERS, method='DELETE')
    try:
        urllib.request.urlopen(req)
        return True
    except urllib.error.HTTPError as e:
        if e.code == 404:
            return True
        print(f"❌ Error deleting {doc_id}: {e.code}")
    except Exception as e:
        print(f"❌ Error deleting {doc_id}: {e}")
    return False

print("--- Iniciando migración de taxonomía Serie 400 ---")
migracion_exitosa = True

for old_id, new_id in MAPPING.items():
    print(f"Migrando {old_id} -> {new_id}...")
    old_doc = get_document(old_id)
    
    if not old_doc:
        print(f"  ⚠️ Documento {old_id} no encontrado. Puede que ya haya sido migrado.")
        if get_document(new_id):
            print(f"  ✅ El documento {new_id} ya existe.")
            continue
        else:
            print(f"  ❌ No se pudo encontrar ni {old_id} ni {new_id}.")
            migracion_exitosa = False
            continue
            
    # Modify 'codigo' field
    if 'fields' in old_doc and 'codigo' in old_doc['fields']:
        old_doc['fields']['codigo'] = {'stringValue': new_id}
        
    success = create_raw_document(new_id, {"fields": old_doc.get("fields", {})})
    if success:
        print(f"  ✅ Documento {new_id} migrado correctamente.")
        verify_doc = get_document(new_id)
        if verify_doc and verify_doc['fields']['codigo']['stringValue'] == new_id:
            del_success = delete_document(old_id)
            if del_success:
                print(f"  🗑️  Documento antiguo {old_id} eliminado exitosamente.")
            else:
                print(f"  ⚠️ No se pudo eliminar el documento antiguo {old_id}.")
        else:
            print(f"  ❌ Fallo en la verificación de {new_id}.")
            migracion_exitosa = False
    else:
        print(f"  ❌ Fallo en la migración de {new_id}.")
        migracion_exitosa = False

# Create the missing 450 document
print("\n--- Creando nuevo documento: 450_lecturas_semanales ---")
if create_document("450_lecturas_semanales", DOC_450):
    print("✅ Documento 450_lecturas_semanales creado exitosamente.")
else:
    print("❌ Error al crear 450_lecturas_semanales.")
    migracion_exitosa = False

if migracion_exitosa:
    print("\n✅ Migración de la Serie 400 completada con éxito.")
else:
    print("\n⚠️ Hubo errores durante la migración.")
