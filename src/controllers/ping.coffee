module.exports = (app) ->
  app.get '/api/ping', (req, res) ->
    res.contentType('application/json')
    res.send {"pong":true}
