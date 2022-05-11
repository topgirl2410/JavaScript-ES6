'use strict';

'use strict';

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }


    mostrarInformacion() {
        return `Cliente: ${this.nombre} tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }

}

// Herencia 

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo); // Heredar atributos del constructor usar super()
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() {  // Reescribir un método
        return `Bienvenido al cajero de empresas`
    }
}

const nombre = new Cliente('Marco', 400);
const empresa = new Empresa('María', 1000, 695179087, 'Estudiando JS');



/***************************************************************************************************** */
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
