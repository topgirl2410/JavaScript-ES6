'use strict';

/*window.addEventListener('scroll', () => {
    const scrollPX = window.scrollY;

    console.log(scrollPX); // Nos lo retorna en pixeles
})*/

/**************************************************************************************************/

window.addEventListener('scroll', () => {




    const premium = document.querySelector('.premium');

    const ubicacion = premium.getBoundingClientRect();


    //console.log(ubicacion);

    if (ubicacion.top < 784) {
        console.log('El elemento ya está visible');
    } else {
        console.log('Aún no has conseguido verlo, da más scroll');
    }
})