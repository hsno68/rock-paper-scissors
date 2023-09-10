function getComputerChoice() {
  switch (Math.floor(Math.random()* 3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    console.log("It's a tie!");
    return "tie";
  }
  
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "scissors") {
        console.log("You win! Rock beats scissors.");
        return "win";
      }
      console.log("You lose! Paper beats rock.");
      return "lose";
    case "paper":
      if (computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
        return "win";
      }
      console.log("You lose! Scissors beat paper.");
      return "lose";
    case "scissors":
      if (computerSelection === "paper") {
        console.log("You win! Scissors beat paper.");
        return "win";
      }
      console.log("You lose! Rock beats scissors.");
      return "lose";
  }
}

function game() {
  let playerChoice;

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Rock, Paper, or Scissors?", "Rock");
    playRound(playerChoice, getComputerChoice());
  }
}