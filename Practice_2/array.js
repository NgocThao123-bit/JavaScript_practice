// === Array Creation and Access ====
let fruits = ["Strawberry", "Mango", "Orange", "Kiwi"];
console.log("==== Fruits Array: ==== ", fruits);

// Access and log individual elements from the array
console.log(" Fruit 1:", fruits[0]);
console.log(" Fruit 2:", fruits[1]);
console.log(" Fruit 3:", fruits[2]);
console.log(" Fruit 4:", fruits[3]);

// ==== Array Manipulation =====
// Add a new fruit to the fruits array using push
fruits.push("Banana");

// Remove the last fruit from the array using pop
let removeFruit = fruits.pop();

console.log("Removed Fruit:", removeFruit);
console.log("Updated Fruits Array:", fruits);


// ==== Array Iteration ====
//Create an array named numbers
let numbers = [1, 5, 67, 8, 32];

console.log("==== Numbers Array: ==== ", numbers);

// Use a for loop to iterate over the numbers array and log each element
console.log("Use a for loop to iterate :");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Use the forEach method to achieve the same result
console.log("Use the forEach method to iterate");
numbers.forEach(function(number) {
    console.log(number);
});

// === Array Methods  =====

// Create an array named mixedData
let mixedData = ["John", 89, false, "Mango", 0, true, -5, "Kiwi"];
console.log("==== Mixed Array: ==== ", mixedData);

// Use array methods to manipulate and process mixedData
console.log("Index of 'John':", mixedData.indexOf("John"));
console.log("Index of '-5':", mixedData.indexOf(-5));
console.log("Index of true:", mixedData.indexOf(true));

console.log("Includes 'Harry':", mixedData.includes("Harry"));

// Remove elements using splice
mixedData.splice(3, 1); // Remove the element at index 3
mixedData.splice(5, 2); // Remove the elements at index 5 and 6

console.log("Modified Mixed Data Array:", mixedData);

// ==== Challenge: Array Transformation  ======
console.log("==== Challenge: Array Transformation ===");

// Create an array of numbers and use the map method to square each number
// Array numbers above
let arrayNumbers = [1, 2, 3, 4, 5];
console.log("Array Numbers:", arrayNumbers);
let numbersSquared = arrayNumbers.map(function(number) {
    return number * number;
});
console.log("Squared Numbers:", numbersSquared);

// Create an array of words and use the filter method to filter out words with less than three characters
let sports = ["Ski", "Basketball", "Tennis", "Gym", "Baseball"];
console.log("Array Sports:", sports);

let filteredSports = sports.filter(function(sport) {
    return sport.length >= 3;
});

console.log("Filtered Sports with less than 3 character:", filteredSports);
