var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var motelsSchema = new Schema({

    nitMotel: {
        type: String,
        required: [true, "El nit. es requerido."]
    },
    nombreMotel: {
        type: String,
        required: [true, "El nombre es requerido."]
    },
    puntuacionMotel: {
        type: String,
        required: false
    },
    comentarioMotel: {
        type: String,
        required: false
    },
    direccionMotel: {
        type: String,
        required: [true, "La Direccion es requerida."]
    },
    telefonoMotel: {
        type: String,
        required: [true, "El telefono es requerido."]
    },
    correoMotel: {
        type: String,
        required: [true, "El correo es requerido."]
    },
    pagWebMotel: {
        type: String,
        required: false
    },

    // longitudMotel: {
    //     type: String,
    //     required: true
    // },

    // latitudMotel: {
    //     type: String,
    //     required: true
    // },

    estadoMotel: {
        type: Boolean,
        required: false,
        default: true
    }
});

module.exports = mongoose.model('Motel', motelsSchema, "motel");