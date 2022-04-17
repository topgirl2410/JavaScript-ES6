'use strict';

const producto = {
    nombre: "Play 5",
    precio: 550,
    disponible: true
}

// Destructuring de objetos

const { nombre } = producto;


console.log(producto);

// Destructuring de Arrays (puedes nombrarlos como quieras a diferencia de los objetos)

const numeros = [1, 5, 7, 6, 12, 17, 22];

const [primero, segundo, ...tercero] = numeros;

console.log(tercero);