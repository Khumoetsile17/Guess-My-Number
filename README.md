# Guess-My-Number

Overview

"Guess My Number" is a simple number guessing game implemented in JavaScript, HTML, and CSS. The objective of the game is to guess a secret number between 1 and 20. The game provides feedback on whether the guess is too high, too low, or correct. Players can also track their score and highscore.

Features

Randomly generated secret number between 1 and 20.
User feedback on guesses (too high, too low, correct).
Score tracking.
Highscore tracking.
DOM manipulation to update the game interface dynamically.

How to Play

1. Open the game in your web browser.
2. Enter your guess in the input field.
3. Click the "Check!" button to submit your guess.
4. The game will provide feedback:
   If no number is entered, it will display "⛔ No number entered!".
   If the guess is correct, it will display "😀 Correct!" and update the background color and secret number display.
   If the guess is too high, it will display "📈 Too high!" and decrease the score.
   If the guess is too low, it will display "📉 Too low!" and decrease the score.

5. If the score reaches 0, it will display "💥 You lost the game!".
6. Click the "Again!" button to reset the game and play again.

Code Explanation

HTML Structure
The HTML structure includes elements for displaying the secret number, score, highscore, messages, input field, and buttons.

JavaScript Logic

- DOM Manipulation: JavaScript is used to manipulate the DOM elements to update the game state and display feedback to the player.

- Event Listeners: Event listeners are added to the "Check!" and "Again!" buttons to handle user interactions.

- Game Logic:
  A secret number is generated randomly between 1 and 20.
  The player's guess is checked against the secret number.
  Feedback is provided based on whether the guess is too high, too low, or correct.
  The score is updated accordingly.
  The highscore is updated if the player achieves a new highscore.
  The game can be reset to play again.

CSS Styling

The CSS provides basic styling for the game elements, including colors, fonts, and layout.

How to Run

1. Save the HTML, CSS, and JavaScript code in the respective files (index.html, style.css, and script.js).
2. Open the index.html file in your web browser.
3. Start guessing the secret number and enjoy the game!
