'use strict';

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();
})


setTimeout(() => {
    crearCliente();
}, 5000);

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

        DB = crmDB.result;
    }

    // Configuración de la base de datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir las columnas 
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });


        console.log('Columnas creadas');
    }

}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function () {
        console.log('Transaccion completada');
    }

    transaction.onerror = function () {
        console.log('Hubo un error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 695179087,
        nombre: 'Maria',
        email: 'leonor2410@hotmail.com'

    }

    //const peticion = objectStore.add(nuevoCliente); // agregar nuevo cliente
    const peticion = objectStore.put(nuevoCliente); // actualizar cliente

    console.log(peticion);
}