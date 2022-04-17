'use strict';
// this. es una forma de referirse al objeto en si mismo 

const producto = {
    nombre: "pantalla plana",
    precio: 250,
    disponibilidad: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

const producto2 = {
    nombre: "monitor 20 pulgadas",
    precio: 300,
    disponibilidad: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`)
    }
}

producto.mostrarInfo();
producto2.mostrarInfo();