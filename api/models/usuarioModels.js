var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({

    documentoUsuario: {
        type: String,
    },

    nombreUsuario: {
        type: String,
        required: [true, "El nombre es requerido."]
    },

    apellidoUsuario: {
        type: String,
        required: [true, "El apellido es requerido."]
    },

    correoUsuario: {
        type: String,
        required: [true, "El Correo es requerido."]
    },

    claveUsuario: {
        type: String,
        required: [true, "La clave es requerida."]
    },

    perfilUsuario: {
        type: String,
        required: true
    },

    estadoUsuario: {
        type: Boolean,
        required: false,
        default: true
    },

    google_id: {
        type: String
    }


});

module.exports = mongoose.model('Usuario', usuarioSchema, "usuario");