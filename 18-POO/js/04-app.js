'use strict';

class Cliente {

    #nombre;  // Campo privado (solo se puede modificar o acceder a los valores desde la clase)

    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }
}


const usuario = new Cliente('Marco', 2000);
console.log(usuario.mostrarInformacion());
