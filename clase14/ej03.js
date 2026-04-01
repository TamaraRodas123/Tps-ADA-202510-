/*●	Ejercicio 3: Clasificación de edades
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, adolescente, adulto o adulto mayor.
*/
/*  x=*/

const prompt=require('prompt-sync')();

let edad=parseFloat(prompt("Ingrese su edad: "));

const clasificacion=edad=>{
    if (edad<11) return "niño";
    if (edad>10 && edad<18) return "adolescente";
    return "Adulto"
}
console.log(`Usted es un ${clasificacion(edad)}`)