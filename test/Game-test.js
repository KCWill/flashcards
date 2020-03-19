const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', function() {

  it('should be a function', function() {
    const game = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of game', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create a new instance of card', function() {
    const game = new Game();
    game.start();
    expect(game.currentDeck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should create a new instance of deck', function() {
    const game = new Game();
    game.start();
    expect(game.currentDeck).to.be.an.instanceof(Deck);
  });

  it('should create a new instance of round', function() {
    const game = new Game();
    game.start();
    expect(game.currentRound).to.be.an.instanceof(Round);
  });



});
