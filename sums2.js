var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft == 0) {
    completionCallback(sum);
    reader.close();
  }
  if (numsLeft > 0) {
    reader.question("Enter a number: ", function (answer) {
      sum += parseInt(answer)
      console.log("The partial sum is: "+ sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
    reader.question();
  }
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
