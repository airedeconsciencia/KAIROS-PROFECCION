
import json
import urllib.request

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
    "Authorization": f"Bearer {access_token}"
}

def get_document(doc_id):
    url = f"{BASE_URL}/{doc_id}"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req) as response:
            return json.loads(response.read().decode('utf-8'))
    except Exception as e:
        return {"error": str(e)}

def parse_firestore_value(value):
    if "stringValue" in value: return value["stringValue"]
    if "booleanValue" in value: return value["booleanValue"]
    if "doubleValue" in value: return value["doubleValue"]
    if "mapValue" in value:
        return {k: parse_firestore_value(v) for k, v in value["mapValue"].get("fields", {}).items()}
    if "arrayValue" in value:
        return [parse_firestore_value(v) for v in value["arrayValue"].get("values", [])]
    return None

def verify():
    docs_to_verify = ["110_glosario_base", "130_tono_terapeutico_kairos"]
    results = {}
    
    for doc_id in docs_to_verify:
        doc = get_document(doc_id)
        if "fields" in doc:
            contenido = parse_firestore_value(doc["fields"].get("contenido", {}))
            results[doc_id] = {
                "keys": list(contenido.keys()) if contenido else [],
                "content_preview": contenido
            }
        else:
            results[doc_id] = "Error: Documento no encontrado o vacío"

    print(json.dumps(results, indent=2, ensure_ascii=False))

if __name__ == "__main__":
    verify()
