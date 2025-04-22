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