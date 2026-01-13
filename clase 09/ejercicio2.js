/*Ejercicio 2:
Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores
numéricos de tu elección. Pide al usuario que ingrese un número y verifica si está
dentro del rango definido por las constantes.
*/
const prompt= require("prompt-sync")();

const RANGO_MINIMO= 10;
const RANGO_MAXIMO= 20;

let numero= parseFloat(prompt("Ingrese un numero: "));

if (numero >= RANGO_MAXIMO  ){
    console.log(`El numero se encuenta fuera del rango`);
}
else if (numero <= RANGO_MINIMO){
    console.log(`El numero se encuenta fuera del rango`);
}
else{
    console.log(`El numero se encuentra dentro del rango.`);
}
