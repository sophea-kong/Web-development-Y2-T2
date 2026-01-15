const editContainer = document.querySelector("#ed");
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

questions.forEach(element => {
    let editBar = `
    <div>
        <p style='background-color: gray; height : 50px; display : flex; align-items : center; padding : 5px;'>${element.title}</p>
        <button style='background-color: red;'> edit </button>
        <button> delete </button>
    </div>
    `
    editContainer.innerHTML += editBar;
    
});