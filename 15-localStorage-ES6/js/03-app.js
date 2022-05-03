'use strict';

// Eliminar y Actualizar elementos de LocalStorage

localStorage.removeItem('nombre'); // Eliminar 


// Actualizar un registro

const diasArray = JSON.parse(localStorage.getItem('semana'));

//diasArray.push('nuevo dia');  // Agregando un nuevo item

localStorage.setItem('semana', JSON.stringify(diasArray));

console.log(diasArray);