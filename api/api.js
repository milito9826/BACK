require('./config/config');

const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

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