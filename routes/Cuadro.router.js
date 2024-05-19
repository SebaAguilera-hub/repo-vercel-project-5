const express = require("express")
const router = express.Router()
const {obtenerCuadro, obtenerCuadros, eliminarCuadro,crearCuadro } = require("../controller/Cuadro.controller")

router.get("/obtener-cuadros", obtenerCuadros);
router.get("obtener-cuadro/:id", obtenerCuadro);
router.delete("/eliminar-cuadro", eliminarCuadro);
router.post("/crear-cuadro", crearCuadro)

module.exports = router

