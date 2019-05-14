var express = require('express'),
    engines = require('consolidate'),
    handlebars = require('handlebars');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var app = express();


app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));




// This is the conecction with mongodb 
// Here I'm telling to mongodb that I want to conect specifically to the cumIn database

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'cumIn';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

var db = null;





// This is for know when te conecction is ready, we only want to know once, thats te reason why
// we use "once" on the event


client.connect(function (err) {
    assert.equal(null, err);

    db = client.db(dbName);
    console.log("Conecction has been made!");
    //client.close();
});






app.get('/', function (request, response) {
    response.render('home');
});

app.get('/store/:filtro?', function (request, response) {


    let tiposFiltros = request.params.filtro;
    let filtros =  tiposFiltros.split('&');

    var query = {}
    var coleccionSort;

    



    //console.log("---------------");
    // console.log(query);



    //Accedemos a la conección
    var collection = db.collection('products');
    collection.find(query).toArray(function (err, docs) {
        assert.equal(err, null);

        coleccionSort = docs;



        ////
        if (request.params.filtro) {
            var peticionFiltro = request.params.filtro;
            var peticionDividida = peticionFiltro.split("=");




            if (peticionDividida[0] == "sort") {

                

                if (peticionDividida[1] == "best") {
                    console.log("-------------------------");
                    coleccionSort.sort(function (a, b) {
                        if (a.sells > b.sells) {
                            return -1;
                        }
                        if (a.sells < b.sells) {
                            return 1;
                        }
                        // a must be equal to b
                        return 0;

                    });
                }
            }

            if (peticionDividida[0] == "brand") {

                coleccionSort.sort(function (a, b) {
                    if (a.brand > b.brand) {
                        return 1;
                    }
                    if (a.brand < b.brand) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;

                });

            }

            if (peticionDividida[0] == "lower") {

                coleccionSort.sort(function (a, b) {
                    if (a.price > b.price) {
                        return 1;
                    }
                    if (a.price < b.price) {
                        return -1;
                    }
                    // a must be equal to b
                    return 0;

                });

            }

            if (peticionDividida[0] == "higher") {

                coleccionSort.sort(function (a, b) {
                    if (a.price > b.price) {
                        return -1;
                    }
                    if (a.price < b.price) {
                        return 1;
                    }
                    // a must be equal to b
                    return 0;

                });

            }


        }

        ////



        var tipo = request.params.type;
        var contexto = {
            products: coleccionSort,
            type: tipo,
            carga: false

        };


        response.render('store', contexto);
    });
});

app.get('/store/product/:name', function (request, res) {


    var index = {};



    if (request.params.name) {

        index.name = request.params.name;
    }



    var collection = db.collection('products');
    collection.find(index).toArray(function (err, docs) {
        assert.equal(err, null);

        var contexto = {
            products: docs[0],
            carga: true,
            type: "everything"

        };



        res.render('store', contexto);
    });
});



app.listen(3000, function () {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});

function compare(a, b) {

    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
}







