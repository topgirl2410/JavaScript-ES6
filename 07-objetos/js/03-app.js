'use strict';

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 450,
    disponible: true
}

// Agregar Propiedades a un producto
producto.imagen = "imagen.jpg";


// Eliminar Propiedades de un producto
delete producto.disponible;

/************************************************************************************** */
console.log(producto);