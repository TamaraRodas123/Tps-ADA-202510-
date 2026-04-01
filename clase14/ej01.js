/*
Ejercicios de Arrow Function:
●	Ejercicio 1: Calcular el precio final con IVA
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una función flecha para calcular el precio final.
*/
const prompt=require('prompt-sync')();

let precioProducto=parseFloat(prompt("Ingrese el precio del producto: "));
let porcentajeIva=parseFloat(prompt("Ingrese el porcentaje del IVA: "));



const precioFinal=(precio,iva)=>precio+(precio*iva/100);

console.log(`El oprecio final con iva incluido es: ${precioFinal(precioProducto,porcentajeIva)}`)


