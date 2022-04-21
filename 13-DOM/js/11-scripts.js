'use strict';

const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Hacer que se muestre o se oculte el footer mediante un evento

function mostrarOcultarFooter() {

    if (footer.classList.contains('activo')) {  // Contains verifica si un elemento contiene una clase o no

        footer.classList.remove('activo');
    } else {

        footer.classList.add('activo');
    }

    console.log(footer.classList);
}

btnFlotante.addEventListener('click', mostrarOcultarFooter);

