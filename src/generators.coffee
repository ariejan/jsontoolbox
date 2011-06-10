class exports.Password
  generate: (length = 12, callback) ->
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    length = Math.min(256, Math.abs(length))

    password = (chars[Math.floor(Math.random() * 62)] for i in [0...length]).join("")
    process.nextTick ->
      callback(null, password)
