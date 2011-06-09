(function() {
  var app, appPort, express, generators, http;
  http = require('http');
  express = require('express');
  app = express.createServer(express.logger());
  generators = require('./generators');
  appPort = process.env.PORT || 3000;
  app.get('/', function(req, res) {
    return res.send("JSON Toolkit - Generate stuff in JSON format!");
  });
  app.get('/api/password', function(req, res) {
    res.contentType('application/json');
    return res.send({
      "password": generators.password(req.query.length)
    });
  });
  app.get('/api/ip', function(req, res) {
    var ip;
    ip = req.headers['x-real-ip'];
        if (ip != null) {
      ip;
    } else {
      ip = req.client.remoteAddress;
    };
    return res.send({
      "ip": ip
    });
  });
  app.get('/api/user-agent', function(req, res) {
    return res.send({
      "user-agent": req.headers['user-agent']
    });
  });
  app.listen(appPort, function() {
    return console.log("JSON Toolkit ready on http://localhost:" + appPort);
  });
}).call(this);
