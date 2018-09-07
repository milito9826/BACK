const Usuario = require("./../models/usuarioModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');


let index = (req, res) => {


    Usuario.find({ estadoUsuario: true }).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let indexInactivo = (req, res) => {


    Usuario.find({ estadoUsuario: false }).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let guardar = (req, res) => {

    let usuario = new Usuario({
        documentoUsuario: req.body.documentoUsuario,
        nombreUsuario: req.body.nombreUsuario,
        apellidoUsuario: req.body.apellidoUsuario,
        correoUsuario: req.body.correoUsuario,
        claveUsuario: bcrypt.hashSync(req.body.claveUsuario, 10),
        perfilUsuario: req.body.perfilUsuario,
        estadoUsuario: req.body.estadoUsuario
    });

    usuario.save((err, usuarioNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.status(201).json({
            ok: true,
            usuario: usuarioNew
        });

    });
}

let ver = (req, res) => {

    Usuario.findById(req.params.documentoUsuario).exec((err, datos) => {

        return res.json({
            datos
        });

    });

}

let modificar = (req, res) => {

    let usuario = {
        documentoUsuario: req.body.documentoUsuario,
        nombreUsuario: req.body.nombreUsuario,
        apellidoUsuario: req.body.apellidoUsuario,
        correoUsuario: req.body.correoUsuario,
        perfilUsuario: req.body.perfilUsuario,
        claveUsuario: bcrypt.hashSync(req.body.claveUsuario, 10)

    }

    console.log(usuario);

    Usuario.findByIdAndUpdate(req.params.documentoUsuario, usuario, { new: true }, (err, usuarioNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err,
            });
        }

        return res.json({
            ok: true,
            usuarioNew
        });
    });


}

let eliminar = (req, res) => {


    Usuario.findByIdAndUpdate(req.params.documentoUsuario, { estadoUsuario: req.params.estadoUsuario }, { new: true }, (err, usuarioNew) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err
            });
        }

        return res.json({


            ok: true,
            usuarioNew
        });
    });

}

let login = (req, res) => {

    console.log(req.body);
    Usuario.findOne({ correoUsuario: req.body.correoUsuario }, (err, usuario) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                men: "Usuario o clave invalida"
            });
        }

        if (!bcrypt.compareSync(req.body.claveUsuario, usuario.claveUsuario)) {
            return res.status(404).json({
                ok: false,
                men: "Usuario o clave invalida"
            });
        }

        let token = jwt.sign({
            data: usuario
        }, process.env.SECRET, { expiresIn: '4h' });

        res.json({
            ok: true,
            usuario,
            token
        });

    });
   
}


let enviarCorreo = (req, res) => {

        
    formulario = req.body;
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port : 465,
        secure: true,
        auth: {
            user: 'klassup@gmail.com', // Cambialo por tu email
            pass: 'Iamadolf0!' // Cambialo por tu password
        }
    });
    const mailOptions = {
        from: '"Motels Inn" <klassup@gmail.com>', //sender
        to: formulario.verCorreo, // Cambia esta parte por el destinatario
        subject: "Correo Prueba",
        html: `
            <strong>Esto es un correo prueba:</strong> 
              `
    };
    transporter.sendMail(mailOptions, function(err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });

}



module.exports = {
    index,
    indexInactivo,
    guardar,
    ver,
    modificar,
    eliminar,
    login,
    enviarCorreo

}