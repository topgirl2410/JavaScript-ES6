import { nombre, ahorro, mostrarInformacion, tieneSald, Cliente } from './cliente.js';

console.log(nombre);
console.log(ahorro);
console.log(mostrarInformacion(nombre, ahorro));


tieneSald(ahorro); // Funcion

const cliente = new Cliente(nombre, ahorro);  // Class


console.log(cliente.mostrarInformacion());