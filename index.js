var express = require('express'),
engines = require('consolidate'),
handlebars = require('handlebars');

var app = express();

app.engine('hbs', engines.handlebars);
app.set ('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('home', {
        title: 'mis ',
        
    });
});


app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});