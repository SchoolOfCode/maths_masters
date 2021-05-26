const seeds = document.querySelector("#seeds");
const avatarContainer = document.querySelector("#avatarContainer");
const inputUsername = document.querySelector("#addUsername");

function getAvatar() {
  function getDropdownOption(seeds) {
    var options;
    for (var i = 0; i < seeds.options.length; i++) {
      options = seeds.options[i];

      if (options.selected === true) {
        break;
      }
    }
    return options;
  }
  let options = getDropdownOption(seeds);
  displayAvatar(options);
}

function inputValue() {
  if ((inputUsername.value.length == 0)) {
    inputUsername.value = "Anonymous";
    options.value = "micah"
  }
}
inputValue();

function displayAvatar(options) {
  const avatarImage = `https://avatars.dicebear.com/api/${options.value}/${inputUsername.value}.svg`;
  avatarContainer.innerHTML = `
  <img id="avatarImg" src='${avatarImage}' alt="avatar">
  `;
  const option = options.value;
  sessionStorage.setItem("options", option);
}
