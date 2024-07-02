"use strict";

/*First select the element from page
on that element,read text content....
textContent=start guessing,w/o class



Now i Make JavaScript interact
with a webpage= doing DOM() Manipulation.

DOM-Document Object Model is a structured representation of HTML documents.

The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them.


console.log(document.querySelector(".message").textContent); /*logged the result
to the console to see it. 

document.querySelector(".message").textContent =
  "😀 Correct!"; /*set this content to something else,this change will be on browser
  We manipulated the text content of one the DOM notes
  */

/*
document.querySelector(".Secret-number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").textContent = 10;

console.log(document.querySelector(".Secret-number").textContent);
console.log(document.querySelector(".score").textContent);

console.log(document.querySelector(".score").textContent);

/*At the beggining it has nothing
    Query selector method expects at least one argument.
    As we went to the HTML file, and then saved this JavaScript file,
    we didn't have any string here,or any parameter yet.
    
    but to get the value

console.log(
  document.querySelector(".guess").value
); /*In the beggining ,there is none,so it returns empty space in consolle 

document.querySelector(".guess").value = 23;
/*Instead of writting a number,here it is js who wrote it for us 

console.log(document.querySelector(".guess").value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".Secret-number").textContent = secretNumber;

let score = 25;
document.querySelector(".score").textContent = score;

document.querySelector(".btn").addEventListener("click", function () {
  /*whenever we get something
  from the user interface, for example, from an input field,it usually always is a string hence convert and save to some variable guess.*/
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  /*whenever we get something
  from the user interface, for example, from an input field,it usually always is a string.*/

  if (!guess) {
    document.querySelector(".message").textContent = " ⛔ No number entered!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "😀 Correct!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too high!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

/*
We selected button using querySelector,
Then we use the addEventListner method on that element to attach an event handler(function)
This function will only be called
as soon as the event happens.


 */
