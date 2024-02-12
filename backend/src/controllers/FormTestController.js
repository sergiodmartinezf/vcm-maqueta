// Importa modelos de datos DatoTest
const FormTestModel = require('../models/FormTestModel');

// Muesta de la base de datos
const mostrarFormTest = (req, res) => {
    res.render('FormTest');
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
const guardarFormTest = async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const FormTestDB = new FormTestModel(body);
        await FormTestDB.save();
        res.redirect('/FormTest/FormTestDatos');
    } catch (error) {
        console.log(error);
    }
};

// Muestra datos en base de datos ingresados por el formulario
const verDatosFormTest = async (req, res) => {
    try {
        const arrayFormTestDatosDB = await FormTestModel.find()
        console.log(arrayFormTestDatosDB)

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
    try {
        // Buscar dato con id de url y se imprime en consola
        const FormTestDatosDB = await FormTestModel.findOne({_id: id});
        console.log(FormTestDatosDB);

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
    try {
        // Buscar dato con id de url y se imprime en consola
        const FormTestDatosDB = await FormTestModel.findOne({_id: id});
        console.log(FormTestDatosDB);

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

// Borrar datos por medio de id (Delete) 
const borrarFormTest = async (req, res) => {
    const id = req.params.id;
    try {
        // Buscar dato con id de url y se imprime en consola
        const FormTestDatosDB = await FormTestModel.findByIdAndDelete({_id: id});
        
        if (FormTestDatosDB) {
            res.json({
                estado: true,
                mensaje: '¡Dato Eliminado Exitosamente!'
            });
        } else {
            res.json({
                estado: false,
                mensaje: 'Hubo un Error'
            });
        }

    } catch (error) {
        // Muestra error en consola
        console.log(error);
    }
};

// Actualiza datos en base de datos (Update)
const actualizarFormTest = async (req, res) => {
    const id = req.params.id;
    console.log(`id para actualizar=${id}`);
    const {nombreFormTestNuevo, carreraFormTestNuevo, actividadTestNuevo, horasActividadTestNuevo} = req.body;

    console.log(`id=${id}, body(nombreFormTestNuevo)=${nombreFormTestNuevo}, body(carreraFormTestNuevo)=${carreraFormTestNuevo}, body(actividadTestNuevo)=${actividadTestNuevo}, body(horasActividadTestNuevo)=${horasActividadTestNuevo}`);

    try {
        const FormTestDatosDB = await FormTestModel.findByIdAndUpdate(
            id, 
            {$set: {nombreFormTest: nombreFormTestNuevo, carreraFormTest: carreraFormTestNuevo, actividadTest: actividadTestNuevo, horasActividadTest: horasActividadTestNuevo}}, 
            {useFindAndModify: false, new: true}
        );
        console.log(FormTestDatosDB);

        res.json({
            estado:true,
            mensaje: '¡Dato Actualizado Exitosamente!'
        });

    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Hubo un Error'
        });
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
