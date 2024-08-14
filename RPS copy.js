// Juego de rps contra la pc. por consola.
//Mensaje Inicial
console.log("R P S")

//Funcion Eleccion de PC
function getComputerChoice() {
  let ref = Math.floor(Math.random()*100)
  if (ref<33) {
    return "piedra"
  } else if (ref<66) {
    return "tijera"
  } else {
    return  "papel"
  }
}

//Funcion eleccion de Jugador
function getPlayerChoice() {
  let choice
  while (true) { 
    choice = prompt("choice", "piedra");
      // Si el usuario cancela el prompt, vuelve a pedir la elección
    if (choice === null || choice.trim() === "") {
      alert("Por favor, ingresa una opción válida.");
      continue; 
      // Volver al inicio del bucle
    }
  
      // Si la entrada es válida, salir del bucle y devolver la elección
    return choice.toLowerCase();
  }
}
//Elecciones
  /*
  let computer = getComputerChoice()
  let player = getPlayerChoice()
  console.log("Computer: " + computer)
  console.log("Player " + player)
  */
// Funcion decidir ganador de ronda segun Elecciones

function unaRonda(playerSelection,computerSelection) {
  console.log("PLAYER: "+ playerSelection +" COMPUTER: " +computerSelection )
  if (playerSelection === computerSelection) {
    console.log("EMPATE")
    return "empate"
  }
  else if (playerSelection === "piedra") {
    if (computerSelection === "tijera") {
     console.log("WIN PLAYER") 
     return ("win")
    } 
    else if (computerSelection === "papel") {
      console.log("COMPUTER WIN")
      return ("lose")
    }
  }
  else if (playerSelection === "tijera") {
    if (computerSelection === "papel") {
     console.log("WIN PLAYER") 
     return ("win")
    } 
    else if (computerSelection === "piedra") {
      console.log("COMPUTER WIN")
      return ("lose")
    }
  }
  else if (playerSelection === "papel") {
    if (computerSelection === "piedra") {
     console.log("WIN PLAYER") 
     return ("win")
    } 
    else if (computerSelection === "tijera") {
      console.log("COMPUTER WIN")
      return ("lose")
    }
  }
  /*
  else if (playerSelection === null){
    player = prompt("error, eliga nuevamente", "piedra")
    player = player.toLowerCase()
    unaRonda(player, computer)
  }
*/
  else {
    
    player = prompt("error, eliga nuevamente", "piedra")
    player = player.toLowerCase()
    unaRonda(player, computer)

  }  
}

// unaRonda (player, computer)

//Hacer 5 rondas, sumar puntaje

function playGame () {
  console.log("PLAYGAME INICIA")
  let puntaje = 0
  let resultado
  

 for (let i= 1; i<=5; i ++) {
    let computer = getComputerChoice()
    let player = getPlayerChoice()

    resultado = unaRonda(player, computer )
  
    if (resultado === "win") {
    puntaje = puntaje +1
    } else if (resultado ==="lose") {
    puntaje = puntaje -1
    }
    console.log("puntaje= "+ puntaje)
  }
  console.log("FIN DE RONDAS")
  if (puntaje === 0) {
    console.log("PARTIDO TERMINADO: EMPATADO")
  }else if (puntaje >0) {
    console.log("PARTIDO TERMINADO: PLAYER WIN")
  } else {
    console.log("PARTIDO TERMINADO: COMPUTADORA WIN")
  }

}
playGame ()