require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
//const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const path = require('path');
var cors = require('cors');


const app = express();

// // View engine Setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Static Folder
// app.use('/public', express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('Bienvenido al API REST de MOTELSINN');
});

app.use(require("./routes/indexRoutes"));

mongoose.connect('mongodb://localhost:27017/motelsinn', (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Se conecto");
});


app.listen(process.env.PORT, function() {
    console.log('Puerto Activo. ');
});