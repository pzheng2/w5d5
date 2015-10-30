var readline = require("readline");


var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var TowersOfHanoi = {
  stacks: [[3,2,1],[],[]],
  isWon: function() {
    return (this.stacks[1].length === 3 || this.stacks[2].length === 3);
  },

  isValidMove: function(startTowerIdx, endTowerIdx) {
    return (this.stacks[startTowerIdx].length > 0) && (this.stacks[endTowerIdx].length === 0 || (this.stacks[startTowerIdx][ this.stacks[startTowerIdx].length - 1] < this.stacks[endTowerIdx][this.stacks[endTowerIdx].length - 1]));
  },

  move: function(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.stacks[endTowerIdx].push( this.stacks[startTowerIdx].pop() )
      return true;
    }
    return false;
  },

  print: function() {
    console.log(JSON.stringify(this.stacks));
  },

  promptMove: function(callback) {
    this.print();
    reader.question("Where do you want to move from: ", function(answer) {
      reader.question("Where do you want to move to: ", function(answer2) {
        callback(parseInt(answer), parseInt(answer2));
      }.bind(this));
    }.bind(this));
  },

  run: function(completionCallback) {
    this.promptMove(function (startTowerIdx, endTowerIdx) {
      if (!this.move(startTowerIdx, endTowerIdx)) {
        console.log("invalid move");
      }
      this.print()
      if (this.isWon()) {
        console.log("you won!");
        completionCallback();
      } else {
        this.run(completionCallback);
      }
    }.bind(this));
  }
};

TowersOfHanoi.run(function () {
  reader.close();
});
