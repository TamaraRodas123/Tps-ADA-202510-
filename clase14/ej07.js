/*Define dos objetos libro1 y libro2 con las siguientes propiedades y valores:
✔	título: una cadena con el título del libro.
✔	autor: una cadena con el nombre del autor del libro.
✔	anioPublicacion: un número con el año de publicación del libro.
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros como parámetro y muestre por consola la información de 
cada libro en el formato especificado.
*/

const prompt=require ('prompt-sync')();

let libro1={
    titulo: 'Los juegos del Hambre',
    autor: 'Susane Collins',
    anioPublicacion: 2008
}
let libro2={
    titulo: 'El principito',
    autor: 'Antoin de Saint',
    anioPublicacion: 1990
}


function mostrarLibro(libros){
    for(let i=0;i<libros.length;i++){
        console.log(`Titulo: ${libros[i].titulo} , Autor: ${libros[i].autor} , Año de publicacion: ${libros[i].anioPublicacion}`)
    }
}
let biblioteca=[libro1,libro2];


mostrarLibro(biblioteca);