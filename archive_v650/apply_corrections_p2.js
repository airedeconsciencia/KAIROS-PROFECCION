const https = require('https');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('/Users/robertoriveroramos/.config/configstore/firebase-tools.json', 'utf8'));
const token = config.tokens.access_token;
const projectId = 'kairos-eng-714ee';
const docId = '550_engine_config';
const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/kairos_library/${docId}`;

const updates = [
  // 3. matrix_premium
  {
    mask: 'matrix_premium',
    doc: {
      matrix_premium: {
        mapValue: {
          fields: {
            sensacion_interna: { mapValue: { fields: { fuente: { arrayValue: { values: [{stringValue: "luna_actual"}, {stringValue: "luna_natal"}] }}, funcion: {stringValue: "estado_emocional_real"}, tipo_salida: {stringValue: "texto_narrativo_personal"} }}},
            por_que_te_pasa: { mapValue: { fields: { fuente: { arrayValue: { values: [{stringValue: "senor_del_anio"}, {stringValue: "ascendente"}] }}, funcion: {stringValue: "explicacion_estructural_natal"}, tipo_salida: {stringValue: "texto_narrativo_con_referencia_natal"} }}},
            lo_que_necesitas_regular: { mapValue: { fields: { fuente: { arrayValue: { values: [{stringValue: "planeta_del_dia"}] }}, funcion: {stringValue: "regulacion_nerviosa_biologica"}, tipo_salida: {stringValue: "instruccion_practica_breve"}, nota: {stringValue: "no usar la palabra cuerpo - ya aparece en la base"} }}},
            lo_que_necesitas_ordenar: { mapValue: { fields: { fuente: { arrayValue: { values: [{stringValue: "planeta_del_dia"}, {stringValue: "mercurio_natal"}] }}, funcion: {stringValue: "direccion_cognitiva"}, tipo_salida: {stringValue: "instruccion_decisional_breve"}, nota: {stringValue: "no usar la palabra mente - ya aparece en la base"} }}},
            lo_que_necesitas_integrar: { mapValue: { fields: { fuente: { arrayValue: { values: [{stringValue: "senor_del_anio"}, {stringValue: "luna_actual"}] }}, funcion: {stringValue: "integracion_patron_interno"}, tipo_salida: {stringValue: "texto_reflexivo_breve"} }}},
            que_viene_ahora: { mapValue: { fields: { fuente: { arrayValue: { values: [{stringValue: "movimiento_lunar_proximo"}, {stringValue: "siguiente_aspecto_relevante"}] }}, funcion: {stringValue: "anticipacion_temporal"}, tipo_salida: {stringValue: "texto_prospectivo_con_cuenta_atras"} }}},
            recursos_avanzados: { mapValue: { fields: { fuente: { arrayValue: { values: [{stringValue: "serie_800"}, {stringValue: "necesidad_detectada"}] }}, funcion: {stringValue: "practicas_filtradas"}, tipo_salida: {stringValue: "card_interna_desplegable"}, nota: {stringValue: "nunca alert() del navegador"} }}},
          }
        }
      }
    }
  },
  // 4. motor_cruce_personal
  {
    mask: 'motor_cruce_personal',
    doc: {
      motor_cruce_personal: {
        mapValue: {
          fields: {
            funcion: {stringValue: "incrementar_precision_contenido"},
            activa_premium: {booleanValue: false},
            nota: {stringValue: "Premium activo si el usuario tiene suscripcion activa. El cruce define profundidad del contenido, no el acceso."},
            peso_por_tipo_cruce: { mapValue: { fields: {
              transito_exacto_planeta_natal: {integerValue: "4"},
              luna_actual_luna_natal: {integerValue: "3"},
              senor_anio_ascendente: {integerValue: "3"},
              transito_casa_natal: {integerValue: "2"},
              repeticion_patron_planetario: {integerValue: "2"}
            }}},
            aplica_en_capas: { mapValue: { fields: { matrix: {booleanValue: true}, hoy: {booleanValue: true}, semana: {booleanValue: true}, mes: {booleanValue: true}, anio: {booleanValue: true} }}},
            relacion_con_senor_del_anio: {stringValue: "Cualquier cruce que involucre al Senor del Anio o la casa que rige recibe un bonus de +1 en su peso calculado."},
            nivel_precision_resultante: { mapValue: { fields: {
              peso_total_0_a_2: {stringValue: "contenido_premium_base_con_senor_anio_y_ascendente"},
              peso_total_3_a_5: {stringValue: "contenido_premium_personalizado"},
              peso_total_6_o_mas: {stringValue: "contenido_premium_maxima_precision"}
            }}},
            tipos_cruce: { mapValue: { fields: {
              transito_planeta_natal: {booleanValue: true},
              transito_casa_natal: {booleanValue: true},
              luna_actual_luna_natal: {booleanValue: true},
              senor_anio_ascendente: {booleanValue: true},
              repeticion_patron_planetario: {booleanValue: true}
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
      res.on('end', () => {
        console.log(`Update ${update.mask}:`, res.statusCode);
      });
    });
    req.write(payload);
    req.end();
    await new Promise(r => setTimeout(r, 200));
  }
}

apply();
