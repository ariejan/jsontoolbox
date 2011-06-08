(function() {
  var app, appPort, express, generatePassword, http;
  http = require('http');
  express = require('express');
  app = express.createServer(express.logger());
  appPort = process.env.PORT || 3000;
  generatePassword = function(length) {
    var chars, i;
    if (length == null) {
      length = 12;
    }
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    length = Math.min(256, Math.abs(length));
    return ((function() {
      var _results;
      _results = [];
      for (i = 0; 0 <= length ? i < length : i > length; 0 <= length ? i++ : i--) {
        _results.push(chars[Math.floor(Math.random() * 62)]);
      }
      return _results;
    })()).join("");
  };
  app.get('/', function(req, res) {
    return res.send("JSON Toolkit - Generate stuff in JSON format!");
  });
  app.get('/api/password', function(req, res) {
    res.contentType('application/json');
    return res.send({
      "password": generatePassword(req.query.length)
    });
  });
  app.listen(appPort(function() {
    return console.log("JSON Toolkit ready on http://localhost:" + appPort);
  }));
}).call(this);
