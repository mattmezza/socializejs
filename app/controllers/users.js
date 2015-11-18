// call the packages we need
var config  = require('../../config'); // get our config file
var neo4j   = require('node-neo4j');
db          = new neo4j(config.database);

exports.following = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.followers = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.friends = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}
