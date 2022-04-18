'use strict';

/******************************************** Break *******************************************************/
/*for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("Este es el 5");
        break; // Se detiene la ejecución del For Loop (Rompe, detiene la ejecucion)
    }

    console.log(`Número: ${i}`);
}*/
/************************************************ Continue **************************************************/
/*for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log("Cinco");
        continue; // Continua con el siguiente número (en este caso con el seis)(rompe el ciclo, pero continua)
    }

    console.log(`Numero: ${i}`);
}*/

/**************************************************** Descuento en la tienda *********************************************************/

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 300 },
    { nombre: "Laptop", precio: 400 },
    { nombre: "Altavoces", precio: 100 },
    { nombre: "Portatil", precio: 1200, descuento: true },
    { nombre: "Teclado", precio: 151 },
    { nombre: "Smarphone", precio: 1400 },
]

for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene un descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}