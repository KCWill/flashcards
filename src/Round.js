const Turn = require('./Turn');
const Game = require('./Game');
const util = require('./util');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns]
  }

  takeTurn(answer) {
    let turn = new Turn(answer, this.deck[this.turns]);
    let answerCheck = turn.evaluateGuess();
    if(!answerCheck) {
      this.incorrectGuesses.push(this.deck[this.turns].id)
    }
    this.turns++
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (1-(this.incorrectGuesses.length/this.turns)) * 100
  }

  endRound() {
    console.log('Good!');
    // if (this.calculatePercentCorrect() >= 90){
    //   console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    // } else if(this.calculatePercentCorrect() < 90) {
    //   let newRound = new Round(this.cards);
    //   this.turns = 0;
    //   this.incorrectGuesses = [];
    //   util.main(newRound);
    }
}


module.exports = Round, Game;
