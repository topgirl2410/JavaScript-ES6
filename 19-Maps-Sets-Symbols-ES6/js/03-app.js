'use strict';

// Los Maps son listas ordenadas en llave y valor (como un objeto con una sola propiedad, es decir una llave y un valor);

const cliente = new Map();

cliente.set('nombre', 'maria');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);


console.log(cliente.get('nombre')); // Traer un valor del objeto
cliente.delete('saldo'); // Borrar una llave
cliente.clear(); // Borra por completo
console.log(cliente);