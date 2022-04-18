'use strict';
iniciarApp();

function iniciarApp() {
    console.log("Iniciando app....")

    segundaFuncion();

}
/********************************************************************************************** */

function segundaFuncion() {
    console.log("desde la segunda función");
    usuarioAutentificado("María");
}

/******************************************************************************************* */

function usuarioAutentificado(usuario) {
    console.log("Autentificando usuario...comprobando...");
    console.log(`Usuario Autentificado correctamente: ${usuario}`);
}