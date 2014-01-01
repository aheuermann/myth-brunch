var path = require('path'),
  fs = require('fs'),
  expect = require('chai').expect,
  MythPlugin = require('../');

describe('MythBrunchPlugin', function(){
  var plugin;

  beforeEach(function() {
    plugin = new MythPlugin();
  });

  it('should be an object', function() {
    expect(plugin).to.be.ok;
  });

  it('should have a compile method', function() {
    expect(plugin.compile).to.be.an.instanceof(Function);
  });

  it('should compile and produce valid result', function(done) {
    var input = {data:readFile('input.css')};
    var expected = readFile('expected.css');

    plugin.compile(input, function(error, data) {
      expect(error).not.to.be.ok;
      expect(data.trim()).to.eql(expected.trim());
      done();
    });
  });
});

function readFile(filename) {
  var file = path.resolve(__dirname, filename);
  return fs.readFileSync(file, 'utf8');
}