var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var habitacionSchema = new Schema({

    numeroHabitacion: {
        type: String,
        required: [true, "El numero es requerido."]
    },
    tipoHabitacion: {
        type: String,
        required: [true, "El tipo de habitación es requerido."]
    },
    
    servicioHabitacion: {
        type: Array,
        required: [true, "El Servicio de la habitación es requerido."]
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
        required: false
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
        required: false,
        default: true
    },
   
});

module.exports = mongoose.model('Habitacion', habitacionSchema, "habitacion");