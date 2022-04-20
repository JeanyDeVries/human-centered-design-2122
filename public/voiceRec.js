window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;

if(recognition)
    console.log("browser supports the speech recognition")
else{
    console.log("browser does not support the speech recognition")
}

document.addEventListener('selectionchange', () => {
    var selObj = window.getSelection();
    var selectedText = selObj.toString();
});

recognition.addEventListener('result', (message) => {
    const text = Array.from(message.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    if(text === 'copy')
        console.log("COPY")

    console.log(text)
})

recognition.addEventListener('end', () =>{
    recognition.start();
})

recognition.start();