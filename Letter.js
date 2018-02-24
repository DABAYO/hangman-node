// checks guessed letter
function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
}

Letter.prototype.print = function () {
    if(this.guessed)
        return ` ${this.letter} `;
    else
        return " * ";
}

module.exports = Letter;