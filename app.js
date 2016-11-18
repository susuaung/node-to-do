var express = require("express");
var app = express();
var mongoose = require('mongoose');
var config = require('./config');

var port = process.env.PORT || 3000;




app.use('/assets/', app.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('Hello');
});

mongoose.connect(config.getDbConnectionString());
app.listen(port);