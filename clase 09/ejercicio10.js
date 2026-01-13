 /*Ejercicio 10:
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la semana
correspondiente. Si el número no está dentro de ese rango, muestra un mensaje
de error.*/

const prompt= require("prompt-sync")();

let numero= parseFloat(prompt("Ingrese un numero del 1 al  7: "));

if (numero==1){
    console.log(`El numero corresponde al dia lunes.`);
}
else if(numero==2){
    console.log(`El numero corresponde al dia martes.`);
}
else if(numero==3){
    console.log(`El numero corresponde al dia miercoles.`);
}
else if(numero==4){
    console.log(`El numero corresponde al dia jueves.`);
}
else if(numero==5){
    console.log(`El numero corresponde al dia viernes.`);
}
else if(numero==6){
    console.log(`El numero corresponde al dia sabado.`);
}
else if(numero==7){
    console.log(`El numero corresponde al dia domingo.`);
}
else{
    console.log(`El numero no corresponde al rango indicado.`);
}