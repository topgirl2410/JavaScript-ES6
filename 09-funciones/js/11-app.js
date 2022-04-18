'use strict';

const aprendiendo = function (tecnologia, tecnologia1) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia1}`)
}

aprendiendo("JavaScript ES6", "Node.js");

/************************************************************ Arrow Function ************************** */

const leer = libros => `Leyendo ${libros} `; // Si solo hay un parametro se puede no usar parentesis, codigo más corto y limpio;

console.log(leer("La Bella y la Bestia"));

