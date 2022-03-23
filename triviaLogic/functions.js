const { historyQ } = require("../questions/questions-hist");
const { questions } = require("../questions/questions-all");

const { gameState, youAreRight, youAreWrong } = require("./variables");

// shuffles an array
function shuffle(array) {
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
let choicesArr = [0, 1, 2, 3];
let randomOrder = shuffle(choicesArr);
console.log(`The random order is: ${randomOrder}`);


// let questionObj = 0;
//creates an array of possible URLs for the user to visit
function turnIntoURL(questionObj) {
  console.log(`questionObj is: ${questionObj}`)
  return [
    `http://localhost:3000/trivia?category=${questionObj.category}&question=${questionObj.qNum}&answer=${questionObj.correct}`,
    `http://localhost:3000/trivia?category=${questionObj.category}&question=${questionObj.qNum}&answer=${questionObj.wrong1}`,
    `http://localhost:3000/trivia?category=${questionObj.category}&question=${questionObj.qNum}&answer=${questionObj.wrong2}`,
    `http://localhost:3000/trivia?category=${questionObj.category}&question=${questionObj.qNum}&answer=${questionObj.wrong3}`,
  ];
}

//structures the URLs for res.sending
function askQuestion(questionObj) {
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



function gradeAnswer (questionObj, answer) {
  console.log(`questionObj is: ${JSON.stringify(questionObj)}`)

  if (answer === questions[gameState.questionNumber].correct) {
    gameState.score = gameState.score + 1;
    gameState.questionNumber = gameState.questionNumber +1;
    console.log(gameState.score)
    return youAreRight + askQuestion(questions[gameState.questionNumber]);
  } else if (
    answer === questions[gameState.questionNumber].wrong1 ||
    answer === questions[gameState.questionNumber].wrong2 ||
    answer === questions[gameState.questionNumber].wrong3
  ) {
    gameState.questionNumber = gameState.questionNumber +1;
    return youAreWrong + askQuestion(questions[gameState.questionNumber]);
  } 
  
  else {
    return "Invalid input! Go back and try again!";
  }
}

module.exports = {
  turnIntoURL,
  askQuestion,
  shuffle,
  choicesArr,
  randomOrder,
  gradeAnswer,
};
