'use strict';

/*************************************** Traversing the DOM ( ir navegando por los diferentes elementos )***********************************************/

const navegacion = document.querySelector('.navegacion');

console.log(navegacion);
console.log(navegacion.childNodes);  // Los espacios en blanco (saltos de linea) son considerados elementos
console.log(navegacion.children); // Te va a listar elementos reales;
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);

/*************************************************************************************************************/

const card = document.querySelector('.card');

console.log(card.children); // Nos lista los elementos que sean hijos de ese card
console.log(card.children[1].children);

/************************************* Acceder al titulo y al texto ************************************ */

const card1 = document.querySelector('.card');

console.log(card1.children[1].children[1].textContent);

/************************************* Modificar el titulo *************************************************/

const card2 = document.querySelector('.card');

card2.children[1].children[1].textContent = 'Nuevo heading desde traversing the DOM';

console.log(card2.children[1].children[1].textContent);

/************************************* Modificar la imagen *************************************************/

const card3 = document.querySelector('.card');

card3.children[0].src = 'img/hacer3.jpg';

console.log(card3.children[0]);

