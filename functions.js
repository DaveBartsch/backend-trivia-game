const { qArray } = require("./questionsArray");


const gameState = {
  score: 0,
  questionNum: 0,
  
};

const youAreWrong = "Wrong answer! <br>";
const youAreRight = "Correct answer! <br>";

// shuffles an array
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

//randomized choices from 0-3
const choiceArray = [0, 1, 2, 3];
let randomOrder = shuffle(choiceArray);
// console.log(`The random order is: ${randomOrder}`);

//creates an array of possible URLs for the user to visit
const turnIntoURL = (questionObj) => {
  return [
    `<a href ="http://localhost:3000/trivia?category=question=${questionObj.qNum}&answer=${questionObj.correct}">${questionObj.correct}</a>`,
    `<a href ="http://localhost:3000/trivia?category=question=${questionObj.qNum}&answer=${questionObj.wrong1}">${questionObj.wrong1}</a>`,
    `<a href ="http://localhost:3000/trivia?category=question=${questionObj.qNum}&answer=${questionObj.wrong2}">${questionObj.wrong2}</a>`,
    `<a href ="http://localhost:3000/trivia?category=question=${questionObj.qNum}&answer=${questionObj.wrong3}">${questionObj.wrong3}</a>`,
  ];
}

//structures the URLs, in a random order
const askQuestion = (questionObj) => {
  // console.log(`questionObj is: ${questionObj}`)
  URLs = turnIntoURL(questionObj);
  return (
    questionObj.q + "<br><br>" +
    URLs[randomOrder[0]] + "<br>" +
    URLs[randomOrder[1]] + "<br>" +
    URLs[randomOrder[2]] + "<br>" +
    URLs[randomOrder[3]] + "<br>"
  );
}

//determines whether the answer query is a correct answer or a wrong answer
const gradeAnswer = (questionObj, answer) => {
//  console.log(`questionObj is: ${JSON.stringify(questionObj)}`)
 randomOrder = shuffle(choiceArray);

if (answer === qArray[gameState.questionNum].correct) {
  gameState.questionNum = gameState.questionNum +1;
    gameState.score = gameState.score + 1;
    // console.log(`The random order is: ${randomOrder}`);
    console.log(`score is ${gameState.score}, question # is: ${gameState.questionNum}`)
    return youAreRight + askQuestion(qArray[gameState.questionNum]);
  } else if (
    answer === qArray[gameState.questionNum].wrong1 ||
    answer === qArray[gameState.questionNum].wrong2 ||
    answer === qArray[gameState.questionNum].wrong3  
    ) {
      gameState.questionNum = gameState.questionNum +1;
      // console.log(`The random order is: ${randomOrder}`);
      console.log(`score is ${gameState.score}, question # is: ${gameState.questionNum}`)
      return youAreWrong + askQuestion(qArray[gameState.questionNum]);
  }  
else {
  console.log(`User has an Error! The question # was (${gameState.questionNum}). The score was (${gameState.score})`)
    return "Invalid input! Go back and try again! Or go back to the beginning to start over: <br> <a href = 'http://localhost:3000/start'>Start Over</a>";
  }
}


module.exports = {
  youAreRight,
  youAreWrong,
  gameState,
  turnIntoURL,
  askQuestion,
  shuffle,
  choiceArray,
  randomOrder,
  gradeAnswer,
};
