'use strict';

// Cambiar el color del encabezado con JavaScript (No se recomienda)

const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';

// Cambiar la fuente del encabezado

encabezado.style.fontFamily = 'Arial';

// Poner el texto en mayusculas 

encabezado.style.textTransform = 'uppercase';

/********************************** Agregar clases ****************************************************/

const card = document.querySelector('.card');
card.classList.add('nueva-clase');
console.log(card.classList);


/************************************* Agregar una segunda clase ***************************************/
const card1 = document.querySelector('.card');
card.classList.add('nueva-clase1', 'segunda-clase');
console.log(card1.classList);


/************************************* Remover una clase ***********************************************/

const borrar = document.querySelector('.card');
card.classList.remove('card');
console.log(borrar.classList);