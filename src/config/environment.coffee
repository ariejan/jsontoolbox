module.exports = (app, express) ->

  # app.configure ->

  app.configure 'development', () ->
    app.use express.logger()
    app.use express.errorHandler(
      dumpExceptions: true,
      showStack: true
    )

  app.configure 'test', () ->
    console.log('Loading test env')
    # app.use express.logger()
    app.use express.errorHandler(
      dumpExceptions: true,
      showStack: true
    )
