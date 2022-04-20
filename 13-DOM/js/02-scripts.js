'use strict';

// Seleccionar elementos por su clase (Ya no es el que más se usa, pero esta bien tambien saberlo )

const header = document.getElementsByClassName("header");

console.log(header);

/********************************************* Practicas ************************************************************/

const hero = document.getElementsByClassName("hero");

console.log(hero);

/************************************************* Si las clases existen más de 1 vez ********************************/

const contenedores = document.getElementsByClassName("contenedor");

console.log(contenedores);

/************************************************** Si una clase no existe *******************************************/

const noExiste = document.getElementsByClassName("no-existe");

console.log(noExiste);