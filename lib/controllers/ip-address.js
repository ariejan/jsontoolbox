(function() {
  module.exports = function(app) {
    app.api['/api/ip'] = "Returns the clients IP address";
    return app.get('/api/ip', function(req, res) {
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
  };
}).call(this);
