(function(){

  'use strict';

  exports.addRest = function(app) {

    var express = require('express');
    var proxy = require('express-http-proxy');

    var router = express.Router(); 

    router.get('/', function (req, res) {
        res.send('Hi World!');
    });

    router.get('/:name', function (req, res) {
        res.send('Hi '+req.params.name);
    });

    app.use('/hi', router);

  }

})();
