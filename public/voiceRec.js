window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recogniztion = new window.SpeechRecognition();
recogniztion.interimResults = true;

if(recogniztion)
    console.log("browser supports the speech recogniztion")
else{
    console.log("browser does not support the speech recogniztion")
}

recogniztion.addEventListener('result', (message) => {
    console.log(message)
})

recogniztion.start();