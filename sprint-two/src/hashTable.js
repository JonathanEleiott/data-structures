

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storage.newArray = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var oldBucket = this._storage.get(index);
  var tuple = [k, v];
  var bucket = [];
  bucket.push(tuple);
  
  if (oldBucket !== undefined) {
    for (var i = 0; i < oldBucket.length; i++) {
      if (oldBucket[i][0] === k) {
        this._storage.set(index, bucket);
        return; 
      }
    } 
    oldBucket.push(tuple);
    this._storage.set(index, oldBucket);
  }
  //if storage does not have a array at the index
  if (oldBucket === undefined) {
    //set storage at index to equal new array with array with key and value
    this._storage.set(index, bucket);
  } 
  //else if there is a array
    //get the corrent value of the storage at that index
    //set the new value of the storage at that index to an array with a previous array + new array


};

HashTable.prototype.retrieve = function(k) {
  console.log(this._storage.get(0));
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var oldBucket = this._storage.get(index);
  for (var i = 0; i < oldBucket.length; i++) {
    if (oldBucket[i][0] === k) {
      oldBucket[i] = [];
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //AssertionError: expected undefined to equal 'val2'
// var v1 = 'val1';
// var v2 = 'val2';
// var oldHashFunction = window.getIndexBelowMaxForKey;
// window.getIndexBelowMaxForKey = function() { return 0; };
// hashTable.insert(v1, v1);
// hashTable.insert(v2, v2);
// expect(hashTable.retrieve(v1)).to.equal(v1);
// expect(hashTable.retrieve(v2)).to.equal(v2);
// window.getIndexBelowMaxForKey = oldHashFunction;