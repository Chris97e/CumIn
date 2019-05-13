
window.onload = function () {
    
    var boolType = false;
    var boolPrice = false;
    var boolSort = false;
    var boolBrand = false;
    
    
    var typeProduct = document.getElementById("claseProducto");
    var priceType = document.getElementById("dineroProducto");
    var sortProduct = document.getElementById("sortProducto");
    var brandProduct = document.getElementById("brandProducts");
    
    var itemClass = document.getElementById("itemsClass");
    var dineroDisplay = document.getElementById("dinero");
    var itemSort = document.getElementById("itemsSort");
    var itemBrand = document.getElementById("itemsBrand");
    
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
    var url = window.location.href;
    
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
    
    

    
    everything.addEventListener('click', function () {
        estadoClase.innerHTML = "EVERYTHING";
        localStorage.setItem("CLASE", "EVERYTHING");
        ocultarTodo();
        
    });
    
    vibrators.addEventListener('click', function () {
        estadoClase.innerHTML = "VIBRATORS";
        localStorage.setItem("CLASE", "VIBRATORS");
        ocultarTodo();
    });
    
    dildos.addEventListener('click', function () {
        estadoClase.innerHTML = "DILDOS";
        localStorage.setItem("CLASE", "DILDOS");
        ocultarTodo();
    });
    
    anal.addEventListener('click', function () {
        estadoClase.innerHTML = "ANAL";
        localStorage.setItem("CLASE", "ANAL");
        ocultarTodo();
    });
    
    lubricants.addEventListener('click', function () {
        estadoClase.innerHTML = "LUBRICANTS";
        localStorage.setItem("CLASE", "LUBRICANTS");
        ocultarTodo();
    });
    
    //----------------elements for the filter by price
    
    function buscarPrecio() {
        
        
        
        console.log(url);
        console.log(url.length);
        var existe= url.search('price=');
        if(existe>0){
            console.log("panocha")
            
        } else{ 
            location.href = url + '+price=' + inputRange.value;
        }
    }
    
    inputRange.addEventListener('change', buscarPrecio);
    
    function urlSort(a){

        if(url.length==27){

            location.href =url +'/sort='+a;

        } 

        var existe = url.search('/sort=');

        if(existe>0){

        }

        console.log(url.length);

    }
    
    //----------------elements for the filter by sort
    
    bestSelling.addEventListener('click', function () {
        estadoSort.innerHTML = "BEST SELLING";
        urlSort();
        localStorage.setItem("SORT", "BEST SELLING");
        ocultarTodo();
    });
    
    rating.addEventListener('click', function () {
        estadoSort.innerHTML = "RAITING";
        localStorage.setItem("SORT", "RAITING");
        ocultarTodo();
    });
    
    none.addEventListener('click', function () {
        estadoSort.innerHTML = "NONE";
        localStorage.setItem("SORT", "NONE");
        ocultarTodo();
    });
    
    lowerPrice.addEventListener('click', function () {
        estadoSort.innerHTML = "LOWER PRICE";
        localStorage.setItem("SORT", "LOWER PRICE");
        ocultarTodo();
    });
    
    higherPrice.addEventListener('click', function () {
        estadoSort.innerHTML = "HIGHER PRICE";
        localStorage.setItem("SORT", "HIGHER PRICE");
        ocultarTodo();
    });
    
    //----------------elements for the filter by brand
    
    feelztoys.addEventListener('click', function () {
        estadoBrand.innerHTML = "FEELZTOYS";
        ocultarTodo();
    });
    
    liebe.addEventListener('click', function () {
        estadoBrand.innerHTML = "LIEBE";
        ocultarTodo();
    });
    
    satisyer.addEventListener('click', function () {
        estadoBrand.innerHTML = "SATISFYER";
        ocultarTodo();
    });
    
    funFactory.addEventListener('click', function () {
        estadoBrand.innerHTML = "FUN FACTORY";
        ocultarTodo();
    });
    
    none.addEventListener('click', function () {
        estadoBrand.innerHTML = "NONE";
        ocultarTodo();
    });
    
    
    
    
}












