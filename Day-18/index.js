// Promise 

let promiseObj = new Promise((resolve , reject)=> {
    console.log("Getting the name from database");
    setTimeout(() =>{
        reject("NO Data !!!");
        resolve("Manimuthu");

    }, 2000);
});

//consumer code

promiseObj.then(
    (val) =>{
    console.log(`Name Received from the Database = ${val}.`);
},
(err) =>{
    console.log(`Error occurred = ${err}!!!`);
}
);

//promise function

function checkPositive(num){
    return new Promise((resolve , reject) =>{
        if(num > 0){
            resolve(`The Number is ${num} Positive.`);
        }else{
            reject(`The Number is ${num} is Negative Number`);
        }

    });
}

checkPositive(100)
.then((val) => { 
    console.log(val);
})
.catch((err) => { 
    console.log(err);
});

checkPositive(-100)
.then((val) => { 
    console.log(val);
},
(err) => { 
    console.log(err);
}
);


// using fetch

function fetchCountryData(){
    const url = "https://restcountries.com/v3.1/all";
    fetch(url).then((res) => {
        return res.json();
    }).then((data) =>{
        console.log(data);
        data.forEach(country => {
            console.log(country.name.common + ":" + country.flags);
            
        });
    })
}
fetchCountryData();