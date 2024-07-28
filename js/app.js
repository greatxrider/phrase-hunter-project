/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startButton = document.getElementById('btn__reset');
const keyboardRow = document.querySelectorAll('.keyrow');
const game = new Game();

/**
 * Event listener for the start button click event.
 * Resets the game and starts a new game.
 * 
 * @param {Event} e - The event object associated with the click event.
 */
startButton.addEventListener('click', (e) => {
    game.reset();
    game.startGame();
})

keyboardRow.forEach((row) => {
    const buttons = [...row.children];

    /**
    * Event listener for the row click event.
    * Checks if a button was clicked and handles the interaction.
    * 
    * @param {Event} e - The event object associated with the click event.
    */
    row.addEventListener('click', (e) => {
        const buttonClicked = e.target.closest('button');
        if (buttonClicked) {
            game.handleInteraction(e.target);
        }
    });

    /**
     * Adds keydown event listeners to each button element.
     * When a key is pressed, if the key matches the text content of a button,
     * the `handleInteraction` method of the `game` object is called with that button.
     * 
     * @param {NodeList|Array} buttons - A collection of button elements to attach event listeners to.
     */
    buttons.forEach((button) => {
        /**
         * Event listener for the keydown event.
         * Compares the pressed key with the text content of the button and
         * invokes the `handleInteraction` method if they match.
         * 
         * @param {KeyboardEvent} e - The event object associated with the keydown event.
         */
        document.addEventListener('keydown', (e) => {
            if (overlay.style.display === 'none') {
                const keyDown = e.key.toLowerCase();
                if (keyDown === button.textContent) {
                    button.click();
                }
            }
        });
    })
});
