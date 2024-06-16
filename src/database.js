const sqlite = require('sqlite3');

// Conexión a base de datos 
const database = new sqlite.Database("./vcm-maqueta.db", sqlite.OPEN_READWRITE, (error) => {
    if (error) {
        return console.error(error);
    }
});


// Exportar configuración de base de datos
module.exports = database;

