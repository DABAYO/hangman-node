const inquirer = require("inquirer");//
const word = require("./Word.js");
// Word to be guessed
let wordOptions = ["basil","oregano","sage","garlic","fennel","cardamom","lavender"];
// let newWord = NEED CODE HERE for choosing new word;
//User guesses
let lettersGuessed = [];

function startGame(){
    wordToGuess = wordOptions[Math.floor(Math.random()* wordOptions.length)];
    lettersGuessed = [];
    let guesses = 0;
    let myGuess = new word(wordToGuess);
    console.log ("Play H-A-N-G-M-A-N");
    guess(myGuess,guesses);
}

function guess(word,guesses){
    console.log(`${10-guesses} guesses remain.`);
    console.log(word.printWord());

    inuqirer.prompt ([
        name: "",
        message: "Guess a letter."
    ]).then(function(letter) {

        let lowerCaseLetter = letter.str.toLowerCase();

        if(lowerCaseLetter.length ===1) {
            if(wordToGuess.toLowerCase().indexOf(lowerCaseLetter) == -1)
            userGuesses ++;

        lettersGuessed.push(lowerCaseLetter);
    //    need code to compare letter with word
        if(guesses < 10 && word.printWord().indexOf("_") != -1){
            guess(word,guessed);
        } 
        
        else {
            if(guesses <10)
            console.log("Good job!");
            
            else
            console.log("Sorry, no guesses left.");

        startOver();
            }
        }
        else {
            console.log(`You already guessed ${letter.str}. Please pick a different letter.`);
            guess(word,guesses);
        }
        else {
            if(lowerCaseLetter == wordToGuess.toLowerCase()){
                console.log()
        startOver();
            }
        else {
            guesses ++;
            console.log("Sorry. Try again.");
            guess(word, guesses);
        }
    }
});
}

function startOver() {
    console.log(wordToGuess.split('').join(" "));
    wordOptions.splice(wordOptions.indexOf(wordToGuess),1);

    if(wordOptions.length > 0) 
    startGame();

    else
    console.log("No more words to guess!");
}

startGame();

