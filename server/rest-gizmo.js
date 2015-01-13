(function(){

  'use strict';

  exports.addRest = function(app) {

    var express = require('express');
    var proxy = require('express-http-proxy');
    var service = require('./service-gizmo');

    var router = express.Router(); 

    router.get('/test', function (req, res) {
        res.send('testing gizmos');
        
        service.sayHello();

        console.log(service.getAll());

        service.add({ id: 111, description: "its 111" });
        service.add({ id: 112, description: "its 112" });
        service.add({ id: 113, description: "its 113" });

        console.log(service.getAll());

        console.log(service.get(111));

        service.remove(112);

        console.log(service.getAll());

        service.update({ id: 113, description: "its 113 tt" });

        console.log(service.getAll());
    });

    router.get('/', function (req, res) {
        res.send('gizmos');

    });

    app.use('/gizmos', router);

  }

})();
