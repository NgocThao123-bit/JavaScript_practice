// Problem 7
function removeFirstElement(arr) {
    arr.shift();
    return arr;
}
function displayremoveFirstElement(){
    let originalArray = ['apple', 'banana', 'orange'];
    let modifiedArray = removeFirstElement(originalArray);
    console.log(modifiedArray); 
    
}
// Problem 8
function removeElementAtPosition(arr, position) {
    arr.splice(position, 1);
    return arr;
}
function displayremoveElementAtPosition(){
    let originalArray = ['a', 'b', 'c', 'd', 'e'];
    let modifiedArray = removeElementAtPosition(originalArray, 2);
    console.log(modifiedArray); 
}

// Problem 9
function modifyAndRemove(array, value, pos1, pos2) {
    array.pop(); // Remove the last element
    array.shift(); // Remove the first element
    array.splice(pos2, 1); // Remove the element at pos2
    array.push(value); // Add the value to the end
    return array;
}
function displaymodifyAndRemove(){
    let originalArray = [1, 2, 3, 4, 5];
    let modifiedArray = modifyAndRemove(originalArray, 6, 0, 2);
    console.log(modifiedArray); 
}

// Problem 10
function removeAndInsert(arr, value1, value2, position) {
    arr.pop(); // Remove the last element
    arr.splice(position, 1); // Remove the element at the specified position
    arr.splice(position, 0, value1, value2); // Insert the provided values at the specified position
    return arr;
}
function displayremoveAndInsert(){
    let originalArray = ['apple', 'banana', 'orange', 'kiwi'];
    let modifiedArray = removeAndInsert(originalArray, 'grape', 'pear', 2);
    console.log(modifiedArray); 
    
}
// Problem 11
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}
function displayfilterEvenNumbers(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let evenNumbers = filterEvenNumbers(numbers);
    console.log(evenNumbers); 
}
// Problem 12
function doubleAndSum(numbers) {
    return numbers.map(number => number * 2).reduce((acc, curr) => acc + curr, 0);
}
function displaydoubleAndSum(){
    let numbers = [1, 2, 3, 4, 5];
    let sumOfDoubled = doubleAndSum(numbers);
    console.log(sumOfDoubled); 
}






