// Se importa funcionalidad de base de datos 
const database = require('../databaseProto');

// Instrucción sql para testing de base de datos relacional sqlite3
let FormTestModel = 'create table form_test_model(id smallint primary key,nombreFormTest varchar(50),carreraFormTest varchar(50),actividadTest varchar(50),horasActividadTest smallint);';

// Para borrar la relación
//const FormTestModel = 'drop table form_test_model;'

// Hace correr comando sql
database.run(FormTestModel);
