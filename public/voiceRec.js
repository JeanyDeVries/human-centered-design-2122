window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

var selectedText;

var saidCopy;
var copyBtnClicked = false;
var pasteBtnClicked = false;

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

    console.log(copyBtnClicked)
    if(text === 'copy' && copyBtnClicked)
        copyText();
    else if(text === 'smash' && pasteBtnClicked){
        pasteText();
    }
    
    if(text !== 'copy' && text !== 'smash')
        saidCopy = false;

    console.log(text)
})

recognition.addEventListener('end', () =>{
    if(!saidCopy)
        recognition.start();
})

function copyText(){
    const elem = document.createElement('textarea');
    elem.value = selectedText;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);

    textCopy.classList.add("hidden");
    saidCopy = true;
    recognition.stop();
}

function pasteText(){
    navigator.clipboard
        .readText()
        .then(
            cliptext =>
                (document.activeElement.innerText = cliptext),
                err => console.log(err)
    );

    textPaste.classList.add("hidden");
    saidCopy = true;
    recognition.stop();
}

function startListening(){
    recognition.start();
}