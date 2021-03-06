(function(){

  'use strict';

  exports.addRest = function(app) {

    var express = require('express');
    var proxy = require('express-http-proxy');

    var router = express.Router(); 

    router.get('/', function (req, res) {
        res.send('Hello World!');
    });

    router.get('/:name', function (req, res) {
        res.send('Hello '+req.params.name);
    });

    app.use('/hello', router);

  }

})();
