'use strict';

/******************************************* QuerySelector ************************************************************ */

const card = document.querySelector('.card');

console.log(card);

/*********************************** Podemos tener selectores especificos como en CSS ************************************/

const info = document.querySelector('.premium .info');

console.log(info);

/*********************************** Seleccionar el segundo card de hospedaje ********************************************/

const card1 = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(card1);


/************************************* Seleccionar el formulario *********************************************************/

const formulario = document.querySelector('#formulario');

console.log(formulario);

/*************************************** Seleccionar elementos HTML ******************************************************/

const navegacion = document.querySelector('nav');

console.log(navegacion);

