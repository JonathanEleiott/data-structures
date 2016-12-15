var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.howMany = 0;
  this.storage = {};
};

Stack.prototype.size = function () {
  return this.howMany;
};

Stack.prototype.push = function (value) {
  this.howMany++;
};

Stack.prototype.pop = function () {
  if (this.howMany > 0) {
    this.howMany--;
  }
};




