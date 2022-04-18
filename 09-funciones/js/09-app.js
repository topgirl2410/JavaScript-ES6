'use strict';
// Metodos de propiedad

const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id ${id}`)
    },
    siguiente: function () {
        console.log(`pasando a la siguiente canción...`)
    },
    crear: function () {
        console.log(`Creando tu playList`);
    },
    playlist: function (nombre) {
        console.log(`Reproduciendo tu playlist de ${nombre}`)
    },
    pausar: function () {

        console.log(`pausando reproductor...`)
    },

    parar: function () {
        console.log(`Parando el reproductor de música...`)
    },
    borrar: function (id) {
        console.log(`Borrando listado de canciones... ${id}`)
    }
}

/****************************************************************************************** */
reproductor.reproducir(30);
reproductor.siguiente();
reproductor.crear();
reproductor.playlist("Romeo Santos");
reproductor.playlist("Bachatas 2022");
reproductor.playlist("Marc Anthony");
reproductor.playlist("ash");
reproductor.pausar();
reproductor.parar();
reproductor.borrar(30);