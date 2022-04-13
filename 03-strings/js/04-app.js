'use strict';
// Cortar espacios en blanco

const producto = '       Monitor 20 pulgadas        ';


console.log(producto);
console.log(producto.length);

// Eliminar del inicio ....(solo del principio)
console.log(producto.trimStart());

// Eliminar del final...(solo del final)
console.log(producto.trimEnd())

// Elimina el espacio en blanco en varias direcciones
console.log(producto.trimStart().trimEnd());

console.log(producto.trim()); // Se usaba antiguamente












