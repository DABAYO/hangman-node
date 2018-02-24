// adds word from list
const Letter = require("./Letter");

//basil
function Word(word) {
    this.word = word; //basil
    this.wordLength = this.word.length; // 5
    this.wordArray = this.word.split(''); // ['b', 'a', 's', 'i', 'l']
    this.wordStateByLetter = this.wordStateGen();
}

Word.prototype.wordStateGen = function () {
    let arr = this.wordArray;
    let letterArr = arr.map(function (val) {
        return new Letter(val)
    });
    return letterArr;
}
module.exports = Word;