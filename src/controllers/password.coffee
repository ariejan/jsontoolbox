module.exports = (app) ->

  class Password
    @generate : (length = 12, callback) ->
      chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
      length = Math.min(256, Math.abs(length))

      password = (chars[Math.floor(Math.random() * 62)] for i in [0...length]).join("")
      process.nextTick ->
        callback(null, password)

  #### GET /api/password
  # Generates a random password
  #
  # length - Length of the password, default: 12 (optional)
  app.get '/api/password', (req, res) ->
    res.contentType('application/json')

    Password.generate req.query.length, (err, password) ->
      res.send {"password":password}
