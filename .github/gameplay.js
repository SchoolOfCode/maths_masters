//run game func
//run on load
//star empty html, then set numbers, operators, answers, choices, update score
//if answer is correct, add 10 to score then run again, flash "better luck next time" for a short time then run again
//

let playerScore = 0;
let currentScoreElem = document.querySelector("#current-score");

let number1 = 0;
let number1Elem = document.querySelector("#number1");
let operatorArray = ["+", "-", "×", "÷"];
let operator = "";
let operatorElem = document.querySelector("#operation");
let number2 = 0;
let number2Elem = document.querySelector("#number2");
let answer = "";

let button1 = document.querySelector("#option1");
let button2 = document.querySelector("#option2");
let button3 = document.querySelector("#option3");
let button4 = document.querySelector("#option4");

let options = document.querySelectorAll(".options");

setOperator = () => {
  operator = operatorArray[Math.floor(Math.random() * operatorArray.length)];
  operatorElem.innerHTML = operator;
  console.log(operator);
};
setNumbers = () => {
  number1 = Math.floor(Math.random() * 12) + 1;
  number2 = Math.floor(Math.random() * 12) + 1;
  number1Elem.innerHTML = number1;
  number2Elem.innerHTML = number2;
  console.log(number1);
  console.log(number2);
};

checkNumbers = () => {
  while (operator === "-")
    if (number1 < number2) {
      setNumbers();
    } else {
      return true;
    }
  while (operator === "÷") {
    if (number1 % number2 !== 0) {
      setNumbers();
    } else {
      return true;
    }
  }
  return true;
};

getAnswer = () => {
  if (checkNumbers()) {
    return operator === "+"
      ? (answer = number1 + number2)
      : operator === "-"
      ? (answer = number1 - number2)
      : operator === "×"
      ? (answer = number1 * number2)
      : (answer = number1 / number2);
  }
};

setOptions = () => {
  optionsArray = [];
  optionsArray.push(Math.abs(number1 - number2));
  optionsArray.push(Math.floor(number1 / number2));
  optionsArray.push(number1 * number2);
  optionsArray.push(number1 + number2);
  console.log(optionsArray);
  function hasDuplicates(optionsArray) {
    return new Set(optionsArray).size !== optionsArray.length;
  }

  if (hasDuplicates(optionsArray)) {
    optionsArray.push(Math.floor(Math.random() * 50) + 1);
  }
  button1.innerHTML = optionsArray[0];
  button2.innerHTML = optionsArray[1];
  button3.innerHTML = optionsArray[2];
  button4.innerHTML = optionsArray[3];
};

console.log(answer);

runGame = () => {
  setOperator();
  setNumbers();
  getAnswer();
  setOptions();
};

updateScore = () => {
  for (let i = 0; i < options.length; i++) {
    function checkAnswer() {
      if (options[i].innerHTML == answer) {
        playerScore += 10;
        currentScoreElem.innerHTML = `Your Score: ${playerScore}`;
        console.log(playerScore);
        runGame();
      } else {
        runGame();
      }
    }
    options[i].addEventListener("click", checkAnswer);
  }
};

runGame();
updateScore();

finalScore = () => {
  let scoreElem = document.querySelector("#player-score");
  scoreElem.innerHTML = `You scored ${playerScore} points!`;
};
//30 second timer
currentScoreElem.innerHTML = `Your Score: ${playerScore}`;
let timeLeft = 30;
let timerElem = document.getElementById("timer");
let timer = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timer);
    sessionStorage.setItem("final score", playerScore);
    window.location.href = "score.html";
  } else {
    timerElem.innerHTML = timeLeft + " seconds left";
    timeLeft--;
  }
}
