const inquirer = require("inquirer"); 
const Word = require("./Word.js");

let game = {
    wordOptions: ["basil", "oregano", "sage", "garlic", "fennel", "cardamom", "turmeric"],
    guessesLeft: 10,
    lettersGuessed: [],
    currentBoardState: '',
    startGame: function () {
        this.generateWord();
        console.log("\nPlay h-a-n-g-m-a-n!\n");
        this.renderBoard();
    },
    generateWord: function () {
        let temp = this.wordOptions[Math.floor(Math.random() * this.wordOptions.length)];
        let wordState = new Word(temp);
        this.currentBoardState = wordState;
    },
    renderBoard: function () {
        let tempArr = this.currentBoardState.wordStateByLetter;
        let displayArr = tempArr.map(function (val) {
            return val.print();
        });
        let cleaned = displayArr.join('');
        console.log(cleaned);

        this.guess();
    },
    guess: function () {
        // console.log(`${this.guessesLeft} guesses remain.`);
        // console.log(word.printWord());
        inquirer.prompt([{
            type: "input",
            name: "choice",
            message: "Guess a letter.\n"
        }]).then(function (letter) {
            let lowerCaseLetter = letter.choice.toLowerCase();
            game.evaluateGuess(lowerCaseLetter);
        });
    },
    evaluateGuess: function (guess) {
        let tempArr = this.currentBoardState.wordStateByLetter;
        let j = tempArr.map(function (val) {
            if (guess === val.letter) {
                val.guessed = true;
                guessesLeft --;
            }
            return val;
            console.log("You guessed a letter!")
        });
        this.currentBoardState.wordStateByLetter = j;
        this.renderBoard();
    },
    startOver: function () {
        console.log(wordToGuess.split('').join(" "));
        wordOptions.splice(wordOptions.indexOf(wordToGuess), 1);

        if (wordOptions.length > 0)
            startGame();
        else
            console.log("No more words to guess!");
    }

}
game.startGame();