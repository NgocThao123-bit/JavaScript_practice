// Async function to simulate time-consuming operation
function simulateAsyncOperation(operationName) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Data from ${operationName}`);
      }, Math.random() * 1000); 
    });
  }
  
  // Another async function to simulate another time-consuming operation with an error scenario
  function simulateAnotherAsyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Error occurred in another async operation"));
      }, Math.random() * 2000); 
    });
  }
  
  // Third async function to simulate parallel execution of multiple async operations
  function simulateParallelAsyncOperations() {
    const asyncOperations = [
      simulateAsyncOperation("Async1"),
      simulateAsyncOperation("Async2"),
      simulateAsyncOperation("Async3")
    ];
    return Promise.all(asyncOperations);
  }
  
  // Function using async/await syntax to execute asynchronous operations sequentially
  async function executeAsyncAwait() {
    const resultParagraph = document.getElementById("resultParagraph4");
  
    try {
      resultParagraph.textContent = "Loading...";
  
      const results = await simulateParallelAsyncOperations();
  
      resultParagraph.textContent = results.join(", ");
    } catch (error) {
      resultParagraph.textContent = "An error occurred: " + error.message;
    }
  }
  
  document.getElementById("asyncButton4").addEventListener("click", executeAsyncAwait);
  