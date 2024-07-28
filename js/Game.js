/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
const overlay = document.getElementById('overlay');
const scoreboard = document.getElementById('scoreboard');
const ol = scoreboard.querySelector('ol');
const phrase = document.getElementById('phrase');
const ul = phrase.querySelector('ul');
const img = ol.querySelectorAll('img');
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
        const imgElement = ol.querySelector(`[src='images/liveHeart.png']`);

        if (imgElement) {
            imgElement.setAttribute('src', 'images/lostHeart.png');
        }

        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        let message = document.getElementById('game-over-message');
        let overlayClass = '';

        if (gameWon) {
            message.innerHTML = 'Great job!';
            overlayClass = 'win';
        } else {
            message.innerHTML = 'Sorry, better luck next time!';
            overlayClass = 'lose';
        }

        overlay.className = overlayClass;
        overlay.classList.remove('start');
        overlay.style.display = 'inherit';
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const letter = button.textContent;
        if (this.activePhrase.checkLetter(letter)) {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.classList.add('wrong');
            this.removeLife();
        }
        button.disabled = true;
    };

    /**
     * Resets the game state by performing the following actions:
     * - Removes all children from the specified `ul` element.
     * - Resets the class and state of each key in the keyboard rows.
     * - Restores the images of hearts to their original state.
     */
    reset() {
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }

        keyboardRow.forEach((row) => {
            for (let i = 0; i < row.children.length; i++) {
                row.children[i].className = 'key';
                row.children[i].disabled = false;
            }
        });

        img.forEach((img) => {
            img.src = 'images/liveHeart.png';
        })
    };
};
