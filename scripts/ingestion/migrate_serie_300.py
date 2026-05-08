import json
import urllib.request
import urllib.error
import os

PROJECT_ID = "kairos-eng-714ee"
FIRESTORE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"
COLLECTION = "kairos_library"

MAPPING = {
    "301_planeta_en_signo": "300_planeta_en_signo",
    "302_planeta_en_casa": "310_planeta_en_casa",
    "303_senor_del_ano_por_planeta": "320_senor_del_ano_por_planeta",
    "304_casa_activada_por_profeccion": "330_casa_activada_por_profeccion",
    "305_luna_en_transito_por_signo": "340_luna_en_transito_por_signo",
    "306_sol_actual_por_signo": "350_sol_actual_por_signo",
    "308_cruces_planeta_dia_senor_del_ano": "360_cruces_entre_luna_planeta_del_dia_y_senor_del_ano",
    "307_cruces_luna_transito_profeccion": "370_cruces_luna_transito_profeccion",
    "309_cruces_sol_luna_planeta_activo": "380_cruces_sol_luna_planeta_activo",
    "310_cruces_retrogradacion_y_clima": "390_cruces_retrogradacion_y_clima"
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

def create_document(doc_id, doc_data):
    url = f"{FIRESTORE_URL}/{COLLECTION}?documentId={doc_id}"
    req = urllib.request.Request(url, data=json.dumps(doc_data).encode('utf-8'), headers=HEADERS, method='POST')
    try:
        urllib.request.urlopen(req)
        return True
    except urllib.error.HTTPError as e:
        if e.code == 409: # Already exists, patch it
            patch_url = f"{FIRESTORE_URL}/{COLLECTION}/{doc_id}"
            req_patch = urllib.request.Request(patch_url, data=json.dumps(doc_data).encode('utf-8'), headers=HEADERS, method='PATCH')
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

def delete_document(doc_id):
    url = f"{FIRESTORE_URL}/{COLLECTION}/{doc_id}"
    req = urllib.request.Request(url, headers=HEADERS, method='DELETE')
    try:
        urllib.request.urlopen(req)
        return True
    except Exception as e:
        print(f"❌ Error deleting {doc_id}: {e}")
    return False

print("--- Iniciando migración de taxonomía Serie 300 ---")

migracion_exitosa = True

for old_id, new_id in MAPPING.items():
    print(f"Migrando {old_id} -> {new_id}...")
    
    old_doc = get_document(old_id)
    if not old_doc:
        print(f"  ⚠️ Documento {old_id} no encontrado. Puede que ya haya sido migrado.")
        # Verificamos si ya existe el nuevo
        if get_document(new_id):
            print(f"  ✅ El documento {new_id} ya existe.")
            continue
        else:
            print(f"  ❌ No se pudo encontrar ni {old_id} ni {new_id}.")
            migracion_exitosa = False
            continue
            
    # Modify the 'codigo' field
    if 'fields' in old_doc and 'codigo' in old_doc['fields']:
        old_doc['fields']['codigo'] = {'stringValue': new_id}
        
    # Attempt to create the new document
    success = create_document(new_id, {"fields": old_doc.get("fields", {})})
    if success:
        print(f"  ✅ Documento {new_id} creado correctamente.")
        # Verify it exists
        verify_doc = get_document(new_id)
        if verify_doc and verify_doc['fields']['codigo']['stringValue'] == new_id:
            # Delete old document
            del_success = delete_document(old_id)
            if del_success:
                print(f"  🗑️  Documento antiguo {old_id} eliminado exitosamente.")
            else:
                print(f"  ⚠️ No se pudo eliminar el documento antiguo {old_id}.")
        else:
             print(f"  ❌ Fallo en la verificación de {new_id}.")
             migracion_exitosa = False
    else:
        print(f"  ❌ Fallo en la creación de {new_id}.")
        migracion_exitosa = False

if migracion_exitosa:
    print("\n✅ Migración de la Serie 300 completada con éxito.")
else:
    print("\n⚠️ Hubo algunos errores durante la migración.")
