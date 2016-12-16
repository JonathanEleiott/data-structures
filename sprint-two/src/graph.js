

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
  this.nodes[fromNode].indexOf(toNode) = null;
  this.nodes[toNode].indexOf(fromNode) = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// graph.addNode(4);
// graph.addNode(5);
// graph.addEdge(5, 4);
// expect(graph.hasEdge(4, 5)).to.equal(true);
// graph.removeEdge(5, 4);
// expect(graph.hasEdge(4, 5)).to.equal(false);