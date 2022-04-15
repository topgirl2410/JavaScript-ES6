'use strict';

// Objeto dentro de objeto

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

console.log(producto);
console.log(producto.informacion.fabricacion.pais);