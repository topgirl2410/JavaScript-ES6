'use strict';
/**************************************** Creando un Prototype *************************************** */

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}


Cliente.prototype.tipoCliente = function() {
    console.log('Desde mi nuevo proto')
}

// Instanciarlo 

const usuario = new Cliente('mario', 3000);

usuario.tipoCliente();

console.log(usuario);
/*************************************************************************************************************** */

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const MLP = new Empresa('Programación con María', 6000, 'Cursos en Línea');


console.log(MLP);