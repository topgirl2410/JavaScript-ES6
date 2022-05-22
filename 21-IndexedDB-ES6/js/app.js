'use strict';

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})


function crmDB() {
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay algun error 
    crmDB.onerror = function () {
        console.log('Hubo un error a la hora de crear la BD');
    }

    // Si se creo bien 
    crmDB.onsuccess = function () {
        console.log('BD creada correctamente');
    }

    // Configuración de la base de datos
    crmDB.onupgradeneeded = function () {
        console.log('Este método solo se ejecuta una vez');
    }

}