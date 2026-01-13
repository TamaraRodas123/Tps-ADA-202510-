/*Ejercicio 4:
Declara una variable nombre y pide al usuario que ingrese su nombre. Verifica si
el nombre ingresado es igual a tu nombre.
*/

const prompt= require("prompt-sync")();

const nombre= "tamara";
let nombreusuario= prompt("Ingrese su nombre: ");

if (nombreusuario== nombre){
    console.log(`Su nombre es igual al mio.`)
}
else{
    console.log(`Su nombre es diferente al mio.`)
}