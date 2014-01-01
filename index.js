var sysPath = require('path');
var myth = require('myth');

function MythProcessor(config) {
  //no config options for now...
}

MythProcessor.prototype.brunchPlugin = true;
MythProcessor.prototype.type = 'stylesheet';
MythProcessor.prototype.extension='css';

MythProcessor.prototype.compile = function(params, callback) {
  var results, error;
  try {
    results = myth(params.data);
  } catch (_error) {
    error = 'Myth processor failed on ' + params.path + ': ' + _error;
  } finally {
    callback(error, results);
  }
};

module.exports = MythProcessor;
