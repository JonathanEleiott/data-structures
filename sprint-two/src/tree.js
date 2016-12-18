var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children[this.children.length] = node;  

};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length !== 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;

  // return this.value === target || _.any(this.children, function(child) { 
  //   return child.contains(target); 
  // }); 
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild runs in constant because we know the exact place where we want to add the node so assigning the node will always take the same amount of time
 contains runs in linear time because in worst case scenario we have to check every node once
 */
 
// tree.addChild(5);
// expect(tree.contains(5)).to.equal(true);