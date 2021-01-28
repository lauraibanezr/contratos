const Sequalize = require ('sequelize');

const db = require('../config/database');

const Contrato = db.define('contrato',{
    id_contrato : {
        type: Sequalize.BIGINT,
        primaryKey: true
    },
    numero_contrato : {
        type: Sequalize.STRING
    },
    fecha_suscripcion : {
        type: Sequalize.DATE
    },
    naturaleza : {
        type: Sequalize.STRING
    },
    caracteristica : {
        type: Sequalize.STRING
    },
    partei : {
        type: Sequalize.STRING
    },
    parteii : {
        type: Sequalize.STRING
    },
    termino_pago : {
        type: Sequalize.STRING
    },
    termino_aceptar : {
        type: Sequalize.INTEGER
    },
    termino_vigencia : {
        type: Sequalize.STRING
    },
    termino_reclamacion : {
        type: Sequalize.INTEGER
    },
    termino_contestar : {
        type: Sequalize.INTEGER
    },
    fecha_culminacion : {
        type: Sequalize.DATE
    },
    ubicacion : {
        type: Sequalize.INTEGER
    },
    dictamen_tecnico : {
        type: Sequalize.STRING
    },
    responsable : {
        type: Sequalize.INTEGER
    },
    observaciones : {
        type: Sequalize.STRING
    },
    contraparte : {
        type: Sequalize.STRING
    },
    en_calle : {
        type: Sequalize.BOOLEAN
    },
    falta_contrato : {
        type: Sequalize.BOOLEAN
    },
    cce : {
        type: Sequalize.INTEGER
    },
})

module.exports = Contrato;