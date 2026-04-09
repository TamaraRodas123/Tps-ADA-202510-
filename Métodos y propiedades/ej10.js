/*●	Ejercicio 10: Reemplazar una palabra en una frase
Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por "verano" y muestra la frase actualizada.
*/
const prompt=require('prompt-sync')();

let frase="Me gusta el invierno";
console.log(frase.replace("invierno","verano"));