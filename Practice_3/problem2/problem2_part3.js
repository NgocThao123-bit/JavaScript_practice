// Async function to simulate time-consuming operation
function simulateAsyncOperation() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data from async operation");
      }, 2000); 
    });
  }
  
  // Another async function to simulate another time-consuming operation with an error scenario
  function simulateAnotherAsyncOperation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Error occurred in another async operation"));
      }, 1500); 
    });
  }
  
  async function executeAsyncAwait() {
    const resultParagraph = document.getElementById("resultParagraph3");
  
    try {
      resultParagraph.textContent = "Loading...";
  
      const result1 = await simulateAsyncOperation();
  
      const result2 = await simulateAnotherAsyncOperation();
  
      const combinedResult = result1 + ", " + result2;
  
      resultParagraph.textContent = combinedResult;
    } catch (error) {
      resultParagraph.textContent = "An error occurred: " + error.message;
    }
  }
  
  document.getElementById("asyncButton3").addEventListener("click", executeAsyncAwait);
  