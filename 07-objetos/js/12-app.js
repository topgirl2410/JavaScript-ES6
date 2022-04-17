'use strict';
/********************************* Object Literal ************************************************** */

const producto = {
    nombre: "reproductor de musica",
    precio: 150,
    disponibilidad: true
}


/*********************************** Object Constructor ****************************************************************** */

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = true;
}

/********************************************************************************************** */
const producto3 = new Producto("monitor 24 pulgadas", 500);
console.log(producto3);

/*********************************************************************************************** */
const producto4 = new Producto('Cadena de musica', 150);
console.log(producto4);