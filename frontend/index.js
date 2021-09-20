// Identify page elements
const startScreen = document.getElementById("start-screen");
const characterForm = document.getElementById("character-form");
// const charNameInput = document.getElementById("characterName");

// Declare global variables
const currentCharacter;
let currentQuestion = 0;

// Declare Object Classes
class Character {
  constructor(name, id, questionsAnswered) {
    (this._name = name),
		(this._id = id),
		(this.questionsAnswered = questionsAnswered),
		(this.responsePhrases = []);
  }

	currentQuestionNo() {
		return this.questionsAnswered + 1
	}
}

function createCharacter() {
	currentCharacter = new Character(this.name, this.id, 0)
	// This will need some work to get the right info out of the object TODO:
	console.log(currentCharacter);
}

// Send Character name to create new character and trigger start of questions
function submitCharacter(characterName) {
  const formData = { characterName: characterName };

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
      createCharacter(object);
    })
    .catch(function (error) {
      alert("An error in the witchcraft occured!");
      console.log(error.message);
    });
}
