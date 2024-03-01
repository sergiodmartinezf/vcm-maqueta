// Se importa funcionalidad de base de datos 
const database = require('../database');

// PROGRAMA

// Mostrar Formulario
const mostrarFormularioPrograma1 = (req, res) => {
    res.render('FormularioPrograma1');
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create) 
const guardarFormularioPrograma1 = async (req, res) => {
    const body = req.body;
    console.log('BODY FormularioPrograma1',body);
    try {
        // Instrucción sql para testing de base de datos relacional sqlite3
        const guardarFormularioPrograma1 = "insert into vcm_programas(id_programa,id_tipo_programa,nombre) values (?,?,?);";

        // Hace correr comando sql
        database.run(guardarFormularioPrograma1,[1, body.tipoPrograma, body.nombrePrograma]);

        res.redirect('/Formulario/FormularioPrograma2'); 
    } catch (error) {
        console.log(error);
    }
};

// Mostrar Formulario (Pág 2)
const mostrarFormularioPrograma2 = (req, res) => {
    res.render('FormularioPrograma2');
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create) 
const guardarFormularioPrograma2 = async (req, res) => {
    const body = req.body;
    console.log('BODY FormularioPrograma2',body);
    try {
        // Instrucción sql para testing de base de datos relacional sqlite3
        const guardarFormularioPrograma2 = "INSERT INTO vcm_programas() VALUES () WHERE id_programa=?;";

        // Hace correr comando sql
        database.run(guardarFormularioPrograma2,[]);

        res.redirect('/Formulario/FormularioPrograma2'); 
    } catch (error) {
        console.log(error);
    }
};

// Mostrar Formulario (Información del Programa)
const mostrarFormularioProgramaInformacion = (req, res) => {
    res.render('FormularioProgramaInformacion');
};

// Mostrar Formulario (Búsqueda de Programa)
const mostrarFormularioProgramaBuscar = async (req, res) => {

    // Datos de vcm_programas
    const vcm_programas = "select * from vcm_programas";

    try {
        // Datos de vcm_programas
        const array_vcm_programasDB = await new Promise((resolve, reject) => {
            database.all(vcm_programas, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        res.render('FormularioProgramaBuscar', {
            // Datos de vcm_actividades
            array_vcm_programas: array_vcm_programasDB,
        });
    } catch (error) {
        console.log(error);
    }
};

// ACTIVIDAD

// Mostrar Formulario (Pág 3)
const mostrarFormularioActividad = (req, res) => {
    res.render('FormularioActividad');
};

// Mostrar Formulario (Información de Actividad)
const mostrarFormularioActividadInformacion = (req, res) => {
    res.render('FormularioActividadInformacion');
};

// Mostrar Formulario (Búsqueda de Actividad)
const mostrarFormularioActividadBuscar = async (req, res) => {

    // Datos de vcm_actividades
    const vcm_actividades = "select * from vcm_actividades";

    try {
        // Datos de vcm_actividades
        const array_vcm_actividadesDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        res.render('FormularioActividadBuscar', {
            // Datos de vcm_actividades
            array_vcm_actividades: array_vcm_actividadesDB,
        });
    } catch (error) {
        console.log(error);
    }
};

// INTERACCIÓN

// Mostrar Formulario (Interacción)
const mostrarFormularioInteraccion = (req, res) => {
    res.render('FormularioInteraccion');
};

// REGISTROS

// Mostrar Formulario (Registros)
const mostrarFormularioRegistros = (req, res) => {
    res.render('FormularioRegistros');
};

// COLABORADORES

// Mostrar Formulario (Colaboradores)
const mostrarFormularioColaboradores = (req, res) => {
    res.render('FormularioColaboradores');
};

// TRIBUTACIONES

// Mostrar Formulario (Tributaciones)
const mostrarFormularioTributaciones = (req, res) => {
    res.render('FormularioTributaciones');
};



// Para ver datos
// Muestra datos en base de datos ingresados por el formulario
const verDatosFormulario = async (req, res) => {

    // Datos de vcm_areas_financiamientos
    const vcm_areas_financiamientos = "select * from vcm_areas_financiamientos";

    // Datos de vcm_tipos_registros
    const vcm_tipos_registros = "select * from vcm_tipos_registros";

    // Datos de vcm_tipos_programas
    const vcm_tipos_programas = "select * from vcm_tipos_programas";

    // Datos de vcm_tipos_extra_colaboradores
    const vcm_tipos_extra_colaboradores = "select * from vcm_tipos_extra_colaboradores";

    // Datos de vcm_estados_actividades
    const vcm_estados_actividades = "select * from vcm_estados_actividades";

    // Datos de vcm_inst_administrativos
    const vcm_inst_administrativos = "select * from vcm_inst_administrativos";

    // Datos de vcm_tipos_destinatarios
    const vcm_tipos_destinatarios = "select * from vcm_tipos_destinatarios";

    // Datos de vcm_tipos_actividades
    const vcm_tipos_actividades = "select * from vcm_tipos_actividades";

    // Datos de vcm_tipos_financiamientos
    const vcm_tipos_financiamientos = "select * from vcm_tipos_financiamientos";

    // Datos de vcm_programas
    const vcm_programas = "select * from vcm_programas";

    // Datos de vcm_actividades
    const vcm_actividades = "select * from vcm_actividades";

    // Datos de fye_encuestados
    const fye_encuestados = "select * from fye_encuestados";

    // Datos de vcm_actividades_financiamiento
    const vcm_actividades_financiamiento = "select * from vcm_actividades_financiamiento";

    // Datos de vcm_actividades_registros
    const vcm_actividades_registros = "select * from vcm_actividades_registros";

    // Datos de vcm_programas_actividades
    const vcm_programas_actividades = "select * from vcm_programas_actividades";

    // Datos de vcm_actividades_encuestados
    const vcm_actividades_encuestados = "select * from vcm_actividades_encuestados";

    // Datos de vcm_actividades_responsables
    const vcm_actividades_responsables = "select * from vcm_actividades_responsables";

    // Datos de vcm_actividades_ex_colaborador
    const vcm_actividades_ex_colaborador = "select * from vcm_actividades_ex_colaborador";

    // Datos de vcm_actividades_tributaciones
    const vcm_actividades_tributaciones = "select * from vcm_actividades_tributaciones";

    try {

        // Datos de vcm_areas_financiamientos
        const array_vcm_areas_financiamientosDB = await new Promise((resolve, reject) => {
            database.all(vcm_areas_financiamientos, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_tipos_registros
        const array_vcm_tipos_registrosDB = await new Promise((resolve, reject) => {
            database.all(vcm_tipos_registros, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_tipos_programas
        const array_vcm_tipos_programasDB = await new Promise((resolve, reject) => {
            database.all(vcm_tipos_programas, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_tipos_extra_colaboradores
        const array_vcm_tipos_extra_colaboradoresDB = await new Promise((resolve, reject) => {
            database.all(vcm_tipos_extra_colaboradores, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_estados_actividades
        const array_vcm_estados_actividadesDB = await new Promise((resolve, reject) => {
            database.all(vcm_estados_actividades, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_inst_administrativos
        const array_vcm_inst_administrativosDB = await new Promise((resolve, reject) => {
            database.all(vcm_inst_administrativos, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_tipos_destinatarios
        const array_vcm_tipos_destinatariosDB = await new Promise((resolve, reject) => {
            database.all(vcm_tipos_destinatarios, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_tipos_actividades
        const array_vcm_tipos_actividadesDB = await new Promise((resolve, reject) => {
            database.all(vcm_tipos_actividades, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_tipos_financiamientos
        const array_vcm_tipos_financiamientosDB = await new Promise((resolve, reject) => {
            database.all(vcm_tipos_financiamientos, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_programas
        const array_vcm_programasDB = await new Promise((resolve, reject) => {
            database.all(vcm_programas, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_actividades
        const array_vcm_actividadesDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de fye_encuestados
        const array_fye_encuestadosDB = await new Promise((resolve, reject) => {
            database.all(fye_encuestados, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_actividades_financiamiento
        const array_vcm_actividades_financiamientoDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades_financiamiento, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_actividades_registros
        const array_vcm_actividades_registrosDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades_registros, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_programas_actividades
        const array_vcm_programas_actividadesDB = await new Promise((resolve, reject) => {
            database.all(vcm_programas_actividades, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_actividades_encuestados
        const array_vcm_actividades_encuestadosDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades_encuestados, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_actividades_responsables
        const array_vcm_actividades_responsablesDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades_responsables, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_actividades_ex_colaborador
        const array_vcm_actividades_ex_colaboradorDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades_ex_colaborador, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // Datos de vcm_actividades_tributaciones
        const array_vcm_actividades_tributacionesDB = await new Promise((resolve, reject) => {
            database.all(vcm_actividades_tributaciones, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });


        res.render("FormularioDatos", {

            // Datos de vcm_areas_financiamientos 
            array_vcm_areas_financiamientos: array_vcm_areas_financiamientosDB,

            // Datos de vcm_tipos_registros
            array_vcm_tipos_registros: array_vcm_tipos_registrosDB,

            // Datos de vcm_tipos_programas
            array_vcm_tipos_programas: array_vcm_tipos_programasDB,

            // Datos de vcm_tipos_extra_colaboradores
            array_vcm_tipos_extra_colaboradores: array_vcm_tipos_extra_colaboradoresDB,

            // Datos de vcm_estados_actividades
            array_vcm_estados_actividades: array_vcm_estados_actividadesDB,

            // Datos de vcm_inst_administrativos
            array_vcm_inst_administrativos: array_vcm_inst_administrativosDB,

            // Datos de vcm_tipos_destinatarios
            array_vcm_tipos_destinatarios: array_vcm_tipos_destinatariosDB,

            // Datos de vcm_tipos_actividades
            array_vcm_tipos_actividades: array_vcm_tipos_actividadesDB,

            // Datos de vcm_tipos_financiamientos
            array_vcm_tipos_financiamientos: array_vcm_tipos_financiamientosDB,

            // Datos de vcm_programas
            array_vcm_programas: array_vcm_programasDB,

            // Datos de vcm_actividades
            array_vcm_actividades: array_vcm_actividadesDB,

            // Datos de fye_encuestados
            array_fye_encuestados: array_fye_encuestadosDB,

            // Datos de vcm_actividades_financiamiento
            array_vcm_actividades_financiamiento: array_vcm_actividades_financiamientoDB,

            // Datos de vcm_actividades_registros
            array_vcm_actividades_registros: array_vcm_actividades_registrosDB,

            // Datos de vcm_programas_actividades
            array_vcm_programas_actividades: array_vcm_programas_actividadesDB,

            // Datos de vcm_actividades_encuestados
            array_vcm_actividades_encuestados: array_vcm_actividades_encuestadosDB,

            // Datos de vcm_actividades_responsables
            array_vcm_actividades_responsables: array_vcm_actividades_responsablesDB,

            // Datos de vcm_actividades_ex_colaborador
            array_vcm_actividades_ex_colaborador: array_vcm_actividades_ex_colaboradorDB,

            // Datos de vcm_actividades_tributaciones
            array_vcm_actividades_tributaciones: array_vcm_actividades_tributacionesDB

        });
    } catch (error) {
        console.log(error);
    }
};

// Exportar router 
module.exports = {
    // Renderización de secciones de formulario
    mostrarFormularioPrograma1,
    mostrarFormularioPrograma2,
    mostrarFormularioProgramaInformacion,
    mostrarFormularioProgramaBuscar,
    mostrarFormularioActividad,
    mostrarFormularioActividadInformacion,
    mostrarFormularioInteraccion,
    mostrarFormularioRegistros,
    mostrarFormularioColaboradores,
    mostrarFormularioTributaciones,
    mostrarFormularioActividadBuscar,

    // Interacciones de formulario con base de datos
    verDatosFormulario,
    guardarFormularioPrograma1,
};
