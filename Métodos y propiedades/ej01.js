/*●	Ejercicio 1: Añadir personajes a una lista
Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los personajes "Mario" y "Luigi" al final de la lista 
utilizando el método adecuado. Luego, muestra el array actualizado.
*/
const prompt=require('prompt-sync')();

let videoJuegos=["Link","Zelda"];

console.log("Listas desactualizada: ");
console.log(videoJuegos);

videoJuegos.push("Mario", "Luigi");

console.log("Lista actualizada:");
console.log(videoJuegos);
