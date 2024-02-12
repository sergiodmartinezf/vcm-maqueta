const express = require('express');
const router = express.Router();

// Importa funciones de controller
const {
    mostrarDatosTest,
    crearDatosTest,
    guardarDatosTest,
    leerDatosTest,
    borrarDatosTest,
    actualizarDatosTest
} = require('../controllers/DatosTestController');

// Muesta de la base de datos
router.get('/', mostrarDatosTest);

// Creación de datos en DatosTest
router.get('/Crear', crearDatosTest);

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
router.post('/', guardarDatosTest);

// Obtiene datos de la base de datos (Read)
router.get('/:id', leerDatosTest);

// Borrar datos por medio de id (Delete)
router.delete('/:id', borrarDatosTest);

// Actualiza datos en base de datos (Update)
router.put('/:id', actualizarDatosTest);

// Exportar router
module.exports = router;
