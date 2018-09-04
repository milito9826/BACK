const express = require('express');
var motelController = require('./../controller/motelController');

var router = express.Router();

router.get("/motel", motelController.index);
router.post("/motel", motelController.guardar);
router.get("/motel/:idMotel", motelController.ver);
router.put("/motel/:idMotel", motelController.modificar);
router.delete("/motel/:idMotel", motelController.eliminar);

module.exports = router;