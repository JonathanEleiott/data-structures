var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.head = 0;

};

Queue.prototype.enqueue = function(value) {
  // body...
  this.storage[this.length + this.head] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var result = this.storage[this.head];
  delete this.storage[this.head];
  if (this.length > 0) {
    this.length--;
  }
  this.head++;
  return result;
};

Queue.prototype.size = function() {
  return this.length;
};

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// expect(queue.dequeue()).to.equal('b');