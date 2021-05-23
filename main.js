const startGame = document.querySelector(".startGame");
const gameContainer = document.querySelector(".gameContainer");
const gameOver = document.querySelector(".gameOver");
const displayScore = document.querySelector(".displayScore");
const youScored = document.querySelector("#youScored");

function hidePages() {
  gameContainer.style.display = "none";
  gameOver.style.display = "none";
  displayScore.style.display = "none";
}
hidePages();

function gameOverFunction() {
  playerScore = sessionStorage.getItem("final score");
  gameContainer.style.display = "none";
  gameOver.style.display = "inherit";
  youScored.innerHTML = `You scored ${playerScore} points!`;
}
