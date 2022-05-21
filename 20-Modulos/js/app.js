import alias, {
    nombre,
    ahorro,
    mostrarInformacion,
    tieneSald,
    Cliente
} from './cliente.js';


alias();

console.log(nombre);
console.log(ahorro);
console.log(mostrarInformacion(nombre, ahorro));

tieneSald(ahorro); // Funcion

const cliente = new Cliente(nombre, ahorro);  // Class


console.log(cliente.mostrarInformacion());

// Importar empresa 
import { Empresa } from './empresa.js';

const empresa = new Empresa('Aprende con Maria', 510, 'JavaScript');

console.log(empresa.mostrarInformacion());

