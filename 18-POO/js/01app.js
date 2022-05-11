'use strict';
/************************************* Class  Declaration ***************************************/

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const nombre = new Cliente('Marco', 400);
console.log(nombre);

/*************************************** Class Expresion (apenas se utiliza) ******************************************** */

const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const nombre2 = new Cliente2('Maria', 800);
console.log(nombre2);