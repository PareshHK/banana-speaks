var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL ="https://api.funtranslations.com/translate/hodor.json"


function getTranslationURL(input){
    return serverURL + "?" + "texts" +input
}

 function errorHandler(error){
     console.log("error occured", error);
     alert("something wrongwith the server")}
 




function clickHandler() {

        var inputText = txtInput.value;

        fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText =json.contents.translated;
            outputDiv.innerText = translatedText;
            
        })
         .catch(errorHandler)

        
        

    };


    btnTranslate.addEventListener("click", clickHandler)