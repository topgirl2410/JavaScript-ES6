'use strict';

const encabezado = document.querySelector('.contenido-hero h1').textContent;  // Asi selecciona directamente el contenido

console.log(encabezado);

/********************************************************************************************************************

console.log(encabezado.innerText); // Si en el CSS - visibility: hidden (texto oculto); no lo va a encontrar
console.log(encabezado.textContent);  // Si en el CSS - visibility: hidden (texto oculto); en este si lo va a encontrar
console.log(encabezado.innerHTML); // tambien se trae el codigo html

*********************************************** Modificar encabezado **********************************************************************/

/***  const nuevoHeading = 'Nuevo Heading';

document.querySelector('.contenido-hero h1').textContent = nuevoHeading;  // Modifica el encabezado que ya tenemos ***/

/************************************************ Modificar la imagen ************************************************/

const imagen = document.querySelector('.card img');
imagen.src = 'img/arriba2.jpg'; // Modifica la imagen
