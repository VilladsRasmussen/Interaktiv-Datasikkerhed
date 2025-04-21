var myGreeting = "Hello World!";
// var bruges ikke længere, og anbefales ikke længere

console.log(myGreeting); // Output: Hello World!

// ------------------------------------------------------

let myName = "Molly"; // Kan ændres senere
console.log(myName); // Output: Molly
const yearOfBirth = 2019; // Kan ikke ændres senere
console.log(yearOfBirth); // Output: 2019

/* let firstName = prompt("Hvad er dit fornavn?");
console.log(firstName); // Output: Dit fornavn */

const myBtn = document.querySelector("#myBtn"); // Vælger et element med id'et "myBtn" fra HTML-dokumentet
// Går ind og leder efter et element med id'et "myBtn"
console.log(myBtn); // Output: <button id="myBtn">Click me!</button>

const myBtnId = myBtn.id; // Henter id'et fra knappen
console.log(myBtnId); // Output: myBtn

// Der anbnefales at bruges const det meste af tiden.