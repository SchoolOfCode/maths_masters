let randomNumberForTrivia = "";
const numbersapi = document.querySelector(".numbersapi");

async function getTriviaFact() {
    randomNumberForTrivia = Math.floor(Math.random() * 100) + 1;
  let response = await fetch(
    `http://numbersapi.com/${randomNumberForTrivia}/trivia`
  );
  let data = await response.text();

  numbersapi.innerHTML = `
  <p id="numberTrivia">${data}</p>
  <button class="numbersButtonRefresh" onclick="getTriviaFact()"><i class="fas fa-sync"></i></button>`
}
