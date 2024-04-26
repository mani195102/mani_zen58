let screen = document.getElementById('result');

// Function to add number or operator to screen
function addToScreen(value) {
    screen.value += value;
}

// Function to clear the screen
function clearScreen() {
    screen.value = '';
}

// Function to perform arithmetic operations
function performOperation() {
    let expression = screen.value;
    try {
        let result = eval(expression);
        screen.value = result;
    } catch (error) {
        alert('Invalid expression!');
    }
}

// Event listener for the equal button to perform calculation
document.getElementById('equal').addEventListener('click', function() {
    performOperation();
});

// Event listeners for operator buttons
document.getElementById('add').addEventListener('click', function() {
    addToScreen('+');
});

document.getElementById('subtract').addEventListener('click', function() {
    addToScreen('-');
});

document.getElementById('multiply').addEventListener('click', function() {
    addToScreen('*');
});

document.getElementById('percent').addEventListener('click', function() {
    addToScreen('%');
});

// Event listener for the clear button
document.getElementById('clear').addEventListener('click', function() {
    clearScreen();
});

// Event listeners for number buttons
for (let i = 0; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener('click', function() {
        addToScreen(i.toString());
    });
}
