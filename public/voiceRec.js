window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = 'nl';
recognition.interimResults = true;

const recordingbutton = document.getElementById('microphone');

var selectedText;
var doNotListen = false;

checkifSupported();

function checkifSupported(){
    if(recognition)
        startListening();
    else{
        return;
    }
}

recordingbutton.addEventListener('change', function() {
    if (this.checked) {
        doNotListen = true;
        stopListening();
    } 
    else {
        doNotListen = false;
        startListening();
    }
  });

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

    if(text === 'kopiëren')
        copyText();
    else if(text === 'plakken'){
        pasteText();
    }

    console.log(text)
})

recognition.addEventListener('end', () =>{
    if(!doNotListen)
        recognition.start();
})

function copyText(){
    navigator.clipboard
          .writeText(selectedText)
          .then(
              success => console.log("text copied"), 
              err => console.log("error copying text")
          );
}

function pasteText(){
    navigator.clipboard
        .readText()
        .then(cliptext => {
                console.log(cliptext, document.activeElement.innerText);
                document.activeElement.textContent += cliptext
            },
            err => console.log(err)
    );
}

function startListening(){
    recognition.start();
}

function stopListening(){
    recognition.stop();
}