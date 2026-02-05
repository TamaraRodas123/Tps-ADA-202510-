/*Ejercicio 4: Número par o impar
Crea una función declarada llamada esPar que reciba un número y devuelva "Es par" si el número es par o "Es impar" 
si el número es impar. Usa una variable local para guardar el resultado.*/

const prompt=require("prompt-sync")();

function esPar(){
    let numero=parseFloat(prompt ("Ingrese un numero: "));
    if (numero%2==0){

        console.log(`El numero ${numero} es par.`);
    }
    else{
        console.log(`El numero ${numero} es impar.`);
    }
  }

esPar();