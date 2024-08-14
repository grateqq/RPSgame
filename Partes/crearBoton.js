// JavaScript para manejar el clic en el botón
let eleccion;

// Obtener el botón por su ID y agregar un evento de clic
document.getElementById("papelButton").addEventListener("click", function() {
    eleccion = "papel"; // Guardar el valor "papel" en la variable eleccion
    console.log(eleccion); // Mostrar el valor en la consola (opcional)
});