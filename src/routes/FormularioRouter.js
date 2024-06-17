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

// Mostrar Formulario del programa
router.get('/Programa1', mostrarPrograma1);

// Toma los datos del formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/Programa1', guardarPrograma1);

// Mostrar Formulario del programa (Pág 2) 
router.get('/Programa2', mostrarPrograma2);

// Toma los datos del programa del formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/Programa2', guardarPrograma2);

// Muesta Información de Programa
router.get('/ProgramaInformacion/:id', mostrarProgramaInformacion);

// Muesta Página de Búsqueda de Programa
router.get('/ProgramaBuscar', mostrarProgramaBuscar);

// Mostrar Formulario de Actividad
router.get('/Actividad', mostrarActividad);

// Muestra Página de Información de Actividad
router.get('/ActividadInformacion/:id', mostrarActividadInformacion);

// Muestra Página de Búsqueda de Actividad
router.get('/ActividadBuscar', mostrarActividadBuscar);

// Toma los datos de la actividad del formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/Actividad', guardarActividad);

// Mostrar Página de Información de Actividad
router.get('/ActividadInformacion/:id/Interaccion', mostrarInteraccion);

// Mostrar Página de Búsqueda de Académico
router.get('/AcademicoBuscar', mostrarAcademicoBuscar);

// Mostrar Resumen de Académico
router.get('/AcademicoResumen/:id', leerAcademico);

// Mostrar Página de Registros
router.get('/ActividadInformacion/:id/Registros', mostrarRegistros);

// Mostrar Página de Colaboradores
router.get('/ActividadInformacion/:id/Colaboradores', mostrarColaboradores);

// Mostrar Página de Tributaciones 
router.get('/ActividadInformacion/:id/Tributaciones', mostrarTributaciones);

// Muesta Página de datos en base de datos (testing)
router.get('/Datos', verDatosFormulario);

// Exportar router
module.exports = router;
