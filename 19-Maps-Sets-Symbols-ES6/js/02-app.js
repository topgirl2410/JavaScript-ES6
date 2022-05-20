'use strict';

/******************************************* WeakSet *********************************************************/

const ws = new WeakSet();

const cliente = {
    nombre: 'maria',
    edad: 39,
    estado: 'Soltera'
}

ws.add(cliente);


console.log(ws);