const express = require('express');
var usuarioController = require('./../controller/usuarioController');


const { auth } = require('./../middleware/autenticacion')

var router = express.Router();

router.get("/usuario",  usuarioController.index);
router.get("/usuarioInactivo",  usuarioController.indexInactivo);
router.post("/usuario",  usuarioController.guardar);
router.get("/usuario/:documentoUsuario",  usuarioController.ver);
router.put("/usuario/:documentoUsuario",  usuarioController.modificar);
router.delete("/usuario/:documentoUsuario/:estadoUsuario", usuarioController.eliminar);
router.post("/usuario/recuperar", usuarioController.enviarCorreo );
router.post("/login",  usuarioController.login);
router.post("/buscarUsuario", usuarioController.buscarUsuario);


module.exports = router;