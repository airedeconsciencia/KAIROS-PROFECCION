
import os
import json
import urllib.request
import urllib.error
from datetime import datetime

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

def to_firestore_map(data):
    fields = {}
    for key, value in data.items():
        if value is None: continue
        if isinstance(value, str):
            fields[key] = {"stringValue": value}
        elif isinstance(value, bool):
            fields[key] = {"booleanValue": value}
        elif isinstance(value, (int, float)):
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

# --- DATOS ESTRUCTURADOS DE LA SERIE 100 ---

SERIE_100_DATA = {
    "100_criterios_generales_kairos": {
        "serie": "100",
        "titulo": "Criterios generales del sistema KAIROS",
        "tipo": "fundacional",
        "nivel": "nuclear",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir los principios conceptuales que guían el funcionamiento del sistema interpretativo KAIROS.",
        "contenido": {
            "naturaleza": "Sistema de orientación basado en ciclos temporales, combinando astrología tradicional, tránsitos y lenguaje terapéutico.",
            "principios_fundamentales": {
                "temporalidad": "La vida se organiza en ciclos donde factores natales adquieren protagonismo.",
                "activacion_selectiva": "La carta es dinámica; solo se activan partes específicas en momentos específicos.",
                "jerarquia_interpretativa": "Primero el escenario estructural, luego los factores moduladores.",
                "sintesis_interpretativa": "Traducir estructuras complejas en interpretaciones operativas e inteligibles.",
                "utilidad_practica": "Ayudar al usuario a comprender dinámicas activas y decisiones coherentes.",
                "no_determinismo": "Escenarios de experiencia, no destinos fijos; importancia de la respuesta individual.",
                "coherencia_narrativa": "Integración entre ciclo anual, mensual, semanal y diario."
            },
            "reglas_uso": ["Respetar principios en toda salida", "Integración técnica en serie 500", "Claridad, coherencia y utilidad."]
        }
    },
    "110_glosario_base": {
        "serie": "100",
        "titulo": "Glosario conceptual base del sistema KAIROS",
        "tipo": "fundacional-semantico",
        "nivel": "alto",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir el conjunto de conceptos fundamentales utilizados para construir interpretaciones coherentes.",
        "contenido": {
            "conceptos_clave": {
                "astrologia_aplicada": "Uso de técnicas para comprender ciclos de experiencia, no predicción determinista.",
                "ciclo_vital": "Periodo de experiencia con escenario, energía y activaciones definidas.",
                "tiempo_personal": "Relación entre ciclos astrales y experiencia subjetiva; medido por activación simbólica.",
                "escenario_del_ciclo": "Área de experiencia protagonista (Casa profectada anual).",
                "energia_dominante": "Arquetipo planetario que gobierna el tono (Señor del Año).",
                "clima_del_momento": "Estado dinámico puntual (Tránsitos, fase lunar, regente del día).",
                "factor_estructural": "Define el marco central (Casa profectada, Señor del Año, condición natal).",
                "factor_modulador": "Modifica la expresión sin definir el eje (Luna, tránsitos menores, regente del día).",
                "motor_interpretativo": "Conjunto de reglas que traducen astrología a lenguaje humano.",
                "sintesis_interpretativa": "Resultado final coherente, claro y funcional."
            },
            "reglas_terminologia": ["Consistencia absoluta", "Evitar sinónimos ambiguos", "Estabilidad para el motor."]
        }
    },
    "120_normas_de_redaccion": {
        "serie": "100",
        "titulo": "Normas de redacción de la biblioteca interpretativa KAIROS",
        "tipo": "fundacional-narrativo",
        "nivel": "alto",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir los criterios de redacción para garantizar consistencia, precisión y estabilidad técnica.",
        "contenido": {
            "principios_redaccion": {
                "claridad_conceptual": "Lenguaje directo, evitando erudición innecesaria.",
                "precision_terminologica": "Uso estable de términos técnicos (Señor del Año, etc).",
                "organizacion_estructurada": "Uso de cabeceras estándar (Código, Objetivo, Alcance, etc).",
                "separacion_de_niveles": "Diferenciar concepto, explicación y regla operativa.",
                "sintesis": "Completitud sin extensión innecesaria; un concepto por sección.",
                "neutralidad_interpretativa": "No escribir para el usuario final en esta serie; definir reglas.",
                "coherencia_documental": "Verificar existencia previa antes de introducir nuevos conceptos."
            }
        }
    },
    "130_tono_terapeutico_kairos": {
        "serie": "100",
        "titulo": "Tono terapéutico y estilo comunicativo del sistema KAIROS",
        "tipo": "fundacional-narrativo",
        "nivel": "crítico",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir la voz narrativa y actitud comunicativa dirigida al usuario.",
        "contenido": {
            "identidad_voz": "Guía consciente, clara, respetuosa y equilibrada.",
            "principios_comunicacion": {
                "acompanamiento_consciente": "Explicar procesos, invitar a la reflexión, no imponer decisiones.",
                "equilibrio_emocional": "Evitar alarmismo, fatalismo y optimismo artificial.",
                "responsabilidad_interpretativa": "Enfatizar aprendizaje y desarrollo personal ante desafíos.",
                "claridad_expresiva": "Traducir tecnicismos a lenguaje cotidiano.",
                "respeto_proceso": "Evitar juicios y etiquetas rígidas.",
                "coherencia_narrativa": "Continuidad entre lecturas diarias, mensuales y anuales."
            }
        }
    },
    "140_principios_de_interpretacion": {
        "serie": "100",
        "titulo": "Principios de interpretación del sistema KAIROS",
        "tipo": "fundacional-lógico",
        "nivel": "crítico",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir los fundamentos lógicos para transformar datos en una narrativa coherente.",
        "contenido": {
            "principios_logicos": {
                "contextualizacion": "Ningún factor se lee aislado; todo dentro del ciclo vital.",
                "jerarquia": "Primero el escenario principal, luego los moduladores.",
                "activacion_simbolica": "Símbolos como potencialidades que emergen en momentos específicos.",
                "integracion_capas": "Anual (Escenario) + Tránsitos (Activación) + Luna (Clima).",
                "coherencia_simbolica": "Reconocer convergencias y articular dinámicas distintas sin contradicción.",
                "sintesis": "Priorizar relevancia sobre acumulación de datos.",
                "orientacion_consciente": "Proporcionar perspectiva para reconocer dinámicas y madurar decisiones."
            }
        }
    }
}

def ingest_serie_100():
    print("--- Iniciando Ingestión LÓGICA de la SERIE 100 ---")
    current_date = datetime.now().strftime("%Y-%m-%d")
    
    for doc_id, data in SERIE_100_DATA.items():
        print(f"Ingiriendo {doc_id} con contenido fundamentado...")
        
        fields = {
            "codigo": {"stringValue": doc_id},
            "serie": {"stringValue": data["serie"]},
            "titulo": {"stringValue": data["titulo"]},
            "tipo": {"stringValue": data["tipo"]},
            "version": {"stringValue": data["version"]},
            "estado": {"stringValue": data["estado"]},
            "objetivo": {"stringValue": data["objetivo"]},
            "fecha_actualizacion": {"stringValue": current_date},
            "contenido": {"mapValue": {"fields": to_firestore_map(data["contenido"])}}
        }
        
        status, resp = make_request(f"{BASE_URL}/{doc_id}", method='PATCH', data={'fields': fields})
        
        if status == 200:
            print(f"✅ Documento {doc_id} ingerido correctamente.")
        else:
            print(f"❌ Error en {doc_id}: {resp}")

if __name__ == "__main__":
    ingest_serie_100()
