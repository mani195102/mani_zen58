// DOM Manipulation using button

const button = document.querySelector("button");
button.addEventListener("click",()=>{
    document.body.style.backgroundColor="Blue";
});

//get Element by Id
const thirdli = document.getElementById("third_li");
console.log(thirdli);

//get Element by class name
const classli = document.getElementsByClassName("second");
console.log(classli);

//get Element by queryselectorall
const queAll = document.querySelectorAll("p");
console.log(queAll);

const listItems = document.querySelectorAll('li');
listItems[0].setAttribute('class','big gold');
listItems[0].classList.remove("big");

const h4 = document.createElement("h4");
h4.textContent = "Hi buddy";
document.body.append(h4);


