const express = require('express');
const router = express.Router();

// Importa funciones de controller
const {mostrarIndex} = require('../controllers/TestController');

// Petición GET con página dinámica (muestra index)
router.get('/', mostrarIndex);

// Exportar router
module.exports = router;
