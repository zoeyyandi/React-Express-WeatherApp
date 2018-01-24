var fs = require('fs');
var JSONStream = require('JSONStream');

var getStream = function() {
  var stream = fs.createReadStream(__dirname + '/city.list.json', {
    encoding: 'utf8'
  });
  var parser = JSONStream.parse('*');
  return stream.pipe(parser);
};

module.exports = getStream;
