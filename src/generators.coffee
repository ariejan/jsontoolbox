generatePassword = (length = 12) ->
  chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  length = Math.min(256, Math.abs(length))
  (chars[Math.floor(Math.random() * 62)] for i in [0...length]).join("")

exports.password = generatePassword
