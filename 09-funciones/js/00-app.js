'use strict';

/** ¿ Que es una Función?
 * En terminos generales, una función es un "subprograma" que puede ser llamado
 * por codigo externo (o interno en caso de recursión) a la función. Al igual
 * que el programa en si mismo, una función se compone de una secuencia de declaraciones
 * , que conforman el llamado cuerpo de la función. Se pueden pasar los valores a una
 * función, y la función puede devolver un valor.
 * 
 * En JavaScript, las funciones son objetos de primera clase, es decir, son objetos y
 * se pueden manipular y transmitir al igual que cualquier otro objeto. Concretamente
 * son Objetos Function.
 */

/**
 * Toda función en JavaScript es un objeto function. 
 * Las funciones no son lo mismo que los procedimientos. Una función siempre devuelve
 * un valor, pero un procedimiento, puede o no puede devolver un valor.
 * 
 * Para devolver un valor especifico distinto al predeterminado, una función debe tener
 * una sentencia return, que especifique el valor a devolver. Una función sin una instruccion
 * return devolvera el valor predeterminado. En el caso de un costructor llamado con la palabra
 * clave new, el valor predeterminado es el valor de su parametro. Para el resto de funciones, el
 * valor predeterminado es undefined.
 * 
 * 
 * Los parametros en la llamada a una función son los argumentos de la función. Los argumentos
 * pasan a las funciones por valor. Si la función cambia el valor de un argumento, este cambio
 * no se refleja globalmente ni en la llamada a la función. Sin embargo, las referencias a objetos
 * tambien son valores, y son especiales: si la función cambia las propiedades del objeto referenciado
 * ese cambio es visible fuera de la función, tal y como muestro en el siguiente ejemplo:
 */

/* Declarando la función 'myFunc' */
function myFunc(elobjeto) {
    elobjeto.marca = "Toyota";
}

/*
 * Declarando la variable 'mycar';
 * Se crea e inicializa el nuevo objeto;
 * para hacer referencia a él mediante 'mycar'
 */
var mycar = {
    marca: "Honda",
    modelo: "Accord",
    año: 1998
};

/* Mostrando 'Honda' */
window.alert(mycar.marca);

/* Paso por referencia del objeto 'mycar' a la función 'myFunc'*/
myFunc(mycar);

/*
 * Muestra 'Toyota' como valor de la propiedad 'marca'
 * del objeto, que ha sido cambiado por la función.
 */
window.alert(mycar.marca)

/**
 * La palabra clave this no hace referencia a la función que esta ejecutandose actualmente,
 * por lo que debes referirte a los objetos function por nombre, incluso dentro del cuepor de
 * la función.
 */