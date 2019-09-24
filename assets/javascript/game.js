/////////////////////////////DECLARE GLOBAL VARIABLES
/////////////////////////////
$(document).ready(function(){
    console.log("Ready for Action!")
});

//Create the global variables for elements on the HTML document:

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
    var word1 = new Word("football", "While the history of football as we know it dates back to eigth century AD England, the origins of the game can actually be traced all the way back to the Chinese competitive game called 'cuju', or 'kick ball', which was actually very similar to modern football.", "https://upload.wikimedia.org/wikipedia/commons/2/21/One_Hundred_Children_in_the_Long_Spring.jpg");

    var word2 = new Word("bayern munich", "Bayern Munich has won one UEFA Cup, on European Cup Winner's Cup, one UEFA Super Cup, one FIFA Club World Cup and two International Cups, making it one of the most successful European clubs international. Bayern plays its home games at the Allianz Arena after previously having played in the Olympic Stadium of Munich for thirty-three years.","https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg");

    var word3 = new Word("ronaldinho", "Born Ronaldo de Assis Moreira, commonly known as Ronaldinho Gaucho, Ronaldinho is a former Brazilian footballer who mostly played as an attacking midfielder. Often regarded as one of the most brilliant footballers of his generation and one of the best of all time, he is well known for his incredible agility, creativity, and dance-like ability to use tricks and feints, no-look passes, and incredible free kicks.", "https://upload.wikimedia.org/wikipedia/commons/7/79/Ronaldinho_11feb2007.jpg" );

    wordArray.push(word1, word2, word3);
    console.log("The wordArray the was initiated is: " + JSON.stringify(wordArray));
}

//Create variables for the scores
wordsGuessed = 0;
guessesRemaining = 10;

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
    //Create a variable to track the number of letters currently guessed:
    var lettersLeft = gameLetterArr.length;
    //Wait for each time the player presses a key

    $(document).keyup(function(keypress){

        //Record the User's choice
        var userChoice = keypress.key;
        console.log("The User Choice is: " + userChoice);
        console.log($("#game-letter").length);
        
        //If the User Choice is the same as one of the letters, then display the letter(s)
        for (i = 0; i < gameLetterArr.length; i++){

            if (gameLetterArr.includes(" ")&&(gameLetterArr.includes(userChoice))){

                lettersLeft--;

                if(userChoice === $("#letter-" + [i + 1]).attr("value")){

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

                    }
                }
            }else if (gameLetterArr.includes(userChoice)){
                
                if(userChoice === $("#letter-" + [i + 1]).attr("value")){

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
                    infoImage.attr("url", wordArray[randomNumber].image);
                    $("#info-image").append(infoImage);

                    var infoText = $("<p>");
                    infoText.attr("id", "info-text");
                    infoText.append(wordArray[randomNumber].description);
                    $("#info-text").append(infoText);
                    
                }
                
                }
            }
        }
        
        
        
    
    
    });

};//END of ChooseWord Function\


/////////////GAME FUNCTIONALITY

chooseWord();









