'use strict';

/*Una variable es una especia de "contenedor" al que le ponemos un nombre 
y que nos sirve para guardar algun valor. Este valor puede ser cualquier tipo 
de dato que soporte el lenguaje de programación(numeros, strings, booleans,
 arrays, objetos) 
 Dependiendo del lenguaje de programación la forma de declarar una variable varia
 en el caso de javaScript tenemos que primero usar una de las tres palabras reservadas
 seguido del nombre de la variable y luego utiñizamos el signo "igual" para asignarle
 un valor.*/

// Declarando varios tipos de variables 
let name = "Pedro";  // String
let students = 40;  // Number
let countries = ["Venezuela", "Colombia", "España"]; // Array
let grades = {Carlos : "B", Paula: "A"}; // Object
let success = true;  // Boolean
let nothing = null;  // Null

// Si quiero ver que valor está contenido en una variable puedo utilizar console.log(muestra el resultado por la consola);

console.log(name);
console.log(students);
console.log(countries);
console.log(grades);
console.log(success);
console.log(nothing);

/* Una vez la variable es declarada, la misma puede ser consultada o modificada mas adelante.
Supongamos que declaro una variable con un mensaje secreto que posteriormente quiero cambiar.*/

// Declarando nuestra variable secretMessage
let secretMessage = "zapatillas";

// Reasignando variables secretMessage
secretMessage = "tacones";

// Mirando el resultado (deberia salir "tacones")
console.log(secretMessage);

