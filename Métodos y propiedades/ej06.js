/*●	Ejercicio 6: Buscar la última posición de un elemento repetido
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última posición en la que aparece el número 7.
*/
const prompt=require('prompt-sync')();

let listaNumeros= [2,5,7,2,8,7];

console.log(`La ultima posición en la que aparece el numero 7 en la lista es: ${listaNumeros.lastIndexOf(7)}`);

