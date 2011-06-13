(function() {
  module.exports = function(app, express) {
    app.api = {};
    app.configure('development', function() {
      app.use(express.logger());
      return app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
      }));
    });
    return app.configure('test', function() {
      console.log('Loading test env');
      return app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
      }));
    });
  };
}).call(this);
