(function(){

  'use strict';

  exports.addRest = function(app) {

    var express = require('express');
    var proxy = require('express-http-proxy');
    var service = require('./service-gizmo');

    var router = express.Router(); 

    router.get('/test', function (req, res) {
        console.log("gizmos testing");
        service.sayHello();
        console.log(service.getAll());
        service.add({ id: 110, description: "its 110" });
        service.add({ id: 111, description: "its 111" });
        service.add({ id: 112, description: "its 112" });
        service.add({ id: 113, description: "its 113" });
        console.log(service.getAll());
        console.log(service.get(111));
        service.remove(112);
        console.log(service.getAll());
        service.update({ id: 113, description: "its 113 tt" });
        console.log(service.getAll());

        res.send('gizmos testing');
    });

    router.get('/', function (req, res) {
        console.log("gizmos get all");
        res.send(service.getAll());
    });

    router.get('/:id', function (req, res) {
        console.log("gizmos get "+req.params.id);
        res.send(service.get(req.params.id));
    });

    router.post('/', function (req, res) {
        console.log("gizmos post");
        console.log(req.body);
        service.add(req.body);
        res.send({ message: 'gizmo added' });
    });

    router.put('/:id', function (req, res) {
        console.log("gizmos put "+req.params.id);
        service.update(req.body);
        res.send({ message: 'gizmo updated' });
    });

    router.delete('/:id', function (req, res) {
        console.log("gizmos delete "+req.params.id);
        service.remove(req.params.id);
        res.send({ message: 'gizmo deleted' });
    });

    app.use('/gizmos', router);

  }

})();
