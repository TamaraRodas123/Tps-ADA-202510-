/*Ejercicio 9: Última aparición de un modelo de auto
Se está realizando el desarrollo de una aplicación para control de gastos. Cada
día, el usuario ingresa sus gastos cotidianos.
La idea es solo registrar el total de los gastos, al finalizar la jornada.
Para simplificar, vamos a considerar que todos los meses tienen cuatro
semanas.
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y
cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 0,
día 1, columna 1, día 2, etcétera.
a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos
que cada fila representa una semana, es decir, si nos indican semana 2
tenemos que sumar la fila 1 de la matriz. Recordar que las matrices
comienzan siempre en posición 0.
b) La aplicación también tendrá una parte de estadísticas, para esto nos
solicitan dar el total de un día en particular, por ejemplo del día 3, acá
también tengamos en cuenta lo que ocurre con las filas, ya que las columnas
también comienzan en 0.
c) Por último, es necesario tener el total de gastos realizados en el mes.
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para
resolver este último punto?
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día
que más gastos se realizaron.
✔ Posibles matrices para comprobar los resultados.*/
const prompt=require("prompt-sync")();

let gastos= [
    [1135,2500,900,1600,2800,650,1100],
    [1750,1890,1900,1300,898,1750,2800],
    [1700,1150,1690,1900,1770,500,2560],
    [800,1250,1430,2100,1980,1270,950]
]
let gastosSemana=0;

console.log("------ Consultar gastos por semana ------")
let semana=parseFloat(prompt("Ingrese el numero de semana que desea del mes: "))-1;
//a) Lo que nos solicitan es dar el total de gastos en una semana.

for (let i=0; i<gastos[semana].length;i++){
    gastosSemana=gastosSemana+gastos[semana][i];

}
    semana=semana+1;
    console.log(`El total de gastos de la semana ${semana} es ${gastosSemana}`);


//b)total de un día en particular
console.log("--- Consultar Gastos por Día ---");

let dia=parseFloat(prompt("Ingrese el n° de dia de la semana correspondiente: "))-1;
let gastosDia=0;

for (let j=0;j<gastos.length;j++){
    gastosDia=gastosDia+gastos[j][dia];

}
    dia=dia+1;
    console.log(`Los gastos totales correspondientes a los dias ${dia} de la semana son: ${gastosDia}`);

//c)gastos realizados en el mes

console.log("------------Gastos Totales-------")
let gastosTotal=0;
for(let fila=0; fila<gastos.length; fila++){
    for (let columna=0;columna<gastos[fila].length; columna++){
        gastosTotal=gastosTotal+gastos[fila][columna];
    }

}
        console.log(`Los gastos totales del mes son: ${gastosTotal}`);

//d) Obtener cuál fue la semana que más gastos se realizaron.

console.log("------------Semana de mas gastos-------")

let maxGastoSemana = 0;
let semanaMasGastadora = 0;


for (let i = 0; i < gastos.length; i++) {
    1
    let sumaFilaActual = 0;
    for (let j = 0; j < 7; j++) {
        sumaFilaActual += gastos[i][j];
    }
    
    if (sumaFilaActual > maxGastoSemana) {

        maxGastoSemana = sumaFilaActual;
        semanaMasGastadora = i + 1;      
    }
}
console.log("La semana con más gastos fue la Semana " + semanaMasGastadora + " con $" + maxGastoSemana);

//d)Dia de mas gastos.
console.log("------------Dia de mas gastos-------")

let maxGastoDia = 0;
let diaMasGastador = 0;

for (let j = 0; j < 7; j++) { 
    
    let sumaColumnaActual = 0;
    

    for (let i = 0; i < 4; i++) { 
        sumaColumnaActual += gastos[i][j];
    }

    if (sumaColumnaActual > maxGastoDia) {
        maxGastoDia = sumaColumnaActual;
        diaMasGastador = j + 1; 
    }
}
console.log("El día con más gastos globales fue el Día " + diaMasGastador + " con $" + maxGastoDia);