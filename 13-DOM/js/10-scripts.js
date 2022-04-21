'use strict';

/************************ Generar HTML desde JavaScript *****************************************************/

const enlace = document.createElement('a');


// Agregandole el texto 

enlace.textContent = 'Nuevo Enlace';

// Añadiendo el href

enlace.href = '/nuevo-enlace';

// Añadiendo target _blank

enlace.target = "_blank";

// Agregando atributo

enlace.setAttribute('data-enlace', 'nuevo-enlace');

// Agregar clase 

enlace.classList.add('alguna-clase');

// Seleccionar la navegacion 

const navegacion = document.querySelector('.navegacion');

// Agregando el enlace al frontend al final

navegacion.appendChild(enlace);

// Agregar una función

enlace.onclick = miFuncion;

// Colocar el enlace en otra posicion que no sea la del final (entre vender y ayuda);

navegacion.insertBefore(enlace, navegacion.children[1]);


function miFuncion() {
    alert('Diste click');
}

//console.log(navegacion.children);

//console.log(enlace);

/****************************** Crear un card (HTML) con JavaScript ************************************************/

const parrafo1 = document.createElement('p');  // Creando el primer parrafo
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('p');  // Creando el segundo parrafo
parrafo2.textContent = 'Concierto de Rap en Barcelona';
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p'); // Creando el tercer parrafo
parrafo3.textContent = '800€ por persona';
parrafo3.classList.add('precio');


// Crear div con la clase de info 

const info = document.createElement('div'); // Creando el div
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear la imagen 

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

imagen.classList.add('img-fuid');
imagen.alt = 'imagen creada desde javascript';


// Crear el Card

const card = document.createElement('div');
card.classList.add('card');


// Asignar la imagen 

card.appendChild(imagen);

// Asignar info 

card.appendChild(info);





/*************************************** Parrafos ************************************************ */

//console.log(parrafo1);
//console.log(parrafo2);
//console.log(parrafo3);

/*********************************************** Div info ***************************************** */

//console.log(info);

/*********************************************** Imagen ***************************************** */

//console.log(imagen);

/*********************************************** Card ***************************************** */

console.log(card);