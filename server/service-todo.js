(function(){

  'use strict';

  var todos = [
    { id: 1000, title: 'buy a comb', completed: true },
    { id: 1001, title: 'get a haircut', completed: false }
  ];

  var todoIndex = 1002;

  /// todos instead of todos
  /// from here do angular and backbone and backbone.marionette

  exports.sayHello = function() {
    console.log("hello from todos");
  }

  exports.add = function(todo) {
	  if (typeof todo.id === 'undefined'){
		  todo.id = todoIndex;
		  todoIndex++;
	   } else if (todo.id == 0) {
 		  todo.id = todoIndex;
 		  todoIndex++;
	   }
	   todos.push(todo);
  }

  exports.getAll = function() {
    return todos;
  }

  exports.get = function(gid) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == gid) {
          return todos[i];
        }
    }
    return null;
  }

  exports.remove = function(gid) {
    var index = findIndex(gid);
    if (index > -1) {
      todos.splice(index,1);
    }
  }

  exports.update = function(todo) {
    var index = findIndex(todo.id);
    if (index > -1) {
      todos.splice(index,1,todo);
    }
  }

  var findIndex = function(gid) {
    for (var i = 0; i < todos.length; i++) {
        if (todos[i].id == gid) {
          return i;
        }
    }
    return -1;
  }

})();
