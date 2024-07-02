"use strict";

/*First select the element from page
on that element,read text content....
textContent=start guessing,w/o class
*/

/*
Now i Make JavaScript interact
with a webpage= doing DOM() Manipulation.

DOM-Document Object Model is a structured representation of HTML documents.

The DOM allows us to use JavaScript to access HTML elements and styles in order to manipulate them.
*/

console.log(document.querySelector(".message").textContent); /*logged the result
to the console to see it. */
document.querySelector(".message").textContent =
  "😀 Correct!"; /*set this content to something else,this change will be on browser
  We manipulated the text content of one the DOM notes
  */
console.log(document.querySelector(".message").textContent);
