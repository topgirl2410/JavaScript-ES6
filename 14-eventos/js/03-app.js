'use strict';

const busqueda = document.querySelector('.busqueda');


/**************************************** Eventos que suceden en un teclado ******************************************************************/

/****************************************************** Evento teclado (keydown) *****************************************************/

/*busqueda.addEventListener('keydown', () => {  // keydown se ejecuta cuando presionas una tecla
    console.log('escribiendo...')
})*/

/****************************************************** Evento teclado (keyup) *****************************************************/

//busqueda.addEventListener('keyup', () => {  // keydown se ejecuta cuando presionas pero sueltas esa tecla
//console.log('escribiendo')
//})

/****************************************************** Evento teclado (blur) para validacion de formularios *****************************************************/

//busqueda.addEventListener('blur', () => {  // entrando y saliendo del input
//console.log('escribiendo....')
//})

/****************************************************** Evento teclado (copy) *****************************************************/

//busqueda.addEventListener('copy', () => {  // cuando selecciono el texto y lo copio 6

//console.log('copiar....')
//})

/****************************************************** Evento teclado (paste) *****************************************************/

busqueda.addEventListener('paste', () => {
    console.log('pegar...')
})

/****************************************************** Evento teclado (cut) *****************************************************/

busqueda.addEventListener('cut', () => {
    console.log('cortar...')
})

/****************************************************** Evento teclado (input) *****************************************************/

busqueda.addEventListener('input', (e) => {
    console.log(e.type)
})

busqueda.addEventListener('input', (e) => {
    console.log(e.target)
})

busqueda.addEventListener('input', (e) => {
    if (e.target.value === '') {
        console.log('Fallo la validación...')
    }
    //console.log(e.target.value)  // te devuelve lo que el usuario esta escribiendo
})