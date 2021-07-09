const express = require('express');
const rutasVinos = require('./rutas/rutasVino');
const rutasCocacola = require('./rutas/rutasCocacola');



const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/vinos',rutasVinos);

app.use('/cocacola',rutasCocacola);

module.exports= app;

