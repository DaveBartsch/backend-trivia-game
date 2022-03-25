const express = require("express");
const app = express();
const PORT = 3000;

const { qArray } = require("./questionsArray");
const {
  gameState,
  youAreRight,
  youAreWrong,
  askQuestion,
  turnIntoURL,
  shuffle,
  choiceArray,
  randomOrder,
  gradeAnswer,
} = require("./functions");

// Welcome page
app.get("/", (req, res) => {
  res.send(
    "<h3>Welcome to Trivia World! </h3>There are four categories: history, geography, biology, and physics. Each category has five questions that get progressively harder. The first category is history!<br> To start the game, go to <br> http://localhost:3000/start"
  );
});

//Start page, resets the score and questionNum to 0
app.get("/start", (req, res) => {
  gameState.questionNum = 0;
  gameState.score = 0;
  let askQ = askQuestion(qArray[gameState.questionNum]);
  questionObj = qArray[gameState.questionNum];

  res.send(askQ);
  console.log("Resetting score to 0...");
  console.log(`gameState.questionNum is: ${gameState.questionNum}`);
});

//when answer 1 is recieved as a query, ask question 2, repeat for question 2, etc, game over when question 20 is receieved
app.get("/trivia", (req, res) => {
  let answer = req.query.answer;
  let question = req.query.question;
  let grade = gradeAnswer(qArray[gameState.questionNum], answer);
  //if answer is the correct choice for question 20, display end of game message, redirect the user to score page
  if (answer === qArray[19].correct) {
    console.log("Last question recieved! Directing user to score page.");
    res.send(
      youAreRight +
        "You are done the quiz! To see your score go to <br> <a href ='http://localhost:3000/score'>Score Page</a>"
    );
    //if answer is a wrong choice for question 20, display end of game message, redirect user to score page
  } else if (
    answer === qArray[19].wrong1 ||
    answer === qArray[19].wrong2 ||
    answer === qArray[19].wrong
  ) {
    console.log("Last question recieved! Directing user to score page.");
    res.send(
      youAreWrong +
        "You are done the quiz! To see your score go to <br> <a href ='http://localhost:3000/score'>Score Page</a>"
    );
    //if anything else, run the grade function
  } else {
    res.send(grade);
  }
});

//score page, redirects to start page
app.get("/score", (req, res) => {
  console.log(`The score is (${gameState.score}) out of 12`);
  res.send(
    `Your score is: (${gameState.score}) out of 20! Play again by clicking on the link! <br> <a href ="http://localhost:3000/start">Start Game</a>`
  );
});

app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});
