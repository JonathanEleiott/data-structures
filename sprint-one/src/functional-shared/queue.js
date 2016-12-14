var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var sharedMethods = {};
  
  sharedMethods.howMany = 0;


  _.extend(sharedMethods, queueMethods);
  return sharedMethods;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  // body...
  this.howMany++;
};

queueMethods.dequeue = function () {
  // body...
  if (this.howMany > 0) {
    this.howMany--;
  }
};

queueMethods.size = function () {
  // body...
  return this.howMany;
};
