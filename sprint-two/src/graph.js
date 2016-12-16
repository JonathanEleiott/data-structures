

// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
   
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.nodes[node]) {
    return true;
  } 
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (var key in this.nodes) {
    if (this.nodes[key].indexOf(node) > -1) {
      this.nodes[key][this.nodes[key].indexOf(node)] = null;
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.nodes[fromNode].indexOf(toNode) > -1) {
    return true;
  } 
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this.nodes[fromNode].indexOf(toNode);
  this.nodes[fromNode][index] = null;
  index = this.nodes[toNode].indexOf(fromNode);
  this.nodes[toNode][index] = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var result, key;
  for (key in this.nodes) {
    result = cb(key);

  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addNode : constant, because no matter how many nodes there are it will take same amount of operations.
    contains : linear, because it will have to check each node to see if it contains proper value.
    removeNode : linear, because it must loop through each key in order to remove the proper node from its array.
    hasEdge : linear, because the fromNode has to loop through its array of edges to if it contains toNode.
    addEdge : linear, because it will loop through the nodes and push the value of the other node.
    removeEdge : linear, because it will loop through the nodes and set the value of the other node to null.
    forEachNode : linear, because it will loop through the nodes and call the cb function on each node.
 */

// var connectToFive = function(item) {
//   graph.addEdge(item, 5);
// };

// graph.addNode(5);
// graph.addNode(2);
// graph.addNode(1);
// graph.addNode(3);
// graph.forEachNode(connectToFive);
// expect(graph.hasEdge(2, 5)).to.equal(true);
// expect(graph.hasEdge(1, 5)).to.equal(true);
// expect(graph.hasEdge(3, 5)).to.equal(true);
// expect(graph.hasEdge(5, 5)).to.equal(true);

