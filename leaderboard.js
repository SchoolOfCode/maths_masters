const inputUsername = document.querySelector("#addUsername");
const enterButton = document.querySelector("#enterButton");
const TOKEN = "60a8e2c18f40bb64ec94690b";
const PRIVATE = "3XrM-f9kdUeAuuv95QrE8Aal7MEJy5UUGMfgoBYZMR4A"
const displayScore = document.querySelector(".displayScore");

async function keepScore() {
  const URL = `http://dreamlo.com/lb/${TOKEN}/json`;
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
}

keepScore();


async function addPlayer() {
    const addURL = `http://dreamlo.com/lb/${PRIVATE}/add/${inputUsername.value}/1000/`
    await fetch(addURL);
}