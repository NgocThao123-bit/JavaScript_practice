// Function to greet the user based on input name
function sayHello() {
    var name = document.getElementById("name").value;
    console.log("Hello, " + name + "!");
}

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to multiply two numbers
function multiplyNumbers(a, b) {
    return a * b;
}

// Function to calculate and display the sum and product of two numbers
function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = addNumbers(num1, num2);
    var product = multiplyNumbers(num1, num2);

    console.log("Sum = " + sum + ", Product = " + product);
}

// Recursive function to calculate factorial of a number
function calculateFactorial(n) {
    if (isNaN(n) || n < 1) {
        console.log("Invalid input!!! Please enter a number larger than 0");
        return "Invalid input";
    } else {
        if (n === 1) {
            return "1";
        } else {
            return n + " * " + calculateFactorial(n - 1);
        }
    }
}

// Function to calculate and display the factorial of a number
function factorial() {
    var number = parseInt(document.getElementById("number").value);
    var result;
    result = calculateFactorial(number);
    if (result !== "Invalid input") {
        console.log(result + " = " + eval(result));
    } // eval(result) is used to calculate the actual result from the string representation
}

// Function to operate on each element of an array using a specified function
function operArray(arr, operationFunction) {
    // Check if the input is an array
    if (!Array.isArray(arr)) {
        console.log("Invalid input! Please provide an array.");
        return [];
    }

    // Check if the second parameter is a function
    if (typeof operationFunction !== 'function') {
        console.log("Invalid input! Please provide a valid function.");
        return [];
    }

    // Apply the function to each element in the array
    var resultArray = arr.map(function (element) {
        return operationFunction(element);
    });

    return resultArray;
}

// Function to double each element in an array and display the result
function doubleNumber(x) {
    return x * 2;
}

// Function to demonstrate operating on an array by doubling each element
function operateOnArray() {
    var array = [1, 2, 3, 4, 5];

    var result = operArray(array, doubleNumber);

    console.log("Double each element in array: " + result);
}
