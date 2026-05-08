import urllib.request
import urllib.error
import json
import os
from collections import defaultdict

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

def fetch_all_documents(token):
    all_docs = []
    page_token = None
    
    while True:
        url = BASE_URL
        if page_token:
            url += f"?pageToken={page_token}"
            
        req = urllib.request.Request(url)
        req.add_header('Authorization', f'Bearer {token}')
        
        try:
            with urllib.request.urlopen(req) as response:
                if response.status == 200:
                    data = json.loads(response.read().decode('utf-8'))
                    if 'documents' in data:
                        all_docs.extend(data['documents'])
                    
                    page_token = data.get('nextPageToken')
                    if not page_token:
                        break
                else:
                    print(f"Error HTTP {response.status}")
                    break
        except urllib.error.HTTPError as e:
            print(f"Error de red: {e.code} - {e.reason}")
            break
            
    return all_docs

def audit_library():
    print("--- INICIANDO AUDITORÍA COMPLETA DE KAIROS LIBRARY ---\n")
    
    token = get_access_token()
    if not token:
        print("❌ No se pudo obtener el token de autenticación.")
        return
        
    documents = fetch_all_documents(token)
    
    if not documents:
        print("⚠️ La biblioteca está vacía o hubo un error al leerla.")
        return
        
    print(f"Total de documentos encontrados: {len(documents)}\n")
    
    series_map = defaultdict(list)
    metadata_errors = []
    
    required_fields = ['codigo', 'serie', 'titulo', 'version', 'estado', 'fecha_actualizacion', 'contenido']
    
    for doc in documents:
        doc_name = doc['name'].split('/')[-1]
        fields = doc.get('fields', {})
        
        # Extract series (first 3 chars or from metadata)
        serie_val = "DESCONOCIDA"
        if 'serie' in fields:
            serie_val = fields['serie'].get('stringValue', 'DESCONOCIDA')
        else:
            # Fallback to ID
            serie_val = doc_name[:3] + " (Inferida)"
            
        # Check metadata
        missing_metadata = []
        for req_field in required_fields:
            if req_field not in fields:
                missing_metadata.append(req_field)
                
        if missing_metadata:
            metadata_errors.append(f"Documento '{doc_name}' carece de: {', '.join(missing_metadata)}")
            
        # Store for mapping
        series_map[serie_val].append(doc_name)
        
    # Print Map
    print("=== MAPA DE LA BIBLIOTECA KAIROS ===\n")
    
    for serie in sorted(series_map.keys()):
        docs = sorted(series_map[serie])
        print(f"📁 SERIE {serie} ({len(docs)} documentos):")
        for doc in docs:
            print(f"   ├── {doc}")
        print("")
        
    # Print Errors/Inconsistencies
    print("=== REPORTE DE METADATOS Y ESTADO ===\n")
    if not metadata_errors:
        print("✅ PERFECTO: Todos los documentos de la biblioteca contienen la estructura completa de metadatos (codigo, serie, titulo, version, estado, fecha_actualizacion, contenido).")
    else:
        print("⚠️ SE ENCONTRARON INCONSISTENCIAS DE METADATOS:")
        for err in metadata_errors:
            print(f"   - {err}")
            
    print("\n--- AUDITORÍA FINALIZADA ---")

if __name__ == "__main__":
    audit_library()
