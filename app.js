const buttonPrimary = document.querySelector("#btn-primary");
const inputText = document.querySelector("#txt-area");
const outputText = document.querySelector("#txt-output");
const serverUrl = "https://api.funtranslations.com/translate/yoda.json";
var fetchUrl;

function translationUrl() {
    fetchUrl = serverUrl + "?" + "text=" + inputText.value;
}

buttonPrimary.addEventListener("click", function () {
    translationUrl();
    fetch(fetchUrl)
        .then(response => response.json())
        .then(json => outputText.innerText = json.contents.translated)
});