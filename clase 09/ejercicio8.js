//Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
//Determina y muestra si el triángulo es equilátero, isósceles o escaleno. (Investiga sobre los triángulos para determinar la formula)
const prompt = require('prompt-sync')();

//todo. Pedimos los lados
let lado1 = parseFloat(prompt("Ingrese el primer lado de su triangulo: "));
let lado2 = parseFloat(prompt("ingrese el otro lado dedl triangulo: "));
let lado3 = parseFloat(prompt("ingrese la base: "));

//todo. Validamos que sean números positivos
if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
    console.log("Los lados deben ser mayores que 0.");
} 
//todo Validamos que forme un triángulo
else if ((lado1 + lado2 > lado3) && (lado1 + lado3 > lado2) && (lado2 + lado3 > lado1)) {
    //? Clasificación del triángulo
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("El triángulo es EQUILÁTERO.");
    } else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
        console.log("El triángulo es ISÓSCELES.");
    } else {
        console.log("El triángulo es ESCALENO.");
    }
} 
//todo. No es triángulo
else {
    console.log("Las longitudes ingresadas NO forman un triángulo.");
}