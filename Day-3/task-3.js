// Assesment Task:-

// 1.How to comapre the two json have the same properties without order;

let obj1 = {name: "manimuthu", age: "29"};
let obj2 = {age: "29", name: "manimuthu"};

console.log("obj1keys:",Object.keys(obj1));
console.log("obj1keys:",Object.keys(obj2));

function isobjEqual(obj1,obj2){
  var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);
    if(keys1.length !==keys2.length){
      return false;
      
      }
      for(var keys of keys1){
       if(obj1[keys]!==obj2[keys]){
         return false;
         } 
        }
        return true;
  }
  var result = isobjEqual(obj1,obj2);
  console.log(result);



//   2 & 3 .use the rest  countries  api url and display  flags names,region,subregion,population

let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onload = function(){
    console.log(xhr.status);
    var countries = JSON.parse(xhr.responseText);
    countries.forEach(country => {
        console.log(country.name.common +"  " + country.flag +"---"+"  "+"Population"+ ":" +country.population + "  "+ "Region" +":" + country.region + "  " +"Subregion" +":"+ country.subregion); // population
          });
};
xhr.send();
