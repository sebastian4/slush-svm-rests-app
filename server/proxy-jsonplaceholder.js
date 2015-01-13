(function(){

  'use strict';

  exports.addRest = function(app) {

    var proxy = require('express-http-proxy');

    app.use('/jsph', proxy('jsonplaceholder.typicode.com', {
      forwardPath: function(req, res) {
        return require('url').parse(req.url).path;
      }
    }));
    // http://jsonplaceholder.typicode.com/todos/

  }

})();