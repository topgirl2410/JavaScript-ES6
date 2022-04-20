'use strict';
let elemento;

/************************************ Acceder a elementos del HTML con document ( Seleccionar elementos )***************************/

elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain; // Te muestra el dominio actual (url)

/************************************ Document Formularios ***********************************************/

elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

/*************************************** Document Links ***************************************************/

elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;

/**************************************** Document Img *****************************************************/

elemento = document.images;

/**************************************** Document Scripts **************************************************/

elemento = document.scripts;

/*************************************************************************************************************/


console.log(elemento); 