'use strict';

const producto = "monitor 20 Pulgadas";


// Methods E Includes
console.log(producto);
console.log(producto.length); // te dice cuantos caracteres contiene, incluidos los espacios.
console.log(producto.indexOf('monitor'));  // Busca si la palabra se encuentra en algun lugar de nuestro string, en este caso en la posicion 0 (-1 es que no existe);
console.log(producto.includes('monitor')); // Verifica si esta nuestra palabra (true o false);