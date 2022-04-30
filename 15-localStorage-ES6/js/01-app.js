'use strict';

// Local Storage

localStorage.setItem('nombre', 'Maria');

// Session Storage

sessionStorage.setItem('apellido', 'Pinto');

/********************************************************************************************* */
const producto = {
    nombre: "monitor 20 pulgadas",
    precio: 250
}

const productoString = JSON.stringify(producto);

localStorage.setItem('producto', productoString);

/********************************************************************************************** */

const dias = ["Lunes", "Martes", "Miercoles", "Jueves",
    "Viernes", "Sabado", "Domingo"];

const diasString = JSON.stringify(dias);

localStorage.setItem('semana', diasString);