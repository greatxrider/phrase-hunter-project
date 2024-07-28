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
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction() {

    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {

    }
}
