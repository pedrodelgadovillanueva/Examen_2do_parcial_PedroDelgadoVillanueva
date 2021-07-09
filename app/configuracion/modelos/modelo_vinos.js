const mongoose=require('mongoose');

const VinosSchema = new mongoose.Schema({
    nombre: {
        type:String,
        required:true
    },
    codigo:{
        type:Number,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    existencia:{
        type:Number,
        default:5
    }

})

const Vino = mongoose.model('Vinos',VinosSchema);

module.exports = Vino;