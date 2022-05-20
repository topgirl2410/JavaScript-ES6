'use strict';

/************************************************ WeakMaps (son los menos utilizados) ************************************************* */
const producto = {
    idProducto: 10
}

const wm = new WeakMap();

wm.set(producto, 'Monitor');

console.log(wm.has(producto));
console.log(wm.get(producto));