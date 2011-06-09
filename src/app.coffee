http       = require 'http'
express    = require 'express'
app        = express.createServer(express.logger())

generators = require './generators'

appPort = process.env.PORT || 3000

app.get '/', (req, res) ->
  res.send("JSON Toolkit - Generate stuff in JSON format!")

#### GET /api/password
# Generates a random password
#
# length - Length of the password, default: 12 (optional)
app.get '/api/password', (req, res) ->
  res.contentType('application/json')
  res.send {"password":generators.password(req.query.length)}

#### GET /api/ip
# Returns your IP address
app.get '/api/ip', (req, res) ->
  console.log req
  res.send {"ip":req.connection.remoteAddress}

app.listen appPort, ->
  console.log("JSON Toolkit ready on http://localhost:#{appPort}")


