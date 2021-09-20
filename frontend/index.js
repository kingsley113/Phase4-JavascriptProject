// Identify page elements
const startScreen = document.getElementById("start-screen");
const characterForm = document.getElementById("character-form");
// const charNameInput = document.getElementById("characterName");

// Declare global variables
const currentCharacter;
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
	.then(function(response) {
		return response.json();
	})
	.then(function(object) {
			// Recieve question object - done
			renderQuestion(object);
		})
		.catch(function(error) {
			alert("Go back, we messed up and cant find this question!");
			console.log(error.message);
		})
	}
	
	// Render question on screen, adding event listener to each selection
function renderQuestion(questionObject) {
	// Finally the DOM manipulation!!!!
}

// When selected send fetch request to sever with question_id, character_id, & response #
	// Recieve confirmation back from server 
	// Update questions answered & response phrases for character
	// check if all 6 questions have been answered (questions answered = 6)
		// if yes, trigger end page
		// if no, fetch next question