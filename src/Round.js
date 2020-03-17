const Turn = require('../src/Turn');

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
    this.turns++;
    if(answerCheck) {
    } else {
      this.incorrectGuesses.push(this.deck[this.turns].id)
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (1-(this.incorrectGuesses.length/this.turns)) * 100
  }
  endRound() {

  }
}

module.exports = Round;
