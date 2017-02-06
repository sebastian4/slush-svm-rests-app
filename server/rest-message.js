(function(){

  'use strict';

  exports.addRest = function(app) {

    var express = require('express');
    var proxy = require('express-http-proxy');

    var router = express.Router(); 

    router.get('/', function (req, res) {
        console.log('server message get');
        res.send('server message');
    });

    router.get('/:name', function (req, res) {
        console.log('server message get hello');
        res.send('Hello '+req.params.name);
    });
    
    router.post('/', function (req, res) {
        console.log("server message post");
        console.log(req.body);
        res.send({ response: 'ok' });
    });

    app.use('/message', router);

  }

})();
