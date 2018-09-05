var Motel = require("./../models/motelModels");
var bcrypt = require("bcrypt");

let index = (req, res) => {

    Motel.find({ estadoMotel: true }).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let indexInactivo = (req, res) => {


    Motel.find({ estadoMotel: false }).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let guardar = (req, res) => {

    let motel = new Motel({
        nitMotel: req.body.nitMotel,
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
    Motel.findById(req.params.nitMotel).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let modificar = (req, res) => {

    let motel = {
        nitMotel: req.body.nitMotel,
        nombreMotel: req.body.nombreMotel,
        direccionMotel: req.body.direccionMotel,
        telefonoMotel: req.body.telefonoMotel,
        correoMotel: req.body.correoMotel,
        pagWebMotel: req.body.pagWebMotel

    }

    Motel.findByIdAndUpdate(req.params.nitMotel, motel, {new: true}, (err, motelNew) => {
        
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
        console.log('HERMOSO', motelNew);
    });

}

let eliminar = (req, res) => {

    Motel.findByIdAndUpdate(req.params.nitMotel, { estadoMotel: req.params.estadoMotel }, { new: true }, (err, motelNew) => {

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
    indexInactivo,
    guardar,
    ver,
    modificar,
    eliminar
}