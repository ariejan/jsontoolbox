express = require('express')
app     = module.exports = express.createServer()

# Select serer port
serverPort = process.env.PORT || 3000

# Controllers
require('./config/environment')(app, express)
require('./controllers/password')(app)
require('./controllers/ip-address')(app)
require('./controllers/user-agent')(app)
require('./controllers/frontpage')(app)

app.listen serverPort, () ->
  console.log("JSON Toolkit ready on http://localhost:#{serverPort}")
