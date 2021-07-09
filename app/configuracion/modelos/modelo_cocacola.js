const mongoose=require('mongoose');

const CocacolaSchema = new mongoose.Schema({
    codigo: {
        type:Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        default:5
    },
    fecha:{
        type:Date,
        default:Date.now
    }

})

const Cocacola = mongoose.model('Cocacola',CocacolaSchema);

module.exports = Cocacola;