'use strict';

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carro = [
    { nombre: "Monitor 20 pulgadas", precio: 250 },
    { nombre: "Televisión", precio: 350 },
    { nombre: "Tablet", precio: 289 },
    { nombre: "Auriculares", precio: 89 },
    { nombre: "Teclado", precio: 75 },
    { nombre: "Smartphone", precio: 899 }
];

/*************************************************Array Method (.forEach) ******************************************************************/

meses.forEach((mes, i) => {
    console.log(i)
})