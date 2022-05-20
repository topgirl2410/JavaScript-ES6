'use strict';

/**************** WeakSet (no son iterables, solo puede almacenar objetos y no tiene .size(pregunta importante en entrevistas))*********************************************************/

const ws = new WeakSet();

const cliente = {
    nombre: 'maria',
    edad: 39,
    estado: 'Soltera'
}

ws.add(cliente);


//console.log(ws);
//console.log(ws.has(cliente));
//console.log(ws.delete(cliente));