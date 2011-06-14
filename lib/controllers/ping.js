(function() {
  module.exports = function(app) {
    app.api['/api/ping'] = "Responds to your ping, with a pong";
    return app.get('/api/ping', function(req, res) {
      res.contentType('application/json');
      return res.send({
        "pong": true
      });
    });
  };
}).call(this);
