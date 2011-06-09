(function() {
  var generatePassword;
  generatePassword = function(length) {
    var chars, i;
    if (length == null) {
      length = 12;
    }
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    length = Math.min(256, Math.abs(length));
    return ((function() {
      var _results;
      _results = [];
      for (i = 0; 0 <= length ? i < length : i > length; 0 <= length ? i++ : i--) {
        _results.push(chars[Math.floor(Math.random() * 62)]);
      }
      return _results;
    })()).join("");
  };
  exports.password = generatePassword;
}).call(this);
