'use strict';
// Operador And (&&) revisa que se cumplan todas las variables, si una de ellas ya no se cumple, lo manda al else;

const usuario = true;
const puedePagar = false;

if (usuario && puedePagar) {   // Si una de las dos condiciones no se cumple, salta al else;
    console.log("Si puedes realizar tu compra");
} else if (!puedePagar && !usuario) {
    console.log("Lo siento, no puedes pagar")
} else if (!usuario) {
    console.log("Inicia sesión o Registrate");
} else if (!puedePagar) {
    console.log("Fondos insuficientes")
}
