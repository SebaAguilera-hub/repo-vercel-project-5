const Cuadro = require("../models/Cuadro.model")
// const bcrypt = require('bcrypt')

const obtenerCuadros = async (req, res) => {
    try {
        const cuadros = await Guitarra.find({})

        res.json({
            cuadros
        })

    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error obteniendo los datos"
        })
    }
}

const obtenerCuadro =  async (req, res) => {    // /obtener-cuadro/:id

    const { id } = req.params

    try {

        const cuadro = await Cuadro.findById(id)

        res.json({
            cuadro
        })

    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error obteniendo los datos"
        })
    }

}

const crearCuadro = async (req, res) => {   // /crear-cuadro
  
    const {
        nombre,
        precio,
        imagen,
        dimension,
        descripcion,
         } = req.body

    try {

        const nuevaGuitarra = await Cuadro.create({
            nombre, precio, imagen, dimension,
            descripcion
        })

        res.json(nuevaGuitarra)

    } catch (error) {

        res.status(500).json({
            msg: "Hubo un error creando la guitarra",
            error
        })

    }
}

const eliminarCuadro =  async (req, res) => {   // /borrar-cuadro

    const { id } = req.body

    try {

        const cuadroBorrado = await Cuadro.findByIdAndRemove({ _id: id })

        res.json(cuadroBorrado)


    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error borrando la guitarra especificada"
        })
    }

}


module.exports = {
    obtenerCuadro,
    obtenerCuadros,
    eliminarCuadro,
    crearCuadro
}