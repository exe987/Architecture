$(document).ready(function () {
    /*----------------------------NAVIGATION MENU-------------------------------*/
    $('.boton').click(() => {
        $('#nav1').toggle()
    });

    /*-----------------------------SCROLL-MENU-------------------------------*/

    var altoVentana = 300;
    var posicionVentana = document.getElementById('nav').offsetTop;
    $(window).scroll(function (event) {
        var posicionScroll = $(window).scrollTop();
        if (posicionScroll > (parseInt(posicionVentana) + parseInt(altoVentana))) {
            $("#nav").fadeOut('1000ms');
        } else {
            $("#nav").fadeIn('1000ms');
        }
    });

    /*--------------------------------CARROUSEL-----------------------------*/
    const IMAGENES = [
         'img/slider2.jpeg', 'img/slider1.jpg', 'img/fondo8.jpg'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 2000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    //NEXT IMAGE
     function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    //BACK IMAGE
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    //RENDER IMAGE
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    //AUTOPLAY
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');
    }

    //STOP
    function stopIntervalo() {
        clearInterval(intervalo);
        //CONTROL BTN
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }
    //EVENTS
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    //INIT
    renderizarImagen();

});