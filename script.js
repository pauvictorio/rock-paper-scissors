const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const score = {
                playerScore: 0,
                computerScore: 0,
                tieScore: 0
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
    score.tieScore += 1;
    return "Tie! " + playerSelection + " DRAWS " + computerSelection + "!"; 
  }
}

function displayScore(score) {
  document.querySelector('#user').innerText = score.playerScore;
  document.querySelector('#computer').innerText = score.computerScore;
  document.querySelector('#tie').innerText = score.tieScore;
}
 
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', () => {
  const playerSelection = button.id.toUpperCase();
  const computerSelection = getComputerChoice(CHOICES);
  const round = playRound(playerSelection, computerSelection);

  document.querySelector('h2').innerText = round;

  displayScore(score);
  }));