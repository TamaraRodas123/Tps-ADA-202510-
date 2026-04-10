/* Ejercicio 6: Agrega un prefijo y un sufijo a cada palabra
Supongamos que tienes una lista de palabras ['hola', 'mundo', 'javascript']. Queremos
transformarlas para que cada palabra tenga un prefijo "¡" y un sufijo "!". Por ejemplo, la
palabra "hola" se debería convertir en "¡hola!".
● map(): Ideal para transformar los elementos de un array en uno nuevo.

*/
const prompt=require('prompt-sync')();

let litaPalabras=['hola','mundo','javascript'];

let palabrasTransformadas=litaPalabras.map(function(palabra){
    return "¡"+palabra+"!";
});
console.log(palabrasTransformadas);