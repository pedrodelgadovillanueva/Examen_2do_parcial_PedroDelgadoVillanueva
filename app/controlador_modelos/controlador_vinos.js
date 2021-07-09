const modeloVinos = require('../configuracion/modelos/modelo_vinos');



function index(req,res){
console.log("OK BOOMER");
modeloVinos.find({})
.then(vinos =>{

    if(vinos.length) return res.status(200).send({vinos});
    return res.status(204).send({message: 'NO HAY DATOS'})

}).catch(error=>res.status(500).send({error}));
}

function crear(req,res){
    new modeloVinos(req.body).save()
    .then(vinos => res.status(200).send({vinos}))
    .catch(error=>res.status(500).send({error}))
}

function buscar(req,res,next){
    let consulta={};
    consulta[req.params.key]=req.params.value;
    modeloVinos.find(consulta).then(vinos =>{
        if(!vinos.length) return next();
        req.body.vinos = vinos;
        return next();
    }).catch(error => {req.body.error=error;
        next();
    })

}

function mostrar(req,res){

if(req.body.error) return res.status(500).send({error});
if(!req.body.vinos) return res.status(404).send({message: 'No se encontro el producto'});
let vinos=req.body.vinos;

return res.status(200).send({vinos});
}

function actualizar(req,res){

    if(req.body.error) return res.status(500).send({error});
    if(!req.body.vinos) return res.status(404).send({message: 'No se puede actualizar'});

    let vinosObj=req.body.vinos[0];
    vinosObj=Object.assign(vinosObj,req.body);

    vinosObj.save().then(vinosUpdate=>{
        res.status(200).send({message:'El registro se actualizo correctamente',vinosUpdate});
        
    } ).catch(error=> res.status(500).send({error}));

}

function eliminarR(req,res){
    if(req.body.error)return res.status(500).send({error});
    if(req.body.error)return res.status(404).send({message:'no se puede eliminar'});
  
    req.body.vinos[0].remove().then(vinosEliminar => {
      res.status(200).send({message:'el registro se eliminado correctamente',vinosEliminar});
  
    }).catch(error=> res.status(500).send({message:'error al eliminar',error}));
  
  }

module.exports={
    index,
    crear,
    buscar,
    mostrar,
    actualizar,
    eliminarR
}