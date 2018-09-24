var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reservaSchema = new Schema({
    codigoReserva: {
        type: Number,
        required: [true, "El id. de la Reserva es requerido"]
    },
    documentoUsuario: {
        type: mongoose.Types.ObjectId,
        ref : "usuario"
    },
    numeroHabitacion: {
        type: mongoose.Types.ObjectId,
        ref : "habitacion"
    },
    nitMotel: {
        type: mongoose.Types.ObjectId,
        ref: "motel"
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