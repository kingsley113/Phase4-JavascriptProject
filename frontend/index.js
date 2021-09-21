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
  dice = document.getElementById("dice");

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
      // console.log("Good response from server, lets make a JS character!");
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
}

// Fetch question - pass in current question # requested
async function fetchQuestion(questionNumber) {
  await fetch(`http://localhost:3000/questions/${questionNumber}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      renderQuestion(object);
    })
    .catch(function (error) {
      alert("Go back, we messed up and cant find this question!");
      console.log(error.message);
    });
}

// Render question
function renderQuestion(questionObject) {
  // hide title screen
  startScreen.classList.add("hidden");

  // Create Question element
  questionText.textContent = questionObject.question;
  questionContainer.classList.add("visible");
  questionContainer.classList.remove("hidden");

  dice.addEventListener("click", rollDice);

  // Iterate through and update the 6 response elements
  for (let i = 0; i < 6; i++) {
    responseTextCollection[i].textContent = questionObject[`answer${i + 1}`];
  }
}

function rollDice() {
  dice.removeEventListener("click", rollDice);
  let randNumber;
  for (let i = 0.3; i < 3; i *= 1.05) {
    randNumber = Math.ceil(Math.random() * 6);
    let delay = i * 1000;
    (function (delay, randNumber) {
      setTimeout(function () {
        dice.src = `public/images/dice-${randNumber}.png`;
      }, delay);
    })(delay, randNumber);
  }
  setTimeout(function () {
    submitResponse(randNumber);
  }, 4000);
}

// When selected send fetch request to sever with question_id, character_id, & response #
function submitResponse(number) {
  // console.log(
  //   `Fake submitting response #${number} for question #${currentCharacter.currentQuestionNo()}, for the character: ${currentCharacter.name()}, id: ${currentCharacter.id()}`
  // );

  const formData = {
    response: {
      character_id: currentCharacter.id(),
      question_id: currentCharacter.currentQuestionNo,
      response: number,
    },
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ formData }),
  };

  fetch("http://localhost:3000/responses", configurationObject)
    .then(function (response) {
      return response.json();
    })
    // Recieve confirmation back from server
    .then(function (object) {
      // updateCharacter.call(object); TODO:
    })
    .catch(function (error) {
      console.log(error.message);
      alert("An error in the witchcraft occured! Try again.");
    });
}
// Update questions answered & response phrases for character
// check if all 6 questions have been answered (questions answered = 6)
// if yes, trigger end page
// if no, fetch next question
