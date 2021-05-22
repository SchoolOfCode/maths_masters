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
  await updateResults();
}

async function updateResults() {
  const URL = `http://dreamlo.com/lb/${TOKEN}/json`;
  const response = await fetch(URL);
  const data = await response.json();
  results = data.dreamlo.leaderboard.entry;
  console.log(data);
  showLeaderboard();
}

function showLeaderboard() {
  displayScore.innerHTML = `<h2>Leaderboard</h2>`
  for (let i = 0; i < results.length; i++) {
    displayScore.innerHTML += `
        <table>
        <tr>
        <td>${results[i].name}</td>
        <td>${results[i].score}</td>
        <td>${results[i].date}</td>
        </tr>
        </table>
        `;
  }
}

