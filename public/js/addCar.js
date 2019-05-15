function paginaCargada() {

    //Elementos obtenidos del HTML
    var anadirCarritoStore = document.querySelectorAll('.vector_mas');
    var anadirCarritoProducto = document.getElementById("masCarrito");
    var displayNumeroProductos = document.querySelector('.cantidad');
    var mostrarCarro = document.querySelector('.micarrito');
    var displayPrecioTotal = document.querySelector('.dinero');
    var DisplayNumeroTotal = document.querySelector('.numero');
    var precioTotal = 0;
    var productosTotal;

    if (localStorage.getItem('carNumber')) {

        displayNumeroProductos.innerHTML = localStorage.getItem('carNumber');

    }

    //Variable carrito creado Localmente
    var listaProducto = [];

    if (localStorage.getItem('productsList')) {
        listaProducto = JSON.parse(localStorage.getItem('productsList'));
    }


    //recorrer botones va a tener el carrito para añadir
    function recorrerBotones(boton) {

        function agregarCarrito() {


            var padres = boton.parentNode;
            var padreBoton = padres.parentNode;
            var name = padreBoton.querySelector('.producto__nombre').innerText;

            var price = padreBoton.querySelector('.producto__precio').innerText;
            var img = padreBoton.querySelector('.calocha_imagen').src;

            var product = {

                name: name,
                price: price,
                img: img

            };

            console.log(product);

            listaProducto.push(product);
            refreshCar();
            localStorage.setItem('productsList', JSON.stringify(listaProducto));

        }

        boton.addEventListener('click', agregarCarrito);

    }

    //Recoro todos los botones y le hago que ejecuten este método recorrer botones    
    anadirCarritoStore.forEach(recorrerBotones);


    //metodo para actualizar la variable del numero de elemetos del carrito
    function refreshCar() {

        displayNumeroProductos.innerHTML = listaProducto.length;
        localStorage.setItem("carNumber", listaProducto.length);

    }

    

    if(location.href == "http://localhost:3000/check"){
        mostrarCheck();
    }

    function mostrarCheck() {

        if (listaProducto != null) {

            productosTotal = listaProducto.length;
            console.log(precioTotal);
            DisplayNumeroTotal.innerText = "#"+productosTotal;
            displayPrecioTotal.innerText = "$"+precioTotal;


            listaProducto.forEach(function (producto, index) {

                var hola = producto.price.replace("$","");
                precioTotal += parseFloat(hola);
                console.log(precioTotal);

                mostrarCarro.innerHTML += 

                `<div class="item">
                <img src="${producto.img}" width="200px" alt="">
                <p class="name">${producto.name}</p>
                <p class="price">${producto.price}</p>
                </div>`


            });


        }




    }

}


window.addEventListener('load', paginaCargada);

