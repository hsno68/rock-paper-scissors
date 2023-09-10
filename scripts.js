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
    return "It's a tie!";
  }
  
  switch (playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
      }
      return "You lose! Paper beats rock.";
    case "paper":
      if (computerSelection === "rock") {
        return "You win! Paper beats rock.";
      }
      return "You lose! Scissors beat paper.";
    case "scissors":
      if (computerSelection === "paper") {
        return "You win! Scissors beat paper.";
      }
      return "You lose! Rock beats scissors.";
  }
}