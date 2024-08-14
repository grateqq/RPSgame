console.log("hola")
/*

<button id="papelButton">Papel</button>
<p id="eleccion"></p>

*/
let eleccion
document.getElementById("papelButton").addEventListener("click", function() {
  eleccion = "papel"; // Guardar el valor "papel" en la variable eleccion
  let link = document.querySelector("p");  // guardo en link la etiqueta a modificar
  link.textContent = eleccion              // elijo la etiqueta y la modifico.
});

