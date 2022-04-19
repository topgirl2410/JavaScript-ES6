'use strict';

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
const meses1 = ["Junio", "Julio", "Agosto", "Septiempre"];
const meses2 = ["Octubre", "Noviembre", "Diciembre"];
/**************************************** Array Method ************************************************************************ */

const todosMeses = meses.concat(meses);

console.log(todosMeses);

// Spread Operator

const resultado = [...meses, ...meses1, ...meses2];

console.log(resultado);

