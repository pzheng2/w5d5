
var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  var sum = 0;
  if (numsLeft == 0) {
    completionCallback(sum);
  }
  if (numsLeft > 0) {
    sum += parseInt(reader.input);
    console.log("The partial sum is: "+ sum);
    addNumbers(sum, numsLeft - 1, completionCallback);
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
