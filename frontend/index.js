// Declare global variables
let currentCharacter;
let startScreen;
let characterForm;
let responseTextCollection;
let previousResponse = 1;
// Identify page elements
// Set page elements on DOM load
document.addEventListener("DOMContentLoaded", (event) => {
  startScreen = document.getElementById("start-screen");
  characterForm = document.getElementById("character-form");
  questionContainer = document.getElementById("question-container");
  questionText = document.getElementById("question");
  dice = document.getElementById("dice");
  resultsContainer = document.getElementById("results-container");

  responseContainerCollection = document.querySelectorAll(
    ".response-container"
  );
  responseTextCollection = document.querySelectorAll(".response");

  // console.log("DOM fully loaded.");
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
  previousResponse = 1;
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
  // questionContainer.classList.add("visible");
  // questionContainer.classList.remove("hidden");
  questionContainer.classList.toggle("visible", "hidden");
  animateToggleResponseOptions(previousResponse);

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
  // Hide response buttons one at at time between questions
  previousResponse = number;
  animateToggleResponseOptions(number);

  const formData = {
    character_id: currentCharacter.id(),
    question_id: currentCharacter.currentQuestionNo(),
    response: number,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ response: formData }),
  };

  fetch("http://localhost:3000/responses", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      updateCharacter.call(object);
    })
    .catch(function (error) {
      console.log(error.message);
      alert("An error in the witchcraft occured! Try again.");
    });
}

function animateToggleResponseOptions(startingNumber) {
  let currentBox = startingNumber;
  for (let i = 1; i <= 6; i++) {
    toggleResponseBox(currentBox, i * 120);

    if (currentBox === 6) {
      currentBox = 1;
    } else {
      currentBox += 1;
    }
  }
}

function toggleResponseBox(number, delay) {
  setTimeout(function () {
    responseContainerCollection[number - 1].classList.toggle("hidden");
  }, delay);
}

// Update questions answered & response phrases for character
function updateCharacter() {
  // update phrase
  currentCharacter.responsePhrases[currentCharacter.questionsAnswered] =
    this.character[`trait${currentCharacter.questionsAnswered + 1}`];
  // update current question
  currentCharacter.questionsAnswered += 1;

  if (currentCharacter.questionsAnswered === 6) {
    setTimeout(function () {
      renderFinalResults();
    }, 600);
  } else {
    setTimeout(function () {
      fetchQuestion(currentCharacter.currentQuestionNo());
    }, 600);
  }
}

function renderFinalResults() {
  console.log("rendering final results page");
  // Reset the story text, for when reloading a different character
  for (let i = 1; i <= 6; i++) {
    const traitEl = document.getElementById(`trait${i}`);
    traitEl.innerText = "";
    traitEl.classList.add("hidden");
    traitEl.classList.remove("visible");
  }
  // Hide questions page
  questionContainer.classList.remove("visible");
  questionContainer.classList.add("hidden");
  // Show title of character
  setTimeout(function () {
    const resultTitle = document.getElementById("result-title");
    resultTitle.innerText = currentCharacter.name() + ", who are you?";
  }, 1000);
  // Show final screen div
  resultsContainer.classList.toggle("visible", "hidden");
  // Animate through character phrases
  for (let i = 1; i <= 6; i++) {
    const traitEl = document.getElementById(`trait${i}`);
    setTimeout(function () {
      traitEl.innerText = currentCharacter.responsePhrases[i - 1];
      traitEl.classList.remove("hidden");
      traitEl.classList.add("visible");
    }, i * 2500);
  }
  // Show final phrase
  setTimeout(function () {
    const finalPhrase = document.getElementById("final-phrase");
    finalPhrase.classList.add("visible");
    finalPhrase.classList.remove("hidden");
  }, 17500);
  // Show 'start over' button
  setTimeout(function () {
    const endUi = document.getElementById("end-ui");
    endUi.classList.remove("hidden");
    endUi.classList.add("visible");
  }, 18500);
  // Show 'select existing character' button
  fetchExistingCharacters();
  initializeLoadCharacterForm();
}

async function fetchExistingCharacters() {
  await fetch(`http://localhost:3000/characters`)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log("good resposne from existing characters request");
      populateExistingCharactersDropdown(object);
    })
    .catch(function (error) {
      alert("Go back, we messed up and cant get all the characters!");
      console.log(error.message);
    });
}

function populateExistingCharactersDropdown(characters) {
  const dropdownMenu = document.getElementById("select-character");
  for (const character of characters) {
    let option = document.createElement("option");
    option.innerText = character.name;
    option.value = character.id;
    dropdownMenu.appendChild(option);
  }
}

// TODO: make fetch of all characters only return name and id, no need for all info
// on form submit, fetch single character
// assign character as current character
// re-render final page with new character info
function initializeLoadCharacterForm() {
  document
    .getElementById("existing-character-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      // console.log(document.getElementById("select-character").value);
      fetchExistingCharacter(document.getElementById("select-character").value);
    });
}

async function fetchExistingCharacter(id) {
  await fetch(`http://localhost:3000/characters/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log("good resposne from existing characters request");
      reloadCurrentCharacter(object);
    })
    .catch(function (error) {
      alert("Go back, we messed up and cant get all the characters!");
      console.log(error.message);
    });
}

function reloadCurrentCharacter(characterObject) {
  console.log(characterObject);
  newCharacter = new Character();
  newCharacter._name = characterObject.name;
  newCharacter._id = characterObject.id;
  newCharacter.questionsAnswered = 6;
  for (let i = 0; i < 6; i++) {
    newCharacter.responsePhrases[i] = characterObject[`trait${i + 1}`];
  }
  console.log(newCharacter);
  currentCharacter = newCharacter;
  renderFinalResults();
}

// TODO: Update styling of title page
// TODO: Update styling of final page
// TODO: Implement reset function
// TODO: Implement music?
