# Phrase Hunter Project

## Overview
This project is a browser-based, word guessing game: "Phrase Hunter." It uses JavaScript and OOP (Object-Oriented Programming) to select a random, hidden phrase, which a player tries to guess, by clicking letters on an onscreen keyboard.

This project, show off my skills, a fun app, and a good understanding of the principles of Object-Oriented Programming.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Technologies Used](#technologies-used)
5. [Project Structure](#project-structure)
6. [Additional Notes](#additional-notes)
7. [License](#license)

## Features
- **Phrase Class**: Represents the phrase a player tries to guess, with methods to display the phrase, check guessed letters, and show matched letters.
- **Game Class**: Manages the game state, logic, and interactions, including methods to start the game, handle player interactions, remove lives, check for a win, and end the game.
- **Onscreen Keyboard**: Enables players to guess letters by clicking buttons.
- **Heart Display**: Tracks the player's remaining lives.
- **Dynamic Phrase Display**: Updates the display based on player guesses.
- **Keyboard Functionality**: Allows players to use their physical keyboard to guess letters (Extra Credit).
- **Custom Styles**: Experiment with styles like color, background color, font, borders, shadows, transitions, animations, and filters (Extra Credit).

## Installation
1. Create a GitHub repo for this project.
2. Download the project files and unzip them.
3. Add the unzipped files to the root of your project folder.
4. Ensure the file and folder structure remains unchanged.
5. Commit the initial setup to your GitHub repo.

## Usage
1. Open the project folder in your text editor.
2. Open and view the `js` files (`app.js`, `Phrase.js`, `Game.js`).
3. Open `index.html` in a web browser to load the game.
4. Click the "Start Game" button to begin.
5. Use the onscreen keyboard or your physical keyboard to guess letters.

## Technologies Used
- HTML
- CSS
- JavaScript

## Project Structure
phrase-hunter-project/
│
├── css/
│ └── styles.css
│
├── images/
│ └── liveHeart.png
│ └── lostHeart.png
│
├── js/
│ └── app.js
│ └── Phrase.js
│ └── Game.js
│
├── index.html
└── README.md

## Additional Notes
- **Code Comments**: Replace provided comments with your own to describe your code.
- **Code Readability**: Ensure consistent spacing and indentation.
- **Quality Assurance Testing**: Test all functionality and monitor the console for bugs.
- **Resetting the Game**: Remove all `li` elements from the phrase `ul` element, enable all keyboard buttons, and reset heart images between games.

## Extra Credit Features
- **Keyboard Functionality**: Allow players to use their physical keyboard to enter guesses.
- **Custom Styles**: Make the project your own with custom styles and document these changes in the README and submission notes.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
