'use strict';
const producto = {
    nombre: "pantalla plana",
    precio: 250,
    disponible: true
}

// const nombre = producto.nombre; // Forma anterior de hacerlo

// console.log(nombre);

/************************************ Destructuring ************************************************ */
const { nombre, precio, disponible } = producto;

/************************************************************************************* */
console.log(nombre);
console.log(precio);
console.log(disponible);