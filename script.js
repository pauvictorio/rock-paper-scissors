const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const score = {
                playerScore: 0,
                computerScore: 0,
              }

function getComputerChoice(choices) {
  return choices[Math.floor(Math.random() * 100) % 3];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection != computerSelection) {
    if (playerSelection == CHOICES[0] && computerSelection == CHOICES[2]) {
      score.playerScore += 1;
      return "Your " + playerSelection + " had BEATEN the Computer's " + computerSelection  + "!";
    } 
    else if (playerSelection == CHOICES[1] && computerSelection == CHOICES[0]) {
      score.playerScore += 1;
      return "Your " + playerSelection + " had BEATEN the Computer's " + computerSelection  + "!";
    } 
    else if (playerSelection == CHOICES[2] && computerSelection == CHOICES[1]) {
      score.playerScore += 1;
      return "Your " + playerSelection + " had BEATEN the Computer's " + computerSelection  + "!";
    } 
    else {
      score.computerScore += 1;
      return "Your " + playerSelection + " had LOST to the Computer's " + computerSelection  + "!";
    }    
  } 
  else {
    return "Tie! " + playerSelection + " DRAWS " + computerSelection + "!";
  }
}

function game() {
  
  let gameRounds = parseInt(prompt("Enter the number of rounds you want to play:"))

  for (let i = 0; i < gameRounds; i++) {

    let playerSelection = "";
    let computerSelection = getComputerChoice(CHOICES);

    while (!(CHOICES.includes(playerSelection))) {
      playerSelection = prompt("Enter your choice:").toUpperCase();
    }
    
    console.log(playRound(playerSelection, computerSelection));
  }
  console.log("\nYour score: " + score.playerScore);
  console.log("Computer's score: " + score.computerScore);
}

game();