
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