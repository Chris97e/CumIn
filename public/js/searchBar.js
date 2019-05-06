
window.onload = function () {
    
    var boolType    = false;
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



    function mostrarType() {
        boolType = !boolType;
        mostrarGeneral();
        
    }
    function mostrarPrice() { 
        boolPrice = !boolPrice;
        mostrarGeneral();
        
    }
    function mostrarSort() {
        boolSort = !boolSort;
        mostrarGeneral();
        
     }
    function mostrarBrand() {
        boolBrand = !boolBrand;
        mostrarGeneral();
        
     }


     function mostrarGeneral(){

        console.log("inside");

        if(boolType){
            itemClass.style.display = "flex";
        } else{
            itemClass.style.display = "none";

        }

        if(boolPrice){
            priceType.innerHTML = "LESS";
        } else{
            priceType.innerHTML = "MORE";
        }

        if(boolSort){
            itemSort.style.display ="flex";

        } else {
            itemSort.style.display ="none";
        }

        if(boolBrand){
            itemBrand.style.display ="flex";
        } else{
            itemBrand.style.display ="none";
        }
        

     };


     typeProduct.addEventListener('click', mostrarType);

     priceType.addEventListener('click', mostrarPrice);

     sortProduct.addEventListener('click', mostrarSort);

     brandProduct.addEventListener('click', mostrarBrand);
    










}