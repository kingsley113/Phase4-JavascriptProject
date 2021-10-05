# Phase4-JavascriptProject - Who Are You? - README

## Description
"Who Are You?" is a simple single page JavaScript application created to help generate a backstory for a role playing game character, such as Dungeons & Dragons, etc. The app is focused on ease of use to create the character and also to allow a completely random character to be created. 

The app uses a Javacript/HTML/CSS front end to do the heay lifting, and a Rails backend API with a PostgreSQL Database to store and retireve data. 

## Install Instruction
To install this app and run a local copy, follow these steps:

Fork and download the repository
Open the package in your favorite IDE
Run the command: 'bundle install' to install all required gems
Run the command: 'npm install' to install Node.js
Start a local rails server with the command 'rails s'
Start the Node servier with the commant 'npm start'   
Open 'index.html' in your browser and the app should be fully functional.

## User Instructions
Title Screen:
1. Enter a character name and submit to begin answering the questions.

Question screens:
1. There are a total of 6 questions to answer, each with 6 possible options to select from.
2. Select an answer by clicking on its box to continue
3. A random box may be chosen by selecting the "Roll" button in the center, this will roll the dice and pick a random answer
4. Continue selecting questions until presented the final screen.

Final Screen:
1. The final results of your story will be presented in an animated fashion, you can then copy the text and do what you with with it.
2. To load another characters story, select from that character from the dropdown list and submit, the page will then reload with that story.
3. To start over simply select start over and the whole app will reload from the beginning. 

## License
MIT open source license, Copyright 2021 Cameron Kingsley

## Contributing
If you notice a problem with the program that you believe needs improvement but you're unable to make the change yourself, you should raise a Github issue containing a clear description of the problem.

If you see an opportunity for improvement and can make the change yourself go ahead and use a typical git workflow to make it happen:

Fork this program's repository
Make the change on your fork, with descriptive commits in the standard format
Open a Pull Request against this repo
The changes will be reviewed and approved or commented in due course.