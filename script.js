const quizData = [
  {
    question: "How old is Gerald?",
    a: "17",
    b: "20",
    c: "23",
    d: "25",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2022 ",
    a: "JavaScript",
    b: "Python",
    c: "C",
    d: "Java",
    correct: "d",
  },
  {
    question: "What is the name of the richest man on earth in 2022 ",
    a: "Elon Musk",
    b: "Bill Gates",
    c: "Jeff Bezos",
    d: "Bernard Arnault",
    correct: "a",
  },
  {
    question: "Which country is the biggest in the world",
    a: "China",
    b: "Canada",
    c: "Russia",
    d: "United States",
    correct: "c",
  },
  {
    question: "What is the tallest mountain in the world",
    a: "K2",
    b: "Everesst",
    c: "Makalu",
    d: "Lhotse",
    correct: "b",
  },
];

const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  //   console.log(currentQuizData.question, currentQuizData.a, currentQuizData.b);
}

submitButton.addEventListener("click", () => {
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    alert("congrats, you have completed the first part of this app.");
  }
});
