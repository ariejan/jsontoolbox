(function() {
  module.exports = function(app) {
    app.api['/app/ping'] = "Responds to your ping, with a pong";
    return app.get('/api/ping', function(req, res) {
      res.contentType('application/json');
      return res.send({
        "pong": true
      });
    });
  };
}).call(this);
