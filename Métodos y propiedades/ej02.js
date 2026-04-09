/*●	Ejercicio 2: Eliminar al último invitado
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El último invitado no puede asistir. 
Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista.
*/
const prompt=require('prompt-sync')();

let invitados=["Ana", "Juan", "Carlos", "Sofía" ];

console.log(`La siguientes es la lista de invitados completa: ${invitados}`);
invitados.pop();

console.log(`Pero un invitado no puede asistir asi que fué eliminado de la lista: ${invitados}`);