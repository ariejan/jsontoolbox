(function() {
  var express;
  express = require('express');
  exports.setupApp = function(app, expres) {
    require('./config/environment')(app, express);
    require('./controllers/password')(app);
    require('./controllers/ip-address')(app);
    require('./controllers/user-agent')(app);
    require('./controllers/ping')(app);
    return require('./controllers/frontpage')(app);
  };
}).call(this);
