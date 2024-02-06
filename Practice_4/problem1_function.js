// Problem 1
function calculateCircleArea() {
    var r = parseFloat(document.getElementById("radius").value);

    var resultElement = document.getElementById("result");

    if (isNaN(r)|| r < 0) {
        resultElement.textContent = "Invalid input!!!";
        return;
    }

    var area = Math.PI * r * r;

    resultElement.textContent = "The area is "+ area.toFixed(2); //toFixed(2) rounds the number to two decimal places
}
// Problem 2
function isEven() {
    var number = parseFloat(document.getElementById("number").value);
    var resultElement = document.getElementById("result2");

        if (isNaN(number)) {
            resultElement.textContent = "Invalid input!!!";
            return;
        }

        if (number % 2 === 0) {
            resultElement.textContent = "The number is even.";
        } else {
            resultElement.textContent = "The number is odd.";
        }
}
// Problem 3
function reverseString(str) {
    return str.split('').reverse().join('');
}
function printReverseString(){
    var str = document.getElementById("string").value;
    var resultElement = document.getElementById("result3");

    resultElement.textContent = " Reverse String: "+ reverseString(str);
}
// Problem 4
// Problem 4
function findMax(numbers) {
    if (numbers.length === 0) {
        return "The array is empty.";
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function printMax() {
    var input = document.getElementById("numbers").value;
    var numbers = input.split(',').map(Number);
    var maxResultElement = document.getElementById("result4");

    maxResultElement.textContent = "Max value: " + findMax(numbers);
}
