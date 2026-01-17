/*Ejercicio 6: La tabla de multiplicar
Consigna:
Crea un programa que le pida al usuario un número y luego imprima su tabla de
multiplicar desde el 1 hasta el 10. Usa un ciclo for.*/

const prompt=require("prompt-sync")();

let numero= parseFloat(prompt("Ingrese un numero: "));

for (let numero2=1; numero2<=10; numero2++){
    let cuenta= numero*numero2;
    console.log(`${numero} x ${numero2}= ${cuenta}`);
}
