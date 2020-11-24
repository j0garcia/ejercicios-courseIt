// Ejercicio 1
// Dada una variable "y" que puede contener un número de 1 a 7, determinar
// a que día de la semana corresponde. Incluir la opción si la variable toma un valor no válido (por ejemplo 0 u 8).
let y = 4;

if (y <= 0 || y >= 8) {
  console.log('El numero no es valido');
}
else if (y == 1) {
  console.log('Es Lunes');
} else if (y == 2) {
  console.log('Es Martes');
} else if (y == 3) {
  console.log('Es Miercoles');
} else if (y == 4) {
  console.log('Es Jueves');
} else if (y == 5) {
  console.log('Es Viernes');
} else if (y == 6) {
  console.log('Es Sabado');
} else {
  console.log('Es Domingo');
}