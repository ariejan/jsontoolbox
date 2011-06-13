fs = require('fs')

module.exports = (app) ->
  app.get '/', (req, res) ->
    res.contentType('application/json')

    data = {}

    data['name'] = "JSON Toolbox"
    data['url'] = "http://jsontoolbox.com"

    data['author'] = "Ariejan de Vroom"
    data['author_url'] = "http://ariejan.net"

    data['source_url'] = "https://github.com/ariejan/jsontoolbox"

    data['description'] = fs.readFileSync("#{__dirname}/../../views/description.txt", 'utf8')

    data['api'] = app.api

    res.send data
