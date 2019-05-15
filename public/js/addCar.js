function paginaCargada() {

    //Elementos obtenidos del HTML
    var anadirCarritoStore = document.getElementById("anadirCarrito");
    var anadirCarritoProducto = document.getElementById("masCarrito");

    //Variable carrito creado Localmente
    var listaProducto = [];


    //recorrer botones va a tener el carrito para añadir
    function recorrerBotones(boton) {

        function agregarCarrito() {

            var padreBoton = boton.parentNode;
            var name = paddre.querySelector('.producto__nombre').innerText;
            var price = padre.querySelector('.producto__precio').innerText;
            var img = padre.querySelector('.imagen_producto').src;

            var product = {

                name : name,
                price: price,
                img: img

            };

            listaProducto.push(product);




        }







    }

    //Recoro todos los botones y le hago que ejecuten este método recorrer botones    
    anadirCarritoStore.forEach(recorrerBotones);


    //metodo para actualizar la variable del numero de elemetos del carrito
    function refreshCar(){
        listaProducto.length;
    }

}
window.addEventListener('load', paginaCargada);