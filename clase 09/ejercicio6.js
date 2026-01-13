//! Pide al usuario que ingrese su edad y verifica si es mayor o menor de edad. Muestra un mensaje personalizado según el caso.

const prompt = require('prompt-sync')();

let edad = parseInt(prompt("Ingrese su edad: "));

//* Uso del if terniario
console.log(edad >= 18 ? 'Usted es mayor de edad' : "Usted es menor de edad.");