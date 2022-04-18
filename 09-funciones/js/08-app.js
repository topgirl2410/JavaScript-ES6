'use strict';

function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2, 8);

console.log(resultado);

/**************************************** Ejemplo más avanzado ************************************************** */

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularIva(total) {
    return total * 1.15; // 15% de IVA
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(750);

const totalPagar = calcularIva(total);


console.log(total);
console.log(`El total a pagar es de ${totalPagar}`);