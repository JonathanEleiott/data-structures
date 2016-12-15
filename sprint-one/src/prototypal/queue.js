var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(queueMethods);

  instance.length = 0;
  instance.storage = {};
  instance.head = 0;

  return instance;
};

var queueMethods = {};

queueMethods.size = function () {
  return this.length;
};

queueMethods.enqueue = function (value) {
  // body...
  this.storage[this.length + this.head] = value;
  this.length = 0;
  
  for (var key in this.storage) {
    this.length++;
  }
};

queueMethods.dequeue = function () {
  // body...
  var result = this.storage[this.head];
  delete this.storage[this.head];
  
  if (this.length > 0) {
    this.length--;
  }

  this.head++;
  this.length = 0;
  
  for (var key in this.storage) {
    this.length++;
  }

  return result;
};

// queue.enqueue('a');
// expect(queue.dequeue()).to.equal('a');
// queue.enqueue('b');
// expect(queue.dequeue()).to.equal('b');