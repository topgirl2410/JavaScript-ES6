'use strict';

/******************************** Ejercicio Fizz Buzz ( 100 Números ) **************************************************************/

// 3, 6, 9, 12 (multiplos de 3) imprimimos Fizz

// 5, 10, 15, 20 (multiplos de 5) imprimimos Buzz

// 15, 30, 45, 60 imprimimos FizzBuzz!!


/*********************************************************** FizzBuzz ***********************************************************/

for (let i = 1; i < 100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FizzBuzz!!`)
    } else if (i % 3 === 0) {
        console.log(`${i} fizz`)
    } else if (i % 5 === 0) {
        console.log(`${i} buzz`)
    }
}

// Parece sencillo (pero no)