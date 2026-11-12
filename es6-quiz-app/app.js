// ES6 Quiz Questions
const questions = [
  {
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    options: ["var", "let", "const", "static"],
    answer: "const"
  },
  {
    question: "Which keyword allows you to declare a block-scoped variable that can be reassigned?",
    options: ["const", "let", "fixed", "static"],
    answer: "let"
  },
  {
    question: "Which symbol is used in an arrow function?",
    options: ["->", "=>", "<-", "::"],
    answer: "=>"
  },
  {
    question: "Which syntax is used for a template literal?",
    options: ['"Hello"', "'Hello'", "`Hello`", "(Hello)"],
    answer: "`Hello`"
  },
  {
    question: "How do you insert a variable inside a template literal?",
    options: ["#name", "${name}", "&name", "@name"],
    answer: "${name}"
  },
  {
    question: "Which array method creates a new array by changing every item?",
    options: ["map()", "filter()", "find()", "push()"],
    answer: "map()"
  },
  {
    question: "Which array method returns items that pass a condition?",
    options: ["map()", "filter()", "pop()", "join()"],
    answer: "filter()"
  },
  {
    question: "Which array method returns the first item that matches a condition?",
    options: ["forEach()", "reduce()", "find()", "sort()"],
    answer: "find()"
  },
  {
    question: "Which array method runs a function for each item and does not create a new array?",
    options: ["map()", "forEach()", "filter()", "slice()"],
    answer: "forEach()"
  },
  {
    question: "Which array method can calculate one final value from array items?",
    options: ["reduce()", "push()", "includes()", "reverse()"],
    answer: "reduce()"
  },
  {
    question: "Which syntax is used to create an array in JavaScript?",
    options: ["{}", "()", "[]", "<>"],
    answer: "[]"
  },
  {
    question: "What does the spread operator look like?",
    options: ["**", "...", "&&", "??"],
    answer: "..."
  },
  {
    question: "Which syntax can copy the items of an array into another array?",
    options: ["[...oldArray]", "{oldArray}", "(oldArray)", "oldArray[]"],
    answer: "[...oldArray]"
  },
  {
    question: "Which syntax is used for destructuring an array?",
    options: ["const {a} = arr", "const [a] = arr", "const (a) = arr", "const <a> = arr"],
    answer: "const [a] = arr"
  },
  {
    question: "Which syntax is used to get a property from an object through destructuring?",
    options: ["const [name] = user", "const (name) = user", "const {name} = user", "const <name> = user"],
    answer: "const {name} = user"
  },
  {
    question: "Which method checks whether an array includes a value?",
    options: ["contains()", "includes()", "hasValue()", "exists()"],
    answer: "includes()"
  },
  {
    question: "What does the default parameter provide?",
    options: [
      "A value used when an argument is not provided",
      "A way to stop a function",
      "A way to create an array",
      "A way to repeat a function"
    ],
    answer: "A value used when an argument is not provided"
  },
  {
    question: "Which keyword is used to create a class in JavaScript?",
    options: ["object", "class", "constructor", "newClass"],
    answer: "class"
  },
  {
    question: "Which keyword is used to create an object from a class?",
    options: ["this", "return", "new", "make"],
    answer: "new"
  },
  {
    question: "What does ES6 stand for?",
    options: [
      "ECMAScript 6",
      "Easy Script 6",
      "Extended Style 6",
      "ECMA Software 6"
    ],
    answer: "ECMAScript 6"
  }
];

// Select HTML elements
const questionNumber = document.querySelector("#questionNumber");
const questionText = document.querySelector("#question");
const optionsDiv = document.querySelector("#options");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");

const previousBtn = document.querySelector("#previousBtn");
const nextBtn = document.querySelector("#nextBtn");
const quizBox = document.querySelector("#quizBox");
const resultBox = document.querySelector("#resultBox");
const finalScore = document.querySelector("#finalScore");
const resultMessage = document.querySelector("#resultMessage");
const restartBtn = document.querySelector("#restartBtn");

// Store the selected answers
let currentQuestion = 0;
let selectedAnswers = [];

// Show one question on the screen
const showQuestion = () => {
  let currentData = questions[currentQuestion];

  questionNumber.innerText = `Question ${currentQuestion + 1}`;
  progressText.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
  questionText.innerText = currentData.question;

  optionsDiv.innerHTML = "";

  currentData.options.forEach((option) => {
    let optionBtn = document.createElement("button");
    optionBtn.classList.add("option");
    optionBtn.innerText = option;

    if (selectedAnswers[currentQuestion] === option) {
      optionBtn.classList.add("selected");
    }

    optionBtn.addEventListener("click", () => {
      selectedAnswers[currentQuestion] = option;
      showQuestion();
    });

    optionsDiv.appendChild(optionBtn);
  });

  previousBtn.disabled = currentQuestion === 0;

  if (currentQuestion === questions.length - 1) {
    nextBtn.innerText = "Finish";
  } else {
    nextBtn.innerText = "Next";
  }

  progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
};

// Move to the previous question
previousBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

// Move to the next question or show the result
nextBtn.addEventListener("click", () => {
  if (selectedAnswers[currentQuestion] === undefined) {
    alert("Please select an answer first.");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion();
  } else {
    showResult();
  }
});

// Calculate and display the final result
const showResult = () => {
  let score = 0;

  questions.forEach((question, index) => {
    if (selectedAnswers[index] === question.answer) {
      score++;
    }
  });

  let percentage = (score / questions.length) * 100;

  quizBox.style.display = "none";
  resultBox.style.display = "block";

  finalScore.innerText = `Your score is ${score} out of ${questions.length} (${percentage}%).`;

  if (percentage >= 80) {
    resultMessage.innerText = "Excellent work! You have a strong understanding of ES6.";
  } else if (percentage >= 50) {
    resultMessage.innerText = "Good effort! Keep practicing ES6 concepts.";
  } else {
    resultMessage.innerText = "Keep learning! Review the ES6 topics and try again.";
  }
};

// Restart the quiz
restartBtn.addEventListener("click", () => {
  currentQuestion = 0;
  selectedAnswers = [];
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  showQuestion();
});

// Start the quiz
showQuestion();
