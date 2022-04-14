'use strict';
// Convertir Strings en Números

const num1 = "10";
const num2 = "20";
const num3 = "30";
const num4 = 40;

/*********************************** Resultados ********************************************** */
console.log(Number.parseInt(num1)); // Analiza un argumento de cadena y devuelve un número entero.
console.log(Number.parseFloat(num2)); // Analiza un argumento(convirtiendolo primero en una cadena si es necesario) y devuelve un número de coma flotante;

// Revisar si un número es entero o no
console.log(Number.isInteger(num3)); // False
console.log(Number.isInteger(num4)); // True