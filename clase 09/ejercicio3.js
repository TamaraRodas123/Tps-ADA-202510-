/*Ejercicio 3:
Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que
ingrese dos valores booleanos (true o false) y muestra el resultado de diversas
combinaciones lógicas*/

const prompt= require("prompt-sync")();

let condicion1= prompt("Ingrese true o false:  ");

let condicion2= prompt("Igrese true o false: ");



let combinacionand= condicion1 && condicion2;
let combinacionor= condicion1 || condicion2;
let combinacionnot= condicion1 != condicion2;

console.log(`El resultado de estas combinaciones con el operador AND son:  ${combinacionand}`);
console.log(`El resultado de estas combinaciones con el operador OR son: ${combinacionor}`);
console.log(`El resultado de estas combinaciones con el operador NOT son ${combinacionnot}`);