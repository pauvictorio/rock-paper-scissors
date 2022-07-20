const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * 100) % 3];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection != computerSelection) {
    if (playerSelection == CHOICES[0] && computerSelection == CHOICES[2]) {
      return "Your " + playerSelection + " had BEATEN the Computer's " + computerSelection  + "!";
    } 
    else if (playerSelection == CHOICES[1] && computerSelection == CHOICES[0]) {
      return "Your " + playerSelection + " had BEATEN the Computer's " + computerSelection  + "!";
    } 
    else if (playerSelection == CHOICES[2] && computerSelection == CHOICES[1]) {
      return "Your " + playerSelection + " had BEATEN the Computer's " + computerSelection  + "!";
    } 
    else {
      return "Your " + playerSelection + " had LOST to the Computer's " + computerSelection  + "!";
    }    
  } 
  else {
    return "Tie! " + playerSelection + " DRAWS " + computerSelection + "!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {

    let playerSelection = "";
    let computerSelection = getComputerChoice(CHOICES);

    while (!(CHOICES.includes(playerSelection))) {
      playerSelection = prompt("Enter your choice:").toUpperCase();
    }
    
    console.log(playRound(playerSelection, computerSelection));
  }
}

game();