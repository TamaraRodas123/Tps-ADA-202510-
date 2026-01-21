/*Ejercicio 1: While
Crea un programa que solicite al usuario ingresar números continuamente hasta
que el usuario ingrese un número negativo. Luego, imprime la suma de todos los
números ingresados.
*/
const prompt=require("prompt-sync")();

let numero=parseFloat(prompt("Ingrese un numero: "));
let sumaNumeros=0;

while(numero>0){
    sumaNumeros=sumaNumeros+numero
    numero=parseFloat(prompt("Ingrese un numero: "));
    
}
    console.log(`La suma total de los numero ingresados es de ${sumaNumeros}`);