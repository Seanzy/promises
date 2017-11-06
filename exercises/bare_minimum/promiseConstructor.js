/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`

//to consume the promise returning function:
// pluckFirstLineFromFileAsync(filePath)
//   .then(function(data) {
//     //do something with first line
//   })
//   .catch(function(err) {
    
//   });
var pluckFirstLineFromFileAsync = function(filePath) {  
  var newPromise = new Promise(function(resolve, reject) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        //cb(err, null);
        reject(err);
      } else {
        //cb(null, err);
        resolve(data.split('\n')[0]);
      }
    })
  });
  
  //to invoke pluckFirstLineFromFileAsync, we don't need to pass in a cb, we only need to pass in the filepath. It synchronously returns a promise object that contains 2 methods, .then (handles the successful case or asynchronous operation which takes a cb that receives whatever the successful case is, here, the firstLine data), and .catch;

    //resolve and reject are both functions used inside function passed into Promise constructor
    // .then(function(firstLine) {//this time there's no err, use .catch
      
    // })
    // .catch(function(err) {
      
    // });
    
    return newPromise;
  
};

// This function should retrieve the status code of a GET request to `url`
// getStatusCodeAsync(url)
//   .then(function(data){})
//   .catch(function(err){});

var getStatusCodeAsync = function(url) {
  var newPromise = new Promise(function(resolve, reject) {
    request.get(url, (err, data) => {
      if (err) {
        //cb(err, null);
        reject(err);
      } else {
        //cb(null, resolve);
        resolve(data.statusCode);
      }
    })
  })
  return newPromise;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};





// pluckFirstLineFromFileAsync(filePath)
//   .then(function(data) { //successful resolve values show up in the .then block
    
//   })
//   .catch(function(err) { //errors show up in reject block
    
//   });
  
// var pluckFirstLineFromFileAsync = function(filePath) {
//   var newPromise = new Promise(function(resolve, reject) {
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         //cb(err, null);
//         reject(err);
//       } else {
//         //cb(null, data);
//         resolve(data);
//       }
//     })
//   });
  
  //resolve and reject are both functions, that we use in the function that is passed into the Promises constructor. So we're using the resolve and reject functions in the function passed into the promise constructor. The function passed into Promises constructor runs an async  function like readFile. 
  //For the successful case of the asynchronous function, we are going to pass the successful value into the resolve function. The err of the async op is passed into reject function, so the promise is just a synchronous wrapper of an async function. 
  
// };
  
  