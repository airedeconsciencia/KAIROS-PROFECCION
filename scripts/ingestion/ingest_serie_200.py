
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
    if data is None: return fields
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

# --- DATOS ESTRUCTURADOS DE LA SERIE 200 ---

SERIE_200_DATA = {
    "200_significado_planetas": {
        "serie": "200",
        "titulo": "Significado de los planetas en astrología tradicional",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir el significado fundamental de los planetas tradicionales dentro del sistema interpretativo de KAIROS.",
        "contenido": {
            "naturaleza": {
                "luminarias": ["Sol", "Luna"],
                "beneficos": ["Venus", "Júpiter"],
                "maleficos": ["Marte", "Saturno"],
                "neutral": ["Mercurio"]
            },
            "catalogo": {
                "SOL": {
                    "identidad": "centro de la identidad y voluntad consciente",
                    "psicologico": "esencia, propósito, autoexpresión",
                    "funcion": "vitalidad y dirección",
                    "manifestacion": ["liderazgo", "creatividad", "autoridad"],
                    "riesgos": ["egocentrismo", "orgullo"],
                    "evolutivo": "identidad auténtica"
                },
                "LUNA": {
                    "identidad": "mundo emocional y necesidades de seguridad",
                    "psicologico": "mente inconsciente, patrones infantiles",
                    "funcion": "traducción de experiencias en respuestas emocionales",
                    "manifestacion": ["familia", "hogar", "hábitos"],
                    "riesgos": ["dependencia", "hipersensibilidad"],
                    "evolutivo": "estabilidad emocional"
                },
                "MERCURIO": {
                    "identidad": "mente racional y función de comunicación",
                    "psicologico": "pensamiento lógico, aprendizaje",
                    "funcion": "conectar ideas e interpretar realidad",
                    "manifestacion": ["lenguaje", "escritura", "comercio"],
                    "riesgos": ["ansiedad mental", "dispersión"],
                    "evolutivo": "claridad mental"
                },
                "VENUS": {
                    "identidad": "principio del placer, valor y atracción",
                    "psicologico": "autoestima, deseo de armonía",
                    "funcion": "vínculos y belleza",
                    "manifestacion": ["amor", "estética", "disfrute"],
                    "riesgos": ["dependencia afectiva", "pereza"],
                    "evolutivo": "amor propio"
                },
                "MARTE": {
                    "identidad": "acción, voluntad e instinto de defensa",
                    "psicologico": "energía que rompe inercia",
                    "funcion": "ejecutar decisiones y defender límites",
                    "manifestacion": ["confrontación", "competencia", "actividad física"],
                    "riesgos": ["agresividad", "impulsividad"],
                    "evolutivo": "valentía constructiva"
                },
                "JUPITER": {
                    "identidad": "expansión, sentido y confianza",
                    "psicologico": "deseo de crecimiento y comprensión",
                    "funcion": "expandir horizontes otorgando significado",
                    "manifestacion": ["estudios superiores", "viajes largos", "prosperidad"],
                    "riesgos": ["exageración", "arrogancia moral"],
                    "evolutivo": "sabiduría"
                },
                "SATURNO": {
                    "identidad": "principio de estructura, límite y realidad",
                    "psicologico": "disciplina, responsabilidad, conciencia del tiempo",
                    "funcion": "construir estructuras duraderas",
                    "manifestacion": ["autoridad", "profesión", "consolidación"],
                    "riesgos": ["miedo", "rigidez"],
                    "evolutivo": "resiliencia y madurez"
                }
            }
        }
    },
    "210_significado_signos": {
        "serie": "200",
        "titulo": "Significado de los signos del zodíaco",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir el significado fundamental de los doce signos como campos de expresión energética.",
        "contenido": {
            "catalogo": {
                "ARIES": {"naturaleza": "inicio e impulso", "estilo": "directo, impulsivo", "motivaciones": ["iniciar", "riesgo"], "desequilibrios": ["agresividad"], "evolutivo": "valentía"},
                "TAURO": {"naturaleza": "estabilidad y materia", "estilo": "constante, sensorial", "motivaciones": ["seguridad", "disfrute"], "desequilibrios": ["resistencia al cambio"], "evolutivo": "constancia"},
                "GEMINIS": {"naturaleza": "intercambio mental", "estilo": "comunicativo, versátil", "motivaciones": ["aprender", "información"], "desequilibrios": ["dispersión"], "evolutivo": "inteligencia flexible"},
                "CANCER": {"naturaleza": "protección y pertenencia", "estilo": "sensible, protector", "motivaciones": ["refugio", "nutrir"], "desequilibrios": ["apego", "inseguridad"], "evolutivo": "empatía"},
                "LEO": {"naturaleza": "creatividad e identidad", "estilo": "expresivo, carismático", "motivaciones": ["crear", "liderar"], "desequilibrios": ["narcisismo"], "evolutivo": "autenticidad"},
                "VIRGO": {"naturaleza": "análisis y orden", "estilo": "meticuloso, práctico", "motivaciones": ["mejorar", "ser útil"], "desequilibrios": ["perfeccionismo"], "evolutivo": "inteligencia práctica"},
                "LIBRA": {"naturaleza": "armonía y relación", "estilo": "diplomático, sociable", "motivaciones": ["vínculos", "equilibrio"], "desequilibrios": ["indecisión"], "evolutivo": "reciprocidad"},
                "ESCORPIO": {"naturaleza": "transformación profunda", "estilo": "intenso, perceptivo", "motivaciones": ["descubrir", "transformar"], "desequilibrios": ["control", "celos"], "evolutivo": "regeneración"},
                "SAGITARIO": {"naturaleza": "expansión de sentido", "estilo": "optimista, aventurero", "motivaciones": ["aprender", "viajar"], "desequilibrios": ["exageración", "dogmatismo"], "evolutivo": "sabiduría"},
                "CAPRICORNIO": {"naturaleza": "estructura y responsabilidad", "estilo": "disciplinado, estratégico", "motivaciones": ["metas", "estabilidad"], "desequilibrios": ["rigidez", "pesimismo"], "evolutivo": "logro responsable"},
                "ACUARIO": {"naturaleza": "innovación y libertad", "estilo": "original, independiente", "motivaciones": ["romper esquemas", "futuro"], "desequilibrios": ["desapego extremo"], "evolutivo": "evolución colectiva"},
                "PISCIS": {"naturaleza": "sensibilidad y disolución", "estilo": "compasivo, espiritual", "motivaciones": ["conectar universal", "sensibilidad"], "desequilibrios": ["escapismo", "confusión"], "evolutivo": "compasión"}
            }
        }
    },
    "220_significado_casas": {
        "serie": "200",
        "titulo": "Significado de las casas astrológicas",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir las doce casas como escenarios de experiencia vital.",
        "contenido": {
            "catalogo": {
                "1": {"nombre": "Identidad", "area": "cuerpo, apariencia, vitalidad", "psicologico": "proyección espontánea", "practica": "imagen personal", "evolutivo": "presencia auténtica"},
                "2": {"nombre": "Recursos", "area": "dinero, talentos, valores", "psicologico": "autovaloración", "practica": "ganar y administrar", "evolutivo": "estabilidad estable"},
                "3": {"nombre": "Entorno Próximo", "area": "comunicación, hermanos, estudios", "psicologico": "curiosidad intelectual", "practica": "intercambio diario", "evolutivo": "mente articulada"},
                "4": {"nombre": "Hogar", "area": "familia, raíces, pasado", "psicologico": "refugio interno", "practica": "vida privada", "evolutivo": "base sólida"},
                "5": {"nombre": "Creatividad", "area": "placer, hijos, romance", "psicologico": "autoexpresión", "practica": "juego y arte", "evolutivo": "gozo auténtico"},
                "6": {"nombre": "Rutina", "area": "trabajo, salud, hábitos", "psicologico": "ajuste material", "practica": "autocuidado", "evolutivo": "hábitos conscientes"},
                "7": {"nombre": "Vínculos", "area": "pareja, socios, acuerdos", "psicologico": "alteridad", "practica": "matrimonio, contratos", "evolutivo": "responsabilidad vincular"},
                "8": {"nombre": "Transformación", "area": "recursos compartidos, crisis, sombra", "psicologico": "regeneración profunda", "practica": "terapias, herencias", "evolutivo": "transmutación"},
                "9": {"nombre": "Sentido", "area": "viajes, filosofía, estudios", "psicologico": "expansión de conciencia", "practica": "creencias", "evolutivo": "visión integradora"},
                "10": {"nombre": "Vocación", "area": "profesión, estatus, autoridad", "psicologico": "responsabilidad pública", "practica": "metas", "evolutivo": "legado sólido"},
                "11": {"nombre": "Redes", "area": "amistades, grupos, ideales", "psicologico": "pertenencia social", "practica": "trabajo equipo", "evolutivo": "bien común"},
                "12": {"nombre": "Retiro", "area": "inconsciente, sueños, soledad", "psicologico": "disolución ego", "practica": "servicio silencioso", "evolutivo": "compasión sanadora"}
            }
        }
    },
    "230_fases_lunares": {
        "serie": "200",
        "titulo": "Significado de las fases lunares",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir el significado interpretativo de las fases del ciclo lunar.",
        "contenido": {
            "movimientos": ["Inicio (intención)", "Desarrollo (construcción)", "Culminación (visibilidad)", "Liberación (integración)"],
            "fases": {
                "LUNA_NUEVA": {"simbolico": "semilla", "psicologico": "intuición", "favorables": ["iniciar", "visualizar"], "riesgos": "falta de claridad"},
                "CUARTO_CRECIENTE": {"simbolico": "afirmación", "psicologico": "determinación", "favorables": ["tomar decisiones", "construir"], "riesgos": "conflictos"},
                "GIBOSA_CRECIENTE": {"simbolico": "preparación", "psicologico": "análisis", "favorables": ["revisar", "mejorar"], "riesgos": "sobreanálisis"},
                "LUNA_LLENA": {"simbolico": "culminación", "psicologico": "intensidad", "favorables": ["presentar", "evaluar"], "riesgos": "polarización"},
                "GIBOSA_MENGUANTE": {"simbolico": "distribución", "psicologico": "comunicar", "favorables": ["enseñar", "compartir"], "riesgos": "imposición"},
                "CUARTO_MENGUANTE": {"simbolico": "revisión", "psicologico": "evaluación", "favorables": ["eliminar", "redefinir"], "riesgos": "resistencia"},
                "LUNA_VIEJA": {"simbolico": "cierre", "psicologico": "desapego", "favorables": ["finalizar", "soltar"], "riesgos": "agotamiento"}
            }
        }
    },
    "240_planetas_retrogrados": {
        "serie": "200",
        "titulo": "Significado de los planetas retrógrados",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir el impacto psicológico y práctico de la retrogradación.",
        "contenido": {
            "principio": "Interiorización y revisión de la función planetaria.",
            "catalogo": {
                "MERCURIO": {"proceso": "revisión de ideas y acuerdos", "dinamica": "actividad mental interna e introspección"},
                "VENUS": {"proceso": "reevaluación de afectos y valores", "dinamica": "reflexión sobre el valor personal"},
                "MARTE": {"proceso": "revisión de estrategias de acción", "dinamica": "análisis de motivaciones previas"},
                "JUPITER": {"proceso": "revisión de ideales y expansión", "dinamica": "refinamiento del sentido personal"},
                "SATURNO": {"proceso": "revisión de compromisos y límites", "dinamica": "evaluación de la solidez estructural"}
            }
        }
    },
    "250_planeta_del_dia": {
        "serie": "200",
        "titulo": "Significado del planeta del día",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir la influencia del regente diario como modulador temporal.",
        "contenido": {
            "dias": {
                "DOMINGO": {"planeta": "Sol", "simbolico": "identidad", "energia": "activa, centrada", "favorables": ["creación", "descanso activo"], "riesgos": "orgullo"},
                "LUNES": {"planeta": "Luna", "simbolico": "emocionalidad", "energia": "receptiva, introspectiva", "favorables": ["hogar", "nutrición"], "riesgos": "hipersensibilidad"},
                "MARTES": {"planeta": "Marte", "simbolico": "impulso", "energia": "directa, rápida", "favorables": ["iniciar tareas", "acción"], "riesgos": "impaciencia"},
                "MIERCOLES": {"planeta": "Mercurio", "simbolico": "pensamiento", "energia": "ágil, mental", "favorables": ["estudiar", "comunicar"], "riesgos": "dispersión"},
                "JUEVES": {"planeta": "Júpiter", "simbolico": "sentido", "energia": "expansiva, afirmativa", "favorables": ["planificación", "enseñar"], "riesgos": "exageración"},
                "VIERNES": {"planeta": "Venus", "simbolico": "vínculo", "energia": "conciliadora, estética", "favorables": ["cultivar vínculos", "arte"], "riesgos": "pereza"},
                "SABADO": {"planeta": "Saturno", "simbolico": "estructura", "energia": "lenta, exigente", "favorables": ["organizar", "consolidar"], "riesgos": "rigidez"}
            }
        }
    },
    "260_profeccion_anual": {
        "serie": "200",
        "titulo": "Significado de la Profección Anual",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir la técnica de activación anual por casas.",
        "contenido": {
            "metodo": "30 grados por año, avance de una casa zodiacal.",
            "sistema": "Signos Enteros.",
            "casas_activadas": {
                "1": "identidad, cuerpo y salud", "2": "recursos y valor", "3": "comunicación y entorno",
                "4": "hogar y raíces", "5": "creatividad y placer", "6": "trabajo y salud diaria",
                "7": "relaciones y acuerdos", "8": "crisis y transformación", "9": "expansión y sentido",
                "10": "metas y vocación", "11": "redes y grupos", "12": "retiro e introspección"
            }
        }
    },
    "270_senor_del_ano": {
        "serie": "200",
        "titulo": "Significado del Señor del Año",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir el papel del regente anual como dominante del ciclo.",
        "contenido": {
            "definicion": "Gobernante del tiempo (Cronocrátor) de un cumpleaños al siguiente.",
            "naturaleza": {
                "benéficos": "expansión y armonía",
                "maléficos": "esfuerzo y disciplina",
                "luminarias": "visibilidad y emocionalidad"
            },
            "evaluacion": ["Dignidad esencial", "Dignidad accidental", "Secta planetaria"]
        }
    },
    "280_elementos_y_modalidades": {
        "serie": "200",
        "titulo": "Significado de elementos, modalidades y polaridades",
        "tipo": "biblioteca-base",
        "version": "1.0",
        "estado": "activo",
        "objetivo": "Definir las estructuras energéticas base de los signos.",
        "contenido": {
            "elementos": {
                "FUEGO": {"psicologico": "impulso, afirmación", "accion": "directa, rápida"},
                "TIERRA": {"psicologico": "realismo, estabilidad", "accion": "lenta, metódica"},
                "AIRE": {"psicologico": "curiosidad, comprensión", "accion": "ágil, versátil"},
                "AGUA": {"psicologico": "sensibilidad, resonancia", "accion": "receptiva, profunda"}
            },
            "modalidades": {
                "CARDINAL": {"funcion": "abrir procesos", "movimiento": "impulsor"},
                "FIJO": {"funcion": "fortalecer procesos", "movimiento": "sostenido"},
                "MUTABLE": {"funcion": "ajustar y transformar", "movimiento": "flexible"}
            },
            "polaridades": {"ACTIVA": "extrovertida, proyectiva", "RECEPTIVA": "introvertida, contenedora"}
        }
    }
}

def ingest_serie_200():
    print("--- Iniciando Ingestión LÓGICA de la SERIE 200 ---")
    current_date = datetime.now().strftime("%Y-%m-%d")
    
    for doc_id, data in SERIE_200_DATA.items():
        print(f"Ingiriendo {doc_id}...")
        
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
    ingest_serie_200()
