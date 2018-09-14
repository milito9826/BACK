var Habitacion = require("./../models/habitacionModels");
var bcrypt = require("bcrypt");

let index = (req, res) => {

    Habitacion.find({}).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let guardar = (req, res) => {

    let habitacion = new Habitacion({
        numeroHabitacion: req.body.numeroHabitacion,
        tipoHabitacion: req.body.tipoHabitacion,
        servicioHabitacion: req.body.servicioHabitacion,
        precioHabitacion: req.body.precioHabitacion,
        descuentoHabitacion: req.body.descuentoHabitacion,
        fotoHabitacion: req.body.fotoHabitacion
           
    });

    Habitacion.save((err, habitacionNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            Habitacion: habitacionNew
        });

    });
}

let ver = (req, res) => {
    Habitacion.findById(req.params.id).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let modificar = (req, res) => {
    let Habitacion = {
        idHabitacion: req.body.idHabitacion,
        tipoHabitacion: req.body.tipoHabitacion,
        numeroHabitacion: req.body.numeroHabitacion,
        servicioHabitacion: req.body.servicioHabitacion,
        fotoHabitacion: req.body.fotoHabitacion,
        precioHabitacion: req.body.precioHabitacion,
        descuentoHabitacion: req.body.descuentoHabitacion
    }

    Habitacion.findByIdAndUpdate(req.params.idHabitacion, {}, (err, usuarioNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            HabitacionNew
        });
    });



}

let eliminar = (req, res) => {

    Habitacion.findByIdAndUpdate(req.params.idHabitacion, { estado: req.params.estadoHabitacion }, { new: true }, (err, habitacionNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({
            ok: true,
            habitacionNew
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