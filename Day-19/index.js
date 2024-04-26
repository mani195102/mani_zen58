// variabe - array of objects
const employees = [
    { id:1, name:'Mani', age:28, designation:'Developer'},
    { id:2, name:'Jose', age:29, designation:'Devops'},
    { id:3, name:'Muthu', age:30, designation:'UI/UX'},
    { id:4, name:'sri', age:31, designation:'Marketting'},
    { id:5, name:'krish', age:28, designation:'Tester'},
];

// filter using employee id
console.log(employees.filter((emp) => emp.id != 4 ));