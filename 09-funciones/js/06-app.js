'use strict';
/**************************************** Parametros por Default ************************************************* */

function saludar(nombre = "Desconocido", apellido = "") { // Prametro puesto por default; (Por si el usuario no pone nada)
    console.log(`Hola me llamo ${nombre} ${apellido} y vivo en Galicia.`);
}

saludar("maria", "pinto");


/******************************************************************************************************************* */