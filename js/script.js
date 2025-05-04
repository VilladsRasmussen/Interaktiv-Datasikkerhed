'use strict';

// Start

// NODELIST / ARRAY (Gemmer svarene i en array)
const btns = document.querySelectorAll('.btn-group button');
const boxes = document.querySelectorAll('.hidden');
const choices = JSON.parse(localStorage.getItem('choices') || '[]');

// FUNCTION
const checkAnswer = (e) => {
    boxes.forEach(box => {
        box.style.display = 'none';
    })
    
    const id = e.target.id;
    // Gemmer ikke valg der kun fører en retning (Undgår gentagninger)
    if (id !== 'godkend1' && id !== 'restart' && !id.startsWith('forsæt') && !id.startsWith('slutning')) {
        choices.push(id);
    }
    
    switch (e.target.id) {
    // START
        case 'start': 
            // Nulstiller arrayet fra localStorage, og begynder at gemme nye valg
            choices.splice(0, choices.length);
            localStorage.setItem('choices', JSON.stringify(choices));
            document.querySelector('#trin1').style.display = 'flex';
        break;

    // TRIN 1 - Lav en brugernavn
        case 'godkend1': 
            const inputValue = document.getElementById('kaldenavn').value;
            choices.push(inputValue);
            document.querySelector('#trin2').style.display = 'flex';
            const displayElement = document.querySelector('#visKaldenavn');
            if (displayElement) {
                displayElement.textContent = inputValue;
            }
        break;



    // VALG 1 - Indtastede du rigtige eller falsk navn?
        case 'rigtige': 
            document.querySelector('#svar1a').style.display = 'flex';
        break;
        case 'falske': 
            document.querySelector('#svar1b').style.display = 'flex';
        break;



    // SVAR 1.1
        case 'forsæt1a': // Rettet fra 'fortsæt1a' til 'forsæt1a'
            document.querySelector('#trin2a').style.display = 'flex';
        break;
        case 'forsæt1b': 
            document.querySelector('#trin2b').style.display = 'flex';
        break;


    // Feedback 1a og 1b
        case 'forsæt1aa': // Rettet fra 'fortsæt1a' til 'forsæt1a'
            document.querySelector('#retning1').style.display = 'flex';
        break;
        case 'forsæt1bb': 
            document.querySelector('#retning2').style.display = 'flex';
        break;




    

    // Retning 1 - Will Smith
        case 'bloker': 
            document.querySelector('#svar2a').style.display = 'flex';
        break;
        case 'klik': 
            document.querySelector('#svar2b').style.display = 'flex';
        break;


    // SVAR 2.1
        case 'forsæt2a': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#trin3a').style.display = 'flex';
        break;
        case 'forsæt2b': 
            document.querySelector('#trin3b').style.display = 'flex';
        break;

    // Feedback 2a og 2b
        case 'slutning1': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#konklusion1').style.display = 'flex';
        break;
        case 'slutning2': 
            document.querySelector('#konklusion2').style.display = 'flex';
        break;

    // SLUTNING 1 - Will Smith snød dig ikke
        case 'afrunding1': 
            document.querySelector('#endelig-feedback1').style.display = 'flex';
        break;
        case 'afrunding2': 
            document.querySelector('#endelig-feedback2').style.display = 'flex';
        break;




    // Retning 2 - Anti Virus
        case 'klik-knap': 
            document.querySelector('#svar3a').style.display = 'flex';
        break;
        case 'ignorer': 
            document.querySelector('#svar3b').style.display = 'flex';
        break;

    // SVAR 3.1
        case 'forsæt3a': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#feedback4a').style.display = 'flex';
        break;
        case 'forsæt3b': 
            document.querySelector('#feedback4b').style.display = 'flex';
        break;

    // Konsekvens
        case 'konsekvens': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#du-er-hacket').style.display = 'flex';
        break;
        case 'slutning3': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#konklusion3').style.display = 'flex';
        break;

    // Feedback 3b
        case 'slutning4': 
            document.querySelector('#konklusion4').style.display = 'flex';
        break;

    // SLUTNING 3 & 4
        case 'afrunding3': 
            document.querySelector('#endelig-feedback3').style.display = 'flex';
        break;
        case 'afrunding4': 
            document.querySelector('#endelig-feedback4').style.display = 'flex';
        break;

    
        
    // ENDELIG FEEDBACK
        case 'restart':
            // clear stored choices then reload
            localStorage.removeItem('choices');
            window.location.reload();
        break;    

    // Hvis intet er rigtigt
        default: 
            console.log("Error");
            console.log('Choices array:', choices);
    }
    console.log('Choices array:', choices);
    localStorage.setItem('choices', JSON.stringify(choices));
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

window.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('svar1');
    if (saved === 'rigtige') {
      document.querySelector('#svar1a').style.display = 'flex';
    }
    else if (saved === 'falske') {
      document.querySelector('#svar1b').style.display = 'flex';
    }
  });