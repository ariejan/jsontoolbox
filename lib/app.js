(function() {
  var app, express, serverPort;
  express = require('express');
  app = module.exports = express.createServer();
  serverPort = process.env.PORT || 3000;
  require('./config/environment')(app, express);
  require('./controllers/password')(app);
  require('./controllers/ip-address')(app);
  require('./controllers/user-agent')(app);
  require('./controllers/frontpage')(app);
  app.listen(serverPort, function() {
    return console.log("JSON Toolkit ready on http://localhost:" + serverPort);
  });
}).call(this);
