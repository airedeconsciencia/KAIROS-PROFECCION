const https = require('https');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('/Users/robertoriveroramos/.config/configstore/firebase-tools.json', 'utf8'));
const token = config.tokens.access_token;
const projectId = 'kairos-eng-714ee';
const docId = '550_engine_config';
const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/kairos_library/${docId}`;

const updates = [
  // 5. factores_por_capa
  {
    mask: 'factores_por_capa',
    doc: {
      factores_por_capa: {
        mapValue: {
          fields: {
            anio: { arrayValue: { values: ["profeccion_anual","senor_del_anio","casa_activada","transitos_mayores_del_senor"].map(s => ({stringValue: s})) }},
            mes: { arrayValue: { values: ["transito_solar","casa_natal_activada_por_sol","fase_lunar_dominante","modulacion_senor_del_anio"].map(s => ({stringValue: s})) }},
            semana: { arrayValue: { values: ["fase_lunar_semanal","dia_con_mejor_aspecto_para_usuario","aspectos_rapidos","contexto_senor_del_anio"].map(s => ({stringValue: s})) }},
            hoy: { arrayValue: { values: ["luna_actual","planeta_del_dia","cruce_luna_actual_natal"].map(s => ({stringValue: s})) }},
            matrix: { mapValue: { fields: {
              factores_astrales: { arrayValue: { values: ["planeta_del_dia","luna_actual","cruce_natal"].map(s => ({stringValue: s})) }},
              resultado_detectado: { arrayValue: { values: ["necesidad_detectada"].map(s => ({stringValue: s})) }},
              biblioteca_intervencion: { arrayValue: { values: ["serie_800"].map(s => ({stringValue: s})) }}
            }}}
          }
        }
      }
    }
  },
  // ADICION 1. jerarquia_global_sistema
  {
    mask: 'jerarquia_global_sistema',
    doc: {
      jerarquia_global_sistema: {
        mapValue: {
          fields: {
            orden: { arrayValue: { values: ["carta_natal","profeccion_anual_y_senor_del_anio","transitos_relevantes","ritmo_lunar_y_planeta_del_dia"].map(s => ({stringValue: s})) }},
            regla: { stringValue: "Los niveles inferiores modulan pero nunca anulan el sentido estructural de los superiores. La carta natal es el mapa base inmutable. La profeccion define el tema del anio. Los transitos modulan ese tema. La luna y el planeta del dia son la textura del momento." },
            aplicacion_en_premium: { stringValue: "Cuando hay conflicto entre factores, el factor de mayor jerarquia define el sentido del contenido y el inferior aporta matiz." }
          }
        }
      }
    }
  },
  // ADICION 2. pipeline_matrix
  {
    mask: 'pipeline_matrix',
    doc: {
      pipeline_matrix: {
        mapValue: {
          fields: {
            secuencia: { arrayValue: { values: ["leer_factores","detectar_necesidad","traducir_a_accion","filtrar_serie_800","seleccionar_recurso","renderizar_salida"].map(s => ({stringValue: s})) }},
            descripcion: { mapValue: { fields: {
              leer_factores: { stringValue: "leer planeta_del_dia, luna_actual y cruce_natal activos" },
              detectar_necesidad: { stringValue: "aplicar tabla_planetas del motor_decision para obtener necesidad principal y secundaria" },
              traducir_a_accion: { stringValue: "aplicar regla_traduccion: planeta_activo -> necesidad -> accion" },
              filtrar_serie_800: { stringValue: "filtrar practicas de serie_800 por necesidad_detectada (calmar/activar/enfocar)" },
              seleccionar_recurso: { stringValue: "seleccionar practicas que mejor corresponden al contexto del dia segun jerarquia_global_sistema" },
              renderizar_salida: { stringValue: "generar bloques de matrix_premium en el orden definido en premium_por_capa.matrix.estructura" }
            }}}
          }
        }
      }
    }
  },
  // ADICION 3. sistema_anticipacion (REEMPLAZAR BLOQUE)
  {
    mask: 'sistema_anticipacion',
    doc: {
      sistema_anticipacion: {
        mapValue: {
          fields: {
            activo: { booleanValue: true },
            eventos_monitorizados: { arrayValue: { values: ["transito_exacto_planeta_natal","cambio_fase_lunar_relevante","activacion_senor_del_anio","retorno_lunar","ingreso_sol_casa_natal"].map(s => ({stringValue: s})) }},
            peso_evento: { mapValue: { fields: {
              transito_exacto_planeta_natal: { integerValue: "4" },
              retorno_lunar: { integerValue: "4" },
              activacion_senor_del_anio: { integerValue: "3" },
              ingreso_sol_casa_natal: { integerValue: "2" },
              cambio_fase_lunar_relevante: { integerValue: "1" }
            }}},
            umbral_visibilidad: { integerValue: "2" },
            nota_umbral: { stringValue: "Solo se anticipan eventos con peso igual o mayor al umbral. Esto evita saturar al usuario con anticipaciones irrelevantes." },
            conexion_con_tema_anual: { stringValue: "El sistema prioriza eventos que refuerzan o contrastan el tema del Senor del Anio actual. Eventos de peso 1 solo se muestran si refuerzan el tema anual." },
            fases: { mapValue: { fields: {
              antes: { mapValue: { fields: { dias: { stringValue: "3_a_7" }, accion: { stringValue: "generar_expectativa_y_preparacion" } } } },
              inminente: { mapValue: { fields: { dias: { stringValue: "1_a_2" }, accion: { stringValue: "aviso_especifico_de_proximidad" } } } },
              durante: { mapValue: { fields: { accion: { stringValue: "explicacion_premium_completa_maxima_precision" } } } },
              despues: { mapValue: { fields: { dias: { stringValue: "1_a_3" }, accion: { stringValue: "integracion_que_ha_movido_que_queda_activo" } } } }
            }}}
          }
        }
      }
    }
  }
];

async function apply() {
  for (const update of updates) {
    const payload = JSON.stringify({ fields: update.doc });
    const options = {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    const req = https.request(`${url}?updateMask.fieldPaths=${update.mask}`, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => console.log(`Update ${update.mask}:`, res.statusCode));
    });
    req.write(payload);
    req.end();
    await new Promise(r => setTimeout(r, 200));
  }
}

apply();
