const express = require('express');
var descuentoController = require('./../controller/descuentoController');

var router = express.Router();

router.get("/descuento", descuentoController.index);
router.post("/descuento", descuentoController.guardar);
router.get("/descuento/:id_Descuento", descuentoController.ver);
router.put("/descuento/:id_Descuento", descuentoController.modificar);
router.delete("/descuento/:id_Descuento", descuentoController.eliminar);

module.exports = router;