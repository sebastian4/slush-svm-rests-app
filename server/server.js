(function(){

  'use strict';

  var express = require('express');
  var reloader = require('connect-livereload');
  var proxy = require('express-http-proxy');
  var app = express();

  app.get('/hello', function (req, res) {
      res.send('Hello World!');
  });

  app.use('/quake', proxy('earthquake.usgs.gov', {
    forwardPath: function(req, res) {
      var newurl = '/earthquakes/feed/v1.0/summary'+req.url
      console.log(newurl);
      return require('url').parse(newurl).path;
    }
  }));
  // earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson

  app.use('/jsph', proxy('jsonplaceholder.typicode.com', {
    forwardPath: function(req, res) {
      return require('url').parse(req.url).path;
    }
  }));
  // http://jsonplaceholder.typicode.com/todos/

  app.use(reloader());
  app.use(express.static('./app'));

  app.listen(9000, function(){
    console.log('App Listening on localhost:9000');
  });

})();