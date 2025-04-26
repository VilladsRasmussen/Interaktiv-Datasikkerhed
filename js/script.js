'use strict';

// Start

// NODELIST / ARRAY
const btns = document.querySelectorAll('.btn-group button');
const boxes = document.querySelectorAll('.hidden');
const choices = []

// FUNCTION
const checkAnswer = (e) => { // Funktion med en parameter (e)
    boxes.forEach(box => {
        box.style.display = 'none';
    })
    choices.push(e.target.id); // Tilføjer id'et fra det klikkede element til choices arrayet
    console.log(choices); // Logger choices arrayet i konsollen
    switch (e.target.id) { // Forholder sig til det klikkede elements id
        case 'start': document.querySelector('#trin1').style.display = 'block'; // Viser elementet med id="c1-f"
        break;
        case 'godkend1': document.querySelector('#valg1').style.display = 'block'; // Viser elementet med id="c1-f"
        break;
        default: console.log("Error"); // Viser error, hvis id ikke findes
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', checkAnswer);
})

// KALDENAVN
function toggleButtonState() {
    const input = document.getElementById('kaldenavn');
    const button = document.getElementById('godkend1');
    button.disabled = input.value.trim() === '';
}