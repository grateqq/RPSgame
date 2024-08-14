let score
let winner
let playerSelection
let computerSelection
let round = 0
// papper rock scissors
// FUNCIONES
  //1
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
  //2
function playRonda(playerSelection,computerSelection) {
    //console.log("PLAYER: "+ playerSelection +" COMPUTER: " +computerSelection )
    if (playerSelection === computerSelection) {
      //console.log("DRAW")
      return "DRAW"
    }
    else if (playerSelection === "rock") {
      if (computerSelection === "scissors") {
       //console.log("WIN PLAYER") 
       return ("You win")
      } 
      else if (computerSelection === "papper") {
        //console.log("COMPUTER WIN")
        return ("You lose")
      }
    }
    else if (playerSelection === "scissors") {
      if (computerSelection === "papper") {
       //console.log("WIN PLAYER") 
       return ("You win")
      } 
      else if (computerSelection === "rock") {
        //console.log("COMPUTER WIN")
        return ("You lose")
      }
    }
    else if (playerSelection === "papper") {
      if (computerSelection === "rock") {
       //console.log("WIN PLAYER") 
       return ("You win")
      } 
      else if (computerSelection === "scissors") {
       // console.log("COMPUTER WIN")
        return ("You lose")
      }
    }
}

// BOTONES
document.getElementById("papperButton").addEventListener("click", function() {
  //contador 
  round = round +1;
  
  // Selecciones
  playerSelection = "papper"; 
  computerSelection = getComputerChoice();
 
    
  console.log(playerSelection);
  console.log(computerSelection);

  // WINNER
  winner = playRonda(playerSelection,computerSelection)
  console.log(winner)
  // posteo selecciones  y resultado
  let link = document.getElementById("rondas");  // guardo en link la etiqueta a modificar
  let textraund = document.createElement("p");
  textraund.textContent = 
    "Ronda " +round+ " Player: " + playerSelection 
    + " Computer: " + computerSelection
    + ". "+ winner;
  
  link.appendChild(textraund)

  
});


