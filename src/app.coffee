http       = require 'http'
express    = require 'express'
app        = express.createServer(express.logger())

generator  = require('./generators').createGenerator()

appPort = process.env.PORT || 3000

app.get '/', (req, res) ->
  res.contentType('application/json')
  res.send {"introduction":"JSON Toolkit - Generate stuff in JSON format!"}

#### GET /api/password
# Generates a random password
#
# length - Length of the password, default: 12 (optional)
app.get '/api/password', (req, res) ->
  res.contentType('application/json')
  console.log("--> #{req.query.length}")
  generator.password req.query.length, (password) ->
    res.send {"password":password}

#### GET /api/ip
# Returns your IP address
app.get '/api/ip', (req, res) ->
  res.contentType('application/json')
  ip = req.headers['x-real-ip']
  ip ?= req.client.remoteAddress

  res.send {"ip":ip}

app.get '/api/user-agent', (req, res) ->
  res.contentType('application/json')
  res.send {"user-agent":req.headers['user-agent']}

app.listen appPort, ->
  console.log("JSON Toolkit ready on http://localhost:#{appPort}")


