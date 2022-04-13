'use strict';
// Maneras de concatenar Strings

 const producto = "pantalla plana Xl ";
 const precio = "30 Euros";




 console.log(producto.concat(precio));
 console.log(producto.concat('En descuento'));


 console.log(producto + "con un precio de: " + precio);
 console.log("El producto " + producto + "tiene un precio de: " + precio);

 console.log(`El producto ${producto} tiene un precio de $ ${precio}`); // Manera más profesional de hacerlo.