const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema de datos
const FormTestEsquema = new Schema(
    {
        nombreFormTest: String,
        carreraFormTest: String,
        actividadTest: String,
        horasActividadTest: Number,
    }
);

// Modelo
const FormTestModel = mongoose.model('FormTestModel', FormTestEsquema);

// Exportación del modelo 
module.exports = FormTestModel;
