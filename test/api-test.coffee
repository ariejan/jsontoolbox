express     = require('express')
zombie      = require('zombie')
vows        = require('vows')
should      = require('should')

app         = express.createServer()

testPort    = 50666

process.env.NODE_ENV = 'test'

vows
  .describe('API Service')
  .addBatch
    'start test server':
      topic: ->
        require('../src/config/environment')(app, express)
        require('../src/controllers/password')(app)
        require('../src/controllers/ip-address')(app)
        require('../src/controllers/user-agent')(app)
        require('../src/controllers/ping')(app)
        require('../src/controllers/frontpage')(app)
        app.listen testPort, this.callback
      'should have started': -> null

  .addBatch
    #### Ping
    'Ping':
      topic: -> zombie.visit("http://localhost:#{testPort}/api/ping", this.callback)

      'should respond with pong': (browser) ->
        JSON.parse(browser.text('body'))['pong'].should.be.true

    #### IP Address
    'IP Address':
      topic: -> zombie.visit("http://localhost:#{testPort}/api/ip", this.callback)

      'should report client IP address as 127.0.0.1': (browser) ->
        JSON.parse(browser.text('body'))['ip'].should.equal('127.0.0.1')

    #### User Agent
    'User agent':
      topic: -> zombie.visit("http://localhost:#{testPort}/api/user-agent", this.callback)

      'should report the user agent string': (browser) ->
        JSON.parse(browser.text('body'))['user-agent'].should.include.string('Zombie.js')

    #### Random Password
    "Random password":
      'with default length':
        topic: -> zombie.visit("http://localhost:#{testPort}/api/password", this.callback)

        'should receive a valid response': (browser) ->
          browser.statusCode.should.equal(200)

        'should receive a password of length 12 by default': (browser) ->
          JSON.parse(browser.text('body'))['password'].length.should.equal(12)

      'with length 40':
        topic: -> zombie.visit("http://localhost:#{testPort}/api/password?length=40", this.callback)

        'should receive a password of length 40': (browser) ->
          JSON.parse(browser.text('body'))['password'].length.should.equal(40)

      'with a length > 256':
        topic: -> zombie.visit("http://localhost:#{testPort}/api/password?length=5028", this.callback)

        'should receive a password of length 256': (browser) ->
          JSON.parse(browser.text('body'))['password'].length.should.equal(256)

      'with a negative length of -32':
        topic: -> zombie.visit("http://localhost:#{testPort}/api/password?length=-32", this.callback)

        'should receive a password of length 32': (browser) ->
          JSON.parse(browser.text('body'))['password'].length.should.equal(32)

  .addBatch
    'stop test server':
      topic: -> app.close(); return true
      'should have stopped': -> null

  .export(module)
