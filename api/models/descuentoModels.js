var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var descuentoSchema = new Schema({
    idDescuento: {
        type: String,
        required: [true, "El id. es requerido."]
    },
    idHabitacion: {
        type: Number,
        required: [true, "El id. de la habitacion es requerido."]
    },
    tipoDescuento: {
        type: String,
        required: [true, "El tipo de descuento es obligatorio."]
    },
    fechaInicioDescuento: {
        type: Date,
        required: [true, "La fecha de inicio es obligatoria."]
    },
    fechaFinDescuento: {
        type: Date,
        required: [true, "La fecha final es obligatoria."]
    },
    porcentajeDescuento: {
        type: Number,
        required: [true, "El porcentaje de descuento es obligatorio."]
    },
    estadoDescuento: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Descuento', descuentoSchema);