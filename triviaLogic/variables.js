const questionState = {
  historyQ1: "",
  historyQ2: "",
  historyQ3: "",
  geographyQ1: "",
  geographyQ2: "",
  geographyQ3: "",
  biologyQ1: "",
  biologyQ2: "",
  biologyQ3: "",
  physicsQ1: "",
  physicsQ2: "",
  physicsQ3: "",
}

const gameState = {
  name: "",
  score: 0,
  questionNumber: 0,
  
};

const youAreWrong = "Wrong answer! <br>";
const youAreRight = "Correct answer! <br>";

const howToAnswer =
  "To select your answer, visit one of the following URLs: <br>";


module.exports = {
  gameState,
  youAreWrong,
  youAreRight,
  howToAnswer,
};
