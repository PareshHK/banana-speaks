var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

console.log(txtInput)


function clickHandler() {

        outputDiv.innerText="jdhsbejdjjl " + txtInput.value;
        
        

    };


    btnTranslate.addEventListener("click", clickHandler)