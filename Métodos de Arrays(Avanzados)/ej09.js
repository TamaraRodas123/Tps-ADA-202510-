/*Ejercicio 9: Cuenta la cantidad total de letras en una lista de palabras
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos saber cuántas
letras hay en total entre todas las palabras. Por ejemplo, 'sol' tiene 3 letras, 'luna' tiene 4, y
'estrella' tiene 8. La suma total debería ser 15.
● reduce(): Una poderosa herramienta para resumir o acumular datos en un único valor*/
const prompt=require('prompt-sync')();

let listaPalabras=['Sol','Luna','Estrella'];

let sumaLetras=listaPalabras.reduce(function(acumulador, letras){

    return acumulador+letras.length;


},0);
console.log(sumaLetras);