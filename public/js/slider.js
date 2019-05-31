$(document).ready(function () {



    $('.flexslider').flexslider({

        animation: "fade",
        randomize: true,
        slideshowSpeed: 8000,
        animationSpeed: 400,
        easing: "swing",


    });

    var meEstoyMoviendo = false;
    var go = document.getElementById("go");

    //elementos tipo Slider

    var uno = document.querySelector(".unoP");
    var dos = document.querySelector(".dosP");
    var tres = document.querySelector(".tresP");
    var cuatro = document.querySelector(".cuatroP");
    var cinco = document.querySelector(".cincoP");
    var seis = document.querySelector(".seisP");
    var siete = document.querySelector(".sieteP");
    var ocho = document.querySelector(".ochoP");
    var nueve = document.querySelector(".nueveP");
    var diez = document.querySelector(".diezP");
    var once = document.querySelector(".onceP");
    var doce = document.querySelector(".doceP");


    //input
    var texto = document.querySelector(".inpu");

    //elementos botones infinitos
    var seguirNombre = document.getElementById("seguirNombre");
    var hombre = document.getElementById("chicos");
    var mujer = document.getElementById("chicas");
    var ambos = document.getElementById("ambos");
    var delgado = document.getElementById("delgado");
    var musculo = document.getElementById("musculoso");
    var gordo = document.getElementById("gordito");
    var alto = document.getElementById("alto");
    var enano = document.getElementById("enano");
    var promedio = document.getElementById("promedio");
    var intro = document.getElementById("intro");
    var extro = document.getElementById("extro");
    var pensa = document.getElementById("pensa");
    var compul = document.getElementById("compul");
    var azuca = document.getElementById("azucar");
    var sinAzuca = document.getElementById("sina");
    var sinCafe = document.getElementById("sinc");




    //interesado en
    hombre.addEventListener('click', function () {
        tres.style.display = "none";
        cuatro.style.display = "flex";


    });

    mujer.addEventListener('click', function () {
        tres.style.display = "none";
        cuatro.style.display = "flex";

    });

    ambos.addEventListener('click', function () {
        tres.style.display = "none";
        cuatro.style.display = "flex";

    });

    //cuerpo

    delgado.addEventListener('click', function () {
        cuatro.style.display = "none";
        cinco.style.display = "flex";

    });

    musculo.addEventListener('click', function () {
        cuatro.style.display = "none";
        cinco.style.display = "flex";

    });

    gordo.addEventListener('click', function () {

        cuatro.style.display = "none";
        cinco.style.display = "flex";
    });

    // altura

    alto.addEventListener('click', function () {
        cinco.style.display = "none";
        seis.style.display = "flex";

    });

    enano.addEventListener('click', function () {
        cinco.style.display = "none";
        seis.style.display = "flex";

    });

    promedio.addEventListener('click', function () {

        cinco.style.display = "none";
        seis.style.display = "flex";
    });

    //perso

    extro.addEventListener('click', function () {
        seis.style.display = "none";
        siete.style.display = "flex";

    });
    intro.addEventListener('click', function () {

        seis.style.display = "none";
        siete.style.display = "flex";
    });
    //mas

    pensa.addEventListener('click', function () {
        siete.style.display = "none";
        ocho.style.display = "flex";

    });

    compul.addEventListener('click', function () {
        siete.style.display = "none";
        ocho.style.display = "flex";

    });

    //cafe

    sinAzuca.addEventListener('click', function () {
        ocho.style.display = "none";
        nueve.style.display = "flex";
        console.log("calozaa");

    });
    azuca.addEventListener('click', function () {
        ocho.style.display = "none";
        nueve.style.display = "flex";
        console.log("calozaa");

    });

    sinCafe.addEventListener('click', function () {

        ocho.style.display = "none";
        nueve.style.display = "flex";
        console.log("calozaa");
    });






    seguirNombre.addEventListener('click', function () {
        dos.style.display = "none";
        tres.style.display = "flex";

    });



    go.addEventListener('click', function () {

        uno.style.display = "none";
        dos.style.display = "flex";


    });


   





    document.getElementById("bodyHome").onscroll = function () { myFunction() };
    function myFunction() {
        meEstoyMoviendo = true;
        barScrolling();


    }



    function barScrolling() {

        if (meEstoyMoviendo) {
            console.log("peneeee");
            meEstoyMoviendo = false;

        }
    }




});