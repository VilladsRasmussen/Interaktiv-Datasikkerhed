'use strict';


// ADGANGSKODE TJEKNING:
// ------------------------------------------------------

function vurderAdgangskode(strofe) {
    let styrke = 0;

    // Længde
    if (strofe.length >= 8) styrke += 1; // Min 8 tegn

    // Indeholder både store og små bogstaver
    if (/[a-z]/.test(strofe) && /[A-Z]/.test(strofe)) styrke += 1;

    // Indeholder tal
    if (/\d/.test(strofe)) styrke += 1;

    // Indeholder specialtegn
    if (/[!@#$%^&*(),.?":{}|<>]/.test(strofe)) styrke += 1;

    // Tjek om adgangskoden ikke indeholder ord eller talrækkefølger
    if (!/1234|password|qwerty|abc/.test(strofe.toLowerCase())) styrke += 1;

    // Vurder adgangskodens styrke
    if (styrke <= 1) {
        return 'Dårlig';
    } else if (styrke === 2) {
        return 'Middel';
    } else {
        return 'God';
    }
}

// button example

const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');

const checkAnswer = (e) => { // e 
    console.log(e.target);
    
    if (e.target.id === 'c1') {
        console.log('That is correct!');
    } else {
        console.log('That is wrong!')
    }
}

/* const checkAnswer = (e) => { // e 
    console.log(e.target);
    
    if (e.target.id !== 'c1') {
        console.log('That is correct!');
    } else {
        console.log('That is wrong!')
    }
}

*/

c1.addEventListener('click', checkAnswer);
c2.addEventListener('click', checkAnswer);
c3.addEventListener('click', checkAnswer);