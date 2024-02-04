// Create an object named student
let student = {
  name: "Harry Potter",
  age: 20, 
  grade: "A", 
};

// Log the entire object to the console
console.log("=== Student Object: ===", student);

// Access and log each property individually
console.log("--- Access and log each property individually ---");

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Grade:", student.grade);


student.subjects = ["Math", "Science", "English"];

console.log("Updated Student Object with Subjects:", student);

student.grade = "B"; 

console.log("Updated Student Object with New Grade:", student);


student.study = function () {
  console.log("The student is studying.");
};

student.study();


// =============== CAR ================
// Create an object named car
let car = {
  make: "Honda",
  model: "Mimi",
  year: 1959
};

console.log("=== Car Object: ===", car);

for (let property in car) {
  if (car.hasOwnProperty(property)) {
      console.log(`${property}: ${car[property]}`);
  }
}


// ============= USER ===============
// Create a person object
let person = {
  name: "John Joe",
  age: 25,
  email: "john@gmail.com"
};

// Create an address object
let address = {
  street: "69 Hilton street",
  city: "Downtown",
  zipcode: "12345"
};

// Create a user object by combining properties from person and address
let user = {
  ...person,
  ...address
};

console.log("=== User Object: ===", user);
