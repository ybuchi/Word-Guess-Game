//HANGMAN-My Edition

///////GAME SETUP

////////////
////////////GLOBAL VARIABLE DECLARATIONS

    //Create an array of words
    var gameWords = ['football','real madrid', 'champions league', 'bayern munich', 'arsenal'];
    console.log(gameWords);

    //Create variablers for the scores to track
    var wordsGuessed = 0;
    var guessesRemaining = 10;

    //Grab the divs containing the scores we want to track
    var wordsGuessedText = document.getElementById("words-guessed-text");
    var guessesRemainingText = document.getElementById("guesses-remaining-text");
    var lettersGuessedText = document.getElementById("letters-guessed");

        //The scores are displayed
        wordsGuessedText.textContent = "# of Words Guessed: " + wordsGuessed;
        guessesRemainingText.textContent = "# of Guesses Remaining: " + guessesRemaining;
        lettersGuessedText.textContent = "Letters Guessed: ";

    //Create a variable to grab the empty div we want to fill our game-letters with
    var gameTickDiv = document.getElementById("game-letters");

        //Create a Function Clearbox to clear div at the end of word guess
        function clearBox(elementID)
        {
            document.getElementById(elementID).innerHTML = "";
        }
    
    //Create a check array to check the contents of the current word for ticks "_"
    var checkArray = []

    var underscoreCheck = document.getElementsByClassName("underscore");
    console.log("This is :" + underscoreCheck);


    

//___________________________________________________________________________________________
/////////////////
///////////////// GAME START : When the user clicks on a key, the game sets up, and then starts

document.onkeyup = function(event) {

    //The computer chooses a word
    var compChoice = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log("The computer's choice: " + compChoice);

    //The computer's word choice will be split into an array of letters
    var letterArray = compChoice.split('');
    console.log("variable letterArray:" + letterArray);


    //Set up the current word in the game by replacing each letter with a "_"
    for (i=0; i < letterArray.length; i++) {

        if (letterArray[i] === " ") {

        var newTick = document.createElement("div");
            newTick.textContent = " ";
        gameTickDiv.appendChild(newTick);

        newTick.setAttribute("class","replaced");

        } else {

            var newTick = document.createElement("div");
            newTick.textContent = "_";
            gameTickDiv.appendChild(newTick);

            newTick.setAttribute("class","set-inline underscore");
            newTick.setAttribute("id", "tick-id " + [i]);
            console.log("Tick has been created");

            }
        }



        //Handle the user choice
       //while (checkArray.includes("_")){

            document.onkeyup = function(userGuess) {
                
                var userChoice = userGuess.key;
                console.log("User choice :" + userChoice);


            //______________________________________________________________________________
            //IF THE USER IS CORRECT:
            //______________________________________________________________________________
            if (letterArray.includes(userChoice)) {
                    for (i=0; i < letterArray.length; i++){


                        if (userChoice === letterArray[i]) {
            //Displays the user's letter choice(s) in its (their) respective div
                        
                        var replacedDiv = document.getElementById("tick-id " + [i]);
                        replacedDiv.innerHTML = userChoice;
                        replacedDiv.setAttribute("class", "replaced");
                }


                
            }

            if (document.getElementsByClassName("replaced").length === letterArray.length){
                
            
                clearBox("game-letters");

            } 
            
                console.log("The user was correct");
            
            //______________________________________________________________________________
            //If THE USER IS INCORRECT
            //______________________________________________________________________________
            } else { 

                var letterCheckDiv = document.getElementById("wrong-user-choice" + userChoice);
                console.log(document.getElementById("wrong-user-choice" + userChoice));

            //IF the user hasn't guessed this letter wrong yet, then its associated div won't exist, and decrease the score by 1 
                if (letterCheckDiv === null){

                    var wrongLetterDiv = document.createElement("div");
                    wrongLetterDiv.setAttribute("id", "wrong-user-choice" + userChoice);
                    wrongLetterDiv.textContent = userChoice;

                    lettersGuessedText.appendChild(wrongLetterDiv);

                   //Decrease the score and display it 
                    guessesRemaining--;
                    guessesRemainingText.textContent = "# of Guesses Remaining: " + guessesRemaining;
                    console.log(guessesRemaining);
                    

                    //If this is the player's last guess, END GAME
                    if (guessesRemaining === 0) {
                        document.write("GAME OVER");
                        //else if the word is guessed: check array length 
                    }
     
                } 
            }
//___________________________________________________
   //Once the while loop is done, the word has been guessed. Clear the game letter div.


        }
    }


