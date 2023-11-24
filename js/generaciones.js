/* 2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:

esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
Luego crea la interfaz necesaria para que el usuario pueda crear un objeto persona, permitiendo ingresar las propiedades mediante un formulario, también agregar los botones “mostrar generación”, es “mayor de edad” e indicar en un alert el resultado de la función correspondiente.
 */

class Persona{
  #nombre;
  #edad;
  #DNI;
  #sexo;
  #peso;
  #altura;
  #nacimiento


  constructor(nombre, edad, DNI, sexo, peso, altura, nacimiento){
    this.#nombre = nombre,
    this.#edad = edad,
    this.#DNI = DNI,
    this.#sexo = sexo,
    this.#peso = peso,
    this.#altura = altura
    this.#nacimiento = nacimiento
  }
  get nombre(){
    return this.#nombre;
  }

  set nombre(nuevoNombre){
    this.#nombre = nuevoNombre
  }

  get edad(){
    return this.#edad
  }

  set edad(nuevaEdad){
    this.#edad = nuevaEdad
  }

  get DNI(){
    return this.#DNI;
  }

  set DNI(nuevoDNI){
    this.#DNI = nuevoDNI;
  }

  get sexo(){
    return this.#sexo;
  }

  set sexo(nuevoSexo){
    this.#sexo = nuevoSexo;
  }

  get peso(){
    return this.#peso;
  }

  set peso(nuevoPeso){
    this.#peso = nuevoPeso;
  }

  get altura(){
    return this.#altura;
  }

  set altura(nuevaAltura){
    this.#altura = nuevaAltura;
  }

  get nacimiento(){
    return this.#nacimiento;
  }

  set nacimiento(nuevoNacimiento){
    this.#nacimiento = nuevoNacimiento;
  }
}