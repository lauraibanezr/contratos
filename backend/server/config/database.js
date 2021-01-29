const Sequalize = require('sequelize');

module.exports = new Sequalize('gestion_contratos', 'root', 'root', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: 0
})