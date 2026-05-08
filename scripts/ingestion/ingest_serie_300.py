import json
import urllib.request
import urllib.error
import os

# Firebase Config
PROJECT_ID = "kairos-eng-714ee"
FIRESTORE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"
COLLECTION = "kairos_library"

# Load Firebase Token 
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

# The Series 300 Content
DOCS_300 = [
    {
        "codigo": "301_planeta_en_signo",
        "serie": "300",
        "titulo": "Principio interpretativo de planeta en signo",
        "tipo": "Regla Interpretativa",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir la regla interpretativa general que utiliza KAIROS para comprender cómo se expresa un planeta cuando se encuentra en un signo.",
        "contenido": {
            "definiciones_clave": {
                "planeta_en_signo": "Combinación astrológica en la que una función planetaria se expresa a través del estilo energético de un signo zodiacal.",
                "funcion_psicologica": "Principio activo que representa qué energía actúa en la psique o en la experiencia.",
                "estilo_energetico": "Modo de expresión que define cómo se manifiesta la función del planeta.",
                "combinacion_interpretativa": "Proceso por el cual KAIROS integra significado planetario y estructura del signo en una sola lectura coherente.",
                "modificacion_estructural": "Cambio en la forma de expresión del planeta producido por el elemento, modalidad y polaridad del signo."
            },
            "reglas_interpretativas": {
                "principio_basico": "El planeta indica QUÉ función actúa; el signo indica CÓMO actúa (su estilo expresivo). La esencia de la función permanece.",
                "interaccion_funcion_estilo": {
                    "afinidad_estructural": "Naturaleza del signo facilita; fluye naturalmente.",
                    "desafio_estructural": "Introducen fricción/paradoja; requiere ajuste/madurez.",
                    "matiz_especifico": "Signo aporta cualidad modificadora particular."
                },
                "modificadores": {
                    "elemento": "Sustancia (Fuego: impulso, Tierra: concreto, Aire: intercambio, Agua: resonancia emotiva).",
                    "modalidad": "Ritmo (Cardinal: iniciar, Fija: sostener, Mutable: adaptar).",
                    "polaridad": "Dirección (Activa: exterioriza, Receptiva: interioriza)."
                },
                "orden_logico": "planeta > signo > elemento > modalidad > polaridad"
            }
        }
    },
    {
        "codigo": "302_planeta_en_casa",
        "serie": "300",
        "titulo": "Principio interpretativo de planeta en casa",
        "tipo": "Regla Interpretativa",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir la regla interpretativa general que utiliza KAIROS para comprender cómo se manifiesta un planeta cuando actúa dentro de una casa astrológica.",
        "contenido": {
             "definiciones_clave": {
                "planeta_en_casa": "Combinación donde una función planetaria se focaliza en un área específica de la experiencia humana.",
                "area_experiencia": "Escenario de vida donde se manifiestan procesos concretos.",
                "escenario_manifestacion": "Campo donde la energía planetaria se vuelve operativa."
            },
            "reglas_interpretativas": {
                "principio_basico": "El planeta aporta el contenido de la experiencia (QUÉ), la casa aporta el terreno donde se vuelve concreta (DÓNDE).",
                "interaccion": {
                    "focalizacion_natural": "Escenario donde la función es visible y operativa.",
                    "desplazamiento_interes": "La energía orienta atención a temas de la casa.",
                    "intensificacion": "Los temas de la casa adquieren mayor peso psicológico."
                },
                "manifestaciones": {
                    "psicologica": "Es área de inversión energética consciente, indicando tensiones o talentos.",
                    "practica": "Escenarios concretos en que se verán con facilidad los procesos del planeta."
                },
                "variacion_naturaleza_planeta": {
                    "luminarias": "Area clave del esquema identitario / seguridad.",
                    "personales": "Area de cotidianidad activa (pensamiento, goce, pelea).",
                    "sociales": "Area de aprendizaje estructural expansivo o contractivo."
                }
            }
        }
    },
    {
        "codigo": "303_senor_del_ano_por_planeta",
        "serie": "300",
        "titulo": "Señor del Año por planeta",
        "tipo": "Catálogo Relacional",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Definir el significado interpretativo general de cada planeta cuando actúa como Señor del Año en profecciones.",
        "contenido": {
            "reglas_base": "Es el cronocrátor; administra el tono psicológico general y los asuntos focales del año.",
            "planetas": {
                "sol": {
                    "clima_psicologico": "Centralidad, vitalidad y autoafirmación.",
                    "temas": ["liderazgo", "reconocimiento", "vocación", "jerarquía"],
                    "potencial": "Consolidar identidad y brillar maduramente."
                },
                "luna": {
                    "clima_psicologico": "Receptividad, seguridad afectiva, fluctuación.",
                    "temas": ["hogar", "raíces", "familia", "cuerpo", "cuidado"],
                    "potencial": "Sustento emocional profundo y sanación vincular origen."
                },
                "mercurio": {
                    "clima_psicologico": "Móvil, curioso, mental.",
                    "temas": ["intercambio", "viajes cortos", "estudio", "contratos"],
                    "potencial": "Ordenar pensamiento, fluidez en herramientas prácticas."
                },
                "venus": {
                    "clima_psicologico": "Armónico, estético, relacional.",
                    "temas": ["pareja", "vínculo", "confort", "dinero", "reciprocidad"],
                    "potencial": "Autoestima, equilibrio y embellecimiento vital."
                },
                "marte": {
                    "clima_psicologico": "Cortante, dinámico, asertivo.",
                    "temas": ["acción", "fricción", "corte", "emprendimiento", "defensa"],
                    "potencial": "Aprender valentía, forja de límites y empuje."
                },
                "jupiter": {
                    "clima_psicologico": "Expansivo, optimista, amplio.",
                    "temas": ["viajes largos", "estudios superiores", "posibilidad", "guías"],
                    "potencial": "Expandir visión vital y fe sólida."
                },
                "saturno": {
                    "clima_psicologico": "Exigente, lento, realista.",
                    "temas": ["límites", "responsabilidad", "construcción", "esfuerzo"],
                    "potencial": "Purga, consolidación, convertirse en propia autoridad."
                }
            }
        }
    },
    {
        "codigo": "304_casa_activada_por_profeccion",
        "serie": "300",
        "titulo": "Casa activada por profección anual",
        "tipo": "Catálogo Relacional",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Significado astropsicológico y práctico de la Casa Activada como núcleo del escenario anual.",
        "contenido": {
            "principio_base": "Establece DÓNDE ocurre el ciclo central el año. Sus nodos natales (planetas in-house) matizan dicha etapa.",
            "casas": {
                "1": {"psicologia": "Reafirmación de identidad", "practica": "Cuerpo, inicio", "potencial": "Renovación autónoma"},
                "2": {"psicologia": "Seguridad material/vital", "practica": "Dinero, inversión", "potencial": "Madurez valorativa"},
                "3": {"psicologia": "Racionalidad y curiosidad", "practica": "Viajes breves, comunicación", "potencial": "Eficiencia mental"},
                "4": {"psicologia": "Intimidad, arraigo", "practica": "Hogar, propiedades", "potencial": "Sanación ancestral base"},
                "5": {"psicologia": "Singularidad, pasión", "practica": "Hijos, arte, sexo, goce", "potencial": "Expresión de esencia libre"},
                "6": {"psicologia": "Metodología, orden", "practica": "Empleo, dietas, síntomas", "potencial": "Salud y eficiencia sistemática"},
                "7": {"psicologia": "Espejeo y alteridad", "practica": "Socios, parejas legales, juicios", "potencial": "Integración del espejo mutuo"},
                "8": {"psicologia": "Caída y renacimiento", "practica": "Herencias, duelo, transmutación", "potencial": "Soltar apegos críticos"},
                "9": {"psicologia": "Consciencia magna, sentido", "practica": "Extranjero, academia magister", "potencial": "Cosmovisión firme"},
                "10": {"psicologia": "Estructura formal, cénit", "practica": "Avance profesional, status", "potencial": "Autoridad genuina y social"},
                "11": {"psicologia": "Visión supra-social", "practica": "Grupos, ongs, aspiradores, redes", "potencial": "Individualidad pro-colectivo"},
                "12": {"psicologia": "Retiro psíquico, misticismo", "practica": "Parálisis exterior, asilos", "potencial": "Nirvana y cierre de karmas"}
            }
        }
    },
    {
        "codigo": "305_luna_en_transito_por_signo",
        "serie": "300",
        "titulo": "Luna en tránsito por signo",
        "tipo": "Catálogo Relacional",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Modulador diario del clima psicológico (~2.5d).",
        "contenido": {
            "regla_interpretativa": "Altera temporalmente forma de buscar alergia, contacto y seguridad. Da el tono al biorritmo anímico diario.",
            "catalogo": {
                "aries": "Rápido, impulsivo; necesita arranque.",
                "tauro": "Pausado, sensorial; necesita rutina material.",
                "geminis": "Curioso, disperso; exige estímulo mental.",
                "cancer": "Búnker, íntimo; exige protección extrema.",
                "leo": "Dramático, radiante; ansía centro y juego.",
                "virgo": "Micro-analítico, escrupuloso; se relaja ordenando.",
                "libra": "Diplomático, societario; no tolera disonancias.",
                "escorpio": "Profundo, catártico; indaga y escinde lo muerto.",
                "sagitario": "Filosófico, nómada; escapa del confinamiento.",
                "capricornio": "Seco, hierático; encuentra paz en la eficiencia/regla.",
                "acuario": "Vanguardista, gregario remoto; necesita alteridad sin ahogo.",
                "piscis": "Blando, empático; pide retiro y no-presión total."
            }
        }
    },
    {
        "codigo": "306_sol_actual_por_signo",
        "serie": "300",
        "titulo": "Sol actual por signo",
        "tipo": "Catálogo Relacional",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Configura el EJE DE GRAVEDAD mensual / clima general de atención sistémica del mes zodiacal.",
        "contenido": {
            "regla_interpretativa": "Tono de vitalidad exterior. No redefine la carta natal, pero pone iluminación estrucutral sobre temáticas colectivas.",
            "catalogo": {
                "aries": "Acción viril/marcial, impaciencia de inicio.",
                "tauro": "Pausa degustativa, acopio capital.",
                "geminis": "Versatilidad nerviosa, diálogo febril.",
                "cancer": "Tono protector, familiarismo, melancolía vital.",
                "leo": "Autoexpresión real, luz creativa directa.",
                "virgo": "Podas, utilitarismo, reordenamiento funcional de la psique.",
                "libra": "Búsqueda gremial, belleza diplomática pacificadora.",
                "escorpio": "Submundo, terapia alquímica, purga colectiva.",
                "sagitario": "Idealismo, viajes de sentido, esperanza filosófica.",
                "capricornio": "Acentuación del deber, clima estricto/organizacional.",
                "acuario": "Fraternidad utópica, electricidad cerebral asíncrona.",
                "piscis": "Disolución de límites, caos inspirado y sensible."
            }
        }
    },
    {
        "codigo": "307_cruces_luna_transito_profeccion",
        "serie": "300",
        "titulo": "Cruces de Luna en tránsito y casa activada por profección",
        "tipo": "Regla de Cruce Temporal",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Lectura avanzada del detonante lunar corto sobre el nodo pro-anual.",
        "contenido": {
            "principio_interpretativo": "Cuando la luna cruza el territorio profectado anual, los asuntos que dominan el año se sienten con brutal agudeza emocional por 2 o 3 días.",
            "uso_kairos": "Excelente para modular consejos en Matrix Emocional y Radares Diarios, previniendo reacciones a los aprendizajes magister."
        }
    },
    {
        "codigo": "308_cruces_planeta_dia_senor_del_ano",
        "serie": "300",
        "titulo": "Cruces entre planeta del día y Señor del Año",
        "tipo": "Regla de Cruce Temporal",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Lectura comparativa Cítrica vs Estructural (Regente del día vs Cronocrátor).",
        "contenido": {
            "resonancia": "El día lo gobierna el Cronocrátor (Ej: Año Marte, martes); turbina el año pro., se asientan directrices con gran facilidad natural.",
            "contraste": "El día está regido por cualidad antagónica (Ej: Año Saturno, viernes). Obliga a transacciones de energía, a flexibilizar la regla del dictador anual."
        }
    },
    {
        "codigo": "309_cruces_sol_luna_planeta_activo",
        "serie": "300",
        "titulo": "Cruces entre Sol, Luna y Planeta Activo",
        "tipo": "Triada Interpretativa",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Metacomprensión holística en KAIROS.",
        "contenido": {
             "capas": {
                 "sol": "HACIA DÓNDE (Vector voluntad-mes)",
                 "luna": "DESDE DÓNDE (Textura emocional biorrítmica-día)",
                 "planeta_activo": "CÓMO METER MANO (Energía ejecutiva operante)"
             },
             "síntesis": "Permite resolver la complejidad diaria indicando dónde hay facilidades y dónde incoherencias psíquicas transitorias."
        }
    },
    {
        "codigo": "310_cruces_retrogradacion_y_clima",
        "serie": "300",
        "titulo": "Cruces entre retrogradación y clima interpretativo",
        "tipo": "Regla Modificadora",
        "version": "1.0",
        "estado": "activo",
        "fecha_actualizacion": "2026-03-13",
        "objetivo": "Cómo la (R) afecta la modulación predictiva en KAIROS.",
        "contenido": {
            "efectos_primarios": "Desplaza la narrativa de 'Actúa y Empuja' hacia 'Revisa, Recalibra e Internaliza'.",
            "jerarquia": "Si el Astro Retrógrado es el Cronocrátor, el año atraviesa fases agudas de replanteamiento del núcleo anual. Modificador clave del clima."
        }
    }
]

def format_firestore_value(val):
    """Recursively formats dicts/lists/strings to Firestore typed JSON."""
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
        if e.code == 409: # Already exists, patch it
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
    print(f"--- Iniciando Ingestión LÓGICA de la SERIE 300 en {PROJECT_ID} ---")
    success_count = 0
    for doc in DOCS_300:
        print(f"Ingiriendo {doc['codigo']}...")
        if upload_document(doc):
            success_count += 1
            
    print(f"--- Ingestión finalizada: {success_count}/{len(DOCS_300)} exitosos ---")
