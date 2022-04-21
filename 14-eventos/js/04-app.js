'use strict';

const formulario = document.querySelector('#formulario')

/**************************************** Eventos que suceden en un formulario ******************************************************************/

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();  // Detiene la acción del navegador por defecto

    console.log('buscando...');
    console.log(e.target.method);
    console.log(e.target.action);
}


