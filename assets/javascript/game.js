//HANGMAN-My Edition

///////GAME SETUP

//INCLUDE THIS IN A FUNCTION THAT WILL BE CALLED UPON WHEN THE USER HITS A KEY
//The game fires when the user presses any key:



//The Computer needs to choose a word and associate an image with it
////////////
////////////VARIABLE DECLARATIONS

    //Create an array of words

    var gameWords = ['football','real madrid', 'champions league', 'bayern munich', 'arsenal'];
    console.log(gameWords);


    var wordsGuessed = 0;
    var guessesRemaining = 10;

    //Grab the empty div in which we want to add our tick marks
    var gameTickDiv = document.getElementById("game-letters");

    //Grab the divs containing the scores we want to track
    var wordsGuessedText = document.getElementById("words-guessed-text");
    var guessesRemainingText = document.getElementById("guesses-remaining-text");
    var lettersGuessed = document.getElementById("letters-guessed");
    //Create variables for the scores we want to keep track of



/////////////////
///////////////// GAME START : When the user clicks on a key, the game sets up, and then starts
    document.onkeyup = function(event) {

    //AFTER INITIAL CLICK< THE GAME IS SET UP, DECLARE VARIABLES
        //The scores are displayed

        wordsGuessedText.textContent = "# of Words Guessed: " + wordsGuessed;
        guessesRemainingText.textContent = "# of Guesses Remaining: " + guessesRemaining;
        lettersGuessed.textContent = "Letters Guessed: " 



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
                newTick.setAttribute("id", "tick-id" + [i]);

                }
        }
    
    //ONCE THE WORD IS SET UP, THE PLAYER CAN START CHOOSING LETTERS AS LONG AS THERE ARE TICKS

    //We record the key that the user pressed
        document.onkeyup = function(gamePlay) {
        
            var userChoice = gamePlay.key;
            console.log(userChoice);


    //If the key pressed is equal to one of the letters in the array, then display the letter. USE ANOTHER FOR LOOP.
    
    //If the user's choice fits into one of the array values, display the letters in their position
    //IF THE letter that the user chose is in the array, then run this, if the letter is NOT in the array, then run the else:
//______________________________________________________________________________
    //IF THE USER IS CORRECT:
    if (letterArray.includes(userChoice)) {
            for (i=0; i < letterArray.length; i++){

                if (userChoice === letterArray[i]) {
//Displays the user Choice. 
                document.getElementById("tick-id" + [i]).innerHTML = userChoice;
            } 
        }
//______________________________________________________________________________
    //If THE USER IS INCORRECT- FIrst incorrect answer
    } else { 

        var wrongLetterDiv = document.createElement("div");
        wrongLetterDiv.setAttribute("id", "wrong-user-choice" + userChoice);

        var letterCheckDiv = document.getElementById("wrong-user-choice" + userChoice);
        wrongLetterDiv.textContent = userChoice;

        console.log(document.getElementById("wrong-user-choice" + userChoice));
        console.log(wrongLetterDiv.getAttribute("id"));

        if (letterCheckDiv === null){


            
            guessesRemaining--;
            lettersGuessed.appendChild(wrongLetterDiv);

            console.log("I gotchu");
            console.log(guessesRemaining);

        } 

    }

    

                //Create the div and give it an id, and display it on the first wrong guess




        }

            //ALL OTHER WRONG GUESSES - check if letter has already been guessed
    };


    //If guesses = 0; you loose
    //If word is guessed, move to the next one
    //If you guess the same word twice, you shouldn't get 






//When the user presses a key
