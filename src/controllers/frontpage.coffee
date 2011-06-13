module.exports = (app) ->
  app.get '/', (req, res) ->
    res.contentType('application/json')
    res.send {"introduction":"JSON Toolkit - Generate stuff in JSON format!"}
