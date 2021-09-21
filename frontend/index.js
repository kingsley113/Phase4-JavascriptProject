// Declare global variables
let currentCharacter;
let startScreen;
let characterForm;
let responseTextCollection;

// Identify page elements
// Set page elements on DOM load
document.addEventListener("DOMContentLoaded", (event) => {
  startScreen = document.getElementById("start-screen");
  characterForm = document.getElementById("character-form");
  questionContainer = document.getElementById("question-container");
  questionText = document.getElementById("question");

  responseContainerCollection = document.querySelectorAll(
    ".response-container"
  );
  responseTextCollection = document.querySelectorAll(".response");

  console.log("DOM fully loaded.");
  initialize();
});

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

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }
}

// Initialize
function initialize() {
  // Listen for Character form submit
  characterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form was submitted! Lets get this show on the road!");
    submitCharacter(characterForm.querySelector("#characterName").value);
  });

  for (let i = 0; i < 6; i++) {
    responseContainerCollection[i].addEventListener("click", (event) => {
      submitResponse(i + 1);
    });
  }
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

function createCharacter() {
  currentCharacter = new Character(this.name, this.id, 0);
  // console.log(currentCharacter);
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
  // console.log(questionObject);
  // console.log("We are in the render question function!! :)");
  // hide title screen
  startScreen.classList.add("hidden");
  // Remove previous question elements TODO: remove the event listeners

  // Create Question element
  // console.log("Question: " + questionObject.question);
  questionText.textContent = questionObject.question;
  questionContainer.classList.add("visible");
  questionContainer.classList.remove("hidden");

  // Iterate through and make 6 response elements
  for (let i = 0; i < 6; i++) {
    // console.log(questionObject[`answer${i}`]);
    responseTextCollection[i].textContent = questionObject[`answer${i + 1}`];
  }
}

// When selected send fetch request to sever with question_id, character_id, & response #
function submitResponse(number) {
  console.log(
    `Fake submitting response #${number} for question #${currentCharacter.currentQuestionNo()}, for the character: ${currentCharacter.name()}, id: ${currentCharacter.id()}`
  );
}
// Recieve confirmation back from server
// Update questions answered & response phrases for character
// check if all 6 questions have been answered (questions answered = 6)
// if yes, trigger end page
// if no, fetch next question
