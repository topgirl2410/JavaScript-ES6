'use strict';

const dinero = 200;
const tarjeta = false;
const cheque = false;
const gastos = 550;




/******************************* If, Else IF, Else ************************************************* */
if (dinero >= gastos) {

    console.log("Pago aceptado");

} else if (tarjeta) {

    console.log("Si, se acepta el pago con tu tarjeta")

} else if (cheque) {

    console.log("Cheque aceptado")

} else {
    console.log("Pago rechazado, contacte con su banco")
}