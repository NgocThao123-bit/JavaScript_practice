// Async function to simulate time-consuming operation
function simulateAsyncOperation() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data from async operation");
      }, 1000); 
    });
  }
  
  // Another async function to simulate another time-consuming operation
  function simulateAnotherAsyncOperation() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data from another async operation");
      }, 1500); 
    });
  }
  
  // Function using async/await syntax to execute both asynchronous operations sequentially
  async function executeAsyncAwait() {
    const resultParagraph2 = document.getElementById("resultParagraph2");
  
    try {
      resultParagraph2.textContent = "Loading...";
  
      const result1 = await simulateAsyncOperation();
  
      const result2 = await simulateAnotherAsyncOperation();
  
      const combinedResult = result1 + ", " + result2;
  
      resultParagraph2.textContent = combinedResult;
    } catch (error) {
      resultParagraph2.textContent = "An error occurred: " + error.message;
    }
  }
  
  // Event listener for button click
  document.getElementById("asyncButton2").addEventListener("click", executeAsyncAwait);
  