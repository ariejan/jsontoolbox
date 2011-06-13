module.exports = (app) ->
  app.get '/api/user-agent', (req, res) ->
    res.contentType('application/json')
    res.send {"user-agent":req.headers['user-agent']}
