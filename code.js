// JavaScript for handling the keypad input and checking for the correct sequence
let enteredCode = '';
const correctCode = '1433';

// Get all the buttons and the display element
const keys = document.querySelectorAll('.key');
const enteredCodeDisplay = document.getElementById('enteredCode');
const keypad = document.querySelector('.keypad'); // Get the keypad container

// Add event listeners to each key
keys.forEach(key => {
    key.addEventListener('click', function() {
        enteredCode += key.getAttribute('data-value');
        enteredCodeDisplay.textContent = `Code: ${enteredCode}`;

        // Check if the entered code matches the correct code
        if (enteredCode === correctCode) {
            document.body.classList.add('background-changed'); // Change the background
            keypad.style.display = 'none'; // Hide the keypad
            console.log('Correct code entered. Background should change!');
        } else if (enteredCode.length > correctCode.length) {
            // Reset if code is too long or incorrect
            enteredCode = '';
            enteredCodeDisplay.textContent = 'Code: ';
        }
    });
});
