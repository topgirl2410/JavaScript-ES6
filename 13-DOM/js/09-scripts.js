'use strict';

// Eliminar un elemento por si mismo con .remove()

const primerEnlace = document.querySelector('a');

primerEnlace.remove();

console.log(primerEnlace);

// Eliminar desde el padre

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);  // Para obtener la posición de cual queremos eliminar 

navegacion.removeChild(navegacion.children[2]);  // Elimina la segunda posición