(function() {
  module.exports = function(app) {
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
