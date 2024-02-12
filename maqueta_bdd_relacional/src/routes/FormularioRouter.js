const express = require('express');
const router = express.Router();

// Importa funciones de controller
const {
    mostrarFormulario,
    mostrarFormulario2,
    mostrarFormulario3,
    mostrarFormularioActividadInformacion,
    mostrarFormularioInteraccion,
    mostrarFormularioRegistros,
    mostrarFormularioColaboradores,
    mostrarFormularioTributaciones,
} = require('../controllers/FormularioController');

// Mostrar Formulario 
router.get('/', mostrarFormulario);

// Mostrar Formulario (Pág 2)
router.get('/Formulario2', mostrarFormulario2);

// Mostrar Formulario (Pág 3)
router.get('/Formulario3', mostrarFormulario3);

// Mostrar Formulario (Información de Actividad)
router.get('/FormularioInteraccion', mostrarFormularioInteraccion);

// Mostrar Formulario (Registros)
router.get('/FormularioRegistros', mostrarFormularioRegistros);

// Mostrar Formulario (Colaboradores)
router.get('/FormularioColaboradores', mostrarFormularioColaboradores);

// Mostrar Formulario (Tributaciones)
router.get('/FormularioTributaciones', mostrarFormularioTributaciones);

// Muesta formulario (Información de Actividad)
router.get('/FormularioActividadInformacion', mostrarFormularioActividadInformacion);

// Exportar router
module.exports = router;
