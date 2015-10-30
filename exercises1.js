// named function
function Clock () {
}

Clock.time;
Clock.TICK = 5000; //5s

Clock.prototype.printTime = function () {
  var seconds = time.getSeconds(),
    minutes = time.getMinutes(),
    hours = time.getHours();
    console.log( hours + ":" + minutes + ":" + seconds );
  // Format the time in HH:MM:SS
};

Clock.prototype.run = function () {
  time = new Date();
  this.printTime();
  // 1. Set the currentTime.
  // 2. Call printTime.
  // 3. Schedule the tick interval.
};

Clock.prototype._tick = function () {
  time = time + this.TICK;
  this.printTime();
  // 1. Increment the currentTime.
  // 2. Call printTime.
};

var clock = new Clock();
clock.run();
