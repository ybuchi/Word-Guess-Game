/////////////////////////////DECLARE GLOBAL VARIABLES
/////////////////////////////////////////////////////

//Create an array with all the words 
var gameWords = ["football", "bayern munich", "ronaldinho", "champions league"]

//Create variables for the scores
wordsGuessed = 0;
guessesRemaining = 10;

//Create variables for the document elements that we will be using

var currentWordDiv = document.getElementById("game-letters");
var lettersGuessedDiv = document.getElementById("letters-guessed");

//Create a function that will randomly choose one of these words
function choseWord(targetArray){
    
    var randomWord = targetArray[Math.floor(Math.random()*targetArray.length)]
    return randomWord
}

//Create a function that will clear the currenWord Div when the word is reset
function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

//Create a function that will reset a new word when a word is guessed
function wordReset(){

    wordsGuessed++;
    document.getElementById("words-guessed-text").innerHTML = "Words Guessed: " + wordsGuessed;

    clearBox("game-letters");
    clearBox("letters-guessed");

    document.getElementById("letters-guessed").innerHTML = "Letters Guessed: "

    choseWord(gameWords);
    compChoice = choseWord(gameWords);
    console.log("The computer's new choice is: " + compChoice)
    
    lettersRemaining = compChoice.length;
    
    for (i = 0; i < compChoice.length; i++){
        if (compChoice[i] === " "){
    
            lettersRemaining--;
    
            underscoreDiv = document.createElement("div");
            underscoreDiv.textContent = compChoice[i];
            currentWordDiv.appendChild(underscoreDiv);
    
            underscoreDiv.setAttribute("class", "set-inline guessed")
    
        }else {
    
            underscoreDiv = document.createElement("div");
            underscoreDiv.textContent = "_";
            currentWordDiv.appendChild(underscoreDiv);
    
            underscoreDiv.setAttribute("class", "set-inline");
            underscoreDiv.setAttribute("id", "underscore-" + [i])
        }
    
    }
    
}

///////////////////////////////////////////////Enter game initial setup

///INITIAL SETUP

//The computer choses a word and sets up the div containg the current word
var compChoice = choseWord(gameWords);
console.log("The computer's current choice is: " + compChoice)

//Display the scores
document.getElementById("words-guessed-text").innerHTML = "Words Guessed: " + wordsGuessed;
document.getElementById("guesses-remaining-text").innerHTML = "Guesses Remaining: " + guessesRemaining;

var lettersRemaining = compChoice.length;

for (i = 0; i < compChoice.length; i++){
    if (compChoice[i] === " "){

        lettersRemaining--;

        underscoreDiv = document.createElement("div");
        underscoreDiv.textContent = compChoice[i];
        currentWordDiv.appendChild(underscoreDiv);

        underscoreDiv.setAttribute("class", "set-inline guessed")

    }else {

        underscoreDiv = document.createElement("div");
        underscoreDiv.textContent = "_";
        currentWordDiv.appendChild(underscoreDiv);

        underscoreDiv.setAttribute("class", "set-inline");
        underscoreDiv.setAttribute("id", "underscore-" + [i])
    }
}



//////////////////////////////////////////////////Enter Main Game Loop

    document.addEventListener("keyup", function(userChooses){

        var userChoice = userChooses.key;

        for (j = 0; j < compChoice.length; j++){

            var targetUnderscores = document.getElementById("underscore-"+ [j])

            if (userChoice === compChoice[j] && targetUnderscores.innerHTML === "_"){

                targetUnderscores.innerHTML = userChoice;
                targetUnderscores.setAttribute("class", "replaced");
                lettersRemaining--;
                console.log("Letters Remaining: "+ lettersRemaining);

                if(lettersRemaining === 0){

                    wordReset();
                    break;

                }

            }else if (compChoice.includes(userChoice) === false){

                var letterCheckDiv = document.getElementById("wrong-user-choice" + userChoice);

                if (letterCheckDiv === null){
                
                guessesRemaining--;
                document.getElementById("guesses-remaining-text").innerHTML = "Guesses Remaining: " + guessesRemaining;
                console.log("Guesses remaining:" + guessesRemaining);

                var wrongLetterDiv = document.createElement("div");
                wrongLetterDiv.setAttribute("id", "wrong-user-choice" + userChoice);
                wrongLetterDiv.textContent = userChoice;

                lettersGuessedDiv.appendChild(wrongLetterDiv);

                if (guessesRemaining === 0){
                    document.write("GAME OVER");
                }
                
                }
            }
        }



    })