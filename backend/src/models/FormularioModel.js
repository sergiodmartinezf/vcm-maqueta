const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema de datos
const FormularioEsquema = new Schema(
    {
        atrTest: String,
    }
);

// Modelo
const FormularioModel = mongoose.model('FormularioModel', FormularioEsquema);

// Exportación del modelo
module.exports = FormularioModel;
