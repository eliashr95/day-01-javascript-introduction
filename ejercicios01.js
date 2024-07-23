//declaraciones con diferentes  tipos de datos
let string = 'El salvador';
console.log(string);

let number = 10;
console.log(number);

let array = ['Hola', 4];
console.log(array);

let object = {
  name: 'Enoc',
  lastName: 'Hernández',
};
console.log(object.name);

let boolean = true;
console.log(boolean);

//Operaciones matematicas
let suma = 2 + 3;
console.log(suma);

let resta = 2 - 3;
console.log(resta);

let multiplicación = 2 * 3;
console.log(multiplicación);

let división = 4 / 4;
console.log(división);

//Concatenar 3 cadenas de texto.
let saludo = 'Buenos días';
let nombre = 'Elías';
let apellido = 'Hernández';
console.log(`${saludo} ${nombre} ${apellido}`);

//Construir un array con 5 nombres.
let nombres = ['Marta', 'Enoc', 'Laura', 'Ulises', 'Samai'];

//Crea un objeto con el nombre, edad y país de una persona.
let datos = {
  name: 'Neftalí',
  edad: 29,
  país: 'El salvador',
};

//Construye un array de objetos con la información de varias personas.
let personas = [
  {
    name: 'Orlando',
    age: 56,
    country: 'El salvador',
  },
  {
    name: 'Bryan',
    age: 27,
    country: 'Guatemala',
  },
  {
    name: 'Osiris',
    age: 24,
    country: 'Honduras',
  },
];

//lista con falsy y truthy values

//falsy
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(0n); // false
Boolean(''); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false

//truthy
Boolean(true); // true
Boolean(1); // true
Boolean(-1); // true
Boolean(0.1); // true
Boolean('a'); // true (cadena no vacía)
Boolean('false'); // true (cadena no vacía)
Boolean([]); // true (array vacío)
Boolean({}); // true (objeto vacío)
Boolean(Infinity); // true
Boolean(-Infinity); // true

const values = [
  false,
  0,
  -0,
  0n,
  '',
  null,
  undefined,
  NaN, // Falsy values
  true,
  1,
  -1,
  0.1,
  'a',
  'false',
  [],
  {},
  Infinity,
  -Infinity, // Truthy values
];

values.forEach((value) => {
  console.log(`${value} is ${Boolean(value) ? 'truthy' : 'falsy'}`);
});

// function numeroAlCuadrado(n) {
//   return Math.pow(n, 2);
// }
// console.log(numeroAlCuadrado(2));
