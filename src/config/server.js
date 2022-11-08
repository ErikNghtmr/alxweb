const express = require("express");
const morgan = require('morgan');
const path = require('path');

//Levantamiento del servidor
const app = express();
const port = 8500;


//Ejecucion del servidor
app.listen(port, console.log(`Servidor ejecutando en el puerto ${port}`));
app.use(express.static('src'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

module.exports = app;