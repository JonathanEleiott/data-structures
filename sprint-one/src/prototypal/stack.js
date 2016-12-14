var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  
  instance.howMany = 0;
  instance.storage = {};

  return instance;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.howMany;
};

stackMethods.push = function (value) {
  this.storage[this.howMany] = value;
  this.howMany++;
};

stackMethods.pop = function () {
  var result = this.storage[this.howMany - 1];
  delete this.storage[this.howMany - 1];
  if (this.howMany > 0) {
    this.howMany--;
  }
  return result;
};
