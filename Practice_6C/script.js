// Problem 13
function findAverageAge(people) {
    let ages = people.map(person => person.age);
    
    let sum = ages.reduce((acc, curr) => acc + curr, 0);
    
    let average = sum / people.length;
    
    return average;
}
function displayfindAverageAge() {
    let people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 22 },
        { name: 'David', age: 35 }
    ];
    console.log(findAverageAge(people)); 
}
// Problem 14
function mergeArrays(array1, array2) {
    return array1.concat(array2);
}
function displaymergeArrays(){
let array1 = ['apple', 'banana'];
let array2 = ['orange', 'kiwi'];

let mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); 
}
// Problem 15
function processNumbers(numbers) {
    //	Use the filter method to filter out only the even numbers.
    let evenNumbers = numbers.filter(number => number % 2 === 0);
    
    //	Use the map method to square each of the remaining numbers.
    let squaredNumbers = evenNumbers.map(number => number ** 2);
    
    //	Use the reduce method to calculate the sum of the squared numbers.
    let sumOfSquaredNumbers = squaredNumbers.reduce((acc, curr) => acc + curr, 0);
    
    //	Concatenate the original array with the squared and summed numbers array.
    let resultArray = numbers.concat(squaredNumbers, sumOfSquaredNumbers);
    
    return resultArray;
}
function displayprocessNumbers(){
    let numbers = [1, 2, 3, 4, 5];
    let resultArray = processNumbers(numbers);
    console.log(resultArray);

}
// Problem 16
function mergeAndFilter(array1, array2) {
    // Use the concat method to merge the two arrays.
    let mergedArray = array1.concat(array2);
    
    // Use the filter method to filter out people with an age greater than or equal to 30.
    let filteredPeople = mergedArray.filter(person => person.age < 30);
    
    // Use the map method to create a new array containing only the names of the filtered people.
    let namesArray = filteredPeople.map(person => person.name);
    
    // Use the reduce method to concatenate all the names into a single string separated by commas.
    let resultString = namesArray.reduce((acc, curr) => acc + (acc ? ', ' : '') + curr, '');
    
    return resultString;
}

function displaymergeAndFilter(){
    let array1 = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 22 }
    ];
    
    let array2 = [
        { name: 'David', age: 35 },
        { name: 'Eve', age: 28 },
        { name: 'Frank', age: 40 }
    ];
    
    console.log(mergeAndFilter(array1, array2));     
}


