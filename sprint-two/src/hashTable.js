

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit, 'for insert', this.counter, this._limit);
  var bucket = this._storage.get(index) || [];


  
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];  
    if (tuple[0] === k) {
      tuple[1] = v;
    }
  }
   
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this.counter++;
 

  if (this.counter > this._limit * 0.75) {  //this._limit * 0.75 = 6
    this.resize(this._limit * 2);
  }
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
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
      this.counter--;
      if (this.counter < this._limit * 0.25) {
        this.resize(Math.floor(this._limit / 2));
      }
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  //resize this._storage
  var oldStorage = this._storage;

  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this.counter = 0;
  
  oldStorage.each(function(bucket) {
    if (bucket === undefined) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
  
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
