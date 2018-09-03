var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var habitacionSchema = new Schema({
    idHabitacion: {
        type: Number,
        required: [true, "El id. es requerido."]
    },
    tipoHabitacion: {
        type: String,
        required: [true, "El tipo de habitación es requerido."]
    },
    numeroHabitacion: {
        type: String,
        required: [true, "El número de habitación es requerido."]
    },
    servicioHabitacion: {
        type: String,
        required: [true, "La comodidad de la habitación es requerida."]
    },
    puntuacionHabitacion: {
        type: String,
        required: false
    },
    comentarioHabitacion: {
        type: String,
        required: false
    },
    fotoHabitacion: {
        type: String,
        required: [true, "La foto de la habitación es requerida."]
    },
    idMotel: {
        type: String,
        required: [true, "El id. del motel es requerido."]
    },
    precioHabitacion: {
        type: Number,
        required: [true, "El precio de la habitación es requerido."]
    },
    descuentoHabitacion: {
        type: Number,
        required: false
    },
    estadoHabitacion: {
        type: Boolean,
        required: false
    }
});

module.exports = mongoose.model('Habitacion', habitacionSchema);