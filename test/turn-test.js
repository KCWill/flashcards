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
    const turn = new Turn('object');
    expect(turn.userGuess).to.equal('object');
  });

  it('should store card object for current card in play', function() {
    const card = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const turn = new Turn('object', card)
    expect(turn.userGuess).to.equal('object');
    expect(turn.card).to.deep.equal(card);
  });

  it('should return user\'s guess', function() {
    const card = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const turn = new Turn('object', card)
    const guess = turn.returnGuess();
    expect(guess).to.equal('object');
  });
  it('should return the card', function() {
    const card = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const turn = new Turn('object', card)
    const currentCard = turn.returnCard();
    expect(currentCard).to.deep.equal(card);
  });

  it('should evaluate guess', function() {
    const card = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const turn = new Turn('function', card);
    expect(turn.evaluateGuess()).to.equal(false);
    const turn1 = new Turn('object', card);
    expect(turn1.evaluateGuess()).to.equal(true);
  });
  it('should give feedback', function() {
    const card = new Card({
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    });
    const turn = new Turn('function', card);
    expect(turn.giveFeedback()).to.equal('incorrect!');
    const turn1 = new Turn('object', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
  });
});
