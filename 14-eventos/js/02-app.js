'use strict';

const nav = document.querySelector('.navegacion');

// Registrar un evento

nav.addEventListener('click', () => {
    console.log('click en nav')
});

/************************************ Eventos (mouseenter) ***********************************************************/

nav.addEventListener('mouseenter', () => {  // se activa pasando el mouse por encima del enlace
    console.log('entrando a la navegación')

    nav.style.backgroundColor = 'white';
});

/************************************ Eventos (mouseout) ***********************************************************/

nav.addEventListener('mouseout', () => {   // Se activa cuando sales de encima de la navegación
    console.log('saliendo de la navegación')

    nav.style.backgroundColor = 'transparent';
})

/************************************ Eventos (mousedown) ***********************************************************/

nav.addEventListener('mousedown', () => {
    console.log('presionando la navegación')
})


/************************************ Eventos (mouseup) ***********************************************************/

nav.addEventListener('mouseup', () => {
    console.log('nave')
})

/************************************ Eventos (dblclick) ***********************************************************/

nav.addEventListener('dblclick', () => {
    console.log('nav')
})


/***
 * *************************** Cuando se activan los eventos *****************************************************
 * 
 * - mousedown = similar al click
 * 
 * - click = cuando das click
 * 
 * - dblclick = haciendo doble click
 * 
 * - mouseup = cuando sueltas el mouse 
 * 
 */