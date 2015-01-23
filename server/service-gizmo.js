(function(){

  'use strict';

  var gizmos = [];
  
  var gizIndex = 1000;

  exports.sayHello = function() {
    console.log("hello from gizmo");
  }

  exports.add = function(gizmo) {
	  if (typeof gizmo.id === 'undefined'){
		  gizmo.id = gizIndex;
		  gizIndex++;
	   } else if (gizmo.id == 0) {
 		  gizmo.id = gizIndex;
 		  gizIndex++;
	   }
	   gizmos.push(gizmo);
  }

  exports.getAll = function() {
    return gizmos;
  }

  exports.get = function(gid) {
    for (var i = 0; i < gizmos.length; i++) {
        if (gizmos[i].id == gid) {
          return gizmos[i];
        }
    }
    return null;
  }

  exports.remove = function(gid) {
    var index = findIndex(gid);
    if (index > -1) {
      gizmos.splice(index,1);
    }
  }

  exports.update = function(gizmo) {
    var index = findIndex(gizmo.id);
    if (index > -1) {
      gizmos.splice(index,1,gizmo);
    }
  }

  var findIndex = function(gid) {
    for (var i = 0; i < gizmos.length; i++) {
        if (gizmos[i].id == gid) {
          return i;
        }
    }
    return -1;
  }

})();