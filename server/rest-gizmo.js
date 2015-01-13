(function(){

  'use strict';

  exports.addRest = function(app) {

    var express = require('express');
    var proxy = require('express-http-proxy');
    var service = require('./service-gizmo');

    var router = express.Router(); 

    router.get('/', function (req, res) {
        res.send('gizmos');
        service.sayHello();


    });

    app.use('/gizmos', router);

  }

})();
