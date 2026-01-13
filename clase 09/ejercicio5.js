/*Ejercicio 5:
Escribe un programa que pida al usuario que ingrese tres números y determine
cuál es el mayor de los tres.
*/

const prompt=require("prompt-sync")();

let numero1= parseFloat(prompt("Ingrese 1 numero: "));
let numero2=parseFloat(prompt("Ingrese otro numero: "));
let numero3=parseFloat(prompt("Ingrese otro numero: "));

let puntodepartida= numero1;

if (numero2 > puntodepartida && numero2 > numero3){
    console.log(`El numero mas gande es "${numero2}"`);
}
else if((numero3>numero2 )){
    console.log(`Su tercer numero "${numero3}" es mas grande.`);
}
else{
    console.log(`Felicidades el nro "${puntodepartida}" gano😍`);
}