let voice = document.querySelector(".voice");

let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous = true;
speechRecognition.lang = "en-US";

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "visible") {
    // Page is visible, start speech recognition
    speechRecognition.start();
  } else {
    // Page is not visible, stop speech recognition
    speechRecognition.stop();
  }
});

speechRecognition.start();


speechRecognition.onresult = function (event){
  let text = event.results[event.resultIndex][0].transcript;
  console.log("Recognized Text:", text);

  if(text.trim().toLowerCase().includes("check out")){
      console.log("Triggering click on voice element");
      voice.click();
  }
};


speechRecognition.onend = function () {
    // Speech recognition has stopped
    let msg = "Voice assitance has stopped ..";
    let reqs = "do want to start it again";
    let input = prompt(`${msg}${reqs} enter yes or no `); 
    if(input === "yes"){
        speechRecognition.start();
    }  
    else{
        speechRecognition.stop();
    }
  };


  