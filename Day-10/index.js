// getter and setters

class Person{
    constructor(name){
        this._name = name;
    }
    get name(){ // getter
        return this._name;
    }
    set name(Newname){ //setter
        this._name = Newname;
    }
}
let person = new Person("Manimuthu");
console.log(person.name);    //getter
person.name = "Rajeshmani";  // setter
console.log(person.name);    // getter