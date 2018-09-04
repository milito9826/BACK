const express = require('express');

var app = express();

app.use("/api", require("./usuarioRoutes"));
app.use("/api", require("./motelRoutes"));

app.use("/api", require("./descuentoRoutes"));
app.use("/api", require("./habitacionRoutes"));


module.exports = app;