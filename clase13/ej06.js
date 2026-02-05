/*●	Ejercicio 6: Convertir a minutos
Crea una función declarada llamada convertirHorasAMinutos que reciba un número de horas como parámetro y devuelva el total en minutos.

*/

const prompt=require("prompt-sync")();
let numeroHoras= parseFloat(prompt("Ingrese la cantidad de horas: "));
function convertirHorasAMinutos(numeroHoras){
     return numeroHoras*60;
}
let minutos= convertirHorasAMinutos(numeroHoras);

console.log(`La cantidad de minutos que contiene ${numeroHoras} horas es de ${minutos}  `)