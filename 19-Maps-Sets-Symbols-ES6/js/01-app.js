'use strict';
/**
 * Sets:
 * Como en el caso de los arrays tradicionales, un Set de datos es una coleccion de 
 * valores unicos en JavaScript, sean estos de cualquier tipo: primitivas(String, Number, Boolean
 * , Symbols) u objetos (referencias);
 */

/***
 * Métodos básicos:
 * add: añade un elemento al Set;
 * delete: elimina un elemento del Set;
 * has: Revisa si un valor existe; (true, false);
 * forEach: permite aplicar una función sobre cada elemento del Set(segun su orden de inserción);
 */

// Para declarar una nueva instancia 
const carrito = new Set();


carrito.add('Camisa');
carrito.add('Pantalon');
carrito.add('Jersey');
carrito.add('Chaleco');


carrito.forEach((producto, index, pertenece) => {
    console.log(pertenece);
})

/*************************************************************************************************** */
console.log(carrito.has('Camisa')); // Revisa si un valor existe
console.log(carrito.size); // Tamaño 
//console.log(carrito.delete('Jersey'));  // Elimina
//console.log(carrito.clear());
console.log(carrito);



// Del siguiente arreglo, elimina los duplicados  (ejemplo de un Set)
const numeros = [1, 2, 3, 4, 5, 6, 1, 2];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);