/*●	Ejercicio 10: Factorial de un número (Ejercicio entrevista)
Crea una función expresada llamada calcularFactorial que reciba un número y devuelva su factorial.
Fórmula del factorial:
*/
const prompt=require("prompt-sync")();

let numero=parseFloat(prompt("Ingrese un numero: "));

const calcularFactorial=function(numero){
    let chanchito=1;

    for(i=1;i<=numero;i++){

        chanchito=chanchito*i;

    }        
    return chanchito;            
}

console.log(`El factorial de ${numero} es: ${calcularFactorial(numero)} `)