'use strict';

/**
 * A diferencia de otros objetos, el objeto Math no tiene constructor.
 * El objeto Math es estático.
 * Todos los metodos y propiedades se pueden usar sin crear primero un objeto matemático.
 * 
 * La sintaxis de cualquier propiedad matemática es: Math.property;
 * 
 * JavaScript proporciona 8 constantes matemáticas a las que se puede acceder 
 * como propiedades matemáticas:
 * 
 * Math.E (Devuelve el número de Euler);
 * Math.PI (retorna el número PI);
 * Math.SQRT2 (Devuelve la raiz cuadrad de 2);
 * Math.SQRT1_2 (Devuelve la raiz cuadrada de  1/2);
 * Math.LN2 (Devuelve el logaritmo natural de 2);
 * Math.LN10 (Devuelve el logaritmo natural de 10);
 * Math.LOG2E (Devuelve el logaritmo en base 2 de E);
 * Math.LOG10E (Devuelve el logaritmo en base 10 de E);
 */

/**
 * Numeros enteros: 
 * Math.round(x) Devuelve x redondeado hacia abajo;
 * Math.ceil(x) Devuuelve x redondeado hacia arriba;
 * Math.floor(x) Devuelve x redondeado a su entero más cercano;
 * Math.trunc(x) Devuelve la parte entera de x (nuevo en ES6);
 * Math.sign(x) Devuelve si x es negativo, nulo o positivo;
 */

/**
 * Ejemplo Math.round():
 * 
 * Math.round(4.6);
 * Resultado : 5;
 * 
 * Math.round(4.5);
 * Resultado : 5;
 * 
 * Math.round(4.4);
 * Resultado : 4;
 * 
 */


/**
 * Ejemplos Math.ceil():
 * 
 * Math.ceil(4.9);
 * Math.ceil(4.7);
 * Math.ceil(4.4);
 * Math.ceil(4.2);
 * Math.ceil(-4.2);
 * 
 * Resultado : 5;
 */


/**
 * Ejemplos de Math.floor():
 * 
 * Math.floor(4.9);
 * Math.floor(4.7);
 * Math.floor(4.4);
 * Math.floor(4.2);
 * Math.floor(-4.2);
 * 
 * 
 * Resultado: 4;
 */

/**
 * Ejemplos de Math.trunc():
 * 
 * Math.trunc(4.9);
 * Math.trunc(4.7);
 * Math.trunc(4.4);
 * Math.trunc(4.2);
 * Math.trunc(-4.2);
 * 
 * 
 * Resultado: 4;
 */


/**
 * Ejemplos de Math.sign():
 * 
 * Math.sign(-4);
 * Math.sign(0);
 * Math.sign(4);
 * 
 * 
 * Resultado: 1;
 */

/**
 * Math.pow() Devuelve el valor de X a la potencia de Y;
 * 
 * Math.pow(8, 2);
 * 
 * Resultado: 64;
 * 
 */


/**
 * Math.sqrt(x) devuelve la raiz cuadrada de X:
 * 
 * Math.sqrt(64);
 * 
 * Resultado: 8;
 */

/**
 * Math.abs(x) devuelve el valor absoluto (positivo) de X:
 * 
 * Math.abs(-4.7);
 * 
 * Resultado: 4.7;
 */


/**
 * Math.min() and Math.max() se puede utilizar para encontrar el valor más bajo
 * o más alto de una lista de argumentos:
 * 
 * Ejemplo Math.min():
 * 
 * Math.min(0, 150, 30, 20, -8, -200);
 * 
 * Resultado: -200;
 * 
 * Ejemplo Math.max(0, 150, 30, 20, -8, -200);
 * 
 * 
 * Resultado: 150;
 */

/**
 * Math.random(x) devuelve un número aleatorio entre 0 (inclusive) y 1 (exclusivo);
 * 
 * Math.random();
 * 
 * Resultado: número aleatorio;
 */

let resultado;

// PI 
resultado = Math.PI;

// Redondea hacia abajo
resultado = Math.round(2.8);
resultado = Math.round(2.2);

// Redondea hacia arriba
resultado = Math.ceil(2.1);

// Redondea hacia abajo si o si 
resultado = Math.floor(2.2);


// Raiz cuadrada 
resultado = Math.sqrt(144);


// Valor absoluto
resultado = Math.abs(-500);

// Potencia 
resultado = Math.pow(8, 3);


// Minimo 
resultado = Math.min(5, 10, 12, 9, 3);

// Maximo
resultado = Math.max(5, 10, 12, 9, 3);

// Aleatorio
resultado = Math.random() * 20;

// Aleatorio dentro de un rango
resultado = Math.floor(Math.random() * 30);



console.log(resultado);