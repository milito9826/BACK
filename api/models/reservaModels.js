var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reservaSchema = new Schema({
    idReserva: {
        type: Number,
        required: [true, "El id. de la Reserva es requerido"]
    },
    idUsuario: {
        type: String,
        required: [true, "La identificación del usuario es requerida."]
    },
    idHabitacion: {
        type: String,
        required: [true, "La identificación de la habitación es requerida."]
    },
    idMotel: {
        type: String,
        required: [true, "El id. del motel es requerido."]
    },
    fechaIngresoReserva: {
        type: Date,
        required: [true, "La Fecha de ingreso es requerida."]
    },
    fechaSalidaReserva: {
        type: Date,
        required: [true, "La Fecha de ingreso es requerida"]
    },
    tipoReserva: {
        type: String,
        required: [true, "El tipo de reserva es requerido"]
    },
    estadoReserva: {
        type: String,
        required: false

    }
});

module.exports = mongoose.model('Reserva', reservaSchema);