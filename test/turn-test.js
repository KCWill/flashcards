const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const card = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store user\'s guess', function() {
    const turn = new Turn('Clever guess');
    expect(turn.userGuess).to.equal('Clever guess');
  });

  it('should store card object for current card in play', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card)
    expect(turn.userGuess).to.equal('pug');
    expect(turn.card).to.deep.equal(card);
  });

  it('should return user\'s guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card)
    const guess = turn.returnGuess();
    expect(guess).to.equal('pug');
  });
  it('should return the card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card)
    const currentCard = turn.returnCard();
    expect(currentCard).to.deep.equal(card);
  });

  it('should evaluate guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.evaluateGuess()).to.equal(false);
    const turn1 = new Turn('sea otter', card);
    expect(turn1.evaluateGuess()).to.equal(true);
  });
  it('should give feedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal?', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.giveFeedback()).to.equal('Incorrect!');
    const turn1 = new Turn('sea otter', card);
    expect(turn1.giveFeedback()).to.equal('Correct!');
  });

});
