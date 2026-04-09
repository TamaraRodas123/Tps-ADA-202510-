/*●	Ejercicio 4: Convertir una lista de palabras en una frase
Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las palabras en una sola frase, separadas 
por un espacio, y muestra el resultado.
*/
const prompt=require('prompt-sync')();

let listaPalabras=['JavaScript', 'es', 'divertido'];
console.log(listaPalabras);

let listaNueva=listaPalabras.join('  ');

console.log(listaNueva);