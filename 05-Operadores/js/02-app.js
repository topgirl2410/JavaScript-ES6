'use strict';

const num1 = 20; // Number
const num2 = "20"; // String
const num3 = 30; // Number

// Revisar si 2 números son iguales;

console.log(num1 == num3); // False;
console.log(num1 == num2); // True;
/*************************************************************************************** */

// Comparador estricto 
console.log(num1 === num2); // False;
console.log(num1 === parseInt(num2)); // Convertimos el String en Number y el resultado es True; 
console.log(typeof num1); // Number (typeOf te dice que tipo de dato contiene);
console.log(typeof num2); // String (typeOf te dice que tipo de dato contiene);


// Diferente
const pass1 = "admin";
const pass2 = "Admin";

/************************************************************************************ */
console.log(pass1 != pass2); // True;
console.log(num1 != num2); // False;
console.log(num1 !== parseInt(num2)); // False; (Convertimos el string en number);