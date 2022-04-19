'use strict';

const meses = ["Enero", "Febrero", "Marzo", "Abril"];

// Spread Operator con arregle de indices ( Ejercicio: Agrega el mes de mayo al 5q, m de meses )

const meses1 = [...meses, "Mayo"]; // No modifica el arreglo original (buena practica programación funcional)


console.log(meses); //El Arreglo Original se matiene intacto
console.log(meses1);

/***************************************************** Ejercicio 2 (Spread Operator) **********************************************/

const carrito = [
    { nombre: "Monitor", precio: 180 },
    { nombre: "Television", precio: 400 },
    { nombre: "Reproductor de Música", precio: 250 },
    { nombre: "Altavoces", precio: 500 },
    { nombre: "Xiaomi 11T PRO", precio: 799 }
]

// Agrega un producto al arreglo de carrito 

const producto = { nombre: "Disco Duro", precio: 300 }

const carrito1 = [...carrito, producto];


console.log(carrito) // Arreglo Original
console.log(carrito1)   