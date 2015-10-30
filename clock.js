// named function
function Clock () {
  // this; //=> instance of Clock
  // this.printTime = fucntion () {
  //   console.log("haxed");
  // }
  // this.time;

  // this.time = "time";


}

// class Cat
//
//   def initialize
//     @name = "Sennacy"
//   end
//
//   def say_name
//     puts @name
//   end
//
// end


// Clock.prototype.myFunc = function () {
//   this.time
// };

// var c = new Clock();
// c.run();

// var myObj = {
//   key: "val",
//   myFunc: function () {
//
//   }
// }

// var c = new Clock();
// c.printTime();

Clock.TICK = 5000; //5s

Clock.prototype.printTime = function () {
  // this; //=-> c
  var seconds = this.time.getSeconds(),
    minutes = this.time.getMinutes(),
    hours = this.time.getHours();
    console.log( hours + ":" + minutes + ":" + seconds );
  // Format the time in HH:MM:SS
};

Clock.prototype.run = function () {
  this.time = new Date();
  this.printTime();
  setInterval(this._tick.bind(this), Clock.TICK)
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
};



Clock.prototype._tick = function () {
  // console.log(this);
  this.time.setTime(this.time.getTime() + Clock.TICK);
  this.printTime();
  // 1. Increment the currentTime.
  // 2. Call printTime.
};

var clock = new Clock();
clock.run();
