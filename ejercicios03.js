//algoritmo para determinar si un numero es par
function esPar(numero) {
  if (numero % 2 === 0) {
    console.log('El numero es par');
  } else {
    console.log('El numero es impar');
  }
}
esPar(24);

//dia de la semana segun numero

function diaDeLaSemana(numero) {
  switch (numero) {
    case 1:
      return 'Lunes';
    case 2:
      return 'Martes';
    case 3:
      return 'Miercoles';
    case 4:
      return 'Jueves';
    case 5:
      return 'Viernes';
    case 6:
      return 'Sabado';
    case 7:
      return 'Domingo';
    default:
  }
}

console.log(diaDeLaSemana(2));

//número del 1 al 10 con bucle for

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//números pares del 1 al 20 con bucle while

let numero = 2;
while (numero <= 20) {
  console.log(numero);
  numero += 2;
}

//diferencia entre while y do while

//while
// El bucle while evalúa la condición antes de ejecutar el bloque de código. Si la condición es falsa desde el principio, el bloque de código no se ejecuta ni una sola vez.

//ejemplo
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}

//do...while
// El bucle do...while evalúa la condición después de ejecutar el bloque de código al menos una vez. Esto significa que el bloque de código dentro del do...while se ejecutará siempre al menos una vez, independientemente de si la condición es verdadera o falsa.

let contador1 = 0;

do {
  console.log(contador1);
  contador1++;
} while (contador1 < 5);
