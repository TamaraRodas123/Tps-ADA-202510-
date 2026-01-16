/*Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y
luego intercambiá sus valores. Muestra los valores antes y después del
intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable
temporal, aritmética o asignación simultánea), eres libre de elegir el que desees,
eso si, investiga sobre el que usarás.*/
const prompt= require("prompt-sync")();

let variableA= 5;
let variableB= 8;

console.log(`La variable a tiene el valor de : ${variableA}`);
console.log (`La variable b tiene el valor de: ${variableB}`);

variableA=8;
variableB=5;
console.log(`La variable a tiene el valor de : ${variableA}`);
console.log (`La variable b tiene el valor de: ${variableB}`);