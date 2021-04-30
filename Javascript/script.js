(function(){
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    var Greeting = new Object();
    Greeting.speak = function(window){
        for (let i = 0; i < names.length; ++i){
            var lower = names[i].toLowerCase();
            var firstLetter = lower.charAt();
            if (firstLetter !== "j"){
                helloSpeaker.speak(names[i]);
            }
            else if(firstLetter === "j"){
                byeSpeaker.speak(names[i]);
            }
        }

    }
    window.Greeting = Greeting;
})(window);