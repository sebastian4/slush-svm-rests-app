(function(){

  'use strict';

  // main library initializations
  var express = require('express');
  var reloader = require('connect-livereload');
  var serveIndex = require('serve-index');
  var bodyParser = require("body-parser");
  var app = express();

  // server configurations
  app.use(bodyParser());
  // app.use(require('connect').bodyParser());
  // app.configure(function(){
  //   app.use(express.bodyParser());
  //   app.use(app.router);
  // });

  ////

  // add all rest apis
  var addRestApis = function() {

    // add hello rest
    require('./rest-hello').addRest(app);

    // add hi rest
    require('./rest-hi').addRest(app);

    // add earthquake proxy
    require('./proxy-earthquake').addRest(app);

    // add json placeholder proxy
    require('./proxy-jsonplaceholder').addRest(app);

    // add gizmo rest
    require('./rest-gizmo').addRest(app);

    // add todo rest
    require('./rest-todo').addRest(app);
  }

  ////

  // initializes server and pres
  var initializeServer = function() {

    // add reloading
    app.use(reloader());

    // add static pages
    app.use(express.static('./app'));
    app.use(serveIndex('./app', {'icons': true}));

    // start server
    app.listen(9000, function(){
      console.log('App Listening on localhost:9000');
    });

  }

  ////

  addRestApis();
  initializeServer();

})();
