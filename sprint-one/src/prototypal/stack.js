var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  
  instance.howMany = 0;

  return instance;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.howMany;
}
