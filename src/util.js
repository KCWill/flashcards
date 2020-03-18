const inquirer = require('inquirer');


const genList = (round) => {
  let card = round.returnCurrentCard();

  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer
    }
  });
  return {
    type: 'rawlist',
    message: card.question,
    name: 'answers',
    choices: choices
  };
}

const getRound = (round) => {
  return Promise.resolve(round);
}

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: 'feedback',
    message: `Your answer of ${id} is ${feedback}`
  }
}

async function main(round) {

  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(confirmUpdate(getAnswer.answers, round));

    if(!round.returnCurrentCard() && round.calculatePercentCorrect() < 90) {
      console.log(`You answered ${round.calculatePercentCorrect()}% of the questions correctly, try again! Restarting in 5...`)
      setTimeout(() => {console.log('4')},1000);
      setTimeout(() => {console.log('3')},2000);
      setTimeout(() => {console.log('2')},3000);
      setTimeout(() => {console.log('1')},4000);
      round.turns = 0;
      round.incorrectGuesses = [];
      setTimeout(() => {main(round)}, 5000);
    } else if (!round.returnCurrentCard()){
      round.endRound();
    }
      else {
        main(round);
      }
}

module.exports.main = main;
