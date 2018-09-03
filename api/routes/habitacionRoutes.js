const express = require('express');
var habitacionController = require('./../controller/habitacionController');

var router = express.Router();

router.get("/habitacion", habitacionController.index);
router.post("/habitacion", habitacionController.guardar);
router.get("/habitacion/:idHabitacion", habitacionController.ver);
router.put("/habitacion/:idHabitacion", habitacionController.modificar);
router.delete("/habitacion/:idHabitacion", habitacionController.eliminar);

module.exports = router;