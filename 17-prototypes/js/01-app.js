'use strict';
/******************************************** Object Literal ( no te permite crear objetos dinamicos ni reutilizables )********************************** */
const cliente = {
    nombre: 'Maria',
    apellido: 'Pinto',
    profesion: 'Programadora',
    sueldo: 500
}

console.log(cliente);

console.log(typeof cliente);

/****************************************** Object Constructor ( programacion orientada a objetos )********************************************/

function usuario(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
}


const maria = new usuario('Leonor', 1500);

console.log(maria)