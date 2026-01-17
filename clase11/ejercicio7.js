/*Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación matemática a
realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa
deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el
programa debe mostrar un mensaje de error. Usa switch para resolverlo.
*/
const prompt= require("prompt-sync")();

let numero1=parseFloat(prompt("Ingrese un numero: "));
let numero2=parseFloat(prompt("Ingrese otro numero: "));
let calculadora=prompt("Ingrese una operación matemática a realizar: ");


let suma= numero1+numero2;
let resta= numero1-numero2;
let división= numero1/numero2;
let multiplicacion= numero1*numero2;

switch(calculadora){
    case 'suma':
        console.log(`La suma de ambos numeros es ${suma}`);
        break;
    case 'resta':
        console.log(`La resta de ambos numeros es ${resta}`);
        break;
    case 'division':
        console.log(`La division de ambos numeros es ${división}`);
        break;
    case 'multiplicacion':
        console.log(`La multiplicacion de ambos numeros es ${multiplicacion}`);
        break;
    default:
        console.log(`La opción es invalida, intente otra vez.`);
}
