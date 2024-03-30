function createEmployeeReports(employees) {
    const reports = [];

    employees.forEach(employee => {
        const { name, department, email } = employee; // Destructuring the employee object
        const report = `Name:${name}, Department:${department}, Email:${email}`;
        reports.push(report);
    });

    return reports;
}

const employees = [
    {
        name: "employee1",
        age: 28,
        department: "Sales",
        email: "employee1@gmail.com",
    },
    {
        name: "employee2",
        age: 28,
        department: "Development",
        email: "employee2@gmail.com",
    },
    {
        name: "employee3",
        age: 28,
        department: "Management",
        email: "employee3@gmail.com",
    },
    {
        name: "employee4",
        age: 28,
        department: "Accounts",
        email: "employee4@gmail.com",
    }
];

const reports = createEmployeeReports(employees);
console.log(reports);

// Prototype in Javascript 

// objects
let shape = { is2D:true, };
let circle ={ radius:3,};
let rectangle = { length :1,breadth:2,}

// shape integrate in circle prototype

circle.__proto__ = shape;
console.log("Is a Circle 2D Shape", circle.is2D );
console.log("Radius Of Circle", circle.radius );

// shape integrate in rectangle prototype

rectangle.__proto__ = shape;

console.log("Is a Rectangle 2D Shape", rectangle.is2D );
console.log("Radius Of Circle  = "+ rectangle.length + rectangle.breadth );