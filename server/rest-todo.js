(function(){

  'use strict';

  exports.addRest = function(app) {

    var express = require('express');
    var proxy = require('express-http-proxy');
    var service = require('./service-todo');

    var router = express.Router();

    router.get('/test', function (req, res) {
        console.log("todos testing");
        service.sayHello();
        console.log(service.getAll());
        service.add({ id: 999, description: "cook spagetti" });
        service.add({ id: 998, description: "wash car" });
        service.add({ id: 997, description: "visit john" });
        console.log(service.getAll());
        console.log(service.get(998));
        service.remove(997);
        console.log(service.getAll());
        service.update({ id: 999, description: "cook spagetti on low" });
        console.log(service.getAll());
        res.send('todos testing');
    });

    router.get('/', function (req, res) {
        console.log("todos get all");
        res.send(service.getAll());
    });

    router.get('/:id', function (req, res) {
        console.log("todos get "+req.params.id);
        res.send(service.get(req.params.id));
    });

    router.post('/', function (req, res) {
        console.log("todos post");
        console.log(req.body);
        service.add(req.body);
        res.send({ message: 'todo added' });
    });

    router.put('/:id', function (req, res) {
        console.log("todos put "+req.params.id);
        service.update(req.body);
        res.send({ message: 'todo updated' });
    });

    router.delete('/:id', function (req, res) {
        console.log("todos delete "+req.params.id);
        service.remove(req.params.id);
        res.send({ message: 'todo deleted' });
    });

    app.use('/todos', router);

  }

})();
