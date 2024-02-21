const express = require('express');
const router = express.Router();

// Importa funciones de controller
const {
    mostrarFormulario,
    mostrarFormulario2,
    mostrarFormularioProgramaInformacion,
    mostrarFormulario3,
    mostrarFormularioActividadInformacion,
    mostrarFormularioInteraccion,
    mostrarFormularioRegistros,
    mostrarFormularioColaboradores,
    mostrarFormularioTributaciones,

    // Interacciones de formulario con base de datos
    verDatosFormulario,

} = require('../controllers/FormularioController');

// Mostrar Formulario 
router.get('/', mostrarFormulario);

// Mostrar Formulario (Pág 2)
router.get('/Formulario2', mostrarFormulario2);

// Muesta formulario (Información de Actividad)
router.get('/FormularioProgramaInformacion', mostrarFormularioProgramaInformacion);

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

// Interacciones de formulario con base de datos
// Muesta formulario (datos en base de datos)
router.get('/FormularioDatos', verDatosFormulario);

// Exportar router
module.exports = router;
