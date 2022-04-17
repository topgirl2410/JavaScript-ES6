'use strict';

const producto = {
    nombre: "pantalla plana",
    precio: 250,
    disponible: true,
    informacion: {
        medidas: {
            peso: "1kg",
            medida: "1m"
        },
        fabricacion: {
            pais: "España"
        }
    }
}

// Destructuring de objetos anidados

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto; // (informacion: { fabricacion: { pais } } destructuring de objetos anidados);



console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);