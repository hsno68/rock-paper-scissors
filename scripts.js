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
  if (playerSelection === "" || playerSelection === null) {
    console.log("Not a valid move, try again.");
    return "invalid";
  }

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
    default:
      console.log("Not a valid move, try again.");
      return "invalid";
  }
}

function game() {
  let playerChoice;
  let playerScore = 0;
  let computerScore = 0;
  let numberOfTies = 0;

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Rock, Paper, or Scissors?", "Rock");

    switch (playRound(playerChoice, getComputerChoice())) {
      case "win":
        playerScore++;
        if (playerScore === 3) {
          i = 5; //ends the game
        }
        break;
      case "lose":
        computerScore++;
        if (computerScore === 3) {
          i = 5;
        }
        break;
      case "tie":
        numberOfTies++;
        i--; //decrement loop counter to "replay" the round so ties don't count
        break;
      case "invalid":
        i = 5; //ends the game if invalid entry
        break;
    }
  }

  //Decides the winner
  if (playerScore > computerScore) {
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}\nTies: ${numberOfTies}\nYou win!`);
  }
  else {
    console.log(`Player: ${playerScore}\nComputer: ${computerScore}\nTies: ${numberOfTies}\nYou lose!`);
  }
}