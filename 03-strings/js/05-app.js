'use strict';

const producto = "Pantalla 20 pulgadas";


console.log(producto);

// Reemplazar el texto de una cadena...
console.log(producto.replace("pulgadas", '"'));
console.log(producto.replace("Pantalla", "Pantalla plana de utlima generación"));

// Cortar una parte de una cadena de texto...
console.log(producto.slice(0, 15));

// Alternativa a Slice
console.log(producto.substring(0, 10)); // Se usaba antiguamente...

const usuario = "Maria";

// Más maneras de cortar texto...
console.log(usuario);
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));