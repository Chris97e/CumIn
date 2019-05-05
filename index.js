var express = require('express'),
engines = require('consolidate'),
handlebars = require('handlebars');

var app = express();

app.engine('hbs', engines.handlebars);
app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


const mongoose = require('mongoose');

// This is the conecction with mongodb 
// Here I'm telling to mongodb that I want to conect specifically to the cumIn database
mongoose.connect('mongodb://localhost/cumIn');

// This is for know when te conecction is ready, we only want to know once, thats te reason why
// we use "once" on the event

mongoose.connection.once('open', function () {

    console.log("Conection has been made!");

}).on('error', function (error) {
    console.log("conecction error:", error);

});



app.get('/', function(req, res) {
    res.render('home');
});

app.get('/store', function(req, res) {
    res.render('store');
});


app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});