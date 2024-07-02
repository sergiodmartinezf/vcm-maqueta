// Se importa funcionalidad de base de datos 
const database = require('../database');

// Tablas primarias 
const vcm_academicos_insert = 'INSERT INTO vcm_academicos(id_academico, nombre, id_campus, departamento, carrera) VALUES (?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?);';

const vcm_areas_financiamientos_insert = 'INSERT INTO vcm_areas_financiamientos(id_area_financiamiento, nombre) VALUES (?,?);';

const vcm_tipos_registros_insert = 'INSERT INTO vcm_tipos_registros(id_tipo_registro, nombre) VALUES (?,?);';

const vcm_tipos_programas_insert = 'INSERT INTO vcm_tipos_programas(id_tipo_programa, nombre) VALUES (?,?),(?,?);';

const vcm_tipos_extra_colaboradores_insert = 'INSERT INTO vcm_tipos_extra_colaboradores(id_tipo_extra_colaborador, nombre) VALUES (?,?);';

const vcm_estados_actividades_insert = 'INSERT INTO vcm_estados_actividades(id_estado_actividad, nombre) VALUES (?,?);';

const vcm_inst_administrativos_insert = 'INSERT INTO vcm_inst_administrativos(id_inst_administrativo, nombre) VALUES (?,?);';

const vcm_tipos_destinatarios_insert = 'INSERT INTO vcm_tipos_destinatarios(id_tipo_destinatario, id_tipo_destinatario_origen, nombre, activo) VALUES (?,?,?,?);';

const vcm_tipos_actividades_insert = 'INSERT INTO vcm_tipos_actividades(id_tipo_actividad, id_tipo_actividad_origen, nombre, descripcion, activo) VALUES (?,?,?,?,?);';

// Tablas foráneas que dependen de tablas primarias
const vcm_tipos_financiamientos_insert = 'INSERT INTO vcm_tipos_financiamientos(id_tipo_financiamiento, id_area_financiamiento, nombre) VALUES (?,?,?);';

const vcm_programas_insert = 'INSERT INTO vcm_programas(id_programa, id_tipo_programa, nombre, descripcion, id_unidad, fecha, id_programa_origen, activo) VALUES (?,?,?,?,?,?,?,?);';

const vcm_actividades_insert = 'INSERT INTO vcm_actividades(id_actividad, nombre, descripcion, objetivo, id_tipo_actividad, id_tipo_destinatario, id_inst_administrativo, lugar, fecha, id_estado_actividad, id_campus, id_academico) VALUES (?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?);';

// Caso particular
const fye_encuestados_insert = 'INSERT INTO fye_encuestados(id_encuestado, rut, id_encuesta, id_tipo_encuesta, rut_objetivo, fecha_inicio, fecha_termino) VALUES (?,?,?,?,?,?,?);';


// Tablas foráneas que dependen de tablas primarias y foráneas
const vcm_actividades_financiamiento_insert = 'INSERT INTO vcm_actividades_financiamiento(id_actividad, id_tipo_financiamiento, monto, horas_hombre) VALUES (?,?,?,?);';

const vcm_actividades_registros_insert = 'INSERT INTO vcm_actividades_registros(id_actividad, id_tipo_registro, ruta, descripcion) VALUES (?,?,?,?);';

const vcm_programas_actividades_insert = 'INSERT INTO vcm_programas_actividades(id_programa, id_actividad) VALUES (?,?);';

const vcm_actividades_encuestados_insert = 'INSERT INTO vcm_actividades_encuestados(id_actividad, id_encuestado) VALUES (?,?);';

const vcm_actividades_responsables_insert = 'INSERT INTO vcm_actividades_responsables(id_actividad, rut, tipo) VALUES (?,?,?);';

const vcm_actividades_ex_colaborador_insert = 'INSERT INTO vcm_actividades_ex_colaborador(id_actividad, id_tipo_extra_colaborador, rut, nombres, apellido_paterno, apellido_materno) VALUES (?,?,?,?,?,?);';

const vcm_actividades_tributaciones_insert = 'INSERT INTO vcm_actividades_tributaciones(id_actividad, id_unidad) VALUES (?,?);';

// Hace correr comando sql
database.run(vcm_academicos_insert,[
    1,'Académico 1',1,'Departamento 1','Carrera 1',
    2,'Académico 2',2,'Departamento 2','Carrera 3',
    3,'Académico 3',3,'Departamento 3','Carrera 5',
    4,'Académico 4',4,'Departamento 4','Carrera 7',
    5,'Académico 5',1,'Departamento 1','Carrera 2',
    6,'Académico 6',2,'Departamento 1','Carrera 1',
    7,'Académico 7',3,'Departamento 2','Carrera 4',
    8,'Académico 8',2,'Departamento 2','Carrera 3',
    9,'Académico 9',1,'Departamento 3','Carrera 6',
    10,'Académico 10',2,'Departamento 4','Carrera 8'
]);

/*
database.run(vcm_areas_financiamientos_insert,[]);
database.run(vcm_tipos_registros_insert,[]);
database.run(vcm_tipos_programas_insert,[1,'Programa',2,'Proyecto']);
database.run(vcm_tipos_extra_colaboradores_insert,[]);
database.run(vcm_estados_actividades_insert,[]);
database.run(vcm_inst_administrativos_insert,[]);
database.run(vcm_tipos_destinatarios_insert,[]);
database.run(vcm_tipos_actividades_insert,[]);
database.run(vcm_tipos_financiamientos_insert,[]);
database.run(vcm_programas_insert,[]);
*/

database.run(vcm_actividades_insert,[
    1,'Actividad 1','Esta es la Actividad 1','Objetivo Actividad 1',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,1,
    2,'Actividad 2','Esta es la Actividad 2','Objetivo Actividad 2',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,1,
    3,'Actividad 3','Esta es la Actividad 3','Objetivo Actividad 3',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,2,
    4,'Actividad 4','Esta es la Actividad 4','Objetivo Actividad 4',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,2,
    5,'Actividad 5','Esta es la Actividad 5','Objetivo Actividad 5',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,3,
    6,'Actividad 6','Esta es la Actividad 6','Objetivo Actividad 6',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,3,
    7,'Actividad 7','Esta es la Actividad 7','Objetivo Actividad 7',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,4,
    8,'Actividad 8','Esta es la Actividad 8','Objetivo Actividad 8',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,4,
    9,'Actividad 9','Esta es la Actividad 9','Objetivo Actividad 9',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,5,
    10,'Actividad 10','Esta es la Actividad 10','Objetivo Actividad 10',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,5,
    11,'Actividad 11','Esta es la Actividad 11','Objetivo Actividad 11',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,6,
    12,'Actividad 12','Esta es la Actividad 12','Objetivo Actividad 12',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,6,
    13,'Actividad 13','Esta es la Actividad 13','Objetivo Actividad 13',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,7,
    14,'Actividad 14','Esta es la Actividad 14','Objetivo Actividad 14',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,7,
    15,'Actividad 15','Esta es la Actividad 15','Objetivo Actividad 15',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,8,
    16,'Actividad 16','Esta es la Actividad 16','Objetivo Actividad 16',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,8,
    17,'Actividad 17','Esta es la Actividad 17','Objetivo Actividad 17',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,9,
    18,'Actividad 18','Esta es la Actividad 18','Objetivo Actividad 18',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,9,
    19,'Actividad 19','Esta es la Actividad 19','Objetivo Actividad 19',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,10,
    20,'Actividad 20','Esta es la Actividad 20','Objetivo Actividad 20',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024-1-1',1,1,10
]);

/*
database.run(fye_encuestados_insert,[]);
database.run(vcm_actividades_financiamiento_insert,[]);
database.run(vcm_actividades_registros_insert,[]);
database.run(vcm_programas_actividades_insert,[]);
database.run(vcm_actividades_encuestados_insert,[]);
database.run(vcm_actividades_responsables_insert,[]);
database.run(vcm_actividades_ex_colaborador_insert,[]);
database.run(vcm_actividades_tributaciones_insert,[]);
*/
