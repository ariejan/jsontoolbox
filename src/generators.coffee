class Generator
  password: (length = 12, callback) =>
    # callback ?= noop

    console.log("Generating password with length #{length}")

    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    length = Math.min(256, Math.abs(length))

    password = (chars[Math.floor(Math.random() * 62)] for i in [0...length]).join("")
    callback(password)

    return (this)

exports.createGenerator = () ->
  new Generator()
