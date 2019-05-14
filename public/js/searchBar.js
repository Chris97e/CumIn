
window.onload = function () {

    var boolType = false;
    var boolPrice = false;
    var boolSort = false;
    var boolBrand = false;


    var cerrar = document.getElementById("mariposa");
    var mas = document.getElementById("masCarrito");
    var anadirFavoritos = document.getElementById("favoritos");;



    var creadoType = "false";
    if (localStorage.getItem("creadoTipo")) {
        creadoType = localStorage.getItem("creadoTipo");
    }

    var creadoPrice = "false";
    if (localStorage.getItem("creadoPrice")) {
        creadoPrice = localStorage.getItem("creadoPrice");
    }

    var creadoSort = "false";
    if (localStorage.getItem("creadoSort")) {
        creadoSort = localStorage.getItem("creadoSort");
    }

    var creadoBrand = "false";
    if (localStorage.getItem("creadoBrand")) {
        creadoBrand = localStorage.getItem("creadoBrand");
    }


    var tipo = "";
    if (localStorage.getItem("tipo")) {
        tipo = localStorage.getItem("tipo");
    }

    var sort = "";
    if (localStorage.getItem("sort")) {
        sort = localStorage.getItem("sort");

    }

    var brand = "";
    if (localStorage.getItem("brand")) {
        brand = localStorage.getItem("brand");
    }

    var typeProduct = document.getElementById("claseProducto");
    var priceType = document.getElementById("dineroProducto");
    var sortProduct = document.getElementById("sortProducto");
    var brandProduct = document.getElementById("brandProducts");

    var itemClass = document.getElementById("itemsClass");
    var dineroDisplay = document.getElementById("dinero");
    var itemSort = document.getElementById("itemsSort");
    var itemBrand = document.getElementById("itemsBrand");
    var elementoSelector = document.getElementById("itemVentaSueno");




    //----------------detalles productos




   





    //------------------------fin detalles productos


    //-------------------------------------------------------Filtros
    //This are the elementes of the filter got it by id
    //----------------elements for the filter by class
    var estadoClase = document.getElementById("claseProducto");
    var everything = document.getElementById("Everything");
    var vibrators = document.getElementById("Vibrators");
    var dildos = document.getElementById("Dildos");
    var anal = document.getElementById("Anal");
    var lubricants = document.getElementById("Lubricants");

    //----------------elements for the filter by sort
    var estadoSort = document.getElementById("sortProducto");
    if (localStorage.getItem(estadoSort)) {
        estadoSort.innerHTML = localStorage.getItem(estadoSort);
    }
    var bestSelling = document.getElementById("Best");
    var rating = document.getElementById("Rating");
    var none = document.getElementById("None");
    var lowerPrice = document.getElementById("Lower");
    var higherPrice = document.getElementById("Higher");

    //----------------elements for the filter by brand
    var estadoBrand = document.getElementById("brandProducts");

    var feelztoys = document.getElementById("Feelztoys");
    var liebe = document.getElementById("Liebe");
    var satisyer = document.getElementById("Satisfyer");
    var funFactory = document.getElementById("Fun");
    var none = document.getElementById("NoneB");


    //---------------elements by price
    var inputRange = document.getElementById("rangePrice");


    //----------------------------- filter selected

    if (localStorage.getItem("CLASE")) {

        estadoClase.innerHTML = localStorage.getItem("CLASE");
    } else {
        estadoClase.innerHTML = localStorage.getItem("EVERYTHINH");
    }


    function mostrarType() {
        boolType = !boolType;
        boolSort = false;
        boolBrand = false;
        mostrarGeneral();

    }
    function mostrarPrice() {
        boolPrice = !boolPrice;
        mostrarGeneral();

    }
    function mostrarSort() {
        boolSort = !boolSort;
        boolType = false;
        boolBrand = false;
        mostrarGeneral();

    }
    function mostrarBrand() {
        boolBrand = !boolBrand;
        boolType = false;
        boolSort = false;
        mostrarGeneral();

    }

    function ocultarTodo() {
        boolBrand = false;
        boolType = false;
        boolSort = false;
        mostrarGeneral();
    }


    function mostrarGeneral() {



        if (boolType) {
            itemClass.style.transition = "display 2s";
            itemClass.style.display = "flex";


        } else {
            itemClass.style.display = "none";

        }

        if (boolPrice) {

            priceType.innerHTML = "LESS";
        } else {
            priceType.innerHTML = "MORE";
        }

        if (boolSort) {
            itemSort.style.transition = "display 2s";
            itemSort.style.display = "flex";



        } else {
            itemSort.style.display = "none";

        }

        if (boolBrand) {
            itemBrand.style.transition = "display 2s";
            itemBrand.style.display = "flex";


        } else {
            itemBrand.style.display = "none";

        }


    };


    typeProduct.addEventListener('click', mostrarType);

    priceType.addEventListener('click', mostrarPrice);

    sortProduct.addEventListener('click', mostrarSort);

    brandProduct.addEventListener('click', mostrarBrand);

    //--------------------------------------------------------

    function filtrarTipos(a, b) {


        var estoyCambiando = false;
        var url = window.location.href;
        var existe = url.search('type');



        if (existe > 0) {

            estoyCambiando = true;
            var cambio = url.replace(b, a);
            localStorage.setItem("tipo", a);
            localStorage.setItem("creadoTipo", true);
            localStorage.setItem("ip", cambio);
            location.href = cambio;


        }

        if (url.length == 28) {
            estoyCambiando = true;
            localStorage.setItem("tipo", a);
            localStorage.setItem("creadoTipo", true);
            localStorage.setItem("ip", url + 'type=' + a);
            location.href = url + 'type=' + a;


        }

        if (url.length == 27) {
            estoyCambiando = true;
            localStorage.setItem("tipo", a);
            localStorage.setItem("creadoTipo", true);
            localStorage.setItem("ip", url + '/type=' + a);
            location.href = url + '/type=' + a;


        }


        if ((creadoBrand == "true" || creadoSort == "true" || creadoBrand == "true") && estoyCambiando == false) {
            localStorage.setItem("tipo", a);
            localStorage.setItem("creadoTipo", true);
            localStorage.setItem("ip", url + '&type=' + a);
            location.href = url + '&type=' + a;

        }






    }

    //--------------------------------------------------------


    everything.addEventListener('click', function () {

        estadoClase.innerHTML = "EVERYTHING";
        localStorage.setItem("CLASE", "EVERYTHING");
        filtrarTipos("Everything", tipo);
        ocultarTodo();

    });

    vibrators.addEventListener('click', function () {
        estadoClase.innerHTML = "VIBRATORS";
        localStorage.setItem("CLASE", "VIBRATORS");
        filtrarTipos("Vibrators", tipo);
        ocultarTodo();
    });

    dildos.addEventListener('click', function () {
        estadoClase.innerHTML = "DILDOS";
        localStorage.setItem("CLASE", "DILDOS");
        filtrarTipos("Dildos", tipo);
        ocultarTodo();
    });

    anal.addEventListener('click', function () {
        estadoClase.innerHTML = "ANAL";
        localStorage.setItem("CLASE", "ANAL");
        filtrarTipos("Anal", tipo);
        ocultarTodo();
    });

    lubricants.addEventListener('click', function () {
        estadoClase.innerHTML = "LUBRICANTS";
        localStorage.setItem("CLASE", "LUBRICANTS");
        filtrarTipos("Lubricants", tipo);
        ocultarTodo();
    });

    //----------------elements for the filter by price

    function buscarPrecio() {



        console.log(url);
        console.log(url.length);
        var existe = url.search('price=');
        if (existe > 0) {
            console.log("panocha")

        } else {
            location.href = url + '+price=' + inputRange.value;
        }
    }

    inputRange.addEventListener('change', buscarPrecio);


    //----------------elements for the filter by sort


    //--------------------------------------------------------

    function filtrarSort(a, b) {

        var estoyCambiando = false;
        var url = window.location.href;
        var existe = url.search('sort');




        if (existe > 0) {

            estoyCambiando = true;


            var cambio = url.replace(b, a);
            localStorage.setItem("sort", a);
            localStorage.setItem("creadoSort", true);
            localStorage.setItem("ip", cambio);
            location.href = cambio;

        }

        if (url.length == 28) {
            estoyCambiando = true;
            localStorage.setItem("sort", a);
            localStorage.setItem("creadoSort", true);
            localStorage.setItem("ip", url + 'sort=' + a);
            location.href = url + 'sort=' + a;

        }


        if (url.length == 27) {
            estoyCambiando = true;
            localStorage.setItem("sort", a);
            localStorage.setItem("creadoSort", true);
            localStorage.setItem("ip", url + '/sort=' + a);
            location.href = url + '/sort=' + a;

        }


        if ((creadoBrand == "true" || creadoType == "true" || creadoPrice == "true") && estoyCambiando == false) {
            localStorage.setItem("sort", a);
            localStorage.setItem("creadoSort", true);
            localStorage.setItem("ip", url + '&sort=' + a);
            location.href = url + '&sort=' + a;

        }






    }

    //--------------------------------------------------------

    bestSelling.addEventListener('click', function () {

        localStorage.setItem(estadoSort, "BEST SELLING");
        filtrarSort("best", sort);
        ocultarTodo();
    });

    rating.addEventListener('click', function () {
        localStorage.setItem(estadoSort, "RAITING");
        filtrarSort("raiting", sort);
        ocultarTodo();
    });

    none.addEventListener('click', function () {
        localStorage.setItem(estadoSort, "NONE");
        filtrarSort("nones", sort);
        ocultarTodo();
    });

    lowerPrice.addEventListener('click', function () {

        localStorage.setItem(estadoSort, "LOWER PRICE");
        filtrarSort("lower", sort);
        ocultarTodo();
    });

    higherPrice.addEventListener('click', function () {

        localStorage.setItem(estadoSort, "HIGHER PRICE");
        filtrarSort("higher", sort);
        ocultarTodo();
    });



    //----------------elements for the filter by brand


    function filtrarBrand(a, b) {


        var estoyCambiando = false;
        var url = window.location.href;
        var existe = url.search('brand');



        if (existe > 0) {
            estoyCambiando = true;
            var cambio = url.replace(b, a);
            localStorage.setItem("brand", a);
            localStorage.setItem("creadoBrand", true);
            localStorage.setItem("ip", cambio);
            location.href = cambio;

        }

        if (url.length == 28) {
            estoyCambiando = true;
            localStorage.setItem("brand", a);
            localStorage.setItem("creadoBrand", true);
            location.href = url + 'brand=' + a;
            localStorage.setItem("ip", url + 'brand=' + a);

        }


        if (url.length == 27) {
            estoyCambiando = true;
            localStorage.setItem("brand", a);
            localStorage.setItem("creadoBrand", true);
            location.href = url + '/brand=' + a;
            localStorage.setItem("ip", url + '/brand=' + a);
        }



        if ((creadoBrand == "true" || creadoType == "true" || creadoSort == "true") && estoyCambiando == false) {
            console.log("Salchicon cervecero");
            localStorage.setItem("brand", a);
            localStorage.setItem("creadoBrand", true);
            location.href = url + '&brand=' + a;
            localStorage.setItem("ip", url + '&brand=' + a);

        }







    }





    //----------------------------------------------------

    feelztoys.addEventListener('click', function () {
        estadoBrand.innerHTML = "FEELZTOYS";
        filtrarBrand("Feelztoys", brand);
        ocultarTodo();
    });

    liebe.addEventListener('click', function () {
        estadoBrand.innerHTML = "LIEBE";
        filtrarBrand("Liebe", brand);
        ocultarTodo();
    });

    satisyer.addEventListener('click', function () {
        estadoBrand.innerHTML = "SATISFYER";
        filtrarBrand("Satisfyer", brand);
        ocultarTodo();
    });

    funFactory.addEventListener('click', function () {
        estadoBrand.innerHTML = "FUN FACTORY";
        filtrarBrand("Fun", brand);
        ocultarTodo();
    });

    none.addEventListener('click', function () {
        estadoBrand.innerHTML = "NONE";
        filtrarBrand("none", brand);
        ocultarTodo();
    });

    cerrar.addEventListener('click', function () {
        location.href = localStorage.getItem("ip");
    });




    ///-------------------------------------------
    //-----------[AÑADIR AL CARRITO]--------------

    








}












