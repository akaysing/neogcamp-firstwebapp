const buttonPrimary = document.querySelector("#btn-primary");
const inputText = document.querySelector("#txt-area");
const outputText = document.querySelector("#txt-output");
const serverUrl = "https://api.funtranslations.com/translate/yoda.json";
let fetchUrl;

const translationUrl = () => fetchUrl = serverUrl + "?" + "text=" + inputText.value;

buttonPrimary.addEventListener("click", () => {
    translationUrl();
    fetch(fetchUrl)
        .then(response => response.json())
        .then(json => outputText.innerText = json.contents.translated)
});