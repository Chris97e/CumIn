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

//carrito de compras
var carrito = {};



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
    
    
    var query = {}
    var sort = "";
    
    if (request.params.filtro) {
        let tiposFiltros = request.params.filtro;
        let filtros = tiposFiltros.split('&');
        
        filtros.forEach(f => {
            let i = f.split("=");
            
            if (i[0] == "type") {
                
                
                
                if (i[1] == "Everything") {
                    
                    for (var k = 0; k < query.length; k++) {
                        if (query[k].type === "Everything") {
                            arr.splice(k, 1);
                        }
                    }
                    
                    
                } else {
                    query.type = i[1];
                }
                
                
            }
            
            
            if (i[0] == "sort") {
                
                sort = i[1];
                
            }
            
            
            if (i[0] == "brand") {
                
                if (i[1] == "Fun") {
                    i[1] = "Fun Factory";
                }
                
                if (i[1] == "none") {
                    
                    
                    
                    for (var k = 0; k < query.length; k++) {
                        if (query[k].brand === "none") {
                            arr.splice(k, 1);
                        }
                    }
                    
                    
                    
                    
                } else {
                    query.brand = i[1];
                }
                
                
                
                
            }
            
            
        });
        
        console.log(query);
        
        
    }
    
    
    
    var coleccionSort;
    
    
    
    
    
    //console.log("---------------");
    // console.log(query);
    
    
    
    //Accedemos a la conección
    var collection = db.collection('products');
    collection.find(query).toArray(function (err, docs) {
        assert.equal(err, null);
        
        coleccionSort = docs;
        
        
        
        ////
        if (sort != "") {
            
            
            
            
            
            
            
            if (sort == "best") {
                
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
            
            
            
            if (sort == "lower") {
                
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
            
            if (sort == "higher") {
                
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

            if (sort == "raiting") {
                
                
            }
            
            
        }
        
        ////
        
        
        
        
        var contexto = {
            products: coleccionSort,
            
            carga: false,
            
            
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







