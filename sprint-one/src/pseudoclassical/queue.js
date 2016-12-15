var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.length = 0;
  this.head = 0;

};

Queue.prototype.enqueue = function(value) {
  // body...
  this.storage[length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {

};

Queue.prototype.size = function() {
  return this.length;
};

