/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        const letters = this.phrase.split('');
        const ul = phraseDiv.querySelector('ul');

        ul.innerHTML = '';

        letters.forEach(letter => {
            const li = document.createElement('li');
            if (letter !== ' ') {
                li.className = `hide letter ${letter}`;
                li.textContent = letter;
            } else {
                li.className = 'space';
                li.textContent = ' ';
            }
            ul.appendChild(li);
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter)
    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        matchedLetters.forEach((match) => {
            match.classList.remove('hide');
            match.classList.add('show');
        });
    };
};
