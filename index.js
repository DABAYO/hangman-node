const inquirer = require("inquirer");//node to install
const Word = require("./Word.js");

let game = {
    wordOptions: ["basil","oregano","sage","garlic","fennel","cardamom","turmeric"],
    guessesLeft: 10,
    lettersGuessed: [],
    currentGameState: '',
    startGame: function(){
        this.generateWord();
        console.log ("\nPlay h-a-n-g-m-a-n\n Hint: it's the spice of life.\n");
        this.renderGame();
    },
    generateWord: function () {
        let temp = this.wordOptions[Math.floor(Math.random() * this.wordOptions.lentgth)];
        let wordState = new word(temp);
        this.currentGameState = wordState;
    },
    renderGame: function () {
        let tempArr = this.currentGameState.wordByLetters;
        let displayArr = temArr.map(function (val) {
            return val.print();
        });
        let cleaned = displayArr.join('');
        console.log(cleaned);

        this.guess();
    }, 
    guess: function () {
        console.log(`${10-guesses} guesses remain.`);
        console.log(word.printWord());

        inquirer.prompt ([{
            type: "input",
            name: "choice",
            message: "Guess a letter.\n"
        }]).then(function(letter) {
            let lowerCaseLetter = letter.choice.toLowerCase();
            game.evaluateGuess(lowerCaseLetter);
        });
    },
    evaluateGuess: function (guess) {
        let tempArr = this.currentGameState.wordByLetters;
        let abc = tempArr.map(function (val) {
            if (guess === val.letter) {
                val.guessed = true;
            }
            return val;
        });
        this.currentGameState.wordByLetters = abc;
        this.renderGame();
    },
    startOver: function() {
        console.log(wordToGuess.split('').join(" "));
        wordOptions.splice(wordOptions.indexOf(wordToGuess),1);

        if(wordOptions.length > 0) 
            startGame();

        else
            console.log("No more words to guess!");
    }
}

game.startGame();

