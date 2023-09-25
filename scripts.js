const buttons = document.querySelectorAll("button");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const tieScoreDisplay = document.querySelector(".tie-score");
const playerMoveHistory = document.querySelector(".player-side .move-history");
const computerMoveHistory = document.querySelector(".computer-side .move-history");
const output = document.querySelector(".output");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

buttons.forEach(button => button.addEventListener("click", (e) => {
  const playerSelection = e.target.className;
  const computerSelection = getComputerChoice();
  updateRoundDisplay(playerSelection, computerSelection, playerScore, computerScore);
  const roundResult = playRound(playerSelection, computerSelection);
  updateResultsDisplay(playerSelection, computerSelection, roundResult);
  updateWinnerDisplay(playerScore, computerScore);
}));

//Blanks the output field for each round, does more if previous round had a winner of match
function updateRoundDisplay(playerSelection, computerSelection, playerScore, computerScore) {
  if (playerScore < 5 && computerScore < 5) {
    output.textContent = "";
    playerMoveHistory.innerText += `\n${playerSelection}`;
    computerMoveHistory.innerText += `\n${computerSelection}`;
  }
  else {
    resetMatch();
  }
}

function resetMatch() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  tieScoreDisplay.textContent = `Ties: ${tieScore}`;
  playerMoveHistory.textContent = "Player";
  computerMoveHistory.textContent = "Computer";
  output.textContent = "";
}

//Chooses rps for computer
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

//Returns result of each round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "scissors") {
        return "win";
      }
      return "lose";
    case "paper":
      if (computerSelection === "rock") {
        return "win";
      }
      return "lose";
    case "scissors":
      if (computerSelection === "paper") {
        return "win";
      }
      return "lose";
  }
}

//Updates output box and score counter (display and variables)
function updateResultsDisplay(playerSelection, computerSelection, roundResult) {
  switch(roundResult) {
    case "win":
      output.innerText += `You chose ${playerSelection}.\nComputer chose ${computerSelection}.\nYou win, ${playerSelection} beats ${computerSelection}!`
      playerScoreDisplay.textContent = ++playerScore;
      break;
    case "lose":
      output.innerText += `You chose ${playerSelection}.\nComputer chose ${computerSelection}.\nYou lose, ${computerSelection} beats ${playerSelection}!`
      computerScoreDisplay.textContent = ++computerScore;
      break;
    case "tie":
      output.innerText += `You chose ${playerSelection}.\nComputer chose ${computerSelection}.\nIt's a tie!`
      tieScoreDisplay.textContent = `Ties: ${++tieScore}`;
      break;
  }
}

//Appends new text if match is over
function updateWinnerDisplay(playerScore, computerScore) {
  if (playerScore === 5) {
    output.innerText += `\nYou won the match! Humanity is saved!`;
  }
  else if (computerScore === 5) {
    output.innerText += `\nYou lost the match! Humanity is doomed! Kneel to our machine overlords.`
  }
}