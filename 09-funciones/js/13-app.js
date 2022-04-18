'use strict';
/**************************** Reproductor de música con Arrow Function *************************************************************** */

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre => console.log(`Creando una playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist de ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}
/************************************************************************************************************* */
reproductor.nuevaCancion = "Enter Sandman"; // Set
reproductor.obtenerCancion; // Get



reproductor.reproducir(15);
reproductor.reproducir(35);
reproductor.pausar();
reproductor.borrar(35);
reproductor.crearPlaylist("Bachata");
reproductor.crearPlaylist("Rock 80s");
reproductor.reproducirPlaylist("Rock 80s");

