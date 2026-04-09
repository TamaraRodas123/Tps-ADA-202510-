/*●	Ejercicio 5: Buscar la posición de un elemento
Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y muestra el índice del color "Azul" en la lista.
*/
const prompt=require('prompt-sync')();

let listaColores= ["Rojo","Verde","Azul","Amarillo"];

console.log(`El índice del color Azul es: ${listaColores.indexOf('Azul')}`);