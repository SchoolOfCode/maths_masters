playerScore = sessionStorage.getItem("final score");

document.getElementById(
  "player-score"
).innerHTML = `You scored ${playerScore} points!`;
