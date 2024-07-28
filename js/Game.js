/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Life is like a box of chocolates'),
            new Phrase('There is no place like home'),
            new Phrase('The early bird catches the worm'),
            new Phrase('To infinity and beyond'),
            new Phrase('May the force be with you')
        ];
        this.activePhrase = null;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        let randomIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomIndex];
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const phrase = document.getElementById('phrase');
        const ul = phrase.querySelector('ul');
        const remainingLetters = ul.querySelectorAll('.hide').length;
        if (remainingLetters === 0) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++;
        const scoreboard = document.getElementById('scoreboard');
        const ol = scoreboard.querySelector('ol');
        const lastItem = ol.lastElementChild;
        ol.removeChild(lastItem);
        let remainingLives = ol.children.length;

        if (remainingLives > 0) {
            remainingLives -= this.missed;
        } else {
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        if (gameWon) {
            console.log('We Won!');
        } else {
            console.log('Game Over!');
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const letter = button.textContent;

        if (this.activePhrase.checkLetter(letter)) {
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            this.removeLife();
        }
    };
};
