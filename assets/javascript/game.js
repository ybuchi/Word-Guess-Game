//HANGMAN-My Edition

///////GAME SETUP

//INCLUDE THIS IN A FUNCTION THAT WILL BE CALLED UPON WHEN THE USER HITS A KEY

//The Computer needs to choose a word and associate an image with it

    //Create an array of words

    var gameWords = ['FOOTBALL','REAL MADRID', 'CHAMPIONS LEAGUE', 'BAYERN MUNICH', 'ARSENAL'];
    console.log(gameWords);

    //Make computer choose one of these words at random

    var compChoice = gameWords[Math.floor(Math.random() * gameWords.length)];
    console.log(compChoice);


//The page then needs to display the correct amount of "_" to display on the screen.

    //The computer needs to count the number of characters (use str.length)

    //The computer slices the characters of the word (using str.slice(start,end)) and stores them into an array. (see https://www.journaldev.com/794/string-char-array-java)
    var letterArray = compChoice.split('');
    console.log(letterArray);

    //Create a function that, for each of these new variables, will create a <p> element with either "_" for letters or "" for a space


    

////GAMEPLAY

// The user presses a key to start the game

// When the user presses a letter key to guess:

    //
