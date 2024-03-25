// Function to perform arithmetic operations
function arithmeticOperation(text,a, b, operation) {
    let result;
    switch (operation) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Error: Division by zero";
            }
            break;
        default:
            result = "Error: Invalid operation";
    }
    return text +""+ result;
}

const num1 = 10;
const num2 = 5

// Perform addition
console.log(arithmeticOperation("addition :",num1, num2, '+')); 

// Perform subtraction
console.log(arithmeticOperation("subtraction :",num1, num2, '-')); 

// Perform multiplication
console.log(arithmeticOperation("multiplication :",num1, num2, '*'));

// Perform division
console.log(arithmeticOperation("division :",num1, num2, '/')); 



function applyIncreement(){
        var initialAmount = 10000;
        var increementAmount = 2000;
        initialAmount += increementAmount;
        console.log(initialAmount);
}
applyIncreement();

// anonymous function

const applyDecreement = function(initialAmount,decreementAmount ){

    var total =initialAmount*decreementAmount ;
    console.log(total);
}
applyDecreement(20,40);

// arrow function

const discount = (initialAmount,discountAmount ) =>{

    var total =initialAmount*discountAmount ;
    return total;
}
console.log(discount(12,20));