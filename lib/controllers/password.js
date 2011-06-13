(function() {
  module.exports = function(app) {
    var Password;
    Password = require('../models/password');
    return app.get('/api/password', function(req, res) {
      res.contentType('application/json');
      return Password.generate(req.query.length, function(password) {
        return res.send({
          "password": password
        });
      });
    });
  };
}).call(this);
