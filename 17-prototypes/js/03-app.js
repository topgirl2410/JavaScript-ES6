'use strict';
/**************************************** Creando un Prototype *************************************** */

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function () {
    let tipo;

    if (this.saldo >= 10000) {
        tipo = 'Gold';
    } else if (this.saldo >= 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}


Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}
// Instanciarlo 

const usuario = new Cliente('Maria', 5000);

console.log(usuario.tipoCliente());

console.log(usuario.nombreClienteSaldo());

usuario.retiraSaldo(1000);

console.log(usuario.nombreClienteSaldo());

console.log(usuario)