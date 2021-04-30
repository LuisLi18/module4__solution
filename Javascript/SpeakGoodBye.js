(function(){
    byeSpeaker = new Object();
    //byeSpeaker.name = "Carolina";
    var speakWord = "Good Bye";
    byeSpeaker.speak = function(names) {
        console.log(speakWord + " " + names);
      }
      window.byeSpeaker = byeSpeaker;
})(names, window);