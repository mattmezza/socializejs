// call the packages we need
var config  = require('../../config'); // get our config file
var neo4j   = require('node-neo4j');
db          = new neo4j(config.database);

exports.friends = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.unfriend = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.friend = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}
