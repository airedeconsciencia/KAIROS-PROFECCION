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

def ingest_document(doc_id, data, token):
    url = f"{BASE_URL}/{doc_id}"
    
    firestore_data = {"fields": {}}
    for key, value in data.items():
        if isinstance(value, str):
            firestore_data["fields"][key] = {"stringValue": value}
        elif isinstance(value, dict) or isinstance(value, list):
            firestore_data["fields"][key] = {"stringValue": json.dumps(value, ensure_ascii=False)}

    json_payload = json.dumps(firestore_data).encode('utf-8')
    
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    
    try:
        req = urllib.request.Request(url, data=json_payload, headers=headers, method='PATCH')
        with urllib.request.urlopen(req) as response:
            if response.status == 200:
                print(f"✅ Documento {doc_id} ingerido correctamente.")
            else:
                print(f"⚠️ Doc {doc_id} HTTP Status: {response.status}")
    except urllib.error.HTTPError as e:
        print(f"❌ Error al ingerir {doc_id}: {e.code} - {e.reason}")
        error_body = e.read().decode('utf-8')
        print(error_body)

def get_serie_700_data():
    return {
        "701_modelo_de_usuario": {
            "codigo": "701_modelo_de_usuario",
            "serie": "700",
            "titulo": "Modelo de usuario de KAIROS",
            "tipo": "Producto e Infraestructura",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir qué tipos de usuarios existen dentro de KAIROS, qué información compone su perfil y cómo ese perfil se integra con el motor interpretativo, la biblioteca de conocimiento y el sistema de suscripción.",
            "contenido": {
                "tipos_de_usuario": {
                    "anonimo": "Prueba del producto y onboarding inicial. Sin historial permanente.",
                    "registrado": "Uso regular. Guarda datos natales, configuración y recibe interpretaciones personalizadas.",
                    "premium": "Uso intensivo. Accede a mayor profundidad interpretativa, continuidad temporal y archivo."
                },
                "bloques_informacion_perfil": [
                    "Identidad de cuenta (user_id, email, estado)",
                    "Datos natales mínimos (necesarios para el cálculo base)",
                    "Datos astrológicos calculados (separados entre perfil ligero e historial profundo)",
                    "Estado interpretativo actual (separado en semiestable y dinámico)",
                    "Preferencias de experiencia (idioma, tono, notificaciones)",
                    "Estado de producto y suscripción",
                    "Historial e interacción"
                ],
                "relacion_motor_interpretativo": {
                    "identificacion": "Saber para quién se interpreta",
                    "base_natal": "Constituye la base estructural",
                    "ciclo_actual": "Tránsitos y profecciones calculados desde el tiempo y la carta",
                    "ajuste_salida": "Modulación por idioma, tono, longitud y frecuencia",
                    "persistencia": "Construir continuidad entre lecturas (diaria, semanal, mensual)"
                },
                "principio_arquitectonico": "El perfil es el punto de unión entre autenticación, datos natales, motor interpretativo, persistencia de resultados y monetización."
            }
        },
        "702_niveles_free_vs_premium": {
            "codigo": "702_niveles_free_vs_premium",
            "serie": "700",
            "titulo": "Niveles de acceso del producto: Free vs Premium",
            "tipo": "Producto e Infraestructura",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir las estructuras de los niveles de acceso (Free y Premium) y cómo limitan o desbloquean funciones y el uso del motor interpretativo.",
            "contenido": {
                "nivel_free": {
                    "objetivo": "Demostrar valor, introducir la lógica y permitir uso diario ligero.",
                    "funciones": [
                        "Información contextual básica (clima general, fase lunar)",
                        "Lectura diaria simplificada",
                        "Visualización básica de carta natal",
                        "Acceso restringido al historial"
                    ]
                },
                "nivel_premium": {
                    "objetivo": "Ofrecer profundidad interpretativa, continuidad temporal y seguimiento.",
                    "funciones": [
                        "Lectura diaria completa",
                        "Lectura semanal y mensual",
                        "Interpretación del ciclo anual",
                        "Matrix cuerpo-mente-espíritu",
                        "Archivo histórico completo",
                        "Notificaciones personalizadas"
                    ]
                },
                "lógica_del_motor": {
                    "modo_free": "Usa subconjunto reducido de reglas; interpretaciones más genéricas y cortas.",
                    "modo_premium": "Utiliza todas las capas, enlaza ciclos y contexto personal completo."
                }
            }
        },
        "703_reglas_de_desbloqueo": {
            "codigo": "703_reglas_de_desbloqueo",
            "serie": "700",
            "titulo": "Reglas de desbloqueo de funciones en KAIROS",
            "tipo": "Producto e Infraestructura",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir cuándo una función, vista o nivel interpretativo está bloqueado o habilitado para un usuario.",
            "contenido": {
                "tipos_de_desbloqueo": [
                    "Desbloqueo por acceso básico (anonimo)",
                    "Desbloqueo por registro (perfil persistente)",
                    "Desbloqueo por datos natales completos (permite cálculo del núcleo)",
                    "Desbloqueo por suscripción premium (acceso a experiencia completa)"
                ],
                "experiencia_de_usuario": {
                    "mostrar_valor": "Mostrar vista previa del beneficio que ofrece la función bloqueada.",
                    "incentivar_conversion": "El bloqueo como invitación clara a avanzar de nivel (completar datos o pagar).",
                    "coherencia": "Lógica consistente en toda la app."
                },
                "flujo_motor": "El motor verifica: tipo de usuario -> registro -> carta natal -> suscripción antes de ejecutar y ensamblar la información."
            }
        },
        "704_pasarela_de_pago": {
            "codigo": "704_pasarela_de_pago",
            "serie": "700",
            "titulo": "Integración de pasarela de pago y gestión de suscripciones",
            "tipo": "Producto e Infraestructura",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir cómo se gestionan transacciones y cómo se reflejan en el perfil del usuario para habilitar las capas premium del sistema.",
            "contenido": {
                "roles_pasarela": "Procesar transacciones (externas), confirmar resultados al backend KAIROS y desencadenar actualización del estado de usuario.",
                "flujo_general": "Selección plan -> Pago -> Validación Webhook/Pasarela -> Actualización Perfil -> Activación UI y Motor.",
                "estados_suscripcion": ["Sin suscripción", "Activa", "Cancelada (hasta expiración)", "Expirada", "Pago fallido"],
                "integracion_perfil": "Campos como 'plan_activo', 'estado_suscripcion', 'fecha_fin_plan' son la única fuente de verdad dentro de la app para decidir acceso."
            }
        },
        "705_estado_de_suscripcion": {
            "codigo": "705_estado_de_suscripcion",
            "serie": "700",
            "titulo": "Gestión del estado de suscripción dentro del sistema KAIROS",
            "tipo": "Producto e Infraestructura",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir operativamente cómo los estados de la base de datos controlan el paso a premium.",
            "contenido": {
                "estados_tecnicos": {
                    "sin_suscripcion": "Funciones free.",
                    "suscripcion_activa": "Acceso total premium.",
                    "suscripcion_cancelada": "Mantiene premium hasta la fecha de expiración.",
                    "suscripcion_expirada": "Retorno a free al caducar.",
                    "pago_fallido": "Intento de cobro fallido.",
                    "periodo_de_gracia": "Premium temporal mientras se reintenta cobro."
                },
                "regla_de_acceso": "El sistema de desbloqueo consulta exclusivamente el estado_suscripcion y el plan_activo del perfil del usuario."
            }
        },
        "706_permisos_de_lectura": {
            "codigo": "706_permisos_de_lectura",
            "serie": "700",
            "titulo": "Sistema de permisos de lectura dentro del motor interpretativo",
            "tipo": "Producto e Infraestructura",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir cómo el bloque de permisos actúa como portero entre el usuario y la ejecución real del motor de astrología KAIROS.",
            "contenido": {
                "modulos_free": ["lectura_diaria_simple", "fase_lunar", "planeta_del_dia"],
                "modulos_premium": ["lectura_diaria_completa", "lectura_semanal", "lectura_mensual", "lectura_anual", "matrix_cuerpo_mente_espiritu", "historial"],
                "mecanismo_control": "Antes de procesar, la API de KAIROS evalúa (módulo_solicitado + plan_activo). Evita consumo de cómputo inútil si el usuario no tiene permisos."
            }
        },
        "707_activacion_de_funciones": {
            "codigo": "707_activacion_de_funciones",
            "serie": "700",
            "titulo": "Sistema de activación de funciones en la interfaz de KAIROS",
            "tipo": "Producto e Infraestructura",
            "version": "1.0",
            "estado": "activo",
            "fecha_actualizacion": "2026-03-13",
            "objetivo": "Definir cómo la interfaz de usuario de KAIROS (Frontend) reacciona dinámicamente según el backend y el estado de permisos.",
            "contenido": {
                "logica_interfaz": "La UI nunca asume accesos. Consulta al backend y construye pantallas en base al estado_suscripcion y los permisos de lectura.",
                "ux_funciones_bloqueadas": [
                    "Icono de bloqueo (candado)",
                    "Mensaje claro de qué hacer (Call to Action de upgrade)",
                    "Vista limitada/Difuminada para mostrar valor sin entregar el resultado completo."
                ],
                "integracion_total": "Usuario -> Perfil -> Suscripción -> Permisos Motor -> Renderizado de UI."
            }
        }
    }

def run_ingestion():
    print(f"--- Iniciando Ingestión LÓGICA de la SERIE 700 en {PROJECT_ID} ---")
    token = get_access_token()
    if not token:
        print("❌ Error: No se pudo obtener el token de Firebase.")
        return

    data = get_serie_700_data()
    
    success_count = 0
    for doc_id, doc_data in data.items():
        print(f"Ingiriendo {doc_id}...")
        ingest_document(doc_id, doc_data, token)
        success_count += 1
        
    print(f"--- Ingestión finalizada ---")

if __name__ == "__main__":
    run_ingestion()
