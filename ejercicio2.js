//Ejercicio 2
// Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días correspondiente.

let month = 'Febrero';
month = month.toLowerCase();

if (month === 'febrero') {
  console.log(`El mes de ${month} tiene 28 días`);
} else if (month == 'abril' || month == 'junio' || month == 'septiembre' || month == 'noviembre') {
  console.log(`El mes ${month} tiene 30 días`);
} else {
  console.log(`El mes ${month} tiene 31 días`);
}