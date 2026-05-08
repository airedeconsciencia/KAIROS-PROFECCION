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

def patch_document_field(doc_id, field_name, field_value, token):
    url = f"{BASE_URL}/{doc_id}?updateMask.fieldPaths={field_name}"
    
    data = {
        "fields": {
            field_name: {"stringValue": field_value}
        }
    }
    
    json_payload = json.dumps(data).encode('utf-8')
    
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    try:
        req = urllib.request.Request(url, data=json_payload, headers=headers, method='PATCH')
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                print(f"✅ Documento {doc_id} actualizado con {field_name}={field_value}")
                return True
            else:
                print(f"⚠️ Doc {doc_id} HTTP Status: {response.status}")
                return False
    except urllib.error.HTTPError as e:
        print(f"❌ Error al actualizar {doc_id}: {e.code} - {e.reason}")
        return False

def get_document(doc_id, token):
    url = f"{BASE_URL}/{doc_id}"
    req = urllib.request.Request(url)
    req.add_header('Authorization', f'Bearer {token}')
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                return json.loads(response.read().decode('utf-8'))
    except urllib.error.HTTPError as e:
        if e.code == 404:
            print(f"El documento {doc_id} no existe.")
        else:
            print(f"Error al leer {doc_id}: {e.code}")
    return None

def create_document(doc_id, data, token):
    url = f"{BASE_URL}/{doc_id}"
    json_payload = json.dumps(data).encode('utf-8')
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    try:
        req = urllib.request.Request(url, data=json_payload, headers=headers, method='PATCH')
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                print(f"✅ Documento {doc_id} creado/migrado correctamente.")
                return True
            else:
                print(f"⚠️ Error al crear {doc_id}: {response.status}")
                return False
    except urllib.error.HTTPError as e:
        print(f"❌ Error HTTP al crear {doc_id}: {e.code} - {e.reason}")
        return False

def delete_document(doc_id, token):
    url = f"{BASE_URL}/{doc_id}"
    req = urllib.request.Request(url, method='DELETE')
    req.add_header('Authorization', f'Bearer {token}')
    try:
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                print(f"✅ Documento antiguo {doc_id} eliminado correctamente.")
                return True
    except urllib.error.HTTPError as e:
        print(f"❌ Error al eliminar {doc_id}: {e.code}")
        return False

def run_normalization():
    print("--- INICIANDO NORMALIZACIÓN DE KAIROS LIBRARY ---")
    token = get_access_token()
    if not token:
        print("❌ No se pudo obtener el token.")
        return

    # 1. Parche Serie 000
    print("\n--- 1. PARCHE METADATOS SERIE 000 ---")
    serie_000_docs = [
        "000_indice_maestro_de_la_biblioteca",
        "001_mapa_de_dependencias",
        "002_esquema_de_variables_de_kairos",
        "003_motor_de_orquestacion_interpretativa",
        "004_pipeline_de_generacion_de_respuesta",
        "005_reglas_de_QA_de_salida",
        "006_estructura_de_firestore_para_kairos"
    ]
    
    for doc_id in serie_000_docs:
        patch_document_field(doc_id, "fecha_actualizacion", "2026-03-13", token)

    # 2. Corrección Taxonomía Serie 100
    print("\n--- 2. CORRECCIÓN TAXONOMÍA SERIE 100 ---")
    old_id = "100_filosofia_del_sistema"
    new_id = "100_criterios_generales_kairos"
    
    old_doc = get_document(old_id, token)
    if old_doc:
        print(f"Documento {old_id} encontrado. Iniciando migración...")
        
        # Modificar el campo 'codigo' para que refleje el nuevo ID
        if 'fields' in old_doc and 'codigo' in old_doc['fields']:
            old_doc['fields']['codigo'] = {'stringValue': new_id}
            
        # Crear nuevo documento
        success = create_document(new_id, old_doc, token)
        
        # Eliminar el antiguo si se creó bien
        if success:
            delete_document(old_id, token)
    else:
        # Check if it was already migrated
        new_doc = get_document(new_id, token)
        if new_doc:
            print(f"✅ El documento {new_id} ya existe. Migración previa completada.")
        else:
            print(f"❌ Error: No se encontró {old_id} ni {new_id}.")

    print("\n--- NORMALIZACIÓN FINALIZADA ---")

if __name__ == "__main__":
    run_normalization()
