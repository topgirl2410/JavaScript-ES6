'use strict';

/** SWITCH  CASE *************************************************************************************
 * La extructura de control "Switch" de JavaScript es utilizada para tomar decisiones en
 * función de distintos estados o valores de una variable. Las estructuras de control son la
 * manera con la que se puede dominar el flujo de los programas, para hacer cosas distintas
 * en funcion de los estados de las variables.
 ************************************************************************************************/

/************************************************************************************************
 * La declaración "swicth" evalúa una expresion, comparando el valor de esa expresion
 * con una instancia "case", y ejecuta declaraciones asociadas a ese "case", así como las
 * declaraciones en los "case" que siguen
 **************************************************************************************************/

const metodoDePago = 'efectivo';

switch (metodoDePago) {
    case 'efectivo':
        pagar();
        break;

    case 'cheque':
        console.log(`Pagaste con ${metodoDePago}`);
        break;


    case 'tarjeta':
        console.log(`Pagaste con ${metodoDePago}`);
        break;

    default:
        console.log("Aún no has seleccionados el método de pago o tu método de pago no esta soportado"); // Siempre tiene que haber uno por default;
}

/***********************************************************************************************************************************************************/

function pagar() {
    console.log("Pagando la cuenta...")
}

pagar();