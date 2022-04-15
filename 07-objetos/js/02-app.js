'use strict';

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 450,
    disponible: true
}

// Como acceder a los valores de un objeto (la más comun en JavaScript es está)
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra manera de hacerlo 
console.log(producto['nombre']);
console.log(producto['precio']);
console.log(producto['disponible']);