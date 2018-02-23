function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.print = function(){
        if(this.guessed)
            return letter;
        else
            return "_"
    }
}
this.check = function(guess){
    let userGuess = guess.userGuess();
    if(userGuess === this.letter.userGuess())
        this.guessed = true;
}

module.exports = Letter;