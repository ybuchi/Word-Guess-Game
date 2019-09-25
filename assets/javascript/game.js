/////////////////////////////DECLARE GLOBAL VARIABLES
/////////////////////////////
$(document).ready(function(){
    console.log("Ready for Action!")
});

//Create the global variables for elements on the HTML document:

//The div that will hold the wrong letters guessed
var currentLetters = $("#letters-guessed").text();
console.log("The current letters are:" + currentLetters);

//The div that will hold the word to be guessed:

var gameWordDiv = $("#game-letters");

//Create an Array that will contain the words, descriptions and images.

wordArray = [];

//Builds the words using a Constructor Function


function Word(word, description, image){
    this.word = word;
    this.description = description;
    this.image = image;

}

// Create a function that will initialize / Update the words that are in the game
function initiateWords (){
    var word1 = new Word("football", "While the history of football as we know it dates back to eigth century AD England, the origins of the game can actually be traced all the way back to the Chinese competitive game called 'cuju', or 'kick ball', which was actually very similar to modern football.", "assets/images/Chinese_Football.jpg");

    var word2 = new Word("bayern munich", "Bayern Munich has won one UEFA Cup, on European Cup Winner's Cup, one UEFA Super Cup, one FIFA Club World Cup and two International Cups, making it one of the most successful European clubs international. Bayern plays its home games at the Allianz Arena after previously having played in the Olympic Stadium of Munich for thirty-three years.","assets/images/FC-Bayern-München-logo.png");

    var word3 = new Word("ronaldinho", "Born Ronaldo de Assis Moreira, commonly known as Ronaldinho Gaucho, Ronaldinho is a former Brazilian footballer who mostly played as an attacking midfielder. Often regarded as one of the most brilliant footballers of his generation and one of the best of all time, he is well known for his incredible agility, creativity, and dance-like ability to use tricks and feints, no-look passes, and incredible free kicks.", "https://upload.wikimedia.org/wikipedia/commons/7/79/Ronaldinho_11feb2007.jpg" );

    wordArray.push(word1, word2, word3);
    console.log("The wordArray the was initiated is: " + JSON.stringify(wordArray));
}

//Create variables for the scores
wordsGuessed = 0;
$("#words-guessed-text").append(wordsGuessed);

guessesRemaining = 10;
$("#guesses-remaining-text").append(guessesRemaining);

////////////////////////////NEW WORD FUNCTION
// Create a function that will choose a new word

function chooseWord(){


    //Fire Initiate Words
    initiateWords();

    //Randomly choose an object from the word object array

    //Gets a number between 1 and 3 (both inclusive)
    var randomNumber = Math.floor((Math.random() * 3) + 1) -1;
    console.log("The random number chosen by the computer is: " + randomNumber);

    //Grab the word using the random number
    var chosenWord = wordArray[randomNumber].word;
    console.log(chosenWord);

    //Split the word into an array of letters
    var gameLetterArr = chosenWord.split("");
    console.log("The array of letters for the chose word is: " + gameLetterArr);

    //Create a variable to track the number of letters currently guessed:
    var lettersLeft = gameLetterArr.length;


    //For each character, create a div.
    for (i = 0; i < gameLetterArr.length; i++){
        

        //IF THE CHARACTER IS A SPACE, then do not add underscore
        if(gameLetterArr[i] === " "){

        //create a div and add the letter to it
        var letterDiv = $("<div>");
        letterDiv.attr("id", "spaceAt-" + [i + 1]);
        letterDiv.addClass("space");
        letterDiv.append("*");

        //Append the div to the target area on the document
        gameWordDiv.append(letterDiv);

        //Decrease LettersLeft by One to take the space into account
        lettersLeft--;

        }else{

        //create a div and add the letter to it
        var letterDiv = $("<div>");
        letterDiv.attr("id", "letter-" + [i + 1]);
        letterDiv.attr("value", gameLetterArr[i]);
        letterDiv.addClass("game-letter");
        letterDiv.append("_");

        //Append the div to the target area on the document
        gameWordDiv.append(letterDiv);
        }
    };//END of For Loop

    //////////////////////////////////////////////////////////////////////

    //Wait for each time the player presses a key

    $(document).keyup(function(keypress){

        //Record the User's choice
        var userChoice = keypress.key;
        console.log("The User Choice is: " + userChoice);
        console.log($("#game-letter").length);

        
        //If the User Choice is the same as one of the letters, then display the letter(s)
        

            //IF THE USER CHOICE IS CORRECT and the word has a space:
            if (gameLetterArr.includes(" ")&&(gameLetterArr.includes(userChoice))){
                console.log("YOU GUESSED RIGHT! (space)")

                for (i = 0; i < gameLetterArr.length; i++){
                    

                    if(userChoice === $("#letter-" + [i + 1]).attr("value") && userChoice !== $("#letter-" + [i + 1]).text()){

                    //Diminish the number of letters left to guess
                    lettersLeft--;
                    console.log("There are " + lettersLeft + " letters left to guess.")
                    
                    //empty the div
                    $("#letter-" + [i + 1]).empty();
                    $("#letter-" + [i + 1]).append(gameLetterArr[i]);

                        if(lettersLeft === 0){
                            wordsGuessed++;
                            //show the image and display additional information
                            console.log("There are NO MORE LETTERS LEFT!")

                            var infoImage = $("<img>");
                            infoImage.attr("id", "current-image");
                            infoImage.attr("src", wordArray[randomNumber].image);
                            infoImage.attr("style", "width: 150px")
                            $("#info-image").append(infoImage);

                            var infoText = $("<p>");
                            infoText.attr("id", "info-text");
                            infoText.append(wordArray[randomNumber].description);
                            $("#info-text").append(infoText);

                        }
                    }
                }
                //If the user's choice is correct and the word doesn't have a space:
            }else if (gameLetterArr.includes(userChoice)&&(gameLetterArr.includes(" ") === false)){
                console.log("YOU GUESSED RIGHT!")
                for (i = 0; i < gameLetterArr.length; i++){
                    if(userChoice === $("#letter-" + [i + 1]).attr("value") && userChoice !== $("#letter-" + [i + 1]).text()){
                    
                    

                        //Diminish the number of letters left to guess
                        lettersLeft--;
                        console.log("There are " + lettersLeft + " letters left to guess.")

                        //empty the div
                        $("#letter-" + [i + 1]).empty();
                        $("#letter-" + [i + 1]).append(gameLetterArr[i]);

                            if(lettersLeft === 0){
                                wordsGuessed++;
                                //show the image and display additional information
                                console.log("There are NO MORE LETTERS LEFT!")

                                var infoImage = $("<img>");
                                infoImage.attr("id", "current-image");
                                infoImage.attr("src", wordArray[randomNumber].image);
                                infoImage.attr("style", "width: 150px")
                                $("#info-image").append(infoImage);

                                var infoText = $("<p>");
                                infoText.attr("id", "info-text");
                                infoText.append(wordArray[randomNumber].description);
                                $("#info-text").append(infoText);
                            
                            }
                    }
                
                }

                //IF THE USER CHOICE IS WRONG
            }else if (gameLetterArr.includes(userChoice) === false) {
                


                if(currentLetters.includes(userChoice) === false) {

                guessesRemaining--;



                $("#letters-guessed").append(userChoice);
                $("#guesses-remaining-text").empty();
                $("#guesses-remaining-text").append("Guesses Remaining:  " + guessesRemaining);


                    if (guessesRemaining === 0){
                        console.log("GAME OVER. YOU LOSE!");
                    }
                }
            }

        
        
        
    
    
    });//END OF DOCUMENT KEYUP

};//END of ChooseWord Function\


/////////////GAME FUNCTIONALITY

chooseWord();









