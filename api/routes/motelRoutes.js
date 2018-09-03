const express = require('express');
var motelController = require('./../controller/motelController');

var router = express.Router();

const { auth } = require('./../middleware/autenticacion')

router.get("/motel", motelController.index);
router.get("/motelInactivo", motelController.indexInactivo);
router.post("/motel", motelController.guardar);
router.get("/motel/:nitMotel", motelController.ver);
router.put("/motel/:nitMotel", motelController.modificar);
router.delete("/motel/:nitMotel/:estadoMotel", motelController.eliminar);

module.exports = router;