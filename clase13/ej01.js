/*Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista)
Crea una función declarada llamada calcularAreaTriangulo que reciba dos parámetros: la base y la altura de un triángulo. La función debe
 devolver el área del triángulo.
Pista: Usa la fórmula: area=base*altura/2    */

const prompt=require("prompt-sync")();


function calcularAreaTriangulo(base, altura){
    return (base*altura)/2;
}
let base=parseFloat(prompt("Ingrese la base del triangulo: "));
let altura= parseFloat(prompt("Ingrese la altura del triangulo: "));
let area= calcularAreaTriangulo(base,altura);

console.log(`El area del triangulo es:${area} `)