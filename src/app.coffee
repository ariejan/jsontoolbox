http    = require 'http'
express = require 'express'
app     = express.createServer(express.logger())

appPort = process.env.PORT || 3000

# Generates a random password of given +length+
# using a-zA-Z0-9
generatePassword = (length = 12) ->
  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  length = Math.min(256, Math.abs(length))
  (chars[Math.floor(Math.random() * 62)] for i in [0...length]).join("")

app.get '/', (req, res) ->
  res.send("JSON Toolkit - Generate stuff in JSON format!")

# Generate a random password using characters a-zA-Z0-9
#
# @param length The length or the password, 0..256, default 12
# @result Hash {"password":"the_generated_password"}
app.get '/api/password', (req, res) ->
  res.contentType('application/json')
  res.send {"password":generatePassword(req.query.length)}

app.listen appPort, ->
  console.log("JSON Toolkit ready on http://localhost:#{appPort}")


