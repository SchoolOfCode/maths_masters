function startGameFunction() {
  startGame.style.display = "none";
  gameContainer.style.display = "inherit";
  displayScore.style.display = "none";

  let playerScore = 0;
  let currentScoreElem = document.querySelector("#current-score");

  let number1 = null;
  let number1Elem = document.querySelector("#number1");
  let operatorArray = ["+", "-", "×", "÷"];
  let operator = "";
  let operatorElem = document.querySelector("#operation");
  let number2 = null;
  let number2Elem = document.querySelector("#number2");
  let answer = "";

  let button1 = document.querySelector("#option1");
  let button2 = document.querySelector("#option2");
  let button3 = document.querySelector("#option3");
  let button4 = document.querySelector("#option4");

  let options = document.querySelectorAll(".options");
  let newOptionsArray = "";

  let feedbackElem = document.querySelector("#feedback");

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
      optionsSet = new Set(optionsArray);
      return optionsSet.size !== optionsArray.length;
    }
    if (hasDuplicates(optionsArray)) {
      do {
        optionsSet.add(Math.floor(Math.random() * 50) + 1);
      } while (optionsSet.size < 4);
      console.log(optionsSet);
      newOptionsArray = Array.from(optionsSet);
      button1.innerHTML = newOptionsArray[0];
      button2.innerHTML = newOptionsArray[1];
      button3.innerHTML = newOptionsArray[2];
      button4.innerHTML = newOptionsArray[3];
    } else {
      button1.innerHTML = optionsArray[0];
      button2.innerHTML = optionsArray[1];
      button3.innerHTML = optionsArray[2];
      button4.innerHTML = optionsArray[3];
    }
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
          playerScore += 25;
          currentScoreElem.innerHTML = `Your Score: ${playerScore}`;
          feedbackElem.innerHTML = "Correct!";
          setTimeout(function () {
            document.getElementById("feedback").innerHTML = "&nbsp";
          }, 1500);
          console.log(playerScore);
          runGame();
        } else {
          feedbackElem.innerHTML = "Better luck next time!";
          setTimeout(function () {
            document.getElementById("feedback").innerHTML = "&nbsp";
          }, 1500);
          runGame();
        }
      }
      options[i].addEventListener("click", checkAnswer);
    }
  };

runGame();
updateScore();

  //30 second timer
  currentScoreElem.innerHTML = `Your Score: ${playerScore}`;
  let timeLeft = 3;
  let timerElem = document.getElementById("timer");
  let timer = setInterval(countdown, 1000);
  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timer);
      sessionStorage.setItem("final score", playerScore);
      gameOverFunction();
    } else {
      timerElem.innerHTML = timeLeft + " seconds left";
      timeLeft--;
    }
  }
}
