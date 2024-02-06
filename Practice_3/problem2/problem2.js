// Async function to simulate time-consuming operation
function simulateAsyncOperation() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data fetched successfully");
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  async function executeAsyncAwait() {
    const resultParagraph = document.getElementById("resultParagraph");
  
    try {
      resultParagraph.textContent = "Loading...";
  
      // Waiting for the asynchronous operation to complete
      const result = await simulateAsyncOperation();
  
      resultParagraph.textContent = result;
    } catch (error) {
      resultParagraph.textContent = "An error occurred: " + error.message;
    }
  }
  
  document.getElementById("asyncButton").addEventListener("click", executeAsyncAwait);
  