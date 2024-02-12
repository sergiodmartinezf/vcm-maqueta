const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema de datos
const DatoTestEsquema = new Schema(
    {
        nombre: String,
        carrera: String,
    }
);

// Modelo
const DatoTest = mongoose.model('DatoTest', DatoTestEsquema);

// Exportación del modelo
module.exports = DatoTest;
