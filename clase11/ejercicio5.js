/*Ejercicio 5: Encuentra los números pares entre dos valores
Consigna:
Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El programa
debe mostrar todos los números pares que se encuentran entre esos dos valores,
incluyendo los límites si son pares. Utiliza un ciclo for para recorrer los números entre el
inicio y el fin. Si el número inicial es mayor que el final, el programa debe mostrar un
mensaje indicando que los valores son inválidos.
*/
const prompt= require("prompt-sync")();

let inicio= parseFloat(prompt("Ingrese el numero de inicio: "));
let fin= parseFloat(prompt("Ingrese el numero de fin: "));
if (fin>inicio){
    for (let contador=inicio; contador<=fin; contador++){
    if(contador%2==0){
        console.log(`${contador}`);
    }
    
}
} 
else {
    console.log(`Error!! El numero inicial es mas grande que el final, ejecute el programa nuevamente`);
}
