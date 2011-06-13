(function() {
  module.exports = function(app) {
    return app.get('/', function(req, res) {
      res.contentType('application/json');
      return res.send({
        "introduction": "JSON Toolkit - Generate stuff in JSON format!"
      });
    });
  };
}).call(this);
