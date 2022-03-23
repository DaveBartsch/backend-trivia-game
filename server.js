const express = require("express");
const app = express();
const PORT = 3000;

const { questions } = require("./questions");
const {
  gameState,
  youAreRight,
  youAreWrong,
  askQuestion,
  turnIntoURL,
  shuffle,
  choicesArr,
  randomOrder,
  gradeAnswer,
} = require("./functions");

// Welcome page
app.get("/", (req, res) => {
  res.send(
    "<h3>Welcome to Trivia World! </h3>There are four categories: history, geography, biology, and physics. The first category is history!<br> To start the game, go to <br> http://localhost:3000/start"
  );
});

//Start page, resets the score and questionNum to 0
app.get("/start", (req, res) => {
  gameState.questionNum = 0;
  gameState.score = 0;
  let askQ = askQuestion(questions[gameState.questionNum])
  questionObj = questions[gameState.questionNum]

  res.send(askQ);
  console.log("Resetting score to 0...") 
  console.log(`gameState.questionNum is: ${gameState.questionNum}`);
});

//when answer 1 is recieved as a query, ask question 2, etc
app.get("/trivia", (req, res) => {
  let answer = req.query.answer;
  let question = req.query.question;
  let grade = gradeAnswer(questions[gameState.questionNum], answer);

  if (question == "20") {
    res.send("You are done the quiz! To see your score go to http://localhost:3000/score")
  } else {
  res.send(grade);
  }
});

//score page, redirects to start page
app.get("/score", (req, res) => {
  console.log(`The score is (${gameState.score}) out of 12`);
  res.send(
    `Your score is: (${gameState.score}) out of 20! To play again edit the URL to: <br> http://localhost:3000/start`
  );
});


app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});
