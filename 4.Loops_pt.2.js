//looping through an array of objects
const employees = [
 {name: "John Doe", salary: 60000, department: "marketing"},
 {name: "Alice Cooper", salary: 75000, department: "engineering"},
 {name: "Seamus Finnigan", salary: 85000, department: "logistics"}
]

for (employee of employees){
    console.log(employee)
}

// getting length of object
console.log(employees.length)

// getting only employees names
for (employee of employees){
    console.log(employee.name)
}

//calculating the average salary
// const-cant reassign, let-allows you to reassign
// the loop is adding the next person in the objects salary to get the total of all people
let total = 0;

for (employee of employees){
    total = total + employee.salary;
}
console.log(total)

const average = total/employees.length
console.log(average)

// if you want to outline the employees who have a salary over the average
for (employee of employees){
    if(employee.salary > average){
        console.log(employee.name, " has a salary more than the average")
    }
}