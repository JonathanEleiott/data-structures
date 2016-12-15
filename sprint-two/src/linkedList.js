var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var storage = {};

  list.addToTail = function(value) {
    var temp = Node(value);
    list.tail = temp;
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
