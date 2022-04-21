'use strict';

/************************ Generar HTML desde JavaScript *****************************************************/

const enlace = document.createElement('a');


// Agregandole el texto 

enlace.textContent = 'Nuevo Enlace';

// Añadiendo el href

enlace.href = '/nuevo-enlace';

// Añadiendo target _blank

enlace.target = "_blank";

// Seleccionar la navegacion 

const navegacion = document.querySelector('.navegacion');

// Agregando el enlace al frontend al final

navegacion.appendChild(enlace);

// Colocar el enlace en otra posicion que no sea la del final (entre vender y ayuda);

navegacion.insertBefore(enlace, navegacion.children[1]);

console.log(navegacion.children);

console.log(enlace);