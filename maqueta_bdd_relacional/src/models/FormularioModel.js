// Se importa funcionalidad de base de datos 
const database = require('../database');

// Comandos sql para crear las relaciones del formulario

// Tablas primarias
const vcm_areas_financiamientos = 'CREATE TABLE vcm_areas_financiamientos(id_area_financiamiento TIPO, nombre TIPO);';
const vcm_tipos_registros = 'CREATE TABLE vcm_tipos_registros(id_tipo_registro TIPO, nombre TIPO);';
const vcm_tipos_programas = 'CREATE TABLE vcm_tipos_programas(id_tipo_programa TIPO, nombre TIPO);';
const vcm_tipos_extra_colaboradores = 'CREATE TABLE vcm_tipos_extra_colaboradores(id_tipo_extra_colaborador TIPO, nombre TIPO);';
const vcm_estados_actividades = 'CREATE TABLE vcm_estados_actividades(id_estado_actividad TIPO, nombre TIPO);';
const vcm_inst_administrativos = 'CREATE TABLE vcm_inst_administrativos(id_inst_administrativo TIPO, nombre TIPO);';
const vcm_tipos_destinatarios = 'CREATE TABLE vcm_tipos_destinatarios(id_tipo_destinatario TIPO, id_tipo_destinatario_origen TIPO, nombre TIPO, activo TIPO);';
const vcm_tipos_actividades = 'CREATE TABLE vcm_tipos_actividades(id_tipo_actividad TIPO, id_tipo_actividad_origen TIPO, nombre TIPO, descripcion TIPO, activo TIPO);';

// Tablas foráneas que dependen de tablas primarias
const vcm_tipos_financiamientos = 'CREATE TABLE vcm_tipos_financiamientos(id_tipo_financiamiento TIPO, id_area_financiamiento TIPO, nombre TIPO);';
const vcm_programas = 'CREATE TABLE vcm_programas(id_programa TIPO, id_tipo_programa TIPO, nombre TIPO, descripcion TIPO, id_unidad TIPO, fecha TIPO, id_programa_origen TIPO, activo TIPO);';
const vcm_actividades = 'CREATE TABLE vcm_actividades(id_actividad TIPO, nombre TIPO, descripcion TIPO, objetivo TIPO, id_tipo_actividad TIPO, id_tipo_destinatario TIPO, id_inst_administrativo TIPO, lugar TIPO, fecha_inicio TIPO, fecha_termino TIPO, fecha TIPO, id_estado_actividad TIPO, id_grupo TIPO, activo TIPO, id_campus TIPO);';
// Caso particular
const fye_encuestados = 'CREATE TABLE fye_encuestados(id_encuestado TIPO, rut TIPO, id_encuesta TIPO, id_tipo_encuesta TIPO, rut_objetivo TIPO, fecha_inicio TIPO, fecha_termino TIPO);';


// Tablas foráneas que dependen de tablas primarias y foráneas
const vcm_actividades_financiamiento = 'CREATE TABLE vcm_actividades_financiamiento(id_actividad TIPO, id_tipo_financiamiento TIPO, monto TIPO, horas_hombre TIPO);';
const vcm_actividades_registros = 'CREATE TABLE vcm_actividades_registros(id_actividad TIPO, id_tipo_registro TIPO, ruta TIPO, descripcion TIPO);';
const vcm_programas_actividades = 'CREATE TABLE vcm_programas_actividades(id_programa TIPO, id_actividad TIPO);';
const vcm_actividades_encuestados = 'CREATE TABLE vcm_actividades_encuestados(id_actividad TIPO, id_encuestado TIPO);';
const vcm_actividades_responsables = 'CREATE TABLE vcm_actividades_responsables(id_actividad TIPO, rut TIPO, tipo TIPO);';
const vcm_actividades_ex_colaborador = 'CREATE TABLE vcm_actividades_ex_colaborador(id_actividad TIPO, id_tipo_extra_colaborador TIPO, rut TIPO, nombres TIPO, apellido_paterno TIPO, apellido_materno TIPO);';
const vcm_actividades_tributaciones = 'CREATE TABLE vcm_actividades_tributaciones(id_actividad TIPO, id_unidad TIPO);';

// Hace correr comando sql
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
