// Conditional Statements
// Man har det her scenarie: Hvis A sker, så sker B.
// Det er det samme som at sige: Hvis A er sand, så gør B. Ellers gør C.
// Den kan hente noget data, også kan vi sige til hvad den skal gøre, ud fra den data den får.
// Man skal virkelig sidde med det, for at blive dygtig til det.
// At man bare har forståelsen, kan være rigtig værdifuldt.
// Animationer kan ske i JavaScript.
// Forløbet bliver tilpasset, så vi kun skal gøre det,d er er realitisk for projektet.
// Det er ret fedt at lærer, men det kan goså være svært.

let username = '';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger

let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

isNightTime ? console.log('Turn on the lights!') 
: console.log('Turn off the lights!');

let stopLight = 'yellow';

if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}



greetWorld(); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}

function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole');

  function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!

  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList()


  
  function monitorCount(rows, columns) {
    return rows * columns
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);
  
  const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };

  const squareNum = num => num * num;

  const plantNeedsWater = day => day === 'Wednesday' ? true : false;

  let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle']; // Laver lister

  



