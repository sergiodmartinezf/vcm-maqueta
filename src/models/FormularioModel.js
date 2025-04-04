// Se importa funcionalidad de base de datos 
const database = require('../database');

// Comandos sql para crear las relaciones del formulario

// Tablas primarias

// Tabla para resumen de académicos
const vcm_academicos = 'CREATE TABLE vcm_academicos(id_academico INTEGER PRIMARY KEY, nombre VARCHAR(32), id_campus INTEGER, departamento VARCHAR(64), carrera VARCHAR(64));';
 
const vcm_areas_financiamientos = 'CREATE TABLE vcm_areas_financiamientos(id_area_financiamiento VARCHAR(1) PRIMARY KEY, nombre VARCHAR(32));';

const vcm_tipos_registros = 'CREATE TABLE vcm_tipos_registros(id_tipo_registro INTEGER PRIMARY KEY, nombre VARCHAR(128));';

const vcm_tipos_programas = 'CREATE TABLE vcm_tipos_programas(id_tipo_programa INTEGER PRIMARY KEY, nombre VARCHAR(32));';

const vcm_tipos_extra_colaboradores = 'CREATE TABLE vcm_tipos_extra_colaboradores(id_tipo_extra_colaborador INTEGER PRIMARY KEY, nombre VARCHAR(64));';

const vcm_estados_actividades = 'CREATE TABLE vcm_estados_actividades(id_estado_actividad INTEGER PRIMARY KEY, nombre VARCHAR(32));';

const vcm_inst_administrativos = 'CREATE TABLE vcm_inst_administrativos(id_inst_administrativo INTEGER PRIMARY KEY, nombre VARCHAR(32));';

const vcm_tipos_destinatarios = 'CREATE TABLE vcm_tipos_destinatarios(id_tipo_destinatario INTEGER PRIMARY KEY, id_tipo_destinatario_origen INTEGER, nombre VARCHAR(64), activo VARCHAR(1));';

const vcm_tipos_actividades = 'CREATE TABLE vcm_tipos_actividades(id_tipo_actividad INTEGER PRIMARY KEY, id_tipo_actividad_origen INTEGER, nombre VARCHAR(128), descripcion VARCHAR(255), activo VARCHAR(1));';

// Tablas foráneas que dependen de tablas primarias
const vcm_tipos_financiamientos = 'CREATE TABLE vcm_tipos_financiamientos(id_tipo_financiamiento INTEGER, id_area_financiamiento VARCHAR(1), nombre VARCHAR(32), PRIMARY KEY (id_tipo_financiamiento), FOREIGN KEY (id_area_financiamiento) REFERENCES vcm_areas_financiamientos(id_area_financiamiento) ON UPDATE CASCADE);';

const vcm_programas = 'CREATE TABLE vcm_programas(id_programa INTEGER, id_tipo_programa INTEGER, nombre VARCHAR(64), descripcion VARCHAR(255), id_unidad INTEGER, fecha DATE, id_programa_origen INTEGER, activo VARCHAR(1), PRIMARY KEY (id_programa), FOREIGN KEY (id_tipo_programa) REFERENCES vcm_tipos_programas(id_tipo_programa) ON UPDATE CASCADE);';

// Tabla modificada para incluir a académico responsable
const vcm_actividades = 'CREATE TABLE vcm_actividades(id_actividad INTEGER, nombre VARCHAR(64), descripcion VARCHAR(255), objetivo VARCHAR(255), id_tipo_actividad INTEGER, id_tipo_destinatario INTEGER, id_inst_administrativo INTEGER, lugar VARCHAR(128), fecha_inicio DATE, fecha_termino DATE, fecha DATE, id_estado_actividad INTEGER, id_grupo INTEGER, activo VARCHAR(1), id_campus VARCHAR(8), id_academico INTEGER, PRIMARY KEY (id_actividad), FOREIGN KEY (id_tipo_actividad) REFERENCES vcm_tipos_actividades(id_tipo_actividad) ON UPDATE CASCADE, FOREIGN KEY (id_tipo_destinatario) REFERENCES vcm_tipos_destinatarios(id_tipo_destinatario) ON UPDATE CASCADE, FOREIGN KEY (id_inst_administrativo) REFERENCES vcm_inst_administrativos(id_inst_administrativo) ON UPDATE CASCADE, FOREIGN KEY (id_estado_actividad) REFERENCES vcm_estados_actividades(id_estado_actividad) ON UPDATE CASCADE, FOREIGN KEY (id_academico) REFERENCES vcm_academicos(id_academico) ON UPDATE CASCADE);';

// Caso particular
const fye_encuestados = 'CREATE TABLE fye_encuestados(id_encuestado INTEGER, rut VARCHAR(9), id_encuesta INTEGER NOT NULL, id_tipo_encuesta INTEGER NOT NULL, rut_objetivo VARCHAR(9), fecha_inicio DATE, fecha_termino DATE, PRIMARY KEY (id_encuestado));';


// Tablas foráneas que dependen de tablas primarias y foráneas
const vcm_actividades_financiamiento = 'CREATE TABLE vcm_actividades_financiamiento(id_actividad INTEGER, id_tipo_financiamiento INTEGER, monto INTEGER, horas_hombre INTEGER, FOREIGN KEY (id_actividad) REFERENCES vcm_actividades(id_actividad) ON UPDATE CASCADE, FOREIGN KEY (id_tipo_financiamiento) REFERENCES vcm_tipos_financiamientos(id_tipo_financiamiento) ON UPDATE CASCADE);';

const vcm_actividades_registros = 'CREATE TABLE vcm_actividades_registros(id_actividad INTEGER, id_tipo_registro INTEGER, ruta VARCHAR(1024), descripcion VARCHAR(255), FOREIGN KEY (id_actividad) REFERENCES vcm_actividades(id_actividad) ON UPDATE CASCADE, FOREIGN KEY (id_tipo_registro) REFERENCES vcm_tipos_registros(id_tipo_registro) ON UPDATE CASCADE);';

const vcm_programas_actividades = 'CREATE TABLE vcm_programas_actividades(id_programa INTEGER, id_actividad INTEGER, FOREIGN KEY (id_programa) REFERENCES vcm_programas(id_programa) ON UPDATE CASCADE, FOREIGN KEY (id_actividad) REFERENCES vcm_actividades(id_actividad) ON UPDATE CASCADE);';

const vcm_actividades_encuestados = 'CREATE TABLE vcm_actividades_encuestados(id_actividad INTEGER, id_encuestado INTEGER, FOREIGN KEY (id_actividad) REFERENCES vcm_actividades(id_actividad) ON UPDATE CASCADE, FOREIGN KEY (id_encuestado) REFERENCES fye_encuestados(id_encuestado) ON UPDATE CASCADE);';

const vcm_actividades_responsables = 'CREATE TABLE vcm_actividades_responsables(id_actividad INTEGER NOT NULL, rut VARCHAR(9), tipo VARCHAR(1), FOREIGN KEY (id_actividad) REFERENCES vcm_actividades(id_actividad) ON UPDATE CASCADE);';

const vcm_actividades_ex_colaborador = 'CREATE TABLE vcm_actividades_ex_colaborador(id_actividad INTEGER NOT NULL, id_tipo_extra_colaborador INTEGER, rut VARCHAR(9), nombres VARCHAR(80), apellido_paterno VARCHAR(80), apellido_materno VARCHAR(80), FOREIGN KEY (id_actividad) REFERENCES vcm_actividades(id_actividad) ON UPDATE CASCADE, FOREIGN KEY (id_tipo_extra_colaborador) REFERENCES vcm_tipos_extra_colaboradores(id_tipo_extra_colaborador) ON UPDATE CASCADE);';

const vcm_actividades_tributaciones = 'CREATE TABLE vcm_actividades_tributaciones(id_actividad INTEGER, id_unidad INTEGER, FOREIGN KEY (id_actividad) REFERENCES vcm_actividades(id_actividad) ON UPDATE CASCADE);';

// Hace correr comandos sql
/*
database.run(vcm_academicos);
database.run(vcm_areas_financiamientos);
database.run(vcm_tipos_registros);
database.run(vcm_tipos_programas);
database.run(vcm_tipos_extra_colaboradores);
database.run(vcm_estados_actividades);
database.run(vcm_inst_administrativos);
database.run(vcm_tipos_destinatarios);
database.run(vcm_tipos_actividades);
database.run(vcm_tipos_financiamientos);
database.run(vcm_programas);
database.run(vcm_actividades);
database.run(fye_encuestados);
database.run(vcm_actividades_financiamiento);
database.run(vcm_actividades_registros);
database.run(vcm_programas_actividades);
database.run(vcm_actividades_encuestados);
database.run(vcm_actividades_responsables);
database.run(vcm_actividades_ex_colaborador);
database.run(vcm_actividades_tributaciones);
*/
