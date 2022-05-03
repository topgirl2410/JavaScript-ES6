'use strict';

// Obtener datos de LocalStorage

const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

const diasJSON = localStorage.getItem('semana');
console.log(JSON.parse(diasJSON));