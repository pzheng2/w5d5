var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question("Is " + el1 + "greater than " + el2 + "?", function (answer) {
    // if (answer == "true") {
    //   callback(true)
    // } else {
    //   callback(false)
    // }
    callback(answer === "true" )
  })
// rompt("Is" + el1 + ">" + el2 + "?");

}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else {

    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {

      if (isGreaterThan) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }

      innerBubbleSortLoop(arr, i + 1, isGreaterThan, outerBubbleSortLoop);
    });


  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {

  var madeAnySwaps = true;

  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps){
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop)
//      innerBubbleSortLoop(arr, 0, madeAnySwaps, this) this points to window/node object

    } else {
      sortCompletionCallback(arr);
    }
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
  }
  outerBubbleSortLoop(madeAnySwaps);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// def bubbleSort = function(arr) {
//   madeAnySwaps = true;
//   while (madeAnySwaps){
//     madeAnySwaps = false;
//     for (var j = 0; j < arr.length; j++) {
//       if (arr[j+1] < arr[j]) {
//         madeAnySwaps = true;
//         swap
//       }
//
//     }
//   }
// }



absurdBubbleSort([3, 2, 1], function (arr) {  //sortCompletionCallback in absurdBubbleSort
  console.log(arr);
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
