(function(){

  'use strict';

  exports.addRest = function(app) {

    var proxy = require('express-http-proxy');

    app.get('/hello', function (req, res) {
        res.send('Hello World!');
    });

    app.get('/hello/:name', function (req, res) {
        res.send('Hello '+req.params.name);
    });

  }

})();
