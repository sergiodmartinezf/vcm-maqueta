// Importa modelos de datos DatoTest
const FormularioModel = require('../models/FormularioModel');

// Mostrar Formulario
const mostrarFormulario = (req, res) => {
    res.render('Formulario');
};

// Mostrar Formulario (Pág 2)
const mostrarFormulario2 = (req, res) => {
    res.render('Formulario2');
};

// Mostrar Formulario (Pág 3)
const mostrarFormulario3 = (req, res) => {
    res.render('Formulario3');
};

// Mostrar Formulario (Información de Actividad)
const mostrarFormularioInteraccion = (req, res) => {
    res.render('FormularioInteraccion');
};

// Mostrar Formulario (Registros)
const mostrarFormularioRegistros = (req, res) => {
    res.render('FormularioRegistros');
};

// Mostrar Formulario (Colaboradores)
const mostrarFormularioColaboradores = (req, res) => {
    res.render('FormularioColaboradores');
};

// Mostrar Formulario (Tributaciones)
const mostrarFormularioTributaciones = (req, res) => {
    res.render('FormularioTributaciones');
};

// Mostrar Formulario (Información de Actividad)
const mostrarFormularioActividadInformacion = (req, res) => {
    res.render('FormularioActividadInformacion');
};

// Exportar router
module.exports = {
    mostrarFormulario,
    mostrarFormulario2,
    mostrarFormulario3,
    mostrarFormularioActividadInformacion,
    mostrarFormularioInteraccion,
    mostrarFormularioRegistros,
    mostrarFormularioColaboradores,
    mostrarFormularioTributaciones,
};
