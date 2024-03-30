
// using template literals and destructuring in this key word
class Teacher {
    constructor() {
        console.log("This is a constructor from Teacher");
    }
    teaching = true;
}

class Student extends Teacher {
    constructor({ name, city }) {
        super();
        console.log("This is a constructor from Student");
        this.name = name;
        this.city = city;
        console.log(`Bio : ${this.name} is from ${this.city}`);
    }
    learning = true;
}

let hod1 = new Teacher();
let hod = new Student({ name: "Manimuthu", city: "Madurai" });

// this keyword 

class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}
class Employee extends Person {

    constructor (name,city,id){
        super(name,city, id);
        this.city = city;
        this.id = id;
    }
        getID(){
            return this.id;
        }
        getCity(){
            return this.city;
        }
    }
let emp = new Employee("Manimuthu","Madurai","E100");
console.log("Employee Get Name :",emp.getName());
console.log("Employee Get Name :",emp.getID());
console.log("Employee Get city :",emp.getCity());

// filter method .....

let rate = [23,45,678,90,33,21,780,670,498,58940,6565,900,370,1299,1300];
let result = rate.filter((item) => {
    return item % 10 == 0;
});

// reduce  method...
let reduceResult = rate.reduce((a,b) => {
    return a+b ;
});

console.log(reduceResult);

