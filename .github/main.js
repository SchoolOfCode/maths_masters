//run game func
//run on load
//star empty html, then set numbers, operators, answers, choices, update score
//if answer is correct, add 10 to score then run again, flash "better luck next time" for a short time then run again
//

let playerScore = 0;
let playerScoreElem = document.querySelector("#player-score");
playerScoreElem.innerHTML = `Your Score: ${playerScore}`;
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

gameplay = document.getElementById("gameplay");

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
  button1.innerHTML = Math.abs(number1 - number2);
  button2.innerHTML = Math.floor(number1 / number2);
  button3.innerHTML = number1 * number2;
  button4.innerHTML = number1 + number2;
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
        playerScoreElem.innerHTML = `Your Score: ${playerScore}`;
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
//30 second timer
let timeLeft = 30;
let timerElem = document.getElementById("timer");
let timer = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timer);
    timerElem.innerHTML = "Time's up!";
    //move to next page
  } else {
    timerElem.innerHTML = timeLeft + " seconds left";
    timeLeft--;
  }
}

//possible improvements for answers
//option 1 is correct answer.
//other options are random numbers.
//randomise order of buttons on the page (elements will need to be created not amended?)
