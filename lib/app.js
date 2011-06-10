(function() {
  var app, appPort, express, generator, http;
  http = require('http');
  express = require('express');
  app = express.createServer(express.logger());
  generator = require('./generators').createGenerator();
  appPort = process.env.PORT || 3000;
  app.get('/', function(req, res) {
    res.contentType('application/json');
    return res.send({
      "introduction": "JSON Toolkit - Generate stuff in JSON format!"
    });
  });
  app.get('/api/password', function(req, res) {
    res.contentType('application/json');
    console.log("--> " + req.query.length);
    return generator.password(req.query.length, function(password) {
      return res.send({
        "password": password
      });
    });
  });
  app.get('/api/ip', function(req, res) {
    var ip;
    res.contentType('application/json');
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
    res.contentType('application/json');
    return res.send({
      "user-agent": req.headers['user-agent']
    });
  });
  app.listen(appPort, function() {
    return console.log("JSON Toolkit ready on http://localhost:" + appPort);
  });
}).call(this);
