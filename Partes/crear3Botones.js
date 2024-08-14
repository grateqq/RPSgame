/*
  <button id="papelButton">Papel</button>
  <button id="rocaButton">roca</button>
  <button id="tijeraButton">tijera</button>
*/

let eleccion
document.getElementById("papelButton").addEventListener("click", function() {
  eleccion = "papel"; // Guardar el valor "papel" en la variable eleccion
  console.log(eleccion); // Mostrar el valor en la consola (opcional)
});

document.getElementById("rocaButton").addEventListener("click", function() {
  eleccion ="roca"; // Guardar el valor "papel" en la variable eleccion
  console.log(eleccion); // Mostrar el valor en la consola (opcional)
});

document.getElementById("tijeraButton").addEventListener("click", function() {
  eleccion = "tijera"; // Guardar el valor "papel" en la variable eleccion
  console.log(eleccion); // Mostrar el valor en la consola (opcional)
});

