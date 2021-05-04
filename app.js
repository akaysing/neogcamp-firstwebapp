const buttonPrimary = document.querySelector("#btn-primary");
const inputText = document.querySelector("#txt-area");
const outputText = document.querySelector("#txt-output");

buttonPrimary.addEventListener("click",function(){
    outputText.innerText = inputText.value;
});


    

    
