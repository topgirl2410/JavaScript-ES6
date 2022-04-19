'use strict';

const casa = ["tender", "lavar", "fregar", "cocinar", "planchar"];

/*************************************** For of ( Itera sobre arreglos )********************************************** */

//for(let tarea of casa) {
// console.log(tarea);
//}

/****************************************** For In ( Itera sobre objetos )***************************************************** */

for (let tarea in casa) {
    console.log(tarea);
}
/****************************************************************************************************************** */

const coche = {
    modelo: "Alpha Romeo",
    year: 2015,
    motor: "6.0"
}

/**************************************************************For In **************************************** */

for (let propiedad in coche) {
    console.log(`${coche[propiedad]}`)
}


/****************************************************************For Of ************************************* */

for (let [llave, valor] of Object.entries(coche)) {
    console.log(llave ,valor);
}