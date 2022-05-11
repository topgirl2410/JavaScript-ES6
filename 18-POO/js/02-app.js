'use strict';

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }


    mostrarInformacion() {
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`;
    }

}

const nombre = new Cliente('Marco', 400);
console.log(nombre.mostrarInformacion());

console.log(nombre);

