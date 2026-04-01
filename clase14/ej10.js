/*●	Ejercicio 10: Flores Favoritas
Escribe un programa en JavaScript para contar cuántas veces el usuario menciona sus flores favoritas. Realiza las siguientes acciones:
1.	Inicializa un array vacío para almacenar las flores favoritas.
2.	Pregunta al usuario por sus tres flores favoritas utilizando prompt y agrega cada una al array manualmente (sin usar métodos como push).
3.	Pregunta al usuario por una flor específica y verifica si está entre sus favoritas.
4.	Muestra por consola cuántas de las flores favoritas se mencionaron (esto debe hacerse manualmente).
*/
const prompt=require('prompt-sync')();

let floresFavoritas=[];
floresFavoritas[0] = prompt("Ingresa tu flor favorita 1: "); // Posición 0
floresFavoritas[1] = prompt("Ingresa tu flor favorita 2: "); // Posición 1
floresFavoritas[2] = prompt("Ingresa tu flor favorita 3: "); 
let Pregunta=prompt("Ingrese una flor en especifico: ");
let contador=0;
for (let i=0; i<floresFavoritas.length;i++){

    if(floresFavoritas[i]===Pregunta){
        contador=contador+1;
    }

}
console.log(`Sus flores favoritas se mencionan ${contador} vez en el array`);