//ESQUEMA DEL DOCUMENTO CUADRO

const mongoose = require('mongoose')

const cuadroSchema = mongoose.Schema({
        nombre: {
            type: String, 
            required: true
            },
        precio: {
            type: Number,
            required: true
        },
        imagen: {
            type: String,
            required: true
        },
        dimension:{
            type: String,
            require: true
        },
        descripcion:{
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

// CREACION DEL MODELO DEL CUADRO
const Cuadro = mongoose.model('Cuadro', cuadroSchema)

// EXPORTACIÓN
module.exports = Cuadro