/*Ejercicio 3: Encuentra el primer número mayor a 10
Tienes una lista de números [5, 8, 12, 20, 3]. Queremos encontrar el primer número de la
lista que sea mayor a 10. Recuerda que el resultado debe ser únicamente el primer número
que cumpla esta condición, no todos los números que lo hagan.
● find(): Para localizar el primer elemento que satisface un criterio específico*/
const prompt=require('prompt-sync')();

let listaNumeros=[5,8,12,20,3];

function primerMayorDiez(numero){
    return numero>10;
}

let mayorDiez= listaNumeros.find(numero=> primerMayorDiez(numero) );

console.log(mayorDiez);
