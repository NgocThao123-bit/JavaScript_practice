function displayProblem1(){
    function fetchData(callback){
        setTimeout(function(){
            callback("Data fetched using Callback successfully!")
        }, 500);
    }
    fetchData(function(result) {
        console.log(result); 
    });
}

function displayProblem2(){
    function fetchData(){
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve("Data fetched using Promise successfully!")
            }, 2000);
        })
        
    }
    fetchData()
        .then(function(result) {
            console.log(result); 
        })
        .catch(function(error) {
            console.error(error);
        });
}

function displayProblem3(){
    function fetchUserData(callback) {
        const url = 'https://jsonplaceholder.typicode.com/users/1';
      
        fetch(url)
          .then(response => response.json())
          .then(data => {callback(data);})
          .catch(error => {
            console.error('Fetching error:', error);
          });
      }
        fetchUserData(userData => {
            console.log('Fetched user data:', userData);
      });
      
}

function displayProblem4(){
    function fetchUserData() {
        const url = 'https://api.example.com/user';
      
        return new Promise((resolve, reject) => {
          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json().then(data => resolve(data));
            })
            .catch(error => {
              reject(error);
            });
        });
      }
      
      fetchUserData()
        .then(userData => {
          console.log('Fetched user data:', userData);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });      
      
}

function displayProblem5(){
    function fetchProductData(callback) {
        const url = 'https://jsonplaceholder.typicode.com/users/1';
      
        fetch(url)
          .then(response => response.json())
          .then(data => {
            callback(data);
          })
          .catch(error => {
            console.error('Fetching error:', error);
          });
      }
      
      // Example usage: Log the fetched product data to the console
      fetchProductData(productData => {
        console.log('Fetched product data:', productData);
      });
      
}

function displayProblem6(){
    function fetchProductData() {
        const url = 'https://jsonplaceholder.typicode.com/users/1';
      
        return fetch(url)
          .then(response => response.json())
          .catch(error => {
            console.error('Fetching error:', error);
            throw error; 
          });
      }
      
      fetchProductData()
        .then(productData => {
          console.log('Fetched product data:', productData);
        })
        .catch(err => {
          console.error('Error:', err);
        });
      
}