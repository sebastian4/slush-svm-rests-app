(function(){

  'use strict';

  exports.addRest = function(app) {

    var proxy = require('express-http-proxy');

    app.use('/quake', proxy('earthquake.usgs.gov', {
      forwardPath: function(req, res) {
        var newurl = '/earthquakes/feed/v1.0/summary'+req.url
        console.log(newurl);
        return require('url').parse(newurl).path;
      }
    }));
    // earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson

  }

})();
