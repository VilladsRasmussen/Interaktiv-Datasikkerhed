// Filerne med js skal altid gemmes i JS mappen, og må godt kaldes script.js
// Lad vær med at putte den i Body

'use strict'; // JavaScript har fået defineret disse fejl. use strict kan hjælpe med at vise fejl.
// Det er en god ide at bruge use strict i alle dine filer, så du kan finde fejlene hurtigere.

// JavaScript er en beholder for vores data.

// Der er forskellige syntakster:

// 1. Variabel: var (var er forældet)
var myVariable
// Der må bruruges _ og $ i disse variabler, men ellers ikke andre.

myVariable // camelCase
myVariable // PascalCase
myVariable // snake_case
my-myVariable // kebab-case (kan ikke bruges i JS)
myVariable // UPPER_SNAKE_CASE (kan ikke bruges i JS)

var myVariable = 'Hello World!'; // Variabel med tekst
var myVariable = 1234; // Variabel med tal
var myVariable = true; // Variabel med boolean (true/false)
var myVariable = null; // Variabel med null (intet værdi)
var myVariable = undefined; // Variabel med undefined (intet værdi)
var myVariable = Symbol('Hello World!'); // Variabel med symbol (unik værdi)

// 2. Konstant: const (kan ikke ændres)
const myConstant = 'Hello World!'; // Konstant med tekst

// 3. let (kan ændres)
let bottleContent = "Water";
bottleContent = "Soda"; // Indlsæes istedet

let question = "What's your name?"; // Variabel med tekst
let question2 = "What's your name?"; // Variabel med tekst
let quote = `He said, "Hello World!"`; // Bedre

// Hvis du ville lave matematik, skal du ikke bruge strings 

let number1 = 5;
let number2 = 10;
let result = number1 + number2; // 15

let myFloat = 0.56 ;

let isSunny = true; // Variabel med boolean (true/false) // Datatype
let isRainy = false; // Variabel med boolean (true/false)

let noValue = null; // Variabel med null (intet værdi) // Datatype
console.log(typeof noValue); // Output: object (null er et objekt i JS) // Datatype
// typeof kan bruges til at finde ud af hvilken datatype det er

// Conditional statements (betingede udsagn) - if/else

if (isSunny) {
    console.log("It's sunny outside!"); //output: It's sunny outside!
} else if (isRainy) {
    console.log("It's rainy outside!"); //output: It's rainy outside!
} else {
    console.log("The weather is unpredictable!"); //output: The weather is unpredictable!
}



let dice;
dice = Math.floor(Math.random() * 6) + 1; // Variabel med tal
// Den anden er ikke blevet læst, den er barev blevet overskrevet
// Floor afrunder tal til det nærmeste heltal.
// Random generere et tilfældigt tal mellem 0 og 1. Det ganges med 6 for at ligne en terning.

switch(dice) {
    case 1: console.log("You rolled a 1!"); 
    break; //output: You rolled a 1!
    case 2: console.log("You rolled a 2!"); 
    break; //output: You rolled a 2!
    case 3: console.log("You rolled a 3!"); 
    break; //output: You rolled a 3!
    case 4: console.log("You rolled a 4!"); 
    break; //output: You rolled a 4!
    case 5: console.log("You rolled a 5!"); 
    break; //output: You rolled a 5!
    case 6: console.log("You rolled a 6!"); 
    break; //output: You rolled a 6!
    default: console.log("Invalid roll!"); //output: Invalid roll!
}
//Opsætter man dem sådan her giver det en bedre syntaks.



