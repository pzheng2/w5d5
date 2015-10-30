Function.prototype.myBind = function (context) {
  var fn = this;
  return (function () {
    fn.apply(context);
  });
}


var cat = {
  sayHi: function () {
    console.log("hi " + this);
  }
}

cat.sayHi.myBind("ttt")();
