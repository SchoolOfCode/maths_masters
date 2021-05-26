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
  youScored.innerHTML = `<p>You scored <br><span>${playerScore}</span> points!</p>`;
}

function showInstructions() {
  document.getElementById("instructionsButton").style.display = "none";
  document.getElementById("instructions").innerHTML = `
  You have 30 seconds to correctly answer as many questions as you can!
  <br />Good Luck!`;
}
