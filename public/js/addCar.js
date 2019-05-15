function paginaCargada() {

    //Elementos obtenidos del HTML
    var anadirCarritoStore = document.querySelectorAll('.vector_mas');
    var anadirCarritoProducto = document.getElementById("masCarrito");
    var displayNumeroProductos = document.querySelector('.cantidad');
   
    if(localStorage.getItem('carNumber')){
    
        displayNumeroProductos.innerHTML = localStorage.getItem('carNumber');

    }

    //Variable carrito creado Localmente
    var listaProducto = [];


    //recorrer botones va a tener el carrito para añadir
    function recorrerBotones(boton) {

        function agregarCarrito() {

            
            var padres = boton.parentNode;
            var padreBoton = padres.parentNode;
            var name = padreBoton.querySelector('.producto__nombre').innerText;
            
            var price = padreBoton.querySelector('.producto__precio').innerText;
            var img = padreBoton.querySelector('.calocha_imagen').src;

            var product = {

                name : name,
                price: price,
                img: img

            };

            console.log(product);

            listaProducto.push(product);
            refreshCar();
            localStorage.setItem('productsList', JSON.stringify(listaProducto) );

        }

        boton.addEventListener('click', agregarCarrito);

    }

    //Recoro todos los botones y le hago que ejecuten este método recorrer botones    
    anadirCarritoStore.forEach(recorrerBotones);


    //metodo para actualizar la variable del numero de elemetos del carrito
    function refreshCar(){

        displayNumeroProductos.innerHTML =  listaProducto.length;
        localStorage.setItem("carNumber", listaProducto.length);
    
    }

}


window.addEventListener('load', paginaCargada);

