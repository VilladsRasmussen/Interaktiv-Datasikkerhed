'use strict';

// Start

// NODELIST / ARRAY
const btns = document.querySelectorAll('.btn-group button');
const boxes = document.querySelectorAll('.hidden');
const choices = []

// FUNCTION
const checkAnswer = (e) => {
    boxes.forEach(box => {
        box.style.display = 'none';
    })
    
    if (e.target.id !== 'godkend1') {
        choices.push(e.target.id);
    }
    
    switch (e.target.id) {
    // START
        case 'start': 
            document.querySelector('#trin1').style.display = 'block';
            console.log('Choices array:', choices);
        break;

    // TRIN 1 - Lav en brugernavn
        case 'godkend1': 
            const inputValue = document.getElementById('kaldenavn').value;
            choices.push(inputValue);
            document.querySelector('#trin2').style.display = 'block';
            const displayElement = document.querySelector('#visKaldenavn');
            if (displayElement) {
                displayElement.textContent = inputValue;
                console.log('Choices array:', choices);
            }
        break;



    // VALG 1 - Indtastede du rigtige eller falsk navn?
        case 'rigtige': 
            document.querySelector('#svar1a').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'falske': 
            document.querySelector('#svar1b').style.display = 'block';
            console.log('Choices array:', choices);
        break;



    // SVAR 1.1
        case 'forsæt1a': // Rettet fra 'fortsæt1a' til 'forsæt1a'
            document.querySelector('#trin2a').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'forsæt1b': 
            document.querySelector('#trin2b').style.display = 'block';
            console.log('Choices array:', choices);
        break;


    // Feedback 1a og 1b
        case 'forsæt1aa': // Rettet fra 'fortsæt1a' til 'forsæt1a'
            document.querySelector('#retning1').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'forsæt1bb': 
            document.querySelector('#retning2').style.display = 'block';
            console.log('Choices array:', choices);
        break;




    

    // Retning 1 - Will Smith
        case 'bloker': 
            document.querySelector('#svar2a').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'klik': 
            document.querySelector('#svar2b').style.display = 'block';
            console.log('Choices array:', choices);
        break;


    // SVAR 2.1
        case 'forsæt2a': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#trin3a').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'forsæt2b': 
            document.querySelector('#trin3b').style.display = 'block';
            console.log('Choices array:', choices);
        break;

    // Feedback 2a og 2b
        case 'slutning1': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#konklusion1').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'slutning2': 
            document.querySelector('#konklusion2').style.display = 'block';
            console.log('Choices array:', choices);
        break;

    // SLUTNING 1 - Will Smith snød dig ikke
        case 'afrunding1': 
            document.querySelector('#endelig-feedback1').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'afrunding2': 
            document.querySelector('#endelig-feedback2').style.display = 'block';
            console.log('Choices array:', choices);
        break;





    // Retning 2 - Anti Virus
        case 'klik-knap': 
            document.querySelector('#svar3a').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'ignorer': 
            document.querySelector('#svar3b').style.display = 'block';
            console.log('Choices array:', choices);
        break;

    // SVAR 3.1
        case 'forsæt3a': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#feedback4a').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'forsæt3b': 
            document.querySelector('#feedback4b').style.display = 'block';
            console.log('Choices array:', choices);
        break;

    // Konsekvens
        case 'konsekvens': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#du-er-hacket').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'slutning3': // Rettet fra 'fortsæt2a' til 'forsæt2a'
            document.querySelector('#konklusion3').style.display = 'block';
            console.log('Choices array:', choices);
        break;

    // Feedback 3b
        case 'slutning4': 
            document.querySelector('#konklusion4').style.display = 'block';
            console.log('Choices array:', choices);
        break;

    // SLUTNING 3 & 4
        case 'afrunding3': 
            document.querySelector('#endelig-feedback3').style.display = 'block';
            console.log('Choices array:', choices);
        break;
        case 'afrunding4': 
            document.querySelector('#endelig-feedback4').style.display = 'block';
            console.log('Choices array:', choices);
        break;



    // ENDELIG FEEDBACK
        case 'restart':
            window.location.reload();
        break;    

    // Hvis intet er rigtigt
        default: 
            console.log("Error");
            console.log('Choices array:', choices);
    }
    console.log('Choices array:', choices);
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