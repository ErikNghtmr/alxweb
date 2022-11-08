'use strict'
//importacion del server y conexion a la base de datos
const app = require('./src/config/server');
// const mysql = require('./source/config/conexion');

const links = require('./src/routes/links') (app);