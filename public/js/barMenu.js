

window.onload = function () {
   
    var menuDes = document.querySelector('.iconDesplegable');
    var menuOculto = document.querySelector('.mostrarMenu');
    var elementosMenu = document.getElementById("desplegable");


    function mostrarMenu() {
        
        menuOculto.style.display = 'flex';

    }


    function ocultarMenu() {
        
        menuOculto.style.display = 'none';

    }




    menuDes.addEventListener('mouseover', mostrarMenu);
    //menuDes.addEventListener('mouseout', ocultarMenu);
    elementosMenu.addEventListener('mouseover', mostrarMenu);
    elementosMenu.addEventListener('mouseout', ocultarMenu);
    

}

