/*●	Ejercicio 4: Calcular descuento por cantidad
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad.
*/
const prompt=require('prompt-sync')();

let cantidadPro=parseFloat(prompt("Ingrese la cantidad de productos comprados: "));
let precioUnitario=parseFloat(prompt("Ingree el precio unitario del producto: "));

const descuento=(cantidad,producto)=>{
    let precioFinal=precioUnitario*cantidadPro
    if (cantidadPro<20){
        return precioFinal
    }
    else{

        let descuento=precioFinal*10/100
        return precioFinal-descuento
    }
}

console.log(`El precio final segun la cantidad de productos comprados es ${descuento(cantidadPro,precioUnitario)}`)