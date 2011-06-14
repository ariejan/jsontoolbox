(function() {
  module.exports = function(app) {
    var Password;
    app.api['/api/password'] = "Generates a random password of length 12";
    app.api['/api/password?length=N'] = "Generates a random password of length N; 0 < N < 256";
    Password = (function() {
      function Password() {}
      Password.generate = function(length, callback) {
        var chars, i, password;
        if (length == null) {
          length = 12;
        }
        chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        length = Math.min(256, Math.abs(length));
        password = ((function() {
          var _results;
          _results = [];
          for (i = 0; 0 <= length ? i < length : i > length; 0 <= length ? i++ : i--) {
            _results.push(chars[Math.floor(Math.random() * 62)]);
          }
          return _results;
        })()).join("");
        return process.nextTick(function() {
          return callback(null, password);
        });
      };
      return Password;
    })();
    return app.get('/api/password', function(req, res) {
      res.contentType('application/json');
      return Password.generate(req.query.length, function(err, password) {
        return res.send({
          "password": password
        });
      });
    });
  };
}).call(this);
