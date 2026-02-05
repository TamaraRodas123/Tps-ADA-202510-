/*●	Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista)
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba una temperatura en grados 
Celsius y devuelva la temperatura en Fahrenheit.
Fórmula:(celcius*9/5)+32
*/
const prompt=require("prompt-sync")();

let temperatura=parseFloat(prompt("Ingrese la temperatura en grados celsius: "));

const convertirCelsiusAFahrenheit= function(temperatura){
    return (temperatura*9/5)+32;
}
console.log(`La temperatura expresada en grados farenheit es de: ${convertirCelsiusAFahrenheit(temperatura)}`)