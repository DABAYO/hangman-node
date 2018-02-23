const letter = require('./Letter.js');

function Word(thisWord) {
    let splitWord = thisWord.split(" ");
    this.letters = [];

    splitWord.forEach(i => {
        let newLetter = new Letter(i);

        if(/\W/g.test(i))
            newLetter.guessed = true;
    this.letters.push(newLetter);
        
    });

    this.printWord = function() {

        let returnString = " ";

        this.letters.forEach(1 =>{
            returnString += 1.print() + " ";
        });

        return returnString;
    };

    this.guessLetter = function(letter) {
        this.etters.forEach(1 =>{
            1.check(letter);
        });
    };
} 

module.exports = Word;