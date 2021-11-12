"use strict";
exports.__esModule = true;
var express = require("express");
var app = (0, express["default"])();
var port = 3000;
app.get('/', function (req, res) {
    res.send('prueba servidor');
});

app.listen(config.PORT, function () {
    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});




