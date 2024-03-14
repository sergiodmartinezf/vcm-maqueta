const express = require('express');
const router = express.Router();

// Importa funciones de controller 
const {
    mostrarPrograma1,
    guardarPrograma1,
    mostrarPrograma2,
    guardarPrograma2,
    mostrarProgramaInformacion,
    mostrarProgramaBuscar,
    mostrarActividad,
    mostrarActividadInformacion,
    mostrarActividadBuscar,
    guardarActividad,
    mostrarInteraccion,
    mostrarAcademicoBuscar,
    leerAcademico,
    mostrarRegistros,
    mostrarColaboradores,
    mostrarTributaciones,

    // Interacciones de formulario con base de datos
    verDatosFormulario,

} = require('../controllers/FormularioController');

// Mostrar Formulario 
router.get('/Programa1', mostrarPrograma1);

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/Programa1', guardarPrograma1);

// Mostrar Formulario (Pág 2) 
router.get('/Programa2', mostrarPrograma2);

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/Programa2', guardarPrograma2);

// Muesta formulario (Información de Actividad)
router.get('/ProgramaInformacion/:id', mostrarProgramaInformacion);

// Muesta formulario (Búsqueda de Programa)
router.get('/ProgramaBuscar', mostrarProgramaBuscar);

// Mostrar Formulario (Pág 3)
router.get('/Actividad', mostrarActividad);

// Muestra formulario (Información de Actividad)
router.get('/ActividadInformacion/:id', mostrarActividadInformacion);

// Muestra formulario (Búsqueda de Actividad)
router.get('/ActividadBuscar', mostrarActividadBuscar);

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/Actividad', guardarActividad);

// Mostrar Formulario (Información de Actividad)
router.get('/ActividadInformacion/:id/Interaccion', mostrarInteraccion);

// Mostrar Formulario (Búsqueda de Académico)
router.get('/AcademicoBuscar', mostrarAcademicoBuscar);

// Mostrar Académico
router.get('/AcademicoResumen/:id', leerAcademico);

// Mostrar Formulario (Registros) 
router.get('/ActividadInformacion/:id/Registros', mostrarRegistros);

// Mostrar Formulario (Colaboradores)
router.get('/ActividadInformacion/:id/Colaboradores', mostrarColaboradores);

// Mostrar Formulario (Tributaciones) 
router.get('/ActividadInformacion/:id/Tributaciones', mostrarTributaciones);

// Interacciones de formulario con base de datos
// Muesta formulario (datos en base de datos) 
router.get('/Datos', verDatosFormulario);

// Exportar router
module.exports = router;
