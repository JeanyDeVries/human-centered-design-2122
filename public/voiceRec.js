window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

var selectedText;

var saidCopy;
var copyBtnClicked = false;
var pasteBtnClicked = false;
var doNotListen = false;

document.getElementById("listenCopyButton").onclick = function() {
    startListening();
    copyBtnClicked = true;
    pasteBtnClicked = false;
    textCopy.classList.remove("hidden");
};
var textCopy = document.getElementById('copyText');

document.getElementById("listenPasteButton").onclick = function() {
    startListening(pasteBtnClicked)
    pasteBtnClicked = true;
    copyBtnClicked = false;
    textPaste.classList.remove("hidden");
};
var textPaste = document.getElementById('pasteText');

if(recognition)
    console.log("browser supports the speech recognition")
else{
    console.log("browser does not support the speech recognition")
}

document.addEventListener('selectionchange', () => {
    var selObj = window.getSelection();
    if(selObj.toString() !== '')
        selectedText = selObj.toString();
});

recognition.addEventListener('result', (message) => {
    const text = Array.from(message.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    if(text === 'copy' && copyBtnClicked)
        copyText();
    else if(text === 'smash' && pasteBtnClicked){
        pasteText();
    }
    
    if(!doNotListen && text !== 'copy' && text !== 'smash')
        saidCopy = false;

    //console.log(text)
})

recognition.addEventListener('end', () =>{
    recognition.stop();
    if(!saidCopy)
        recognition.start();
})

function copyText(){
    doNotListen = true;
    //console.log(selectedText)
    navigator.clipboard
          .writeText(selectedText)
          .then(
              success => console.log("text copied"), 
              err => console.log("error copying text")
          );

    textCopy.classList.add("hidden");
    saidCopy = true;
    recognition.stop();
}

function pasteText(){
    doNotListen = true;
    navigator.clipboard
        .readText()
        .then(
            cliptext =>
                (document.activeElement.innerText += cliptext),
                err => console.log(err)
    );

    textPaste.classList.add("hidden");
    saidCopy = true;
    recognition.stop();
}

function startListening(){
    recognition.start();
    doNotListen = false;
}