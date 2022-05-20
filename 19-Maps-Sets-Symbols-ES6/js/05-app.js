'use strict';

/************************************************************ Symbols (ningun Symbol es igual)********************************************************/

const sym = Symbol('1');
const sym2 = Symbol('1');

if (sym === sym2) {
    console.log('Son iguales')
} else {
    console.log('Son diferentes')
}

/****************************************************************************************************************************************************/

const nombre = Symbol();
const apellido = Symbol();


const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Maria';
persona[apellido] = 'Pinto';
persona.tipoCliente = 'Premium';
persona.saldo = 400;

console.log(persona)

// Definir una descripción del Symbol()
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};


cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(nombreCliente);
console.log(cliente[nombreCliente]); // Accedemos a Pedro