/*Ejercicio 5: Uso de Arrays y Condicionales
Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en
un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre se
encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita su
desarrollo)*/
const prompt=require("prompt-sync")();

let array=[];

for(let i=0; i<5;i++){
    let nombres=prompt("Inrgrese 5 nombres: ");
    array[i]=nombres;
}
console.log(`Los nombres fueron almacenados con exito!!`)

let verifico= prompt("Ingrese un nombre: ");
if (array.includes(verifico)){
    console.log(`Ese nombre se encuentra denntro de la lista`);
}
else{
    console.log(`Ese nombre no se encuentra dentro de la lista.`)
}