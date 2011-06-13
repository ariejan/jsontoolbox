(function() {
  var Password;
  Password = function() {};
  Password.prototype.generate = function(length, callback) {
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
}).call(this);
