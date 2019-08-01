//HANGMAN-My Edition

///////GAME SETUP

//INCLUDE THIS IN A FUNCTION THAT WILL BE CALLED UPON WHEN THE USER HITS A KEY
//The game fires when the user presses any key:



//The Computer needs to choose a word and associate an image with it
////////////
////////////VARIABLE DECLARATIONS

    //Create an array of words

    var gameWords = ['FOOTBALL','REAL MADRID', 'CHAMPIONS LEAGUE', 'BAYERN MUNICH', 'ARSENAL'];
    console.log(gameWords);

    //Grab the empty div in which we want to add our tick marks
    var gameTickDiv = document.getElementById("game-letters")

    //Create variables for the scores we want to keep track of
    var wordsGuessed = 0;
    var guessesReminaing = 0;


/////////////////
///////////////// GAME START : When the user clicks on a key, the game sets up, and then starts
    document.onkeyup = function(event) {

    //AFTER INITIAL CLICK< THE GAME IS SET UP
        //The Computer makes a choice
        var compChoice = gameWords[Math.floor(Math.random() * gameWords.length)];
        console.log(compChoice);

        //The computer slices the word into an array of letters
        var letterArray = compChoice.split('');

        //Array of letters is displayed as "_" in the document
        for (i=0; i < letterArray.length; i++) {

            if (letterArray[i] === " ") {

            var newTick = document.createElement("div");
             newTick.textContent = " ";
            gameTickDiv.appendChild(newTick);

            newTick.setAttribute("class","set-inline");

            } 
           
            
            else {

                var newTick = document.createElement("div");
                newTick.textContent = "_";
                gameTickDiv.appendChild(newTick);
   
                newTick.setAttribute("class","set-inline");
                }
        }
    
    //Once the word is set up, the user can START PLAYING:

    //We record the key that the user pressed
        document.onkeyup = function(gamePlay) {
            var userChoice = gamePlay.key;
            console.log(userChoice);

    //If the key pressed is equal to one of the letters in the array, the display the letter. USE ANOTHER FOR LOOP.
    
            for (i=0; i < letterArray.length; i++){

                if (userChoice === letterArray[i]){

                newTick.textContent = userChoice 
            }
    //!! Create variables for score
            else {

                wordsGuessed++;
                guessesReminaing++

            }
            }
        };
    }


//When the user presses a key
