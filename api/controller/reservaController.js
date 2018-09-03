var Reserva = require("./../models/reservasModels");
var bcrypt = require("bcrypt");

let index = (req, res) => {

    Reserva.find({}).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let guardar = (req, res) => {

    let reserva = new Reserva({
        idReserva: req.body.idReserva,
        fechaIngresoReserva: req.body.fechaIngresoReserva,
        fechaSalidaReserva: req.body.fechaSalidaReserva,
        tipoReserva: req.body.tipoReserva

    });

    Reserva.save((err, reservaNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            Reserva: reservaNew
        });

    });
}

let ver = (req, res) => {

    Reserva.findById(req.params.idReserva).exec((err, datos) => {

        return res.json({
            datos
        });
    });
}

let modificar = (req, res) => {
    let reserva = {
        idReserva: req.body.idReserva,
        fechaIngresoReserva: req.body.fechaIngresoReserva,
        fechaSalidaReserva: req.body.fechaSalidaReserva,
        tipoReserva: req.body.tipoReserva

    }

    Reserva.findByIdAndUpdate(req.params.idReserva, {}, (err, reservaNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            reservaNew
        });
    });

}

let eliminar = (req, res) => {

    Reserva.findByIdAndUpdate(req.params.idReserva, { estado: req.params.estadoReserva }, { new: true }, (err, usuarioNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            reservaNew
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