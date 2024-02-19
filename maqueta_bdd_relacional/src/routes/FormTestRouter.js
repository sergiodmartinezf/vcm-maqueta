const express = require('express');
const router = express.Router();

// Importa funciones de controller
const {
    mostrarFormTest,
    guardarFormTest,
    verDatosFormTest,
    leerDatosFormTestActualizar,
    leerDatosFormTestBorrar,
    borrarFormTest,
    actualizarFormTest,
} = require('../controllers/FormTestController');

// Muesta formulario
router.get('/', mostrarFormTest);

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/', guardarFormTest);

// Muestra datos en base de datos ingresados por el formulario 
router.get('/FormTestDatos', verDatosFormTest);

// Obtiene datos de la base de datos (Read)
router.get('/Actualizar/:id', leerDatosFormTestActualizar);

// Actualiza datos en base de datos (Update) 
router.put('/Actualizar/:id', actualizarFormTest);

// Obtiene datos de la base de datos (Read)
router.get('/Borrar/:id', leerDatosFormTestBorrar);

// Borrar datos por medio de id (Delete)
router.delete('/Borrar/:id', borrarFormTest);

// Exportar router
module.exports = router;
