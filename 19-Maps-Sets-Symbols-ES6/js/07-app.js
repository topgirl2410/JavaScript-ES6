'use strict';

/*********************************************** Generadores en JS ***********************************************/
/* Un generador es una función que retorna un iterador */

function *crearGenerador() {
    yield 1;
    yield 'Pepe';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

//console.log(iterador);
//console.log(iterador.next()); // Despierta el generador y despues lo vuelve a "dormir" 
//console.log(iterador.next().value);
//console.log(iterador.next());
//console.log(iterador.next().value);
//console.log(iterador.next());
//console.log(iterador);



// Generador para carrito de compras
function *generadorCarrito(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i]
    }
}


const carrito = ['producto1', 'producto2', 'producto3', 'producto4'];
const iterador1 = generadorCarrito(carrito);


console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());
console.log(iterador1.next());