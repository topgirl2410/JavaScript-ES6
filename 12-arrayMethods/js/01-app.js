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

// Comprobar si un valor existe en un arreglo (Forma manual)

meses.forEach((mes) => {
    if (mes === "Enero") {
        console.log("Enero si existe");
    }
});

/******************************** Array Method (.includes)******************************************************************************************/

const resultado = meses.includes("Enero"); // Te devuelve un Boolean (true, false); Solo sirve con valores de un solo indice;
console.log(resultado);

/**************************************Array Method (.some)*****************************************************************************************/

// En un arreglo de objetos se utiliza .some;

const existe = carro.some(producto => producto.nombre === "Smartphone"); // Codigo más compacto y se lee mejor;

console.log(existe);

// En un arreglo tradicional con .some;

const existe1 = meses.some(mes => mes === "Febrero");

console.log(existe1);

/************************************************************ Fin ***************************************************************************************/

