let countdown = document.querySelector("#countdown");
let timeRemaining = 60;

//start count
function startCountdown() {
  action = setInterval(function () {
    timeRemaining -= 1;

    countdown.innerHTML = timeRemaining;
    if (timeRemaining == 0) {
      stopCountdown();
    }
  }, 1000);
}

//stop count
function stopCountdown() {
  clearInterval(action);
}

startCountdown()
