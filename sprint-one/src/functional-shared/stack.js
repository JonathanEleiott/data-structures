var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};

  instance.length = 0;
  instance.storage = {};

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {};

stackMethods.size = function () {
  // body...
  return this.length;
};

stackMethods.push = function (value) {
  this.storage[this.length] = value;
  this.length++;
};

stackMethods.pop = function () {
  // body...
  var result = this.storage[this.length - 1];
  delete this.storage[this.length - 1];

  if (this.length > 0) {
    this.length--;
  }

  return result;
};

// stack.push('a');
// stack.push('b');
// stack.push('c');
// stack.pop();
// expect(stack.pop()).to.equal('b');