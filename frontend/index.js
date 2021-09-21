// Identify page elements
let startScreen;
let characterForm;

// Set page elements on DOM load
document.addEventListener("DOMContentLoaded", (event) => {
  startScreen = document.getElementById("start-screen");
  characterForm = document.getElementById("character-form");
  console.log("DOM fully loaded.");
  initialize();
});

// Declare global variables
let currentCharacter;
let currentQuestion = 0;

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
    body: JSON.stringify({ formData }),
  };

  fetch("http://localhost:3000/characters", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
      // do something with this success return object TODO:
      // show first question
      console.log(object);
      // createCharacter(object);
      fetchQuestion(currentCharacter.currentQuestionNo());
    })
    .catch(function (error) {
      alert("An error in the witchcraft occured!");
      console.log(error.message);
    });
}

// Fetch question - pass in current question # requested
async function fetchQuestion(questionNumber) {
  const configurationObject = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ questionNumber }),
  };

  await fetch("http://localhost:3000/characters", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      // Recieve question object - done
      renderQuestion(object);
    })
    .catch(function (error) {
      alert("Go back, we messed up and cant find this question!");
      console.log(error.message);
    });
}

// Render question on screen, adding event listener to each selection
function renderQuestion(questionObject) {
  // Finally the DOM manipulation!!!!
  // hide title screen
  startScreen.classList.add("hidden");
  // Remove previous question elements
  // create 6 question elements, each one should have an id of 'question-response-x' this will determine the location on screen
  // for (const answer of questionObject.responses) {  }
  // create center round thing element
  // show dice roller-thingy method in circle element, probably call another function to show this
  // append question elements
}

// When selected send fetch request to sever with question_id, character_id, & response #
// Recieve confirmation back from server
// Update questions answered & response phrases for character
// check if all 6 questions have been answered (questions answered = 6)
// if yes, trigger end page
// if no, fetch next question
