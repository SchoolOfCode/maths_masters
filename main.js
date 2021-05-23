const startGame = document.querySelector(".startGame");
const gameContainer = document.querySelector(".gameContainer");
const gameOver = document.querySelector(".gameOver");
const displayScore = document.querySelector(".displayScore");

function hidePages() {
  gameContainer.style.display = "none";
  gameOver.style.display = "none";
  displayScore.style.display = "none";
}
hidePages();

function startGameFunction() {
  startGame.style.display = "none";
  gameContainer.style.display = "inherit";
  displayScore.style.display = "none";
}

function gameOverFunction() {
  gameContainer.style.display = "none";
  gameOver.style.display = "inherit";
}

function resetGame() {

}
