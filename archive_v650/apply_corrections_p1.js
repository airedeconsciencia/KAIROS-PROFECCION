const https = require('https');
const fs = require('fs');

const config = JSON.parse(fs.readFileSync('/Users/robertoriveroramos/.config/configstore/firebase-tools.json', 'utf8'));
const token = config.tokens.access_token;
const projectId = 'kairos-eng-714ee';
const docId = '550_engine_config';
const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/kairos_library/${docId}`;

const updates = [
  // 1. premium_por_capa
  {
    mask: 'premium_por_capa',
    fields: {
      premium_por_capa: {
        mapValue: {
          fields: {
            matrix: { mapValue: { fields: { estructura: { arrayValue: { values: ["sensacion_interna","por_que_te_pasa","lo_que_necesitas_regular","lo_que_necesitas_ordenar","lo_que_necesitas_integrar","que_viene_ahora","recursos_avanzados"].map(s => ({stringValue: s})) }}, que_no_incluye: { arrayValue: { values: ["practicas_sin_trazabilidad","repeticion_de_hoy","narrativa_de_anio"].map(s => ({stringValue: s})) }} } } },
            hoy: { mapValue: { fields: { estructura: { arrayValue: { values: ["tu_estado_interior_hoy","por_que_eres_sensible_a_esto","como_tomar_decisiones_hoy","que_evitar_hoy"].map(s => ({stringValue: s})) }}, que_no_incluye: { arrayValue: { values: ["practicas_fisicas","repeticion_de_matrix","narrativa_de_semana"].map(s => ({stringValue: s})) }} } } },
            semana: { mapValue: { fields: { estructura: { arrayValue: { values: ["el_ritmo_de_esta_semana","que_priorizar","que_pausar","tu_ventana_de_accion"].map(s => ({stringValue: s})) }}, que_no_incluye: { arrayValue: { values: ["practicas_fisicas","repeticion_de_hoy","narrativa_de_mes"].map(s => ({stringValue: s})) }} } } },
            mes: { mapValue: { fields: { estructura: { arrayValue: { values: ["el_tema_de_este_mes_para_ti","que_esta_queriendo_resolverse","tu_patron_emocional_del_mes","como_aprovechar_este_mes"].map(s => ({stringValue: s})) }}, que_no_incluye: { arrayValue: { values: ["practicas_fisicas","repeticion_de_semana","narrativa_de_anio"].map(s => ({stringValue: s})) }} } } },
            anio: { mapValue: { fields: { estructura: { arrayValue: { values: ["tu_tema_de_vida_este_anio","que_viene_a_activarse","tu_desafio_evolutivo","tu_mayor_recurso","momentos_clave_del_anio"].map(s => ({stringValue: s})) }}, que_no_incluye: { arrayValue: { values: ["practicas_de_ningun_tipo","repeticion_de_mes"].map(s => ({stringValue: s})) }} } } }
          }
        }
      }
    }
  },
  // 2. reglas_lenguaje
  {
    mask: 'reglas_lenguaje',
    fields: {
      reglas_lenguaje: {
        mapValue: {
          fields: {
            prohibidas: { arrayValue: { values: ["tu sistema","el cielo","frecuencia","vibracion","energia cosmica","el universo te dice","resonancia"].map(s => ({stringValue: s})) }},
            permitidas: { arrayValue: { values: ["tu patron","tu impronta","el ritmo del momento","lo que te esta activando","tu respuesta natural","tu tendencia"].map(s => ({stringValue: s})) }},
            tono: { arrayValue: { values: ["directo","calido","especifico","sin_redundancia","sin_tecnicismos_sin_explicar"].map(s => ({stringValue: s})) }}
          }
        }
      }
    }
  }
];

async function apply() {
  for (const update of updates) {
    const payload = JSON.stringify({ fields: update.fields });
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
        console.log(`Update ${update.mask}:`, res.statusCode, data);
      });
    });
    req.write(payload);
    req.end();
  }
}

apply();
