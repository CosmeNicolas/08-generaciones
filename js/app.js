/* 2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */



import Persona from "./generaciones.js";

//ingresar modal desde js
//traemos el modal
const modalFormulario = new bootstrap.Modal(document.getElementById('formGeneracion'));
//2- traemos el boton 
 const btnGeneraciones = document.getElementById('verGeneraciones');
 //3-traemos el formulario
 const formularioGeneraciones = document.querySelector('form')
 //4- traemos los datos del formulario
 const nombre = document.getElementById('nombre'),
   edad = document.getElementById('edad'),
   dni = document.getElementById('dni'),
   sexo = document.getElementById('sexo'),
   peso = document.getElementById('peso'),
   altura = document.getElementById('altura'),
   nacimiento = document.getElementById('nacimiento')

//5- agreagmos la funcion del modal
const mostralModal = ()=>{
  modalFormulario.show()
}   



/* const persona1 = new Persona("lucas",17,37456108,"H",60,1.70,1930)

persona1.esMayorDeEdad()
console.log(persona1.edad)

persona1.mostrarGeneracion()
persona1.mostrarDatos()
*/