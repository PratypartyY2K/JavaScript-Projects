const quizData = [
  {
    question: "What is 10 + 4?",
    a: "12",
    b: "14",
    c: "16",
    d: "140",
    correct: "c",
  },
  {
    question: "What is 20 - 9?",
    a: "7",
    b: "13",
    c: "11",
    d: "29",
    correct: "c",
  },
  {
    question: "What is 7 x 3?",
    a: "21",
    b: "24",
    c: "25",
    d: "20",
    correct: "a",
  },
  {
    question: "What is 8 / 2?",
    a: "10",
    b: "2",
    c: "4",
    d: "6",
    correct: "c",
  },
  {
    question: "What is 8 ^ 2?",
    a: "8",
    b: "2",
    c: "64",
    d: "16",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementsById("submit");

let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];

  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

submitBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert('You finished! Give yourslef a PAT on the BACK');
  }
});
