var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var sharedMethods = {};
  
  sharedMethods.howMany = 0;
  sharedMethods.storage = {};

  _.extend(sharedMethods, queueMethods);
  return sharedMethods;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  // body...
  this.storage[this.howMany] = value;
  this.howMany++;
};

queueMethods.dequeue = function () {
  // body..
  var result = this.storage[0];
  if (this.howMany > 0) {
    for ( var i = 0; i < this.howMany; i++ ) {
      this.storage[i] = this.storage[i + 1];
    }
    this.howMany--;
  }
  return result;
};

queueMethods.size = function () {
  // body...
  return this.howMany;
};



// queue.enqueue('a');
// expect(queue.dequeue()).to.equal('a');
// queue.enqueue('b');
// expect(queue.dequeue()).to.equal('b');