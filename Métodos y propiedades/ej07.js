/*●	Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si "Sushi" está en la lista
 y muestra un mensaje que confirme si está o no.
*/
const prompt=require('prompt-sync')();

let listaComidas=["Pizza","Hamburguesa","Tacos"];

if (listaComidas.includes("Sushi")){
    console.log(`Sushi se encuentra dentro de la lista de comidas`);
}
else{
    console.log(`Sushi no se encuentra dentro de la lista de comidas.`);
}