'use strict'; // Uso estricto de JavaScript

'use strict';

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 450,
    disponible: true
}



// Objects Methods
Object.seal(producto); // Sellar un objeto (no se puede agregar, ni eliminar, pero si modificar los ya existentes);

producto.disponible = false; // Si se puede modificar las llaves ya existentes;
// producto.imagen = "imagen.jpg"  (no se puede agregar);
// delete producto.precio; (no se pueden eliminar);

/***************************************************************************** */
console.log(producto);
console.log(Object.isSealed(producto)); // Ver si el objeto esta sellado;