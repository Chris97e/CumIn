const mongoose = require('mongoose');

// This is the conecction with mongodb 
// Here I'm telling to mongodb that I want to conect specifically to the cumIn database
mongoose.connect('mongodb://localhost/cumIn');

// This is for know when te conecction is ready, we only want to know once, thats te reason why
// we use "once" on the event

mongoose.connection.once('open', function () {

    console.log("Conection has been made");

}).on('error', function (error) {
    console.log("conecction error:", error);

});