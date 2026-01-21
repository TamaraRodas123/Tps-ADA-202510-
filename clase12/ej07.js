/*Ejercicio 7: Matriz 5x5
Declara una variable que contenga una matriz de 5x5 llena de puros números
enteros y positivos. Luego, escribe un algoritmo para sumar todos los números en
la matriz.
*/
const prompt= require("prompt-sync")();

let matriz=[
    [1,1,1,1,1],
    [2,2,2,2,2],
    [3,3,3,3,3],
    [4,4,4,4,4],
    [5,5,5,5,5]
]

let sumadorNumeros=0;

for(let filas=0; filas<matriz.length;filas++){
    for(let columnas=0; columnas<matriz[filas].length;columnas++){
        let valoractual=matriz[filas][columnas];
        sumadorNumeros=sumadorNumeros+valoractual;
    }
}
console.log(`La suma de todos los numeros de la matriz es: ${sumadorNumeros}`)



