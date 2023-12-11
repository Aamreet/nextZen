<<<<<<< HEAD
<<<<<<< HEAD
hey 
hello
=======
hey hello  tata
>>>>>>> origin/main2












let recognition;
if (!('webkitSpeechRecognition' in window)) {
    alert("You don't have speech API ");
    // Handle the absence of speech API
} else {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onstart = function() {
        console.log("Speech recognition has started...");
    }

    let actionTaken = false;
    recognition.onresult = function(event) {
      if(!actionTaken){
        let text = event.results[event.resultIndex][0].transcript;
       
          if(text.trim().toLowerCase().includes(" checkout")){
                 document.querySelector(".voice").click();
              }
          }
           
       }

     
}
=======

>>>>>>> e685f5b456b0225b048867481b32842cde5d99bc
