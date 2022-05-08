"use strict";

const quizdata = [
  {
    question: "Which language runs in browser ?",
    A: "Java",
    B: "Python",
    C: "C",
    D: "JavaScript",
    correct: "D",
  },
  {
    question: "Which language runs in browser ?",
    A: "Java",
    B: "Python",
    C: "C",
    D: "JavaScript",
    correct: "D",
  },
  {
    question: "Which language runs in browser ?",
    A: "Java",
    B: "Python",
    C: "C",
    D: "JavaScript",
    correct: "D",
  },
  {
    question: "Which language runs in browser ?",
    A: "Java",
    B: "Python",
    C: "C",
    D: "JavaScript",
    correct: "D",
  },
];

const quiz = document.querySelector("#quiz");
const answerels = document.querySelectorAll(".answer");
const queel = document.getElementById("question");
const A_text = document.querySelector("#A_text");
const B_text = document.querySelector("#B_text");
const C_text = document.querySelector("#C_text");
const D_text = document.querySelector("#D_text");
const submit = document.querySelector("#submit");
let currquiz = 0;

let score = 0;

loadquiz();

function loadquiz() {
  deselectans();

  const currquizdata = quizdata[currquiz];

  queel.innerText = currquizdata.question;
  A_text.innerText = currquizdata.A;
  B_text.innerText = currquizdata.B;
  C_text.innerText = currquizdata.C;
  D_text.innerText = currquizdata.D;
}

function deselectans() {
  answerels.forEach((answerel) => (answerel.checked = false));
}

function getselected() {
  let answer;
  answerels.forEach((answerel) => {
    if (answerel.checked) {
      answer = answerel.id;
    }
  });
  return answer;
}

submit.addEventListener("click", function () {
  const answer = getselected();
  //   console.log(answer);
  if (answer) {
    if (quizdata[currquiz].correct === answer) {
      score++;
    }

    currquiz++;
    if (currquiz < quizdata.length) {
      loadquiz();
    } else {
      quiz.innerHTML = `
      <h2>You answerd correctly at ${score}/${quizdata.length} Question</h2>
      <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
