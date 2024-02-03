// Problem 1 : Create a program that calculates the area of a rectangle 
function calculateRectangleArea() {
    let width = parseFloat(document.getElementById("width").value);
    let height = parseFloat(document.getElementById("height").value);

    if (isNaN(width) || isNaN(height) || width <0 || height<0) {
        console.log("Invalid input!!!");
        return;
    }

    let area = width * height;
    console.log("The area of the rectangle is: ", area);
}

// Task 1: If-Else Statements
    //Write a JavaScript function named checkTemperature 
function checkTemperature() {
    var tempInput = document.getElementById("temperatureInput").value;
    var temp = parseFloat(tempInput);

    console.log("\nTemperature: ", temp);

    if (isNaN(temp)) {
      console.log("Invalid input!!!");
    } else {
      if (temp < 25) {
        console.log("It's a cool day!");
      } else {
        console.log("It's a warm day!");
      }
    }
}

//Task 2: Switch Statement
    //Write a function named getDayName that takes a day index (0 for Sunday, 1 for Monday, etc.) as an argument.
function getDayName(){
  var dayIndex = document.getElementById("dayNumber").value;
  var index = parseInt(dayIndex);

  console.log("\nDay Number: ", index);

  var dayName;
  switch (index){
    case 0:
      dayName = 'Sunday';
      break;
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    case 3:
      dayName = 'Wednesday';
      break;
    case 4:
      dayName = 'Thursday';
      break;  
    case 5:
      dayName = 'Friday';
      break;
    case 6:
      dayName = 'Saturday';
      break;
    default:
        dayName = 'Unknown day';
  }
  console.log(dayName);
}

// Task 3: For Loop
//Write a function named printNumbers that takes a positive integer as an argument.Use a for loop inside the function to print numbers from 1 to the given integer (inclusive) to the console.
function printNumbers(){
  var positiveNumber = document.getElementById("number").value;
  var n = parseInt(positiveNumber);

  console.log("\nNumber: ", n);
  let result = '';
    if (isNaN(n) || n < 1) {
      console.log("Invalid input!!! Please enter a positive number");
    } else {
        for(let i=1; i<=n; i++)
        {
          result += i + ' ';
        }
      console.log("List of numbers from 1 to n: ", result.trim());
    }
}

//Task 4: While Loop
//Write a function named reverseString that takes a string as an argument.
function reverseString(){
  var stringInput = document.getElementById("stringInput").value;
  var stringReversed = '';
  var index = stringInput.length - 1;

  console.log("\nInput string : ", stringInput);

  if(typeof stringInput === 'string' && stringInput !== ''){
    while(index >= 0){
      stringReversed += stringInput[index];
      index--;
    }
    console.log("Resversed string : ", stringReversed);
  }else{
    console.log("Invalid input!!!")
  }
}

//Task 5: Nested Control Flow
// Use nested if-else statements to classify the grade as "A", "B", "C", "D", or "F" based on the following criteria:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
function gradeClassifier() {
  var numberic = document.getElementById("numberic").value;
  var n = parseInt(numberic);

  console.log("\nNumberic grade: ", n);
  let grade = '';
    if (isNaN(n) || n < 0 || n > 100) {
      console.log("Invalid input!!! Please enter a numeric grade as an argument (0 to 100)");
    } else {
        if(n >= 0 && n < 60){
            grade = 'F';
        }else if(n >= 60 && n < 70){
            grade = 'D';
          }else if(n >= 70 && n < 80){
            grade = 'C';
          }else if(n >= 80 && n < 90){
            grade = 'B';
          }else{
            grade = 'A';
          }
          console.log("Grade classification: ", grade);
    }
}