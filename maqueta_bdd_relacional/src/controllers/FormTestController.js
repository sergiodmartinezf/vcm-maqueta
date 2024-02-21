// Se importa funcionalidad de base de datos 
const database = require('../database');

// Muesta de la base de datos 
const mostrarFormTest = (req, res) => {
    res.render('FormTest');
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create) 
const guardarFormTest = async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const {id,nombreFormTest,carreraFormTest,actividadTest,horasActividadTest} = req.body;

        // Instrucción sql para testing de base de datos relacional sqlite3
        const guardarFormTest = "insert into form_test_model(id,nombreFormTest,carreraFormTest,actividadTest,horasActividadTest) values (?,?,?,?,?);";

        // Hace correr comando sql
        database.run(guardarFormTest,[id, nombreFormTest, carreraFormTest, actividadTest, horasActividadTest]);

        res.redirect('/FormTest/FormTestDatos'); 
    } catch (error) {
        console.log(error);
    }
};

// Muestra datos en base de datos ingresados por el formulario
const verDatosFormTest = async (req, res) => {
    const sql = "select * from form_test_model";
    try {
        const arrayFormTestDatosDB = await new Promise((resolve, reject) => {
            database.all(sql, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        //console.log("ARRAY =",arrayFormTestDatosDB);

        res.render("FormTestDatos", {
            arrayFormTestDatos: arrayFormTestDatosDB
        });
    } catch (error) {
        console.log(error);
    }
};

// Obtiene datos de la base de datos (Read) 
const leerDatosFormTestActualizar = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para borrar 
    const leerDatosFormTestBorrar = "select * from form_test_model where id=?;";
    try {
        // Buscar dato con id de url y se imprime en consola
        
        let FormTestDatosDB = await new Promise((resolve, reject) => {
            database.all(leerDatosFormTestBorrar, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        FormTestDatosDB = FormTestDatosDB[0];

        console.log("leerDatosFormTestActualizar FormTestDatosDB =",FormTestDatosDB);

        // Muestra dato encontrado 
        res.render('FormTestDatosActualizar', {
            FormTestDatos: FormTestDatosDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('FormTestDatosActualizar', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }

};

// Obtiene datos de la base de datos (Read) 
const leerDatosFormTestBorrar = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para borrar 
    const leerDatosFormTestBorrar = "select * from form_test_model where id=?;";
    try {
        // Buscar dato con id de url y se imprime en consola
        
        let FormTestDatosDB = await new Promise((resolve, reject) => {
            database.all(leerDatosFormTestBorrar, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        FormTestDatosDB = FormTestDatosDB[0];

        console.log("leerDatosFormTestBorrar FormTestDatosDB =",FormTestDatosDB);

        // Muestra dato encontrado 
        res.render('FormTestDatosBorrar', {
            FormTestDatos: FormTestDatosDB,
            error: false
        });
    } catch (error) {
        console.log(error);
        res.render('FormTestDatosBorrar', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// Actualiza datos en base de datos (Update)
const actualizarFormTest = async (req, res) => {
    const id = req.params.id;
    console.log(`id para actualizar=${id}`);
    const {nombreFormTestNuevo, carreraFormTestNuevo, actividadTestNuevo, horasActividadTestNuevo} = req.body;

    console.log(`id=${id}, body(nombreFormTestNuevo)=${nombreFormTestNuevo}, body(carreraFormTestNuevo)=${carreraFormTestNuevo}, body(actividadTestNuevo)=${actividadTestNuevo}, body(horasActividadTestNuevo)=${horasActividadTestNuevo}`);

    // Instrucción sql para actualizar
    const actualizarFormTest = "update form_test_model set nombreFormTest=?, carreraFormTest=?, actividadTest=?, horasActividadTest=? where id=?;";

    try {
        // Hace correr comando sql
        await database.run(actualizarFormTest,[nombreFormTestNuevo, carreraFormTestNuevo, actividadTestNuevo, horasActividadTestNuevo, id]);

    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Hubo un Error'
        });
    }
};

// Borrar datos por medio de id (Delete) 
const borrarFormTest = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para borrar 
    const borrarFormTest = "delete from form_test_model where id=?;";
    try {
        // Hace correr comando sql
        await database.run(borrarFormTest,[id]);
        
        res.json({
            estado: true,
            mensaje: '¡Dato Eliminado Exitosamente!'
        });

    } catch (error) {
        // Muestra error en consola
        console.log(error);
    }
};


// Exportar router
module.exports = {
    mostrarFormTest,
    guardarFormTest,
    verDatosFormTest,
    leerDatosFormTestActualizar,
    leerDatosFormTestBorrar,
    borrarFormTest,
    actualizarFormTest,
};
