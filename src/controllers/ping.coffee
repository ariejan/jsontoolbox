module.exports = (app) ->

  app.api['/app/ping'] = "Responds to your ping, with a pong"

  app.get '/api/ping', (req, res) ->
    res.contentType('application/json')
    res.send {"pong":true}
