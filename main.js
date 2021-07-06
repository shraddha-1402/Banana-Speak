const inputArea = document.querySelector("#input-text");
const outputArea = document.querySelector("#output-text");
const translateBtn = document.querySelector("#translate-button");

const url = "https://api.funtranslations.com/translate/minion.json";

const urlCreator = (input) => `${url}?text=${input}`;

function clickHandler() {
  var input = inputArea.value;
  fetch(urlCreator(input))
    .then(res => {
      return res.json();
    })
    .then(data => outputArea.innerText = data.contents.translated)
    .catch(err => err);
}

translateBtn.addEventListener("click", clickHandler);