// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");
const dom_score_img = document.querySelector("#image");


dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

function goHome(){
  hide(dom_quiz);
  hide(dom_question);
  hide(dom_score);
  show(dom_start);
}

function goQuiz(){
  hide(dom_start);
  show(dom_quiz);
  show(dom_question);
  dom_question.textContent = questions[runningQuestionIndex].title;
  dom_choiceA.textContent = questions[runningQuestionIndex].choiceA;
  dom_choiceB.textContent = questions[runningQuestionIndex].choiceB;
  dom_choiceC.textContent = questions[runningQuestionIndex].choiceC;
  dom_choiceD.textContent = questions[runningQuestionIndex].choiceD;
}



// Hide a given element
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  // Display the quiz view,
  hide(dom_start);
  show(dom_quiz);
  show(dom_question);
  dom_question.textContent = questions[runningQuestionIndex].title;
  dom_choiceA.textContent = questions[runningQuestionIndex].choiceA;
  dom_choiceB.textContent = questions[runningQuestionIndex].choiceB;
  dom_choiceC.textContent = questions[runningQuestionIndex].choiceC;
  dom_choiceD.textContent = questions[runningQuestionIndex].choiceD;
}



function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the percent
  hide(dom_quiz);
  show(dom_score);
  let comment = "";
  let image = "";
  let percent = (score * 100) / 3;

  if (percent <= 20) {
    comment = "HUMM !";
    image += "./img/20.png";
  } else if (percent <= 40) {
    comment = "YOU CAN IMPROVE !";
    image += "./img/40.png";
  } else if (percent <= 60) {
    comment = "NOT BAD BUT... !";
    image += "./img/60.png";
  } else if (percent <= 80) {
    comment = " GOOD !";
    image += "./img/80.png";
  } else {
    comment = "CRAZY AMAZING !";
    image += "./img/100.png";
  }
  dom_score.innerHTML = "<p style = 'color : red; font-size:50px;'> your score : "+Math.round(percent)+"%</p>";  
  dom_score_img.src = image;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  
  if(answer == questions[runningQuestionIndex].correct){
    score += 1;
  }
  runningQuestionIndex+=1;
  if (runningQuestionIndex == 3) {
    renderSCore();
    return 0;
  }  
  onStart();
}




// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
