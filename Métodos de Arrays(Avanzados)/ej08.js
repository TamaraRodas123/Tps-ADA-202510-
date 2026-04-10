/*Ejercicio 8: Busca un nombre específico
Tienes una lista de nombres ['Carlos', 'Daniel', 'Laura', 'Ana']. Queremos saber si el nombre
'Laura' está presente en la lista y, si lo está, deberías devolverlo.
● find(): Para localizar el primer elemento que satisface un criterio específico.*/
const prompt=require('prompt-sync')();

let listaNombres=['Carlos','Daniel','Laura','Ana'];



let nombreLaura=listaNombres.find(function(nombre){
    return nombre==="Laura";
});
console.log(nombreLaura);