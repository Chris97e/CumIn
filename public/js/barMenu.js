

window.onload = function () {
   
    var menuDes = document.querySelector('.iconDesplegable');
    var menuOculto = document.querySelector('.mostrarMenu');
    var elementosMenu = document.getElementById("desplegable");
    var body = document.getElementById("bodyHome");


    function mostrarMenu() {
        
        menuOculto.style.display = 'flex';

    }


    function ocultarMenu() {
        
        menuOculto.style.display = 'none';

    }

    //------------funcion Scroll

    function bajarPagina(){

        console.log("mierdaaaaa");
        $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
   
    }


    menuDes.addEventListener('mouseover', mostrarMenu);
    //menuDes.addEventListener('mouseout', ocultarMenu);
    elementosMenu.addEventListener('mouseover', mostrarMenu);
    elementosMenu.addEventListener('mouseout', ocultarMenu);
    body.addEventListener("scroll", bajarPagina);
    

}

