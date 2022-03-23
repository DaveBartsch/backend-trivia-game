const questions = [
  {
    q: "History question 1: Where did the Olympics originate?",
    wrong1: `turkey`,
    wrong2: `italy`,
    wrong3: `cyprus`,
    correct: `greece`,
    qNum: 1,
    category: "history",
  },

  {
    q: "History question 2: Fill in the blank: The most famous pyramids are known as The Great Pyramids of ____",
    wrong1: "egypt",
    wrong2: "alexandria",
    wrong3: "cairo",
    correct: "giza",
    qNum: 2,
    category: "history",
  },

  {
    q: "History question 3: What year did World War 2 start?",
    wrong1: "1941",
    wrong2: "1943",
    wrong3: "1945",
    correct: "1939",
    qNum: 3,
    category: "history",
  },

  {
    q: "History question 4: What century was the French Revolution?",
    wrong1: "16th_century",
    wrong2: "17th_century",
    wrong3: "19th_century",
    correct: "18th_century",
    qNum: 4,
    category: "history",
  },

  {
    q: "History question 5: What year did the Roman Empire collapse? <br><br>",
    wrong1: "326",
    wrong2: "372",
    wrong3: "405",
    correct: "476",
    qNum: 5,
    category: "history",
  },

  {
    q: "Geography question 1: What is the capital of Canada?",
    wrong1: `toronto`,
    wrong2: `montreal`,
    wrong3: `hamilton`,
    correct: `ottawa`,
    qNum: 6,
    category: "geography",
  },

  {
    q: "Geography question 2: What is the largest country in South America?",
    wrong1: "peru",
    wrong2: "columbia",
    wrong3: "argentina",
    correct: "brazil",
    qNum: 7,
    category: "geography",
  },

  {
    q: "Geography question 3: What is the World's smallest country?",
    wrong1: "singapore",
    wrong2: "luxembourg",
    wrong3: "taiwan",
    correct: "vatican_city",
    qNum: 8,
    category: "geography",
  },

  {
    q: "Geography question 4: What is the only major city located on two continents?",
    wrong1: "rome",
    wrong2: "delhi",
    wrong3: "moscow",
    correct: "istanbul",
    qNum: 9,
    category: "geography",
  },

  {
    q: "Geography question 5: What country is farthest South?",
    wrong1: "argentina",
    wrong2: "south_africa",
    wrong3: "australia",
    correct: "chile",
    qNum: 10,
    category: "geography",
  },

  {
    q: "Biology question 1: Which group do mushrooms belong to?",
    wrong1: `plant`,
    wrong2: `animal`,
    wrong3: `protist`,
    correct: `fungi`,
    qNum: 11,
    category: "biology"
  },

  {
    q: "Biology question 2: What do you call a young bear?",
    wrong1: "pup",
    wrong2: "baby",
    wrong3: "calf",
    correct: "cub",
    qNum: 12,
    category: "biology"
  },

  {
    q: "Biology question 3: What organ do insects NOT have?",
    wrong1: "brain",
    wrong2: "heart",
    wrong3: "stomach",
    correct: "lungs",
    qNum: 13,
    category: "biology"
  },

  {
    q: "Biology question 4: What is the most common element in the human body?",
    wrong1: "hydrogen",
    wrong2: "carbon",
    wrong3: "nitrogen",
    correct: "oxygen",
    qNum: 14,
    category: "biology"
  },

  {
    q: "Biology question 5: How many bones are in the human body?",
    wrong1: "76",
    wrong2: "155",
    wrong3: "254",
    correct: "206",
    qNum: 15,
    category: "biology"
  },

  {
    q: "Physics question 1: What is the hardest known material?",
    wrong1: `steel`,
    wrong2: `titanium`,
    wrong3: `tungsten`,
    correct: `diamond`,
    qNum: 16,
    category: "physics"
  },

  {
    q: "Physics question 2: When you add all colours together, what is the result?",
    wrong1: "black",
    wrong2: "grey",
    wrong3: "brown",
    correct: "white",
    qNum: 17,
    category: "physics"
  },

  {
    q: "Physics question 3: Which of the following is NOT a state of matter?",
    wrong1: "solid",
    wrong2: "liquid",
    wrong3: "plasma",
    correct: "none",
    qNum: 18,
    category: "physics"
  },

  {
    q: "Physics question 4: Which reaction is the source of the Sun's energy?",
    wrong1: "ionization",
    wrong2: "nuclear_fission",
    wrong3: "combustion",
    correct: "nuclear_fusion",
    qNum: 19,
    category: "physics"
  },

  {
    q: "Physics question 5: What unit of measurement is used for forces of nature? <br><br>",
    wrong1: "grams",
    wrong2: "watts",
    wrong3: "joules",
    correct: "newtons",
    qNum: 20,
    category: "physics"
  },

];

module.exports = {
  questions,
};
