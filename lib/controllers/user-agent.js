(function() {
  module.exports = function(app) {
    return app.get('/api/user-agent', function(req, res) {
      res.contentType('application/json');
      return res.send({
        "user-agent": req.headers['user-agent']
      });
    });
  };
}).call(this);
