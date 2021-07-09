const modeloCocacola = require('../configuracion/modelos/modelo_cocacola');


function indexcoca(req,res){
    console.log("OK BOOMER");
    modeloCocacola.find({})
    .then(cocacola =>{
    
        if(cocacola.length) return res.status(200).send({cocacola});
        return res.status(204).send({message: 'NO HAY DATOS'})
    
    }).catch(error=>res.status(500).send({error}));
    }


    function crearcoca(req,res){
        new modeloCocacola(req.body).save()
        .then(cocacola => res.status(200).send({cocacola}))
        .catch(error=>res.status(500).send({error}))
    }

    function buscarcoca(req,res,next){
        let consulta={};
        consulta[req.params.key]=req.params.value;
        modeloCocacola.find(consulta).then(cocacola =>{
            if(!cocacola.length) return next();
            req.body.cocacola = cocacola;
            return next();
        }).catch(error => {req.body.error=error;
            next();
        })
    
    }
    
    function mostrarcoca(req,res){
    
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.cocacola) return res.status(404).send({message: 'No se encontro el registro '});
    let cocacola=req.body.cocacola;
    
    return res.status(200).send({cocacola});
    }
    
    function actualizarcoca(req,res){
    
        if(req.body.error) return res.status(500).send({error});
        if(!req.body.cocacola) return res.status(404).send({message: 'No se puede actualizar el registro'});
    
        let cocacolaObj=req.body.cocacola[0];
        cocacolaObj=Object.assign(cocacolaObj,req.body);
    
        cocacolaObj.save().then(cocacolaUpdate=>{
            res.status(200).send({message:'El registro se actualizo correctamente',cocacolaUpdate});
            
        } ).catch(error=> res.status(500).send({error}));
    
    }
    
    function eliminarRcoca(req,res){
        if(req.body.error)return res.status(500).send({error});
        if(req.body.error)return res.status(404).send({message:'no se puede eliminar'});
      
        req.body.cocacola[0].remove().then(cocacolaEliminar => {
          res.status(200).send({message:'el registro se eliminado correctamente',cocacolaEliminar});
      
        }).catch(error=> res.status(500).send({message:'error al eliminar',error}));
      
      }

    module.exports={
        indexcoca,
        crearcoca,
        buscarcoca,
        mostrarcoca,
        actualizarcoca,
        eliminarRcoca
    }