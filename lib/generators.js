(function() {
  var Generator;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  Generator = (function() {
    function Generator() {
      this.password = __bind(this.password, this);
    }
    Generator.prototype.password = function(length, callback) {
      var chars, i, password;
      if (length == null) {
        length = 12;
      }
      console.log("Generating password with length " + length);
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
      callback(password);
      return this;
    };
    return Generator;
  })();
  exports.createGenerator = function() {
    return new Generator();
  };
}).call(this);
