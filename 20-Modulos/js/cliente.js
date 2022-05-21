export const nombre = 'maria';
export const ahorro = 200;

/*************************************************** Importar Funciones ************************************************************************ */
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSald(ahorro) {
    if (ahorro > 0) {
        console.log('Si tiene saldo')
    } else {
        console.log('Te has quedado sin saldo, recarga')
    }
}

/******************************************************* Importar Clases ************************************************************************ */
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${nombre} - Ahorro: ${ahorro}`
    }
}

/************************************************************ Export Default (solo se puede tener un export default)**********************************************************************/
export default function nuevaFuncion() {
    console.log('Este es el export por default')
}

