/* Ejercicio 7: Filtra nombres que empiecen con la letra 'A'
Dada una lista de nombres ['Ana', 'Luis', 'Andrea', 'María'], queremos quedarnos solo con los
nombres que comiencen con la letra 'A'. Por ejemplo, el nombre 'Luis' no debería estar en el
resultado porque empieza con 'L'
● filter(): Perfecto para seleccionar elementos que cumplen con una condición.*/

const prompt=require('prompt-sync')();

let listaNombres=['Ana','Luis','Andrea','María'];

let conmienzaConA= listaNombres.filter(function(nombre){
    return nombre[0]==="A";
});
console.log(conmienzaConA);
