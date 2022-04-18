'use strict';
/**************************** Reproductor de música con Arrow Function *************************************************************** */

const reproductor = {
    reproducir: (id) => {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: () => {
        console.log(`Pausando...`);
    },
    borrar: (id) => {
        console.log(`Borrando canción... ${id}`);
    },
    crearPlaylist: (nombre) => {
        console.log(`Creando una playlist de ${nombre}`);
    },
    reproducirPlaylist: (nombre) => {
        console.log(`Reproduciendo la playlist de ${nombre}`);
    }
}
/************************************************************************************************************* */

reproductor.reproducir(15);
reproductor.reproducir(35);
reproductor.pausar();
reproductor.borrar(35);
reproductor.crearPlaylist("Bachata");
reproductor.crearPlaylist("Rock 80s");
reproductor.reproducirPlaylist("Rock 80s");
