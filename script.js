const restartBtn = document.getElementById("restart-btn");
const allQuestions = {
  easy: [
    
  
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyper Tool Machine Language", "None"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which tag is used for a line break in HTML?",
    options: ["<br>", "<lb>", "<break>", "<line>"],
    answer: "<br>"
  },
  {
    question: "Which tag is used to display images in HTML?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    answer: "<img>"
  },
  {
    question: "HTML files are saved with which extension?",
    options: [".html", ".htm", ".doc", ".web"],
    answer: ".html"
  },
  {
    question: "Which HTML tag makes text bold?",
    options: ["<strong>", "<b>", "<bold>", "Both A and B"],
    answer: "Both A and B"
  }
],
  medium: [
    
    {
      question: "Which CSS property changes text color?",
      options: ["font-color", "color", "text-color", "background-color"],
      answer: "color"
    },
    
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Color Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which CSS property changes text color?",
    options: ["font-color", "color", "text-color", "background-color"],
    answer: "color"
  },
  {
    question: "How do you include external CSS?",
    options: ["<style src='style.css'>", "<css link='style.css'>", "<link rel='stylesheet' href='style.css'>", "<style href='style.css'>"],
    answer: "<link rel='stylesheet' href='style.css'>"
  },
  {
    question: "Which CSS property sets background color?",
    options: ["bgcolor", "background", "background-color", "color"],
    answer: "background-color"
  },
  {
    question: "How do you center text in CSS?",
    options: ["align: center", "text-align: center", "center-text: true", "text: center"],
    answer: "text-align: center"
  }
],

 
  hard: [
    
  {
    question: "Which method is used to add a class in JavaScript?",
    options: [".addClass()", ".setClass()", "element.classList.add()", "class.add()"],
    answer: "element.classList.add()"
  },
  {
    question: "What does '===' check in JavaScript?",
    options: ["Value", "Type", "Both type and value", "Only truthy value"],
    answer: "Both type and value"
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    options: ["function => {}", "() => {}", "=> {}", "() => []"],
    answer: "() => {}"
  },
  {
    question: "Which keyword declares a block-scoped variable?",
    options: ["var", "const", "let", "Both let and const"],
    answer: "Both let and const"
  },
  {
    question: "Which method is used to fetch data from APIs?",
    options: ["getData()", "fetch()", "load()", "http.get()"],
    answer: "fetch()"
  }
]

  
};

let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const questionContainer = document.getElementById("question-container");
const difficultySelect = document.getElementById("difficulty-select");

function startQuiz(level) {
  questions = allQuestions[level];
  difficultySelect.classList.add("hide");
  questionContainer.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(btn, currentQuestion.answer));
    optionsEl.appendChild(btn);
  });
}

function resetState() {
  nextBtn.classList.add("hide");
  optionsEl.innerHTML = "";
}

function selectAnswer(selectedBtn, correctAnswer) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => {
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    } else {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (selectedBtn.textContent === correctAnswer) {
    score++;
  }

  nextBtn.classList.remove("hide");
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionContainer.classList.add("hide");
  nextBtn.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreEl.textContent = `${score} / ${questions.length}`;
}
function restartQuiz() {
  scoreContainer.classList.add("hide");
  difficultySelect.classList.remove("hide");
  

}
restartBtn.addEventListener("click", restartQuiz);
