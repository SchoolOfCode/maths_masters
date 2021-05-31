const enterButton = document.querySelector("#enterButton");
const leaderboardTable = document.querySelector(".leaderboardTable");

let results = "";

const TOKEN = "60a8e2c18f40bb64ec94690b";
const PRIVATE = "3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A";

async function addPlayer() {
  gameOver.style.display = "none";
  displayScore.style.display = "inherit";
  leaderboardTable.innerHTML = "";
  playerScore = sessionStorage.getItem("final score");
  options = sessionStorage.getItem("options");
  const addURL = `https://www.dreamlo.com/lb/${PRIVATE}/add/${inputUsername.value}/${playerScore}/30/${options}`;
  await fetch(addURL);
  await updateResults();
}
// http://dreamlo.com/lb/3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A/add/Carmine/1000/90/Awesome

async function updateResults() {
  const URL = `https://www.dreamlo.com/lb/${TOKEN}/json`;
  const response = await fetch(URL);
  const data = await response.json();
  results = data.dreamlo.leaderboard.entry;
  console.log(data);
  showLeaderboard(results);
}

function showLeaderboard(results) {
  for (let i = 0; i < 10; i++) {
    leaderboardTable.innerHTML += `
        <table>
        <tr>
        <td id="table-position">${i + 1}°</td>
        <td id="table-avatar">
        <img id="results-avatar" 
        src="https://avatars.dicebear.com/api/${results[i].text}/${
      results[i].name
    }.svg"></td>
        <td id="table-name">${results[i].name}</td>
        <td id="table-score">${results[i].score}</td>
        </tr>
        </table>
        </div>
        `;
  }
}