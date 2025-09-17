// Creating an object
const employee = {
    firstName: "John",
    lastName: " Doe",
    jobTitle: "Project Manager",
    salary: 60000,
    currentProjects: ["FacebookData", "WhatsappData", "InstaData"]
};
console.log(employee)

//Objects are not logged like arrays so cannot access seperate details using index
//you do it like this instead, both below do the same thing

console.log(employee.lastName);
console.log(employee["jobTitle"])

//Chnaging information
employee.firstName = "Annie";
console.log(employee.firstName)

//assessing the array in the object
//employee is the object, currentProjects is an array
console.log(employee.currentProjects[0])

//Can add a new object seperately
employee.department = "engineering";
console.log(employee);

//another way of getting all items in an object
console.log(Object.keys(employee))

//way to get all the values in an object
console.log(Object.values(employee))