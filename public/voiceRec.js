window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

document.getElementById("listenButton").onclick = function() {startListening()};
var textCopy = document.getElementById('copyText');
console.log(textCopy)

var selectedText;

if(recognition)
    console.log("browser supports the speech recognition")
else{
    console.log("browser does not support the speech recognition")
}

document.addEventListener('selectionchange', () => {
    var selObj = window.getSelection();
    if(selObj.toString() !== '')
        selectedText = selObj.toString();
    console.log(selectedText)
});

recognition.addEventListener('result', (message) => {
    const text = Array.from(message.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    if(text === 'copy')
        copyText();

    console.log(text)
})

recognition.addEventListener('end', () =>{
    //recognition.start();
})

function copyText(){
    const elem = document.createElement('textarea');
    elem.value = selectedText;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand('copy');
    document.body.removeChild(elem);

    textCopy.classList.add("hidden");
    recognition.stop();
}

function startListening(){
    recognition.start();

    textCopy.classList.remove("hidden");
}