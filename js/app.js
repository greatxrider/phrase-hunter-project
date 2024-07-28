/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById('btn__reset');
const keyboardRow = document.querySelectorAll('.keyrow');
const game = new Game();

startButton.addEventListener('click', (e) => {
    game.reset();
    game.startGame();
})

keyboardRow.forEach((row) => {
    row.addEventListener('click', (e) => {
        const buttonClicked = e.target.closest('button');
        if (buttonClicked) {
            game.handleInteraction(e.target);
        }
    });
});
