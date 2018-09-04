var Motel = require("./../models/motelModels");
var bcrypt = require("bcrypt");

let index = (req, res) => {

    Motel.find({}).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let guardar = (req, res) => {

    let motel = new Motel({
        idMotel: req.body.idMotel,
        nombreMotel: req.body.nombreMotel,
        direccionMotel: req.body.direccionMotel,
        telefonoMotel: req.body.telefonoMotel,
        correoMotel: req.body.correoMotel,
        pagWebMotel: req.body.pagWebMotel,

    });

    motel.save((err, motelNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            Motel: motelNew
        });

    });
}

let ver = (req, res) => {
    Motel.findById(req.params.id_motel).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let modificar = (req, res) => {

    let motel = {
        idMotel: req.body.idMotel,
        nombreMotel: req.body.nombreMotel,
        direccionMotel: req.body.direccionMotel,
        telefonoMotel: req.body.telefonoMotel,
        correoMotel: req.body.correoMotel,
        pagWebMotel: req.body.pagWebMotel

    }

    Motel.findByIdAndUpdate(req.params.id, idMotel, {}, (err, motelNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            motelNew
        });
    });

}

let eliminar = (req, res) => {

    Motel.findByIdAndUpdate(req.params.idMotel, { estado: req.params.estadoMotel }, { new: true }, (err, usuarioNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            motelNew
        });
    });


}

module.exports = {
    index,
    guardar,
    ver,
    modificar,
    eliminar
}