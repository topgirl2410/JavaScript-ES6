'use strict';

const producto = {
    nombre: "Monitor 30 pulgadas",
    precio: 400,
    disponible: true
}

const medidas = {
    peso: "2kg",
    medida: "1.5m"
}

console.log(producto, medidas)
    // Como unir dos objetos

const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator
const resultado2 = {...producto, ...medidas }


console.log(resultado);
console.log(resultado2);