const express = require('express');
var usuarioController = require('./../controller/usuarioController');


const { auth } = require('./../middleware/autenticacion')

var router = express.Router();

router.get("/usuario", auth, usuarioController.index);
router.get("/usuarioInactivo", auth, usuarioController.indexInactivo);
router.post("/usuario", auth, usuarioController.guardar);
router.get("/usuario/:documentoUsuario", auth, usuarioController.ver);
router.put("/usuario/:documentoUsuario", auth, usuarioController.modificar);
router.delete("/usuario/:documentoUsuario/:estadoUsuario", auth, usuarioController.eliminar);

router.post("/login", usuarioController.login);


module.exports = router;