//Crea un array vacío y añade 5 nombres y luego muéstralos en consola.

let nombres = [];
nombres.push('José');
nombres.push('Antonela');
nombres.push('Batres');
nombres.push('Fidelina');
nombres.push('Priscila');
console.log(nombres);

//Crea ejemplos utilizando los siguientes métodos de Array: pop, shift, unshift, filter, map.

//pop
let arrPop = [2, 'Juan', 34, 'Marta'];
arrPop.pop();
console.log(arrPop);

//shift
let arrShift = [2, 'Juan', 34, 'Marta'];
arrShift.shift();
console.log(arrShift);

//filter
let arrFilter = ['Ana', 'Ronald', 'Arana', 'Jefferson', 'Alfredo', 'Ada'];
let nombresFiltrados = arrFilter.filter((nombre) => nombre.length > 6);

console.log(nombresFiltrados);

//map

let numbers = [2, 6, 11, 16];
let dobles = numbers.map(function (n) {
  return n * 2;
});

console.log(dobles);
