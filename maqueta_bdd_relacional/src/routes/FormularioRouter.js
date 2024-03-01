const express = require('express');
const router = express.Router();

// Importa funciones de controller
const {
    mostrarFormularioPrograma1,
    mostrarFormularioPrograma2,
    mostrarFormularioProgramaInformacion,
    mostrarFormularioProgramaBuscar,
    mostrarFormularioActividad,
    mostrarFormularioActividadInformacion,
    mostrarFormularioInteraccion,
    mostrarFormularioRegistros,
    mostrarFormularioColaboradores,
    mostrarFormularioTributaciones,
    mostrarFormularioActividadBuscar,

    // Interacciones de formulario con base de datos
    verDatosFormulario,
    guardarFormularioPrograma1,

} = require('../controllers/FormularioController');

// Mostrar Formulario 
router.get('/FormularioPrograma1', mostrarFormularioPrograma1);

// Mostrar Formulario (Pág 2) 
router.get('/FormularioPrograma2', mostrarFormularioPrograma2);

// Muesta formulario (Información de Actividad)
router.get('/FormularioProgramaInformacion', mostrarFormularioProgramaInformacion);

// Muesta formulario (Búsqueda de Programa)
router.get('/FormularioProgramaBuscar', mostrarFormularioProgramaBuscar);

// Mostrar Formulario (Pág 3)
router.get('/FormularioActividad', mostrarFormularioActividad);

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

// Muesta formulario (Búsqueda de Actividad)
router.get('/FormularioActividadBuscar', mostrarFormularioActividadBuscar);

// Interacciones de formulario con base de datos
// Muesta formulario (datos en base de datos) 
router.get('/FormularioDatos', verDatosFormulario);

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/FormularioPrograma1', guardarFormularioPrograma1);

// Exportar router
module.exports = router;
