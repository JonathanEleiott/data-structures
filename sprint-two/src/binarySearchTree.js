var BinarySearchTree = function(value) {
  var instance = Object.create(treeMethod);
  instance.value = value;
  instance.left = undefined;
  instance.right = undefined;

  return instance;
};

var treeMethod = {};

treeMethod.insert = function(value) {
  var tree = this;
  var newTree = {value: value, left: undefined, right: undefined};
  var findPlace = function(tree, newTree) {
  
    if (tree.value > newTree.value) {
      if (tree.left === undefined) {
        tree.left = newTree;
      } else {
        findPlace(tree.left, newTree);
      }
    } else {
      if (tree.right === undefined) {
        tree.right = newTree;
      } else {
        findPlace(tree.right, newTree);
      }
    }
  };
  findPlace(tree, newTree);
};

treeMethod.contains = function(target) {
  var tree = this;
  var result = false;
  var target = target;
  var find = function (tree, target) {
    if (tree.value === target) {
      result = true;
    } else if (tree.value > target) {
      if (tree.left !== undefined) {
        find(tree.left, target);
      }
    } else if (tree.value < target) {
      if (tree.right !== undefined) {
        find(tree.right, target);
      }
    }
  };
  find(tree, target);
  return result;
};

treeMethod.depthFirstLog = function(callback) {
  var forEvery = function (tree, callback) {
    if (tree.value !== undefined) {
      callback(tree.value);
    } 

    if (tree.right !== undefined) {
      forEvery(tree.right, callback);
    } 

    if (tree.left !== undefined) {
      forEvery(tree.left, callback);
    }
  };
  forEvery(this, callback);
};

/*
 * Complexity: What is the time complexity of the above functions?
 The insert and contains functions run in logarithmic because every time we go deeper into the tree we are able to ignore half of the tree
 The depthFirstLog runs in linear time because it finds every element in the tree and passes it to callback function.
 */








