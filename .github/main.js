//generate new question:
//let inner text of number 1 be a random number between 0 and 12
//let inner text of operation be + - x or /
//let inner text of number 2 be a random number between 0 and 12
//let answer be the result of number 1 operation number 2
//if button click inner text = answer, player score = +10

let playerScore = 0;
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
  let opt1 = Math.abs(number1 - number2);
  let opt2 = Math.floor(number1 / number2);
  let opt3 = number1 * number2;
  let opt4 = number1 + number2;
  button1.innerHTML = opt1;
  button2.innerHTML = opt2;
  button3.innerHTML = opt3;
  button4.innerHTML = opt4;
};

//for each button add an event listener, on click, check answer
//if answer === inner html, create a new function

setOperator();
setNumbers();
getAnswer();
setOptions();

console.log(answer);

for (let i = 0; i < options.length; i++) {
  function checkAnswer() {
    if (options[i].innerHTML == answer) {
      playerScore += 10;
      console.log(playerScore);
    } else {
      console.log("no!");
    }
  }
  options[i].addEventListener("click", checkAnswer);
}

//30 second timer
let timeLeft = 30;
let timerElem = document.getElementById("timer");
let timer = setInterval(countdown, 1000);
function countdown() {
  if (timeLeft == -1) {
    clearTimeout(timer);
    timerElem.innerHTML = "Time's up!";
  } else {
    timerElem.innerHTML = timeLeft + " seconds left";
    timeLeft--;
  }
}
