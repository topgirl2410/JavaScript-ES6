'use strict';

// Los Maps (son iterables) son listas ordenadas en llave y valor (como un objeto con una sola propiedad, es decir una llave y un valor);

const cliente = new Map();

cliente.set('nombre', 'maria');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);


console.log(cliente.get('nombre')); // Traer un valor del objeto
cliente.delete('saldo'); // Borrar una llave
cliente.clear(); // Borra por completo
console.log(cliente);

// Iniciar un Map con valores
const paciente = new Map([['nombre', 'paciente'], ['habitacion', 'no definido']]);

paciente.set('dr', 'dr Tarrio');  // Agregar valores despues de iniciarlizar un Map();
paciente.set('nombre', 'pepito');  // Reasigna el valor

paciente.forEach(datos => {
    console.log(datos);
});


console.log(paciente);

