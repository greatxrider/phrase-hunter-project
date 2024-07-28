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

    checkLetter() {

    }

    showMatchedLetter() {

    }
}
