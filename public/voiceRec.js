window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.lang = 'nl';
recognition.interimResults = true;

const recordingbutton = document.getElementById('microphone');

var doNotListen = false;

var selectedText = "";
var lastMessage = "";

checkifSupported();

function checkifSupported(){
    if(recognition){
        popup("Er wordt geluisterd!")
        startListening();
    }
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
    else if(text === 'plakken' && lastMessage !== 'plakken'){
        pasteText();
    }
    else if(text.includes("kopieer") && message.results[0].isFinal == true)
    {
        selectText(text, "kopieer")
    }

    //event is final

    console.log(text)
    lastMessage = text;
})

function copyText(){
    popup(selectedText)
    navigator.clipboard
          .writeText(selectedText)
          .then(
              success => console.log("text copied"), 
              err => console.log("error copying text")
          );
}

function pasteText(){
    popup("Geplakt!")
    navigator.clipboard
        .readText()
        .then(cliptext => {
                document.activeElement.value += cliptext
                console.log("TEXT" + document.activeElement.textContent) 
            },
            err => console.log(err)
    );
}

function selectText(result, string){
    string = result.substring(result.indexOf(string) + string.length + 1)
    $("section").focus()
    if(window.find(string)){
        console.log(string)
        popup(string + " gekopieerd")
        selectedText = string;
        navigator.clipboard
            .writeText(string)
    }
    else{
        console.log("Niet gevonden")
    }
}

function startListening(){
    popup("Er wordt geluisterd!")
    recognition.start();
}

function stopListening(){
    popup("Er wordt niet geluisterd!")
    recognition.stop();
}

recognition.addEventListener('end', () =>{
    if(!doNotListen)
        recognition.start();
})

function $(element) {
    return document.querySelector(element)
}

function popup(string) {
    // Fill the pop-up with the image and string.
    $("#pop-up div p").innerHTML = string

    // Show the pop-up.
    $("#pop-up").classList.add("show")

    // Hide the pop-up after 3 seconds.
    setTimeout(() => {
        $("#pop-up").classList.remove("show")
    }, 3000)
}