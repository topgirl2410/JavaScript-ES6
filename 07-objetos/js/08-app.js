'use strict';

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 450,
    disponible: true
}

// Objects Methods
Object.freeze(producto); // Congela el objeto para no poder modificarlo

//producto.disponible = false; (no se puede modificar);
//producto.imagen = "imagen.jpg"; (no se puede agregar);
//delete producto.precio; (no se puede eliminar);


console.log(producto);

console.log(Object.isFrozen(producto)); // saber si un obajeto esta congelado