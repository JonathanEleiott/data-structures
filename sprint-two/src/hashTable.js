

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._storage.newArray = [];
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit, 'for insert', this.counter, this._limit);
  var oldBucket = this._storage.get(index);
  var tuple = [k, v];
  var bucket = [];
  bucket.push(tuple);
  
  if (this.counter === this._limit * 0.75) {  //this._limit * 0.75 = 6
    if (this._limit !== 16) {
      this._limit *= 2;
      this.resize(this._limit);
      index = getIndexBelowMaxForKey(k, this._limit, 'for migration in insert');
      oldBucket = this._storage.get(index);
    }
  }

  this.counter++;

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
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket === undefined) {
    bucket = [];
  }
  //console.log('bucket', bucket);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit, 'for remove', this.counter);
  var oldBucket = this._storage.get(index);

  if (this.counter < this._limit * 0.25) {
    if (this._limit !== 8) {
      this._limit *= .5;
      this.resize(this._limit);
      index = getIndexBelowMaxForKey(k, this._limit, 'for migration in remove', this.counter);
      oldBucket = this._storage.get(index);
    }
  }

  this.counter--;

  //console.log(oldBucket);
  for (var i = 0; i < oldBucket.length; i++) {
    if (oldBucket[i][0] === k) {
      oldBucket[i] = [];
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  //resize this._storage
  this.counter = 0;
  if (newLimit < 8) {
    return;
  } else {
    var oldStorage = this._storage;
    this._storage = LimitedArray(newLimit);
  }
  
  var callback = function(bucket, i, storage) {
    if (bucket !== undefined) {
      var context = this;
      bucket.forEach(function(tuple) {
        context.insert(tuple[0], tuple[1]);
      });
    }
  };

  //migration
  oldStorage.each(callback.bind(this));
  
};

// _.each(people, function(person) {
//   var firstName = person[0];
//   var lastName = person[1];
//   hashTable.insert(firstName, lastName);
//   expect(hashTable.retrieve(firstName)).to.equal(lastName);
// });
// expect(hashTable._limit).to.equal(16);
// hashTable.remove('George');
// hashTable.remove('Dr.');
// hashTable.remove('Steven');
// hashTable.remove('John');
// hashTable.remove('Mr.');
// expect(hashTable._limit).to.equal(8);

//var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];

/*
 * Complexity: What is the time complexity of the above functions?
 The insert function uses linear time complexity because it loops through the buckets to see if the key is already there.
 The retrieve function uses linear time complexity because it loops through the buckets to find the value of the key.
 The remove function uses linear time complexity because it loops through the buckets to find the proper key to remove the tuple.
 */
