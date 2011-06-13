(function() {
  var fs;
  fs = require('fs');
  module.exports = function(app) {
    return app.get('/', function(req, res) {
      var data;
      res.contentType('application/json');
      data = {};
      data['name'] = "JSON Toolbox";
      data['url'] = "http://jsontoolbox.com";
      data['author'] = "Ariejan de Vroom";
      data['author_url'] = "http://ariejan.net";
      data['source_url'] = "https://github.com/ariejan/jsontoolbox";
      data['description'] = fs.readFileSync("" + __dirname + "/../../views/description.txt", 'utf8');
      data['api'] = app.api;
      return res.send(data);
    });
  };
}).call(this);
