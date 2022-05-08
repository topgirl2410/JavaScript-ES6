'use strict';

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo
}

const maria = new Cliente('Leonor', 500);

/******************************************************************************************** */

function formatearCliente(cliente) {

    const { nombre, saldo } = cliente;

    return `El cliente ${nombre} tiene un saldo disponible de ${saldo}`;
}

console.log(formatearCliente(maria));

/********************************************************************************************** */

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const MLP = new Empresa('Programando con Maria', 2000, 'Tienda de muebles');

