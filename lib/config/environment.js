(function() {
  module.exports = function(app, express) {
    app.configure(function() {
      return app.use(express.logger());
    });
    return app.configure('development', function() {
      return app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
      }));
    });
  };
}).call(this);
