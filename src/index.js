const app = require('./app');
const database = require('./database');

const main = () => {
    // Conexión a Base de Datos 
    database;
    console.log('Base de Datos Conectada'); 
    // Ejecución del servidor
    app.listen(3000, () => {
        console.log('Servidor Encendido');
    });;
};

// Llamada a función main
main();
