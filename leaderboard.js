const enterButton = document.querySelector("#enterButton");
const leaderboardTable = document.querySelector(".leaderboardTable")

let results = "";

const TOKEN = "60a8e2c18f40bb64ec94690b";
const PRIVATE = "3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A";

async function addPlayer() {
  gameOver.style.display = "none";
  displayScore.style.display = "inherit";
  leaderboardTable.innerHTML = "";
  const addURL = `http://dreamlo.com/lb/${PRIVATE}/add/${inputUsername.value}/2200/`;
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
  leaderboardTable.innerHTML = `<h2>Leaderboard</h2>`;
  for (let i = 0; i < 10; i++) {
    leaderboardTable.innerHTML += `
        <table>
        <tr>
        <td id="results-name">${results[i].name}</td>
        <td id="results-score">${results[i].score}</td>

        </tr>
        </table>
        `;
  }
}
