module.exports = (app) ->

  app.api['/api/user-agent'] = "Returns the clients user-agent string"

  app.get '/api/user-agent', (req, res) ->
    res.contentType('application/json')
    res.send {"user-agent":req.headers['user-agent']}
