/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

function getComputerChoice() {
  const computerChoice = ["rock", "paper", "scissors"];
  const result =
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  return result;
}
function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    score = 1;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    score = 1;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    score = 1;
  } else {
    score = -1;
  }
  console.log("Score in get result: " + score);
  return score;
}
function showResult(score, playerChoice, computerChoice) {
  console.log("Score inside the show result", score);
  const result = document.querySelector("#result");
  if (score == -1) {
    result.innerText = `You Lose!`;
  } else if (score == 1) {
    result.innerText = `You Win! :)`;
  } else {
    result.innerText = `It's Draw!`;
  }
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `Player Choice ${playerChoice} vs Computer Choice ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  let buttons = document.querySelectorAll(".buttons button");
  console.log("Buttons Length", buttons.length);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      onClickRPS(button.value);
    });
  });
  let endGameButton = document.querySelector("#endGameButton");
  endGameButton.onclick = () => endGame();
}

// ** endGame function clears all the text on the DOM **
function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
