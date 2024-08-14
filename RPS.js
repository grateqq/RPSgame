let score
let winner
let playerSelection
let computerSelection
let round = 0

// FUNCIONES
function getComputerChoice() {
  let ref = Math.floor(Math.random()*100)
  if (ref<33) {
    return "papper"
  } else if (ref<66) {
    return "scissors"
  } else {
    return  "rock"
  }
}

// BOTONES
document.getElementById("papperButton").addEventListener("click", function() {
  //contador 
  round = round +1;
  
  // Selecciones
  playerSelection = "papper"; 
  computerSelection = getComputerChoice();
  // posteo selecciones
  let link = document.getElementById("rondas");  // guardo en link la etiqueta a modificar
  let textraund = document.createElement("p");
  textraund.textContent = 
    "Ronda " +round+ " Player: " + playerSelection 
    + " Computer: " + computerSelection;
  
  link.appendChild(textraund)
    
  console.log(playerSelection);
  console.log(computerSelection);

});
