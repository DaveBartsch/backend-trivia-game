const express = require("express");
const app = express();
const PORT = 3000;

const { historyQ } = require("./questions/questions-hist");
const { geographyQuestions } = require("./questions/questions-geo");
const { biologyQuestions } = require("./questions/questions-bio");
const { questions } = require("./questions/questions-all");
// const { physicsQuestions } = require("./questions-phys");

const {
  askQuestion,
  turnIntoURL,
  shuffle,
  choicesArr,
  randomOrder,
  gradeAnswer,
} = require("./triviaLogic/functions");

const {
  gameState,
  youAreRight,
  youAreWrong,
} = require("./triviaLogic/variables");

app.get("/", (req, res) => {
  res.send(
    "<h3>Welcome to Trivia World! </h3>There are four categories: history, geography, biology, and physics. The first category is history!<br> To start the game, go to <br> http://localhost:3000/start"
  );
});


app.get("/start", (req, res) => {
  let askQ = askQuestion(questions[gameState.questionNumber])
  gameState.questionNumber = 0;
  gameState.score = 0;
  questionObj = questions[gameState.questionNumber]

  res.send(askQ);
  console.log("Resetting score to 0... gameState.questionNumber is: ", gameState.questionNumber);
});



app.get("/trivia", (req, res) => {
  let answer = req.query.answer;
  let question = req.query.question;
  let grade = gradeAnswer(historyQ[0], answer);
  res.send(grade);
});

//score page
app.get("/score", (req, res) => {
  console.log(`The score is (${gameState.score}) out of 12`);
  res.send(
    `Your score is: (${gameState.score}) out of 20! To play again edit the URL to: <br> http://localhost:3000/start`
  );
});

app.listen(PORT, () => {
  console.log("Listening on Port", PORT);
});

// if (answer === historyQ[0].correct) {
//   gameState.score = gameState.score + 1;
//   res.send(youAreRight + askQuestion(historyQ[1]));
//   console.log("The score is", gameState.score);
// } else if (
//   answer === historyQ[0].wrong1 ||
//   answer === historyQ[0].wrong2 ||
//   answer === historyQ[0].wrong3
// ) {
//   res.send(youAreWrong + askQuestion(historyQ[1]));
//   res.send(youAreWrong);
// } else {
//   res.send("Invalid input! Go back and try again!");
// }

// });
