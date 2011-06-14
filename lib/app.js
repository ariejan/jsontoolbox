(function() {
  var app, core, express, serverPort;
  express = require('express');
  app = module.exports = express.createServer();
  core = require("" + __dirname + "/core");
  serverPort = process.env.PORT || 3000;
  core.setupApp(app, express);
  app.listen(serverPort, function() {
    return console.log("JSON Toolkit ready on http://localhost:" + serverPort);
  });
}).call(this);
