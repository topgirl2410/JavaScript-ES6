'use strict';
/** Parametros y Argumentos **/
function sumar(a, b) { // a y b se les conoce como parametros
    console.log(a + b)
}

/************************************************************************************ */
sumar(3, 2); // 2 y 3 se les conoce como argumentos
sumar(200, 500);
sumar(1200, 2400);
sumar(528, 796);

/*************************************** Función un poco más dinamica **************************************************/

function saludar(nombre, apellido) {
    console.log(`Hola soy ${nombre} ${apellido} y vivo en Galicia`);
}

saludar("María", "Pinto");
saludar();