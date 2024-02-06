// script.js

// Asynchronous function simulating a time-consuming operation using Callback
function simulateAsyncOperation(callback) {
    setTimeout(() => {
        const result = "Async operation completed!";
        callback(null, result);
    }, 2000);
}

// Callback function to handle the asynchronous operation result
function handleCallback() {
    const resultParagraph = document.getElementById("callbackResult");
    resultParagraph.textContent = "Loading...";

    simulateAsyncOperation((error, result) => {
        if (error) {
            resultParagraph.textContent = "Error: " + error.message;
        } else {
            resultParagraph.textContent = result;
        }
    });
}

// Asynchronous function simulating a time-consuming operation using Promise
function simulateAsyncOperationPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve("Promise operation completed!");
            } else {
                reject(new Error("Promise operation failed!"));
            }
        }, 2000);
    });
}

// Callback function to handle the promise
function handlePromise() {
    const resultParagraph = document.getElementById("callbackResult");
    resultParagraph.textContent = "Loading...";

    simulateAsyncOperationPromise()
        .then(result => {
            resultParagraph.textContent = result;
        })
        .catch(error => {
            resultParagraph.textContent = "Error: " + error.message;
        });
}

// Asynchronous function using async/await
async function simulateAsyncOperationAsyncAwait() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Async/Await operation completed!");
        }, 2000);
    });
}

// Callback function to handle async/await
async function handleAsyncAwait() {
    const resultParagraph = document.getElementById("callbackResult");
    resultParagraph.textContent = "Loading...";

    try {
        const result = await simulateAsyncOperationAsyncAwait();
        resultParagraph.textContent = result;
    } catch (error) {
        resultParagraph.textContent = "Error: " + error.message;
    }
}
