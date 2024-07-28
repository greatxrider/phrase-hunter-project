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
        if (e.target.tagName === 'BUTTON') {
            game.handleInteraction(e.target);
        }
    });
});
