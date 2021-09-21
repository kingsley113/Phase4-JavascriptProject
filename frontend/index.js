// Identify page elements
let startScreen;
let characterForm;

// Set page elements on DOM load
document.addEventListener("DOMContentLoaded", (event) => {
  startScreen = document.getElementById("start-screen");
  characterForm = document.getElementById("character-form");
  questionContainer = document.getElementById("question-container");
  console.log("DOM fully loaded.");
  initialize();
});

// Declare global variables
let currentCharacter;
// let currentQuestion = 0;

// Declare Object Classes
class Character {
  constructor(name, id, questionsAnswered = 0) {
    (this._name = name),
      (this._id = id),
      (this.questionsAnswered = questionsAnswered),
      (this.responsePhrases = []);
  }

  currentQuestionNo() {
    return this.questionsAnswered + 1;
  }
}

// Event Listeners
function initialize() {
  // Listen for Character form submit
  characterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form was submitted! Lets get this show on the road!");
    // console.log(characterForm.querySelector("#characterName").value);
    submitCharacter(characterForm.querySelector("#characterName").value);
  });
}

function createCharacter() {
  currentCharacter = new Character(this.name, this.id, 0);
  // This will need some work to get the right info out of the object TODO:
  console.log(currentCharacter);
}

// Send Character name to create new character and trigger start of questions
function submitCharacter(characterName) {
  const formData = { name: characterName };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ character: formData }),
  };

  fetch("http://localhost:3000/characters", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log("Good response from server, lets make a JS character!");
      createCharacter.call(object);
      fetchQuestion(currentCharacter.currentQuestionNo());
    })
    .catch(function (error) {
      console.log(error.message);
      alert("An error in the witchcraft occured! Try again.");
    });
}

// Fetch question - pass in current question # requested
async function fetchQuestion(questionNumber) {
  await fetch(`http://localhost:3000/questions/${questionNumber}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      // console.log(object);
      renderQuestion(object);
    })
    .catch(function (error) {
      alert("Go back, we messed up and cant find this question!");
      console.log(error.message);
    });
}

// Render question on screen, adding event listener to each selection
function renderQuestion(questionObject) {
  console.log(questionObject);
  console.log("We are in the render question function!! :)");
  // Finally the DOM manipulation!!!!
  // hide title screen
  startScreen.classList.add("hidden");
  // Remove previous question elements TODO:
  // create 6 question elements, each one should have an id of 'question-response-x' this will determine the location on screen
  // Create Question element
  console.log("Question: " + questionObject.question);
  const question = document.createElement("h2");
  question.innerHTML = questionObject.question;
  question.setAttribute("id", "question");
  questionContainer.appendChild(question);
  questionContainer.classList.add("visible");
  questionContainer.classList.remove("hidden");

  // Iterate through and make 6 response elements
  for (let i = 1; i <= 6; i++) {
    console.log(questionObject[`answer${i}`]);

    // create answer elements
    const responseContainer = document.createElement("div");
    responseContainer.classList.add("response-container");

    const respText = document.createElement("p");
    respText.innerHTML = questionObject[`answer${i}`];

    responseContainer.appendChild(respText);
    responseContainer.setAttribute("id", `question-response-${i}`);
    // append question elements
    questionContainer.appendChild(responseContainer);
  }
  // create center round thing element

  // show dice roller-thingy method in circle element, probably call another function to show this
}

// When selected send fetch request to sever with question_id, character_id, & response #
// Recieve confirmation back from server
// Update questions answered & response phrases for character
// check if all 6 questions have been answered (questions answered = 6)
// if yes, trigger end page
// if no, fetch next question
