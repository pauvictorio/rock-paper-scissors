const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
let playerChoice = "";

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

while (!(CHOICES.includes(playerChoice))) {
  playerChoice = prompt("Enter your choice:").toUpperCase();
}

console.log(playRound(playerChoice, getComputerChoice(CHOICES)));