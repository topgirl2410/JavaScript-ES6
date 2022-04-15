'use strict';

const autentificacion = true;

if (autentificacion === true) {
    console.log('Autentificación correcta, puedes acceder');
} else {
    console.log('Su nombre o contraseña no son correctos');
}


// Operador Ternario
console.log(autentificacion ? 'Autentificación correcta, puedes acceder' : 'Su nombre o contraseña no son correctos');