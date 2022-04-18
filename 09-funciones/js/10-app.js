'use strict';

/********************************************** => Arrow Function => *******************************************/
/***************************************************************************************************************/
/***************************************************************************************************************
 * Un Arrow Function es una alternativa compacta a una expresión de funcion tradicional, pero 
 * es limitada y no se puede utilizar en todas las situaciones.
 * 
 * Diferencias y limitaciones: 
 * - No tiene sus propios enlaces a ths o super y no se debe usar como métodos.
 * - No tiene argumentos o palabras clave new.target.
 * - No apta para los métodos call, apply y bind, que generalmente se basan en establecer un
 * ámbito o enlace.
 * - No se puede utilizar como constructor.
 * - No se puede utilizar yield dentro de su cuerpo.
 * 
 ******************************************** Funcion Normal **********************************************************************/
// 
const aprendiendo = function () {
    console.log("Aprendiendo JavaScript Avanzado")
}


aprendiendo();
/********************************************** Arrow Function *********************************************************************/

const colegio = () => "Aprendiendo con la mejor maestra del mundo";

colegio();
console.log(colegio());