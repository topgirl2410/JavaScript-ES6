'use strict';

const aprendiendo = function (tecnologia, tecnologia1) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia1}`)
}

aprendiendo("JavaScript ES6", "Node.js");

/************************************************************ Arrow Function ************************** */

const leer = (libros, escritor) => `Leyendo ${libros} y su autor/a es ${escritor} `; // Si solo hay un parametro se puede no usar parentesis,si tienes dos o más ya es obligatorio ponerlo.

console.log(leer("La Bella y la Bestia", "Gabrielle-Suzanne Barbot de Villeneuve")); 

