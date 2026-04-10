/*Ejercicio 4: Calcula la suma total de los números
Dada una lista de números [1, 2, 3, 4], necesitamos calcular el resultado de sumarlos todos
juntos. Es decir, deberías obtener 1 + 2 + 3 + 4. Al finalizar, imprime el total en la consola.
● reduce(): Una poderosa herramienta para resumir o acumular datos en un único valor
*/
const prompt=require('prompt-sync')();

let listaNumeros=[1,2,3,4];

let suma= listaNumeros.reduce(function(acumulador, numero){
    return acumulador+numero;
});
console.log(suma);