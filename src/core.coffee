express = require('express')

# Controllers
exports.setupApp = (app, expres) ->
  require('./config/environment')(app, express)
  require('./controllers/password')(app)
  require('./controllers/ip-address')(app)
  require('./controllers/user-agent')(app)
  require('./controllers/ping')(app)
  require('./controllers/frontpage')(app)
