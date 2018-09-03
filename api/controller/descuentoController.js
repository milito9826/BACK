var Descuento = require("./../models/descuentoModels");
var bcrypt = require("bcrypt");

let index = (req, res) => {

    Descuento.find({}).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let guardar = (req, res) => {

    let descuento = new Descuento({
        idDescuento: req.body.idDescuento,
        idHabitacion: req.body.idHabitacion,
        tipoDescuento: req.body.tipoDescuento,
        fechaInicioDescuento: req.body.fechaInicioDescuento,
        fechaFinDescuento: req.body.fechaFinDescuento,
        porcentajeDescuento: req.body.porcentajeDescuento
    });

    descuento.save((err, descuentoNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            descuento: descuentoNew
        });

    });
}

let ver = (req, res) => {

    Descuento.findById(req.params.idDescuento).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let modificar = (req, res) => {
    let Descuento = {
        idDescuento: req.body.idDescuento,
        idHabitacion: req.body.idHabitacion,
        tipoDescuento: req.body.tipoDescuento,
        fechaInicioDescuento: req.body.fechaInicioDescuento,
        fechaFinDescuento: req.body.fechaFinDescuento,
        porcentajeDescuento: req.body.porcentajeDescuento
    }

    Descuento.findByIdAndUpdate(req.params.idDescuento, {}, (err, descuentoNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            descuentoNew
        });
    });


}

let eliminar = (req, res) => {

    Descuento.findByIdAndUpdate(req.params.idDescuento, { estado: req.params.estadoDescuento }, { new: true }, (err, descuentoNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            descuentoNew
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