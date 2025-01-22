// JavaScript for handling the keypad input and checking for the correct sequence
let enteredCode = '';
const correctCode = '1433';

// Get all the buttons and the display element
const keys = document.querySelectorAll('.key');
const enteredCodeDisplay = document.getElementById('enteredCode');

// Add event listeners to each key
keys.forEach(key => {
    key.addEventListener('click', function() {
        enteredCode += key.getAttribute('data-value');
        enteredCodeDisplay.textContent = `Code: ${enteredCode}`;

        // Check if the entered code matches the correct code
        if (enteredCode === correctCode) {
            document.body.classList.add('background-changed');
        } else if (enteredCode.length > correctCode.length) {
            // Reset if code is too long or incorrect
            enteredCode = '';
            enteredCodeDisplay.textContent = 'Code: ';
        }
    });
});
