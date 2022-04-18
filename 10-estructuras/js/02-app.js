'use strict';

const puntos = 705;
const puntuacion = 1000;
const num = 1000;
const num2 = 3000;


/*****************************************************************************************/

if (puntos != 700) {  // (!= diferente a...) no es un operador estricto;
    console.log("si, es diferente");
} else {
    console.log("es igual");
}
/*****************************************************************************************/

if (puntuacion == "1000") {   // (== igual a... ) no es un operador estricto;
    console.log("si,es igual");
} else {
    console.log("es diferente");
}

/******************************************************************************************/

if (num === "1000") {  // ( === es un comparador estricto )
    console.log("si es exacto")
} else {
    console.log("es diferente...")
}
/******************************************************************************************/

if (num2 !== "1000") {   // ( !== es un comparador estricto )
    console.log("Si, es diferente");
} else {
    console.log("No, no es igual");
}