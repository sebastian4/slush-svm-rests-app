(function(){

  'use strict';

  // main library initializations
  var express = require('express');
  var reloader = require('connect-livereload');
  var app = express();

  ////

  // add all rest apis
  var addRestApis = function() {

    // add hello rest
    var restHello = require('./rest-hello');
    restHello.addRest(app);

    // add earthquake proxy
    var proxyEarthquake = require('./proxy-earthquake');
    proxyEarthquake.addRest(app);

    // add json placeholder proxy
    var proxyJsonPlaceholder = require('./proxy-jsonplaceholder');
    proxyJsonPlaceholder.addRest(app);

  }

  // initializes server and pres
  var initializeServer = function() {

    // add reloading
    app.use(reloader());

    // add static pages
    app.use(express.static('./app'));

    // start server
    app.listen(9000, function(){
      console.log('App Listening on localhost:9000');
    });

  }

  ////

  addRestApis();
  initializeServer();

})();