// Ejercicio 9.1

// Imprimir los primeros 50 numeros pares
// 2, 4, 6, 8, 10, etc
numPares = 0;
num = 1;

while (numPares < 50) {
  if (num % 2 === 0) {
    numPares++;
    console.log(num);
    num++;
  } else {
    num++;
  }
}