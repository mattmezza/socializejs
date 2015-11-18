// call the packages we need
var config  = require('../../config'); // get our config file
var neo4j   = require('node-neo4j');
db          = new neo4j(config.database);

exports.like = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.unlike = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.likes = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.update = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.delete = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}

exports.reply = function(req, res, next) {
  res.json({result:"KO", msg: "Not yet implemented."})
}
