// Importa modelos de datos DatoTest
const DatoTest = require('../models/DatoTest');

// Muesta de la base de datos
const mostrarDatosTest = async (req,res) => {
    try {
        const arrayDatosTestDB = await DatoTest.find()
        console.log(arrayDatosTestDB)

        res.render("DatosTest", {
            arrayDatosTest: arrayDatosTestDB
        });
    } catch (error) {
        console.log(error);
    }
};

// Creación de datos en DatosTest
const crearDatosTest = (req, res) => {
    res.render('DatosTestCrear');
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create)
const guardarDatosTest = async (req, res) => {
    const body = req.body;
    console.log(body);
    try {
        const DatoTestDB = new DatoTest(body);
        await DatoTestDB.save();
        res.redirect('/DatosTest');
    } catch (error) {
        console.log(error);
    }
};

// Obtiene datos de la base de datos (Read)
const leerDatosTest = async (req, res) => {
    const id = req.params.id;
    try {
        // Buscar dato con id de url y se imprime en consola
        const DatoTestDB = await DatoTest.findOne({_id: id});
        console.log(DatoTestDB);

        // Muestra dato encontrado
        res.render('DatosTestEncontrado', {
            DatoTestEspecifico: DatoTestDB,
            error: false
        });
    } catch (error) {
        console.log(error);
        res.render('DatosTestEncontrado', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// Borrar datos por medio de id (Delete)
const borrarDatosTest = async (req, res) => {
    const id = req.params.id;
    try {
        // Buscar dato con id de url y se imprime en consola
        const DatoTestDB = await DatoTest.findByIdAndDelete({_id: id});
        
        if (DatoTestDB) {
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
const actualizarDatosTest = async (req, res) => {
    const id = req.params.id;
    const {nombreNuevo, carreraNueva} = req.body;

    console.log(`id=${id}, body(nombreNuevo)=${nombreNuevo}, body(carreraNueva)=${carreraNueva}`);

    try {
        const DatoTestDB = await DatoTest.findByIdAndUpdate(
            id, 
            {$set: {nombre: nombreNuevo, carrera: carreraNueva}}, 
            {useFindAndModify: false, new: true}
        );
        console.log(DatoTestDB);

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
    mostrarDatosTest,
    crearDatosTest,
    guardarDatosTest,
    leerDatosTest,
    borrarDatosTest,
    actualizarDatosTest,
};
