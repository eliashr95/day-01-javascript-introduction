//Crear un objeto persona con propiedades (nombre, edad, ciudad) y muéstralo en consola.

//Agregar un método al objeto persona que imprima un saludo con su nombre. (Acá recuerda la diferencia entre una función declarativa y una función de flecha)

let persona = {
  nombre: 'Neftalí Elías Hernández Rosales',
  edad: 29,
  ciudad: 'San Salvador',
  saludar: () => {
    console.log(`Hola mi nombres es ${persona.nombre}`);
  },
};
persona.saludar();
