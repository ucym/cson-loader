cson = require 'cson'

module.exports = (contents) ->
  @cacheable?()
  "module.exports = " + JSON.stringify cson.parse contents
