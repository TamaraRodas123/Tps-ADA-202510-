/*Ejercicio 4: ¿Es par o impar?
Consigna:
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un
número y determine si es par o impar. Muestra un mensaje explicativo indicando qué
significa cada caso.
*/

//Escribe un programa que le pida al usuario un numero y determine si es par o impar.
const prompt = require ('prompt-sync')();
let numero = parseFloat (prompt("Ingrese un número: "));

//Uso de practica el IF TERNARIO
//NOTA: el If ternario es: CONDISION ? 1RA EXPRESION (SI ES TRUE) : 2DA EXPRESEION (SI ES FALSE).
//Es necesario no olvodarse del ? y del : 
let mensaje = numero % 2 == 0 ? "El número ingresado es par." : "El número ingresado es impar.";
console.log(mensaje);