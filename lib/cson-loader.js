var cson;

cson = require('cson');

module.exports = function(contents) {
  if (typeof this.cacheable === "function") {
    this.cacheable();
  }
  return "module.exports = " + JSON.stringify(cson.parse(contents));
};
