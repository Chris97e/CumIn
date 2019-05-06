var express = require('express'),
engines = require('consolidate'),
handlebars = require('handlebars');
const MongoClient = require('mongodb').MongoClient;
var app = express();

app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));




// This is the conecction with mongodb 
// Here I'm telling to mongodb that I want to conect specifically to the cumIn database
const url = 'mongodb://localhost:27017';
const dbName = 'cumIn';
const client = new MongoClient(url);
var db = null;



// This is for know when te conecction is ready, we only want to know once, thats te reason why
// we use "once" on the event


client.connect(function (err) {
    assert.equal(null, err);
    
    db = client.db(dbName);
    console.log("Conecction has been made!");
    //client.close();
});






app.get('/', function (req, res) {
    res.render('home');
});

app.get('/store', function (req, res) {
    
    //Accedemos a la conección
    var collection = db.collection('products');
    collection.find(query).toArray(function (err, docs) {
        assert.equal(err, null);
        
        var contexto = {
            products: docs,
            
        };
        response.render('store', contexto);
    });
});


app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});