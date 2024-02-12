const mongoose = require('mongoose');

// Conexión a base de datos
const database = mongoose.connect('mongodb://localhost:27017/datos_vcm')
    .then(() => console.log('Base de Datos Conectada'))
    .catch(error => console.log('Hubo un Error de Conexión a la Base de Datos:'+'\n'+error));


// Exportar configuración de base de datos
module.exports = database;

