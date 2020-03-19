const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Turn = require('./Turn');
const Card = require('./Card');
const Deck = require('./Deck');
const Round = require('./Round');

class Game {
  constructor() {
    this.currentRound = [];
  }

  start() {
    let cards = [];
    for (let i = 0; i < prototypeQuestions.length; i++){
      let card = new Card(prototypeQuestions[i]);
      cards.push(card);
    };
    let deck = new Deck(cards);
    let round = new Round(deck);
    this.currentRound.push(round);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
