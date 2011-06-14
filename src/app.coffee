express     = require('express')
app         = module.exports = express.createServer()
core        = require("#{__dirname}/core")

# Select serer port
serverPort = process.env.PORT || 3000

core.setupApp(app, express)

app.listen serverPort, () ->
  console.log("JSON Toolkit ready on http://localhost:#{serverPort}")
