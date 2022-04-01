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

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // alert("Quiz completed");
      quiz.innerHTML = `
                <h2 style = "padding: 1rem; text-align: center;"> You answered ${score}/${quizData.length} questions correctly.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
