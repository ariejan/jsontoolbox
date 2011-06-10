vows = require 'vows'
assert = require 'assert'

theGenerators = require('../src/generators')

Password = theGenerators.Password

vows
  .describe('Generators')
  .addBatch
    'Password':
      topic: new(Password),

      'with default length':
        topic: (passwd) ->
          passwd.generate(null, this.callback)

        'should have length 12': (err, password) ->
          assert.equal 12, password.length

      'with length 40':
        topic: (passwd) ->
          passwd.generate(40, this.callback)

        'should have length 40': (err, password) ->
          assert.equal 40, password.length

      'with length > 256':
        topic: (passwd) ->
          passwd.generate(340, this.callback)

        'should have length 256': (err, password) ->
          assert.equal 256, password.length

      'with length < 0':
        topic: (passwd) ->
          passwd.generate(-20, this.callback)

        'should have length abs(-20)': (err, password) ->
          assert.equal 20, password.length

  .export(module)
