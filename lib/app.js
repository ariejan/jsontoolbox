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
    console.log(req.client.remoteAddress);
    return res.send({
      "ip": req.client.remoteAddress
    });
  });
  app.listen(appPort, function() {
    return console.log("JSON Toolkit ready on http://localhost:" + appPort);
  });
}).call(this);
