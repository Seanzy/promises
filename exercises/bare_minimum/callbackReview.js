/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data.split('\n')[0]); 
    }
  });
    // var firstLine = data.split('\n');

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  request.get(url, (err, res) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, res.statusCode);
    }
    
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

//

// fs.readFile(__dirname + '/README.md', 'utf8', function (err, content) {
//   console.log('Example from callbackReview.js')
//   if (err) {
//     console.log('fs.readFile failed :(\n', err)
//   } else {
//     console.log('fs.readFile successfully completed :)\n', content)
//   }
// });

// fs.readFile(__dirname + '/README.md', 'utf8', function (err, content) {
//   console.log('example frmo callbackreview.js');
//   if(err) {
//     console.log('fs.readFIle failed: (\n', err);
//   } else {
//     console.log('fs.readFIle successfully completed :) \n', content);
//   }
// });

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });