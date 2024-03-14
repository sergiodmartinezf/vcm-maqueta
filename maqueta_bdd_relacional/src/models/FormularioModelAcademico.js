// Se importa funcionalidad de base de datos
const database = require('../database');

// Comandos sql para crear las relaciones del formulario

// Tablas primarias
/**const vcm_academicos = 'CREATE TABLE vcm_academicos(id_academico INTEGER PRIMARY KEY, nombre VARCHAR(32), id_campus INTEGER, departamento VARCHAR(64), carrera VARCHAR(64));';

const vcm_actividad_academico1 = 'ALTER TABLE vcm_actividades ADD COLUMN id_academico INTEGER;';
//const vcm_actividad_academico2 = 'ALTER TABLE vcm_actividades ADD CONSTRAINT fk_id_academico FOREIGN KEY (id_academico) REFERENCES vcm_academicos(id_academico);';

// Hace correr comando sql
database.run(vcm_academicos);
database.run(vcm_actividad_academico1); 
//database.run(vcm_actividad_academico2);*/

// Comandos sql para realizar las inserciones necesarias para llenar el formulario

// Tablas primarias
const vcm_academicos_insert = 'INSERT INTO vcm_academicos(id_academico, nombre, id_campus, departamento, carrera) VALUES (?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?),(?,?,?,?,?);';

// Tablas foráneas que dependen de tablas primarias
const vcm_actividad_academico_insert = 'INSERT INTO vcm_actividades(id_actividad, nombre, descripcion, objetivo, id_tipo_actividad, id_tipo_destinatario, id_inst_administrativo, lugar, fecha, id_estado_actividad, id_campus, id_academico) VALUES (?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?),(?,?,?,?,?,?,?,?,?,?,?,?);';

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

//id_actividad, nombre, descripcion, objetivo, id_tipo_actividad, id_tipo_destinatario, id_inst_administrativo, lugar, fecha, id_estado_actividad, id_campus, id_academico
database.run(vcm_actividad_academico_insert,[
    1,'Actividad 1','Esta es la Actividad 1','Objetivo Actividad 1',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,1,
    2,'Actividad 2','Esta es la Actividad 2','Objetivo Actividad 2',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,1,
    3,'Actividad 3','Esta es la Actividad 3','Objetivo Actividad 3',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,2,
    4,'Actividad 4','Esta es la Actividad 4','Objetivo Actividad 4',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,2,
    5,'Actividad 5','Esta es la Actividad 5','Objetivo Actividad 5',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,3,
    6,'Actividad 6','Esta es la Actividad 6','Objetivo Actividad 6',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,3,
    7,'Actividad 7','Esta es la Actividad 7','Objetivo Actividad 7',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,4,
    8,'Actividad 8','Esta es la Actividad 8','Objetivo Actividad 8',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,4,
    9,'Actividad 9','Esta es la Actividad 9','Objetivo Actividad 9',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,5,
    10,'Actividad 10','Esta es la Actividad 10','Objetivo Actividad 10',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,5,
    11,'Actividad 11','Esta es la Actividad 11','Objetivo Actividad 11',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,6,
    12,'Actividad 12','Esta es la Actividad 12','Objetivo Actividad 12',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,6,
    13,'Actividad 13','Esta es la Actividad 13','Objetivo Actividad 13',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,7,
    14,'Actividad 14','Esta es la Actividad 14','Objetivo Actividad 14',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,7,
    15,'Actividad 15','Esta es la Actividad 15','Objetivo Actividad 15',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,8,
    16,'Actividad 16','Esta es la Actividad 16','Objetivo Actividad 16',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,8,
    17,'Actividad 17','Esta es la Actividad 17','Objetivo Actividad 17',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,9,
    18,'Actividad 18','Esta es la Actividad 18','Objetivo Actividad 18',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,9,
    19,'Actividad 19','Esta es la Actividad 19','Objetivo Actividad 19',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,10,
    20,'Actividad 20','Esta es la Actividad 20','Objetivo Actividad 20',1,1,1,'Av. Fuchslocher #1305, Osorno, Chile','2024/01/01',1,1,10
]);
 
