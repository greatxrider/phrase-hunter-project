/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById('btn__reset');
const keyboardRow = document.querySelectorAll('.keyrow');
const game = new Game();

startButton.addEventListener('click', (e) => {
    game.startGame();
})

keyboardRow.forEach((row) => {
    row.addEventListener('click', (e) => {
        const activePhrase = game.activePhrase;
        if (e.target.tagName === 'BUTTON') {
            const letter = e.target;
            if (activePhrase.checkLetter(letter)) {
                activePhrase.showMatchedLetter(letter);
            } else {
                game.removeLife();
            }
        }
        if (game.checkForWin) {
            
        }
    });
});
