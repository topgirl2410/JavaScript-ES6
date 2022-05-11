'use strict';

class Cliente {
    #nombre;

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }
}


const usuario = new Cliente('Maria', 5000);
usuario.setNombre('Maria');
console.log(usuario.getNombre());