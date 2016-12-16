var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  for (var key in this._storage) {
    if (key === item) {
      delete this._storage[key];
    }
  }
  // if (this._storage[key]) {
  //   delete this._storage[key];
  // }
  //let's ask this to help desk or search;

};

/*
 * Complexity: What is the time complexity of the above functions?
 The add function has a time complexity of linear because this function will check whether storage has this item or not
 The contains and remove functions have a time complexity of linear because they check each of the keys in stoarge against the input item
 */
