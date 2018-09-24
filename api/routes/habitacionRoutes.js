const express = require('express');
var habitacionController = require('./../controller/habitacionController');

var router = express.Router();

const { auth } = require('./../middleware/autenticacion')

router.get("/habitacion", habitacionController.index);
router.get("/habitacionInactivo", habitacionController.indexInactivo);
router.post("/habitacion", habitacionController.guardar);
router.get("/habitacion/:_id", habitacionController.ver);
router.put("/habitacion/:_id", habitacionController.modificar);
router.delete("/habitacion/:_id/:estadoHabitacion", habitacionController.eliminar);

module.exports = router;