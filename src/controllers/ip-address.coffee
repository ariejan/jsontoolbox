module.exports = (app) ->

  app.api['/api/ip'] = "Returns the clients IP address"

  #### GET /api/ip
  # Returns your IP address
  app.get '/api/ip', (req, res) ->
    res.contentType('application/json')
    ip = req.headers['x-real-ip']
    ip ?= req.client.remoteAddress

    res.send {"ip":ip}
