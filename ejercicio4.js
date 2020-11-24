// Ejercicio 4
// Dada una variable "x" la cual contiene una letra, determinar si es una vocal.

let x = 'U';
x = x.toLowerCase();

if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
  console.log(`La letra ${x} es una vocal`);
} else {
  console.log(`La letra ${x} es una consonante`);
}