/*Ejercicio 6: Iguales a 10 pero menores de 1000
Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000.
let matriz=[
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4]
];
*/

const prompt=require("prompt-sync")();

let matriz=[
    [10,3,2,1,4,7],
    [5,5,10,100,4],
    [5,125,10,1020,4],
    [5,5,5097,100,4]
];
let contador=0;
for(let fila=0;fila<matriz.length;fila++){
    //recorre las filas
    for(let columnas=0; columnas<matriz[fila].length; columnas++){
    //recorre las columnas
    let valoractual= matriz[fila][columnas];
        if (valoractual>=10 && valoractual<1000){
            contador=contador+valoractual;
        }
    }
}
console.log(`La suma de los numeros mayores o iguales a 10 pero menoers que 100 son:${contador}`);