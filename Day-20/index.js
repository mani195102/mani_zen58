
// function to test var
function testVar(){
    var x = 52;
    if(true){
        var x = 65;
        document.getElementById("output").innerText = "Inside if - block" +x;
    }
    document.getElementById("output").innerText += " | outside if - block" +x;
}

// function to test let
function testLet(){
    let y = 52;
    if(true){
        let y = 65;
        document.getElementById("output").innerText = "Inside if - block" +y;
    }
    document.getElementById("output").innerText += " | outside if - block" +y;
}

// function to test const
function testConst(){
    const z = 52;
    document.getElementById("output").innerText = "const Z:" +z;
    try{
        z=76;
    } catch(error){
        document.getElementById("output").innerText += " | Error:" + error;

    }
}

// function to test arrow 
function testArrowFunctions(){
    const numbers = [1,2,3,4,5];
    // map
    //Filter
    //reduce
    const squareNumbers = numbers.map((num) => num * num);
    const evenNumbers = numbers.filter((num) => num % 2 === 0 );
    const sumNumbers = numbers.reduce((total , num ) => total +  num);
    document.getElementById("arrowOutput").innerHTML = `
    <strong>Original Numbers:</strong> ${numbers.join(",")}</br>
    <strong>Squared Numbers:</strong> ${squareNumbers.join(",")}</br>
    <strong>Even Numbers:</strong> ${evenNumbers.join(",")}</br>
    <strong>Sum Numbers:</strong> ${sumNumbers}</br>`;
}

// function to test this keyword in both traditional and arrow function

document.getElementById("traditionalBtn").addEventListener('click', function (){
    document.getElementById("traditionalOutput").innerText = "'this' is a traditional function: " + this.textContent;
});
document.getElementById("arrowBtn").addEventListener('click', () => {
    document.getElementById("thisarrowOutput").innerText = "'this' is a arrow function :" + this.textContent;
});

// template literals

function templateliterals (){
    const name = "Manimuthu";
    const age = 29;
    document.getElementById("templateOutput").innerText = `name : ${name},age: ${age};`
}

// spread and rest operators

function testSpread(){
    const num1 = [1,2,3,4];
    const num2 = [5,6,7,8];
    const combined = [...num1,...num2];
    document.getElementById("spreadOutput").innerText = `combined : ${combined}`
}

function testRest(...args){
    document.getElementById("restOutput").innerText = `| sum : ${args.reduce((acc , cur)  => acc + cur, 0)}`
    
}

// IIFE function

(function IIFEliterals(){
    const name = "Manimuthu";
    const age = 32;
    document.getElementById("IIFEOutput").innerText = `IIFE-name : ${name}, IIFE-age: ${age};`
})();

// using Classes

class Task {
    constructor (description){
        this.description = description;
        this.completed = false;
    }
    oncomplete(){
        this.completed = !this.completed;
    }
}

function testClass(){
    const task = new Task("Learn Javascript");
    task.oncomplete();
    document.getElementById("classOutput").innerHTML = `Task: ${task.description}, Completed: ${task.completed}`;
}




