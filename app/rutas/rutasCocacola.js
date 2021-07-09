
const express = require ('express');

const controladorCocacola = require('../controlador_modelos/Controlador_cocacola');
const Router = express.Router();

Router.get('/',controladorCocacola.indexcoca)
.post('/',controladorCocacola.crearcoca)
.get('/:key/:value',controladorCocacola.buscarcoca,controladorCocacola.mostrarcoca)
.put('/:key/:value',controladorCocacola.buscarcoca,controladorCocacola.actualizarcoca)
.delete('/:key/:value',controladorCocacola.buscarcoca,controladorCocacola.eliminarRcoca); //endpoint donde vamos a pegarle y que se ejecuta

module.exports = Router;