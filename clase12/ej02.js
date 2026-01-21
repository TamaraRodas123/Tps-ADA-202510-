/*Ejercicio 2: Do While
Escribe un programa que solicite al usuario ingresar una contraseña. Si la
contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la
correcta. La contraseña correcta es "1234".
*/
const prompt=require("prompt-sync")();
let contrasenia= parseFloat(prompt("Ingrese la contraseña: "));
const contra= 1234;
do{
    console.log(`ERROR! Intente nuevamente.`);
    contrasenia= parseFloat(prompt("Ingrese la contraseña: "));
    
    
} while(contrasenia!== contra)

    console.log(`CORRECTO!! La contraseña es correcta`)