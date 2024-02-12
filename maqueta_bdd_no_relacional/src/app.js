const express = require('express');
const app = express();

// Para uso de vistas
const bodyParser = require('body-parser');

// Uso del servidor Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Código para el funcionamiento de vistas y archivos estáticos

// Uso de bodyParser
// Uso de método POST
app.use(bodyParser.urlencoded({ extended: false }));
// Envío de datos por json
app.use(bodyParser.json());

// Uso de ejs (para página dinámica)
app.set('view engine', 'ejs');
app.set('views', __dirname + "/views");

// Localización de archivos estáticos
app.use(express.static(__dirname + "/public"));

// Llamada a rutas
app.use('/', require('./routes/TestRouter'));
app.use('/DatosTest', require('./routes/DatosTestRouter'));
app.use('/FormTest', require('./routes/FormTestRouter'));
app.use('/Formulario', require('./routes/FormularioRouter'));

// Exportar confguración de aplicacións
module.exports = app;
