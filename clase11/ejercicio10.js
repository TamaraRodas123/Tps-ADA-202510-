/*Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego,
pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera
de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no
acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver
este ejercicio.*/
const prompt=require("prompt-sync")();

const random=Math.floor(Math.random()*(10-1+1))+1;


for( let prueba=0; prueba<3; prueba++){
    let numUsuario= parseFloat(prompt("Adivine el numero. Tiene 3 intentos: "));
    if (prueba<=1){
        if (numUsuario==random){
        console.log(`CORRECTO!!! EL NUMERO ES ESE!! LO FELICITO!!`);
        break;
    }
        else{
            console.log(`Incorrecto!! tiene otro intento mas.`);
            
    }

    }
    else {
        console.log(`LIMITE ALCANZADO DE INTENTOS. El numero era ${random}`);
    }
    
        
}




