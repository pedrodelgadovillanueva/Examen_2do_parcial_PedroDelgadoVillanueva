

const express = require ('express');

const controladorVinos = require('../controlador_modelos/Controlador_Vinos');
const Router = express.Router();

Router.get('/',controladorVinos.index)
.post('/',controladorVinos.crear)
.get('/:key/:value',controladorVinos.buscar,controladorVinos.mostrar)
.put('/:key/:value',controladorVinos.buscar,controladorVinos.actualizar)
.delete('/:key/:value',controladorVinos.buscar,controladorVinos.eliminarR); //endpoint donde vamos a pegarle y que se ejecuta

module.exports = Router;