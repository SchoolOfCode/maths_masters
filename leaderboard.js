const inputUsername = document.querySelector("#addUsername");
const enterButton = document.querySelector("#enterButton");
const displayScore = document.querySelector(".displayScore");
let results = "";

const TOKEN = "60a8e2c18f40bb64ec94690b";
const PRIVATE = "3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A";

async function addPlayer() {
    displayScore.innerHTML = "";
  const addURL = `http://dreamlo.com/lb/${PRIVATE}/add/${inputUsername.value}/1000/`;
  await fetch(addURL);
  keepScore();
}

async function keepScore() {
  const URL = `http://dreamlo.com/lb/${TOKEN}/json`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  showLeaderboard();

 function showLeaderboard() {
    for (let i = 0; i < 10; i++) {
      results = data.dreamlo.leaderboard.entry[i];
      displayScore.innerHTML += `
        <table>
        <tr>
        <td>${results.name}</td>
        <td>${results.score}</td>
        <td>${results.date}</td>
        </tr>
        </table>
        `;
    }
  }
}