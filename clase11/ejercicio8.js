/*Ejercicio 8: Encuentra los múltiplos de un número
Consigna:
Escribe un programa que le pida al usuario un número entero positivo y muestre todos los
múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.
*/
const prompt= require("prompt-sync")();

let numero=parseFloat(prompt("Ingrese un numero: "));

for (let multiplos=1;multiplos<=100;multiplos++){
    let tabla= multiplos*numero;
    console.log(`5 x ${multiplos} = ${tabla}`);
}