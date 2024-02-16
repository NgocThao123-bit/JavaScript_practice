// Problem 1
function addElementToEnd(arr1, arr2, value) {
    arr1.push(value);
    return arr1;
}
function displayaddElementToEnd(){
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let resultArray = addElementToEnd(array1, array2, 7);
    
    console.log(resultArray);
}
// Problem 2

function addElementToFront(arr1, arr2, value) {
    arr1.unshift(value);
    return arr1;
}
function displayaddElementToFront(){
    let array1 = ['banana', 'kiwi'];
    let array2 = ['apple', 'orange'];
    let resultArray = addElementToFront(array1, array2, 'grape');
    
    console.log(resultArray); 
    
}
// Problem 3

function addElementAtPosition(arr1, arr2, value, position) {
    arr1.splice(position, 0, value);
    return arr1;
}
function displayaddElementAtPosition(){
    let array1 = [1, 2, 4, 5];
    let array2 = [3, 6, 7];
    let resultArray = addElementAtPosition(array1, array2, 3, 3);
    
    console.log(resultArray); 
}
// Problem 4

function modifyArray(arr, value, position, action) {
    if (action === "addEnd") {
        arr.push(value);
    } else if (action === "addStart") {
        arr.unshift(value);
    } else if (action === "addAtPosition" && typeof position === 'number') {
        arr.splice(position, 0, value);
    }
    return arr;
}

function displaymodifyArray(){
    let originalArray = [1, 2, 3, 4];
    let modifiedArray1 = modifyArray(originalArray, 5, null, "addEnd");
    console.log(modifiedArray1); 
    
    let modifiedArray2 = modifyArray(originalArray, 0, 0, "addStart");
    console.log(modifiedArray2); 
    
    let modifiedArray3 = modifyArray(originalArray, 10, 2, "addAtPosition");
    console.log(modifiedArray3); 
    
    let modifiedArray4 = modifyArray(originalArray, 6, 2, "unknownAction");
    console.log(modifiedArray4); 
    
}
// Problem 5
function combineArrays(arr1, arr2, addToEnd) {
    if (addToEnd) {
        return arr1.concat(arr2);
    } else {
        return arr2.concat(arr1);
    }
}

function displaycombineArrays(){
    let array1 = ['apple', 'banana'];
    let array2 = ['orange', 'kiwi'];
    
    let combinedArray1 = combineArrays(array1, array2, true);
    console.log(combinedArray1); 
    
    let combinedArray2 = combineArrays(array1, array2, false);
    console.log(combinedArray2); 
        
}

// Problem 6
function removeLastElement(arr) {
    arr.pop();
    return arr;
}
function displayremoveLastElement(){
    let originalArray = [1, 2, 3, 4];
    let modifiedArray = removeLastElement(originalArray);
    console.log(modifiedArray); 
}

