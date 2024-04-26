let screen = document.getElementById('screen');

// Function to add number or operator to screen
function addToScreen(value) {
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    screen.value = '';
}

// Function to calculate result
function calculate() {
    try {
        let result = eval(screen.value);
        screen.value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}

// Event listener for keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        addToScreen(key);
    } else if (key === 'Enter') {
        calculate();
    } else {
        alert('Only numbers and operators are allowed!');
    }
});
