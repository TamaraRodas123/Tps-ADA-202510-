/*●	Ejercicio 2: Calcular promedio de calificaciones
Solicita al usuario cinco calificaciones y usa una función flecha para calcular el promedio.
*/

/*  x=calificaciones   y=cantidad denotas  */

const prompt=require('prompt-sync')();
let sumaCalificaficaciones=0
for (let i=0; i<5;i++){
    let calificaciones=parseFloat(prompt("Ingrese sus notas: "))
    sumaCalificaficaciones=sumaCalificaficaciones+calificaciones
}
console.log(sumaCalificaficaciones)