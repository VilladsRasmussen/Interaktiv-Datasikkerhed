'use strict';

// Start

// NODELIST / ARRAY
const btns = document.querySelectorAll('.btn-group button');
const boxes = document.querySelectorAll('.feedback');
const choices = []

// FUNCTION
const checkAnswer = (e) => { // Funktion med en parameter (e)
    boxes.forEach(box => {
        box.style.display = 'none';
    })
    choices.push(e.target.id); // Tilføjer id'et fra det klikkede element til choices arrayet
    console.log(choices); // Logger choices arrayet i konsollen
    switch (e.target.id) { // Forholder sig til det klikkede elements id
        case 'c1': document.querySelector('#c1-f').style.display = 'block'; // Viser elementet med id="c1-f"
        break;
        default: console.log("Error"); // Viser error, hvis id ikke findes
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
})