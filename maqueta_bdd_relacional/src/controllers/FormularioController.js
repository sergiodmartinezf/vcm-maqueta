// Se importa funcionalidad de base de datos 
const database = require('../database');

// FUNCIONES
const array_dias = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
const array_mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
function generarFecha(diaSemana, diaNumero, mes, ano, hora, minuto) {
    let fechaFinal='';
    fechaFinal = array_dias[diaSemana] + ', ' + String(diaNumero) + ' ' + array_mes[mes] + ' ' + String(ano) + ', ' + String(hora) + ':' + String(minuto);
    if (hora < 12) {
        fechaFinal = fechaFinal + 'am';
    } else {
        fechaFinal = fechaFinal + 'pm';
    };
    return fechaFinal;
};

// PROGRAMA

// Mostrar Formulario
const mostrarPrograma1 = (req, res) => {
    res.render('Programa1');
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create) 
const guardarPrograma1 = async (req, res) => {
    const body = req.body;
    console.log('BODY Programa1',body);
    try {
        res.render('Programa2', {
            idTipoPrograma: body.tipoPrograma,
            nombrePrograma1: body.nombrePrograma,
            error: false
        });

    } catch (error) {
        console.log(error);
    }
};

// Mostrar Formulario (Pág 2)
const mostrarPrograma2 = (req, res) => {
    res.render('Programa2');
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create) 
const guardarPrograma2 = async (req, res) => {
    const body = req.body;
    console.log('BODY Programa2',body);
    try {
        // Instrucción sql para testing de base de datos relacional sqlite3
        //const guardarPrograma2 = "insert into vcm_programas(id_programa, id_tipo_programa, nombre, descripcion, id_unidad, fecha) values (?,?,?,?,?,?);";
        const guardarPrograma2 = "insert into vcm_programas(id_programa, nombre, descripcion, id_unidad, fecha) values (?,?,?,?,?);";

        // Cálculo de nuevo id
        const cantidadProgramas = "SELECT COUNT(DISTINCT id_programa) as cantProgramas FROM vcm_programas";
        let idPrograma = await new Promise((resolve, reject) => {
            database.all(cantidadProgramas, [], (error, nuevoId) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(nuevoId)
            });
        });

        // De lista a objeto
        nuevoIdPrograma = idPrograma[0].cantProgramas + 1;
        
        console.log('nuevoIdPrograma=',nuevoIdPrograma);

        // Fecha
        //const diaSemanaActual = new Date().getDay();
        const diaNumeroActual = new Date().getDate();
        const mesActual = new Date().getMonth();
        const anoActual = new Date().getFullYear();
        //const horaActual = new Date().getHours();
        //const minutoActual = new Date().getMinutes(); 
        //const fechaActual = generarFecha(diaSemanaActual, diaNumeroActual, mesActual, anoActual, horaActual, minutoActual);
        const fechaActual = anoActual + '-' + mesActual + '-' + diaNumeroActual;

        console.log('fechaActual=',fechaActual);

        // Hace correr comando sql
        database.run(guardarPrograma2,[nuevoIdPrograma/**, idTipoPrograma*/, body.nombrePrograma, body.descripcion, body.tipoUnidadAsociada, fechaActual]);

        res.redirect(`/Formulario/ProgramaInformacion/${nuevoIdPrograma}`); 
    } catch (error) {
        console.log(error);
    }
};

// Mostrar Formulario (Información del Programa)
const mostrarProgramaInformacion = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para buscar 
    const leerPrograma = "SELECT * FROM vcm_programas WHERE id_programa=?;";
    try {
        // Buscar dato con id de url y se imprime en consola
        let programaDB = await new Promise((resolve, reject) => {
            database.all(leerPrograma, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        programaDB = programaDB[0];

        console.log("leerPrograma programaDB =",programaDB);

        // Muestra dato encontrado
        res.render('ProgramaInformacion', {
            programa: programaDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('ProgramaInformacion', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// Mostrar Formulario (Búsqueda de Programa) 
const mostrarProgramaBuscar = async (req, res) => {

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

        res.render('ProgramaBuscar', {
            // Datos de vcm_actividades
            array_vcm_programas: array_vcm_programasDB,
        });
    } catch (error) {
        console.log(error);
    }
};

// ACTIVIDAD

// Mostrar Formulario (Pág 3)
const mostrarActividad = (req, res) => {
    res.render('Actividad');
};

// Mostrar Formulario (Información de Actividad)
const mostrarActividadInformacion = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para buscar 
    const leerActividad = "SELECT * FROM vcm_actividades WHERE id_actividad=?;";

    // Obtener Responsable
    const leerAcademico = "SELECT vcm_academicos.nombre FROM vcm_academicos,vcm_actividades WHERE vcm_actividades.id_academico=vcm_academicos.id_academico AND vcm_actividades.id_actividad=?;";
    
    try {
        // Buscar dato con id de url y se imprime en consola
        let actividadDB = await new Promise((resolve, reject) => {
            database.all(leerActividad, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        actividadDB = actividadDB[0];

        console.log("leerActividad actividadDB =",actividadDB);


        
        // Buscar dato con id de url y se imprime en consola
        let academicoDB = await new Promise((resolve, reject) => {
            database.all(leerAcademico, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        academicoDB = academicoDB[0];

        console.log("leerAcademico academicoDB =",academicoDB);



        // Muestra dato encontrado
        res.render('ActividadInformacion', {
            actividad: actividadDB,
            academico: academicoDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('ActividadInformacion', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// Mostrar Formulario (Búsqueda de Actividad)
const mostrarActividadBuscar = async (req, res) => {

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

        res.render('ActividadBuscar', {
            // Datos de vcm_actividades
            array_vcm_actividades: array_vcm_actividadesDB,
        });
    } catch (error) {
        console.log(error);
    }
};

// Toma los datos de formulario donde se ingresan y los guarda en la base de datos (Create) 
const guardarActividad = async (req, res) => {
    const body = req.body;
    console.log('BODY Actividad',body);
    try {
        // Instrucción sql para testing de base de datos relacional sqlite3
        const guardarActividad = "insert into vcm_actividades(id_actividad, nombre, descripcion, objetivo, id_tipo_actividad, id_tipo_destinatario, id_inst_administrativo, lugar, fecha_inicio, fecha_termino, fecha, id_estado_actividad, id_campus) values (?,?,?,?,?,?,?,?,?,?,?,?,?);";

        // Cálculo de nuevo id
        const cantidadActividades = "SELECT COUNT(DISTINCT id_actividad) as cantActividades FROM vcm_actividades";
        let idActividad = await new Promise((resolve, reject) => {
            database.all(cantidadActividades, [], (error, nuevoId) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(nuevoId)
            });
        });

        // De lista a objeto
        nuevoIdActividad = idActividad[0].cantActividades + 1;
        
        console.log('nuevoIdActividad=',nuevoIdActividad);

        // Fecha
        //const diaSemanaActual = new Date().getDay();
        const diaNumeroActual = new Date().getDate();
        const mesActual = new Date().getMonth();
        const anoActual = new Date().getFullYear();
        //const horaActual = new Date().getHours();
        //const minutoActual = new Date().getMinutes(); 
        //const fechaActual = generarFecha(diaSemanaActual, diaNumeroActual, mesActual, anoActual, horaActual, minutoActual);
        const fechaActual = anoActual + '-' + mesActual + '-' + diaNumeroActual;

        console.log('fechaActual=',fechaActual);

        // Lugar
        const lugar = body.direccion + ' ' + '#' + body.numero + ', ' + body.ciudad + ', Chile';

        console.log('lugar=',lugar);


        // Hace correr comando sql
        database.run(guardarActividad,[nuevoIdActividad, body.nombre, body.descripcion, body.objetivo, body.tipoActividad, body.tipoDestinatario, body.institucionesAdministrativas, lugar, body.fechaInicio, body.fechaTermino, fechaActual, 'Abierto', body.campusSede]);

        res.redirect(`/Formulario/ActividadInformacion/${nuevoIdActividad}`); 
    } catch (error) {
        console.log(error);
    }
};

// INTERACCIÓN

// Mostrar Formulario (Interacción)
const mostrarInteraccion = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para buscar 
    const leerActividad = "SELECT id_actividad,nombre FROM vcm_actividades WHERE id_actividad=?;";
    
    try {
        // Buscar dato con id de url y se imprime en consola
        let actividadDB = await new Promise((resolve, reject) => {
            database.all(leerActividad, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        actividadDB = actividadDB[0];

        console.log("leerActividad actividadDB =",actividadDB);

        // Muestra dato encontrado
        res.render('Interaccion', {
            actividad: actividadDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('Interaccion', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// REGISTROS

// Mostrar Formulario (Registros)
const mostrarRegistros = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para buscar 
    const leerActividad = "SELECT id_actividad,nombre FROM vcm_actividades WHERE id_actividad=?;";
    
    try {
        // Buscar dato con id de url y se imprime en consola
        let actividadDB = await new Promise((resolve, reject) => {
            database.all(leerActividad, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        actividadDB = actividadDB[0];

        console.log("leerActividad actividadDB =",actividadDB);

        // Muestra dato encontrado
        res.render('Registros', {
            actividad: actividadDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('Registros', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// COLABORADORES

// Mostrar Formulario (Colaboradores)
const mostrarColaboradores = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para buscar 
    const leerActividad = "SELECT id_actividad,nombre FROM vcm_actividades WHERE id_actividad=?;";
    
    try {
        // Buscar dato con id de url y se imprime en consola
        let actividadDB = await new Promise((resolve, reject) => {
            database.all(leerActividad, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        actividadDB = actividadDB[0];

        console.log("leerActividad actividadDB =",actividadDB);

        // Muestra dato encontrado
        res.render('Colaboradores', {
            actividad: actividadDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('Colaboradores', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// TRIBUTACIONES

// Mostrar Formulario (Tributaciones)
const mostrarTributaciones = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para buscar 
    const leerActividad = "SELECT id_actividad,nombre FROM vcm_actividades WHERE id_actividad=?;";
    
    try {
        // Buscar dato con id de url y se imprime en consola
        let actividadDB = await new Promise((resolve, reject) => {
            database.all(leerActividad, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        actividadDB = actividadDB[0];

        console.log("leerActividad actividadDB =",actividadDB);

        // Muestra dato encontrado
        res.render('Tributaciones', {
            actividad: actividadDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('Tributaciones', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }
};

// ACADÉMICOS

// Mostrar Académicos (Búsqueda de Académico)
const mostrarAcademicoBuscar = async (req, res) => {

    // Datos de vcm_programas
    const vcm_academicos = "select * from vcm_academicos";

    try {
        // Datos de vcm_programas
        const array_vcm_academicosDB = await new Promise((resolve, reject) => {
            database.all(vcm_academicos, [], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        res.render('AcademicoBuscar', {
            // Datos de vcm_actividades
            array_vcm_academicos: array_vcm_academicosDB,
        });
    } catch (error) {
        console.log(error);
    }
};

// Obtiene académico específico de la base de datos (Read) 
const leerAcademico = async (req, res) => {
    const id = req.params.id;

    // Instrucción sql para buscar 
    const leerAcademico = "SELECT * FROM vcm_academicos WHERE id_academico=?;";
    const leerAcademicoActividades = "SELECT * FROM vcm_actividades WHERE id_academico=?;";
    try {
        // Buscar dato con id de url y se imprime en consola
        let academicoDB = await new Promise((resolve, reject) => {
            database.all(leerAcademico, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        // De lista a objeto
        academicoDB = academicoDB[0];

        console.log("leerAcademico academicoDB =",academicoDB);

        // Buscar actividades del académico
        let academicoActividadDB = await new Promise((resolve, reject) => {
            database.all(leerAcademicoActividades, [id], (error, filas) => {
                if (error) {
                    console.error(error.message);
                    reject(error);
                };
                resolve(filas)
            });
        });

        console.log("leerAcademico academicoActividadDB =",academicoActividadDB);

        // Muestra dato encontrado
        res.render('AcademicoResumen', {
            academicoActividad: academicoActividadDB,
            academico: academicoDB,
            error: false
        });

    } catch (error) {
        console.log(error);
        res.render('AcademicoResumen', {
            error: true,
            mensaje: 'No se encontró el dato con ese id'
        });
    }

};


// DATOS

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


        res.render("Datos", {

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
    mostrarPrograma1,
    guardarPrograma1,
    mostrarPrograma2,
    guardarPrograma2,
    mostrarProgramaInformacion,
    mostrarProgramaBuscar,
    mostrarActividad,
    mostrarActividadInformacion,
    mostrarActividadBuscar,
    guardarActividad,
    mostrarInteraccion,
    mostrarAcademicoBuscar,
    leerAcademico,
    mostrarRegistros,
    mostrarColaboradores,
    mostrarTributaciones,

    // Interacciones de formulario con base de datos
    verDatosFormulario,
};
