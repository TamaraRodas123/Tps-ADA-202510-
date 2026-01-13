/*Ejercicio 1:
Declara dos variables numéricas numero1 y numero2. Pide al usuario que ingrese
dos números y muestra cuál es mayor o si son iguales.*/

const prompt= require ("prompt-sync")(); 

let numero1= parseFloat(prompt("Ingrese un numero: "));
let numero2= parseFloat(prompt("Ingrese otro numero: "));

if (numero1<numero2){
    console.log(`El numero ${numero2} es el mayor.`);
}
else if(numero1==numero2){
    console.log(`Los numeros son iguales.`);
}
else{
    console.log(`El numero ${numero1} es mayor.`);
}